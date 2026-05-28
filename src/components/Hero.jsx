import React from 'react'

export default function Hero(){
  return (
    <section id="home" className="pt-24 lg:pt-32 pb-20 content">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Pragadheeshwaran</h1>
          <p className="text-neon-purple mt-2 font-semibold">Blockchain & Distributed Computing Enthusiast</p>
          <p className="mt-6 max-w-xl text-gray-300">Building secure, scalable, and decentralized digital solutions.</p>
          <div className="mt-8 flex gap-4">
            <a href="#projects" className="px-5 py-3 rounded-md bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold shadow-lg">View My Work</a>
            <a href="#contact" className="px-5 py-3 rounded-md border border-white/10">Contact Me</a>
          </div>
        </div>
        <div className="relative">
          <div className="h-72 bg-gradient-to-br from-[#021224] to-[#07102a] rounded-2xl glass flex items-center justify-center card-float">
            <div className="text-center">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-black font-bold text-2xl mx-auto">P</div>
              <p className="mt-4 text-gray-300">Exploring decentralized systems, smart contracts & scalable computing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
