"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    ease: "easeOut",
  },
  viewport: { once: true },
};

export default function FounderPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-32 space-y-44 font-[family-name:var(--font-space-grotesk)]">

      {/* HERO */}
      <motion.section {...fadeUp} className="space-y-6">
        <h1 className="text-6xl font-semibold tracking-tight leading-tight">
          FIDYNEX TECH
        </h1>
        <p className="text-xl text-muted-foreground">
          Founder & Lead Architect
        </p>
        <p className="text-sm text-muted-foreground">
          Umair Pasha — Mysuru, Karnataka, India
        </p>
      </motion.section>

      {/* VIDEO FLOW */}
      <section className="relative h-[70vh] w-full overflow-hidden rounded-3xl">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        >
          <source src="/videos/vision.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 h-full flex items-center">
          <motion.div {...fadeUp} className="max-w-xl px-10">
            <p className="text-2xl font-medium leading-relaxed">
              Fidynex Tech was built as a long-term engineering vision —
              grounded in clarity, discipline, and intent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <motion.section
        {...fadeUp}
        className="grid gap-16 md:grid-cols-2 items-center"
      >
        <div className="space-y-6 text-muted-foreground">
          <p>
            My name is Umair Pasha, founder and lead architect of Fidynex Tech.
            Fidynex Tech was not created as a conventional startup or agency.
            It was built to create future-ready digital systems with long-term intent.
          </p>

          <p>
            Fidynex Tech exists to design reliable digital foundations rather than
            chase short-lived trends. The goal has always been scalability,
            maintainability, and meaning over time.
          </p>
        </div>

        <div className="relative h-[420px] overflow-hidden rounded-2xl">
          <Image
            src="https://res.cloudinary.com/fidynextech/image/upload/v1763332647/me-umair_fefz0q.jpg"
            alt="Founder portrait"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.section>

      {/* SYSTEMS FIRST */}
      <motion.section
        {...fadeUp}
        className="max-w-3xl text-muted-foreground"
      >
        <p>
          Every product, platform, or solution is approached with a systems-first
          mindset — prioritizing structure, performance, and durability.
        </p>
      </motion.section>

      {/* NAME MEANING */}
      <motion.section {...fadeUp} className="space-y-8">
        <h2 className="text-2xl font-medium">What Fidynex Means</h2>

        <p className="text-muted-foreground">
          Fidynex represents Future Intelligent Dynamic Next-Gen Technologies.
        </p>

        <ul className="space-y-3 text-muted-foreground list-disc list-inside">
          <li>Future — long-term thinking</li>
          <li>Intelligent — thoughtful engineering</li>
          <li>Dynamic — adaptability</li>
          <li>Next-Gen — evolving readiness</li>
          <li>Technologies — execution into real systems</li>
        </ul>
      </motion.section>

      {/* ORIGIN */}
      <motion.section
        {...fadeUp}
        className="grid gap-16 md:grid-cols-2 items-center"
      >
        <div className="relative h-[420px] overflow-hidden rounded-2xl">
          <Image
            src="/images/founder/origin.jpg"
            alt="Origins of Fidynex Tech"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6 text-muted-foreground">
          <p>
            Fidynex Tech began as a personal need to build with purpose.
            It was driven by curiosity, experimentation, and responsibility.
          </p>

          <p>
            With limited resources and full ownership, the journey involved
            failures, rewrites, and refinement — each strengthening the foundation.
          </p>
        </div>
      </motion.section>

      {/* EVOLUTION */}
      <motion.section {...fadeUp} className="space-y-6 text-muted-foreground">
        <p>
          The journey evolved from learning and experimentation to structured
          development and scalable system design.
        </p>

        <p>
          Today, Fidynex Tech represents disciplined engineering with a
          long-term product vision.
        </p>
      </motion.section>

      {/* PHILOSOPHY */}
      <motion.section
        {...fadeUp}
        className="rounded-3xl border bg-muted/40 p-12 space-y-6"
      >
        <h2 className="text-2xl font-medium">Core Philosophy</h2>

        <ul className="space-y-3 text-muted-foreground list-disc list-inside">
          <li>Engineering always comes first</li>
          <li>Design serves purpose</li>
          <li>Scalability is mandatory</li>
          <li>Integrity is non-negotiable</li>
          <li>Systems must endure</li>
        </ul>
      </motion.section>

      {/* PROFESSIONAL FOCUS */}
      <motion.section {...fadeUp} className="space-y-8">
        <h2 className="text-2xl font-medium">Professional Focus</h2>

        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
          <li>System architecture & product engineering</li>
          <li>Scalable web and application platforms</li>
          <li>UI / UX design systems</li>
          <li>Cloud-ready deployments</li>
          <li>Performance & security</li>
        </ul>
      </motion.section>

      {/* FUTURE */}
      <motion.section {...fadeUp} className="space-y-6 text-muted-foreground">
        <p>
          The future includes advanced cloud platforms, AI-assisted systems,
          SaaS products, and enterprise infrastructure.
        </p>

        <p>
          The focus remains slow, correct, and honest execution.
        </p>
      </motion.section>

      {/* CLOSING */}
      <motion.section {...fadeUp} className="space-y-6 text-muted-foreground">
        <p>The outcome is uncertain. The commitment was intentional.</p>
        <p>Fidynex Tech exists because it was built with belief and discipline.</p>
      </motion.section>

      <Separator />

      {/* SIGNATURE */}
      <motion.section {...fadeUp} className="space-y-2">
        <p className="font-medium">Umair Pasha</p>
        <p className="text-muted-foreground">Founder, Fidynex Tech</p>
      </motion.section>

    </main>
  );
}