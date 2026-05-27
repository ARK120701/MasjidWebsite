"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { searchMasjids } from "@/data/masjids";
import type { Masjid } from "@/data/masjids";
import Link from "next/link";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Masjid[]>([]);
  const [focused, setFocused] = useState(false);
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setQuery(val);
    if (val.trim().length >= 2) {
      setResults(searchMasjids(val).slice(0, 8));
    } else {
      setResults([]);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/browse?q=${encodeURIComponent(query.trim())}`);
      setResults([]);
    }
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden">
          <Search className="w-5 h-5 text-gray-400 ml-4 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={handleChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 150)}
            placeholder="Search by masjid name, city, or state..."
            className="flex-1 px-4 py-4 text-gray-900 placeholder-gray-400 outline-none text-base bg-transparent"
          />
          <button
            type="submit"
            className="bg-emerald-700 hover:bg-emerald-600 text-white px-6 py-4 font-medium text-sm transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      {focused && results.length > 0 && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
          {results.map((m) => (
            <Link
              key={m.id}
              href={`/masjid/${m.id}`}
              className="flex items-start px-4 py-3 hover:bg-emerald-50 transition-colors border-b border-gray-50 last:border-0"
            >
              <div className="min-w-0">
                <div className="font-medium text-gray-900 text-sm truncate">{m.name}</div>
                <div className="text-xs text-gray-500">{m.city}, {m.state}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
