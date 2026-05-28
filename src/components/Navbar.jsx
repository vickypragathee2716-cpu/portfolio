import React from 'react'

export default function Navbar({dark, setDark}){
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur glass py-3">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-black font-bold">P</div>
          <div className="text-lg font-semibold">Pragadheeshwaran</div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="hover:text-neon-blue">About</a>
          <a href="#skills" className="hover:text-neon-blue">Skills</a>
          <a href="#projects" className="hover:text-neon-blue">Projects</a>
          <a href="#contact" className="hover:text-neon-blue">Contact</a>
          <a href="/resume.pdf" download className="bg-neon-blue text-black px-3 py-1 rounded-md font-medium">Resume</a>
          <button onClick={()=>setDark(!dark)} className="p-2 rounded-md bg-white/5">{dark? 'Light': 'Dark'}</button>
        </div>
      </div>
    </nav>
  )
}
