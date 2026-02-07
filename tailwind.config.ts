import type { Config } from "tailwindcss";
const { colors } = require("./src/app/colors");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color: Object.keys(colors).reduce(
          (acc, key) => {
            const varName = key
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/\./g, "-");
            acc[varName] = `var(--color-${varName})`;
            return acc;
          },
          {} as Record<string, string>,
        ),
      },
    },
  },
  plugins: [],
} satisfies Config;
