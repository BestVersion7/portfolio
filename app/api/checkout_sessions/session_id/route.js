import stripe2 from "stripe";
const stripe = stripe2(process.env.STRIPE_SECRET_KEY);
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        // const session = await stripe.checkout.sessions.retrieve(
        //     req.nextUrl.searchParams.get("session_id")
        // );
        console.log(session)
        // const data = [
        //     {
        //         currency: session.currency,
        //         email: session.customer_details.email,
        //         name: session.customer_details.name,
        //         amount_total: session.amount_total,
        //     },
        // ];
        return NextResponse.json('data');
    } catch (err) {
        return NextResponse.json("fail", { status: 500 });
    }
}
