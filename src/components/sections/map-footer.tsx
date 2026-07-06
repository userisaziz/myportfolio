"use client";

import dynamic from "next/dynamic";
import { Code2, Link2, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const MapSection = dynamic(
  () =>
    import("@/components/ui/map").then((mod) => ({
      default: function MapSection() {
        const { Map, MapMarker, MapTileLayer, MapZoomControl, MapLayers } = mod;
        return (
          <div className="relative h-80 w-full">
            <Map center={[12.9716, 77.5946]} zoom={12}>
              <MapLayers>
                <MapTileLayer />
                <MapMarker position={[12.9716, 77.5946]} />
              </MapLayers>
              <MapZoomControl />
            </Map>
          </div>
        );
      },
    })),
  { ssr: false }
);

export function MapFooter() {
  return (
    <footer id="location" className="w-full">
      <MapSection />
      <div className="bg-card border-t border-border px-6 py-12 sm:px-8">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Bengaluru, India</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/userisaziz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Code2 className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/userisaziz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Link2 className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:aziz.ahmed@almabetter.com"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} AbdulAziz Adnan. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
