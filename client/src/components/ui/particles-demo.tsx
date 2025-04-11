import { useEffect, useState } from "react"
import { Particles } from "./particles"

export function ParticlesDemo() {
  const [color, setColor] = useState("#007bff") // Using a blue color by default
  
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-primary to-primary/60 bg-clip-text text-center text-6xl md:text-8xl font-semibold leading-none text-transparent">
        Digital Transformation
      </span>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  )
}