"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
};

export default function ImageFrame({
  src,
  alt,
  className = "",
  imgClassName = "",
}: Props) {
  const [failed, setFailed] = useState(false);
  const fileName = src.split("/").pop();

  if (failed) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-forest/10 ${className}`}
      >
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(135deg,#17403420_25%,transparent_25%),linear-gradient(225deg,#17403420_25%,transparent_25%),linear-gradient(45deg,#17403420_25%,transparent_25%),linear-gradient(315deg,#17403420_25%,transparent_25%)] [background-position:10px_0,10px_0,0_0,0_0] [background-size:20px_20px]" />
        <p className="relative px-4 text-center font-body text-[10px] uppercase tracking-[0.15em] text-forest/60">
          Add {fileName}
        </p>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
