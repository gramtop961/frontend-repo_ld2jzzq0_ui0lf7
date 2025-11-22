import { useState } from 'react'
import { motion } from 'framer-motion'

function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const backend = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${backend}/api/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          phone: e.target.phone.value,
          service: e.target.service.value,
          message: e.target.message.value,
        })
      })
      const data = await res.json()
      if (res.ok) setStatus('Booking request received. We will contact you soon.')
      else setStatus(data?.detail || 'Something went wrong.')
    } catch (err) {
      setStatus('Could not send right now. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">Contact & Booking</h2>
          <p className="text-slate-600 mt-2">Send a quick request. We reply fast with available times.</p>
        </motion.div>

        <form onSubmit={onSubmit} className="grid lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-3xl border border-white/80 bg-white/70 backdrop-blur p-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-700 mb-2">Name</label>
                <input name="name" required className="w-full px-3 py-2 rounded-xl bg-white/80 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-300" />
              </div>
              <div>
                <label className="block text-sm text-slate-700 mb-2">Phone</label>
                <input name="phone" required className="w-full px-3 py-2 rounded-xl bg-white/80 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-300" />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm text-slate-700 mb-2">Service</label>
              <select name="service" className="w-full px-3 py-2 rounded-xl bg-white/80 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-violet-300">
                <option>Exterior Wash</option>
                <option>Interior Wash</option>
                <option>Polishing</option>
                <option>Ceramic Coating</option>
                <option>Full Detailing</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="block text-sm text-slate-700 mb-2">Message</label>
              <textarea name="message" rows="4" className="w-full px-3 py-2 rounded-xl bg-white/80 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-200" placeholder="Preferred date, car model, etc." />
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button type="submit" className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-300 via-sky-300 to-violet-300 text-slate-800 font-semibold shadow hover:shadow-lg transition-all">Book Now</button>
              <span className="text-slate-600 text-sm">{status}</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl border border-white/80 bg-white/70 backdrop-blur p-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
            <h3 className="text-slate-800 font-semibold">Why book with us</h3>
            <ul className="mt-4 space-y-3 text-slate-600 text-sm">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-pink-300"/> Fast reply and flexible times</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky-300"/> Simple English communication</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-violet-300"/> Careful work with premium products</li>
            </ul>
            <div className="mt-6 rounded-2xl overflow-hidden border border-white/80">
              <img src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1600&auto=format&fit=crop" alt="Detailing" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </form>
      </div>
    </section>
  )
}

export default Contact
