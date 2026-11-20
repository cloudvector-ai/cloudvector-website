import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-sm font-extrabold text-white">CV</span>
            <span className="text-lg font-bold text-white">CloudVector AI</span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
            AI-powered database modernization for Oracle estates moving to OCI and AWS.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Solutions</h3>
          <div className="space-y-3 text-sm">
            <Link className="footer-link" href="/services">Oracle to OCI</Link>
            <Link className="footer-link" href="/services">Oracle to AWS</Link>
            <Link className="footer-link" href="/products">VectorMigrate</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Company</h3>
          <div className="space-y-3 text-sm">
            <Link className="footer-link" href="/about">About</Link>
            <Link className="footer-link" href="/industries">Industries</Link>
            <Link className="footer-link" href="/resources">Resources</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Start a conversation</h3>
          <Link href="/contact#assessment" className="inline-flex rounded-lg bg-secondary px-5 py-3 text-sm font-bold text-white transition hover:bg-accent hover:text-slate-950">
            Book an assessment
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-slate-500 lg:px-8">
          © {new Date().getFullYear()} CloudVector AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
