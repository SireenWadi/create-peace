"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ImageFrame from "./ui/ImageFrame";
import SectionLabel from "./ui/SectionLabel";

const photos = [
  { src: "/media/group-00.jpeg", cls: "col-span-2 row-span-2" },
  { src: "/media/group-02.jpeg", cls: "" },
  { src: "/media/group-03.jpeg", cls: "" },
  { src: "/media/group-04.jpeg", cls: "" },
  { src: "/media/group-05.jpg", cls: "col-span-2" },
];

export default function Community() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const strangersOpacity = useTransform(scrollYProgress, [0.15, 0.32, 0.42], [1, 1, 0]);
  const communityOpacity = useTransform(scrollYProgress, [0.34, 0.46], [0, 1]);
  const communityScale = useTransform(scrollYProgress, [0.34, 0.5], [0.94, 1]);

  return (
    <section ref={ref} className="relative bg-black py-24 text-paper md:py-36">
      <div className="px-5 md:px-10">
        <SectionLabel light>05 / Community</SectionLabel>
      </div>

      <div className="relative mx-auto flex h-[40vh] w-full items-center justify-center px-5 md:h-[46vh]">
        <motion.h2
          style={{ opacity: strangersOpacity }}
          className="absolute font-display text-clamp-xl font-medium tracking-tight text-paper/40"
        >
          STRANGERS
        </motion.h2>
        <motion.h2
          style={{ opacity: communityOpacity, scale: communityScale }}
          className="absolute font-display text-clamp-xl font-medium tracking-tight"
        >
          COMMUNITY
        </motion.h2>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-lg px-6 text-center font-body text-sm text-paper/70 md:text-base"
      >
        Different stories. Different places. One temporary little community.
      </motion.p>

      <div className="mx-auto mt-16 grid max-w-4xl grid-cols-3 gap-3 px-5 md:mt-24 md:gap-4 md:px-10">
        {photos.map((p, i) => (
          <motion.div
            key={p.src}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className={`${p.cls} aspect-square`}
          >
            <ImageFrame
              src={p.src}
              alt="Participant portrait or group moment from the training"
              className="h-full w-full grayscale transition-all duration-500 hover:grayscale-0"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
