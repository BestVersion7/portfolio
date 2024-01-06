import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { cartCookie } = await req.json();
    try {
        // check for cookies
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
