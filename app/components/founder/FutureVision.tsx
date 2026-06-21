"use client";

import { Cloud, Brain, Boxes, Building2, ArrowRight, Sparkles } from "lucide-react";

const vision = [
  { icon: Cloud, title: "Cloud Platforms", desc: "Building infrastructure designed for scale, reliability and long-term performance." },
  { icon: Brain, title: "AI-Assisted Systems", desc: "Creating intelligent experiences that improve productivity and decision making." },
  { icon: Boxes, title: "Productized SaaS", desc: "Transforming ideas into scalable products that solve real-world problems." },
  { icon: Building2, title: "Enterprise Infrastructure", desc: "Engineering systems that remain dependable under growth and complexity." },
];

export default function FutureVision() {
  return (
    <section className="relative overflow-hidden py-36">
      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-0 h-[500px] w-[500px] rounded-full bg-violet-100 blur-[180px]" />
        <div className="absolute right-[10%] bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-100 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-5 py-3 text-xs uppercase tracking-[.35em]">
            <Sparkles size={14} />
            Future Vision
          </div>

          <h2 className="mt-8 text-5xl font-black tracking-[-0.05em] md:text-7xl">
            Building For
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              What Comes Next
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-neutral-600">
            FIDYNEX TECH was never designed only for today. The roadmap is focused on building systems that remain useful, adaptable and meaningful over time.
          </p>
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          {vision.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="group rounded-[36px] border bg-white/80 p-10 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_120px_rgba(0,0,0,.08)]">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 text-white transition group-hover:rotate-6">
                  <Icon size={34} />
                </div>

                <h3 className="mt-8 text-3xl font-black">
                  {item.title}
                </h3>

                <p className="mt-6 leading-8 text-neutral-600">
                  {item.desc}
                </p>

                <div className="mt-8 flex items-center gap-2 font-medium text-violet-600">
                  Roadmap
                  <ArrowRight className="transition group-hover:translate-x-2" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-32 rounded-[40px] border bg-black px-10 py-20 text-center text-white">
          <div className="mx-auto max-w-4xl">
            <h3 className="text-4xl font-black md:text-6xl">
              Winning or losing
              <br />
              was never the goal.
            </h3>
            <p className="mt-8 text-2xl text-neutral-300">
              Building was.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
