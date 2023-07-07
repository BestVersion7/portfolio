import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        let data;
        const city = req.nextUrl.searchParams.get("city");
        const reel_id = req.nextUrl.searchParams.get("reel_id");

        if (reel_id) {
            data = await prisma.reel.findUnique({
                where: {
                    reel_id: parseInt(reel_id),
                },
            });
        } else if (city) {
            data = await prisma.reel.findMany({
                where: {
                    reel_category: city,
                },
                orderBy: {
                    reel_date: "desc",
                },
            });
        } else {
            data = await prisma.reel.findMany({
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
        const data = await prisma.reel.create({
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

export async function PUT(req) {
    try {
        const reel_id = req.nextUrl.searchParams.get("reel_id");

        if (isNaN(reel_id)) {
            return NextResponse.json(null, { status: 200 });
        }

        const body = await req.json();

        const {
            reel_date,
            reel_image,
            reel_category,
            reel_public,
            reel_video,
            reel_video_thumbnail,
        } = body;

        const data = await prisma.blog.update({
            where: { reel_id: parseInt(reel_id) },
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
