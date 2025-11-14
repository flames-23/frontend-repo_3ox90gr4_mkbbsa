const logos = [
  'Stripe', 'QuickBooks', 'Xero', 'Plaid', 'SAP', 'NetSuite'
]

export default function Logos(){
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-slate-600">Works with your favorite tools</div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center opacity-70">
          {logos.map(l => (
            <div key={l} className="py-3 text-center font-medium tracking-wide text-slate-500 bg-white/60 border border-slate-200 rounded-xl">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
