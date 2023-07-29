import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
        const patient_id = Number(req.nextUrl.searchParams.get("patient_id"));
        let data;
        if (patient_id) {
            data = await prisma.patient.findUnique({
                where: {
                    patient_id,
                },
            });
        } else {
            data = await prisma.patient.findMany({});
        }
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json("error", { status: 500 });
    }
}

export async function POST(req: Request) {
    const body = await req.json();
    try {
        await prisma.patient.create({
            data: body,
        });
        return NextResponse.json("created", { status: 201 });
    } catch (error) {
        return NextResponse.json("error", { status: 500 });
    }
}
