"use client";

import { BookOpen, Cpu, Compass, Rocket } from "lucide-react";
import { ReactNode } from "react";

export default function FounderStory() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32 animate-fade-up">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-5 py-2 text-xs uppercase tracking-[0.3em] text-violet-700">
          <BookOpen size={14} />
          Founder Story
        </div>

        <h2 className="mt-8 text-5xl font-black leading-[1] tracking-[-0.06em] sm:text-7xl">
          Curiosity became
          <br />
          <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            building.
          </span>
        </h2>

        <p className="mt-8 text-xl leading-10 text-neutral-600">
          My journey into technology did not begin with formal education or predefined paths. It started with curiosity.
        </p>
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-2">
        <StoryCard icon={<Cpu size={28} />} title="Where It Started">
          Growing up in Mysuru, long hours around a personal computer slowly changed from playing games into asking deeper questions.
          <br />
          <br />
          How does the computer respond?
          <br />
          How does software know what to do next?
          <br />
          What happens behind the screen?
        </StoryCard>

        <StoryCard icon={<Compass size={28} />} title="Learning Without A Roadmap">
          Learning happened through experimentation, rebuilding and persistence. Bugs, crashes and limitations were treated as lessons instead of obstacles. This became the foundation of the engineering mindset behind FIDYNEX TECH.
        </StoryCard>
      </div>

      <div className="mt-24 overflow-hidden rounded-[40px] border border-neutral-200 bg-gradient-to-r from-violet-50 via-white to-cyan-50 p-12">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-sm">
            <Rocket size={18} />
            Nine Month Discipline Phase
          </div>

          <h3 className="mt-8 text-4xl font-black tracking-[-0.05em]">
            Exploration became execution.
          </h3>

          <p className="mt-8 text-lg leading-9 text-neutral-700">
            A focused period of discipline transformed curiosity into structured learning. Instead of chasing shortcuts, the focus became understanding systems, building real products, learning from failures, and taking ownership.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Feature>Consistent learning</Feature>
            <Feature>Building real systems</Feature>
            <Feature>Understanding failures</Feature>
            <Feature>Full ownership</Feature>
          </div>
        </div>
      </div>

      <div className="mt-28 rounded-[40px] bg-black px-10 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-3xl font-black leading-relaxed">
            “Build with integrity. Learn continuously. Own the result.”
          </p>
          <p className="mt-8 text-neutral-400">— Umair Pasha</p>
        </div>
      </div>
    </section>
  );
}

function StoryCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="rounded-[34px] border border-neutral-200 bg-white p-10 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">
      <div className="inline-flex rounded-2xl bg-violet-50 p-4 text-violet-700">
        {icon}
      </div>

      <h3 className="mt-8 text-3xl font-black">
        {title}
      </h3>

      <p className="mt-6 leading-9 text-neutral-600">
        {children}
      </p>
    </div>
  );
}

function Feature({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border bg-white px-6 py-5 font-medium">
      {children}
    </div>
  );
}
