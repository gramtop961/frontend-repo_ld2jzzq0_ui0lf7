function Showcase() {
  return (
    <section id="showcase" className="relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Before & After</h2>
          <p className="text-blue-100/90 mt-2 max-w-2xl">Real results from recent jobs. Slide to compare the finish.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[1,2].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
              <div className="aspect-[16/10] relative">
                <img src={`https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop`} alt="Before" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                <img src={`https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop`} alt="After" className="absolute inset-0 w-full h-full object-cover mix-blend-screen" />
              </div>
              <div className="p-4 border-t border-white/10 text-blue-100/90">High gloss finish, clean details, and protected surfaces.</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
