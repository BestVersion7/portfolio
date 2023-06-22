import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const data = await prisma.commenttb.findMany({
        select: {
            comment_body: true,
        },
        orderBy: {
            comment_id: "desc",
        },
        take: 10,
    });
    return NextResponse.json(data);
}

export async function POST(req) {
    const body = await req.json();

    const { comment_body } = body;

    const data = await prisma.commenttb.create({
        data: {
            comment_body,
        },
    });

    return NextResponse.json(data);
}
