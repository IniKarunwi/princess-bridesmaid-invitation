import { useState } from "react";
import { motion } from "framer-motion";
import type { ColorTheme, Photo } from "../data/bridesmaids";

interface PhotoFrameProps {
  photo: Photo;
  theme: ColorTheme;
  delay?: number;
  /** Slight editorial rotation, in degrees */
  tilt?: number;
}

/**
 * An editorial photo card with a tiny italic caption. When no real photo has
 * been added yet, renders a soft placeholder in the bridesmaid's colours so
 * the layout still looks finished.
 */
export function PhotoFrame({ photo, theme, delay = 0, tilt = 0 }: PhotoFrameProps) {
  // Fall back to the colour-matched placeholder until the real file exists.
  const [failed, setFailed] = useState(false);
  const src = failed ? undefined : photo.src;
  return (
    <motion.figure
      className="w-full max-w-xs"
      style={{ rotate: tilt }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
    >
      <div className="grain aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg shadow-ink/15">
        {src ? (
          <img
            src={src}
            alt={photo.caption}
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className="relative flex h-full w-full items-center justify-center"
            style={{
              background: `linear-gradient(150deg, ${theme.soft} 0%, ${theme.body}66 60%, ${theme.flap}55 100%)`,
            }}
          >
            <span
              className="absolute h-40 w-40 rounded-full opacity-40 blur-2xl"
              style={{ backgroundColor: theme.seal }}
            />
            <span className="z-10 font-display text-5xl opacity-70">🌸</span>
          </div>
        )}
      </div>
      <figcaption className="mt-3 text-center font-body text-sm italic text-terracotta">
        {photo.caption}
      </figcaption>
    </motion.figure>
  );
}
