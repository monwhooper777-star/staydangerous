// app/api/waitlist/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, firstName, consent, source } = await req.json();

    if (!email || !/.+@.+\..+/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // TODO: store or send notification — replace this later with real persistence
    console.log("waitlist", { email, firstName, consent, source, ts: Date.now() });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "Server error" }, { status: 500 });
  }
}
