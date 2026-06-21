"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero section - OpenOrbit Software Development"
      className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 pt-32 pb-16 z-10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto flex flex-col items-center"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-[11px] font-mono text-blue-600 mb-8 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          FOUNDER-LED TECHNICAL STUDIO
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6 text-gray-900">
          Turning Ideas<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-500 to-green-600 drop-shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            Into Systems.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Founder-led technical studio delivering elite software solutions with
          senior-level expertise and zero agency overhead. From concept to
          deployment, we build digital infrastructure that scales.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="moving-border-btn rounded-full px-8 py-3.5 text-[15px] font-semibold text-gray-900 transition-transform hover:scale-105 w-full sm:w-auto shadow-sm inline-block text-center"
          >
            Start Your Project
          </a>
          <a
            href="#services"
            className="rounded-full px-8 py-3.5 text-[15px] font-semibold text-gray-800 glass-panel hover:bg-gray-50 transition-all w-full sm:w-auto border border-black/10 inline-block text-center"
          >
            Explore Services
          </a>
        </div>
      </motion.div>
    </section>
  );
}
