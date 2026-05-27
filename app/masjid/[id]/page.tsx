import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, Globe, ChevronRight, Building2 } from "lucide-react";
import { getMasjidById, MASJIDS } from "@/data/masjids";
import { STATE_BY_CODE } from "@/data/states";
import PrayerTimesCard from "@/components/PrayerTimesCard";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return MASJIDS.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const masjid = getMasjidById(id);
  if (!masjid) return {};
  return {
    title: `${masjid.name} – Prayer Times & Info | MasjidFinder USA`,
    description: `View prayer times and details for ${masjid.name} in ${masjid.city}, ${masjid.state}.`,
  };
}

export default async function MasjidPage({ params }: Props) {
  const { id } = await params;
  const masjid = getMasjidById(id);
  if (!masjid) notFound();

  const state = STATE_BY_CODE[masjid.stateCode];

  // Nearby masjids (same state, different id)
  const nearby = MASJIDS.filter(
    (m) => m.stateCode === masjid.stateCode && m.id !== masjid.id
  ).slice(0, 4);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 flex-wrap">
        <Link href="/browse" className="hover:text-emerald-700">Browse</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href={`/state/${masjid.stateCode}`} className="hover:text-emerald-700">{masjid.state}</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium truncate">{masjid.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-start gap-4 mb-5">
              <div className="bg-emerald-100 rounded-xl p-3 flex-shrink-0">
                <Building2 className="w-7 h-7 text-emerald-700" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 leading-tight">{masjid.name}</h1>
                <p className="text-gray-500 text-sm mt-1">{masjid.city}, {masjid.state}</p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <MapPin className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-700">Address</div>
                  <div className="text-gray-600">{masjid.address}, {masjid.city}, {masjid.stateCode} {masjid.zip}</div>
                </div>
              </div>
              {masjid.phone && (
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <Phone className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-700">Phone</div>
                    <a href={`tel:${masjid.phone}`} className="text-emerald-700 hover:underline">{masjid.phone}</a>
                  </div>
                </div>
              )}
              {masjid.website && (
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <Globe className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-700">Website</div>
                    <a
                      href={masjid.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:underline break-all"
                    >
                      {masjid.website.replace(/^https?:\/\//, "")}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Google Maps link */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(masjid.name + " " + masjid.address + " " + masjid.city)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 w-full bg-emerald-700 hover:bg-emerald-600 text-white py-3 rounded-xl font-medium text-sm transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
          </div>

          {/* Map embed */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden h-64">
            <iframe
              title={`Map of ${masjid.name}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${masjid.lng - 0.02},${masjid.lat - 0.015},${masjid.lng + 0.02},${masjid.lat + 0.015}&layer=mapnik&marker=${masjid.lat},${masjid.lng}`}
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Prayer times */}
          <PrayerTimesCard lat={masjid.lat} lng={masjid.lng} />

          {/* Other masjids in state */}
          {nearby.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">
                Other Masjids in {state?.name}
              </h3>
              <ul className="space-y-2">
                {nearby.map((m) => (
                  <li key={m.id}>
                    <Link
                      href={`/masjid/${m.id}`}
                      className="block text-sm text-emerald-700 hover:text-emerald-900 hover:underline"
                    >
                      {m.name}
                    </Link>
                    <p className="text-xs text-gray-400">{m.city}</p>
                  </li>
                ))}
              </ul>
              <Link
                href={`/state/${masjid.stateCode}`}
                className="mt-3 block text-xs text-emerald-700 hover:underline font-medium"
              >
                View all in {state?.name} →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
