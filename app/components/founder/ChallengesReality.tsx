"use client";

import { motion } from "framer-motion";
import { TriangleAlert, Brain, Clock3, Boxes, Flame, ShieldCheck } from "lucide-react";

const challenges = [
  { icon: Boxes, title: "Limited Resources", text: "FIDYNEX TECH started without ideal conditions. Every decision required prioritization, focus and careful execution." },
  { icon: Brain, title: "Learning Multiple Technologies", text: "Frontend, backend, databases, deployment, design systems and infrastructure evolved together during the journey." },
  { icon: Clock3, title: "Long Nights & Iteration", text: "Building meant continuous refinement, rewrites, testing and moving forward through uncertainty." },
  { icon: TriangleAlert, title: "Failures & Rebuilding", text: "Errors became architecture lessons. Every obstacle improved engineering decisions." },
];

const outcomes = [
  "Pressure refined the system",
  "Execution created confidence",
  "Failures improved architecture",
  "Discipline became the process",
];

export default function ChallengesReality() {
  return (
    <section className="relative py-36 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-24 h-[460px] w-[460px] rounded-full bg-red-200/40 blur-[170px]" />
        <div className="absolute right-0 bottom-0 h-[560px] w-[560px] rounded-full bg-orange-200/40 blur-[170px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-2 text-xs uppercase tracking-[0.35em] shadow-sm">
            <Flame size={14} />
            Challenges & Reality
          </div>

          <h2 className="mt-10 text-5xl font-black tracking-tight sm:text-7xl">
            Built Through
            <span className="ml-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Real Constraints
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-neutral-600">
            FIDYNEX TECH was not built under perfect conditions. Limited resources, solo ownership, constant learning and repeated iteration shaped the system into what it became.
          </p>
        </motion.div>

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          {challenges.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
                <div className="group rounded-[36px] border border-neutral-200 bg-white p-10 shadow-[0_25px_80px_rgba(0,0,0,0.06)] transition hover:-translate-y-2">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-red-500 to-orange-500 text-white transition group-hover:scale-110">
                    <Icon size={34} />
                  </div>
                  <h3 className="mt-8 text-3xl font-black">{item.title}</h3>
                  <p className="mt-5 leading-8 text-neutral-600">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mx-auto mt-32 max-w-5xl">
          <div className="rounded-[42px] bg-gradient-to-r from-black via-neutral-900 to-black px-12 py-20 text-center text-white">
            <p className="text-sm tracking-[0.35em] text-white/50">TRANSITION</p>
            <h3 className="mt-8 text-5xl font-black leading-tight">
              Behind every system
              <br />
              is a builder.
            </h3>
          </div>
        </motion.div>

        <div className="mt-24 grid gap-6 md:grid-cols-2">
          {outcomes.map((item, i) => (
            <motion.div key={item} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <div className="flex items-center gap-4 rounded-[30px] border border-neutral-200 bg-white px-8 py-6">
                <ShieldCheck size={26} className="text-green-600" />
                <span className="font-medium">{item}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mx-auto mt-32 max-w-4xl text-center">
          <h3 className="text-4xl font-black">Pressure didn’t break the foundation.</h3>
          <p className="mt-6 text-xl text-neutral-500">It strengthened it.</p>
        </motion.div>
      </div>
    </section>
  );
}
