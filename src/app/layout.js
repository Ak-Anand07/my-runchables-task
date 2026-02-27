import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://founderrise.com"),
  title: {
    default: "FounderRise",
    template: "%s | FounderRise",
  },
  description: "FounderRise helps SaaS teams scale with lifecycle automation and revenue intelligence.",
  keywords: [
    "FounderRise",
    "SaaS founders",
    "SaaS community",
    "startup masterminds",
    "SaaS growth",
    "founder network",
    "B2B SaaS",
    "ARR growth",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "FounderRise",
    title: "FounderRise",
    description: "FounderRise helps SaaS teams scale with lifecycle automation and revenue intelligence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FounderRise",
    description: "FounderRise helps SaaS teams scale with lifecycle automation and revenue intelligence.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
