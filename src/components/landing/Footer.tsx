"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Instagram, ArrowUpRight, Mail } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Web Development", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "Cloud Solutions", href: "#services" },
    { label: "AI & Automation", href: "#services" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Process", href: "#process" },
    { label: "Work", href: "/portfolio" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/openorbit", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/openorbit", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/openorbit", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com/openorbit", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#070A12] border-t border-white/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4F6DFF] to-[#3D5AD8] flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-2xl font-bold tracking-tight font-[family-name:var(--font-space-grotesk)]">
                OpenOrbit
              </span>
            </a>
            <p className="text-[#A7B0C8] mb-6 max-w-sm leading-relaxed font-[family-name:var(--font-dm-sans)]">
              We build scalable software solutions that drive business growth. 
              From concept to deployment, we deliver excellence.
            </p>
            
            {/* Contact */}
            <div className="space-y-3">
              <motion.a
                href="mailto:hello@openorbit.io"
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-[#A7B0C8] hover:text-[#4F6DFF] transition-colors font-[family-name:var(--font-dm-sans)]"
              >
                <Mail className="w-4 h-4" />
                hello@openorbit.io
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#4F6DFF]/20 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-[#A7B0C8]" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#A7B0C8] hover:text-white transition-colors text-sm font-[family-name:var(--font-dm-sans)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#A7B0C8] hover:text-white transition-colors text-sm font-[family-name:var(--font-dm-sans)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#A7B0C8] hover:text-white transition-colors text-sm font-[family-name:var(--font-dm-sans)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-bold mb-1 font-[family-name:var(--font-space-grotesk)]">
                Stay Updated
              </h4>
              <p className="text-sm text-[#A7B0C8] font-[family-name:var(--font-dm-sans)]">
                Get the latest insights on software development and tech trends.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-full bg-[#0B0F1C] border border-white/10 text-white placeholder:text-[#A7B0C8]/50 focus:outline-none focus:border-[#4F6DFF] text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full bg-[#4F6DFF] text-white text-sm font-medium hover:bg-[#3D5AD8] transition-colors flex items-center gap-2 font-[family-name:var(--font-dm-sans)]"
              >
                Subscribe
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#A7B0C8] font-[family-name:var(--font-dm-sans)]">
            © {new Date().getFullYear()} OpenOrbit. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ y: -3 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-[#4F6DFF]/20 transition-colors z-40"
      >
        <ArrowUpRight className="w-5 h-5 text-white -rotate-45" />
      </motion.button>
    </footer>
  );
}
