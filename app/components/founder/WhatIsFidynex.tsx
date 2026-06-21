"use client";

import { Building2, Layers3, Cpu, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

const meaning = [
  { title: "Future", desc: "Systems designed for longevity, adaptability and relevance." },
  { title: "Intelligent", desc: "Logic-driven decisions and optimized architectures." },
  { title: "Dynamic", desc: "Flexible systems that evolve with changing requirements." },
  { title: "Next-Gen", desc: "Modern frameworks and forward-looking engineering." },
  { title: "Technologies", desc: "Production-ready systems built for real-world execution." },
];

const pillars = ["Engineering Discipline", "Product Thinking", "Brand Trust", "Long-Term Value"];

export default function WhatIsFidynex() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-200px] top-[120px] h-[720px] w-[720px] rounded-full bg-violet-100/70 blur-[180px]" />
        <div className="absolute right-[-200px] bottom-[120px] h-[720px] w-[720px] rounded-full bg-cyan-100/70 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-700">
            <Building2 size={14} />
            What Is FIDYNEX TECH
          </div>

          <h2 className="mt-10 text-5xl font-black tracking-[-0.06em] text-neutral-900 md:text-7xl">
            Building Digital Futures
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-neutral-600">
            FIDYNEX TECH is a technology-driven digital engineering company focused on building scalable,
            secure and future-ready products. Every system is designed not only to launch — but to endure.
          </p>
        </div>

        {/* Introduction */}
        <div className="mt-24 rounded-[42px] border border-neutral-200 bg-gradient-to-b from-violet-50 via-white to-cyan-50 p-12 shadow-[0_40px_120px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-3">
            <Sparkles className="text-violet-600" />
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-700">
              Introduction
            </span>
          </div>

          <h3 className="mt-8 text-4xl font-black text-neutral-900">Technology with Intent</h3>

          <div className="mt-8 space-y-8 text-lg leading-9 text-neutral-600">
            <p>
              What started as an individual engineering journey evolved into a structured technology brand
              focused on execution, architecture and long-term value creation.
            </p>
            <p>
              FIDYNEX TECH exists at the intersection of engineering discipline, product thinking and brand trust.
            </p>
            <p className="font-semibold text-neutral-900">
              We do not chase trends. We build foundations.
            </p>
          </div>
        </div>

        {/* Meaning */}
        <div className="mt-32">
          <h3 className="text-center text-5xl font-black text-neutral-900">
            FIDYNEX →
            <span className="mt-5 block text-2xl font-medium text-neutral-500">
              Future Intelligent Dynamic Next-Gen Technologies
            </span>
          </h3>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {meaning.map((item) => (
              <div key={item.title} className="rounded-[34px] border border-neutral-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                <Layers3 className="text-violet-600" />
                <h4 className="mt-6 text-3xl font-black text-neutral-900">{item.title}</h4>
                <p className="mt-5 leading-8 text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core */}
        <div className="mt-32 grid gap-10 lg:grid-cols-2">
          <div className="rounded-[40px] bg-neutral-950 p-12 text-white">
            <Cpu size={36} />
            <h3 className="mt-8 text-4xl font-black">Vision & Core Intent</h3>

            <div className="mt-10 space-y-5">
              {["Build technology that lasts", "Engineer systems that scale", "Solve real-world problems", "Operate with ownership and trust"].map((item) => (
                <div key={item} className="flex items-center gap-4 text-lg">
                  <ArrowRight size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[40px] border border-neutral-200 bg-white p-12">
            <ShieldCheck size={36} className="text-cyan-600" />
            <h3 className="mt-8 text-4xl font-black text-neutral-900">Pillars</h3>

            <div className="mt-10 space-y-5">
              {pillars.map((item) => (
                <div key={item} className="rounded-2xl bg-neutral-50 px-6 py-5 text-lg font-medium text-neutral-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="mt-32 text-center">
          <h3 className="text-5xl font-black text-neutral-900">
            Innovate.
            <br />
            Execute.
            <br />
            Scale.
          </h3>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-neutral-600">
            FIDYNEX TECH is more than a technology company. It is a long-term digital engineering partner
            built on resilience, ownership and execution.
          </p>
        </div>
      </div>
    </section>
  );
}
