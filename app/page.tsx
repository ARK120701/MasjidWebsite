import Link from "next/link";
import { MapPin, Search, Clock, ChevronRight } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import { MASJIDS } from "@/data/masjids";
import { STATES } from "@/data/states";
import MasjidCard from "@/components/MasjidCard";

const FEATURED_IDS = [
  "mi-1", "ny-1", "ca-1", "tx-1", "va-1", "il-1", "fl-1", "ca-3",
];

export default function HomePage() {
  const featured = FEATURED_IDS.map((id) =>
    MASJIDS.find((m) => m.id === id)
  ).filter(Boolean) as typeof MASJIDS;

  const stateCount = new Set(MASJIDS.map((m) => m.stateCode)).size;

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-700/50 border border-emerald-500/30 rounded-full px-4 py-2 text-sm text-emerald-200 mb-6">
            <MapPin className="w-4 h-4" />
            {MASJIDS.length}+ Masjids across {stateCount} States
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
            Find Masjids<br />
            <span className="text-emerald-300">Across America</span>
          </h1>
          <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
            Locate masjids near you, view today&apos;s salah times, and browse Islamic
            centers organized by state and city — all in one place.
          </p>
          <SearchBar />

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/near-me"
              className="flex items-center justify-center gap-2 bg-white text-emerald-800 font-semibold px-6 py-3 rounded-full hover:bg-emerald-50 transition-colors shadow-lg"
            >
              <MapPin className="w-5 h-5" />
              Masjids Near Me
            </Link>
            <Link
              href="/browse"
              className="flex items-center justify-center gap-2 bg-emerald-600/50 border border-emerald-400/50 text-white font-semibold px-6 py-3 rounded-full hover:bg-emerald-600 transition-colors"
            >
              <Search className="w-5 h-5" />
              Browse by State
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="w-8 h-8 text-emerald-600" />,
                title: "Find Nearby Masjids",
                desc: "Use your location to instantly find Islamic centers within your radius.",
              },
              {
                icon: <Clock className="w-8 h-8 text-emerald-600" />,
                title: "Live Prayer Times",
                desc: "View accurate, calculated Fajr, Dhuhr, Asr, Maghrib, and Isha times for each location.",
              },
              {
                icon: <Search className="w-8 h-8 text-emerald-600" />,
                title: "Browse by Location",
                desc: "Explore masjids organized by state and city across all 50 states.",
              },
            ].map((f) => (
              <div key={f.title} className="text-center p-6">
                <div className="flex justify-center mb-4 p-4 bg-emerald-50 rounded-2xl w-fit mx-auto">
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Masjids */}
      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Masjids</h2>
            <Link href="/browse" className="text-sm text-emerald-700 hover:text-emerald-900 flex items-center gap-1">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map((m) => (
              <MasjidCard key={m.id} masjid={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Browse States */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Browse by State</h2>
            <Link href="/browse" className="text-sm text-emerald-700 hover:text-emerald-900 flex items-center gap-1">
              All states <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {STATES.slice(0, 24).map((state) => {
              const count = MASJIDS.filter((m) => m.stateCode === state.code).length;
              return (
                <Link
                  key={state.code}
                  href={`/state/${state.code}`}
                  className="bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 rounded-xl p-4 text-center transition-all group"
                >
                  <div className="text-lg font-bold text-emerald-700 group-hover:text-emerald-600">{state.code}</div>
                  <div className="text-xs text-gray-600 mt-0.5 truncate">{state.name}</div>
                  <div className="text-xs text-gray-400 mt-1">{count} masjid{count !== 1 ? "s" : ""}</div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-6">
            <Link href="/browse" className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900 font-medium text-sm">
              View all 50 states <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
