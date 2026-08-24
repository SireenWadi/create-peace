"use client";

import { motion } from "framer-motion";
import ImageFrame from "./ui/ImageFrame";
import SectionLabel from "./ui/SectionLabel";

const gallery = [
  { src: "/media/group-01.jpeg", rotate: -4, size: "w-[62vw] md:w-[26vw]", top: "mt-0" },
  { src: "/media/group-02.jpeg", rotate: 3, size: "w-[52vw] md:w-[20vw]", top: "mt-14 md:mt-24" },
  { src: "/media/group-03.jpeg", rotate: -2, size: "w-[68vw] md:w-[28vw]", top: "mt-4 md:mt-8" },
  { src: "/media/group-04.jpeg", rotate: 5, size: "w-[48vw] md:w-[18vw]", top: "mt-20 md:mt-32" },
  { src: "/media/group-05.jpg", rotate: -3, size: "w-[58vw] md:w-[24vw]", top: "mt-8 md:mt-16" },
];

export default function Artivism() {
  return (
    <section className="relative overflow-hidden bg-forest py-24 text-paper md:py-36">
      <div className="px-5 md:px-10">
        <SectionLabel light>03 / Artivism</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-2 font-display text-clamp-xl font-medium leading-[0.92] tracking-tight"
        >
          MAKE
          <br />
          SOMETHING.
          <br />
          <span className="text-rust">SAY SOMETHING.</span>
        </motion.h2>
      </div>

      <div className="no-scrollbar mt-16 flex gap-6 overflow-x-auto px-5 pb-8 md:mt-24 md:gap-10 md:px-10">
        {gallery.map((item, i) => (
          <motion.div
            key={item.src}
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: item.rotate }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ rotate: 0, scale: 1.04 }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`${item.size} ${item.top} shrink-0 origin-bottom`}
          >
            <ImageFrame
              src={item.src}
              alt="Artivism piece from the training — zine, meme or artwork"
              className="aspect-[3/4] w-full shadow-2xl"
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 px-5 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="max-w-md font-body text-sm text-paper/70 md:text-base"
        >
          Zines. Memes. Images. Performance. Stories. Different forms. One
          purpose: <span className="text-paper">to make people notice.</span>
        </motion.p>
      </div>
    </section>
  );
}
