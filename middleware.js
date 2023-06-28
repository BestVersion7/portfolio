import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(req) {
    // if (process.env.NODE_ENV !== "production") {
    //     return NextResponse.next();
    // }
    // validate the headers with the api key
    const xApiKey = req.headers.get("authorization");

    if (xApiKey !== process.env.API_KEY) {
        // cannot do {status: 401}
        return NextResponse.json({ message: "Unauthorized" });
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/api/article/:path*",
        "/api/reel/:path*",
        "/api/contact",
        "/api/subscriber",
    ],
};
