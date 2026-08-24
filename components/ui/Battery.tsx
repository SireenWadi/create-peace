"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  label: string;
  value: number;
  displayOverride?: string;
  drain?: boolean;
  overflow?: boolean;
  note?: string;
};

export default function Battery({
  label,
  value,
  displayOverride,
  drain,
  overflow,
  note,
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  const barColor = overflow ? "#D86B45" : drain ? "#D86B45" : "#173D32";
  const widthKeyframes = drain
    ? ["0%", "100%", "17%"]
    : [`0%`, `${Math.min(value, 100)}%`];

  return (
    <div ref={ref} className="border-t border-ink/10 py-6 md:py-7">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-display text-sm md:text-base tracking-[0.15em] uppercase">
          {label}
        </p>
        <motion.p
          className="font-display text-2xl md:text-3xl tabular-nums"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.1, duration: 0.3 }}
        >
          {displayOverride ?? `${value}%`}
        </motion.p>
      </div>

      <div className="mt-3 h-3 md:h-4 w-full overflow-hidden rounded-full bg-ink/5">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: barColor }}
          initial={{ width: "0%" }}
          animate={inView ? { width: widthKeyframes } : {}}
          transition={
            drain
              ? {
                  duration: 1.6,
                  times: [0, 0.4, 1],
                  ease: [0.16, 1, 0.3, 1],
                }
              : {
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.15,
                }
          }
        />
      </div>

      {note && <p className="mt-2 font-body text-xs text-ink/40">{note}</p>}
    </div>
  );
}
