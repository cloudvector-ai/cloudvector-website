"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">
            CloudVector<span className="text-accent"> AI</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/services" className="hover:text-primary transition">Services</Link>
          <Link href="/products" className="hover:text-primary transition">Products</Link>
          <Link href="/industries" className="hover:text-primary transition">Industries</Link>
          <Link href="/resources" className="hover:text-primary transition">Resources</Link>
          <Link href="/about" className="hover:text-primary transition">About</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-white transition"
          >
            Request Demo
          </Link>
          <Link
            href="/contact#assessment"
            className="px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-secondary transition"
          >
            Book Assessment
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
          <Link href="/industries" onClick={() => setOpen(false)}>Industries</Link>
          <Link href="/resources" onClick={() => setOpen(false)}>Resources</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
