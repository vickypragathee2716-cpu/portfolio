import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="mt-12 content">
      <h2 className="text-2xl font-bold">Contact</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="glass p-6 rounded-2xl">
          <p className="font-semibold">LinkedIn: Pragadheeshwaran P</p>
          <p className="mt-2">Email: your-email@example.com</p>
          <p className="mt-2">GitHub: your-github</p>
          <div className="mt-4 flex gap-3">
            <a href="#" className="px-3 py-2 rounded-md bg-white/5">LinkedIn</a>
            <a href="#" className="px-3 py-2 rounded-md bg-white/5">GitHub</a>
          </div>
        </div>
        <form className="glass p-6 rounded-2xl">
          <label className="block">Name</label>
          <input className="w-full mt-2 p-3 rounded-md bg-transparent border border-white/10" placeholder="Your name" />
          <label className="block mt-4">Email</label>
          <input className="w-full mt-2 p-3 rounded-md bg-transparent border border-white/10" placeholder="you@domain.com" />
          <label className="block mt-4">Message</label>
          <textarea className="w-full mt-2 p-3 rounded-md bg-transparent border border-white/10" rows="5" placeholder="Hello..." />
          <button className="mt-4 px-5 py-3 rounded-md bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold">Send Message</button>
        </form>
      </div>
    </section>
  )
}
