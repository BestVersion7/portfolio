import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
        let data;
        const booking_date = req.nextUrl.searchParams.get("booking_date");
        if (booking_date !== null) {
            await prisma.booking.findMany({
                where: {
                    booking_date: booking_date,
                },
            });
        } else {
            data = await prisma.booking.findMany();
        }
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
