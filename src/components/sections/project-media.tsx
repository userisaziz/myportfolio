"use client";

import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProjectMediaProps {
  images?: string[];
  videoUrl?: string;
  title: string;
}

export function ProjectMedia({ images, videoUrl, title }: ProjectMediaProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const hasImages = images && images.length > 0;
  const hasVideo = !!videoUrl;

  const goToPrevious = useCallback(() => {
    if (!hasImages) return;
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [hasImages, images]);

  const goToNext = useCallback(() => {
    if (!hasImages) return;
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [hasImages, images]);

  if (!hasImages && !hasVideo) return null;

  return (
    <section className="mb-12">
      <h2 className="mb-4 text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
        Media
      </h2>

      {/* Tab switcher: Images / Video */}
      {hasImages && hasVideo && (
        <div className="mb-4 flex gap-px border overflow-hidden rounded-lg w-fit">
          <button
            onClick={() => setShowVideo(false)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-all duration-200",
              !showVideo
                ? "bg-secondary dark:bg-secondary/30 text-foreground"
                : "bg-background text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
            )}
          >
            Screenshots
          </button>
          <button
            onClick={() => setShowVideo(true)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-all duration-200",
              showVideo
                ? "bg-secondary dark:bg-secondary/30 text-foreground"
                : "bg-background text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
            )}
          >
            Video
          </button>
        </div>
      )}

      {/* Image Carousel */}
      {hasImages && !showVideo && (
        <div className="relative overflow-hidden rounded-lg border bg-background">
          {/* Main image */}
          <div className="relative aspect-video w-full overflow-hidden">
            <img
              src={images[activeIndex]}
              alt={`${title} screenshot ${activeIndex + 1}`}
              className="h-full w-full object-cover transition-opacity duration-300"
            />

            {/* Navigation arrows */}
            {images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToPrevious}
                  className="absolute left-3 top-1/2 -translate-y-1/2 size-8 rounded-full bg-background/80 backdrop-blur-sm border-border/40 hover:bg-background"
                >
                  <ChevronLeft className="size-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 size-8 rounded-full bg-background/80 backdrop-blur-sm border-border/40 hover:bg-background"
                >
                  <ChevronRight className="size-4" />
                </Button>
              </>
            )}
          </div>

          {/* Thumbnail strip */}
          {images.length > 1 && (
            <div className="flex gap-1 border-t p-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "relative h-16 w-24 flex-shrink-0 overflow-hidden rounded border-2 transition-all",
                    index === activeIndex
                      ? "border-primary opacity-100"
                      : "border-transparent opacity-50 hover:opacity-75"
                  )}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Video Embed */}
      {hasVideo && showVideo && (
        <div className="overflow-hidden rounded-lg border bg-background">
          <div className="relative aspect-video w-full">
            <iframe
              src={videoUrl}
              title={`${title} video`}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="flex items-center justify-between border-t px-4 py-2">
            <span className="text-xs text-muted-foreground">Workflow Demonstration</span>
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
            >
              <ExternalLink className="size-3" />
              Watch externally
            </a>
          </div>
        </div>
      )}

      {/* Video only (no images) */}
      {hasVideo && !hasImages && (
        <div className="overflow-hidden rounded-lg border bg-background">
          <div className="relative aspect-video w-full">
            <iframe
              src={videoUrl}
              title={`${title} video`}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="flex items-center justify-between border-t px-4 py-2">
            <span className="text-xs text-muted-foreground">Workflow Demonstration</span>
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
            >
              <ExternalLink className="size-3" />
              Watch externally
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
