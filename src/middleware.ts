import { NextRequest } from "next/server";
import { sql } from "@vercel/postgres";

export async function middleware(request: NextRequest) {
    let paths = request.nextUrl.pathname.split('/');
    paths = paths.filter(s => s.length > 0);
    if (paths.length > 1){
        return
    }
    const shortpath = paths[0];
    if (!shortpath){
        return
    }
    
    const data = await sql`Select * from urldata where shorturl=${shortpath} limit 1`;
    if (data.rows.length > 0){
        return new Response(null, {
            status: 301,
            headers: {
                "Location": data.rows[0].url
            }
        });
    }

}
export const config = {
    matcher: [
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}