"use client";

import { Sparkles, Clock3, Brain, RefreshCw, Rocket, Cpu } from "lucide-react";

const meanings = [
  { icon: Clock3, title: "Future", short: "Built for long-term relevance", desc: "Systems designed for longevity, adaptability and meaningful evolution—not temporary solutions.", gradient: "from-violet-500 to-fuchsia-500" },
  { icon: Brain, title: "Intelligent", short: "Engineering guided by logic", desc: "Every decision is shaped through reasoning, optimization and disciplined execution.", gradient: "from-blue-500 to-cyan-500" },
  { icon: RefreshCw, title: "Dynamic", short: "Systems that evolve", desc: "Architectures adapt as products grow, requirements shift and businesses expand.", gradient: "from-emerald-500 to-cyan-500" },
  { icon: Rocket, title: "Next-Gen", short: "Forward-looking technology", desc: "Modern frameworks, scalable foundations and cloud-ready thinking.", gradient: "from-orange-500 to-pink-500" },
  { icon: Cpu, title: "Technologies", short: "Built for production", desc: "Practical systems engineered for real-world performance and reliability.", gradient: "from-neutral-900 to-neutral-700" },
];

export default function MeaningOfFidynex() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa]">

      {/* GLOW */}
      <div className="absolute inset-0">
        <div className="absolute left-[-260px] top-20 h-[720px] w-[720px] rounded-full bg-violet-100 blur-[180px]" />
        <div className="absolute right-[-260px] bottom-0 h-[720px] w-[720px] rounded-full bg-cyan-100 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-36">

        {/* HEADER */}
        <div className="text-center">

          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-5 py-3 text-xs uppercase tracking-[.35em] shadow-sm">
            <Sparkles size={14} />
            Meaning of FIDYNEX
          </div>

          <h2 className="mt-12 text-5xl font-black tracking-[-0.06em] md:text-7xl">
            Future <br /> Intelligent <br /> Dynamic <br /> Next-Gen <br /> Technologies
          </h2>

          <p className="mx-auto mt-12 max-w-4xl text-lg leading-9 text-neutral-600">
            FIDYNEX TECH is not simply a name. Each word defines a design principle applied across architecture, product thinking, engineering standards and long-term execution.
          </p>

        </div>

        {/* CARDS */}
        <div className="mt-28 grid gap-8 lg:grid-cols-2">

          {meanings.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="group relative overflow-hidden rounded-[42px] border bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_50px_120px_rgba(0,0,0,.08)]">

                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition duration-700 group-hover:opacity-[0.045]`} />

                <div className={`inline-flex rounded-3xl bg-gradient-to-r ${item.gradient} p-4 text-white`}>
                  <Icon size={26} />
                </div>

                <div className="relative">

                  <h3 className="mt-8 text-4xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm uppercase tracking-[.3em] text-neutral-500">
                    {item.short}
                  </p>

                  <p className="mt-8 text-lg leading-9 text-neutral-600">
                    {item.desc}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

        {/* CLOSING */}
        <div className="mt-32 rounded-[48px] bg-black px-10 py-20 text-center text-white">

          <h3 className="text-4xl font-black md:text-6xl">
            One Name. <br /> Five Principles.
          </h3>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-neutral-400">
            Together these principles form the foundation behind every system, decision and experience created under FIDYNEX TECH.
          </p>

        </div>

      </div>

    </section>
  );
}
