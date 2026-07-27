import { useEffect } from "react";
import Lenis from "lenis";

/** Buttery smooth scrolling for the whole experience. */
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, lerp: 0.12 });
    let frame: number;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
}
