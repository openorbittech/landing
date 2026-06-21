"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: 1,
    title: "Technical Consultation",
    desc: "A deep dive into your goals, architecture needs, and business requirements. Completely free and NDA-protected to ensure secure alignment before any commitment.",
  },
  {
    step: 2,
    title: "Project Roadmap",
    desc: "Within 48 hours, we deliver a comprehensive blueprint detailing the proposed tech stack, timeline, sprint breakdown, and execution strategy.",
  },
  {
    step: 3,
    title: "Agile Engineering",
    desc: "Our senior-level engineers begin crafting the solution. You get continuous visibility through iterative sprint deliveries, ensuring constant momentum.",
  },
  {
    step: 4,
    title: "Deployment & Scaling",
    desc: "Seamless launch, rigorous QA, monitoring, and ongoing scaling optimization. We build systems designed to handle exponential business growth.",
  },
];

function ProcessStep({
  step,
  title,
  desc,
  index,
  total,
}: {
  step: number;
  title: string;
  desc: string;
  index: number;
  total: number;
}) {
  const topOffset = 120 + index * 32;
  const isLast = index === total - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6 }}
      className="sticky w-full glass-panel rounded-[2rem] p-8 md:p-14 border border-black/5 shadow-[0_-8px_40px_rgba(0,0,0,0.06)] overflow-hidden"
      style={{
        top: `${topOffset}px`,
        marginBottom: isLast ? "0" : "40vh",
      }}
    >
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
        <div className="flex-1 max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full border border-blue-500/20 text-blue-600 font-mono text-[10px] tracking-[0.2em] mb-6 bg-blue-500/5">
            PHASE 0{step}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-5">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed md:text-lg">{desc}</p>
        </div>
        <div className="hidden md:flex w-24 h-24 rounded-full border border-black/5 glass-panel items-center justify-center text-gray-300 text-3xl font-light shadow-sm">
          {step}
        </div>
      </div>
    </motion.div>
  );
}

export function Process() {
  return (
    <section id="process" className="w-full px-6 pt-32 pb-48 z-10 relative">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
          Our Process
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          A rigorous, founder-led methodology ensuring transparency, velocity,
          and enterprise-grade results at every step.
        </p>
      </div>

      {/* Sticky Cards */}
      <div className="max-w-4xl mx-auto relative">
        {steps.map((s, i) => (
          <ProcessStep
            key={i}
            index={i}
            step={s.step}
            title={s.title}
            desc={s.desc}
            total={steps.length}
          />
        ))}
      </div>
    </section>
  );
}
