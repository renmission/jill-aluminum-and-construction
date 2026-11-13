"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { photos } from "@/lib/site";

const finishes = [
  { id: "silver", label: "Silver" },
  { id: "champagne", label: "Champagne" },
  { id: "bronze", label: "Bronze" },
  { id: "black", label: "Black" },
] as const;

const glasses = [
  { id: "clear", label: "Clear", className: "glass-shine bg-[rgb(150_195_183/0.28)]" },
  { id: "bronze", label: "Bronze tint", className: "glass-shine bg-[rgb(92_62_36/0.5)]" },
  { id: "frosted", label: "Frosted", className: "bg-white/35 backdrop-blur-md" },
] as const;

const clamp = (n: number) => Math.min(100, Math.max(0, n));

export function WindowDemo({ photo = photos.kitchenGreyCounter, priority = false, intro = false }: { photo?: { src: string; alt: string }; priority?: boolean; intro?: boolean }) {
  const [open, setOpen] = useState(0);
  const [finish, setFinish] = useState<(typeof finishes)[number]["id"]>("silver");
  const [glass, setGlass] = useState<(typeof glasses)[number]["id"]>("clear");
  const [dragging, setDragging] = useState(false);
  const opening = useRef<HTMLDivElement>(null);
  const drag = useRef({ x: 0, open: 0 });
  const id = useId();

  // The one load moment: the sash slides partly open so people see it moves.
  useEffect(() => {
    const t = setTimeout(() => setOpen((o) => (o === 0 ? 40 : o)), 1150);
    return () => clearTimeout(t);
  }, []);

  const glassClass = glasses.find((g) => g.id === glass)!.className;

  const pane = (moving: boolean) => (
    <>
      <div className={`absolute inset-0 ${glassClass}`} />
      <div className="sash metal absolute inset-0" />
      {moving && <div className="metal absolute top-1/2 left-1.5 h-14 w-1.5 -translate-y-1/2 rounded-full shadow" />}
    </>
  );

  return (
    <figure className={`finish-${finish}`}>
      <div className={`metal rounded-[3px] p-3 shadow-[0_40px_80px_-40px_rgb(34_41_44/0.6)] sm:p-4 ${intro ? "frame-in" : ""}`}>
        <div ref={opening} className="relative aspect-4/3 overflow-hidden bg-graphite">
          <Image src={photo.src} alt={photo.alt} fill loading={priority ? "eager" : undefined} fetchPriority={priority ? "high" : undefined} sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-y-0 left-0 w-1/2">{pane(false)}</div>
          <div
            className={`absolute inset-y-0 right-0 w-1/2 cursor-grab touch-pan-y shadow-[-14px_0_28px_-10px_rgb(0_0_0/0.45)] active:cursor-grabbing ${dragging ? "" : "transition-transform duration-700 ease-out"}`}
            style={{ transform: `translateX(-${open}%)` }}
            onPointerDown={(e) => {
              e.currentTarget.setPointerCapture(e.pointerId);
              drag.current = { x: e.clientX, open };
              setDragging(true);
            }}
            onPointerMove={(e) => {
              if (!dragging || !opening.current) return;
              const paneWidth = opening.current.offsetWidth / 2;
              setOpen(clamp(drag.current.open + ((drag.current.x - e.clientX) / paneWidth) * 100));
            }}
            onPointerUp={() => setDragging(false)}
            onPointerCancel={() => setDragging(false)}
          >
            {pane(true)}
          </div>
          <div key={`${finish}-${glass}`} aria-hidden className="sheen pointer-events-none absolute inset-0" />
        </div>
      </div>

      <figcaption className="mt-5 grid gap-4 text-sm sm:grid-cols-[1fr_auto] sm:items-end">
        <label htmlFor={`${id}-open`} className="grid gap-2">
          <span className="text-graphite-soft">Slide the window: drag the glass or use this slider</span>
          <input
            id={`${id}-open`}
            type="range"
            min={0}
            max={100}
            value={Math.round(open)}
            onChange={(e) => setOpen(+e.target.value)}
            className="w-full accent-edge"
          />
        </label>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <Swatches legend="Frame" name={`${id}-finish`} items={finishes} value={finish} onChange={setFinish} swatch={(f) => `metal finish-${f}`} />
          <Swatches legend="Glass" name={`${id}-glass`} items={glasses} value={glass} onChange={setGlass} />
        </div>
      </figcaption>
    </figure>
  );
}

function Swatches<T extends string>({
  legend,
  name,
  items,
  value,
  onChange,
  swatch,
}: {
  legend: string;
  name: string;
  items: readonly { id: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  swatch?: (id: T) => string;
}) {
  return (
    <fieldset>
      <legend className="mb-1.5 text-graphite-soft">
        {legend}: <span className="text-graphite">{items.find((i) => i.id === value)?.label}</span>
      </legend>
      <div className="flex gap-1.5">
        {items.map((i) => (
          <label key={i.id} className="cursor-pointer" title={i.label}>
            <input type="radio" name={name} value={i.id} checked={value === i.id} onChange={() => onChange(i.id)} className="peer sr-only" />
            <span
              className={`block rounded-full ring-1 ring-graphite/20 peer-checked:ring-2 peer-checked:ring-edge peer-checked:ring-offset-2 peer-checked:ring-offset-glass peer-focus-visible:outline-3 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-edge ${
                swatch ? `size-7 ${swatch(i.id)}` : "px-3 py-1 text-[0.8rem] leading-5"
              }`}
            >
              {swatch ? <span className="sr-only">{i.label}</span> : i.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
