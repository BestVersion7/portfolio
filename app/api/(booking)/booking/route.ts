import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const data = await prisma.booking.findMany({
            include: {
                doctor: true,
                patient: true,
            },
        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json("error", { status: 500 });
    }
}

export async function POST(req: Request) {
    const body = await req.json();
    try {
        await prisma.booking.create({
            data: body,
        });
        return NextResponse.json("created", { status: 201 });
    } catch (error) {
        return NextResponse.json("error", { status: 500 });
    }
}
