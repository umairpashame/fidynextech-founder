"use client";

import { Globe, LayoutTemplate, Cloud, Palette, Zap, ShieldCheck, ArrowUpRight, Sparkles } from "lucide-react";

const services = [
  { icon: Globe, title: "Web & Application Engineering", desc: "Scalable digital platforms designed with modern architecture, performance and maintainability." },
  { icon: LayoutTemplate, title: "UI / UX Design Systems", desc: "Interfaces built with clarity, usability and consistent visual language." },
  { icon: Cloud, title: "Cloud-Ready Architecture", desc: "Deployment strategies and infrastructure prepared for long-term scale." },
  { icon: Palette, title: "Branding & Digital Identity", desc: "Identity systems engineered to create trust and recognizable experiences." },
  { icon: Zap, title: "Performance Optimization", desc: "Fast loading, efficient execution and measurable improvements." },
  { icon: ShieldCheck, title: "Secure & Scalable Delivery", desc: "Reliable deployments with maintainability and growth in mind." },
];

export default function WhatWeBuild() {
  return (
    <section className="relative overflow-hidden py-32 bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-violet-100/70 blur-[180px]" />
        <div className="absolute right-0 bottom-0 h-[520px] w-[520px] rounded-full bg-cyan-100/70 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-700">
            <Sparkles size={14} />
            What We Build
          </div>

          <h2 className="mt-8 text-5xl font-black tracking-[-0.05em] text-neutral-900 md:text-7xl">
            Engineering
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              With Intent
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-neutral-600">
            Every solution is built with architectural thinking, performance awareness and long-term scalability.
            Technology should feel simple while remaining powerful.
          </p>
        </div>

        {/* Services */}
        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="group rounded-[34px] border border-neutral-200 bg-white p-10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_120px_rgba(0,0,0,0.08)]">
                <div className="inline-flex rounded-3xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 p-5 text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-3xl font-black leading-tight text-neutral-900">
                  {service.title}
                </h3>

                <p className="mt-6 leading-8 text-neutral-600">
                  {service.desc}
                </p>

                <div className="mt-8 flex items-center gap-2 font-semibold text-violet-600">
                  Built to scale
                  <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing */}
        <div className="mt-24 rounded-[40px] bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 p-[1px]">
          <div className="rounded-[40px] bg-white px-12 py-20 text-center">
            <h3 className="text-4xl font-black text-neutral-900 md:text-5xl">
              Each system is engineered with intent.
            </h3>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-neutral-600">
              We design products to endure — combining engineering discipline,
              thoughtful interfaces, scalable infrastructure and long-term ownership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
