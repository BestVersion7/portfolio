import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
        const booking_date = req.nextUrl.searchParams.get("booking_date");
        const doctor_id = Number(req.nextUrl.searchParams.get("doctor_id"));
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
