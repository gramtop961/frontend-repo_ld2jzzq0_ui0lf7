import { Sparkles, SprayCan, Droplets, Shield, Stars } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  { icon: Droplets, title: 'Exterior Wash', desc: 'Bubbly hand wash with a glossy pastel finish.' },
  { icon: SprayCan, title: 'Interior Wash', desc: 'Fresh seats, candy-clean plastics, happy carpets.' },
  { icon: Stars, title: 'Polishing', desc: 'Swirl-b-gone and cartoon-level gloss.' },
  { icon: Shield, title: 'Ceramic Coating', desc: 'Shield of shine — long-lasting and super slick.' },
  { icon: Sparkles, title: 'Full Detailing', desc: 'Inside + outside glow-up for hero shots.' },
]

function Services() {
  return (
    <section id="services" className="relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">Services</h2>
          <p className="text-slate-600 mt-2 max-w-2xl">Playful packages with real-world results. Pick your glow level.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s, idx) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-3xl border border-white/70 bg-white/70 backdrop-blur p-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-200 via-sky-200 to-violet-200 text-slate-800 inline-flex items-center justify-center border border-white">
                  <s.icon size={20} />
                </div>
                <h3 className="text-slate-800 font-semibold">{s.title}</h3>
              </div>
              <p className="text-slate-600 mt-3 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
