import { Bot, LineChart, Shield, Receipt, Clock, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Autonomous workflows',
    desc: 'Let AI reconcile, categorize, and post entries automatically while you supervise.'
  },
  {
    icon: LineChart,
    title: 'Live cash forecasting',
    desc: 'Predict runway and burn in real-time with multi-scenario models.'
  },
  {
    icon: Shield,
    title: 'Bank-grade security',
    desc: 'SOC 2 Type II, SSO, and granular roles out of the box.'
  },
  {
    icon: Receipt,
    title: 'One-click invoicing',
    desc: 'Generate, send, and auto-collect with smart reminders.'
  },
  {
    icon: Clock,
    title: 'Close in hours, not weeks',
    desc: 'Automated approvals, reconciliations, and variance analysis.'
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Build a self-driving finance stack</h2>
            <p className="mt-3 text-slate-600 max-w-2xl">Connect your bank, accounting, and billing tools — then let FluxPay automate the rest. Review. Approve. Done.</p>
          </div>
          <a href="#demo" className="hidden sm:inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">Explore the product <ArrowRight className="h-4 w-4"/></a>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({icon:Icon, title, desc}) => (
            <div key={title} className="group p-6 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur hover:shadow-sm transition">
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 text-indigo-600">
                <Icon className="h-6 w-6"/>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
