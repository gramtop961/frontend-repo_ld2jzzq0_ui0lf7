import { motion } from 'framer-motion'

const tiers = [
  { name: 'Exterior Wash', price: 'NOK 399', includes: ['Hand wash & rinse', 'Wheel clean', 'Dry & quick wax'] },
  { name: 'Interior Wash', price: 'NOK 599', includes: ['Vacuum & dust', 'Plastics cleaned', 'Windows inside'] },
  { name: 'Polishing', price: 'NOK 1990', includes: ['Single stage polish', 'Gloss boost', 'Paint inspection'] },
  { name: 'Ceramic Coating', price: 'NOK 4990', includes: ['2–3 year protection', 'High hydrophobic effect', 'Deep shine'] },
  { name: 'Full Detailing', price: 'NOK 3490', includes: ['Interior + exterior', 'Engine bay wipe', 'Finishing spray'] },
]

function Pricing() {
  return (
    <section id="pricing" className="relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">Prices</h2>
          <p className="text-slate-600 mt-2 max-w-2xl">Simple tiers with sweet extras. No surprise fees, just sparkly outcomes.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((t, idx) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-3xl border border-white/70 bg-white/70 backdrop-blur p-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
              <div className="flex items-baseline justify-between">
                <h3 className="text-slate-800 font-semibold">{t.name}</h3>
                <div className="text-slate-700 font-bold">{t.price}</div>
              </div>
              <ul className="mt-4 space-y-2 text-slate-600 text-sm">
                {t.includes.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-300" />
                    {i}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
