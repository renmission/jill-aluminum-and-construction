import Image from "next/image";
import { ViewTransition } from "react";
import { Elevation } from "@/components/elevation";
import type { Service } from "@/lib/site";

export function ServiceVisual({ service, active = true, priority = false, sizes }: { service: Service; active?: boolean; priority?: boolean; sizes: string }) {
  const photo = service.photos[0];
  return (
    <ViewTransition name={`svc-${service.slug}`} share="morph" default="none">
      <div className="relative aspect-4/5 overflow-hidden rounded-[3px]">
        {photo ? (
          <Image src={photo.src} alt={photo.alt} fill loading={priority ? "eager" : undefined} fetchPriority={priority ? "high" : undefined} sizes={sizes} className="object-cover" />
        ) : (
          <div className={`drafting grid h-full place-items-center p-8 text-graphite ${active ? "draw-on" : ""}`}>
            <Elevation slug={service.slug} className="h-full max-h-[34rem] w-full" />
            <span className="sr-only">Line drawing of {service.name.toLowerCase()}</span>
          </div>
        )}
      </div>
    </ViewTransition>
  );
}
