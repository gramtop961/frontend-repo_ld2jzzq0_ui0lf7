import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(40rem 40rem at 10% 10%, rgba(255,182,193,0.35), transparent), radial-gradient(35rem 35rem at 90% 0%, rgba(173,216,230,0.35), transparent), radial-gradient(30rem 30rem at 50% 100%, rgba(216,191,216,0.35), transparent)'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-28 md:py-40">
        <div className="max-w-2xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-800 drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]">
            Cartoon‑Bright Car Detailing in Norway
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-4 md:mt-6 text-base md:text-lg text-slate-700 leading-relaxed">
            Soft pastel vibes, spotless results. Friendly service with playful energy and pro finish.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-300 via-sky-300 to-violet-300 text-slate-800 font-semibold shadow hover:shadow-lg transition-all">
              Book Now
            </a>
            <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-2xl border border-slate-300/80 text-slate-800 bg-white/60 backdrop-blur hover:bg-white/80 transition-all">
              See Services
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.25 }} className="mt-8 flex items-center gap-4 text-slate-700">
            <Badge>Quality</Badge>
            <Badge>Speed</Badge>
            <Badge>Professionalism</Badge>
          </motion.div>
        </div>
      </div>

      <BouncyClouds />
    </section>
  )
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-white text-slate-700 shadow-sm">
      <span className="w-2 h-2 rounded-full bg-pink-300" />
      {children}
    </span>
  )
}

function BouncyClouds() {
  return (
    <div className="absolute inset-x-0 bottom-10 pointer-events-none select-none">
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="flex gap-4">
          {[...Array(6)].map((_, i) => (
            <motion.div key={i} animate={{ y: [0, -6, 0] }} transition={{ duration: 3 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
              className="h-6 rounded-full bg-white/70 border border-white/80 shadow px-4" />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
