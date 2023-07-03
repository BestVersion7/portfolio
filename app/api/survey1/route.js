import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = await prisma.survey.findMany({
            orderBy: { survey_id: "desc" },
        });
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json("fail", { status: 500 });
    }
}

export async function POST(req) {
    const survey_name = "Anon";
    const survey_email = "Anon@anon.com";

    try {
        const body = await req.json();
        const { survey_choice } = body;
        const data = await prisma.survey.create({
            data: {
                survey_name,
                survey_email,
                survey_choice,
            },
        });
        return NextResponse.json(data, { status: 201 });
    } catch (err) {
        return NextResponse.json("fail", { status: 500 });
    }
}
