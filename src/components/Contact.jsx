import { useState } from 'react'

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
    <section id="contact" className="relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Contact & Booking</h2>
          <p className="text-blue-100/90 mt-2">Send a quick request. We reply fast with available times.</p>
        </div>

        <form onSubmit={onSubmit} className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/80 mb-2">Name</label>
                <input name="name" required className="w-full px-3 py-2 rounded-md bg-slate-900 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-2">Phone</label>
                <input name="phone" required className="w-full px-3 py-2 rounded-md bg-slate-900 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm text-white/80 mb-2">Service</label>
              <select name="service" className="w-full px-3 py-2 rounded-md bg-slate-900 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Exterior Wash</option>
                <option>Interior Wash</option>
                <option>Polishing</option>
                <option>Ceramic Coating</option>
                <option>Full Detailing</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="block text-sm text-white/80 mb-2">Message</label>
              <textarea name="message" rows="4" className="w-full px-3 py-2 rounded-md bg-slate-900 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Preferred date, car model, etc." />
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button type="submit" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-colors">Book Now</button>
              <span className="text-blue-100/80 text-sm">{status}</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6">
            <h3 className="text-white font-medium">Why book with us</h3>
            <ul className="mt-4 space-y-3 text-blue-100/90 text-sm">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"/> Fast reply and flexible times</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"/> Simple English communication</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"/> Careful work with premium products</li>
            </ul>
            <div className="mt-6 rounded-xl overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1600&auto=format&fit=crop" alt="Detailing" className="w-full h-full object-cover" />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
