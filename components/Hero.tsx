"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MediaBackground from "./ui/MediaBackground";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden bg-forest"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 h-[130%]">
        <MediaBackground
          src="/media/hero-forest.mp4"
          fallbackLabel="hero-forest.mp4"
          overlay="dark"
        />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col justify-between px-5 pb-8 pt-24 text-paper md:px-10 md:pb-14 md:pt-28">
        <motion.div
          className="flex items-center justify-between font-body text-[11px] tracking-[0.2em] md:text-xs"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
        >
          <span className="opacity-0 md:opacity-100">FORESTS TO STREETS</span>
          <span className="opacity-0 md:opacity-100">SUBOTICA, SERBIA</span>
        </motion.div>

        <motion.div
          style={{ scale, opacity, y }}
          className="flex flex-1 flex-col items-center justify-center text-center"
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ x: "-110%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-clamp-xl font-medium leading-[0.9] tracking-tight"
            >
              CREATE
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ x: "110%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-clamp-xl font-medium leading-[0.9] tracking-tight"
            >
              PEACE.
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8, ease: "easeOut" }}
            className="mt-6 flex flex-col items-center gap-2 md:mt-8"
          >
            <p className="font-display text-lg tracking-[0.05em] md:text-2xl">
              FORESTS <span className="text-rust">→</span> STREETS
            </p>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-paper/70 md:text-sm">
              Subotica, Serbia
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex flex-col items-center gap-2 self-center"
        >
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-paper/70">
            Scroll to explore
          </span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-lg"
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
