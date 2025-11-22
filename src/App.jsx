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
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main className="pt-16 md:pt-20">
        <Hero />
        <Services />
        <Pricing />
        <Showcase />
        <Reviews />
        <About />
        <Contact />
        <footer className="border-t border-white/10 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 text-blue-100/70 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} Nordic Auto Detail — Clean, simple, and honest service.</div>
            <a href="#top" className="text-white/80 hover:text-white">Back to top</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
