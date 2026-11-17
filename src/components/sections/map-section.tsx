"use client";

import dynamic from "next/dynamic";

const StaticMap = dynamic(() => import("./static-map-inner"), { ssr: false });

export function MapSection() {
  return (
    <section id="location" className="w-full scroll-mt-20 py-20 px-6 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            Location
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Based in Bengaluru, India — available for remote work worldwide
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border">
          <div className="h-[400px] w-full">
            <StaticMap />
          </div>
        </div>
      </div>
    </section>
  );
}
