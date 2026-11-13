import { site } from "@/lib/site";

export function ContactActions({ dark = false }: { dark?: boolean }) {
  const primary = dark ? "bg-white text-graphite hover:bg-glass" : "bg-edge text-white hover:bg-edge-dark";
  const secondary = dark
    ? "border-white/30 text-white hover:border-white"
    : "border-graphite/25 hover:border-graphite";
  return (
    <div className="flex flex-wrap gap-3">
      <a href={site.messenger} className={`rounded-full px-6 py-3.5 font-medium transition-colors ${primary}`}>
        Message us on Messenger
      </a>
      <a href={`tel:${site.phoneTel}`} className={`rounded-full border px-6 py-3.5 font-medium ${secondary}`}>
        Call {site.phoneDisplay}
      </a>
    </div>
  );
}
