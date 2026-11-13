"use client";

import Link from "next/link";
import { site } from "@/lib/site";

// Native popover: light-dismiss, Esc and top-layer for free; links close it on tap.
export function MobileMenu({ items }: { items: { href: string; label: string }[] }) {
  const close = () => document.getElementById("mobile-menu")?.hidePopover();
  return (
    <>
      <button type="button" popoverTarget="mobile-menu" aria-label="Open menu" className="-mr-2 p-2 md:hidden">
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
          <path d="M4 8h16M4 16h16" />
        </svg>
      </button>
      <div id="mobile-menu" popover="auto" className="m-0 mt-16 w-screen max-w-none border-b border-graphite/10 bg-glass p-0 text-graphite shadow-xl md:hidden">
        <nav aria-label="Mobile">
          <ul className="px-4 py-4">
            {items.map((n) => (
              <li key={n.href} className="border-b border-graphite/10 last:border-0">
                <Link href={n.href} onClick={close} className="display block py-4 text-2xl">{n.label}</Link>
              </li>
            ))}
          </ul>
          <p className="px-4 pb-6">
            <a href={`tel:${site.phoneTel}`} className="font-semibold text-edge">Call {site.phoneDisplay}</a>
          </p>
        </nav>
      </div>
    </>
  );
}
