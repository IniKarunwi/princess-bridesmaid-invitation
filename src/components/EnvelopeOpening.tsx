import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Bridesmaid } from "../data/bridesmaids";
import { EnvelopeArt } from "./Envelope";

interface EnvelopeOpeningProps {
  bridesmaid: Bridesmaid;
  onDone: () => void;
}

/**
 * The ~2s ceremony between clicking an envelope and reading the letter:
 * the envelope glides to centre stage, the flap unfolds, the wax seal
 * breaks, and the paper slides up out of the envelope.
 */
export function EnvelopeOpening({ bridesmaid, onDone }: EnvelopeOpeningProps) {
  const [flapOpen, setFlapOpen] = useState(false);

  useEffect(() => {
    const flap = setTimeout(() => setFlapOpen(true), 650);
    const done = setTimeout(onDone, 2200);
    return () => {
      clearTimeout(flap);
      clearTimeout(done);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ivory/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative w-72 md:w-96"
        initial={{ scale: 0.55, y: 120, opacity: 0 }}
        animate={{ scale: 1, y: 40, opacity: 1 }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
      >
        {/* Letter paper rising out of the envelope */}
        <motion.div
          className="grain absolute inset-x-6 bottom-1/3 rounded-t-sm bg-ivory shadow-xl"
          style={{ height: "115%", zIndex: -1 }}
          initial={{ y: "55%", opacity: 0 }}
          animate={flapOpen ? { y: "-12%", opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        >
          <div className="p-6">
            <p className="font-display text-2xl italic text-ink/80">
              {bridesmaid.greeting ?? `${bridesmaid.name},`}
            </p>
            <div className="mt-4 space-y-2.5">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-2 rounded-full bg-ink/10"
                  style={{ width: `${92 - i * 9}%` }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <EnvelopeArt theme={bridesmaid.colorTheme} open={flapOpen} />
      </motion.div>
    </motion.div>
  );
}
