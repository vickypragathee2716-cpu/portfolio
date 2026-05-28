import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 py-6 text-center">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-4">
          <a href="#" className="text-gray-400 hover:text-neon-blue">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-neon-blue">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-neon-blue">Twitter</a>
        </div>
        <p className="mt-4 text-sm text-gray-500">© {new Date().getFullYear()} Pragadheeshwaran. All rights reserved.</p>
      </div>
    </footer>
  )
}
