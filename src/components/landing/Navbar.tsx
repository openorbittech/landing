"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#services", label: "Services" },
  // { href: "#process", label: "Process" },
  { href: "/#work", label: "Work" },
  // { href: "/#testimonials", label: "Testimonials" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(11, 15, 28, 0)", "rgba(11, 15, 28, 0.8)"]
  );

  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(20px)"]
  );

  const borderBottomColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(79, 109, 255, 0)", "rgba(79, 109, 255, 0.15)"]
  );

  const padding = useTransform(scrollY, [0, 50], ["1.5rem 0", "1rem 0"]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        style={{
          backgroundColor,
          backdropFilter,
          WebkitBackdropFilter: backdropFilter,
          borderBottom: "1px solid",
          borderBottomColor,
          padding,
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
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
              <motion.div
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
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-sm font-[family-name:var(--font-dm-sans)]"
            >
              Start Project
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle Mobile Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 glass-strong pt-24 md:hidden"
          >
            <div className="flex flex-col items-center gap-8 py-12">
              {navLinks.map((link, index) => (
                <motion.div
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
                </motion.div>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary mt-4"
              >
                Start Project
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
