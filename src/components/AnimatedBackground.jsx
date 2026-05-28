import React, { useEffect, useRef } from 'react'

export default function AnimatedBackground(){
  const canvasRef = useRef(null)

  useEffect(()=>{
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight
    const nodes = []
    const NODE_COUNT = Math.floor((w*h)/80000)

    function init(){
      nodes.length = 0
      for(let i=0;i<NODE_COUNT;i++){
        nodes.push({x: Math.random()*w, y: Math.random()*h, r: Math.random()*1.6+0.6})
      }
    }

    function draw(){
      ctx.clearRect(0,0,w,h)
      for(let i=0;i<nodes.length;i++){
        const a = nodes[i]
        ctx.beginPath()
        ctx.fillStyle = 'rgba(124,77,255,0.12)'
        ctx.arc(a.x,a.y,a.r,0,Math.PI*2)
        ctx.fill()
        for(let j=i+1;j<nodes.length;j++){
          const b = nodes[j]
          const dx = a.x-b.x
          const dy = a.y-b.y
          const d = Math.sqrt(dx*dx+dy*dy)
          if(d<150){
            ctx.strokeStyle = 'rgba(0,229,255,'+(1-d/150)*0.15+')'
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x,a.y)
            ctx.lineTo(b.x,b.y)
            ctx.stroke()
          }
        }
      }
    }

    let t = 0
    function update(){
      t++
      for(let i=0;i<nodes.length;i++){
        nodes[i].x += Math.sin(t/100 + i) * 0.3
        nodes[i].y += Math.cos(t/120 + i) * 0.3
      }
      draw()
      requestAnimationFrame(update)
    }

    function onResize(){
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      init()
    }

    init()
    update()
    window.addEventListener('resize', onResize)
    return ()=> window.removeEventListener('resize', onResize)
  },[])

  return <canvas ref={canvasRef} className="canvas-bg" />
}
