import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import NextCors from "nextjs-cors";

export async function GET() {
    await NextCors(req, res, {
        // Options
        methods: ["GET"],
        origin: CORS_ALLOWED_ORGIN,
        optionsSuccessStatus: 200,
    });
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
    await NextCors(req, res, {
        // Options
        methods: ["POST"],
        origin: CORS_ALLOWED_ORGIN,
        optionsSuccessStatus: 200,
    });
    const body = await req.json();

    const { comment_body } = body;

    const data = await prisma.commenttb.create({
        data: {
            comment_body,
        },
    });

    return NextResponse.json(data, { status: 201 });
}
