import Hero from "./components/founder/Hero";
import FounderStory from "./components/founder/FounderStory";
import ProfessionalBio from "./components/founder/ProfessionalBio";
import PersonalJourney from "./components/founder/PersonalJourney";
import WhatIsFidynex from "./components/founder/WhatIsFidynex";
import MeaningOfFidynex from "./components/founder/MeaningOfFidynex";
import Origin from "./components/founder/Origin";
import BuildJourney from "./components/founder/BuildJourney";
import ChallengesReality from "./components/founder/ChallengesReality";
import CorePhilosophy from "./components/founder/CorePhilosophy";
import BrandStory from "./components/founder/BrandStory";
import WhatWeBuild from "./components/founder/WhatWeBuild";
import ExploreEcosystem from "./components/founder/ExploreEcosystem";
import FutureVision from "./components/founder/FutureVision";
import FinalStatement from "./components/founder/FinalStatement";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="w-full overflow-x-hidden bg-[#fafafa] text-[#0f172a]">
      <Hero />
      <FounderStory />
      <ProfessionalBio />
      <PersonalJourney />
      <WhatIsFidynex />
      <MeaningOfFidynex />
      <Origin />
      <BuildJourney />
      <ChallengesReality />
      <CorePhilosophy />
      <BrandStory />
      <WhatWeBuild />
      <ExploreEcosystem />
      <FutureVision />
      <FinalStatement />
      <Footer />
    </main>
  );
}
