import { NextResponse } from "next/server";

export async function GET() {
  const key = process.env.OPENAI_API_KEY;

  return NextResponse.json({
    envKeyExists: !!key,
    preview: key ? key.slice(0, 12) + "..." : null,
  });
}
