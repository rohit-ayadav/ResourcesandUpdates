import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
    return new Response(`API route is ${request.nextUrl.origin}/api/shorten, use POST method to shorten URL\nFrontend is not added.`);
}