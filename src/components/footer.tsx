import Link from "next/link";
import { services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-graphite text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="display text-3xl text-white">JILL</p>
          <p className="mt-3 max-w-xs text-sm">
            Aluminum and glass cabinets, windows and doors, made and installed in Batangas City.
          </p>
        </div>
        <nav aria-label="Services">
          <p className="mb-3 text-sm font-semibold text-white">Services</p>
          <ul className="grid gap-1.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">{s.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-sm">
          <p className="mb-3 font-semibold text-white">Visit or call</p>
          <address className="not-italic">
            {site.address.street}
            <br />
            {site.address.city} {site.address.postal}
          </address>
          <p className="mt-3">
            <a href={`tel:${site.phoneTel}`} className="hover:text-white">{site.phoneDisplay}</a>
            <br />
            <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
          </p>
          <p className="mt-3">
            <a href={site.facebook} className="underline underline-offset-4 hover:text-white">Facebook page</a>
          </p>
        </div>
      </div>
      <p className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/50">{site.name}</p>
    </footer>
  );
}
