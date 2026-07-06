import { Map, MapMarker, MapTileLayer } from "@/components/ui/map";

export default function StaticMapInner() {
  // Bengaluru coordinates
  const bengaluru: [number, number] = [12.9716, 77.5946];

  return (
    <Map
      center={bengaluru}
      zoom={12}
      dragging={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      touchZoom={false}
      boxZoom={false}
      keyboard={false}
      attributionControl={false}
    >
      <MapTileLayer />
      <MapMarker
        position={bengaluru}
        icon={
          <div className="flex items-center justify-center">
            <div className="size-4 rounded-full bg-primary shadow-lg ring-2 ring-background" />
          </div>
        }
      />
    </Map>
  );
}
