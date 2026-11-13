import Image from "next/image";
import Link from "next/link";
import { ContactActions } from "@/components/contact-actions";
import { WorkGallery } from "@/components/work-gallery";
import { ServicesIndex } from "@/components/services-index";
import { SillProfile } from "@/components/sill-profile";
import { BackToTop } from "@/components/back-to-top";
import { photos, services, site } from "@/lib/site";

const work = [
  photos.kitchenGreyCounter,
  photos.wardrobeWoodgrain,
  photos.kitchenWhiteGloss,
  photos.vanityGrey,
  photos.wardrobeWhite,
  photos.kitchenWhiteSink,
  photos.kitchenGreyPullout,
  photos.kitchenWhitePullout,
];

const reasons = [
  { title: "No swelling, no rot", body: "Rainy-season humidity warps plywood doors until they stick. Aluminum frames stay straight." },
  { title: "Nothing for termites to eat", body: "Anay can hollow out a wooden cabinet from the inside. They can't touch aluminum." },
  { title: "Wipe it clean", body: "Gloss panels and glass wipe down with a damp cloth. Kitchen grease doesn't soak in." },
  { title: "No repainting", body: "The finish is part of the metal, so it doesn't peel or need a fresh coat every few years." },
];

const steps = [
  { title: "Send us a photo or call", body: "Tell us what you need and roughly where. Messenger, text or a call all work." },
  { title: "We visit and measure", body: "We come to your home, take exact measurements and talk through layout. This is free." },
  { title: "Pick your finish, approve the quote", body: "Choose frame color, panels and glass. You get a written price before we cut anything." },
  { title: "We fabricate in our shop", body: "Everything is cut and assembled in Balete, Batangas City, to your measurements." },
  { title: "We install and clean up", body: "Our team installs, checks every door and slider, and leaves the room tidy." },
];

const headline = ["Aluminum", "and glass,", "cut to fit", "your home."];

export default function Home() {
  const groups = [
    { id: "rooms", title: "For your rooms", items: services.filter((s) => s.group === "rooms") },
    { id: "openings", title: "For windows and doorways", items: services.filter((s) => s.group === "openings") },
  ];

  return (
    <>
      <section className="relative mx-2 flex min-h-[calc(100svh-4.5rem)] flex-col overflow-clip rounded-[1.25rem] bg-graphite text-white sm:mx-3">
        <div aria-hidden className="hero-parallax absolute inset-0">
          <Image
            src={photos.kitchenGreyCounter.src}
            alt=""
            fill
            preload
            sizes="100vw"
            className="hero-photo object-cover object-[50%_42%]"
          />
        </div>
        <div aria-hidden className="absolute inset-0 bg-linear-to-t from-graphite via-graphite/55 to-graphite/25" />

        <p className="fade-up relative m-5 self-start rounded-full border border-white/20 bg-graphite/40 px-4 py-2 text-sm backdrop-blur-md sm:m-8" style={{ "--d": "900ms" } as React.CSSProperties}>
          A grey kitchen we built
        </p>

        <div className="relative mt-auto grid items-end gap-10 p-5 pt-24 sm:p-8 sm:pt-32 lg:grid-cols-[1fr_auto] lg:p-12">
          <div>
            <h1 className="display text-[clamp(2.6rem,6vw,5.75rem)]">
              {headline.map((line, i) => (
                <span key={line} className="line-mask">
                  <span style={{ "--i": i } as React.CSSProperties}>{line}</span>
                </span>
              ))}
            </h1>
            <p className="fade-up mt-7 max-w-[34rem] text-lg text-white/80" style={{ "--d": "420ms" } as React.CSSProperties}>
              Kitchen cabinets, wardrobes, windows and sliding doors, measured, built and installed by our own team in Batangas City.
              Measuring and estimates are free.
            </p>
            <div className="fade-up mt-9" style={{ "--d": "540ms" } as React.CSSProperties}>
              <ContactActions dark />
            </div>
          </div>

          <nav aria-labelledby="hero-services" className="fade-up hidden w-92 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl lg:block" style={{ "--d": "700ms" } as React.CSSProperties}>
            <h2 id="hero-services" className="font-semibold">What do you need built?</h2>
            <ul className="mt-4 flex flex-wrap gap-2 text-[0.95rem]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="block rounded-full border border-white/20 px-3.5 py-1.5 transition-colors hover:border-white hover:bg-white hover:text-graphite">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <WorkGallery photos={work} />

      <section id="services" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <h2 className="display mb-14 max-w-3xl text-[clamp(2.2rem,5vw,4rem)]">What we make</h2>
        <ServicesIndex groups={groups} />
      </section>

      <section className="overflow-hidden bg-graphite py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <h2 className="display text-[clamp(2.2rem,5vw,4rem)]">Made for humid, <span className="whitespace-nowrap">termite-prone</span> homes</h2>
            <div className="text-edge-light">
              <SillProfile />
            </div>
          </div>
          <dl className="mt-20 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div key={r.title} className="border-t border-white/20 pt-5">
                <dt className="text-lg font-semibold">{r.title}</dt>
                <dd className="mt-2 text-white/70">{r.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <h2 className="display max-w-3xl text-[clamp(2.2rem,5vw,4rem)]">How a job goes</h2>
        <div className="relative mt-16">
          <div aria-hidden className="absolute inset-x-0 top-[1.125rem] hidden h-px bg-graphite/15 md:block">
            <div className="rail-fill h-[2px] -translate-y-px bg-edge" />
          </div>
          <ol className="grid gap-10 md:grid-cols-5 md:gap-8">
            {steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[2.25rem_1fr] gap-x-4 md:block">
                <span className="relative grid size-9 place-items-center rounded-full border border-graphite/25 bg-glass text-sm font-semibold">{i + 1}</span>
                <div>
                  <h3 className="font-semibold leading-snug md:mt-6">{s.title}</h3>
                  <p className="mt-2 text-[0.95rem] text-graphite-soft">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
        <div className="relative mx-auto grid max-w-7xl gap-12 overflow-hidden rounded-[3px] bg-edge-dark p-8 text-white sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:p-16">
          <div aria-hidden className="glass-shine pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative">
            <h2 className="display text-[clamp(2.2rem,5vw,4rem)]">Get a free estimate</h2>
            <p className="mt-5 max-w-lg text-white/80">
              Send a photo of the space and rough measurements if you have them. We&apos;ll reply with next steps and book a visit.
            </p>
            <div className="mt-9">
              <ContactActions dark />
            </div>
          </div>
          <dl className="relative grid content-start gap-6 text-[0.95rem]">
            <div>
              <dt className="text-white/60">Call or text</dt>
              <dd><a href={`tel:${site.phoneTel}`} className="display text-3xl hover:text-edge-light">{site.phoneDisplay}</a></dd>
            </div>
            <div>
              <dt className="text-white/60">Email</dt>
              <dd><a href={`mailto:${site.email}`} className="hover:text-edge-light">{site.email}</a></dd>
            </div>
            <div>
              <dt className="text-white/60">Shop</dt>
              <dd>
                {site.address.street}, {site.address.city} {site.address.postal}
                <br />
                <a href={site.maps} className="underline underline-offset-4 hover:text-edge-light">Open in Google Maps</a>
              </dd>
            </div>
            <div>
              <dt className="text-white/60">Already worked with us?</dt>
              <dd><a href={site.reviews} className="underline underline-offset-4 hover:text-edge-light">Leave a review on Facebook</a></dd>
            </div>
          </dl>
        </div>
      </section>
      <BackToTop after="work" />
    </>
  );
}
