import { useEffect, useRef, useState } from "react"

interface ParticlesProps {
  className?: string
  quantity?: number
  ease?: number
  color?: string
  refresh?: boolean
}

export const Particles = ({
  className = "",
  quantity = 100,
  ease = 80,
  color = "#ffffff",
  refresh = false,
}: ParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        setSize({
          width: canvasRef.current.offsetWidth,
          height: canvasRef.current.offsetHeight,
        })
      }
    }
    
    handleResize()
    window.addEventListener("resize", handleResize)
    
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const initParticles = () => {
      if (!canvasRef.current) return
      
      const ctx = canvasRef.current.getContext("2d")
      
      if (!ctx) return
      
      ctx.canvas.width = size.width
      ctx.canvas.height = size.height
      
      let particlesArray: Particle[] = []
      
      class Particle {
        x: number
        y: number
        dirX: number
        dirY: number
        size: number
        color: string
        
        constructor() {
          this.x = Math.random() * ctx.canvas.width
          this.y = Math.random() * ctx.canvas.height
          this.dirX = Math.random() * 2 - 1
          this.dirY = Math.random() * 2 - 1
          this.size = Math.random() * 5 + 1
          this.color = color
        }
        
        update() {
          if (ctx) {
            if (this.x > ctx.canvas.width || this.x < 0) {
              this.dirX = -this.dirX
            }
            if (this.y > ctx.canvas.height || this.y < 0) {
              this.dirY = -this.dirY
            }
          }
          
          this.x += this.dirX / ease
          this.y += this.dirY / ease
        }
        
        draw() {
          if (!ctx) return
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fillStyle = this.color
          ctx.fill()
        }
      }
      
      const init = () => {
        particlesArray = []
        for (let i = 0; i < quantity; i++) {
          particlesArray.push(new Particle())
        }
      }
      
      const animate = () => {
        if (!ctx) return
        
        requestAnimationFrame(animate)
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update()
          particlesArray[i].draw()
          
          // Connect particles with lines
          for (let j = i; j < particlesArray.length; j++) {
            const dx = particlesArray[i].x - particlesArray[j].x
            const dy = particlesArray[i].y - particlesArray[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)
            
            if (distance < 100) {
              ctx.beginPath()
              ctx.strokeStyle = color
              ctx.globalAlpha = 0.2
              ctx.lineWidth = 1
              ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
              ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
              ctx.stroke()
              ctx.globalAlpha = 1
            }
          }
        }
      }
      
      init()
      animate()
    }
    
    initParticles()
  }, [size, color, quantity, ease, refresh])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  )
}