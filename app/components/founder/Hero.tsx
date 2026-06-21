"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Globe, ChevronDown } from "lucide-react";

export default function FounderPage() {
  return (
    <main className="relative overflow-hidden bg-[#fafafa] text-neutral-900">

      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-200 via-blue-100 to-cyan-100 blur-[180px]" />
        <div className="absolute right-0 top-[320px] h-[600px] w-[600px] rounded-full bg-blue-50 blur-[150px]" />
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-32">

        {/* BADGE */}
        <div className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-3 text-xs uppercase tracking-[.35em] shadow-sm">
          <Sparkles size={14} />
          Founder & Lead Architect — FIDYNEX TECH
        </div>

        <div className="mt-20 grid items-center gap-24 lg:grid-cols-2">

          {/* LEFT */}
          <div className="animate-slide-left">

            <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.08em] sm:text-8xl">
              UMAIR <br />
              <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                PASHA
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-2xl leading-relaxed text-neutral-600">
              Building future-ready digital systems with precision, trust, and intent.
            </p>

            <p className="mt-6 text-sm uppercase tracking-widest text-neutral-500">
              Mysuru, Karnataka, India
            </p>

            <div className="mt-14 flex flex-wrap gap-4">

              <Link
                href="https://fidynextech.com"
                target="_blank"
                className="group inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition hover:scale-[1.04]"
              >
                Visit FIDYNEX
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="https://umairpasha.vercel.app"
                target="_blank"
                className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-8 py-4 text-sm font-medium transition hover:border-black hover:bg-black hover:text-white"
              >
                Portfolio
              </Link>

            </div>

            <div className="mt-24 flex items-center gap-2 text-sm text-neutral-400">
              <ChevronDown size={18} />
              Scroll to explore story
            </div>

          </div>

          {/* RIGHT */}
          <div className="animate-slide-right">

            <div className="overflow-hidden rounded-[40px] bg-white p-5 shadow-[0_50px_140px_rgba(0,0,0,.08)]">
              <Image
                src="/profile.png"
                alt="Umair Pasha"
                width={900}
                height={1200}
                priority
                className="h-[720px] w-full rounded-[34px] object-cover object-top transition duration-700 hover:scale-[1.03]"
              />
            </div>

          </div>

        </div>

      </section>

      {/* NEXT SECTION INDICATOR */}
      <section className="pb-32 text-center">
        <div className="inline-flex items-center gap-3 text-neutral-500">
          <Globe size={18} />
          <span className="text-sm uppercase tracking-widest">Next → Founder Story</span>
        </div>
      </section>

    </main>
  );
}
