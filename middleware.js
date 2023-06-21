import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(req) {
    if (req.nextUrl.searchParams.get("API_KEY") !== process.env.API_KEY) {
        return NextResponse.json("fail", { status: 401 });
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/api/:path*",
};
