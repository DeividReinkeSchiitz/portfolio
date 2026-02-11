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
      {event.image && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className="mt-6 relative rounded-2xl overflow-hidden border border-white border-opacity-10 shadow-2xl"
          style={{
            boxShadow: `0 20px 40px -10px rgba(${colors.rgb}, 0.3)`,
          }}
        >
          <div className="relative w-full aspect-video md:aspect-[16/9]">
            <Image
              src={event.image}
              alt={`${event.company} team`}
              fill
              className="object-cover"
              quality={90}
            />
            {/* Gradient overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </motion.div>
      )}

      {/* Links */}
      {event.details.links && event.details.links.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative"
        >
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <span
              className="w-1.5 h-7 rounded-full shadow-lg"
              style={{
                backgroundColor: colors.solid,
                boxShadow: `0 0 20px ${colors.solid}40`,
              }}
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
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: 0.85 + idx * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <LinkWrapper
                    {...linkProps}
                    className="group relative flex items-center gap-3 px-6 py-3 rounded-xl 
                        font-semibold text-white overflow-hidden
                        transition-all duration-300 shadow-lg hover:shadow-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${colors.solid}20 0%, ${colors.solid}10 100%)`,
                      borderWidth: "2px",
                      borderStyle: "solid",
                      borderColor: `${colors.solid}40`,
                    }}
                  >
                    {/* Animated gradient overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${colors.solid}30 0%, ${colors.solid}15 100%)`,
                      }}
                    />

                    {/* Shimmer effect */}
                    <div
                      className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${colors.solid}30, transparent)`,
                      }}
                    />

                    <span className="relative z-10 text-white font-medium tracking-wide">
                      {link.label}
                    </span>

                    {isInternal ? (
                      <span className="relative z-10 text-white text-xl font-bold group-hover:translate-x-1 transition-transform duration-200">
                        →
                      </span>
                    ) : (
                      <div className="relative z-10 w-5 h-5 flex items-center justify-center">
                        <Image
                          src="/external-link.svg"
                          alt=""
                          width={18}
                          height={18}
                          className="brightness-0 invert group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                        />
                      </div>
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
