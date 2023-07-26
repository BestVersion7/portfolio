import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const data = await prisma.booking.findMany();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json("error", { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        await prisma.booking.create({ data });
        return NextResponse.json("created", { status: 201 });
    } catch (error) {
        return NextResponse.json("error", { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const booking_id = req.nextUrl.searchParams.get("booking_id");

        await prisma.booking.delete({
            where: {
                booking_id: Number(booking_id),
            },
        });
        return NextResponse.json("deleted");
    } catch (error) {
        return NextResponse.json("error", { status: 500 });
    }
}
