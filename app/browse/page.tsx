"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";
import { STATES } from "@/data/states";
import { MASJIDS, searchMasjids } from "@/data/masjids";
import MasjidCard from "@/components/MasjidCard";
import { Suspense } from "react";

function BrowseContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [submitted, setSubmitted] = useState(initialQuery);

  const results = submitted.trim().length >= 2 ? searchMasjids(submitted) : [];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(query);
  }

  useEffect(() => {
    setQuery(initialQuery);
    setSubmitted(initialQuery);
  }, [initialQuery]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Masjids</h1>
      <p className="text-gray-600 mb-8">Search by name, city, or state — or browse all 50 states below.</p>

      {/* Search */}
      <form onSubmit={handleSubmit} className="flex gap-3 mb-10 max-w-2xl">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search masjids, cities, states..."
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-white"
          />
        </div>
        <button
          type="submit"
          className="bg-emerald-700 hover:bg-emerald-600 text-white px-5 py-3 rounded-xl font-medium text-sm transition-colors"
        >
          Search
        </button>
      </form>

      {/* Search results */}
      {submitted.trim().length >= 2 && (
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{submitted}&rdquo;
          </h2>
          {results.length === 0 ? (
            <div className="text-gray-500 bg-white rounded-xl border border-gray-100 p-8 text-center">
              No masjids found. Try a different search term.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.map((m) => (
                <MasjidCard key={m.id} masjid={m} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* State grid */}
      {submitted.trim().length < 2 && (
        <>
          <h2 className="text-xl font-semibold text-gray-900 mb-5">All States</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {STATES.map((state) => {
              const count = MASJIDS.filter((m) => m.stateCode === state.code).length;
              return (
                <Link
                  key={state.code}
                  href={`/state/${state.code}`}
                  className="bg-white hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 rounded-xl p-5 flex items-center justify-between group transition-all"
                >
                  <div>
                    <div className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">{state.name}</div>
                    <div className="text-sm text-gray-500 mt-0.5">{count} masjid{count !== 1 ? "s" : ""}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-gray-200 group-hover:text-emerald-200 transition-colors">{state.code}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default function BrowsePage() {
  return (
    <Suspense>
      <BrowseContent />
    </Suspense>
  );
}
