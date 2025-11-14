import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <CTA />
      <footer className="py-10 border-t border-slate-200 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div>© {new Date().getFullYear()} FluxPay Inc.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Security</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
