"use client";

import { motion } from "framer-motion";
import type { Topic } from "@/lib/data";
import ImageFrame from "./ui/ImageFrame";

export default function TopicCard({ topic }: { topic: Topic }) {
  return (
    <div className="group relative h-[68vh] w-[86vw] shrink-0 overflow-hidden rounded-[2px] bg-ink md:h-[74vh] md:w-[62vw] lg:w-[52vw]">
      {/* base image */}
      <ImageFrame
        src={topic.image}
        alt={`${topic.title.join(" ")} illustration`}
        className="absolute inset-0 h-full w-full"
        imgClassName="scale-110 transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100"
      />

      {/* atmospheric cloud layers — independent drift speeds for parallax */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-x-10 top-[-10%] h-[60%] opacity-70 blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 30% 40%, rgba(255,255,255,0.55), transparent 65%), radial-gradient(ellipse 40% 80% at 70% 30%, rgba(255,255,255,0.35), transparent 60%)",
        }}
        animate={{ x: ["-4%", "4%", "-4%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-x-16 top-[5%] h-[45%] opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse 50% 70% at 60% 50%, rgba(255,255,255,0.5), transparent 70%)",
        }}
        animate={{ x: ["3%", "-3%", "3%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30" />

      {/* content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6 text-paper md:p-10">
        <div className="flex items-start justify-between">
          <span className="font-display text-sm tracking-[0.2em] opacity-70">
            {topic.index}
          </span>
          {topic.tags && (
            <div className="flex flex-wrap justify-end gap-x-3 gap-y-1 opacity-70">
              {topic.tags.map((t, i) => (
                <motion.span
                  key={t}
                  className="font-body text-[10px] uppercase tracking-[0.2em]"
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          )}
        </div>

        <div>
          <h3 className="font-display text-clamp-lg font-medium leading-[0.92] tracking-tight">
            {topic.title[0]}
            {topic.title[1] && (
              <>
                <br />
                {topic.title[1]}
              </>
            )}
          </h3>
          <p className="mt-4 max-w-xs font-body text-sm text-paper/80 md:text-base">
            {topic.text}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 border border-paper/10" />
    </div>
  );
}
