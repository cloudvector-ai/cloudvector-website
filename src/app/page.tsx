import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Database,
  TimerReset,
} from "lucide-react";

export default function HomePage() {
  return (
    <main>
      <section className="relative isolate flex min-h-[80svh] items-center justify-center overflow-hidden bg-slate-950 text-center sm:min-h-[85svh] lg:min-h-[90svh]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(47,128,237,0.22),transparent_55%)]" />
        <div className="mx-auto max-w-4xl px-6 py-28 sm:py-36">
          <div className="mb-8 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/75">
            <span className="h-px w-8 bg-white/50" />
            CloudVector AI
            <span className="h-px w-8 bg-white/50" />
          </div>
          <h1 className="text-5xl font-light leading-[1.1] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[88px]">
            A clearer path
            <span className="mt-2 block">to the cloud.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base font-light leading-7 text-white/80 sm:text-lg sm:leading-8">
            Thoughtful, AI-powered Oracle modernization for the next chapter of your business.
            Plan your move to OCI or AWS with clarity and confidence.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact#assessment" className="inline-flex min-w-52 items-center justify-center gap-2 border border-white bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:border-white/80 hover:bg-white/90">
              Book an assessment <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="inline-flex min-w-52 items-center justify-center border border-white/50 bg-black/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10">
              Explore our approach
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-x-7 gap-y-3 text-xs font-medium tracking-wide text-white/70">
            <span className="flex items-center gap-2"><CheckCircle2 size={14} /> Oracle specialists</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={14} /> OCI and AWS</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={14} /> Risk-led delivery</span>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="eyebrow">The modernization challenge</span>
            <h2 className="section-heading mt-5">From legacy complexity to a clear cloud path.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: <Database />, title: "Unknown dependencies", text: "Expose hidden object relationships, custom code, integrations, and migration blockers.", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80" },
              { icon: <TimerReset />, title: "Business risk", text: "Plan around uptime requirements, data integrity, rollback windows, and operational constraints.", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80" },
              { icon: <BarChart3 />, title: "Uncertain economics", text: "Model OCI and AWS options with transparent sizing, total cost, and licensing implications.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
            ].map((item) => (
              <article key={item.title} className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="h-44 overflow-hidden">
                  <img src={item.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-primary">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">What we deliver</span>
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

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] bg-primary px-8 py-12 text-white md:px-14 md:py-16">
            <div className="absolute right-0 top-0 h-full w-[42%] opacity-30">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85" alt="" className="h-full w-full object-cover [mask-image:linear-gradient(to_right,transparent,black)]" />
            </div>
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