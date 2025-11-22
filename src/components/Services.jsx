import { Sparkles, SprayCan, Droplets, Shield, Stars } from 'lucide-react'

const services = [
  { icon: Droplets, title: 'Exterior Wash', desc: 'Hand wash, rinse, and dry with safe methods.' },
  { icon: SprayCan, title: 'Interior Wash', desc: 'Deep clean for seats, mats, and all surfaces.' },
  { icon: Stars, title: 'Polishing', desc: 'Restore gloss and remove light swirls.' },
  { icon: Shield, title: 'Ceramic Coating', desc: 'Long‑lasting protection and strong shine.' },
  { icon: Sparkles, title: 'Full Detailing', desc: 'Complete interior and exterior care.' },
]

function Services() {
  return (
    <section id="services" className="relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Services</h2>
          <p className="text-blue-100/90 mt-2 max-w-2xl">Clear, simple packages focused on results. Choose what your car needs today.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 hover:border-blue-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 inline-flex items-center justify-center">
                  <s.icon size={20} />
                </div>
                <h3 className="text-white font-medium">{s.title}</h3>
              </div>
              <p className="text-blue-100/80 mt-3 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
