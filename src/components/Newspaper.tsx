import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { PlotTwistModal } from "./PlotTwistModal";

const BREAKING_HEADLINE =
  "BREAKING: Gospel Artist GreatmanTakit Finally Exposed...";
/** The headline types itself over ~1.5s... */
const TYPE_DURATION_MS = 1500;
/** ...and the popup slams in right as the visitor leans in to read more. */
const MODAL_DELAY_MS = TYPE_DURATION_MS + 350;

const ARTICLE_PARAGRAPHS = [
  "Sources close to the gospel sensation confirmed late Tuesday that documents — dozens of them, possibly hundreds — exist. What the documents contain, no one will say. Where they are kept, no one will say. Whether they are, in fact, documents at all remains a matter of intense speculation among people who speculate intensely.",
  "“I saw him once, at a petrol station,” said a witness who asked to remain anonymous because she is not real. “He was buying water. Regular water. Not even sparkling. Draw your own conclusions.”",
  "Industry insiders describe a pattern of behaviour so consistent, so relentlessly wholesome, that investigators were forced to ask the question nobody wanted to ask: what is he hiding behind all that talent?",
  "Repeated attempts to reach GreatmanTakit for comment were unsuccessful, largely because no attempts were made. His management responded to our inquiry with a fruit basket and a note that read “God bless you and your family.” Chilling.",
  "Forensic audio analysts who reviewed his latest album found no evidence of wrongdoing, which experts agree is exactly what someone with something to hide would want. “The harmonies are clean,” one analyst admitted. “Too clean.”",
  "As the investigation continues, one thing is certain: nothing is certain. Except that everything in this article is fabricated, which is very certain indeed.",
];

interface NewspaperProps {
  onRevealed: () => void;
}

/**
 * Act I — the fake exposé. A scanned-newspaper front page, unreadable under a
 * heavy blur, interrupted by the plot-twist modal. On reveal, GSAP folds the
 * whole paper upward like a sheet being lifted away.
 */
export function Newspaper({ onRevealed }: NewspaperProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [proposed, setProposed] = useState(false);
  const [folding, setFolding] = useState(false);
  const [typedChars, setTypedChars] = useState(0);
  const [modalReady, setModalReady] = useState(false);

  // Live typewriter: the story is still being written when the popup interrupts it.
  useEffect(() => {
    const perChar = TYPE_DURATION_MS / BREAKING_HEADLINE.length;
    const typer = setInterval(
      () =>
        setTypedChars((n) => Math.min(n + 1, BREAKING_HEADLINE.length)),
      perChar,
    );
    const modal = setTimeout(() => setModalReady(true), MODAL_DELAY_MS);
    return () => {
      clearInterval(typer);
      clearTimeout(modal);
    };
  }, []);

  const reveal = () => {
    if (folding || !stageRef.current) return;
    setFolding(true);
    const q = gsap.utils.selector(stageRef);
    const tl = gsap.timeline({ onComplete: onRevealed });
    // The blur lifts first, like the story dissolving...
    tl.to(q(".np-blur"), { filter: "blur(0px)", duration: 0.7, ease: "power2.out" })
      .to(q(".np-article"), { opacity: 0.25, duration: 0.7 }, "<")
      // ...the photo warms from black-and-white to colour...
      .to(q(".np-photo"), { filter: "grayscale(0) sepia(0.25) saturate(1.6)", duration: 0.9 }, "<")
      // ...then the whole paper folds upward and away.
      .to(stageRef.current, {
        rotateX: 74,
        yPercent: -55,
        scale: 0.92,
        opacity: 0,
        transformOrigin: "top center",
        duration: 1.35,
        ease: "power3.inOut",
      })
      .set(stageRef.current, { display: "none" });
  };

  return (
    <div className="fixed inset-0 z-30 [perspective:1400px]">
      <div
        ref={stageRef}
        className="grain absolute inset-0 flex flex-col overflow-y-auto bg-cream shadow-[inset_0_0_120px_rgba(120,90,50,0.18)] [transform-style:preserve-3d]"
      >
        {/* Masthead — kept crisp above the blur */}
        <header className="shrink-0 px-6 pt-6 text-center md:px-16">
          <div className="mb-2 flex items-center justify-center gap-3 text-ink/70">
            <span className="h-px w-24 bg-ink/50 md:w-64" />
            <span className="font-body text-xs uppercase tracking-[0.3em]">
              ✦ Special Investigation ✦
            </span>
            <span className="h-px w-24 bg-ink/50 md:w-64" />
          </div>
          <h1
            className="cursor-default select-none font-display text-5xl font-black tracking-tight text-ink md:text-7xl"
            onMouseEnter={() => setProposed(true)}
            onMouseLeave={() => setProposed(false)}
          >
            <span className="italic">GreatmanTakit</span>{" "}
            <span className="inline-block min-w-[5.2ch] text-left">
              {proposed ? "PROPOSED" : "EXPOSED"}
            </span>
          </h1>
          <div className="mt-3 flex items-center justify-between border-y-2 border-ink/70 bg-ink/5 px-3 py-1.5 font-body text-xs tracking-widest text-ink/80 md:text-sm">
            <span>Est. 2025</span>
            <span className="italic">"The Truth Will Shock You"</span>
            <span>Volume I · Issue I</span>
          </div>

          {/* Live wire bulletin — the only crisp, readable line on the page */}
          <p className="mt-5 min-h-[1.6em] font-body text-lg tracking-wide text-ink md:text-2xl">
            <span className="font-bold text-[#a02c1d]">
              {BREAKING_HEADLINE.slice(0, Math.min(typedChars, 9))}
            </span>
            <span className="font-semibold">
              {BREAKING_HEADLINE.slice(9, typedChars)}
            </span>
            {!folding && (
              <span className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[0.18em] animate-caret bg-ink" />
            )}
          </p>
        </header>

        {/* The article — heavily blurred, deliberately unreadable */}
        <div className="np-blur relative grow blur-[7px]" aria-hidden>
          <article className="np-article mx-auto max-w-5xl px-6 py-10 md:px-10">
            <p className="text-center font-body text-sm font-bold uppercase tracking-[0.35em] text-terracotta">
              Breaking Story
            </p>
            <h2 className="mt-4 text-center font-display text-3xl font-bold leading-snug text-ink md:text-5xl">
              Gospel Star GreatmanTakit:
              <br />
              <span className="italic">
                "The Untold Story Nobody Dared Publish"
              </span>
            </h2>
            <p className="mt-4 text-center font-body italic text-ink/60">
              By Our Special Correspondent · Filed under mysterious
              circumstances
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-[1.1fr_1fr]">
              {/* Fake black-and-white concert photo */}
              <figure>
                <div
                  className="np-photo aspect-[4/3] w-full rounded-sm grayscale"
                  style={{
                    background:
                      "radial-gradient(ellipse 45% 60% at 38% 45%, #8a6c50 0%, #40342a 45%, #17120e 100%)",
                  }}
                />
                <figcaption className="mt-2 border-b border-ink/30 pb-2 font-body text-sm italic text-ink/60">
                  The artist, photographed doing something suspicious
                  (singing).
                </figcaption>
              </figure>

              <div className="space-y-5 font-body text-[15px] leading-relaxed text-ink/85">
                <blockquote className="border-l-4 border-terracotta pl-4 font-display text-xl italic">
                  "The harmonies are clean. Too clean."
                </blockquote>
                <p>{ARTICLE_PARAGRAPHS[0]}</p>
                <p>{ARTICLE_PARAGRAPHS[1]}</p>
                <div className="border-2 border-ink/40 p-3 text-center text-sm uppercase tracking-widest">
                  Exhibit A · [REDACTED] · Exhibit B
                </div>
              </div>
            </div>

            <div className="np-columns mt-10 font-body text-[15px] leading-relaxed text-ink/85">
              {ARTICLE_PARAGRAPHS.slice(2).map((p, i) => (
                <p key={i} className="mb-4">
                  {p}
                </p>
              ))}
            </div>
          </article>
        </div>

        {/* Easter egg — the only legible line in the whole paper */}
        <p className="shrink-0 px-6 pb-4 text-center font-body text-[11px] italic text-ink/45">
          This publication is legally required to admit that absolutely none of
          this is true.
        </p>
      </div>

      <PlotTwistModal show={modalReady && !folding} onReveal={reveal} />
    </div>
  );
}
