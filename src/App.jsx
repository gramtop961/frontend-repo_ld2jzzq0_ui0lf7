import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Showcase from './components/Showcase'
import Reviews from './components/Reviews'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-sky-50 to-violet-50 text-slate-800">
      <Header />
      <main className="pt-16 md:pt-20">
        <Hero />
        <Services />
        <Pricing />
        <Showcase />
        <Reviews />
        <About />
        <Contact />
        <footer className="border-t border-slate-200/60 bg-white/60 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} Nordic Auto Detail — Made with a splash of pastel shine.</div>
            <a href="#top" className="text-slate-700 hover:text-slate-900">Back to top</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
