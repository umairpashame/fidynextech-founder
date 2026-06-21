import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets:["latin"],
  variable:"--font-space-grotesk",
  display:"swap",
});

export const metadata:Metadata = {
  metadataBase:new URL("https://fidynextech.com"),
  title:{
    default:"Umair Pasha — Founder & Lead Architect | FIDYNEX TECH",
    template:"%s | FIDYNEX TECH",
  },
  description:"Founder & Lead Architect of FIDYNEX TECH. Building premium digital products, scalable systems, and future-ready technology.",
  keywords:[
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
  authors:[{name:"Umair Pasha",url:"https://umairpasha.vercel.app"}],
  creator:"Umair Pasha",
  openGraph:{
    title:"Umair Pasha — Founder & Lead Architect | FIDYNEX TECH",
    description:"Building premium digital products and scalable systems.",
    url:"https://fidynextech.com",
    siteName:"FIDYNEX TECH",
    type:"website",
    images:[{url:"/og-cover.jpg",width:1200,height:630}],
  },
  twitter:{
    card:"summary_large_image",
    title:"Umair Pasha — Founder | FIDYNEX TECH",
    description:"Building future-ready digital systems.",
    images:["/og-cover.jpg"],
  },
  icons:{
    icon:"/favicon.svg",
    shortcut:"/favicon.svg",
    apple:"/favicon.svg",
  },
  robots:{index:true,follow:true},
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
