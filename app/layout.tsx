import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = "https://fidynextech-founder.vercel.app";
const ogImage = "/fidynex-og.svg";

export const metadata: Metadata = {
  /* ------------------------------
     Google Search Console
  -------------------------------- */
  verification: {
    google: "google76b4bd54d34fc3e8",
  },

  /* ------------------------------
     Canonical
  -------------------------------- */
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },

  /* ------------------------------
     SEO
  -------------------------------- */
  title: {
    default: "Umair Pasha — Founder & Lead Architect | FIDYNEX TECH",
    template: "%s | FIDYNEX TECH",
  },

  description:
    "Founder & Lead Architect of FIDYNEX TECH. Building premium digital products, scalable systems, and future-ready technology.",

  keywords: [
    "Umair Pasha",
    "FIDYNEX TECH",
    "Founder",
    "Lead Architect",
    "Software Developer",
    "Next.js",
    "AI",
    "Cloud",
    "System Architecture",
    "Digital Products",
  ],

  authors: [
    {
      name: "Umair Pasha",
      url: "https://umairpasha.vercel.app",
    },
  ],

  creator: "Umair Pasha",

  /* ------------------------------
     Open Graph
  -------------------------------- */
  openGraph: {
    title: "Umair Pasha — Founder & Lead Architect | FIDYNEX TECH",
    description: "Building premium digital products and scalable systems.",
    url: siteUrl,
    siteName: "FIDYNEX TECH",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "FIDYNEX TECH — Founder Umair Pasha",
      },
    ],
  },

  /* ------------------------------
     Twitter
  -------------------------------- */
  twitter: {
    card: "summary_large_image",
    title: "Umair Pasha — Founder | FIDYNEX TECH",
    description: "Building future-ready digital systems.",
    images: [ogImage],
  },

  /* ------------------------------
     Site Icons
  -------------------------------- */
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },

  /* ------------------------------
     Robots
  -------------------------------- */
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
