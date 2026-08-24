"use client";

import { motion } from "framer-motion";
import { trainers } from "@/lib/data";
import MediaBackground from "./ui/MediaBackground";
import RevealText from "./ui/RevealText";

export default function ThankYou() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-forest px-5 py-16 text-paper md:px-10 md:py-20">
      <MediaBackground
        src="/media/final-group.mp4"
        poster="/media/final-group.jpg"
        fallbackLabel="final-group.mp4 or final-group.jpg"
        overlay="darker"
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-6 text-center">
        <RevealText
          as="h2"
          className="font-display text-clamp-xl font-medium leading-[0.9] tracking-tight"
        >
          THANK YOU.
        </RevealText>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-md font-body text-sm text-paper/80 md:text-base"
        >
          To the people who guided us, challenged us, listened to us, and
          helped us create this space.
        </motion.p>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-2xl">
        <p className="text-center font-body text-[11px] uppercase tracking-[0.3em] text-paper/60">
          Our trainers &amp; facilitators
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name + i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-lg tracking-tight md:text-xl">
                {t.name}
              </p>
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-paper/50">
                {t.role}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center font-body text-xs tracking-[0.15em] text-paper/50">
          Create Peace — Forests to Streets
          <br />
          Subotica · 18—26 August 2026
        </p>
      </div>
    </section>
  );
}
