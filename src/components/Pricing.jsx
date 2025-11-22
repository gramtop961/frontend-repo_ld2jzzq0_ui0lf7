const tiers = [
  { name: 'Exterior Wash', price: 'NOK 399', includes: ['Hand wash & rinse', 'Wheel clean', 'Dry & quick wax'] },
  { name: 'Interior Wash', price: 'NOK 599', includes: ['Vacuum & dust', 'Plastics cleaned', 'Windows inside'] },
  { name: 'Polishing', price: 'NOK 1990', includes: ['Single stage polish', 'Gloss boost', 'Paint inspection'] },
  { name: 'Ceramic Coating', price: 'NOK 4990', includes: ['2–3 year protection', 'High hydrophobic effect', 'Deep shine'] },
  { name: 'Full Detailing', price: 'NOK 3490', includes: ['Interior + exterior', 'Engine bay wipe', 'Finishing spray'] },
]

function Pricing() {
  return (
    <section id="pricing" className="relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Prices</h2>
          <p className="text-blue-100/90 mt-2 max-w-2xl">Straightforward pricing with no surprises. Every service includes careful, skilled work.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="text-white font-medium">{t.name}</h3>
                <div className="text-blue-400 font-semibold">{t.price}</div>
              </div>
              <ul className="mt-4 space-y-2 text-blue-100/80 text-sm">
                {t.includes.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
