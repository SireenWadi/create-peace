"use client";

import { motion } from "framer-motion";

type Props = {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  splitBy?: "words" | "chars";
};

export default function RevealText({
  children,
  as = "div",
  className = "",
  delay = 0,
  stagger = 0.045,
  once = true,
  splitBy = "words",
}: Props) {
  const Tag = motion[as as "div"];
  const pieces =
    splitBy === "words" ? children.split(" ") : children.split("");

  return (
    <Tag className={className} aria-label={children}>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true" className="inline-block">
        {pieces.map((piece, i) => (
          <span key={i} className="inline-block overflow-hidden align-top">
            <motion.span
              className="inline-block"
              initial={{ y: "110%", rotate: 4 }}
              whileInView={{ y: "0%", rotate: 0 }}
              viewport={{ once, amount: 0.6 }}
              transition={{
                duration: 0.9,
                delay: delay + i * stagger,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {piece === "" ? "\u00A0" : piece}
              {splitBy === "words" ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
