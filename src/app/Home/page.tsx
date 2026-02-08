import DownResume from "@/app/components/DownResume";
import Frameworks from "@/app/components/Frameworks";
import HomeTitle from "./components/HomeTitle";
import GradientOrb from "./components/GradientOrb";
import FloatingParticles from "./components/FloatingParticles";
import AnimatedSection from "./components/AnimatedSection";
import { ANIMATION_DELAYS } from "./constants";
import "./styles.css";

export default function Home() {
  return (
    <div className="flex flex-col relative self-center items-center justify-center w-full h-full">
      {/* Background effects */}
      <FloatingParticles />
      <GradientOrb />

      {/* Hero content */}
      <HomeTitle />

      {/* Download resume — animated entrance */}
      <AnimatedSection
        delay={ANIMATION_DELAYS.downResume}
        className="flex-1 flex items-center justify-center"
      >
        <DownResume />
      </AnimatedSection>

      {/* Frameworks grid — animated entrance */}
      <AnimatedSection delay={ANIMATION_DELAYS.frameworks}>
        <Frameworks />
      </AnimatedSection>
    </div>
  );
}
