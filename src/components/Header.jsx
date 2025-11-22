import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = 'text-sm md:text-base text-slate-700 hover:text-slate-900 transition-colors'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 border-b border-slate-200/70' : 'bg-white/30 backdrop-blur'} animate-[fadeIn_0.8s_ease_0s_1]`}
      style={{
        backgroundImage: 'radial-gradient(20rem 20rem at 0% 0%, rgba(255,182,193,0.35), transparent), radial-gradient(20rem 20rem at 100% 0%, rgba(173,216,230,0.35), transparent)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="h-16 md:h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-300 via-sky-300 to-violet-300 shadow-lg shadow-pink-200/60 border border-white/60" />
            <div className="font-semibold tracking-tight text-slate-800">Nordic Auto Detail</div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className={linkClass}>Services</a>
            <a href="#pricing" className={linkClass}>Prices</a>
            <a href="#showcase" className={linkClass}>Before/After</a>
            <a href="#reviews" className={linkClass}>Reviews</a>
            <a href="#about" className={linkClass}>About</a>
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-pink-300 via-sky-300 to-violet-300 text-slate-800 font-medium shadow hover:shadow-md active:scale-[0.99] transition-all">Book Now</a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-300/80 text-slate-800 bg-white/70" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200/80 bg-white/80 backdrop-blur animate-[slideDown_0.25s_ease]">
          <div className="max-w-7xl mx-auto px-4 py-4 grid gap-3">
            <a onClick={() => setOpen(false)} href="#services" className={linkClass}>Services</a>
            <a onClick={() => setOpen(false)} href="#pricing" className={linkClass}>Prices</a>
            <a onClick={() => setOpen(false)} href="#showcase" className={linkClass}>Before/After</a>
            <a onClick={() => setOpen(false)} href="#reviews" className={linkClass}>Reviews</a>
            <a onClick={() => setOpen(false)} href="#about" className={linkClass}>About</a>
            <a onClick={() => setOpen(false)} href="#contact" className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-pink-300 via-sky-300 to-violet-300 text-slate-800 font-medium mt-2">Book Now</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
