import Link from "next/link";
import { MapPin, Phone, Globe, Clock } from "lucide-react";
import type { Masjid } from "@/data/masjids";

interface Props {
  masjid: Masjid;
  distance?: number;
  showPrayerLink?: boolean;
}

export default function MasjidCard({ masjid, distance, showPrayerLink = true }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-gray-900 text-base leading-tight">{masjid.name}</h3>
        {distance !== undefined && (
          <span className="text-xs text-emerald-700 font-medium bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full whitespace-nowrap">
            {distance.toFixed(1)} mi
          </span>
        )}
      </div>

      <div className="space-y-1.5 text-sm text-gray-600">
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
          <span>{masjid.address}, {masjid.city}, {masjid.stateCode} {masjid.zip}</span>
        </div>
        {masjid.phone && (
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <a href={`tel:${masjid.phone}`} className="hover:text-emerald-700">{masjid.phone}</a>
          </div>
        )}
        {masjid.website && (
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <a
              href={masjid.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-700 truncate"
            >
              {masjid.website.replace(/^https?:\/\//, "")}
            </a>
          </div>
        )}
      </div>

      {showPrayerLink && (
        <Link
          href={`/masjid/${masjid.id}`}
          className="mt-auto flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-900 transition-colors"
        >
          <Clock className="w-4 h-4" />
          View Prayer Times
        </Link>
      )}
    </div>
  );
}
