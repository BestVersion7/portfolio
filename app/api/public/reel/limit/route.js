import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = await prisma.reel.findMany({
            where: {
                reel_public: true,
            },
            take: 8,
            orderBy: {
                reel_date: "desc",
            },
        });

        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json("Fail", { status: 500 });
    }
}
