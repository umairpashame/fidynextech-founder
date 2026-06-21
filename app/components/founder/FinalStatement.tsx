"use client";

import { ArrowUpRight, Sparkles, Flag } from "lucide-react";

export default function FinalStatement() {
  return (
    <section className="relative overflow-hidden py-40">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-100 via-blue-100 to-cyan-100 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white/90 px-6 py-3 text-xs uppercase tracking-[.35em]">
            <Sparkles size={14} />
            Final Statement
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-6xl text-center">
          <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            FIDYNEX TECH
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Was Not Built
            </span>
            <br />
            With Certainty
          </h1>

          <p className="mx-auto mt-12 max-w-4xl text-xl leading-10 text-neutral-600">
            It was built with belief, discipline, curiosity, and the courage to continue even when outcomes were unknown.
          </p>
        </div>

        <div className="mx-auto mt-24 max-w-5xl rounded-[42px] border bg-white/90 p-10 shadow-[0_60px_180px_rgba(0,0,0,.08)] backdrop-blur md:p-16">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-black text-white">
              <Flag size={28} />
            </div>

            <div>
              <p className="text-sm uppercase tracking-[.35em] text-neutral-500">
                Founder Message
              </p>
              <h3 className="text-3xl font-black">
                Umair Pasha
              </h3>
            </div>
          </div>

          <div className="mt-16 border-l-4 border-violet-600 pl-8">
            <p className="text-3xl font-medium leading-[1.5] md:text-5xl">
              “I build technology that makes future-ready systems feel simple today.”
            </p>

            <p className="mt-10 text-xl leading-9 text-neutral-600">
              I don’t know if this journey will win or lose — but I know it deserves to exist. The decision to build defines the journey.
            </p>
          </div>
        </div>

        <div className="mt-32 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-black px-10 py-5 text-white transition hover:scale-[1.02]">
            Continue Building
            <ArrowUpRight />
          </div>

          <p className="mt-8 text-sm uppercase tracking-[.4em] text-neutral-400">
            Founder • Lead Architect • FIDYNEX TECH
          </p>
        </div>
      </div>
    </section>
  );
}
