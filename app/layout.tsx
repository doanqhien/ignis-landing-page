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
  metadataBase: new URL('https://ignishypersonics.com'),
  openGraph: {
    title: 'Ignis Hypersonic',
    description: 'Sovereign Australian propulsion enabling next-generation defence and commercial applications. Rotating Detonation Engine technology for hypersonic flight.',
    url: 'https://ignishypersonics.com',
    siteName: 'Ignis Hypersonic',
    images: [
      {
        url: 'https://ignishypersonics.com/Thumbnail.png', 
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
    images: ['https://ignishypersonics.com/Thumbnail.png'],
  },
  icons: {
    icon: 'https://ignishypersonics.com/icon.png',
    apple: 'https://ignishypersonics.com/icon.png',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ignis Hypersonics",
  "alternateName": ["Ignis", "IgnisHypersonics"],
  "url": "https://ignishypersonics.com/",
  "description": "Sovereign Australian propulsion enabling next-generation defence and commercial applications. Rotating Detonation Engine technology for hypersonic flight."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("relative h-full", saans.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative min-h-full flex flex-col font-saans antialiased">
        {children}
      </body>
    </html>
  );
}
