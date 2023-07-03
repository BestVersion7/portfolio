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
        const response = NextResponse.json(data, { status: 201 });
        response.cookies.set({
            name: "survey1cookie",
            value: "true",
            sameSite: "none",
            // httpOnly: true,
            secure: true,
            // 31 days
            maxAge: 60 * 60 * 24 * 31,
        });
        return response;
    } catch (err) {
        return NextResponse.json("fail", { status: 500 });
    }
}
