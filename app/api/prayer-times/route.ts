import { NextRequest, NextResponse } from "next/server";

export const revalidate = 3600; // cache 1 hour

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
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const method = searchParams.get("method") ?? "2";

  if (!lat || !lng) {
    return NextResponse.json({ error: "lat and lng are required" }, { status: 400 });
  }

  const ts = Math.floor(Date.now() / 1000);
  const upstream = await fetch(
    `https://api.aladhan.com/v1/timings/${ts}?latitude=${lat}&longitude=${lng}&method=${method}`,
    { next: { revalidate: 3600 } }
  );

  if (!upstream.ok) {
    return NextResponse.json({ error: "Failed to fetch prayer times" }, { status: 502 });
  }

  const json = await upstream.json();
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
