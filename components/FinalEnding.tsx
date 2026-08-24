"use client";

import { motion } from "framer-motion";

export default function FinalEnding() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-5 py-20 text-white md:px-10 overflow-hidden">
      {/* خلفية الصورة */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/media/ending-bg.jpg')` }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* النصوص فقط بدون شعارات */}
      <div className="relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-7xl font-bold tracking-tight text-white drop-shadow-md"
        >
          THE TRAINING ENDS.
          <br />
          <span className="text-emerald-400">THE STORY DOESN’T.</span>
        </motion.h2>

        <p className="mt-6 font-body text-xs uppercase tracking-[0.2em] text-white/80">
          FORESTS → STREETS
          <br />
          CREATE PEACE · 2026
        </p>
      </div>
    </section>
  );
}