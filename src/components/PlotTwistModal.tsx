import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface PlotTwistModalProps {
  onReveal: () => void;
  hidden: boolean;
}

/** The classified-document popup that breaks the fourth wall. */
export function PlotTwistModal({ onReveal, hidden }: PlotTwistModalProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && !hidden && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            className="grain relative w-full max-w-xl overflow-hidden rounded-3xl p-8 text-center shadow-2xl shadow-ink/30 md:p-12"
            style={{
              background:
                "linear-gradient(135deg, #f9c1ac 0%, #f8dfa8 30%, #f4e9ac 50%, #bcdfd2 72%, #d5c3e8 100%)",
            }}
            initial={{ opacity: 0, scale: 0.7, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {/* Classified-document corner brackets */}
            {[
              "left-5 top-5 border-l-2 border-t-2",
              "right-5 top-5 border-r-2 border-t-2",
              "bottom-5 left-5 border-b-2 border-l-2",
              "bottom-5 right-5 border-b-2 border-r-2",
            ].map((pos) => (
              <span
                key={pos}
                className={`absolute h-10 w-10 border-ink/50 ${pos}`}
              />
            ))}

            <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-ink/70">
              Plot twist incoming...
            </p>
            <h2 className="mt-4 font-display text-6xl font-black italic text-ink md:text-7xl">
              Psych!
            </h2>
            <p className="mt-1 font-display text-3xl text-ink/90">Gotcha.</p>

            <div className="mx-auto my-6 h-0.5 w-16 bg-ink/60" />

            <p className="font-body text-lg text-ink/90 md:text-xl">
              There is no exposé. GreatmanTakit is fine.
            </p>
            <p className="mx-auto mt-4 max-w-md font-body text-base leading-relaxed text-ink/80">
              But you clicked, didn't you? 👀 That means you care. And that's
              exactly why <strong className="underline">Princess-Iman</strong>{" "}
              has something very real and very beautiful to ask you.
            </p>

            <motion.button
              onClick={onReveal}
              className="mt-9 cursor-pointer rounded-xl bg-ink px-8 py-3.5 font-display text-lg font-bold text-cream shadow-lg shadow-ink/30"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Reveal The Truth
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
