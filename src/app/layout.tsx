import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-dark text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-white text-xl font-bold mb-4">
            CloudVector<span className="text-accent"> AI</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Autonomous Database Migration & Cloud Modernization for the enterprise.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-accent">Oracle to OCI</Link></li>
            <li><Link href="/services" className="hover:text-accent">Oracle to AWS</Link></li>
            <li><Link href="/products" className="hover:text-accent">VectorMigrate™</Link></li>
            <li><Link href="/services" className="hover:text-accent">Cloud Assessments</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link href="/industries" className="hover:text-accent">Industries</Link></li>
            <li><Link href="/resources" className="hover:text-accent">Resources</Link></li>
            <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Get Started</h4>
          <Link
            href="/contact#assessment"
            className="inline-block mt-2 px-6 py-3 bg-primary hover:bg-secondary text-white rounded-lg font-medium transition"
          >
            Book Assessment
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-700 text-sm text-center">
        © {new Date().getFullYear()} CloudVector AI. All rights reserved.
      </div>
    </footer>
  );
}
