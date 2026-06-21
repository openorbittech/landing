"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Athleon",
    category: "SaaS Platform",
    description:
      "End-to-end sports management platform with team analytics, scheduling, and real-time performance tracking.",
    video: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    color: "#3b82f6",
  },
  {
    title: "MentIQ",
    category: "AI Platform",
    description:
      "AI-powered mentorship matching and skill assessment platform connecting professionals with personalized growth paths.",
    video: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Next.js", "Python", "OpenAI", "GCP"],
    color: "#10b981",
  },
  {
    title: "Axton Protocol",
    category: "Web3 Infrastructure",
    description:
      "Decentralized identity and token gating infrastructure for enterprise-grade Web3 applications.",
    video: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    tags: ["Solidity", "React", "Ethereum", "IPFS"],
    color: "#8b5cf6",
  },
  {
    title: "Custom AI Solutions",
    category: "AI & Automation",
    description:
      "Bespoke AI and machine learning solutions engineered to automate workflows and uncover actionable insights.",
    video: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
    tags: ["TensorFlow", "FastAPI", "Docker", "K8s"],
    color: "#f59e0b",
  },
];

export function Work() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="work"
      aria-label="Our Portfolio - Selected Work"
      className="w-full px-6 py-32 z-10 relative max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-[11px] font-mono text-blue-600 mb-5 border border-blue-500/20">
          SELECTED WORK
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 text-gray-900">
          Projects that prove the process.
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          From seed-stage startups to enterprise platforms, we've shipped
          software that powers real businesses.
        </p>
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
        {/* Left: Project List */}
        <div className="flex flex-col gap-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`relative rounded-2xl p-6 cursor-pointer transition-all border ${
                active === i
                  ? "glass-panel-strong border-blue-500/20 shadow-sm"
                  : "bg-transparent border-transparent hover:bg-black/[0.02]"
              }`}
            >
              {/* Active Indicator */}
              {active === i && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-blue-500"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <div className="pl-4">
                <p className="text-[10px] font-mono text-gray-400 tracking-[0.2em] uppercase mb-1">
                  {p.category}
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {p.title}
                </h4>
                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {p.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-gray-100 text-gray-600"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <a
                        href="/portfolio"
                        className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        View Case Study
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Sticky Preview */}
        <div className="hidden lg:block sticky top-32 h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full rounded-3xl overflow-hidden relative glass-panel border border-black/5 shadow-xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                style={{ backgroundImage: `url(${projects[active].video})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p
                  className="text-sm font-medium mb-1"
                  style={{ color: projects[active].color }}
                >
                  {projects[active].category}
                </p>
                <h3 className="text-2xl font-bold text-white">
                  {projects[active].title}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* View All CTA */}
      <div className="text-center mt-16">
        <a
          href="/portfolio"
          className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[14px] font-semibold text-gray-800 glass-panel border border-black/10 hover:bg-gray-50 transition-all"
        >
          View All Projects
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
