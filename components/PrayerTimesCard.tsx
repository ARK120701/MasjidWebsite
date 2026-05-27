"use client";

import { useEffect, useState } from "react";
import type { PrayerTimes } from "@/lib/prayerTimes";
import { PRAYER_ICONS } from "@/lib/prayerTimes";

interface Props {
  lat: number;
  lng: number;
}

const PRAYERS = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"] as const;

function getNextPrayer(times: PrayerTimes): string | null {
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  for (const prayer of ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"] as const) {
    const timeStr = times[prayer];
    if (!timeStr) continue;
    const [timePart, period] = timeStr.split(" ");
    const [h, m] = timePart.split(":").map(Number);
    let hours = h;
    if (period === "PM" && h !== 12) hours += 12;
    if (period === "AM" && h === 12) hours = 0;
    const prayerMinutes = hours * 60 + m;
    if (prayerMinutes > nowMinutes) return prayer;
  }
  return "Fajr"; // wraps to next day
}

export default function PrayerTimesCard({ lat, lng }: Props) {
  const [times, setTimes] = useState<PrayerTimes | null>(null);
  const [loading, setLoading] = useState(true);
  const [nextPrayer, setNextPrayer] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/prayer-times?lat=${lat}&lng=${lng}`);
        if (!res.ok) throw new Error("API error");
        const parsed: PrayerTimes = await res.json();

        setTimes(parsed);
        setNextPrayer(getNextPrayer(parsed));
      } catch {
        setTimes(null);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [lat, lng]);

  if (loading) {
    return (
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 animate-pulse">
        <div className="h-5 bg-gray-200 rounded w-40 mb-4" />
        <div className="grid grid-cols-2 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-12 bg-gray-100 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  if (!times) {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
        Prayer times could not be loaded. Please try again later.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <h3 className="font-semibold text-gray-900 mb-4">
        Today&apos;s Prayer Times
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {PRAYERS.map((prayer) => {
          const isNext = prayer === nextPrayer;
          return (
            <div
              key={prayer}
              className={`rounded-lg p-3 flex flex-col gap-1 border ${
                isNext
                  ? "bg-emerald-50 border-emerald-300 shadow-sm"
                  : "bg-gray-50 border-gray-100"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-base">{PRAYER_ICONS[prayer]}</span>
                <span className={`text-xs font-medium ${isNext ? "text-emerald-700" : "text-gray-500"}`}>
                  {prayer}
                </span>
                {isNext && (
                  <span className="ml-auto text-xs bg-emerald-600 text-white px-1.5 py-0.5 rounded-full font-medium">
                    Next
                  </span>
                )}
              </div>
              <span className={`text-sm font-bold ${isNext ? "text-emerald-900" : "text-gray-800"}`}>
                {times[prayer]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
