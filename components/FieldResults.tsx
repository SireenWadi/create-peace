"use client";

import { motion } from "framer-motion";
import { fieldResults } from "@/lib/data";
import Battery from "./ui/Battery";
import SectionLabel from "./ui/SectionLabel";

export default function FieldResults() {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:px-8 md:py-24 text-white">
      {/* خلفية الصورة واضحة بالكامل وبدون أي تعتيم أسود */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-100"
          style={{ backgroundImage: `url('/media/field-results-bg.jpg')` }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl">
        <SectionLabel className="text-emerald-400">04 / Field Data & Metrics</SectionLabel>
        
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="mt-2 font-display text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow-lg"
        >
          OFFICIAL FIELD RESULTS
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 rounded-2xl bg-black/40 p-6 md:p-8 backdrop-blur-sm border border-white/20 shadow-2xl"
        >
          {fieldResults.map((r) => (
            <Battery
              key={r.label}
              label={r.label}
              value={r.value}
              displayOverride={"display" in r ? (r as any).display : undefined}
              drain={"drain" in r ? (r as any).drain : false}
              overflow={"overflow" in r ? (r as any).overflow : false}
              note={"note" in r ? (r as any).note : undefined}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}