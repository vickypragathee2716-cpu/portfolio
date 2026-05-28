import React from 'react'

const skills = [
  'Blockchain Development',
  'Smart Contracts',
  'Distributed Systems',
  'Web Development',
  'Networking Basics',
  'Problem Solving',
  'Git & GitHub'
]

export default function Skills(){
  return (
    <section id="skills" className="mt-12 content">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map(s=> (
          <div key={s} className="glass p-4 rounded-lg flex items-center justify-center">{s}</div>
        ))}
      </div>
    </section>
  )
}
