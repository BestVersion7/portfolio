import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const index = req.nextUrl.searchParams.get("index");
        // pagination starts at 0
        let offset;
        index == 0 ? (offset = 0) : (offset = index - 1);

        const data2 = await prisma.reel.findMany({
            where: {
                reel_public: true,
            },
            orderBy: { reel_date: "desc" },
            take: 3,
            skip: offset,
        });

        // add blank data in beginning to switch index
        if (index === 0) {
            data2.splice(0, 0, {
                reel_image:
                    "https://res.cloudinary.com/crimson-flamingo/image/upload/v1556071041/230419%20Icons/instagram.png",
                reel_category: "null",
            });
        }

        return NextResponse.json(data2);
    } catch (err) {
        return NextResponse.json("Fail", { status: 500 });
    }
}
