import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
        const booking_date = req.nextUrl.searchParams.get("booking_date");
        const doctor_id = Number(req.nextUrl.searchParams.get("doctor_id"));
        const take = 20;
        const pagination = Number(req.nextUrl.searchParams.get("page"));

        let data;

        if (booking_date && doctor_id && pagination) {
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
                take,
                skip: take * (pagination - 1),
            });
        } else if (doctor_id && pagination) {
            data = await prisma.booking.findMany({
                where: {
                    doctor_id,
                },
                orderBy: [
                    {
                        booking_date: "desc",
                    },
                    { booking_time: "desc" },
                ],
                include: {
                    patient: true,
                    doctor: true,
                },
                take,
                skip: take * (pagination - 1),
            });
        } else if (booking_date && pagination) {
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
                take,
                skip: take * (pagination - 1),
            });
        } else {
            data = await prisma.booking.findMany({
                orderBy: [
                    {
                        booking_date: "desc",
                    },
                    { booking_time: "desc" },
                ],

                include: {
                    patient: true,
                    doctor: true,
                },
                take,
                skip: take * (pagination - 1),
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
        await prisma.booking.create({
            data: body,
        });
        return NextResponse.json("created", { status: 201 });
    } catch (error) {
        return NextResponse.json("error", { status: 500 });
    }
}
