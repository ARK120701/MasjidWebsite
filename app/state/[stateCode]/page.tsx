import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, MapPin, Building2 } from "lucide-react";
import { STATE_BY_CODE } from "@/data/states";
import { getMasjidsByState, getCitiesByState, getMasjidsByCity } from "@/data/masjids";
import MasjidCard from "@/components/MasjidCard";

interface Props {
  params: Promise<{ stateCode: string }>;
}

export async function generateStaticParams() {
  const { STATES } = await import("@/data/states");
  return STATES.map((s) => ({ stateCode: s.code }));
}

export async function generateMetadata({ params }: Props) {
  const { stateCode } = await params;
  const state = STATE_BY_CODE[stateCode.toUpperCase()];
  if (!state) return {};
  return {
    title: `Masjids in ${state.name} | MasjidFinder USA`,
    description: `Find Islamic centers and prayer times across ${state.name}.`,
  };
}

export default async function StatePage({ params }: Props) {
  const { stateCode } = await params;
  const code = stateCode.toUpperCase();
  const state = STATE_BY_CODE[code];
  if (!state) notFound();

  const masjids = getMasjidsByState(code);
  const cities = getCitiesByState(code);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/browse" className="hover:text-emerald-700">Browse</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium">{state.name}</span>
      </nav>

      <div className="flex items-start gap-4 mb-8">
        <div className="bg-emerald-100 rounded-2xl px-5 py-3">
          <span className="text-3xl font-black text-emerald-700">{code}</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{state.name}</h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Building2 className="w-4 h-4 text-emerald-600" />
              {masjids.length} Masjid{masjids.length !== 1 ? "s" : ""}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-emerald-600" />
              {cities.length} Cit{cities.length !== 1 ? "ies" : "y"}
            </span>
          </div>
        </div>
      </div>

      {cities.length === 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-amber-800">
          No masjids are listed for {state.name} yet. More are being added regularly.
        </div>
      )}

      {cities.map((city) => {
        const cityMasjids = getMasjidsByCity(code, city);
        return (
          <section key={city} className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-600" />
              {city}
              <span className="text-sm font-normal text-gray-500">({cityMasjids.length})</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cityMasjids.map((m) => (
                <MasjidCard key={m.id} masjid={m} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
