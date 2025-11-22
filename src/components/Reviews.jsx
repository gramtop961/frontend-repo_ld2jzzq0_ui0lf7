import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const reviews = [
  { name: 'Lars', text: 'Fast, friendly, and the car looks fantastic. Will book again.', rating: 5 },
  { name: 'Ingrid', text: 'Very professional work. Shine lasted for weeks.', rating: 5 },
  { name: 'Mikkel', text: 'Clear communication and fair prices. Good experience.', rating: 4.8 },
  { name: 'Sara', text: 'Interior felt like new. Thank you!', rating: 5 },
]

function Stars({ value }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={18} className={i < Math.round(value) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'} />
      ))}
    </div>
  )
}

function Reviews() {
  const avg = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1)
  return (
    <section id="reviews" className="relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-8 md:mb-10 flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-300 via-sky-300 to-violet-300 border border-white" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">Customer Reviews</h2>
        </motion.div>

        <div className="mb-6 text-slate-600">Google rating <span className="text-slate-800 font-semibold">{avg}</span> out of 5 • Based on {reviews.length}+ reviews</div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <motion.div key={r.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.05 }} className="rounded-3xl border border-white/80 bg-white/70 backdrop-blur p-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
              <div className="flex items-center justify-between">
                <div className="text-slate-800 font-semibold">{r.name}</div>
                <Stars value={r.rating} />
              </div>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
