"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Zap, Clock, Shield } from "lucide-react";

const benefits = [
  { icon: Zap, text: "Free technical consultation" },
  { icon: Clock, text: "Project roadmap within 48 hours" },
  { icon: Shield, text: "NDA-protected discussions" },
];

export function CTA() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#070A12", "#0B0F1C", "#070A12"],
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use Formspree for static sites (replace FORMSPREE_ID with your actual ID)
      const response = await fetch("https://formspree.io/f/xvzbzrvz", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail("");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      ref={containerRef}
      id="contact"
      aria-label="Contact Us - Start Your Project"
      itemScope
      itemType="https://schema.org/ContactPage"
      style={{ backgroundColor }}
      className="relative py-32 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4F6DFF]/10 blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#FF6B6B]/10 blur-[100px]"
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(79, 109, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79, 109, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.8, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-sm font-medium text-[#A7B0C8] font-[family-name:var(--font-dm-sans)]">
                Limited spots for Q1 2026
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={{ y: 150, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-[family-name:var(--font-space-grotesk)]"
              >
                Ready to{" "}
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="inline-block gradient-text"
                >
                  Build
                </motion.span>
                <br />
                <motion.span
                  initial={{ x: 100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="inline-block"
                >
                  Something Amazing?
                </motion.span>
              </motion.h2>
            </div>

            {/* Subheading */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl text-[#A7B0C8] mb-12 max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-dm-sans)]"
            >
              Let&apos;s discuss your project and explore how we can help you
              achieve your goals.
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap justify-center gap-6 mb-12"
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.text}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass"
                  >
                    <Icon className="w-4 h-4 text-[#4F6DFF]" />
                    <span className="text-sm text-[#A7B0C8] font-[family-name:var(--font-dm-sans)]">
                      {benefit.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Form */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="max-w-xl mx-auto"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="relative">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col sm:flex-row gap-4 p-2 rounded-full glass"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-6 py-4 rounded-full bg-transparent text-white placeholder:text-[#A7B0C8]/50 focus:outline-none text-center sm:text-left"
                    />
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary flex items-center justify-center gap-2 disabled:opacity-70 whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Get Started
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </form>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-green-500/20 border border-green-500/40"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  <span className="text-green-400 font-medium font-[family-name:var(--font-dm-sans)]">
                    Thanks! We&apos;ll be in touch within 24 hours.
                  </span>
                </motion.div>
              )}
            </motion.div>

            {/* Alternative CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-8 text-sm text-[#A7B0C8] font-[family-name:var(--font-dm-sans)]"
            >
              Prefer to talk?{" "}
              <a
                // href="mailto:contact@openorbit.io?subject=Schedule a Call - Project Inquiry"
                href="https://calendly.com/openorbittech/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white underline underline-offset-4 hover:text-[#4F6DFF] transition-colors"
              >
                Schedule a call
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
