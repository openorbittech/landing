"use client";

import { useEffect, useRef } from "react";

const projects = [
  { name: "MentIQ", tag: "Predictive retention SaaS", desc: "Churn-risk accounts surfaced weeks earlier." },
  { name: "Athleon", tag: "Sports performance platform", desc: "Injury-risk signals delivered in real time." },
  { name: "Axton Protocol", tag: "DeFi OTC infrastructure", desc: "Settlement transparency without slippage." },
];

export function Work() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-scale").forEach((r) => r.classList.add("visible"));
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
      id="work"
      ref={ref}
      className="snap-section px-6 md:px-12 lg:px-20 py-24 border-b border-slate-900/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <p className="eyebrow mb-6 reveal">Selected Work</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl reveal stagger-1">
              Dynamic solutions built for scale.
            </h2>
          </div>
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-900/10 text-slate-900 text-sm font-semibold hover:bg-green-50 transition-all reveal stagger-2"
          >
            View full portfolio
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="video-wrap aspect-video reveal-scale">
            <video src="https://www.w3schools.com/html/mov_bbb.mp4" autoPlay muted loop playsInline />
          </div>
          <div className="video-wrap aspect-video reveal-scale stagger-2">
            <video src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" autoPlay muted loop playsInline />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className={`glass-panel p-6 rounded-2xl reveal stagger-${i + 1} hover:bg-green-50/60 transition-colors`}
            >
              <p className="text-[11px] text-green-700 uppercase tracking-wider mb-2">{p.name}</p>
              <p className="font-semibold text-slate-900 mb-1">{p.tag}</p>
              <p className="text-sm text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
