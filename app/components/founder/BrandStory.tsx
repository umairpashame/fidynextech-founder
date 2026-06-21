"use client";

import { PenTool, Layers, Sparkles, Palette, MoveUpRight } from "lucide-react";

const brand = [
  { icon: Layers, title: "Structure", desc: "Built on dependable foundations. Every visual and system decision reflects clarity and long-term thinking." },
  { icon: MoveUpRight, title: "Motion", desc: "Forward movement represents progress, adaptability and continuous evolution." },
  { icon: Sparkles, title: "Precision", desc: "Every spacing, component and interaction is intentionally designed." },
];

const visual = [
  "Clean modern typography",
  "Strong geometry",
  "Balanced spacing",
  "Forward-leaning identity",
  "Scalable across products",
  "Minimal but premium",
];

export default function BrandStory() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-violet-200/40 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-200/40 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 text-xs uppercase tracking-[0.35em] shadow-sm">
            <PenTool size={14} />
            Brand Story
          </div>

          <h2 className="mt-8 text-5xl font-black tracking-tight md:text-7xl">
            Logo.<br />
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">Identity.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-neutral-600">
            The FIDYNEX TECH brand communicates precision, confidence and long-term thinking. Every visual element exists for a reason — never decoration.
          </p>
        </div>

        {/* Logo Reel */}
        <div className="mt-24 overflow-hidden rounded-[40px] border border-neutral-200 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.12)]">
          <video
            src="/brand/logo-reel.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </div>

        {/* Logo Philosophy */}
        <div className="mt-24 rounded-[36px] border border-neutral-200 bg-white/80 p-12 backdrop-blur shadow-[0_30px_120px_rgba(0,0,0,0.06)]">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.35em] text-violet-600">Logo Philosophy</p>
            <h3 className="mt-4 text-4xl font-black">FIDYNEX TECH</h3>
            <p className="mt-8 text-lg leading-9 text-neutral-600">
              The logo represents structure, motion and precision. Geometry communicates stability while forward movement reflects innovation and future growth.
            </p>
          </div>
        </div>

        {/* Brand Pillars */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {brand.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="group rounded-[32px] border border-neutral-200 bg-white p-10 transition duration-500 hover:-translate-y-2 hover:shadow-xl">
                <div className="inline-flex rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 p-4 text-white">
                  <Icon size={28} />
                </div>
                <h3 className="mt-8 text-3xl font-black">{item.title}</h3>
                <p className="mt-5 leading-8 text-neutral-600">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Visual Language */}
        <div className="mt-28">
          <h3 className="text-center text-4xl font-black">Visual Language</h3>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {visual.map((v) => (
              <div key={v} className="rounded-3xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-8 text-center font-medium transition hover:scale-[1.03]">
                {v}
              </div>
            ))}
          </div>
        </div>

        {/* Color Philosophy */}
        <div className="mt-28 rounded-[40px] bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 p-[1px]">
          <div className="rounded-[40px] bg-white px-12 py-20">
            <div className="flex items-center gap-4">
              <Palette />
              <h3 className="text-4xl font-black">Color Philosophy</h3>
            </div>
            <p className="mt-8 max-w-4xl text-lg leading-9 text-neutral-600">
              Neutral foundations establish trust. Accent gradients express innovation. White creates clarity. Violet reflects ambition. Blue represents engineering confidence. Cyan introduces motion and modernity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
