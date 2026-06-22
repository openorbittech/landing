"use client";

export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-8 border-t border-slate-900/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-slate-500">
      <span>© 2026 OpenOrbit. All rights reserved.</span>
      <div className="flex items-center gap-6">
        <a href="/portfolio" className="hover:text-green-600 transition-colors">Portfolio</a>
        <a href="/" className="hover:text-green-600 transition-colors">Home</a>
      </div>
    </footer>
  );
}
