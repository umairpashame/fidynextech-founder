"use client";

import { motion } from "framer-motion";
import { Shield, Palette, Layers3, Sparkles, ArrowRight } from "lucide-react";

const philosophy = [
  { icon: Shield, title: "Engineering First", text: "Stability, maintainability and performance come before shortcuts. Systems should remain reliable as they grow.", gradient: "from-violet-500 to-indigo-600" },
  { icon: Palette, title: "Design with Purpose", text: "Design communicates trust, clarity and usability. Every interface should create confidence.", gradient: "from-cyan-500 to-blue-600" },
  { icon: Layers3, title: "Scalability Matters", text: "Every product is engineered with growth in mind from architecture to deployment.", gradient: "from-emerald-500 to-green-600" },
  { icon: Sparkles, title: "Integrity & Transparency", text: "Clear communication, accountability and ownership define every decision.", gradient: "from-orange-500 to-red-500" },
];

export default function CorePhilosophy() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[10%] h-[600px] w-[600px] rounded-full bg-violet-100 blur-[180px]" />
        <div className="absolute right-[-10%] bottom-0 h-[600px] w-[600px] rounded-full bg-cyan-100 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-6 py-3 text-xs uppercase tracking-[0.35em] text-neutral-700">
            <Sparkles size={14} />
            Core Philosophy
          </div>

          <h2 className="mt-10 text-5xl font-black tracking-tight sm:text-7xl">
            Principles That<br />
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">Shape Every System</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-neutral-600">
            FIDYNEX TECH was built around a simple belief: technology should remain understandable, maintainable and valuable over time.
          </p>
        </motion.div>

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          {philosophy.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
                <div className="group relative overflow-hidden rounded-[40px] border bg-white p-10 shadow-[0_40px_100px_rgba(0,0,0,0.06)] transition hover:-translate-y-3">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition duration-500 group-hover:opacity-[0.05]`} />
                  <div className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${item.gradient} text-white transition group-hover:scale-110`}>
                    <Icon size={34} />
                  </div>
                  <h3 className="mt-8 text-3xl font-black text-neutral-900">{item.title}</h3>
                  <p className="mt-6 leading-8 text-neutral-600">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-32">
          <div className="rounded-[48px] bg-gradient-to-r from-black via-neutral-900 to-black px-10 py-24 text-center text-white">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">Philosophy Statement</p>
            <h3 className="mx-auto mt-10 max-w-4xl text-5xl font-black leading-tight">
              Build systems that stay simple<br />even as they become powerful.
            </h3>
            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-4 text-sm">
              Discipline <ArrowRight size={16} /> Innovation <ArrowRight size={16} /> Ownership
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
