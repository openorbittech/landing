"use client";

import { useEffect, useRef } from "react";

const stats = [
  { num: "6", label: "Years in software development" },
  { num: "100+", label: "Clients served" },
  { num: "1000+", label: "Systems built" },
  { num: "48h", label: "Project roadmap delivery" },
];

const reasons = [
  { title: "Founder-led", desc: "Every project is directly shaped by senior engineers who have shipped products end to end." },
  { title: "Autonomous teams", desc: "We embed, decide, and execute with minimal ramp-up. No hand-holding required." },
  { title: "Production-grade", desc: "Clean architecture, tested code, and observability from day one." },
];

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((r) => r.classList.add("visible"));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why"
      ref={ref}
      className="snap-section px-6 md:px-12 lg:px-20 py-24 border-b border-slate-900/5"
    >
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow mb-6 reveal">By the numbers</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-16 max-w-2xl reveal stagger-1">
          Senior execution, without the agency overhead.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {stats.map((s, i) => (
            <div key={s.label} className={`reveal stagger-${i + 1}`}>
              <div className="stat-num">{s.num}</div>
              <p className="text-sm text-slate-500 mt-3 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div key={r.title} className={`glass-panel p-6 rounded-2xl reveal stagger-${i + 1}`}>
              <h3 className="font-semibold text-slate-900 mb-2">{r.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
