import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Database,
  TimerReset,
} from "lucide-react";

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(#cbd5e1_0.7px,transparent_0.7px)] [background-size:22px_22px] opacity-40" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/75 to-white" />
        <div className="relative mx-auto flex min-h-[660px] max-w-7xl items-center px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-6xl">
            <div className="mb-8 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
              <span className="h-px w-8 bg-slate-400" />
              AI-powered Oracle modernization
            </div>
            <h1 className="text-6xl font-medium leading-[0.94] tracking-[-0.065em] text-slate-950 sm:text-7xl md:text-8xl xl:text-[112px]">
              Modernize Oracle.
              <span className="mt-2 block text-slate-500">Move forward.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              AI-powered discovery, planning, and migration execution for enterprises moving mission-critical databases to OCI or AWS.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact#assessment" className="inline-flex items-center justify-center gap-2 bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary">
                Book an assessment <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center border border-slate-300 px-6 py-3.5 text-sm font-medium text-slate-800 transition hover:border-slate-950">
                Explore our approach <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="mt-16 border-t border-slate-200 pt-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">From legacy systems to cloud intelligence</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-slate-500 sm:gap-x-12">
                <span className="text-base font-semibold text-slate-800">Oracle</span>
                <span>Database discovery</span>
                <span>Migration planning</span>
                <span>OCI</span>
                <span>AWS</span>
                <span>VectorMigrate™</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="eyebrow">Why modernization gets complicated</span>
            <h2 className="section-heading mt-5">Your business is more than a database.</h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-600">Dependencies, downtime, and cost are connected. We help bring the whole picture into focus before migration begins.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: <Database />, title: "Unknown dependencies", text: "Expose hidden object relationships, custom code, integrations, and migration blockers.", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80" },
              { icon: <TimerReset />, title: "Business risk", text: "Plan around uptime requirements, data integrity, rollback windows, and operational constraints.", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80" },
              { icon: <BarChart3 />, title: "Uncertain economics", text: "Model OCI and AWS options with transparent sizing, total cost, and licensing implications.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
            ].map((item) => (
              <article key={item.title} className="group h-full overflow-hidden border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
                <div className="h-48 overflow-hidden">
                  <img src={item.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <div className="mb-5 text-primary">{item.icon}</div>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">A complete path forward</span>
              <h2 className="section-heading mt-5">One modernization partner. Every critical stage.</h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-primary">
              View all services <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["01", "Oracle discovery", "Create a complete inventory of schemas, workloads, dependencies, and migration constraints."],
              ["02", "Migration planning", "Build a sequenced, validated roadmap aligned with risk, downtime, and business priorities."],
              ["03", "OCI & AWS execution", "Modernize safely across the right target cloud with proven migration patterns."],
              ["04", "Architecture modernization", "Improve resilience, scale, performance, and operational efficiency."],
              ["05", "AI migration agents", "Automate analysis and repeatable work to accelerate delivery and reduce manual effort."],
              ["06", "Assessment reporting", "Give technology and executive teams clear findings, forecasts, and next actions."],
            ].map(([number, title, text]) => (
              <article key={title} className="feature-card h-full">
                <span className="text-xs font-extrabold tracking-[0.18em] text-secondary">{number}</span>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden bg-slate-950 px-8 py-12 text-white md:px-14 md:py-16">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,rgba(47,128,237,0.25),transparent_55%)]" />
            <div className="relative max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-300">
                <Bot size={16} /> VectorMigrate™
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Enterprise insight in days, not months.</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-blue-100">
                Discover, score, forecast, and plan Oracle migrations through one AI-powered platform.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/products" className="rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-primary transition hover:-translate-y-0.5">Explore the platform</Link>
                <Link href="/contact" className="rounded-xl border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">Request a demo</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}