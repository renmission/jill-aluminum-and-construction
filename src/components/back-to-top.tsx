"use client";

import { useEffect, useState } from "react";

// Shows once the bottom of the section with id `after` scrolls into view, and stays below it.
export function BackToTop({ after }: { after: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = document.getElementById(after);
    if (!el) return;
    const update = () => setShow(el.getBoundingClientRect().bottom <= window.innerHeight);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [after]);

  return (
    <a
      href="#main"
      aria-label="Back to top"
      className={`fixed right-4 bottom-4 z-30 grid size-12 place-items-center rounded-full bg-graphite text-white shadow-lg transition-[opacity,transform,visibility,background-color] duration-300 hover:bg-edge sm:right-6 sm:bottom-6 ${
        show ? "" : "invisible translate-y-3 opacity-0"
      }`}
    >
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </a>
  );
}
