import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'

export default function App(){
  const [dark, setDark] = useState(true)

  useEffect(()=>{
    if(dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  },[dark])

  return (
    <div className={`bg-gradient-to-b from-gray-900 via-[#071022] to-gray-900 min-h-screen text-gray-200 transition-colors duration-500`}> 
      <Navbar dark={dark} setDark={setDark} />
      <AnimatedBackground />
      <main className="container mx-auto px-6 py-12 content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
