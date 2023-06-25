import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const article_id = req.nextUrl.searchParams.get("article_id");

        const data = await prisma.comment.findMany({
            where: {
                article_id: parseInt(article_id),
            },
            orderBy: {
                comment_id: "desc",
            },
            take: 10,
        });
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json("Fail", { status: 500 });
    }
}

export async function POST(req) {
    const body = await req.json();

    const { article_id, comment_body, comment_user_name, comment_user_image } =
        body;

    const data = await prisma.commenttb.create({
        data: {
            article_id,
            comment_body,
            comment_user_name,
            comment_user_image,
        },
    });

    return NextResponse.json(data, { status: 201 });
}
