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
  title: "Ignis Hypersonic",
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
  metadataBase: new URL('https://ignis-6jn.pages.dev'),
  openGraph: {
    title: 'Ignis Hypersonic',
    description: 'Sovereign Australian propulsion enabling next-generation defence and commercial applications. Rotating Detonation Engine technology for hypersonic flight.',
    url: 'https://ignis-6jn.pages.dev',
    siteName: 'Ignis Hypersonic',
    images: [
      {
        url: '/opengraph-image.png', 
        width: 1200,
        height: 630,
        alt: 'Ignis Hypersonic',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ignis Hypersonic',
    description: 'Sovereign Australian propulsion enabling next-generation defence and commercial applications. Rotating Detonation Engine technology for hypersonic flight.',
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: '/favicon.ico', 
  },
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
