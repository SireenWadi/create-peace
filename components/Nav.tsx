"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const sections = ["01", "02", "03", "04", "05"];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const lightBand =
        (y > vh * 2.3 && y < vh * 3.6) || (y > vh * 5.7 && y < vh * 6.6);
      setDark(!lightBand);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-rust"
        style={{ scaleX: progress }}
      />
      <header
        className={`fixed top-0 z-50 flex w-full items-center justify-between px-5 py-5 md:px-10 md:py-7 transition-colors duration-500 ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {/* الشعار على الطرف الأيسر بحجم فخم وواضح */}
        <a
          href="#hero"
          className="flex items-center focus:outline-none"
        >
          <img 
            src="/media/great-piece.png" 
            alt="Great Piece Logo" 
            className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" 
          />
        </a>

        <nav className="hidden items-center gap-4 font-body text-xs tracking-[0.2em] md:flex">
          {sections.map((s) => (
            <span key={s} className="opacity-50">
              {s}
            </span>
          ))}
        </nav>

        <span className="font-body text-[11px] tracking-[0.2em] md:text-xs">
          18—26 AUG 2026
        </span>
      </header>
    </>
  );
}