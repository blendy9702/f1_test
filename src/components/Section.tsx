"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id?: string;
  title: string;
  subtitle?: string;
}>;

export default function Section({
  id,
  title,
  subtitle,
  children,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto w-full max-w-5xl px-4 py-8 md:py-12"
    >
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold gradient-text">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-1 text-sm md:text-base text-foreground/70">
            {subtitle}
          </p>
        ) : null}
      </div>
      {children}
    </motion.section>
  );
}
