import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Umair Pasha — Founder & Lead Architect | FIDYNEX TECH",
  description:
    "Founder & Lead Architect of FIDYNEX TECH. Building future-ready digital systems with precision, trust, and intent.",
  keywords: [
    "Umair Pasha",
    "FIDYNEX TECH",
    "Founder",
    "Lead Architect",
    "System Architecture",
    "Scalable Digital Systems",
    "Next.js Developer",
    "Cloud Architect",
  ],
  authors: [{ name: "Umair Pasha" }],
  openGraph: {
    title: "Umair Pasha — Founder of FIDYNEX TECH",
    description:
      "Building scalable, secure, and high-performance digital systems.",
    images: [
      {
        url: "https://res.cloudinary.com/fidynextech/image/upload/v1763332647/me-umair_fefz0q.jpg",
      },
    ],
    type: "profile",
  },
  icons: {
    icon: "https://res.cloudinary.com/fidynextech/image/upload/v1762827757/fidynex_logo_white_izqwri.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}