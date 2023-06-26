import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        let data;
        const city = req.nextUrl.searchParams.get("city");

        if (city) {
            data = await prisma.reel.findMany({
                where: {
                    reel_public: true,
                    reel_category: city,
                },
                orderBy: {
                    reel_date: "desc",
                },
            });
        } else {
            data = await prisma.reel.findMany({
                where: {
                    reel_public: true,
                },
                orderBy: {
                    reel_date: "desc",
                },
            });
        }
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json("Fail", { status: 500 });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const {
            reel_date,
            reel_image,
            reel_category,
            reel_public,
            reel_video,
            reel_video_thumbnail,
        } = body;
        const data = await prisma.blog.create({
            data: {
                reel_date,
                reel_image,
                reel_category,
                reel_public,
                reel_video,
                reel_video_thumbnail,
            },
        });
        return NextResponse.json("Posted", { status: 201 });
    } catch (err) {
        return NextResponse.json("Fail", { status: 500 });
    }
}
