"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type AccordionItemProps = {
  title: string;
  recommended?: string;
  notes: string[];
};

export function AccordionItem({
  title,
  recommended,
  notes,
}: AccordionItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-foreground/10 bg-background/40 backdrop-blur-sm overflow-hidden">
      <button
        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left hover:bg-foreground/5 transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="min-w-0">
          <div className="font-medium leading-tight">{title}</div>
          {recommended ? (
            <div className="mt-1 text-xs text-foreground/60">
              권장: {recommended}
            </div>
          ) : null}
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          ▾
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="px-5 pb-4 pt-1 list-disc marker:text-foreground/50 space-y-1 text-sm">
              {notes.map((n, i) => (
                <li key={i} className="pl-2 text-foreground/80">
                  {n}
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

type AccordionProps = {
  items: { title: string; recommended?: string; notes: string[] }[];
};

export default function Accordion({ items }: AccordionProps) {
  return (
    <div className="grid gap-3">
      {items.map((it, idx) => (
        <AccordionItem
          key={idx}
          title={it.title}
          recommended={it.recommended}
          notes={it.notes}
        />
      ))}
    </div>
  );
}
