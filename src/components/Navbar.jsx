import { Menu, ArrowRight, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur-md bg-white/60 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 shadow-sm" />
          <span className="font-semibold text-slate-900 tracking-tight">FluxPay</span>
          <span className="ml-2 inline-flex items-center gap-1 text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
            <Sparkles className="h-3.5 w-3.5" /> AI Finance Automation
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#how" className="hover:text-slate-900 transition">How it works</a>
          <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
          <a href="#faq" className="hover:text-slate-900 transition">FAQ</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-slate-700 hover:text-slate-900">Sign in</button>
          <a href="#cta" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition">
            Start free <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <button className="md:hidden p-2 text-slate-700" aria-label="Open menu">
          <Menu />
        </button>
      </div>
    </header>
  );
}
