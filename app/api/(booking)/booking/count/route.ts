import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
        const booking_date = req.nextUrl.searchParams.get("booking_date");
        const doctor_id = Number(req.nextUrl.searchParams.get("doctor_id"));

        let count;

        if (booking_date && doctor_id) {
            count = await prisma.booking.aggregate({
                where: {
                    booking_date,
                    doctor_id,
                },
                _count: true,
            });
        } else if (doctor_id) {
            count = await prisma.booking.aggregate({
                where: {
                    doctor_id,
                },
                _count: true,
            });
        } else if (booking_date) {
            count = await prisma.booking.aggregate({
                where: {
                    booking_date,
                },
                _count: true,
            });
        } else {
            count = await prisma.booking.aggregate({
                _count: true,
            });
        }
        return NextResponse.json({ _count: count._count });
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
