"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src?: string;
  poster?: string;
  fallbackLabel: string;
  overlay?: "dark" | "darker" | "none";
  className?: string;
};

/**
 * Renders a full-bleed background video when `src` is provided and playable.
 * If the asset is missing (placeholder project state), it renders a clearly
 * marked gradient placeholder instead of failing silently, so the person
 * building the site always knows what's missing.
 */
export default function MediaBackground({
  src,
  poster,
  fallbackLabel,
  overlay = "dark",
  className = "",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(!src);

  useEffect(() => {
    if (!src) setFailed(true);
  }, [src]);

  const overlayClass =
    overlay === "darker"
      ? "bg-black/60"
      : overlay === "dark"
      ? "bg-black/35"
      : "";

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {!failed && src ? (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          onError={() => setFailed(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="relative h-full w-full bg-gradient-to-br from-forest via-[#0f241d] to-black">
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,#ffffff22,transparent_40%),radial-gradient(circle_at_80%_70%,#d86b4533,transparent_45%)]" />
          <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
            <p className="max-w-sm font-body text-xs uppercase tracking-[0.2em] text-paper/40">
              Missing asset — add{" "}
              <span className="text-paper/70">{fallbackLabel}</span> to{" "}
              <code className="text-paper/70">public/media/</code>
            </p>
          </div>
        </div>
      )}
      {overlay !== "none" && (
        <div className={`absolute inset-0 ${overlayClass}`} />
      )}
    </div>
  );
}
