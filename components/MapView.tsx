"use client";

import { useEffect, useRef } from "react";
import type { Masjid } from "@/data/masjids";

interface Props {
  masjids: Masjid[];
  center?: [number, number];
  zoom?: number;
  userLocation?: [number, number] | null;
  onMasjidClick?: (masjid: Masjid) => void;
}

export default function MapView({
  masjids,
  center = [39.5, -98.35],
  zoom = 4,
  userLocation,
  onMasjidClick,
}: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<ReturnType<typeof import("leaflet")["map"]> | null>(null);

  useEffect(() => {
    if (!mapRef.current || leafletMapRef.current) return;

    let L: typeof import("leaflet");
    import("leaflet").then((mod) => {
      L = mod.default;

      // Fix default marker icon paths
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current!).setView(center, zoom);
      leafletMapRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      const masjidIcon = L.divIcon({
        html: `<div style="background:#059669;width:28px;height:28px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:2px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.3)"></div>`,
        className: "",
        iconSize: [28, 28],
        iconAnchor: [14, 28],
      });

      masjids.forEach((m) => {
        const marker = L.marker([m.lat, m.lng], { icon: masjidIcon })
          .addTo(map)
          .bindPopup(
            `<div style="min-width:180px">
              <b style="font-size:14px">${m.name}</b><br/>
              <span style="font-size:12px;color:#555">${m.address}<br/>${m.city}, ${m.stateCode}</span>
              ${m.phone ? `<br/><span style="font-size:12px">${m.phone}</span>` : ""}
              <br/><a href="/masjid/${m.id}" style="font-size:12px;color:#059669;font-weight:600;display:block;margin-top:6px">View Prayer Times →</a>
            </div>`
          );

        if (onMasjidClick) {
          marker.on("click", () => onMasjidClick(m));
        }
      });

      if (userLocation) {
        const userIcon = L.divIcon({
          html: `<div style="background:#2563eb;width:16px;height:16px;border-radius:50%;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.4)"></div>`,
          className: "",
          iconSize: [16, 16],
          iconAnchor: [8, 8],
        });
        L.marker(userLocation, { icon: userIcon })
          .addTo(map)
          .bindPopup("<b>Your Location</b>");
      }
    });

    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update markers when masjids change
  useEffect(() => {
    if (!leafletMapRef.current) return;
    // Re-mount on next render cycle after initial mount
  }, [masjids]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />
      <div ref={mapRef} className="w-full h-full rounded-xl" />
    </>
  );
}
