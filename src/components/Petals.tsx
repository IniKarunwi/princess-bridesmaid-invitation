import { useMemo } from "react";
import { motion } from "framer-motion";

const PETAL_COLORS = ["#f7b9a4", "#f6cdb2", "#e9a0b4", "#f4dcc2", "#d9b8e3"];

interface PetalSpec {
  left: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  drift: number;
}

/** Soft flower petals drifting down the whole page. Pure CSS transforms, GPU friendly. */
export function Petals({ density = 12 }: { density?: number }) {
  const petals = useMemo<PetalSpec[]>(
    () =>
      Array.from({ length: density }, (_, i) => ({
        left: (i / density) * 100 + Math.random() * (100 / density),
        size: 8 + Math.random() * 10,
        color: PETAL_COLORS[i % PETAL_COLORS.length],
        delay: Math.random() * 10,
        duration: 11 + Math.random() * 9,
        drift: -40 + Math.random() * 80,
      })),
    [density],
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
    >
      {petals.map((p, i) => (
        <motion.span
          key={i}
          className="absolute top-[-5%] block"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 1.35,
            backgroundColor: p.color,
            borderRadius: "80% 20% 70% 30% / 60% 40% 60% 40%",
            opacity: 0.75,
          }}
          animate={{
            y: ["-5vh", "110vh"],
            x: [0, p.drift, p.drift / 2],
            rotate: [0, 220, 380],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
