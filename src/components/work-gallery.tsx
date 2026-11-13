"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { site, type Photo } from "@/lib/site";

const Chevron = ({ flip = false }: { flip?: boolean }) => (
  <svg viewBox="0 0 24 24" className={`size-6 ${flip ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
    <path d="M15 5l-7 7 7 7" />
  </svg>
);

export function WorkGallery({ photos }: { photos: Photo[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const go = (d: number) => setIndex((i) => (i + d + photos.length) % photos.length);
  const current = photos[index];

  return (
    <section id="work" aria-labelledby="work-title" className="pin bg-white">
      <div className="pin-sticky py-20 md:pt-24 md:pb-10">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-end justify-between gap-x-10 gap-y-4 px-4 sm:px-6 lg:px-8">
          <h2 id="work-title" className="display text-[clamp(2.2rem,5vw,4rem)]">Recent work</h2>
          <p className="max-w-sm text-graphite-soft">Real jobs from homes around Batangas, each measured on site and built to fit. Select a photo to enlarge it.</p>
        </div>

        <div className="pin-scroller mt-10">
          <ul className="pin-track flex w-max gap-5 px-4 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
            {photos.map((p, i) => (
              <li key={p.src}>
                <button
                  type="button"
                  onClick={() => {
                    setIndex(i);
                    setOpen(true);
                    dialog.current?.showModal();
                  }}
                  className="group block w-min text-left"
                >
                  <span className="block overflow-hidden rounded-[3px] bg-glass-deep">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={p.w}
                      height={p.h}
                      sizes="(min-width: 768px) 40vw, 70vw"
                      className="h-72 w-auto max-w-none transition-transform duration-700 ease-out-expo group-hover:scale-[1.04] md:h-[52vh]"
                    />
                  </span>
                  <span aria-hidden className="mt-3 block text-sm text-graphite-soft">{p.alt}</span>
                </button>
              </li>
            ))}
            <li className="flex">
              <a href={site.facebook} className="group flex h-72 w-64 flex-col justify-between rounded-[3px] bg-graphite p-7 text-white md:h-[52vh] md:w-80">
                <span className="display text-3xl">More jobs on Facebook</span>
                <span className="text-white/70 group-hover:text-white">We post new installs every week. Open our page</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="mx-auto mt-8 w-full max-w-7xl px-4 sm:px-6 lg:px-8" aria-hidden>
          <div className="h-px bg-graphite/15">
            <div className="pin-progress h-px bg-graphite" />
          </div>
        </div>
      </div>

      <dialog
        ref={dialog}
        aria-label="Project photo"
        onClose={() => setOpen(false)}
        className="lightbox m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 text-white"
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(1);
          if (e.key === "ArrowLeft") go(-1);
        }}
      >
        <div className="pointer-events-none flex h-full flex-col p-4 sm:p-8">
          <div className="pointer-events-auto flex items-center justify-between">
            <p className="text-sm text-white/70" aria-live="polite">{index + 1} of {photos.length}</p>
            <button type="button" onClick={() => dialog.current?.close()} className="rounded-full border border-white/30 px-4 py-2 text-sm hover:border-white">
              Close
            </button>
          </div>
          <div className="relative my-6 flex-1">
            {open && <Image key={current.src} src={current.src} alt={current.alt} fill sizes="100vw" className="fade-up pointer-events-auto object-contain" />}
          </div>
          <div className="pointer-events-auto flex items-center justify-between gap-4">
            <button type="button" onClick={() => go(-1)} aria-label="Previous photo" className="rounded-full border border-white/30 p-3 hover:border-white">
              <Chevron />
            </button>
            <p className="text-center text-sm text-white/80">{current.alt}</p>
            <button type="button" onClick={() => go(1)} aria-label="Next photo" className="rounded-full border border-white/30 p-3 hover:border-white">
              <Chevron flip />
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
}
