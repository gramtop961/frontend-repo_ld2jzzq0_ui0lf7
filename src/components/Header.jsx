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

  const linkClass = 'text-sm md:text-base text-white/80 hover:text-white transition-colors'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="h-16 md:h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/20"></div>
            <div className="text-white font-semibold tracking-tight">Nordic Auto Detail</div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className={linkClass}>Services</a>
            <a href="#pricing" className={linkClass}>Prices</a>
            <a href="#showcase" className={linkClass}>Before/After</a>
            <a href="#reviews" className={linkClass}>Reviews</a>
            <a href="#about" className={linkClass}>About</a>
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white font-medium shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-colors">Book Now</a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 grid gap-3">
            <a onClick={() => setOpen(false)} href="#services" className={linkClass}>Services</a>
            <a onClick={() => setOpen(false)} href="#pricing" className={linkClass}>Prices</a>
            <a onClick={() => setOpen(false)} href="#showcase" className={linkClass}>Before/After</a>
            <a onClick={() => setOpen(false)} href="#reviews" className={linkClass}>Reviews</a>
            <a onClick={() => setOpen(false)} href="#about" className={linkClass}>About</a>
            <a onClick={() => setOpen(false)} href="#contact" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white font-medium mt-2">Book Now</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
