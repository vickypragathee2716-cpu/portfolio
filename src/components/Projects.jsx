import React from 'react'

const projects = [
  {
    title: 'Blockchain Voting System',
    desc: 'Secure, transparent voting using smart contracts',
    tech: 'Solidity, Ethereum, React'
  },
  {
    title: 'Distributed File Sharing App',
    desc: 'Peer-to-peer file sharing with redundancy',
    tech: 'IPFS, libp2p, Node.js'
  },
  {
    title: 'Crypto Wallet Dashboard',
    desc: 'Manage wallets, track balances and transactions',
    tech: 'React, Web3.js, Tailwind'
  },
  {
    title: 'Peer-to-Peer Communication Platform',
    desc: 'Real-time decentralized messaging',
    tech: 'WebRTC, libp2p, React'
  }
]

export default function Projects(){
  return (
    <section id="projects" className="mt-12 content">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(p=> (
          <div key={p.title} className="glass p-6 rounded-2xl">
            <div className="h-40 bg-gradient-to-br from-[#021224] to-[#07102a] rounded-lg flex items-center justify-center"> 
              <span className="text-gray-500">Placeholder Image</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-gray-300">{p.desc}</p>
            <p className="mt-2 text-sm text-gray-400">Tech: {p.tech}</p>
            <div className="mt-4 flex gap-3">
              <a className="px-4 py-2 rounded-md bg-neon-blue text-black font-medium" href="#">GitHub</a>
              <a className="px-4 py-2 rounded-md border border-white/10" href="#">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
