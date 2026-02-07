#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Clear require cache to ensure fresh load
delete require.cache[require.resolve("../src/app/colors")];
const { colors } = require("../src/app/colors");

const globalsPath = path.join(__dirname, "../src/app/globals.css");

const colorCount = Object.keys(colors).length;
console.log(`Loaded ${colorCount} colors from colors.js`);

// Separate technology colors from UI colors
const technologyColors = {};
const uiColors = {};

Object.entries(colors).forEach(([name, color]) => {
  // UI colors are those with hyphens in their names
  if (name.includes("-")) {
    uiColors[name] = color;
  } else {
    technologyColors[name] = color;
  }
});

// Generate CSS variables for technology colors
const techCssVars = Object.entries(technologyColors)
  .map(([name, color]) => {
    const varName = name.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "-");
    return `  --color-${varName}: ${color};`;
  })
  .join("\n");

// Generate CSS variables for UI colors (without color- prefix)
const uiCssVars = Object.entries(uiColors)
  .map(([name, color]) => {
    return `  --${name}: ${color};`;
  })
  .join("\n");

console.log(
  `Generated ${techCssVars.split("\n").length} technology CSS variables`,
);
console.log(`Generated ${uiCssVars.split("\n").length} UI CSS variables`);

// Read current globals.css
let globalsContent = fs.readFileSync(globalsPath, "utf-8");

// Replace technology colors section
const techMarker = "/* Technology Colors - Auto-generated from colors.js */";
const techStartMarker = `  ${techMarker}`;
const techEndMarker = "  /* End Technology Colors */";

if (globalsContent.includes(techMarker)) {
  const regex = new RegExp(`${techStartMarker}[\\s\\S]*?${techEndMarker}`, "m");
  globalsContent = globalsContent.replace(
    regex,
    `${techStartMarker}\n${techCssVars}\n${techEndMarker}`,
  );
}

// Write back to globals.css
fs.writeFileSync(globalsPath, globalsContent, "utf-8");
console.log(`✅ Updated ${globalsPath} with auto-generated CSS variables`);
console.log(`✅ Generated ${colorCount} total CSS variables from colors.js`);
