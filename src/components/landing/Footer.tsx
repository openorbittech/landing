"use client";

import { Twitter, Linkedin, Github, Instagram, Mail } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "https://x.com/openorbittech", label: "Twitter" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/openorbit-tech",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/openorbittech", label: "GitHub" },
  {
    icon: Instagram,
    href: "https://instagram.com/openorbit.tech",
    label: "Instagram",
  },
];

export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-8 border-t border-slate-900/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-slate-500">
      <span>© 2026 OpenOrbit. All rights reserved.</span>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <a
          href="mailto:contact@openorbit.tech"
          className="inline-flex items-center gap-2 hover:text-green-600 transition-colors"
        >
          <Mail className="w-4 h-4" />
          contact@openorbit.tech
        </a>
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="hover:text-green-600 transition-colors"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-6">
        <a href="/portfolio" className="hover:text-green-600 transition-colors">Portfolio</a>
        <a href="/" className="hover:text-green-600 transition-colors">Home</a>
      </div>
    </footer>
  );
}
