import Link from "next/link";
import { ArrowRight, Bot, BarChart3, FileText, Shield, Zap, Target } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-sm font-medium mb-6">
              Flagship Product
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              VectorMigrate™
            </h1>
            <p className="text-xl text-white/90 mb-10">
              AI-powered Oracle migration assessment and planning platform that delivers enterprise-grade insights in days, not months.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-light transition"
              >
                Request a Demo
              </Link>
              <Link
                href="/contact#assessment"
                className="px-8 py-4 border border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition"
              >
                Book Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark">Core Capabilities</h2>
            <p className="mt-3 text-gray-600">Everything you need for confident Oracle-to-cloud decisions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Search className="text-secondary" size={28} />, title: "Oracle Discovery", desc: "Automated inventory of schemas, objects, dependencies, and custom code." },
              { icon: <BarChart3 className="text-secondary" size={28} />, title: "Complexity Scoring", desc: "AI-driven scoring of migration complexity and risk factors." },
              { icon: <Target className="text-secondary" size={28} />, title: "OCI & AWS Recommendations", desc: "Intelligent target platform and service recommendations." },
              { icon: <Zap className="text-secondary" size={28} />, title: "Cost Estimation", desc: "Accurate TCO and run-rate forecasting for OCI and AWS." },
              { icon: <Shield className="text-secondary" size={28} />, title: "Risk Analysis", desc: "Identify high-risk objects, dependencies, and potential blockers early." },
              { icon: <FileText className="text-secondary" size={28} />, title: "Automated Reporting", desc: "Executive and technical reports generated automatically." },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition">
                <div className="mb-5">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Products */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">Coming Soon</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Oracle-to-AWS Assessment Agent",
              "Oracle Cost Optimization Agent",
              "Database Health Agent",
              "Cloud Readiness Agent",
            ].map((name) => (
              <div key={name} className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                <Bot className="mx-auto text-primary mb-4" size={32} />
                <h3 className="font-semibold text-dark">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Search(props: any) {
  return <svg {...props} /* simple search icon fallback if needed */ />;
}