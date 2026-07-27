import type { ColorTheme } from "../data/bridesmaids";

interface EnvelopeArtProps {
  theme: ColorTheme;
  /** 0 = sealed, 1 = flap open (used by the opening animation) */
  open?: boolean;
  className?: string;
}

/**
 * A hand-built paper envelope: body, side folds, top flap and wax seal.
 * Rendered with plain divs + clip-paths so it stays crisp at any size.
 */
export function EnvelopeArt({ theme, open = false, className = "" }: EnvelopeArtProps) {
  return (
    <div
      className={`grain relative aspect-[10/7] w-full overflow-visible rounded-md shadow-md ${className}`}
      style={{ backgroundColor: theme.body }}
    >
      {/* Bottom + side folds (subtle embossed creases) */}
      <div
        className="absolute inset-0 rounded-md"
        style={{
          background: `linear-gradient(160deg, rgba(255,255,255,0.22) 0%, transparent 40%),
             linear-gradient(20deg, rgba(0,0,0,0.07) 0%, transparent 45%)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(0 12%, 46% 62%, 54% 62%, 100% 12%, 100% 100%, 0 100%)",
          background: "rgba(255,255,255,0.14)",
          borderRadius: "0 0 6px 6px",
        }}
      />

      {/* Top flap — rotates open during the reveal */}
      <div
        className="absolute inset-x-0 top-0 h-[62%] transition-transform duration-700 ease-in-out"
        style={{
          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          backgroundColor: theme.flap,
          transformOrigin: "top center",
          transform: open ? "rotateX(180deg)" : "rotateX(0deg)",
          borderRadius: "6px 6px 0 0",
        }}
      />

      {/* Wax seal at the flap tip */}
      <div
        className={`seal absolute left-1/2 top-[54%] h-[22%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full shadow-sm transition-all duration-500 ${
          open ? "scale-0 opacity-0" : ""
        }`}
        style={{
          backgroundColor: theme.seal,
          boxShadow: `0 0 0 3px ${theme.seal}55, inset 0 -2px 4px rgba(0,0,0,0.18)`,
        }}
      />
    </div>
  );
}
