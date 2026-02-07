"use client";

import { motion, LayoutGroup } from "framer-motion";
import { ProjectCategory } from "../types";
import { getCategoryColors, getCategoryLabel } from "../utils";

interface CategoryFilterProps {
  categories: ProjectCategory[];
  activeCategory: ProjectCategory | "all";
  onCategoryChange: (category: ProjectCategory | "all") => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const allCategories: (ProjectCategory | "all")[] = ["all", ...categories];

  return (
    <div className="flex justify-center mb-12">
      <LayoutGroup>
        <div className="flex flex-wrap gap-3 p-2 rounded-2xl bg-[#111111] border border-gray-800">
          {allCategories.map((category) => {
            const isActive = activeCategory === category;
            const colors =
              category !== "all"
                ? getCategoryColors(category as ProjectCategory)
                : null;
            const label =
              category === "all" ? "All" : getCategoryLabel(category);

            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`relative px-6 py-2.5 rounded-xl font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                } active:scale-95`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background:
                        category === "all"
                          ? "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
                          : `linear-gradient(135deg, ${colors?.solid} 0%, rgba(${colors?.rgb}, 0.8) 100%)`,
                      boxShadow: `0 4px 15px rgba(${colors?.rgb || "99, 102, 241"}, 0.3)`,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            );
          })}
        </div>
      </LayoutGroup>
    </div>
  );
}
