import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
        const booking_date = req.nextUrl.searchParams.get("booking_date");
        const doctor_id = Number(req.nextUrl.searchParams.get("doctor_id"));
        const booking_id = Number(req.nextUrl.searchParams.get("booking_id"));

        let data;

        if (booking_date && doctor_id) {
            data = await prisma.booking.findMany({
                where: {
                    booking_date,
                    doctor_id,
                },
                orderBy: {
                    booking_time: "desc",
                },
                include: {
                    patient: true,
                    doctor: true,
                },
            });
        } else if (doctor_id) {
            data = await prisma.booking.findMany({
                where: {
                    doctor_id,
                },
                orderBy: {
                    booking_time: "desc",
                },
                include: {
                    patient: true,
                    doctor: true,
                },
            });
        } else if (booking_date) {
            data = await prisma.booking.findMany({
                where: {
                    booking_date,
                },
                orderBy: {
                    booking_time: "desc",
                },
                include: {
                    patient: true,
                    doctor: true,
                },
            });
        } else if (booking_id) {
            data = await prisma.booking.findMany({
                where: {
                    booking_id,
                },
                include: {
                    patient: true,
                    doctor: true,
                },
            });
        }
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json("error", { status: 500 });
    }
}

export async function POST(req: Request) {
    const body = await req.json();
    try {
        const createData = await prisma.booking.create({ data: body });
        return NextResponse.json(createData, { status: 201 });
    } catch (error) {
        return NextResponse.json("error", { status: 500 });
    }
}
