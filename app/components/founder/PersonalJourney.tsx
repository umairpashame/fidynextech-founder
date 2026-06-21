"use client";

import Image from "next/image";
import { User, Brain, Compass, ArrowRight, Sparkles, Trophy } from "lucide-react";

const values = [
  { title: "Discipline", desc: "Consistency and structure over motivation and hype." },
  { title: "Innovation", desc: "Real solutions that simplify complexity." },
  { title: "Ownership", desc: "Taking responsibility for everything built." },
];

const growth = [
  "Consistent learning",
  "Building real systems",
  "Understanding failures",
  "Owning outcomes",
];

export default function PersonalJourney() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* GLOW */}
      <div className="absolute inset-0">
        <div className="absolute left-[-240px] top-0 h-[720px] w-[720px] rounded-full bg-violet-100 blur-[180px]" />
        <div className="absolute right-[-240px] bottom-0 h-[720px] w-[720px] rounded-full bg-cyan-100 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-36">

        {/* HEADER */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-3 rounded-full border bg-white px-5 py-3 text-xs uppercase tracking-[.35em]">
            <User size={14} />
            Personal Journey
          </div>

          <h2 className="mt-12 text-5xl font-black tracking-[-0.06em] md:text-7xl">
            Behind Every <br />
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              System
            </span>{" "}
            is a Builder
          </h2>
        </div>

        {/* GRID */}
        <div className="mt-24 grid items-start gap-20 lg:grid-cols-2">

          {/* IMAGE */}
          <div className="sticky top-24 animate-slide-up">
            <div className="overflow-hidden rounded-[40px] border bg-gradient-to-b from-violet-50 via-white to-cyan-50 p-5 shadow-[0_60px_150px_rgba(0,0,0,.08)]">
              <Image
                src="/profile-2.png"
                alt="Umair Pasha"
                width={1000}
                height={1400}
                priority
                className="h-[720px] w-full rounded-[30px] object-cover object-top transition duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="space-y-24 animate-slide-up-delayed">

            {/* STORY */}
            <div>
              <div className="flex items-center gap-3">
                <Brain className="text-violet-600" />
                <h3 className="text-3xl font-black">Early Life & Story</h3>
              </div>

              <div className="mt-10 space-y-7 text-lg leading-9 text-neutral-600">
                <p>
                  Umair Pasha was born and raised in{" "}
                  <span className="font-semibold text-black">Mysuru, Karnataka, India</span>.
                </p>

                <p>The journey into technology began with curiosity, not predefined paths.</p>

                <p>Long hours spent playing games slowly became questions:</p>

                <div className="rounded-[28px] border bg-white p-8">
                  <ul className="space-y-4 text-neutral-700">
                    <li>→ How does the computer respond?</li>
                    <li>→ How does a game know what to do next?</li>
                    <li>→ What happens behind the screen?</li>
                  </ul>
                </div>

                <p>
                  Curiosity became exploration. Exploration became learning. Learning became building.
                </p>

                <p>
                  There was no roadmap—only experimentation, rebuilding and persistence.
                </p>
              </div>
            </div>

            {/* PROFESSIONAL */}
            <div>
              <div className="flex items-center gap-3">
                <Compass className="text-cyan-600" />
                <h3 className="text-3xl font-black">Professional Growth</h3>
              </div>

              <p className="mt-10 text-lg leading-9 text-neutral-600">
                Within a focused <strong>nine-month discipline phase</strong>, the transition happened from
                exploration to execution.
              </p>

              <div className="mt-8 grid gap-4">
                {growth.map((item) => (
                  <div key={item} className="flex items-center gap-4 rounded-[24px] border bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl">
                    <ArrowRight className="text-violet-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* VALUES */}
            <div>
              <div className="flex items-center gap-3">
                <Trophy className="text-amber-500" />
                <h3 className="text-3xl font-black">Core Values</h3>
              </div>

              <div className="mt-10 grid gap-6">
                {values.map((item) => (
                  <div key={item.title} className="rounded-[30px] border bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl">
                    <h4 className="text-2xl font-bold">{item.title}</h4>
                    <p className="mt-4 text-neutral-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* QUOTE */}
            <div className="rounded-[44px] bg-black p-12 text-white">
              <Sparkles />
              <p className="mt-8 text-3xl leading-[1.5]">
                “I build technology that makes future-ready systems feel simple today.
                <br /><br />
                I don’t know if this journey will win or lose—<br />
                but I know it is worth building.”
              </p>
              <div className="mt-8 text-neutral-400">— Umair Pasha</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
