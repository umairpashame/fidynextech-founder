"use client";

import { Compass, Code2, Layers3, Flame, Sparkles, ArrowRight } from "lucide-react";

const timeline = [
  { icon: Compass, title: "The Question", desc: "Technology started with curiosity. Not titles, not roadmaps—questions. How do systems respond? What happens behind the screen?" },
  { icon: Code2, title: "Learning By Building", desc: "Experimentation became the process. Failures, rewrites, debugging and iteration slowly created understanding." },
  { icon: Layers3, title: "System Thinking", desc: "The focus shifted from writing code to designing systems that remain reliable, scalable and maintainable." },
  { icon: Flame, title: "FIDYNEX TECH", desc: "The company emerged from a belief that strong ideas fail when systems are weak. Build foundations first." },
];

export default function Origin() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* GLOW */}
      <div className="absolute inset-0">
        <div className="absolute left-[-260px] top-0 h-[720px] w-[720px] rounded-full bg-violet-100 blur-[180px]" />
        <div className="absolute right-[-260px] bottom-0 h-[720px] w-[720px] rounded-full bg-cyan-100 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-36">

        {/* HEADER */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-5 py-3 text-xs uppercase tracking-[.35em]">
            <Sparkles size={14} />
            Origin
          </div>

          <h2 className="mt-12 text-5xl font-black tracking-[-0.06em] md:text-7xl">
            The Origin of <br />
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              FIDYNEX TECH
            </span>
          </h2>

          <p className="mx-auto mt-12 max-w-4xl text-lg leading-9 text-neutral-600">
            FIDYNEX TECH was created to solve a simple problem: digital products rarely fail because ideas are bad—they fail because the systems behind them are weak.
          </p>
        </div>

        {/* FEATURE */}
        <div className="mt-28 rounded-[48px] bg-black p-14 text-white">
          <h3 className="text-4xl font-black">Build Systems That Last</h3>
          <p className="mt-8 max-w-4xl text-lg leading-9 text-neutral-400">
            Every design decision, every deployment, every architecture choice was approached as part of a long-term system.
          </p>
          <div className="mt-10 inline-flex items-center gap-3 text-violet-400">
            Foundations over trends <ArrowRight />
          </div>
        </div>

        {/* TIMELINE */}
        <div className="relative mt-36">

          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-violet-300 via-blue-300 to-cyan-300 lg:block" />

          <div className="space-y-16">
            {timeline.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="relative rounded-[40px] border bg-white p-10 transition duration-500 hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(0,0,0,.08)] lg:ml-20">

                  <div className="absolute -left-[64px] top-10 hidden rounded-full border bg-white p-4 lg:block">
                    <Icon className="text-violet-600" size={24} />
                  </div>

                  <div className="inline-flex rounded-3xl bg-violet-50 p-4 lg:hidden">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-3xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-lg leading-9 text-neutral-600">
                    {item.desc}
                  </p>

                </div>
              );
            })}
          </div>

        </div>

        {/* CLOSING */}
        <div className="mt-36 text-center">
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed">
            FIDYNEX TECH was not built with certainty. <br />
            It was built with belief, discipline, and the courage to try.
          </p>
        </div>

      </div>

    </section>
  );
}
