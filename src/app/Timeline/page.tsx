"use client";

import { useState } from "react";
import { LayoutGroup } from "framer-motion";
import Header from "@/app/components/Header";
import TimelineCard from "./components/Card";
import RadiusBlur from "./components/RadiusBlur";
import PageHeader from "@/app/components/PageHeader";
import TimelineFooter from "./components/TimelineFooter";
import TimelineDetailModal from "./components/DetailModal";
import { timelineData, timelinePageConfig } from "./constants";
import { TimelineEvent } from "./types";

export default function TimelinePage() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(
    null,
  );

  return (
    <LayoutGroup>
      <div className="min-h-screen text-white relative">
        <PageHeader
          title={timelinePageConfig.title}
          description={timelinePageConfig.description}
          icons={timelinePageConfig.icons}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Timeline Container */}
          <div className="relative mt-16">
            {/* Center Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[var(--blue)] via-purple-500 to-green-500 opacity-20" />

            {/* Timeline Events */}
            <div className="space-y-12 p-4 lg:p-10 ">
              {timelineData.map((event, index) => (
                <TimelineCard
                  key={event.id}
                  event={event}
                  isLeft={index % 2 === 0}
                  index={index}
                  onOpenDetails={setSelectedEvent}
                />
              ))}
            </div>
          </div>

          <TimelineFooter />
        </div>

        {/* Detail Modal */}
        <TimelineDetailModal
          event={selectedEvent}
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      </div>
    </LayoutGroup>
  );
}
