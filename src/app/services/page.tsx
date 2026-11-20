import Link from "next/link";
import {
  Database,
  TrendingUp,
  Puzzle,
  Cloud,
  Search,
  Map,
  Boxes,
  Bot,
  Shield,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-light pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark leading-tight tracking-tight">
              AI-Powered Database Migration<br />
              <span className="text-primary">& Cloud Modernization</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Intelligent automation. Zero guesswork. Accelerated outcomes.
              Migrate from Oracle to OCI or AWS with confidence.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact#assessment"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-secondary transition shadow-lg shadow-primary/20"
              >
                Book Assessment
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition"
              >
                Request Demo
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="text-primary" size={18} /> Secure & Compliant
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-primary" size={18} /> Proven Methodology
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-primary" size={18} /> Fortune 500 Trusted
              </div>
            </div>
          </div>

          {/* Architecture Illustration */}
          <div className="relative flex items-center justify-center">
            <div className="flex items-center gap-6 md:gap-10">
              {/* Oracle */}
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-2xl shadow-blue-500/40 relative z-10">
                Oracle
              </div>

              {/* Connecting lines */}
              <div className="hidden md:block absolute left-1/4 right-1/4 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 opacity-60"></div>

              {/* AI Agent */}
              <div className="w-40 h-28 md:w-48 md:h-32 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex flex-col items-center justify-center text-white shadow-2xl shadow-purple-500/40 relative z-10">
                <Bot size={28} className="mb-1" />
                <span className="font-bold">AI Agent</span>
                <span className="text-xs opacity-80">Intelligent Automation</span>
              </div>

              {/* OCI/AWS */}
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-2xl shadow-cyan-400/40 relative z-10">
                OCI/AWS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-dark">Top Challenges</h2>
            <p className="mt-3 text-gray-600">
              Legacy systems. Rising costs. Complex migrations. We help you overcome what slows you down.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="text-primary" size={28} />,
                title: "Legacy Databases",
                desc: "Outdated systems lack agility, scalability, and modern capabilities.",
              },
              {
                icon: <TrendingUp className="text-primary" size={28} />,
                title: "Rising Costs",
                desc: "Unpredictable licensing and infrastructure costs drain IT budgets.",
              },
              {
                icon: <Puzzle className="text-primary" size={28} />,
                title: "Migration Complexity",
                desc: "Complex dependencies, downtime risks, and uncertain outcomes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl border border-gray-100 bg-light/50 hover:shadow-lg transition"
              >
                <div className="mb-5">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-dark">Our Solutions</h2>
            <p className="mt-3 text-gray-600">
              End-to-end AI-powered solutions for every stage of your modernization journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Cloud className="text-secondary" size={24} />,
                title: "Oracle to OCI",
                desc: "Seamlessly migrate from Oracle to Oracle Cloud Infrastructure with AI-powered automation.",
              },
              {
                icon: <Cloud className="text-secondary" size={24} />,
                title: "Oracle to AWS",
                desc: "Lift and modernize Oracle databases to AWS with speed, security, and cost optimization.",
              },
              {
                icon: <Search className="text-secondary" size={24} />,
                title: "Database Assessment",
                desc: "AI-driven assessment to discover, analyze, and recommend the optimal migration path.",
              },
              {
                icon: <Map className="text-secondary" size={24} />,
                title: "Migration Planning",
                desc: "Intelligent planning with dependency mapping, risk analysis, and zero-downtime strategies.",
              },
              {
                icon: <Boxes className="text-secondary" size={24} />,
                title: "Architecture Modernization",
                desc: "Modernize architecture for performance, scalability, and cloud-native excellence.",
              },
              {
                icon: <Bot className="text-secondary" size={24} />,
                title: "AI Migration Agents",
                desc: "Autonomous AI agents that execute, validate, and optimize every step of the migration.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-7 rounded-2xl bg-white border border-gray-100 hover:border-secondary/30 hover:shadow-md transition group"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <Link
                  href="/services"
                  className="text-secondary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 md:p-16 text-white overflow-hidden relative">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-sm font-medium mb-6">
                Flagship Product
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                VectorMigrate™
              </h2>
              <p className="text-lg text-white/90 mb-8">
                AI-powered migration assessment and planning platform that delivers discovery, risk analysis, cost forecasting, and executive-ready reports in days instead of months.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="px-7 py-3.5 bg-white text-primary font-semibold rounded-xl hover:bg-light transition"
                >
                  Explore VectorMigrate™
                </Link>
                <Link
                  href="/contact"
                  className="px-7 py-3.5 border border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            Ready to modernize your Oracle estate?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Book a complimentary assessment and see how AI can accelerate your journey to OCI or AWS.
          </p>
          <Link
            href="/contact#assessment"
            className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-white text-lg font-semibold rounded-xl hover:bg-secondary transition shadow-xl shadow-primary/25"
          >
            Book Your Assessment
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
