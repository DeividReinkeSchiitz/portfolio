/**
 * Generates a deterministic value between min and max based on a seed.
 * Use instead of Math.random() to avoid server/client hydration mismatches.
 */
export function seededRandom(seed: number, min: number, max: number): number {
  const hash = ((seed * 9301 + 49297) % 233280) / 233280;
  return min + hash * (max - min);
}

/**
 * Clamps a value between a minimum and maximum.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
