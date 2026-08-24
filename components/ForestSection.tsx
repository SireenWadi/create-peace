"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MediaBackground from "./ui/MediaBackground";

const emotions = ["GRIEF", "HOPE", "ANGER", "CONNECTION"];

export default function ForestSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);

  // text bands
  const line1Opacity = useTransform(scrollYProgress, [0, 0.08, 0.2, 0.28], [0, 1, 1, 0]);
  const line2Opacity = useTransform(scrollYProgress, [0.28, 0.36, 0.48, 0.56], [0, 1, 1, 0]);
  const paraOpacity = useTransform(scrollYProgress, [0.56, 0.64, 0.8, 0.88], [0, 1, 1, 0]);
  const emotionsOpacity = useTransform(scrollYProgress, [0.86, 0.93], [0, 1]);

  return (
    <section ref={ref} className="relative bg-black" style={{ height: "320vh" }}>
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <motion.div style={{ scale: bgScale }} className="absolute inset-0">
          <MediaBackground
            src="/media/forest-border.mp4"
            poster="/media/forest-border.jpg"
            fallbackLabel="forest-border.mp4 or forest-border.jpg"
            overlay="darker"
          />
        </motion.div>

        <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center text-paper">
          <motion.h2
            style={{ opacity: line1Opacity }}
            className="absolute font-display text-clamp-xl font-medium leading-[0.92]"
          >
            A BORDER
            <br />
            IS A LINE.
          </motion.h2>

          <motion.h2
            style={{ opacity: line2Opacity }}
            className="absolute font-display text-clamp-xl font-medium leading-[0.92]"
          >
            A FOREST
            <br />
            IS ALIVE.
          </motion.h2>

          <motion.p
            style={{ opacity: paraOpacity }}
            className="absolute mx-auto max-w-xl font-body text-base text-paper/85 md:text-xl"
          >
            During our field visit, we explored the forest near the
            Serbia–Hungary border and reflected on borders, separation,
            nature and our own emotions.
          </motion.p>

          <motion.div
            style={{ opacity: emotionsOpacity }}
            className="absolute flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-14"
          >
            {emotions.map((e, i) => (
              <motion.span
                key={e}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.9 }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-2xl tracking-wide md:text-4xl"
              >
                {e}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
