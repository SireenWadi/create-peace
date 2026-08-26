"use client";

import { motion } from "framer-motion";
import { takeaways } from "@/lib/data";
import ImageFrame from "./ui/ImageFrame";
import SectionLabel from "./ui/SectionLabel";

const photos = [
  "/media/memory-01.jpeg",
  "/media/memory-02.jpg",
  "/media/memory-03.jpg",
];

export default function Memories() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-ink py-24 md:py-0">
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3">
        {photos.map((src, i) => (
          <motion.div
            key={src}
            className="relative h-full w-full"
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <ImageFrame
              src={src}
              alt="Photo memory from the training"
              className="h-full min-h-[34vh] w-full md:min-h-full"
            />
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center gap-10 px-6 text-center text-paper md:gap-14">
        <SectionLabel light>06 / What we take with us</SectionLabel>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-10">
          {takeaways.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-2xl font-medium tracking-tight md:text-4xl"
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-md font-body text-sm text-paper/80 md:text-base"
        >
          Maybe we didn&rsquo;t leave with all the answers. But we left with
          better questions.
        </motion.p>
      </div>
    </section>
  );
}
