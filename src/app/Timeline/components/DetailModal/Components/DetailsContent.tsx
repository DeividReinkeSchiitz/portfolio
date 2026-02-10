import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Text from "@/app/components/Text";
import { TimelineEvent, TypeColors } from "../../../types";

interface DetailsContentProps {
  event: TimelineEvent;
  colors: TypeColors;
}

export default function DetailsContent({ event, colors }: DetailsContentProps) {
  if (!event.details) return null;

  return (
    <div className="p-8 md:p-12 space-y-10">
      {/* Full Description */}
      {event.details.fullDescription && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <span
              className="w-1 h-6 rounded-full"
              style={{ backgroundColor: colors.solid }}
            />
            Overview
          </h2>
          <p className="text-base text-gray-300 leading-relaxed">
            {event.details.fullDescription}
          </p>
        </motion.section>
      )}

      {/* Two Column Layout for Responsibilities & Achievements */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Responsibilities */}
        {event.details.responsibilities &&
          event.details.responsibilities.length > 0 && (
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.65 }}
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span
                  className="w-1 h-6 rounded-full"
                  style={{ backgroundColor: colors.solid }}
                />
                Key Responsibilities
              </h2>
              <ul className="space-y-3">
                {event.details.responsibilities.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3 group"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + idx * 0.05 }}
                  >
                    <span
                      className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0 
                      group-hover:scale-125 transition-transform"
                      style={{ backgroundColor: colors.solid }}
                    />
                    <Text className="!text-sm text-gray-300 leading-relaxed">
                      {item}
                    </Text>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          )}

        {/* Achievements */}
        {event.details.achievements &&
          event.details.achievements.length > 0 && (
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span
                  className="w-1 h-6 rounded-full"
                  style={{ backgroundColor: colors.solid }}
                />
                Achievements
              </h2>
              <ul className="space-y-3">
                {event.details.achievements.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg
                    bg-white bg-opacity-5 hover:bg-opacity-10"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.75 + idx * 0.05 }}
                  >
                    <span className="text-xl">🏆</span>
                    <Text className="!text-sm text-gray-300 leading-relaxed">
                      {item}
                    </Text>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          )}
      </div>

      {/* Links */}
      {event.details.links && event.details.links.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <span
              className="w-1 h-6 rounded-full"
              style={{ backgroundColor: colors.solid }}
            />
            Related Links
          </h2>
          <div className="flex flex-wrap gap-4">
            {event.details.links.map((link, idx) => {
              const isInternal = link.linkType === "internal";
              const LinkWrapper = isInternal ? Link : "a";
              const linkProps = isInternal
                ? { href: link.url }
                : {
                    href: link.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  };

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.85 + idx * 0.1 }}
                >
                  <LinkWrapper
                    {...linkProps}
                    className="group flex items-center gap-3 px-6 py-3 rounded-xl 
                      bg-white bg-opacity-5 border border-white border-opacity-10
                      hover:bg-opacity-10 hover:border-opacity-30
                      transition-all duration-200 hover:scale-105 active:scale-95"
                    style={{
                      borderColor: colors.solid,
                    }}
                  >
                    <span className="text-white font-medium">{link.label}</span>
                    {isInternal ? (
                      <span className="text-white text-lg group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    ) : (
                      <Image
                        src="/external-link.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        style={{
                          filter: `brightness(0) saturate(100%) invert(50%) sepia(98%) saturate(2073%) hue-rotate(${colors.solid})`,
                        }}
                      />
                    )}
                  </LinkWrapper>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      )}
    </div>
  );
}
