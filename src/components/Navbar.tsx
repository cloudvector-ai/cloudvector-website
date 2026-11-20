"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-slate-300 text-xs font-semibold tracking-tight text-primary">CV</span>
          <span className="text-[17px] font-medium tracking-[-0.03em] text-slate-900">CloudVector<span className="ml-1 font-normal text-slate-500">AI</span></span>
        </Link>

        <nav className="hidden items-center gap-8 text-[13px] font-medium text-slate-600 lg:flex">
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/products" className="nav-link">Products</Link>
          <Link href="/industries" className="nav-link">Industries</Link>
          <Link href="/resources" className="nav-link">Resources</Link>
          <Link href="/about" className="nav-link">About</Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="px-3 py-2.5 text-[13px] font-medium text-slate-600 transition hover:text-primary"
          >
            Request Demo
          </Link>
          <Link
            href="/contact#assessment"
            className="border border-slate-900 bg-slate-900 px-5 py-3 text-[13px] font-medium text-white transition hover:border-primary hover:bg-primary"
          >
            Book Assessment
          </Link>
        </div>

        <button className="grid h-10 w-10 place-items-center rounded-lg text-slate-700 lg:hidden" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-6 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4 text-sm font-semibold text-slate-700">
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
            <Link href="/industries" onClick={() => setOpen(false)}>Industries</Link>
            <Link href="/resources" onClick={() => setOpen(false)}>Resources</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
