import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    name: "Financial Services",
    challenges: ["Strict regulatory compliance", "High availability requirements", "Complex legacy core systems"],
    benefits: ["Reduced operational risk", "Improved audit readiness", "Lower TCO"],
  },
  {
    name: "Healthcare",
    challenges: ["HIPAA & data privacy", "Mission-critical uptime", "Integration with EHR systems"],
    benefits: ["Secure cloud foundation", "Scalable patient data platforms", "Faster innovation cycles"],
  },
  {
    name: "Insurance",
    challenges: ["Legacy policy systems", "Seasonal workload spikes", "Regulatory reporting"],
    benefits: ["Elastic capacity", "Modern analytics capability", "Cost predictability"],
  },
  {
    name: "Retail",
    challenges: ["Peak season performance", "Omnichannel data needs", "Legacy POS integrations"],
    benefits: ["Elastic scaling", "Real-time insights", "Lower infrastructure costs"],
  },
  {
    name: "Government",
    challenges: ["Security & compliance mandates", "Long procurement cycles", "Legacy mainframe/Oracle estates"],
    benefits: ["FedRAMP-aligned paths", "Modern citizen services", "Sustainable cost models"],
  },
  {
    name: "Higher Education",
    challenges: ["Budget constraints", "Student information systems", "Research data workloads"],
    benefits: ["Cost-efficient cloud", "Modern student experience", "Research computing agility"],
  },
];

export default function IndustriesPage() {
  return (
    <div className="bg-white">
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark mb-6">
            Industry Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep domain knowledge combined with Oracle and cloud migration excellence.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {industries.map((ind) => (
            <div key={ind.name} className="border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-dark mb-6">{ind.name}</h2>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Business Challenges</h3>
                <ul className="space-y-1 text-gray-600">
                  {ind.challenges.map((c) => (
                    <li key={c}>• {c}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Migration Benefits</h3>
                <ul className="space-y-1 text-gray-600">
                  {ind.benefits.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Let’s discuss your industry needs</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl"
          >
            Talk to an Expert <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
