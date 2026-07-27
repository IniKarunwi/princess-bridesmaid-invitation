import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Newspaper } from "./components/Newspaper";
import { EnvelopeGallery } from "./components/EnvelopeGallery";
import { LetterPage } from "./components/LetterPage";
import { Petals } from "./components/Petals";
import { Footer } from "./components/Footer";
import { bridesmaids, type Bridesmaid } from "./data/bridesmaids";
import { useLenis } from "./hooks/useLenis";

type Phase = "newspaper" | "envelopes" | "letter";

export default function App() {
  useLenis();
  const [phase, setPhase] = useState<Phase>("newspaper");
  const [selected, setSelected] = useState<Bridesmaid | null>(null);

  // Personalised links: greatmantakitexposed.com/?for=amara
  // When present, only that envelope will open — the rest politely refuse.
  const guestId = useMemo(() => {
    const id = new URLSearchParams(window.location.search)
      .get("for")
      ?.toLowerCase()
      .trim();
    return bridesmaids.some((b) => b.id === id) ? id! : null;
  }, []);

  return (
    <motion.main
      className="relative flex min-h-screen flex-col"
      animate={{
        backgroundColor: phase === "newspaper" ? "#f2ead7" : "#fdf8ef",
      }}
      transition={{ duration: 1.6, ease: "easeInOut" }}
    >
      {phase !== "newspaper" && <Petals density={phase === "envelopes" ? 14 : 6} />}

      {phase === "newspaper" && (
        <Newspaper onRevealed={() => setPhase("envelopes")} />
      )}

      <AnimatePresence mode="wait">
        {phase === "envelopes" && (
          <EnvelopeGallery
            key="gallery"
            guestId={guestId}
            onOpened={(b) => {
              setSelected(b);
              setPhase("letter");
            }}
          />
        )}

        {phase === "letter" && selected && (
          <LetterPage
            key={selected.id}
            bridesmaid={selected}
            onBack={() => {
              setSelected(null);
              setPhase("envelopes");
            }}
          />
        )}
      </AnimatePresence>

      {phase !== "newspaper" && <Footer />}
    </motion.main>
  );
}
