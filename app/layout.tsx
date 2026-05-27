import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "MasjidFinder USA – Find Masjids & Prayer Times Across America",
  description:
    "Find masjids (mosques) near you across all 50 states. View salah prayer times, browse by state and city, and locate your nearest Islamic center.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="bg-emerald-900 text-emerald-200 text-center py-6 text-sm mt-auto">
          <p>MasjidFinder USA &mdash; Helping the Ummah find their nearest masjid</p>
          <p className="mt-1 text-emerald-400 text-xs">Prayer times provided by Aladhan API &bull; Masjid data from community contributions</p>
        </footer>
      </body>
    </html>
  );
}
