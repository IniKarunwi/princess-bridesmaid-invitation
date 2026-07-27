import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { bridesmaids, type Bridesmaid } from "../data/bridesmaids";
import { EnvelopeArt } from "./Envelope";
import { EnvelopeOpening } from "./EnvelopeOpening";

interface EnvelopeGalleryProps {
  /** When set (via ?for=name), only this envelope will open. */
  guestId: string | null;
  onOpened: (b: Bridesmaid) => void;
}

/** Act II — a calm wall of sealed envelopes, one per bridesmaid. */
export function EnvelopeGallery({ guestId, onOpened }: EnvelopeGalleryProps) {
  const [opening, setOpening] = useState<Bridesmaid | null>(null);
  const [wrongId, setWrongId] = useState<string | null>(null);
  const wrongTimer = useRef<ReturnType<typeof setTimeout>>();

  const handleClick = (b: Bridesmaid) => {
    if (opening) return;
    if (guestId && b.id !== guestId) {
      // Not your envelope! Shake it and show a tiny handwritten note.
      setWrongId(b.id);
      clearTimeout(wrongTimer.current);
      wrongTimer.current = setTimeout(() => setWrongId(null), 1400);
      return;
    }
    setOpening(b);
  };

  return (
    <motion.section
      className="relative z-10 flex grow flex-col items-center px-6 pb-16 pt-20"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-gold">
        A message from Princess-Iman
      </p>
      <h2 className="mt-4 text-center font-display text-4xl italic text-ink md:text-6xl">
        There's a letter here with your name on it.
      </h2>
      <p className="mt-6 max-w-xl text-center font-body text-lg leading-relaxed text-terracotta">
        Each envelope is sealed just for you. Find your name and open it — but
        please, only the one with your name. This is personal.
      </p>
      <div className="mt-8 flex items-center gap-6">
        <span className="h-0.5 w-14 bg-gradient-to-r from-transparent to-gold" />
        <span className="h-0.5 w-14 bg-gradient-to-l from-transparent to-gold" />
      </div>

      <div className="mt-16 flex max-w-6xl flex-wrap items-start justify-center gap-x-10 gap-y-14">
        {bridesmaids.map((b, i) => (
          <motion.button
            key={b.id}
            onClick={() => handleClick(b)}
            className="group/env relative w-40 cursor-pointer text-center md:w-48"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.09, duration: 0.7, ease: "easeOut" }}
            aria-label={`Envelope for ${b.name}`}
          >
            {/* Idle float + hover lift + wrong-envelope shake */}
            <motion.div
              animate={
                wrongId === b.id
                  ? { x: [0, -9, 9, -7, 7, -3, 0], y: 0 }
                  : { y: [0, -6, 0] }
              }
              transition={
                wrongId === b.id
                  ? { duration: 0.5 }
                  : {
                      duration: 3.2 + (i % 3) * 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.35,
                    }
              }
            >
              <motion.div
                whileHover={{ y: -10, rotate: i % 2 ? 1.5 : -1.5, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="drop-shadow-[0_10px_14px_rgba(80,50,20,0.18)] transition-[filter] duration-300 group-hover/env:drop-shadow-[0_22px_24px_rgba(80,50,20,0.28)]"
              >
                <EnvelopeArt theme={b.colorTheme} />
              </motion.div>
            </motion.div>

            {/* Tiny handwritten refusal note */}
            <AnimatePresence>
              {wrongId === b.id && (
                <motion.span
                  className="absolute -top-10 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-lg bg-ivory px-4 py-1.5 font-body text-sm italic text-terracotta shadow-lg"
                  style={{ rotate: "-3deg" }}
                  initial={{ opacity: 0, y: 8, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  That's not yours 😊
                </motion.span>
              )}
            </AnimatePresence>

            <span
              className="mt-5 inline-block rounded-md border bg-ivory px-5 py-1.5 font-display text-xl italic text-ink shadow-sm"
              style={{ borderColor: b.colorTheme.accent }}
            >
              {b.name}
            </span>
            <span className="mt-2 block font-body text-sm italic text-terracotta/80">
              Only open if this is your name
            </span>
          </motion.button>
        ))}
      </div>

      {/* Easter egg */}
      <p className="mt-20 text-center font-body italic text-terracotta/70">
        (Yes, we see you hovering over the other envelopes. Don't even think
        about it.)
      </p>

      <AnimatePresence>
        {opening && (
          <EnvelopeOpening
            bridesmaid={opening}
            onDone={() => onOpened(opening)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}
