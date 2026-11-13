"use client";

import Link from "next/link";
import { useState } from "react";
import { ServiceVisual } from "@/components/service-visual";
import type { Service } from "@/lib/site";

export function ServicesIndex({ groups }: { groups: { id: string; title: string; items: Service[] }[] }) {
  const all = groups.flatMap((g) => g.items);
  const [active, setActive] = useState(all[0].slug);

  return (
    <div className="grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
      <div className="grid gap-12">
        {groups.map((g) => (
          <div key={g.id}>
            <h3 className="text-sm font-semibold text-graphite-soft">{g.title}</h3>
            <ul className="mt-3 border-t border-graphite/15">
              {g.items.map((s) => {
                const on = s.slug === active;
                return (
                  <li key={s.slug} className="border-b border-graphite/15">
                    <Link
                      href={`/services/${s.slug}`}
                      onMouseEnter={() => setActive(s.slug)}
                      onFocus={() => setActive(s.slug)}
                      className="group relative grid gap-1 py-5 pl-5 sm:grid-cols-[minmax(0,15rem)_1fr] sm:items-baseline sm:gap-8"
                    >
                      <span
                        aria-hidden
                        className={`absolute top-1/2 left-0 h-[60%] w-[3px] -translate-y-1/2 origin-center bg-edge transition-transform duration-500 ease-out-expo ${on ? "scale-y-100" : "scale-y-0"}`}
                      />
                      <span className={`display text-[1.45rem] leading-tight transition-colors duration-300 ${on ? "text-edge" : ""}`}>{s.name}</span>
                      <span className="text-graphite-soft">{s.line}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Desktop preview; hidden from assistive tech since each row links to the full page */}
      <div aria-hidden className="relative hidden lg:block">
        <div className="sticky top-24">
          <div className="relative aspect-4/5">
            {all.map((s) => (
              <div
                key={s.slug}
                className={`absolute inset-0 transition-[opacity,scale] duration-700 ease-out-expo ${s.slug === active ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"}`}
              >
                <ServiceVisual service={s} active={s.slug === active} sizes="40vw" />
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-graphite-soft">
            {all.find((s) => s.slug === active)!.photos[0] ? "A recent job by our team" : "Elevation drawing. Ask us for photos of recent jobs."}
          </p>
        </div>
      </div>
    </div>
  );
}
