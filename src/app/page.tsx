import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          CloudVector AI
        </h1>

        <h2 className="text-2xl text-blue-600 mb-8">
          AI-Powered Database Migration & Cloud Modernization
        </h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Accelerate Oracle to OCI and AWS migrations using intelligent
          assessments, migration planning, and AI-driven automation.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            Book Assessment
          </Link>

          <Link
            href="/services"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg"
          >
            Our Services
          </Link>
        </div>
      </section>
    </main>
  );
}