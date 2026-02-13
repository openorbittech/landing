"use client";

import { useEffect, useState, useRef } from "react";
import { m, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <LazyMotion features={domAnimation}>
      <m.nav
        ref={navRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
            ? "bg-[#0B0F1C]/80 backdrop-blur-xl border-[#4F6DFF]/15 py-4"
            : "bg-transparent border-transparent py-6"
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <img
              src="/logod/openorbitlogo.svg"
              alt="OpenOrbit Logo"
              width="200"
              height="40"
              decoding="async"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <m.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <a
                  href={link.href}
                  className="relative text-sm font-medium text-[#A7B0C8] hover:text-white transition-colors group font-[family-name:var(--font-dm-sans)]"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4F6DFF] transition-all duration-300 group-hover:w-full" />
                </a>
              </m.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <m.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-sm font-[family-name:var(--font-dm-sans)]"
            >
              Start Project
            </m.a>
          </div>

          {/* Mobile Menu Button */}
          <m.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle Mobile Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </m.button>
        </div>
      </m.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 glass-strong pt-24 md:hidden"
          >
            <div className="flex flex-col items-center gap-8 py-12">
              {navLinks.map((link, index) => (
                <m.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold text-white hover:text-[#4F6DFF] transition-colors"
                  >
                    {link.label}
                  </a>
                </m.div>
              ))}
              <m.a
                href="#contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary mt-4"
              >
                Start Project
              </m.a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
