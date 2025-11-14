import { ArrowRight, Lock } from 'lucide-react';

export default function CTA(){
  return (
    <section id="cta" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 sm:p-14 overflow-hidden relative">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="relative">
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Automate your finance ops in a weekend</h3>
            <p className="mt-3 text-slate-300 max-w-2xl">Connect data sources, review suggested automations, and watch your month-end close itself.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-900 hover:bg-slate-100 transition">
                Create free workspace <ArrowRight className="h-4 w-4" />
              </a>
              <div className="inline-flex items-center gap-2 text-slate-300 text-sm">
                <Lock className="h-4 w-4" /> SOC2 Type II • EU & US data residency
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
