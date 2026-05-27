"use client";

import { useState } from "react";
import { Clock, Search, Loader2 } from "lucide-react";
import { STATES } from "@/data/states";
import { PRAYER_ICONS } from "@/lib/prayerTimes";
import type { PrayerTimes } from "@/lib/prayerTimes";

const PRAYERS = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"] as const;

function formatTime(raw: string): string {
  const [hStr, mStr] = raw.split(":");
  let h = parseInt(hStr, 10);
  const period = h >= 12 ? "PM" : "AM";
  if (h === 0) h = 12;
  else if (h > 12) h -= 12;
  return `${h}:${mStr} ${period}`;
}

function getNextPrayer(times: PrayerTimes): string {
  const now = new Date();
  const nowMin = now.getHours() * 60 + now.getMinutes();
  for (const p of PRAYERS) {
    const t = times[p];
    const [timePart, period] = t.split(" ");
    const [h, m] = timePart.split(":").map(Number);
    let hours = h;
    if (period === "PM" && h !== 12) hours += 12;
    if (period === "AM" && h === 12) hours = 0;
    if (hours * 60 + m > nowMin) return p;
  }
  return "Fajr";
}

export default function PrayerTimesPage() {
  const [city, setCity] = useState("");
  const [stateCode, setStateCode] = useState("TX");
  const [method, setMethod] = useState("2");
  const [times, setTimes] = useState<PrayerTimes | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!city.trim()) return;
    setLoading(true);
    setError("");
    setTimes(null);
    setSearched(true);
    try {
      const res = await fetch(
        `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=US&state=${encodeURIComponent(stateCode)}&method=${method}`
      );
      const json = await res.json();
      if (json.code !== 200) throw new Error("Not found");
      const t = json.data.timings;
      setTimes({
        Fajr: formatTime(t.Fajr),
        Sunrise: formatTime(t.Sunrise),
        Dhuhr: formatTime(t.Dhuhr),
        Asr: formatTime(t.Asr),
        Maghrib: formatTime(t.Maghrib),
        Isha: formatTime(t.Isha),
      });
    } catch {
      setError("Prayer times could not be found for that location. Try a different city.");
    } finally {
      setLoading(false);
    }
  }

  const nextPrayer = times ? getNextPrayer(times) : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Prayer Times Calculator</h1>
        <p className="text-gray-600">
          Enter any US city to get today&apos;s accurate salah times calculated for that location.
        </p>
      </div>

      {/* Search form */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-8">
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">City</label>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Houston"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">State</label>
              <select
                value={stateCode}
                onChange={(e) => setStateCode(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-white"
              >
                {STATES.map((s) => (
                  <option key={s.code} value={s.code}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Calculation Method</label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full sm:w-auto px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-white"
            >
              <option value="2">ISNA (Islamic Society of North America) — recommended</option>
              <option value="1">University of Islamic Sciences, Karachi</option>
              <option value="3">Muslim World League</option>
              <option value="4">Umm Al-Qura, Makkah</option>
              <option value="5">Egyptian General Authority of Survey</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={loading || !city.trim()}
            className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 disabled:opacity-60 text-white px-6 py-3 rounded-xl font-medium text-sm transition-colors"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
            {loading ? "Loading..." : "Get Prayer Times"}
          </button>
        </form>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700 mb-6">{error}</div>
      )}

      {/* Results */}
      {times && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="bg-emerald-700 text-white px-6 py-4 flex items-center gap-3">
            <Clock className="w-5 h-5 text-emerald-300" />
            <div>
              <div className="font-semibold">Prayer Times for {city}, {stateCode}</div>
              <div className="text-emerald-200 text-xs mt-0.5">
                {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
              </div>
            </div>
          </div>
          <div className="divide-y divide-gray-50">
            {PRAYERS.map((prayer) => {
              const isNext = prayer === nextPrayer;
              return (
                <div
                  key={prayer}
                  className={`flex items-center justify-between px-6 py-4 ${isNext ? "bg-emerald-50" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl w-8 text-center">{PRAYER_ICONS[prayer]}</span>
                    <span className={`font-medium ${isNext ? "text-emerald-800" : "text-gray-700"}`}>{prayer}</span>
                    {isNext && (
                      <span className="text-xs bg-emerald-600 text-white px-2 py-0.5 rounded-full font-medium">
                        Up Next
                      </span>
                    )}
                  </div>
                  <span className={`text-base font-bold tabular-nums ${isNext ? "text-emerald-700" : "text-gray-800"}`}>
                    {times[prayer]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {!searched && !times && (
        <div className="text-center py-12 text-gray-400">
          <Clock className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="text-sm">Enter a city above to view prayer times.</p>
        </div>
      )}
    </div>
  );
}
