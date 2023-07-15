import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
    try {
        const data = await prisma.commenttb.findMany({
            orderBy: {
                comment_id: "desc",
            },
            select: {
                comment_id: true,
                comment_body: true,
                comment_user_name: true,
            },
        });
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json("fail", { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { comment_user_name, comment_body } = body;
        if (comment_user_name == null || comment_body == null) {
            return NextResponse.json("empty", { status: 401 });
        }
        const data = await prisma.commenttb.create({
            data: {
                comment_body,
                comment_user_name,
            },
        });
        return NextResponse.json("posted", { status: 201 });
    } catch (err) {
        return NextResponse.json("fail", { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    try {
        const comment_id2: any = req.nextUrl.searchParams.get("comment_id");

        const comment_id = +comment_id2;

        const body = await req.json();
        const { comment_user_name, comment_body } = body;
        if (comment_user_name == null || comment_body == null) {
            return NextResponse.json("empty", { status: 401 });
        }
        const data = await prisma.commenttb.update({
            where: {
                comment_id,
            },
            data: {
                comment_body,
                comment_user_name,
            },
        });
        return NextResponse.json('updated');
    } catch (err) {
        return NextResponse.json("fail", { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const comment_id2: any = req.nextUrl.searchParams.get("comment_id");
        const comment_id = +comment_id2;

        const data = await prisma.commenttb.delete({
            where: {
                comment_id,
            },
        });
        return NextResponse.json("deleted");
    } catch (err) {
        return NextResponse.json("fail", { status: 500 });
    }
}
