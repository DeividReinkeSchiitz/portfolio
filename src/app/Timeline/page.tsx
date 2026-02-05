"use client";

import Header from "@/app/components/Header";
import TimelineCard from "./TimelineCard";
import RadiusBlur from "./RadiusBlur";
import TimelineHeader from "./components/TimelineHeader";
import TimelineFooter from "./components/TimelineFooter";
import { timelineData } from "./constants";

export default function TimelinePage() {
  return (
    <div className="min-h-screen text-white relative">
      <RadiusBlur />

      <div className="max-w-7xl mx-auto mt-48 relative z-10">
        <TimelineHeader />

        {/* Timeline Container */}
        <div className="relative mt-16">
          {/* Center Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[var(--blue)] via-purple-500 to-green-500 opacity-20" />

          {/* Timeline Events */}
          <div className="space-y-12 px-4">
            {timelineData.map((event, index) => (
              <TimelineCard
                key={event.id}
                event={event}
                isLeft={index % 2 === 0}
                index={index}
              />
            ))}
          </div>
        </div>

        <TimelineFooter />
      </div>
    </div>
  );
}
