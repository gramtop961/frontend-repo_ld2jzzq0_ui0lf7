import { Star } from 'lucide-react'

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
        <Star key={i} size={18} className={i < Math.round(value) ? 'fill-yellow-400 text-yellow-400' : 'text-white/20'} />
      ))}
    </div>
  )
}

function Reviews() {
  const avg = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1)
  return (
    <section id="reviews" className="relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-8 md:mb-10 flex items-center gap-3">
          <img src="/google-g.svg" alt="Google" className="w-6 h-6" />
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Customer Reviews</h2>
        </div>

        <div className="mb-6 text-blue-100/90">Google rating <span className="text-white font-medium">{avg}</span> out of 5 • Based on {reviews.length}+ reviews</div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6">
              <div className="flex items-center justify-between">
                <div className="text-white font-medium">{r.name}</div>
                <Stars value={r.rating} />
              </div>
              <p className="mt-3 text-blue-100/80 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
