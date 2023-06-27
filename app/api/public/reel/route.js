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
                    reel_category: {
                        equals: city,
                        mode: "insensitive",
                    },
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
