"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-lg font-extrabold text-white shadow-lg shadow-blue-900/10">CV</span>
          <span className="text-xl font-bold tracking-tight text-slate-950">CloudVector<span className="text-secondary"> AI</span></span>
        </Link>

        <nav className="hidden items-center gap-7 text-[14px] font-semibold text-slate-600 lg:flex">
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/products" className="nav-link">Products</Link>
          <Link href="/industries" className="nav-link">Industries</Link>
          <Link href="/resources" className="nav-link">Resources</Link>
          <Link href="/about" className="nav-link">About</Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:text-primary"
          >
            Request Demo
          </Link>
          <Link
            href="/contact#assessment"
            className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-secondary"
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
