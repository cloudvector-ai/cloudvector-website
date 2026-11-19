import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-light to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark mb-6">
            About CloudVector AI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            We are an AI-first company focused exclusively on helping enterprises modernize Oracle databases and move confidently to OCI and AWS.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-dark mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To eliminate the uncertainty, cost overruns, and risk traditionally associated with Oracle database migration by combining deep domain expertise with autonomous AI agents.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-dark mb-6">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A world where every enterprise can modernize mission-critical databases with the speed and confidence of a software release.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-dark mb-10 text-center">Why CloudVector AI</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Oracle Depth", desc: "Decades of collective Oracle experience across RAC, Data Guard, Exadata, and complex custom environments." },
              { title: "AI-Native Approach", desc: "Purpose-built AI agents that accelerate discovery, planning, and risk analysis." },
              { title: "Enterprise Focus", desc: "We work exclusively with mid-market and Fortune 1000 organizations." },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-dark mb-6">Ready to work with us?</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-secondary transition"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
