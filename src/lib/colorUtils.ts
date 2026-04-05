/** Named design-token → hex fallback map (mirrors tailwind.config.ts). */
const TOKEN_MAP: Record<string, string> = {
  primary: '#ba9eff',
  secondary: '#53ddfc',
  tertiary: '#ff946e',
}

/** Expands a 3-digit hex string to 6-digit. '#abc' → '#aabbcc' */
function expand3Digit(hex: string): string {
  const m = hex.match(/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/)
  if (!m) return hex
  return `#${m[1]}${m[1]}${m[2]}${m[2]}${m[3]}${m[3]}`
}

/**
 * Converts a hex color to `rgba(r, g, b, alpha)`.
 * Supports both 3-digit (`#rgb`) and 6-digit (`#rrggbb`) hex strings.
 * Returns a transparent fallback for invalid inputs.
 */
export function hexToRgba(hex: string, alpha: number): string {
  const full = hex.length === 4 ? expand3Digit(hex) : hex
  if (!/^#[0-9a-fA-F]{6}$/.test(full)) {
    return `rgba(0, 0, 0, ${alpha})`
  }
  const r = parseInt(full.slice(1, 3), 16)
  const g = parseInt(full.slice(3, 5), 16)
  const b = parseInt(full.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

/**
 * Resolves a color value that may be a named design token or a hex string.
 * Named tokens (`'primary'`, `'secondary'`, `'tertiary'`) are mapped to hex values.
 */
export function resolveColor(color: string): string {
  return TOKEN_MAP[color] ?? color
}
