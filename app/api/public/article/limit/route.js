import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(count) {
    try {
        const data = await prisma.blog.findMany({
            where: {
                article_public: true,
            },
            take: count,
            orderBy: {
                article_date: "desc",
            },
        });

        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json("Fail", { status: 500 });
    }
}
