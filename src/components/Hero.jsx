import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-28 md:py-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Premium Car Detailing in Norway
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-blue-100/90 leading-relaxed">
            Clean lines. Bright shine. Scandinavian precision. We detail with care so your car looks its best in any light.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-colors">
              Book Now
            </a>
            <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/15 text-white/90 hover:text-white hover:border-white/30 transition-colors">
              See Services
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-white/80">
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500" /> Quality</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500" /> Speed</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500" /> Professionalism</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
