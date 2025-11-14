import Spline from '@splinetool/react-spline';
import { Check, Shield, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 text-xs text-slate-600 bg-white/70 backdrop-blur">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Automated finance, powered by AI
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-slate-900">
              Close your books 10x faster with autonomous workflows
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              FluxPay connects to your bank, accounting, and billing tools to reconcile, forecast, and automate the boring stuff — securely and in minutes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition">
                Get started free
              </a>
              <a href="#demo" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-900 border border-slate-200 hover:border-slate-300 transition">
                See a live demo
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500"/>Bank-grade security</div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-emerald-500"/>SOC2 Type II</div>
              <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-emerald-500"/>Real-time insights</div>
            </div>
          </div>
          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
