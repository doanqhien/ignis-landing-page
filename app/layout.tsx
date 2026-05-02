import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import localFont from 'next/font/local';

// font local
const saans = localFont({
  src: './fonts/SaansCollectionVF-TRIAL.ttf',
  variable: '--font-saans',
  display: 'swap',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: "IGNIS — Pioneering the Future of Hypersonic Flight",
  description:
    "Sovereign Australian propulsion enabling next-generation defence and commercial applications. Rotating Detonation Engine technology for hypersonic flight.",
  keywords: [
    "hypersonic",
    "propulsion",
    "detonation engine",
    "aerospace",
    "defence",
    "IGNIS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("relative h-full", saans.variable)}>
      <body className="relative min-h-full flex flex-col font-saans antialiased">
        {children}
      </body>
    </html>
  );
}
