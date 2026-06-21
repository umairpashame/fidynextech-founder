"use client";

import Link from "next/link";
import { Globe, ArrowUpRight, Laptop, Briefcase, Sparkles } from "lucide-react";

const links = [
  { title: "Main Website", url: "https://fidynextech.com", icon: Globe },
  { title: "Fidynex AI", url: "https://fidynextech-ai.vercel.app", icon: Sparkles },
  { title: "Help Platform", url: "https://fidynex-help.vercel.app", icon: Briefcase },
  { title: "Portfolio", url: "https://umairpasha.vercel.app", icon: Laptop },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-50 to-blue-50" />
      <div className="absolute left-1/2 top-0 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-200 via-blue-200 to-cyan-100 blur-[180px] opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        {/* Top */}
        <div className="flex flex-col gap-12 border-b border-neutral-200 pb-20 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">FIDYNEX TECH</p>

            <h2 className="mt-6 text-5xl font-black tracking-[-0.06em] text-neutral-900 sm:text-6xl">
              Build.
              <br />
              Scale.
              <br />
              Continue.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-neutral-600">
              Digital systems designed with discipline, engineering and long-term thinking.
            </p>
          </div>

          <Link
            href="https://fidynextech.com"
            target="_blank"
            className="flex h-[180px] w-[180px] items-center justify-center rounded-full bg-black text-white transition-transform duration-500 hover:scale-105"
          >
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.3em]">Visit</p>
              <div className="mt-4 flex justify-center">
                <ArrowUpRight size={36} />
              </div>
            </div>
          </Link>
        </div>

        {/* Links */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {links.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.url}
                target="_blank"
                className="group rounded-[32px] border border-neutral-200 bg-white/90 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(0,0,0,0.08)]"
              >
                <Icon size={26} className="text-violet-600 transition-transform duration-300 group-hover:scale-110" />

                <h3 className="mt-6 text-2xl font-black text-neutral-900">
                  {item.title}
                </h3>

                <div className="mt-6 inline-flex items-center gap-2 font-semibold text-violet-600">
                  Open
                  <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col gap-6 border-t border-neutral-200 pt-10 text-sm text-neutral-500 lg:flex-row lg:justify-between">
          <div>© {new Date().getFullYear()} FIDYNEX TECH</div>
          <div>Founder & Lead Architect — Umair Pasha</div>
          <div>Mysuru • Karnataka • India</div>
        </div>
      </div>
    </footer>
  );
}
