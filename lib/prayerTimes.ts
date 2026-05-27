export interface PrayerTimes {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  Jumuah?: string;
}

export interface AladhanResponse {
  timings: {
    Fajr: string;
    Sunrise: string;
    Dhuhr: string;
    Asr: string;
    Sunset: string;
    Maghrib: string;
    Isha: string;
    Imsak: string;
    Midnight: string;
  };
  date: {
    readable: string;
    hijri: { date: string; month: { en: string }; year: string };
  };
}

export async function fetchPrayerTimes(
  lat: number,
  lng: number,
  method = 2
): Promise<PrayerTimes | null> {
  try {
    const ts = Math.floor(Date.now() / 1000);
    const res = await fetch(
      `https://api.aladhan.com/v1/timings/${ts}?latitude=${lat}&longitude=${lng}&method=${method}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const json = await res.json();
    const t: AladhanResponse["timings"] = json.data.timings;
    return {
      Fajr: formatTime(t.Fajr),
      Sunrise: formatTime(t.Sunrise),
      Dhuhr: formatTime(t.Dhuhr),
      Asr: formatTime(t.Asr),
      Maghrib: formatTime(t.Maghrib),
      Isha: formatTime(t.Isha),
    };
  } catch {
    return null;
  }
}

export async function fetchPrayerTimesByCity(
  city: string,
  state: string,
  method = 2
): Promise<PrayerTimes | null> {
  try {
    const res = await fetch(
      `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=US&state=${encodeURIComponent(state)}&method=${method}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const json = await res.json();
    const t: AladhanResponse["timings"] = json.data.timings;
    return {
      Fajr: formatTime(t.Fajr),
      Sunrise: formatTime(t.Sunrise),
      Dhuhr: formatTime(t.Dhuhr),
      Asr: formatTime(t.Asr),
      Maghrib: formatTime(t.Maghrib),
      Isha: formatTime(t.Isha),
    };
  } catch {
    return null;
  }
}

function formatTime(time24: string): string {
  const [hStr, mStr] = time24.split(":");
  let h = parseInt(hStr, 10);
  const m = mStr;
  const period = h >= 12 ? "PM" : "AM";
  if (h === 0) h = 12;
  else if (h > 12) h -= 12;
  return `${h}:${m} ${period}`;
}

export const PRAYER_NAMES: (keyof PrayerTimes)[] = [
  "Fajr",
  "Sunrise",
  "Dhuhr",
  "Asr",
  "Maghrib",
  "Isha",
];

export const PRAYER_ICONS: Record<string, string> = {
  Fajr: "🌙",
  Sunrise: "🌅",
  Dhuhr: "☀️",
  Asr: "🌤️",
  Maghrib: "🌇",
  Isha: "🌃",
};
