"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    title: "Web & Mobile Dev",
    desc: "React, Next.js, React Native. Fast, responsive, and scalable interfaces.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-green-600">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    title: "AI & Automation",
    desc: "Machine Learning, LLM agents, and custom workflow automation.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-green-600">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 2a10 10 0 0 1 10 10"/><path d="M12 12l7-7"/>
      </svg>
    ),
  },
  {
    title: "Cloud & Data",
    desc: "AWS, Kubernetes, Data Pipelines. Robust infrastructure for growth.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-green-600">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
  },
  {
    title: "Web3 & Blockchain",
    desc: "Smart Contracts, dApps, DeFi. Secure and decentralized systems.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-green-600">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
];

export function Services() {
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
      id="services"
      ref={ref}
      className="snap-section px-6 md:px-12 lg:px-20 py-24 border-b border-slate-900/5"
    >
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow mb-6 reveal">Services</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-16 max-w-2xl reveal stagger-1">
          End-to-end solutions, built to ship.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`glass-panel p-8 rounded-2xl reveal stagger-${i + 1} ${i % 2 === 0 ? "float-card" : "float-card-delayed"} hover:bg-green-50/60 transition-colors`}
            >
              <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center mb-5">
                {s.icon}
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
