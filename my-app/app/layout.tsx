import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fidynex Tech — Engineering Digital Systems",
    template: "%s | Fidynex Tech",
  },
  description:
    "Founder-led engineering studio building scalable, future-ready digital systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        spaceGrotesk.variable,
        jetbrainsMono.variable
      )}
    >
      <body className="min-h-full font-sans">
        {children}
      </body>
    </html>
  );
}