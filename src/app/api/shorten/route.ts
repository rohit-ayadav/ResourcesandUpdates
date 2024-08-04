import { NextRequest } from "next/server";
import {sql} from "@vercel/postgres";


const rateLimitStore: { [key: string]: { count: number, lastRequest: number } } = {};
const RATE_LIMIT_WINDOW = 30 * 1000;
const MAX_REQUESTS = 1000;


function setCooldown(ip: string){
    const currentTime = Date.now();
    rateLimitStore[ip] = {count: 1, lastRequest: currentTime};
}

async function shortenURL(url: string) {
    const data = await sql`Select * from urldata where url=${url} limit 1`;
    if (data.rows.length > 0){
        return data.rows[0].shorturl;
    }
    const shortpath = Date.now().toString(36).slice(-4) + Math.random().toString(36).substring(2, 6);
    await sql`Insert into urldata (url, shorturl) values (${url}, ${shortpath})`;
    return shortpath;
}

export async function POST(request: NextRequest) {
    const ip = request.headers.get('x-forwarded-for') || request.ip || 'unknown';
    const currentTime = Date.now();

    if (rateLimitStore[ip]){
        const {count, lastRequest} = rateLimitStore[ip];
        if (currentTime - lastRequest < RATE_LIMIT_WINDOW){
            if (count >= MAX_REQUESTS){
                return new Response("Too Many Requests", {status: 429});
            }
            rateLimitStore[ip].count += 1;
        } else {
            setCooldown(ip);
        }
    } else {
        setCooldown(ip);
    }

    const url = (await request.json()).url;
    if (!url) {
        return new Response("URL not passed ! noob !", {status: 400});
    }
    if (!url.startsWith('http://') && !url.startsWith('https://')){
        return new Response("Invalid URL ! noob !", {status: 400});
    }
    const shortpath = await shortenURL(url);
    const data = {
        "shorturl": `${request.nextUrl.origin}/${shortpath}`
    }
    return new Response(JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json"
        }
    });
}
