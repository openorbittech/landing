"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "/portfolio", label: "Selected Work" },
];

const OpenOrbitLogo = () => (
  <svg className="h-5 w-auto text-emerald-600" viewBox="0 0 152 139" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.6384 123.308C6.42372 114.967 11.4958 107.65 16.4741 100.286C16.8059 100.468 17.1347 100.649 17.4604 100.831C16.5492 102.756 15.4598 104.626 14.7553 106.617C13.3934 110.496 11.8434 114.366 11.1108 118.377C10.4345 122.115 12.8672 124.407 16.7089 124.538C21.8562 124.717 26.2239 122.331 30.5821 120.058C46.3246 111.858 60.2542 101.019 74.0053 89.9352C88.583 78.1847 101.602 64.828 113.944 50.7669C121.627 42.0128 129.273 33.2305 135.134 23.105C136.487 20.7661 137.492 18.1549 138.234 15.5531C139.408 11.4672 137.294 8.84661 133.133 9.61683C129.564 10.2837 126.164 11.8711 122.689 13.064C121.956 13.3082 121.242 13.6276 120.509 13.9094C120.365 13.6651 120.218 13.4241 120.068 13.1861C122.623 11.176 125.065 8.9969 127.751 7.19347C132.307 4.1314 137.125 1.55775 142.573 0.411824C145.41 -0.189319 148.237 -0.489891 150.332 2.12132C152.398 4.69497 152.098 7.64432 150.867 10.3401C148.237 16.0603 145.476 21.743 142.47 27.2848C140.366 31.1828 137.68 34.7709 135.444 38.6032C134.946 39.4391 134.984 40.7917 135.219 41.8155C136.966 49.5646 139.605 57.201 140.488 65.0347C142.705 84.7691 138.525 103.17 124.483 117.794C109.708 133.17 91.1097 138.496 70.0415 135.04C63.6544 133.997 57.6149 132.006 52.1013 128.568C51.7914 128.371 51.5282 128.108 50.9458 127.657C52.0917 127.028 52.9936 126.502 53.9235 126.032C59.268 123.299 64.6031 120.528 70.0039 117.907C70.8775 117.484 72.1268 117.466 73.113 117.682C90.8467 121.608 109.003 113.408 117.335 97.4494C121.918 88.6765 123.243 79.1991 122.313 69.4399C121.937 65.448 120.932 61.5124 120.106 56.9474C118.95 57.7552 118.443 58.037 118.02 58.4127C106.223 69.1394 94.5383 79.9787 82.6187 90.5645C64.3684 106.786 44.9344 121.439 23.5187 133.274C19.151 135.688 14.154 137.022 9.3824 138.656C8.11437 139.097 6.58337 138.975 5.19323 138.844C1.71787 138.515 -0.404879 136.336 0.0647638 132.898C0.496835 129.704 1.7085 126.614 2.6384 123.308Z" />
    <path d="M30.7708 38.1159C38.9614 26.1776 50.1952 18.9357 63.8524 15.1316C82.0182 10.0688 99.0758 13.3094 115.438 21.9132C115.682 22.0353 115.842 22.3359 116.208 22.7398C112.602 24.4963 109.117 26.1212 105.698 27.8871C103.002 29.2772 100.419 30.8928 97.7231 32.2829C97.075 32.6117 96.0887 32.6305 95.3655 32.4144C86.6301 29.8784 77.7914 29.0424 69.0185 31.8227C54.1026 36.5473 44.3998 46.4662 40.6427 61.7859C38.3602 71.0754 38.6232 80.4213 41.3284 89.6076C42.1549 92.4066 43.47 95.1305 44.9259 97.676C45.7713 99.1507 45.5364 99.7518 44.1932 100.353C40.1449 102.175 36.0685 103.96 32.0483 105.857C30.7051 106.487 29.9162 106.054 29.0521 105.031C25.99 101.405 24.5058 97.0091 23.3035 92.5851C19.0392 76.9084 19.6873 61.4572 26.1214 46.4286C27.3424 43.5825 29.127 40.9713 30.7708 38.1159Z" />
  </svg>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 transition-all duration-500 ${
          scrolled
            ? "glass-panel-strong shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <OpenOrbitLogo />
          <span className="font-semibold tracking-wide text-[15px] text-gray-900">
            OpenOrbit
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-[13px] text-gray-500 font-medium tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="moving-border-btn rounded-full px-5 py-2 text-[13px] font-medium text-gray-900 transition-transform hover:scale-105 shadow-sm inline-block"
          >
            Start Project
          </a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-900"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 glass-panel-strong pt-24 md:hidden"
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
                    className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => setMobileMenuOpen(false)}
                className="moving-border-btn rounded-full px-8 py-3 text-[15px] font-semibold text-gray-900 mt-4"
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
