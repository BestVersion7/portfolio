import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        let data;
        const article_id = req.nextUrl.searchParams.get("article_id");

        if (article_id) {
            data = await prisma.blog.findUnique({
                where: {
                    article_id: parseInt(article_id),
                },
            });
        } else {
            data = await prisma.blog.findMany({
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

export async function POST(req) {
    try {
        const body = await req.json();
        const {
            article_date,
            article_title,
            article_post,
            article_image,
            article_image_small,
            article_public,
        } = body;
        const data = await prisma.blog.create({
            data: {
                article_date,
                article_title,
                article_post,
                article_image,
                article_image_small,
                article_public,
            },
        });
        return NextResponse.json("Posted", { status: 201 });
    } catch (err) {
        return NextResponse.json("Fail", { status: 500 });
    }
}
