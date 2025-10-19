"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Accordion from "@/components/Accordion";
import { f1SetupSections } from "@/data/f1Setup";
import { useEffect, useRef } from "react";
import { animate } from "animejs";

export default function Home() {
  return (
    <main>
      <Hero />
      {f1SetupSections.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          title={section.title}
          subtitle={section.subtitle}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {section.items.map((item) => (
              <Card key={item.key}>
                <Accordion
                  items={[
                    {
                      title: item.title,
                      recommended: item.recommended,
                      notes: item.notes,
                    },
                  ]}
                />
              </Card>
            ))}
          </div>
        </Section>
      ))}
      <FooterCTA />
    </main>
  );
}

function Hero() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    if (!titleRef.current) return;
    const animation = animate(titleRef.current, {
      backgroundPositionX: ["0%", "100%"],
      easing: "linear",
      duration: 6000,
      direction: "alternate",
      loop: true,
    });
    return () => {
      animation.pause();
    };
  }, []);
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-4 text-4xl md:text-6xl font-semibold tracking-tight gradient-text bg-[length:200%_100%]"
          ref={titleRef}
        >
          F1 25 setting guide
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-foreground/70"
        >
          트랙/컨디션에 맞춰 빠르게 최적 세팅을 찾을 수 있도록, 각 항목의 권장
          범위와 효과를 요약.
        </motion.p>
      </div>
      <BackgroundOrbs />
    </section>
  );
}

function BackgroundOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <motion.div
        className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_60%)] blur-3xl"
        animate={{ x: [0, 20, -10, 0], y: [0, -10, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.35),transparent_60%)] blur-3xl"
        animate={{ x: [0, -15, 10, 0], y: [0, 12, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

function FooterCTA() {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <Card className="text-center">
          <div className="text-lg md:text-xl">
            트랙별 프리셋과 날씨 필터 등, 다양한 정보 추가 예정
          </div>
          <div className="mt-2 text-foreground/60 text-sm">피드백 환영</div>
        </Card>
      </div>
    </section>
  );
}
