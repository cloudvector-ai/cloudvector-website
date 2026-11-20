import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  CloudCog,
  Database,
  ShieldCheck,
  TimerReset,
} from "lucide-react";

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(47,128,237,.28),transparent_28%),radial-gradient(circle_at_10%_80%,rgba(39,197,246,.12),transparent_22%)]" />
        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-300">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_12px_#7dd3fc]" />
              AI-powered modernization
            </div>
            <h1 className="text-5xl font-extrabold leading-[1.03] tracking-tight text-white md:text-6xl xl:text-[68px]">
              Move Oracle forward.
              <span className="mt-2 block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400">Move your business faster.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Accelerate OCI and AWS migrations with AI-driven discovery, precise planning, and autonomous execution—built for the complexity of enterprise databases.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact#assessment" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-slate-950 shadow-xl transition hover:-translate-y-1">
                Book a free assessment <ArrowRight size={17} />
              </Link>
              <Link href="/products" className="inline-flex items-center rounded-xl border border-white/20 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10">
                Explore VectorMigrate
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-slate-400">
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-sky-400" /> Oracle specialists</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-sky-400" /> OCI and AWS</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-sky-400" /> Risk-led delivery</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative ml-auto max-w-[560px]">
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-900 p-2 shadow-2xl shadow-black/30">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85"
                  alt="Modern cloud data center"
                  className="h-[420px] w-full rounded-[21px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-4 right-8 grid grid-cols-3 gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl md:left-[-36px] md:right-12">
                {[
                  ["Discovery", "Complete", <Database key="db" size={18} />],
                  ["Risk score", "Low", <ShieldCheck key="risk" size={18} />],
                  ["Migration plan", "Ready", <CloudCog key="cloud" size={18} />],
                ].map(([label, value, icon]) => (
                  <div key={String(label)} className="rounded-xl bg-slate-50 px-3 py-3 text-slate-950">
                    <div className="mb-2 text-primary">{icon}</div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</div>
                    <div className="mt-1 text-sm font-bold">{value}</div>
                  </div>
                ))}
              </div>
            </div>
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
              <article key={item.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
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
              <article key={title} className="feature-card">
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