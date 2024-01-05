import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    try {
        // check for cookies
        const cartCookie = cookies().get("cookiecart")?.value;
        if (!cartCookie) {
            return NextResponse.json(0);
        }

        const data = await prisma.cartInfo.aggregate({
            _sum: {
                quantity: true,
            },
            where: {
                cookie_id: cartCookie,
            },
        });

        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json(err, { status: 500 });
    }
}
