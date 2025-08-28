// ❗ Do NOT put 'use client' in this file.

import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic"; // optional, keeps route dynamic

const resend = new Resend(process.env.RESEND_API_KEY ?? "");

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "Monwhooper <onboarding@resend.dev>", // swap after domain verify
      to: email,
      subject: "Welcome to Monwhooper ⚔️🐺",
      html: `<p>You’re in the Wolfpack. Philosophy, drops & dangerous ideas coming soon.</p>`,
    });

    // Resend SDK returns an object with id; tolerate undefined shape
    // @ts-expect-error - SDK typing may vary by version
    return NextResponse.json({ ok: true, id: data?.id ?? null });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
