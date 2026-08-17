"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "../../assets/Logo.svg";

const logoSrc = typeof logoAsset === "string" ? logoAsset : logoAsset.src;

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#why", label: "Why us" },
  { href: "#contact", label: "Contact Us" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a[href^="#"]')) {
        const href = target.closest('a[href^="#"]')?.getAttribute("href") || "";
        if (!href.startsWith("#")) return;
        e.preventDefault();
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) {
          const main = document.getElementById("main-scroll");
          if (main) {
            const rect = el.getBoundingClientRect();
            const mainRect = main.getBoundingClientRect();
            const offset = rect.top - mainRect.top + main.scrollTop;
            main.scrollTo({ top: offset, behavior: "smooth" });
          } else {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
        setMobileOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <nav
        className="desktop-nav fixed top-0 left-0 right-0 h-[72px] flex items-center justify-between px-8 z-50"
        style={{
          background: "rgba(244, 253, 247, 0.72)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(15, 23, 42, 0.06)",
        }}
        aria-label="Primary navigation"
      >
        <a href="/" className="flex items-center">
          <img src={logoSrc} alt="OpenOrbit" className="h-7 w-auto" />
        </a>
        <div className="flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-[13px] font-medium tracking-wide text-slate-900 no-underline relative transition-colors duration-200"
              style={{ letterSpacing: "0.02em" }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 px-[18px] py-2.5 rounded-full bg-green-500 text-white text-[13px] font-semibold no-underline transition-all duration-200 hover:bg-green-600 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(34,197,94,0.25)]"
        >
          Start a project
        </a>
      </nav>

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
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 -mr-2 text-slate-600"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{
            background: "rgba(244, 253, 247, 0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div className="flex flex-col items-center gap-8 pt-28">
            {[...navLinks, { href: "#contact", label: "Contact" }].map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl font-semibold text-slate-900 hover:text-green-600 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-green-500 text-white text-sm font-semibold"
            >
              Start a project
            </a>
          </div>
        </div>
      )}
    </>
  );
}
