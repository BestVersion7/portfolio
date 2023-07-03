import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        let data;
        const survey_choice = req.nextUrl.searchParams.get("survey_choice");

        if (survey_choice) {
            data = await prisma.survey.aggregate({
                _count: true,
                where: {
                    survey_choice: {
                        equals: survey_choice,
                        mode: "insensitive",
                    },
                },
            });
        } else {
            data = await prisma.survey.aggregate({
                _count: true,
            });
        }
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json("fail", { status: 500 });
    }
}
