import stripe2 from "stripe";
const stripe = stripe2(process.env.STRIPE_SECRET_KEY);
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const session = await stripe.checkout.sessions.retrieve(
            req.nextUrl.searchParams.get("session_id")
        );

        // console.log(
        //     `${session.currency} ${session.amount_total} ${session.customer_details}`
        // );
        // const data = [
        //     {
        //         currency: session.currency,
        //         email: session.customer_details.email,
        //         name: session.customer_details.name,
        //         amount_total: session.amount_total,
        //     },
        // ];
        console.log(session);
        return NextResponse.json("data");
    } catch (err) {
        return NextResponse.json("fail", { status: 500 });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const { price, currency } = body;

        const params = {
            submit_type: "donate",
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        unit_amount: price * 100,
                        currency,
                        product_data: {
                            name: "Support new adventures for SpeedRunTravel.com",
                        },
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${req.nextUrl.origin}/support/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.nextUrl.origin}/support?session_id={CHECKOUT_SESSION_ID}`,
        };

        const checkoutSession = await stripe.checkout.sessions.create(params);
        return NextResponse.json(checkoutSession.id);
    } catch (err) {
        console.log(err);
        return NextResponse.json("fail", { status: 500 });
    }
}
