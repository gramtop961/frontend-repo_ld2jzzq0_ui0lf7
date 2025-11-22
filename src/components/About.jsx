function About() {
  return (
    <section id="about" className="relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">About Us</h2>
            <p className="text-blue-100/90 mt-3 leading-relaxed">We are a small team in Norway focused on clean design and careful work. Our style is Scandinavian: simple, efficient, and honest. We use quality products and methods to protect your car in all seasons.</p>
            <ul className="mt-6 space-y-3 text-blue-100/90">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"/> Trained and experienced detailers</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"/> Mobile service in the local area</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"/> Clear communication and on-time delivery</li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1600&auto=format&fit=crop" alt="Workshop" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About