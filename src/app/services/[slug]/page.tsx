import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ContactActions } from "@/components/contact-actions";
import { WindowDemo } from "@/components/window-demo";
import { ServiceVisual } from "@/components/service-visual";
import { getService, services, site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return {
    title: `${s.name} in Batangas City`,
    description: `${s.body} Free measurement and estimate. Call or text ${site.phoneDisplay}.`,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: s.photos[0] ? { images: [{ url: s.photos[0].src }] } : undefined,
  };
}

// Known slugs are prerendered in full; Suspense only covers the shell Cache Components requires.
export default function ServicePage({ params }: PageProps<"/services/[slug]">) {
  return (
    <Suspense>
      <ServiceBody params={params} />
    </Suspense>
  );
}

async function ServiceBody({ params }: { params: PageProps<"/services/[slug]">["params"] }) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const others = services.filter((o) => o.group === s.group && o.slug !== s.slug);

  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-12 px-4 pt-10 pb-20 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-8 lg:pt-16">
        <div>
          <nav aria-label="Breadcrumb" className="text-sm text-graphite-soft">
            <Link href="/#services" className="hover:text-edge">Services</Link>
            <span aria-hidden> / </span>
            <span aria-current="page">{s.name}</span>
          </nav>
          <h1 className="display mt-6 text-[clamp(2.4rem,5.5vw,4.6rem)]">{s.name}</h1>
          <p className="mt-6 max-w-xl text-lg text-graphite-soft">{s.body}</p>
          <h2 className="mt-10 font-semibold">Options</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {s.options.map((o) => (
              <li key={o} className="border-l-2 border-edge pl-3">{o}</li>
            ))}
          </ul>
          <div className="mt-10">
            <ContactActions />
          </div>
        </div>

        <div>
          <ServiceVisual service={s} priority sizes="(min-width: 1024px) 50vw, 100vw" />
          {!s.photos[0] && (
            <p className="mt-4 text-sm text-graphite-soft">
              Elevation drawing. Ask us on Messenger for photos of recent jobs, or{" "}
              <a href={site.facebook} className="text-edge underline underline-offset-4">browse our Facebook page</a>.
            </p>
          )}
        </div>
      </section>

      {s.group === "openings" && (
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
            <div>
              <h2 className="display text-[clamp(1.8rem,3.5vw,2.75rem)]">Try a frame and glass</h2>
              <p className="mt-4 max-w-md text-graphite-soft">
                Slide the window and switch finishes to see how silver, champagne, bronze or black frames look with clear, tinted or frosted glass.
              </p>
            </div>
            <WindowDemo />
          </div>
        </section>
      )}

      {s.photos.length > 1 && (
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="display text-[clamp(1.8rem,3.5vw,2.75rem)]">More {s.name.toLowerCase()} we&apos;ve built</h2>
            <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
              {s.photos.slice(1).map((p) => (
                <figure key={p.src} className="mb-5 break-inside-avoid">
                  <Image src={p.src} alt="" width={p.w} height={p.h} sizes="(min-width: 1024px) 33vw, 50vw" className="h-auto w-full rounded-[3px]" />
                  <figcaption className="mt-2 text-sm text-graphite-soft">{p.alt}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-semibold">Also popular</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/services/${o.slug}`} className="block rounded-full border border-graphite/20 px-5 py-2.5 hover:border-edge hover:text-edge">
                {o.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
