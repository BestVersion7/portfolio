import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const { cookie_id } = await req.json();
        await prisma.cookieInfo.create({
            data: { cookie_id },
        });
        // const response = NextResponse.json("cookie created");
        // response.cookies.set({
        //     name: "cookiecart",
        //     value: data.cookie_id,
        //     secure: true,
        //     // httpOnly: true,
        //     // max 4 days
        //     maxAge: 60 * 60 * 24 * 4,
        // });

        return NextResponse.json("cookie added");
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const cartCookie = req.nextUrl.searchParams.get("cookie_id");
        // cookies().delete("cookiecart");
        // const oneDay = 24 * 60 * 60 * 1000;
        // cookies().set("cookiecart", "value", { expires: Date.now() - oneDay });
        await prisma.cookieInfo.delete({
            where: {
                cookie_id: cartCookie,
            },
        });

        return NextResponse.json("cookie deleted");
    } catch (error) {
        return NextResponse.json("cookie fail", { status: 500 });
    }
}
