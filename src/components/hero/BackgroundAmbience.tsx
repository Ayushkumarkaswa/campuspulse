import { useEffect, useRef } from 'react'
import type { FC } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
  color: string
}

export const BackgroundAmbience: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    // Generate 28 delicate drifting neon specks
    const particleColors = [
      'rgba(168, 85, 247, ', // Violet
      'rgba(217, 70, 239, ', // Magenta
      'rgba(192, 132, 252, ', // Lavender
    ]

    const particles: Particle[] = Array.from({ length: 28 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: -0.12 - Math.random() * 0.18, // Drifting upwards
      radius: Math.random() * 1.4 + 0.6,
      alpha: Math.random() * 0.35 + 0.1,
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
    }))

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        // Wrap around boundaries
        if (p.y < 0) p.y = height
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${p.alpha})`
        ctx.shadowColor = '#c084fc'
        ctx.shadowBlur = 4
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [reducedMotion])

  if (reducedMotion) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden -z-10 select-none"
      aria-hidden="true"
    >
      {/* Tiny Drifting Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-55" />
    </div>
  )
}
