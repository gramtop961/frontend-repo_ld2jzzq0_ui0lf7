import { motion } from 'framer-motion'

function Showcase() {
  return (
    <section id="showcase" className="relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">Before & After</h2>
          <p className="text-slate-600 mt-2 max-w-2xl">Slide your eyes across the glow — soft gradients, sharp results.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[1,2].map((i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-3xl overflow-hidden border border-white/80 bg-white/70 backdrop-blur shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
              <div className="aspect-[16/10] relative">
                <img src={`https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop`} alt="Before" className="absolute inset-0 w-full h-full object-cover opacity-70" />
                <img src={`https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop`} alt="After" className="absolute inset-0 w-full h-full object-cover mix-blend-screen" />
              </div>
              <div className="p-4 border-t border-white/80 text-slate-600">High gloss finish, clean details, and protected surfaces.</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
