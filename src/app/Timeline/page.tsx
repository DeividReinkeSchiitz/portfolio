"use client";

import { useState, useMemo } from "react";
import { LayoutGroup } from "framer-motion";
import TimelineCard from "./components/Card";
import PageHeader from "@/app/components/PageHeader";
import TimelineFooter from "./components/TimelineFooter";
import TimelineDetailModal from "./components/DetailModal";
import { timelineData, timelinePageConfig } from "./constants";
import { TimelineEvent } from "./types";
import { getTypeColors } from "@/app/Timeline/utils";

export default function TimelinePage() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(
    null,
  );

  // Generate dynamic gradient from timeline event colors in exact order
  const centerLineGradient = useMemo(() => {
    const colors = timelineData.map((event) => getTypeColors(event.type).solid);

    if (colors.length === 1) {
      return `linear-gradient(to bottom, ${colors[0]}, ${colors[0]})`;
    }

    const stops = colors
      .map((color, i) => {
        const percentage = (i / (colors.length - 1)) * 100;
        return `${color} ${percentage}%`;
      })
      .join(", ");

    return `linear-gradient(to bottom, ${stops})`;
  }, []);

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
            <div
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full opacity-20"
              style={{ background: centerLineGradient }}
            />

            {/* Timeline Events */}
            <div className="space-y-12 p-4 lg:p-10">
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
