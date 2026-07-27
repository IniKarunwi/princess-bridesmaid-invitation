import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import type { Bridesmaid } from "../data/bridesmaids";
import { PhotoFrame } from "./PhotoFrame";

interface LetterPageProps {
  bridesmaid: Bridesmaid;
  onBack: () => void;
}

function fireCelebration() {
  const petalColors = ["#f7b9a4", "#e9a0b4", "#f2cf4b", "#a8d5b9", "#b8a4d4"];
  confetti({ particleCount: 130, spread: 80, origin: { y: 0.7 }, colors: petalColors });
  confetti({ particleCount: 70, angle: 60, spread: 60, origin: { x: 0, y: 0.85 } });
  confetti({ particleCount: 70, angle: 120, spread: 60, origin: { x: 1, y: 0.85 } });
  setTimeout(
    () =>
      confetti({
        particleCount: 60,
        spread: 120,
        startVelocity: 20,
        gravity: 0.5,
        scalar: 1.4,
        shapes: ["circle"],
        colors: petalColors,
        origin: { y: 0.3 },
      }),
    350,
  );
}

/** Act III — the letter itself, laid out like an editorial magazine spread. */
export function LetterPage({ bridesmaid, onBack }: LetterPageProps) {
  const {
    name,
    colorTheme,
    photos,
    greeting,
    paragraphs,
    ask,
    acceptLabel,
    groupLink,
  } = bridesmaid;
  const leftPhotos = photos.filter((_, i) => i % 2 === 0);
  const rightPhotos = photos.filter((_, i) => i % 2 === 1);
  const [accepted, setAccepted] = useState(false);
  const redirected = useRef(false);

  const accept = () => {
    if (accepted) return;
    setAccepted(true);
    fireCelebration();
    setTimeout(() => {
      if (redirected.current) return;
      redirected.current = true;
      // Keep local previews from bouncing to a dead link.
      if (!groupLink.includes("REPLACE_ME")) {
        window.location.href = groupLink;
      }
    }, 1600);
  };

  return (
    <motion.section
      className="relative z-10 flex grow flex-col px-6 pb-20 pt-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <button
        onClick={onBack}
        className="mb-6 self-start font-body italic text-terracotta transition-colors hover:text-ink"
      >
        ← Back to Envelopes
      </button>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1.25fr_1fr]">
        <div className="flex flex-col items-center gap-10">
          {leftPhotos.map((p, i) => (
            <PhotoFrame
              key={i}
              photo={p}
              theme={colorTheme}
              delay={0.35 + i * 0.15}
              tilt={i % 2 ? 1.5 : -1.5}
            />
          ))}
        </div>

        {/* The letter — premium stationery unfolding into view */}
        <motion.div
          className="grain rounded-lg border bg-ivory px-8 py-10 shadow-xl shadow-ink/10 md:px-12"
          style={{ borderColor: colorTheme.accent }}
          initial={{ opacity: 0, scaleY: 0.6, transformOrigin: "top" }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <h1 className="font-display text-5xl italic text-ink md:text-6xl">
            {greeting ?? `${name},`}
          </h1>

          <div className="mt-8 space-y-6 font-body text-lg leading-relaxed text-ink/85">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="font-display text-xl font-bold italic tracking-wide text-ink">
              {ask}
            </p>
          </div>

          <p className="mt-10 font-body text-lg italic text-ink/80">With love,</p>
          <p className="mt-1 font-display text-4xl italic text-gold">
            Princess-Iman
          </p>

          {/* Gold divider */}
          <div className="mt-8 h-px w-full bg-gradient-to-r from-gold/20 via-gold to-gold/20" />

          <motion.button
            onClick={accept}
            className="grain mt-8 w-full cursor-pointer rounded-xl py-4 font-display text-xl font-bold text-ink shadow-lg shadow-ink/15"
            style={{
              background:
                "linear-gradient(90deg, #f6987a, #f2c94c, #a8d5b9, #b8a4d4)",
            }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            {acceptLabel}
          </motion.button>
          <p className="mt-3 text-center font-body text-sm italic text-terracotta">
            Say yes &amp; connect with your fellow bridesmaids
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-10">
          {rightPhotos.map((p, i) => (
            <PhotoFrame
              key={i}
              photo={p}
              theme={colorTheme}
              delay={0.5 + i * 0.15}
              tilt={i % 2 ? -1.5 : 1.5}
            />
          ))}
        </div>
      </div>

      {/* Easter egg */}
      <p className="mt-16 text-center font-body italic text-terracotta/70">
        Thank you for being part of one of the happiest days of my life.
      </p>

      {/* Celebration overlay */}
      <AnimatePresence>
        {accepted && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ivory/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.p
              className="font-display text-6xl italic text-ink md:text-8xl"
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 14 }}
            >
              Better for you!! 🥹
            </motion.p>
            <motion.p
              className="mt-6 font-body text-xl italic text-terracotta"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Taking you to the group chat... 💬
            </motion.p>
            {/* Tiny sparkles */}
            {["✨", "💖", "🌸", "✨", "💖", "🌸"].map((s, i) => (
              <motion.span
                key={i}
                className="absolute text-3xl"
                style={{
                  left: `${12 + i * 15}%`,
                  top: `${20 + (i % 3) * 22}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1.3, 0.6], rotate: 30 }}
                transition={{ delay: 0.2 + i * 0.18, duration: 1.4, repeat: Infinity }}
              >
                {s}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
