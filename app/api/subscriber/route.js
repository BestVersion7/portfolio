const client = require("@sendgrid/client");
client.setApiKey(process.env.SENDGRID_API_KEY);
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const request = {
            url: "/v3/marketing/contacts",
            method: "get",
        };
        const data = await client.request(request);
        const emails = data[0].body?.result?.map((item) => item.email);
        return NextResponse.json(emails);
    } catch (err) {
        return NextResponse.json("fail", { status: 500 });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, first_name, last_name } = body;
        const data = {
            contacts: [
                {
                    email,
                    first_name,
                    last_name,
                },
            ],
        };
        const request = {
            url: "/v3/marketing/contacts",
            method: "PUT",
            body: data,
        };

        await client.request(request);
        return NextResponse.json("created", { status: 201 });
    } catch (err) {
        return NextResponse.json("fail", { status: 500 });
    }
}
