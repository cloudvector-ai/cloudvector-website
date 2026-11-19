export default function ResourcesPage() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold text-dark mb-6">Resources</h1>
        <p className="text-xl text-gray-600 mb-12">
          White papers, architecture guides, checklists, and best practices coming soon.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {["White Papers", "Assessment Examples", "Architecture Guides", "Migration Checklists", "Oracle Best Practices", "OCI Best Practices"].map((item) => (
            <div key={item} className="p-8 border border-gray-100 rounded-2xl bg-light">
              <h3 className="font-semibold text-dark">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
