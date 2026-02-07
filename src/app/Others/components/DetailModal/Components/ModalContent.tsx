"use client";

import { motion } from "framer-motion";
import Text from "@/app/components/Text";
import { Project, CategoryColors } from "../../../types";

interface ModalContentProps {
  project: Project;
  colors: CategoryColors;
}

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function ModalContent({ project, colors }: ModalContentProps) {
  const details = project.details;
  if (!details) return null;

  return (
    <motion.div
      className="p-6 md:p-8 space-y-8"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
    >
      {/* Full Description */}
      {details.fullDescription && (
        <motion.div variants={fadeIn} transition={{ duration: 0.3 }}>
          <h3 className={`text-2xl font-bold mb-4 ${colors.tailwind}`}>
            About This Project
          </h3>
          <Text className="text-gray-300 leading-relaxed">
            {details.fullDescription}
          </Text>
        </motion.div>
      )}

      {/* Features */}
      {details.features && details.features.length > 0 && (
        <motion.div variants={fadeIn} transition={{ duration: 0.3 }}>
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-2xl ${colors.tailwind}`}>✓</span>
            <h3 className="text-2xl font-bold">Key Features</h3>
          </div>
          <ul className="space-y-3">
            {details.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: colors.solid }}
                />
                <Text className="text-gray-300">{feature}</Text>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Challenges */}
      {details.challenges && details.challenges.length > 0 && (
        <motion.div variants={fadeIn} transition={{ duration: 0.3 }}>
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-2xl ${colors.tailwind}`}>⚡</span>
            <h3 className="text-2xl font-bold">Challenges Solved</h3>
          </div>
          <ul className="space-y-3">
            {details.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: colors.solid }}
                />
                <Text className="text-gray-300">{challenge}</Text>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Learnings */}
      {details.learnings && details.learnings.length > 0 && (
        <motion.div variants={fadeIn} transition={{ duration: 0.3 }}>
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-2xl ${colors.tailwind}`}>💡</span>
            <h3 className="text-2xl font-bold">Key Learnings</h3>
          </div>
          <ul className="space-y-3">
            {details.learnings.map((learning, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: colors.solid }}
                />
                <Text className="text-gray-300">{learning}</Text>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Technologies */}
      {project.stacks && project.stacks.length > 0 && (
        <motion.div variants={fadeIn} transition={{ duration: 0.3 }}>
          <h3 className="text-2xl font-bold mb-4">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.stacks.map((tech) => (
              <span
                key={tech}
                className={`px-4 py-2 rounded-lg border ${colors.border} ${colors.bg} text-sm font-medium
                           hover:scale-105 transition-transform duration-150`}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      )}

      {/* Additional Links */}
      {details.links && details.links.length > 0 && (
        <motion.div variants={fadeIn} transition={{ duration: 0.3 }}>
          <h3 className="text-2xl font-bold mb-4">Related Links</h3>
          <div className="space-y-2">
            {details.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 p-3 rounded-lg border ${colors.border} ${colors.bg}
                           hover:bg-opacity-30 transition-all duration-200 group hover:translate-x-1`}
              >
                <span className={`text-lg ${colors.tailwind}`}>↗</span>
                <Text className="flex-1">{link.label}</Text>
                <span
                  className={`${colors.tailwind} animate-[nudge-right_1.5s_ease-in-out_infinite]`}
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      )}

      {/* Project Links */}
      <motion.div
        variants={fadeIn}
        transition={{ duration: 0.3 }}
        className="flex flex-wrap gap-4 pt-4"
      >
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--blue)] hover:bg-[var(--blue)]/80 transition-all duration-200 font-medium hover:scale-105 active:scale-95"
          >
            <span className="text-lg">↗</span>
            View Live Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-200 font-medium hover:scale-105 active:scale-95"
          >
            <span className="text-lg">↗</span>
            View on GitHub
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}
