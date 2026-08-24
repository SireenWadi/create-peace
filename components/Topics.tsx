"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { topics } from "@/lib/data";
import TopicCard from "./TopicCard";
import SectionLabel from "./ui/SectionLabel";

export default function Topics() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Move the track from 0 to -(scrollable width). We approximate scrollable
  // width with a generous vw value tuned to the card widths/gaps below.
  const x = useTransform(scrollYProgress, [0, 1], ["2vw", "-160vw"]);

  return (
    <section
      ref={containerRef}
      className="relative bg-paper"
      style={{ height: "400vh" }}
    >
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="mb-6 px-5 md:mb-10 md:px-10">
          <SectionLabel>02 / The big topics</SectionLabel>
          <h2 className="mt-2 font-display text-clamp-md font-medium leading-none tracking-tight">
            THINGS WE
            <br className="md:hidden" /> SAT WITH.
          </h2>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex items-center gap-5 pl-5 md:gap-8 md:pl-10"
        >
          {topics.map((t) => (
            <TopicCard key={t.index} topic={t} />
          ))}
          <div className="w-[4vw] shrink-0" aria-hidden />
        </motion.div>

        <div className="pointer-events-none absolute bottom-6 left-0 right-0 flex justify-center gap-2 md:bottom-10">
          {topics.map((t) => (
            <span
              key={t.index}
              className="h-[3px] w-6 rounded-full bg-ink/15 md:w-10"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
