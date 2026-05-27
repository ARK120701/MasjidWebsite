import { NextRequest, NextResponse } from "next/server";

export const revalidate = 3600;

function fmt(raw: string): string {
  const [hStr, mStr] = raw.split(":");
  let h = parseInt(hStr, 10);
  const period = h >= 12 ? "PM" : "AM";
  if (h === 0) h = 12;
  else if (h > 12) h -= 12;
  return `${h}:${mStr} ${period}`;
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const city = searchParams.get("city");
  const state = searchParams.get("state") ?? "";
  const method = searchParams.get("method") ?? "2";

  if (!city) {
    return NextResponse.json({ error: "city is required" }, { status: 400 });
  }

  const upstream = await fetch(
    `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=US&state=${encodeURIComponent(state)}&method=${method}`,
    { next: { revalidate: 3600 } }
  );

  if (!upstream.ok) {
    return NextResponse.json({ error: "Failed to fetch prayer times" }, { status: 502 });
  }

  const json = await upstream.json();
  if (json.code !== 200) {
    return NextResponse.json({ error: "City not found" }, { status: 404 });
  }

  const t = json.data.timings;
  return NextResponse.json({
    Fajr: fmt(t.Fajr),
    Sunrise: fmt(t.Sunrise),
    Dhuhr: fmt(t.Dhuhr),
    Asr: fmt(t.Asr),
    Maghrib: fmt(t.Maghrib),
    Isha: fmt(t.Isha),
  });
}
