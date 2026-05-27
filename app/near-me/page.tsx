"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { MapPin, Loader2, SlidersHorizontal } from "lucide-react";
import { MASJIDS } from "@/data/masjids";
import type { Masjid } from "@/data/masjids";
import { haversineDistance } from "@/lib/distance";
import MasjidCard from "@/components/MasjidCard";

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });

type Status = "idle" | "loading" | "success" | "error";

interface MasjidWithDist extends Masjid {
  distance: number;
}

export default function NearMePage() {
  const [status, setStatus] = useState<Status>("idle");
  const [userLoc, setUserLoc] = useState<[number, number] | null>(null);
  const [radius, setRadius] = useState(25);
  const [nearby, setNearby] = useState<MasjidWithDist[]>([]);
  const findNearby = useCallback((lat: number, lng: number, r: number) => {
    const results = MASJIDS.map((m) => ({
      ...m,
      distance: haversineDistance(lat, lng, m.lat, m.lng),
    }))
      .filter((m) => m.distance <= r)
      .sort((a, b) => a.distance - b.distance);
    setNearby(results);
  }, []);

  const requestLocation = useCallback(() => {
    setStatus("loading");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setUserLoc([lat, lng]);
        findNearby(lat, lng, radius);
        setStatus("success");
      },
      () => {
        setStatus("error");
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, [radius, findNearby]);

  useEffect(() => {
    if (userLoc) {
      findNearby(userLoc[0], userLoc[1], radius);
    }
  }, [radius, userLoc, findNearby]);

  const displayed = nearby;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Masjids Near Me</h1>
        <p className="text-gray-600">Find Islamic centers within your chosen radius and view their prayer times.</p>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 mb-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <button
            onClick={requestLocation}
            disabled={status === "loading"}
            className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 disabled:opacity-60 text-white px-5 py-3 rounded-xl font-medium text-sm transition-colors"
          >
            {status === "loading" ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <MapPin className="w-4 h-4" />
            )}
            {status === "loading" ? "Locating..." : status === "success" ? "Update Location" : "Use My Location"}
          </button>

          <div className="flex items-center gap-3">
            <SlidersHorizontal className="w-4 h-4 text-gray-500" />
            <label className="text-sm text-gray-700 font-medium">Radius:</label>
            <select
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {[5, 10, 25, 50, 100].map((r) => (
                <option key={r} value={r}>{r} miles</option>
              ))}
            </select>
          </div>

          {status === "success" && (
            <span className="text-sm text-emerald-700 font-medium">
              {nearby.length} masjid{nearby.length !== 1 ? "s" : ""} found within {radius} miles
            </span>
          )}
        </div>

        {status === "error" && (
          <p className="mt-3 text-sm text-red-600">
            Location access denied. Please enable location permissions and try again.
          </p>
        )}
      </div>

      {status === "idle" && (
        <div className="text-center py-20 bg-white rounded-xl border border-gray-100 shadow-sm">
          <div className="inline-flex p-6 bg-emerald-50 rounded-full mb-5">
            <MapPin className="w-12 h-12 text-emerald-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Enable Location</h2>
          <p className="text-gray-600 max-w-sm mx-auto mb-6 text-sm">
            Click the button above to share your location and find masjids nearby.
          </p>
          <button
            onClick={requestLocation}
            className="bg-emerald-700 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium text-sm transition-colors"
          >
            Find Masjids Near Me
          </button>
        </div>
      )}

      {status === "success" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="h-[500px] rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <MapView
                masjids={displayed}
                center={userLoc ?? [39.5, -98.35]}
                zoom={userLoc ? 11 : 4}
                userLocation={userLoc}
              />
            </div>
          </div>

          {/* List */}
          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
            {displayed.length === 0 ? (
              <div className="bg-white rounded-xl border border-gray-100 p-6 text-center text-gray-500 text-sm">
                No masjids found within {radius} miles. Try increasing the radius.
              </div>
            ) : (
              displayed.map((m) => (
                <MasjidCard key={m.id} masjid={m} distance={m.distance} />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
