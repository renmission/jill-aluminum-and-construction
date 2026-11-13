import type { ReactNode } from "react";

// Front-view drawings in fabricator convention: dashed lines point to the hinge side, arrows show sliding panels.
const P = (props: React.SVGProps<SVGPathElement> & { i?: number }) => {
  const { i = 0, strokeDasharray, ...rest } = props;
  // Dashed lines fade in; pathLength=1 would rescale their dashes.
  return strokeDasharray ? (
    <path className="draw-fade" strokeDasharray={strokeDasharray} style={{ "--i": i } as React.CSSProperties} {...rest} />
  ) : (
    <path pathLength={1} className="draw" style={{ "--i": i } as React.CSSProperties} {...rest} />
  );
};

const arrow = (x1: number, x2: number, y: number, i: number) => (
  <P i={i} d={`M${x1} ${y}H${x2}M${x1 + 10} ${y - 7}L${x1} ${y}L${x1 + 10} ${y + 7}M${x2 - 10} ${y - 7}L${x2} ${y}L${x2 - 10} ${y + 7}`} />
);

const drawings: Record<string, ReactNode> = {
  window: (
    <>
      <P i={0} d="M80 90H320V390H80Z" />
      <P i={1} d="M200 90V390" />
      <P i={2} d="M92 102H188V378H92ZM212 102H308V378H212Z" />
      <P i={4} strokeDasharray="6 6" d="M92 102L188 240L92 378M308 102L212 240L308 378" />
      <P i={5} d="M80 410H320M80 404V416M320 404V416" />
    </>
  ),
  "sliding-window": (
    <>
      <P i={0} d="M60 130H340V350H60Z" />
      <P i={1} d="M70 140H212V340H70Z" />
      <P i={2} d="M188 146H330V334H188Z" />
      <P i={3} d="M198 220V260" />
      {arrow(232, 312, 240, 4)}
      <P i={5} d="M60 372H340M60 366V378M340 366V378" />
    </>
  ),
  "sliding-door": (
    <>
      <P i={0} d="M110 40H290V460H110Z" />
      <P i={1} d="M118 48H210V452H118Z" />
      <P i={2} d="M190 54H282V446H190Z" />
      <P i={3} d="M200 230V290" />
      {arrow(214, 270, 260, 4)}
      <P i={5} d="M310 40V460M304 40H316M304 460H316" />
    </>
  ),
  "screen-door": (
    <>
      <P i={0} d="M120 40H280V460H120Z" />
      <P i={1} d="M132 52H268V448H132Z" />
      <P i={2} d="M132 250H268" />
      <path d="M140 60L260 180M140 100L260 220M140 140L232 232M140 180L192 232M168 60L260 152M208 60L260 112M140 270L260 390M140 310L260 430M140 350L230 440M140 390L190 440M170 270L260 360M210 270L260 320" stroke="currentColor" strokeOpacity="0.25" />
      <P i={3} d="M252 236V264" />
      <P i={4} strokeDasharray="6 6" d="M132 52L268 250L132 448" />
    </>
  ),
  "shoe-cabinet": (
    <>
      <P i={0} d="M100 150H300V410H100Z" />
      <P i={1} d="M200 150V410" />
      <P i={2} d="M100 410V424H300V410" />
      <P i={3} d="M120 172H180M120 180H180M120 188H180M220 172H280M220 180H280M220 188H280" />
      <P i={4} d="M188 290V320M212 290V320" />
      <P i={5} strokeDasharray="5 6" d="M112 250L188 228M112 320L188 298M112 390L188 368M212 250L288 228M212 320L288 298M212 390L288 368" />
    </>
  ),
};

export const hasElevation = (slug: string) => slug in drawings;

export function Elevation({ slug, className = "" }: { slug: string; className?: string }) {
  return (
    <svg viewBox="0 0 400 500" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      {drawings[slug]}
    </svg>
  );
}
