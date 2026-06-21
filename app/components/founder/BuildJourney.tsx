"use client";

import { CalendarRange, Rocket, Code2, Layers3, Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const phases = [
  { month: "MONTH 01", icon: Code2, title: "Foundation", description: "Created the FIDYNEX TECH identity, established architecture principles, explored infrastructure and formed the long-term vision.", highlights: ["Brand Identity", "Frontend Systems", "Backend Structure", "Cloud Setup"] },
  { month: "MONTH 02", icon: Layers3, title: "Building", description: "Focused on execution — development, refinement, UI systems, content creation, deployments and ecosystem consistency.", highlights: ["Development", "Design System", "Content", "Deployment"] },
  { month: "MONTH 03", icon: Rocket, title: "Launch", description: "Optimized performance, polished interactions and prepared public launch with reliability and long-term scalability.", highlights: ["Optimization", "Testing", "Release", "Scaling"] },
];

const ecosystem = [
  { name: "Main Platform", url: "https://fidynextech.com" },
  { name: "FIDYNEX AI", url: "https://fidynextech-ai.vercel.app" },
  { name: "Help Platform", url: "https://fidynex-help.vercel.app" },
  { name: "Founder Portfolio", url: "https://umairpasha.vercel.app" },
];

export default function BuildJourney() {
  return (
    <section className="relative py-36 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-[15%] top-0 h-[480px] w-[480px] rounded-full bg-violet-200/30 blur-[170px]" />
        <div className="absolute right-[10%] bottom-0 h-[560px] w-[560px] rounded-full bg-cyan-200/30 blur-[170px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 text-xs uppercase tracking-[0.35em] shadow-sm">
            <CalendarRange size={14} />
            3 Month Build Journey
          </div>

          <h2 className="mt-10 text-5xl font-black tracking-tight sm:text-7xl">
            Building
            <span className="ml-2 bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              FIDYNEX TECH
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-neutral-600">
            The ecosystem was not launched overnight. Nearly three months were spent shaping identity, architecture, infrastructure, content, refinement and public release.
          </p>
        </motion.div>

        <div className="relative mt-24">
          <div className="absolute left-8 top-0 bottom-0 hidden w-[2px] bg-gradient-to-b from-violet-500 via-blue-500 to-cyan-500 lg:block" />

          <div className="space-y-10">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div key={phase.title} initial={{ opacity: 0, x: index % 2 ? 100 : -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                  <div className="rounded-[36px] border border-neutral-200 bg-white/80 p-10 backdrop-blur shadow-[0_40px_110px_rgba(0,0,0,0.07)] transition hover:-translate-y-2">
                    <div className="flex gap-8">
                      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-600 to-blue-600 text-white">
                        <Icon size={34} />
                      </div>

                      <div className="flex-1">
                        <div className="text-sm tracking-[0.3em] text-violet-600">{phase.month}</div>
                        <h3 className="mt-3 text-4xl font-black">{phase.title}</h3>
                        <p className="mt-6 text-lg leading-9 text-neutral-600">{phase.description}</p>

                        <div className="mt-8 flex flex-wrap gap-3">
                          {phase.highlights.map((item) => (
                            <span key={item} className="rounded-full bg-neutral-100 px-5 py-2 text-sm">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-36">
          <div className="text-center">
            <div className="inline-flex items-center gap-2">
              <Sparkles />
              Ecosystem Launch
            </div>

            <h3 className="mt-6 text-5xl font-black">
              Multiple Platforms.
              <br />
              One Direction.
            </h3>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {ecosystem.map((item) => (
              <Link key={item.name} href={item.url} target="_blank" className="group">
                <div className="rounded-[32px] border border-neutral-200 bg-white p-10 transition hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <h4 className="text-3xl font-black">{item.name}</h4>
                    <ArrowUpRight className="transition group-hover:rotate-45" />
                  </div>
                  <p className="mt-5 text-neutral-500">Part of the growing FIDYNEX ecosystem.</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mx-auto mt-36 max-w-4xl text-center">
          <div className="rounded-[40px] border border-neutral-200 bg-white p-16 shadow-sm">
            <h3 className="text-5xl font-black">Building was the goal.</h3>
            <p className="mt-8 text-lg leading-9 text-neutral-600">
              The ecosystem continues to evolve — more platforms, AI systems, cloud products and long-term digital infrastructure.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
