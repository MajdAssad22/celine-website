import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ZoomImageProps {
  src: string;
  alt?: string;
  className?: string;
  containerClassName?: string;
  zoomLevel?: number;
  magnifierSize?: number;
}

export const ZoomImage: React.FC<ZoomImageProps> = ({
  src,
  alt = "Image",
  className = "",
  containerClassName = "",
  zoomLevel = 2.5,
  magnifierSize = 120,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const magnifierRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    containerRect: { left: 0, top: 0 },
    magnifierRadius: magnifierSize / 2,
    scale: zoomLevel,
    containerWidth: 0,
    containerHeight: 0,
  });

  useEffect(() => {
    if (!containerRef.current || !magnifierRef.current) return;

    const container = containerRef.current;
    const magnifier = magnifierRef.current;
    const state = stateRef.current;

    // Update state with current dimensions
    state.magnifierRadius = magnifierSize / 2;
    state.scale = zoomLevel;
    state.containerWidth = container.offsetWidth;
    state.containerHeight = container.offsetHeight;

    // Set background size immediately
    magnifier.style.backgroundSize = `${state.containerWidth * state.scale}px ${state.containerHeight * state.scale}px`;

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const x = e.clientX - state.containerRect.left;
        const y = e.clientY - state.containerRect.top;

        magnifier.style.transform = `translate(${x - state.magnifierRadius}px, ${y - state.magnifierRadius}px)`;
        magnifier.style.backgroundPosition = `${-x * state.scale + state.magnifierRadius}px ${-y * state.scale + state.magnifierRadius}px`;
      });
    };

    const handleMouseEnter = () => {
      state.containerRect = container.getBoundingClientRect();
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      if (rafId) cancelAnimationFrame(rafId);
      setIsHovering(false);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [magnifierSize, zoomLevel]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", containerClassName)}
    >
      <img src={src} alt={alt} className={cn("w-full h-full", className)} />

      {isHovering && (
        <div
          ref={magnifierRef}
          className="pointer-events-none absolute rounded-full border-4 border-white/80 shadow-lg overflow-hidden bg-black/20"
          style={{
            width: `${magnifierSize}px`,
            height: `${magnifierSize}px`,
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            willChange: "transform, background-position",
          }}
        />
      )}
    </div>
  );
};
