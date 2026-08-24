"use client";

import { motion } from "framer-motion";

export default function SectionLabel({
  children,
  light = false,
  className = "",
}: {
  children: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`font-body text-xs md:text-sm tracking-[0.25em] uppercase ${
        light ? "text-paper/70" : "text-ink/50"
      } ${className}`}
    >
      {children}
    </motion.p>
  );
}
