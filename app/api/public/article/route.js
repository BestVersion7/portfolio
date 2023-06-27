import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        let data;
        const article_id = req.nextUrl.searchParams.get("article_id");

        if (isNaN(article_id)) {
            return NextResponse.json(null, { status: 200 });
        }

        if (article_id) {
            data = await prisma.blog.findFirst({
                where: {
                    article_id: parseInt(article_id),
                    article_public: true,
                },
            });
        } else {
            data = await prisma.blog.findMany({
                where: {
                    article_public: true,
                },
                orderBy: {
                    article_date: "desc",
                },
            });
        }
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json("Fail", { status: 500 });
    }
}
