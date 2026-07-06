import { cn } from "@/lib/utils";

export function FullWidthDivider({
  position = "bottom",
}: {
  position?: "top" | "bottom";
}) {
  return (
    <div
      className={cn(
        "relative w-full",
        position === "top" ? "h-px" : "h-px"
      )}
    >
      <div className="absolute inset-x-0 h-px bg-border" />
    </div>
  );
}
