#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Clear require cache to ensure fresh load
delete require.cache[require.resolve("../src/app/config/colors")];
const { TECH_COLORS } = require("../src/app/config/colors");

const globalsPath = path.join(__dirname, "../src/app/globals.css");

const colorCount = Object.keys(TECH_COLORS).length;
console.log(`Loaded ${colorCount} colors from colors.js`);

// Generate CSS variables
const cssVars = Object.entries(TECH_COLORS)
  .map(([name, color]) => {
    const varName = name.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "-");
    return `  --color-${varName}: ${color};`;
  })
  .join("\n");

console.log(`Generated ${cssVars.split("\n").length} CSS variable lines`);

// Read current globals.css
let globalsContent = fs.readFileSync(globalsPath, "utf-8");

// Replace or insert the technology colors section
const marker = "/* Technology Colors - Auto-generated from colors.js */";
const startMarker = `  ${marker}`;
const endMarker = "  /* End Technology Colors */";

if (globalsContent.includes(marker)) {
  // Replace existing section
  const regex = new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`, "m");
  globalsContent = globalsContent.replace(
    regex,
    `${startMarker}\n${cssVars}\n${endMarker}`,
  );
} else {
  // Insert new section after --foreground
  globalsContent = globalsContent.replace(
    /(--foreground: #[0-9a-fA-F]{6};)/m,
    `$1\n${startMarker}\n${cssVars}\n${endMarker}`,
  );
}

// Write back to globals.css
fs.writeFileSync(globalsPath, globalsContent, "utf-8");
console.log(
  `✅ Generated ${colorCount} CSS variables in globals.css from colors.js`,
);
