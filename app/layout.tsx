import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
