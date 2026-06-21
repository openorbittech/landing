"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      aria-label="Contact Us - Start Your Project"
      className="w-full px-6 py-32 z-10 relative max-w-5xl mx-auto"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative glass-panel-strong rounded-[2rem] p-10 md:p-20 text-center overflow-hidden border border-black/5 shadow-lg"
      >
        {/* Ambient gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-br from-blue-400/20 via-emerald-400/10 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 text-gray-900">
            Ready to build
            <br />
            <span className="gradient-text">something great?</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-10 max-w-xl mx-auto">
            Let&apos;s discuss your project and explore how we can help you
            achieve your goals. Free consultation, NDA-protected.
          </p>
          <a
            href="mailto:hello@openorbit.io?subject=Project%20Inquiry"
            className="moving-border-btn rounded-full px-10 py-4 text-[15px] font-semibold text-gray-900 transition-transform hover:scale-105 inline-block shadow-sm"
          >
            Start Your Project →
          </a>

          <p className="mt-6 text-xs text-gray-500">
            Prefer to talk?{" "}
            <a
              href="mailto:hello@openorbit.io?subject=Schedule%20a%20Call"
              className="text-blue-600 underline underline-offset-4 hover:text-blue-700 transition-colors"
            >
              Schedule a call
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
