import Link from "next/link";
import { site } from "@/lib/site";
import { MobileMenu } from "@/components/mobile-menu";

export const nav = [
  { href: "/#work", label: "Our work" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "How it works" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="site-header sticky top-0 z-40 border-b border-graphite/10 bg-glass/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-baseline gap-2" aria-label={`${site.name}, home`}>
          <span className="display text-2xl">JILL</span>
          <span className="hidden text-sm text-graphite-soft sm:inline">Aluminum &amp; Construction</span>
        </Link>
        <nav aria-label="Main" className="ml-auto hidden md:block">
          <ul className="flex gap-7 text-[0.95rem]">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="relative after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a href={site.messenger} className="ml-auto rounded-full bg-graphite px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-edge md:ml-0">
          Message us
        </a>
        <MobileMenu items={nav} />
      </div>
    </header>
  );
}
