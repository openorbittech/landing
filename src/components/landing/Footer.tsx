"use client";

import { Twitter, Linkedin, Github, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/openorbit", label: "Twitter" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/openorbit",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/openorbit", label: "GitHub" },
  {
    icon: Instagram,
    href: "https://instagram.com/openorbit",
    label: "Instagram",
  },
];

export function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="w-full border-t border-black/5 py-10 px-6 z-10 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="font-semibold tracking-wide text-[14px] text-gray-900">
            OpenOrbit
          </span>
        </a>

        {/* Copyright */}
        <p className="text-xs text-gray-400 order-3 md:order-2">
          © {new Date().getFullYear()} OpenOrbit. All rights reserved.
        </p>

        {/* Social */}
        <div className="flex gap-4 order-2 md:order-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                className="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-500 hover:text-gray-900"
                aria-label={social.label}
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
