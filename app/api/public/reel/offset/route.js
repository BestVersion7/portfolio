import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const index = req.nextUrl.searchParams.get("index");
        // filter by city
        const city = req.nextUrl.searchParams.get("city");

        // pagination starts at 0
        let offset;
        let data;
        index == 0 ? (offset = 0) : (offset = index - 1);

        if (city) {
            data = await prisma.reel.findMany({
                where: {
                    reel_public: true,
                    reel_category: {
                        equals: city,
                        mode: "insensitive",
                    },
                },
                orderBy: { reel_date: "desc" },
                take: 3,
                skip: offset,
            });
        } else {
            data = await prisma.reel.findMany({
                where: {
                    reel_public: true,
                },
                orderBy: { reel_date: "desc" },
                take: 3,
                skip: offset,
            });
        }

        // add blank data in beginning to switch index
        if (index === 0) {
            data.splice(0, 0, {
                reel_image:
                    "https://res.cloudinary.com/crimson-flamingo/image/upload/v1556071041/230419%20Icons/instagram.png",
                reel_category: "null",
            });
        }

        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json("Fail", { status: 500 });
    }
}
