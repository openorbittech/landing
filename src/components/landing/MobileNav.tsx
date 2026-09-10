"use client";

import logoAsset from "../../assets/Logo.svg";
import { Menu, X } from "lucide-react";

const logoSrc = typeof logoAsset === "string" ? logoAsset : logoAsset.src;

export interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  ctaLink?: NavLink;
}

export function MobileHeader({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <header
      className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 z-50 lg:hidden"
      style={{
        background: "rgba(255, 255, 255, 0.82)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
      }}
    >
      <a href="/" className="flex items-center">
        <img src={logoSrc} alt="OpenOrbit" className="h-6 w-auto" />
      </a>
      <button
        onClick={onToggle}
        className="p-2 -mr-2 text-slate-600 focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

export function MobileMenuDrawer({
  isOpen,
  links,
  ctaLink = { href: "#contact", label: "Start a project" },
}: MobileNavProps) {
  return (
    <div
      className={`fixed inset-0 z-40 lg:hidden flex flex-col justify-between px-6 pt-24 pb-12 overflow-y-auto transition-all duration-300 ease-out ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
      style={{
        background: "rgba(244, 253, 247, 0.98)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="flex flex-col items-center gap-7 my-auto">
        {links.map((link, idx) => (
          <a
            key={link.href + link.label}
            href={link.href}
            className={`text-2xl font-semibold text-slate-900 hover:text-green-600 transition-all duration-300 ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
            style={{
              transitionDelay: isOpen ? `${(idx + 1) * 40}ms` : "0ms",
            }}
          >
            {link.label}
          </a>
        ))}
        {ctaLink && (
          <a
            href={ctaLink.href}
            className={`mt-4 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-green-500 text-white text-base font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg shadow-green-500/20 ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
            style={{
              transitionDelay: isOpen ? `${(links.length + 1) * 40}ms` : "0ms",
            }}
          >
            {ctaLink.label}
          </a>
        )}
      </div>
    </div>
  );
}
