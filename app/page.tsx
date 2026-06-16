export default function FounderPage() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* HERO */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-28 fade-up">
        <p className="text-sm tracking-widest text-gray-400">
          FOUNDER & LEAD ARCHITECT — FIDYNEX TECH
        </p>

        <div className="mt-8 flex flex-col md:flex-row items-start gap-10">
          <img
            src="https://res.cloudinary.com/fidynextech/image/upload/v1763332647/me-umair_fefz0q.jpg"
            alt="Umair Pasha"
            className="w-42 h-42   border border-white/10"
          />

          <div>
            <h1 className="text-5xl font-semibold tracking-tight">
              Umair Pasha
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-xl">
              Building future-ready digital systems with precision, trust, and
              intent.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Mysuru, Karnataka, India
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 space-y-24 pb-40">
        <Block title="WHAT IS FIDYNEX TECH">
          <p>
            FIDYNEX TECH is a technology-driven digital solutions company built
            to transform ideas into scalable, secure, and high-performance
            systems.
          </p>
          <p>
            What started as hands-on development evolved into a full-spectrum
            technology practice focused on building infrastructure that lasts.
          </p>
          <p className="italic text-gray-400">
            FIDYNEX TECH does not chase trends. It builds foundations.
          </p>
        </Block>

        <Block title="MEANING OF FIDYNEX TECH">
          <ul className="space-y-3">
            <li><strong>Future</strong> — Systems designed for long-term relevance.</li>
            <li><strong>Intelligent</strong> — Decisions driven by logic and engineering discipline.</li>
            <li><strong>Dynamic</strong> — Architectures that adapt as businesses grow.</li>
            <li><strong>Next-Gen</strong> — Cloud-native and forward-looking solutions.</li>
            <li><strong>Technologies</strong> — Production-ready systems for real-world use.</li>
          </ul>
        </Block>

        <Block title="THE ORIGIN OF FIDYNEX TECH">
          <p>
            Most digital products fail not because of ideas, but because of weak
            systems. From the beginning, the focus was clear—build technology
            that is stable, maintainable, and scalable.
          </p>
        </Block>

        <Block title="FIDYNEX TECH JOURNEY">
          <ul className="space-y-2">
            <li>Foundation Phase — Learning by building.</li>
            <li>Refinement Phase — Clean architecture and performance.</li>
            <li>Product Thinking Phase — Engineering meets UX and branding.</li>
            <li>Present Phase — Reliable systems with accountability.</li>
            <li>Future Phase — Platforms, AI-assisted systems.</li>
          </ul>
        </Block>

        <Block title="CORE PHILOSOPHY">
          <ul className="space-y-2">
            <li>Engineering First</li>
            <li>Design with Purpose</li>
            <li>Scalability Matters</li>
            <li>Integrity & Transparency</li>
          </ul>
        </Block>

        <Block title="LOGO & BRAND STORY">
          <p>
            The FIDYNEX TECH logo represents structure, motion, and precision.
            Clean typography reflects clarity and confidence, while geometry
            symbolizes stability and progress.
          </p>
        </Block>

        <Block title="BRAND ENABLEMENT">
          <ul className="space-y-2">
            <li>Build immediate credibility</li>
            <li>Communicate technical depth</li>
            <li>Remain timeless</li>
            <li>Scale across digital ecosystems</li>
          </ul>
        </Block>

        <Block title="WHAT FIDYNEX TECH BUILDS">
          <ul className="space-y-2">
            <li>Web & Application Development</li>
            <li>UI/UX Design Systems</li>
            <li>Cloud-Ready Architectures</li>
            <li>Branding & Digital Identity</li>
            <li>Performance Optimization</li>
            <li>Secure, Scalable Deployments</li>
          </ul>
        </Block>

        <Block title="FUTURE VISION">
          <p>
            Cloud platforms, AI-assisted systems, SaaS products, and enterprise-grade
            infrastructure.
          </p>
          <p className="italic text-gray-400 mt-4">
            Winning or losing was never the goal. Building was.
          </p>
        </Block>

        <footer className="pt-20 text-sm text-gray-500">
          Umair Pasha — Founder, FIDYNEX TECH
        </footer>
      </section>
    </main>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="fade-up">
      <h2 className="text-xs tracking-widest text-gray-400 mb-6">
        {`>> ${title}`}
      </h2>
      <div className="space-y-4 text-gray-300 leading-relaxed">
        {children}
      </div>
    </div>
  );
}