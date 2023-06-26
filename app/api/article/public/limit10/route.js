import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = await prisma.blog.findMany({
            where: {
                article_public: true,
                take: 10,
            },
            orderBy: {
                article_date: "desc",
            },
        });

        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json("Fail", { status: 500 });
    }
}
