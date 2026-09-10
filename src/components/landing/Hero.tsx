"use client";

import { useEffect, useRef } from "react";

import { HeroMock } from "./HeroMock";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((r, i) => {
              setTimeout(() => r.classList.add("visible"), i * 100);
            });
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
      id="hero"
      ref={ref}
      className="snap-section relative lg:min-h-screen flex flex-col justify-start px-6 md:px-12 lg:px-20 pt-28 md:pt-32 lg:pt-36 pb-12 border-b border-slate-900/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-green-600 font-semibold mb-6 reveal">Elite Technical Studio</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8 reveal stagger-1">
            Turning ideas into <span className="text-green-500">functional systems</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-10 reveal stagger-2">
            Founder-led software solutions with senior-level expertise. We build web, mobile, and AI products with zero agency overhead. Fully autonomous, high-velocity delivery.
          </p>
          <div className="flex flex-wrap items-center gap-4 reveal stagger-3 mb-10">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-green-500/25"
            >
              View Our Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-900/10 text-slate-900 text-sm font-semibold hover:bg-green-50 transition-all"
            >
              Discuss Your Project
            </a>
          </div>

          <div className="flex items-center gap-4 reveal stagger-4">
            <div className="flex -space-x-2">
              <span className="w-9 h-9 rounded-full bg-slate-900 text-white font-mono text-xs font-medium border-2 border-white flex items-center justify-center">JD</span>
              <span className="w-9 h-9 rounded-full bg-green-600 text-white font-mono text-xs font-medium border-2 border-white flex items-center justify-center">AK</span>
              <span className="w-9 h-9 rounded-full bg-sky-500 text-white font-mono text-xs font-medium border-2 border-white flex items-center justify-center">MS</span>
              <span className="w-9 h-9 rounded-full bg-amber-500 text-white font-mono text-xs font-medium border-2 border-white flex items-center justify-center">+</span>
            </div>
            <p className="text-xs text-slate-500 leading-snug">
              <strong className="text-slate-900 font-semibold">100+ clients</strong> shipped with a 98% satisfaction rate
            </p>
          </div>
        </div>

        <HeroMock />
      </div>
    </section>
  );
}
