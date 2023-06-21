import { NextResponse } from "next/server";

export const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};
// This function can be marked `async` if using `await` inside
export async function middleware(req) {
    if (req.nextUrl.searchParams.get("API_KEY") !== process.env.API_KEY) {
        return NextResponse.json("fail", { status: 401 });
    }
    if (req.nextUrl.pathname.startsWith("/api")) {
        // NextResponse.next().headers.append("Access-Control-Allow-Origin", "*");
        NextResponse.json({}, { headers: corsHeaders });
    }
    return NextResponse.next();
}

export const config = {
    matcher: "/api/:path*",
};
