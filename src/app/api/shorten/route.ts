import { NextRequest } from "next/server";
import { Pool } from "pg";

// Set up a PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Add your PostgreSQL connection string in .env.local
  ssl: {
    rejectUnauthorized: false,
  },
});

// Rate limiting store
const rateLimitStore: {
  [key: string]: { count: number; lastRequest: number };
} = {};

const RATE_LIMIT_WINDOW = 30 * 1000;
const MAX_REQUESTS = 1000;

function setCooldown(ip: string) {
  const currentTime = Date.now();
  rateLimitStore[ip] = { count: 1, lastRequest: currentTime };
}

async function shortenURL(url: string) {
  const client = await pool.connect();
  try {
    const data = await client.query("SELECT * FROM urldata WHERE url = $1 LIMIT 1", [url]);
    if (data.rows.length > 0) {
      return data.rows[0].shorturl;
    }
    const shortpath =
      Date.now().toString(36).slice(-4) +
      Math.random().toString(36).substring(2, 6);
    await client.query("INSERT INTO urldata (url, shorturl) VALUES ($1, $2)", [url, shortpath]);
    return shortpath;
  } finally {
    client.release(); // Release the connection back to the pool
  }
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || request.ip || "unknown";
  const currentTime = Date.now();

  if (rateLimitStore[ip]) {
    const { count, lastRequest } = rateLimitStore[ip];
    if (currentTime - lastRequest < RATE_LIMIT_WINDOW) {
      if (count >= MAX_REQUESTS) {
        return new Response("Too Many Requests", { status: 429 });
      }
      rateLimitStore[ip].count += 1;
    } else {
      setCooldown(ip);
    }
  } else {
    setCooldown(ip);
  }

  const { url } = await request.json();
  if (!url) {
    return new Response("URL not passed!", { status: 400 });
  }
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return new Response("Invalid URL!", { status: 400 });
  }

  let data: { shorturl: string };
  if (url.startsWith(request.nextUrl.origin)) {
    data = { shorturl: url };
  } else {
    const shortpath = await shortenURL(url);
    data = { shorturl: `${request.nextUrl.origin}/${shortpath}` };
  }

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
