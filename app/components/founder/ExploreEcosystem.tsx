"use client";

import Link from "next/link";
import { ArrowUpRight, Globe, Brain, LifeBuoy, User, Sparkles } from "lucide-react";

const projects = [
  {
    title: "FIDYNEX TECH",
    subtitle: "Main Platform",
    url: "https://fidynextech.com",
    icon: Globe,
    gradient: "from-violet-600 via-blue-600 to-cyan-500",
    desc: "Official digital platform focused on engineering, products and scalable systems.",
  },
  {
    title: "FIDYNEX AI",
    subtitle: "AI Products",
    url: "https://fidynextech-ai.vercel.app",
    icon: Brain,
    gradient: "from-fuchsia-600 via-violet-600 to-blue-500",
    desc: "AI experiences and intelligent systems designed for modern workflows.",
  },
  {
    title: "FIDYNEX HELP",
    subtitle: "Support Platform",
    url: "https://fidynex-help.vercel.app",
    icon: LifeBuoy,
    gradient: "from-cyan-600 via-sky-600 to-blue-600",
    desc: "Support ecosystem built for guidance, documentation and user experience.",
  },
  {
    title: "UMAIR PORTFOLIO",
    subtitle: "Founder Showcase",
    url: "https://umairpasha.vercel.app",
    icon: User,
    gradient: "from-neutral-900 via-neutral-800 to-neutral-700",
    desc: "Personal portfolio, experiments and founder journey.",
  },
];

export default function ExploreEcosystem() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[10%] h-[520px] w-[520px] rounded-full bg-violet-100 blur-[180px]" />
        <div className="absolute right-[-10%] bottom-0 h-[520px] w-[520px] rounded-full bg-cyan-100 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-6 py-3 text-xs uppercase tracking-[.35em]">
            <Sparkles size={14} />
            Explore Ecosystem
          </div>

          <h2 className="mt-10 text-5xl font-black tracking-[-.05em] md:text-7xl">
            One Vision.
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Multiple Platforms
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-neutral-600">
            Built through iteration, design and engineering. Each platform serves a focused purpose while remaining connected to the same philosophy.
          </p>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          {projects.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.url}
                target="_blank"
                className="group relative overflow-hidden rounded-[36px] border bg-white p-10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_60px_160px_rgba(0,0,0,.08)]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition duration-500 group-hover:opacity-[0.06]`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white transition group-hover:bg-white group-hover:text-black">
                      <Icon size={28} />
                    </div>

                    <div className="rounded-full border px-4 py-2 text-xs uppercase tracking-wider">
                      Live
                    </div>
                  </div>

                  <div className="mt-10">
                    <p className="text-sm uppercase tracking-[.25em] text-neutral-500">
                      {item.subtitle}
                    </p>

                    <h3 className="mt-4 text-4xl font-black">
                      {item.title}
                    </h3>

                    <p className="mt-6 max-w-xl leading-8 text-neutral-600 transition group-hover:text-neutral-900">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-10 inline-flex items-center gap-3 font-semibold">
                    Explore
                    <ArrowUpRight className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-24 text-center">
          <p className="text-lg text-neutral-500">
            More platforms. More products. More innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
