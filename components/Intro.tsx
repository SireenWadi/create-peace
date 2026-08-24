"use client";

import { motion } from "framer-motion";
import MediaBackground from "./ui/MediaBackground";
import SectionLabel from "./ui/SectionLabel";

export default function Intro() {
  return (
    <section className="relative flex h-[100svh] w-full items-center overflow-hidden bg-forest">
      <MediaBackground
        src="/media/intro-community.mp4"
        fallbackLabel="intro-community.mp4"
        overlay="darker"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 text-center text-paper md:px-10">
        <SectionLabel light>01 / What we explored</SectionLabel>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-clamp-md font-medium leading-[1.05] tracking-tight"
        >
          What happens when climate, peace, art and people meet?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-xl font-body text-sm text-paper/75 md:text-base"
        >
          For eight days, we explored ideas, emotions and creative ways to
          look at the world around us — and imagine how we could change it.
        </motion.p>
      </div>
    </section>
  );
}
