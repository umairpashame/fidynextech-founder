"use client";

import { Shield, Cpu, Layers, TrendingUp, ArrowRight } from "lucide-react";

const responsibilities = [
  "System architecture and technical direction",
  "Engineering standards and best practices",
  "Performance, scalability and security design",
  "Translating business requirements into production systems",
];

export default function ProfessionalBio() {
  return (
    <section id="professional-bio" className="relative overflow-hidden py-32 bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-50/60 to-white" />
      <div className="absolute right-0 top-24 h-[520px] w-[520px] rounded-full bg-violet-300/20 blur-[160px]" />
      <div className="absolute left-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-200/30 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-violet-600">
            <Shield size={14} />
            Professional Bio
          </div>

          <h2 className="mt-8 text-5xl font-black tracking-[-0.06em] text-neutral-900 md:text-7xl">
            Founder &
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Lead Architect
            </span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-neutral-600">
            Umair Pasha leads FIDYNEX TECH with a focus on scalable engineering,
            architectural clarity and systems designed for long-term value.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[1.3fr_.7fr]">
          {/* Left */}
          <div className="space-y-8 fade-up">
            <div className="rounded-[36px] border border-neutral-200 bg-white p-10 shadow-[0_20px_80px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3">
                <Cpu className="text-violet-600" />
                <h3 className="text-3xl font-black text-neutral-900">Official Profile</h3>
              </div>

              <div className="mt-8 space-y-7 text-lg leading-9 text-neutral-600">
                <p>
                  Umair Pasha is the Founder and Lead Architect of FIDYNEX TECH —
                  a digital engineering company focused on building scalable,
                  secure and future-ready systems.
                </p>
                <p>
                  With experience across full-stack development, product
                  engineering and cloud-ready systems, the goal is simple:
                  create digital infrastructure that remains valuable long
                  after launch.
                </p>
                <p>
                  Every product combines architecture, usability, branding and
                  performance into one unified experience.
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="rounded-[36px] bg-neutral-950 p-12 text-white">
              <div className="text-5xl font-black opacity-20">“</div>
              <p className="text-2xl leading-relaxed">
                I build technology that makes future-ready systems feel simple today.
              </p>
              <div className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
                Umair Pasha
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6 fade-up">
            <div className="rounded-[36px] border border-neutral-200 bg-white p-8">
              <div className="flex items-center gap-3">
                <Layers className="text-blue-600" />
                <h4 className="text-xl font-bold text-neutral-900">Responsibilities</h4>
              </div>

              <div className="mt-8 space-y-5">
                {responsibilities.map((item) => (
                  <div key={item} className="flex gap-4">
                    <ArrowRight size={18} className="mt-1 text-violet-600" />
                    <p className="text-neutral-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[36px] bg-gradient-to-br from-violet-600 to-blue-600 p-8 text-white">
              <TrendingUp size={28} />
              <h4 className="mt-6 text-3xl font-black">Core Direction</h4>
              <p className="mt-6 leading-8 text-white/90">
                Discipline. Innovation. Ownership.
              </p>
              <p className="mt-4 text-sm text-white/70">
                Long-term systems over short-term trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
