import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">About Us</h2>
            <p className="text-slate-600 mt-3 leading-relaxed">We’re a small Norwegian team that loves clean lines and playful color. Soft aesthetics, serious care. We use quality products and friendly service to keep your car happy through every season.</p>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-pink-300"/> Trained and experienced detailers</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky-300"/> Mobile service in the local area</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-violet-300"/> Clear communication and on-time delivery</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl overflow-hidden border border-white/80 bg-white/70 backdrop-blur shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
            <img src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1600&auto=format&fit=crop" alt="Workshop" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About