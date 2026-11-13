// Schematic cross-section of a two-track sliding window sill; each stroke draws in as it scrolls into view.
export function SillProfile() {
  return (
    <figure>
      <svg viewBox="0 0 640 290" fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" className="scroll-draw w-full" aria-hidden>
        <path pathLength={1} d="M40 230V170H86V70H98V170H222V100H234V170H406V70H418V170H542V100H554V170H600V230H612V242H600V230Z" />
        <path pathLength={1} d="M58 186H582V214H58Z" />
        <path pathLength={1} d="M200 186V214M320 186V214M440 186V214" />
        <circle pathLength={1} cx="130" cy="200" r="6" />
        <circle pathLength={1} cx="510" cy="200" r="6" />
        <path pathLength={1} strokeOpacity={0.45} d="M112 40V160H208V40M432 40V160H528V40" />
        <path pathLength={1} strokeOpacity={0.6} strokeWidth={1.25} d="M40 266H600M40 258V274M600 258V274" />
      </svg>
      <figcaption className="mt-4 max-w-md text-sm text-white/60">
        Cross-section of a two-track sliding window sill. Hollow chambers keep the profile light but stiff, and it can&apos;t warp or rot.
      </figcaption>
    </figure>
  );
}
