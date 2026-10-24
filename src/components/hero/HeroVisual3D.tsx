import { useEffect, useRef, useState } from 'react'
import type { FC } from 'react'
import { Link } from 'react-router-dom'
import {
  Users,
  Calendar,
  ShoppingBag,
  HelpCircle,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'
import { ROUTES } from '../../routes/routeConstants'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface Point3D {
  x: number
  y: number
  z: number
}

interface TriangleFace {
  indices: [number, number, number]
  normal?: Point3D
  centerZ?: number
}

export const HeroVisual3D: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const reducedMotion = useReducedMotion()

  // Mouse tilt tracking state
  const mousePos = useRef({ x: 0, y: 0 })
  const currentTilt = useRef({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let isRunning = true

    // Set canvas dimensions with Device Pixel Ratio for ultra-sharp rendering
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    // Base geometry: 12 vertices of an icosahedron (golden ratio construction)
    const phi = (1 + Math.sqrt(5)) / 2
    const baseScale = 90

    const rawVertices: Point3D[] = [
      { x: -1, y: phi, z: 0 },
      { x: 1, y: phi, z: 0 },
      { x: -1, y: -phi, z: 0 },
      { x: 1, y: -phi, z: 0 },

      { x: 0, y: -1, z: phi },
      { x: 0, y: 1, z: phi },
      { x: 0, y: -1, z: -phi },
      { x: 0, y: 1, z: -phi },

      { x: phi, y: 0, z: -1 },
      { x: phi, y: 0, z: 1 },
      { x: -phi, y: 0, z: -1 },
      { x: -phi, y: 0, z: 1 },
    ].map((v) => {
      const len = Math.hypot(v.x, v.y, v.z)
      return {
        x: (v.x / len) * baseScale,
        y: (v.y / len) * baseScale,
        z: (v.z / len) * baseScale,
      }
    })

    // 20 triangular faces of the icosahedron
    const faces: TriangleFace[] = [
      { indices: [0, 11, 5] },
      { indices: [0, 5, 1] },
      { indices: [0, 1, 7] },
      { indices: [0, 7, 10] },
      { indices: [0, 10, 11] },

      { indices: [1, 5, 9] },
      { indices: [5, 11, 4] },
      { indices: [11, 10, 2] },
      { indices: [10, 7, 6] },
      { indices: [7, 1, 8] },

      { indices: [3, 9, 4] },
      { indices: [3, 4, 2] },
      { indices: [3, 2, 6] },
      { indices: [3, 6, 8] },
      { indices: [3, 8, 9] },

      { indices: [4, 9, 5] },
      { indices: [2, 4, 11] },
      { indices: [6, 2, 10] },
      { indices: [8, 6, 7] },
      { indices: [9, 8, 1] },
    ]

    // 3D rotation helper
    function rotatePoint(p: Point3D, rotX: number, rotY: number, rotZ: number): Point3D {
      // Rotate around X
      let y1 = p.y * Math.cos(rotX) - p.z * Math.sin(rotX)
      let z1 = p.y * Math.sin(rotX) + p.z * Math.cos(rotX)
      let x1 = p.x

      // Rotate around Y
      let x2 = x1 * Math.cos(rotY) + z1 * Math.sin(rotY)
      let z2 = -x1 * Math.sin(rotY) + z1 * Math.cos(rotY)
      let y2 = y1

      // Rotate around Z
      let x3 = x2 * Math.cos(rotZ) - y2 * Math.sin(rotZ)
      let y3 = x2 * Math.sin(rotZ) + y2 * Math.cos(rotZ)
      let z3 = z2

      return { x: x3, y: y3, z: z3 }
    }

    let time = 0

    const render = () => {
      if (!isRunning) return

      const width = canvas.getBoundingClientRect().width
      const height = canvas.getBoundingClientRect().height
      const centerX = width / 2
      const centerY = height / 2 - 10

      ctx.clearRect(0, 0, width, height)

      // Time variables
      if (!reducedMotion) {
        time += 0.012
        // Smooth lerp pointer tilt
        currentTilt.current.x += (mousePos.current.x - currentTilt.current.x) * 0.05
        currentTilt.current.y += (mousePos.current.y - currentTilt.current.y) * 0.05
      }

      const rotY = time * 0.45 + currentTilt.current.x * 0.35
      const rotX = Math.sin(time * 0.3) * 0.2 + currentTilt.current.y * 0.35
      const rotZ = Math.cos(time * 0.2) * 0.1
      const floatY = Math.sin(time * 0.8) * 9

      // 1. Draw subtle metallic drop shadow on virtual floor
      const shadowGradient = ctx.createRadialGradient(
        centerX,
        centerY + 160 + floatY * 0.4,
        5,
        centerX,
        centerY + 160 + floatY * 0.4,
        140
      )
      shadowGradient.addColorStop(0, 'rgba(168, 85, 247, 0.22)')
      shadowGradient.addColorStop(0.5, 'rgba(217, 70, 239, 0.08)')
      shadowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

      ctx.save()
      ctx.beginPath()
      ctx.ellipse(
        centerX,
        centerY + 155 + floatY * 0.3,
        130 - floatY * 1.5,
        35 - floatY * 0.5,
        0,
        0,
        Math.PI * 2
      )
      ctx.fillStyle = shadowGradient
      ctx.fill()
      ctx.restore()

      // 2. Draw ambient plasma glow aura behind sculpture
      const auraGradient = ctx.createRadialGradient(
        centerX,
        centerY + floatY,
        20,
        centerX,
        centerY + floatY,
        190
      )
      auraGradient.addColorStop(0, 'rgba(168, 85, 247, 0.35)')
      auraGradient.addColorStop(0.4, 'rgba(192, 132, 252, 0.15)')
      auraGradient.addColorStop(0.7, 'rgba(217, 70, 239, 0.06)')
      auraGradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

      ctx.save()
      ctx.fillStyle = auraGradient
      ctx.beginPath()
      ctx.arc(centerX, centerY + floatY, 190, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()

      // 3. Draw outer luminous orbital ring (tilted 3D ellipse)
      ctx.save()
      ctx.translate(centerX, centerY + floatY)
      ctx.rotate(0.35 + currentTilt.current.x * 0.1)
      ctx.scale(1, 0.38)

      // Ring 1 glow
      ctx.beginPath()
      ctx.arc(0, 0, 160, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.35)'
      ctx.lineWidth = 1.5
      ctx.setLineDash([8, 8])
      ctx.lineDashOffset = -time * 12
      ctx.stroke()

      // Traveling photon 1 on ring
      const photonAngle1 = time * 0.8
      const px1 = Math.cos(photonAngle1) * 160
      const py1 = Math.sin(photonAngle1) * 160
      ctx.beginPath()
      ctx.arc(px1, py1, 3.5, 0, Math.PI * 2)
      ctx.fillStyle = '#ffffff'
      ctx.shadowColor = '#c084fc'
      ctx.shadowBlur = 12
      ctx.fill()

      ctx.restore()

      // 4. Draw second crossing orbital ring
      ctx.save()
      ctx.translate(centerX, centerY + floatY)
      ctx.rotate(-0.45 - currentTilt.current.y * 0.1)
      ctx.scale(1, 0.34)

      ctx.beginPath()
      ctx.arc(0, 0, 135, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(217, 70, 239, 0.35)'
      ctx.lineWidth = 1.2
      ctx.setLineDash([6, 10])
      ctx.lineDashOffset = time * 15
      ctx.stroke()

      // Traveling photon 2 on ring
      const photonAngle2 = -time * 0.9 + Math.PI
      const px2 = Math.cos(photonAngle2) * 135
      const py2 = Math.sin(photonAngle2) * 135
      ctx.beginPath()
      ctx.arc(px2, py2, 3, 0, Math.PI * 2)
      ctx.fillStyle = '#ffffff'
      ctx.shadowColor = '#f472b6'
      ctx.shadowBlur = 10
      ctx.fill()

      ctx.restore()

      // 5. Rotate 3D vertices
      const fov = 380
      const rotatedVertices = rawVertices.map((v) => {
        const rotated = rotatePoint(v, rotX, rotY, rotZ)
        // Perspective projection
        const scale = fov / (fov + rotated.z)
        return {
          ...rotated,
          projX: centerX + rotated.x * scale,
          projY: centerY + floatY + rotated.y * scale,
          scale,
        }
      })

      // 6. Calculate face depths, normals, and lighting
      const sortedFaces = faces
        .map((face) => {
          const v0 = rotatedVertices[face.indices[0]]
          const v1 = rotatedVertices[face.indices[1]]
          const v2 = rotatedVertices[face.indices[2]]

          // Average Z for depth sorting
          const centerZ = (v0.z + v1.z + v2.z) / 3

          // Calculate surface normal (v1 - v0) x (v2 - v0)
          const ax = v1.x - v0.x
          const ay = v1.y - v0.y
          const az = v1.z - v0.z

          const bx = v2.x - v0.x
          const by = v2.y - v0.y
          const bz = v2.z - v0.z

          const nx = ay * bz - az * by
          const ny = az * bx - ax * bz
          const nz = ax * by - ay * bx
          const nLen = Math.hypot(nx, ny, nz) || 1

          const normal: Point3D = {
            x: nx / nLen,
            y: ny / nLen,
            z: nz / nLen,
          }

          return { ...face, centerZ, normal }
        })
        .sort((a, b) => a.centerZ - b.centerZ) // Back-to-front rendering

      // 7. Light source vectors
      // Light 1: Electric Violet (Top Left Front)
      const l1: Point3D = { x: -0.6, y: -0.6, z: 0.6 }
      const l1Len = Math.hypot(l1.x, l1.y, l1.z)
      const light1 = { x: l1.x / l1Len, y: l1.y / l1Len, z: l1.z / l1Len }

      // Light 2: Neon Magenta (Bottom Right Front)
      const l2: Point3D = { x: 0.7, y: 0.6, z: 0.4 }
      const l2Len = Math.hypot(l2.x, l2.y, l2.z)
      const light2 = { x: l2.x / l2Len, y: l2.y / l2Len, z: l2.z / l2Len }

      // View vector (pointing towards camera [0, 0, 1])
      const view: Point3D = { x: 0, y: 0, z: 1 }

      // 8. Render polygonal faces
      for (const face of sortedFaces) {
        const v0 = rotatedVertices[face.indices[0]]
        const v1 = rotatedVertices[face.indices[1]]
        const v2 = rotatedVertices[face.indices[2]]

        const norm = face.normal!
        // Diffuse components
        const dot1 = Math.max(0, norm.x * light1.x + norm.y * light1.y + norm.z * light1.z)
        const dot2 = Math.max(0, norm.x * light2.x + norm.y * light2.y + norm.z * light2.z)

        // Specular component
        // Blinn-Phong half-angle
        const hx = light1.x + view.x
        const hy = light1.y + view.y
        const hz = light1.z + view.z
        const hLen = Math.hypot(hx, hy, hz) || 1
        const specDot = Math.max(0, norm.x * (hx / hLen) + norm.y * (hy / hLen) + norm.z * (hz / hLen))
        const specular = Math.pow(specDot, 18)

        // Rim lighting effect
        const rim = Math.pow(1 - Math.abs(norm.z), 2.2)

        // Face metallic shading
        ctx.beginPath()
        ctx.moveTo(v0.projX, v0.projY)
        ctx.lineTo(v1.projX, v1.projY)
        ctx.lineTo(v2.projX, v2.projY)
        ctx.closePath()

        // Metallic gradient fill across the triangle
        const grad = ctx.createLinearGradient(v0.projX, v0.projY, v2.projX, v2.projY)

        // Base metallic violet tone
        const r = Math.floor(18 + dot1 * 85 + dot2 * 140 + specular * 180 + rim * 90)
        const g = Math.floor(12 + dot1 * 50 + dot2 * 35 + specular * 180 + rim * 60)
        const b = Math.floor(38 + dot1 * 180 + dot2 * 170 + specular * 220 + rim * 180)

        const r2 = Math.floor(10 + dot1 * 50 + dot2 * 100 + specular * 120)
        const g2 = Math.floor(8 + dot1 * 30 + dot2 * 25 + specular * 120)
        const b2 = Math.floor(25 + dot1 * 130 + dot2 * 110 + specular * 160)

        grad.addColorStop(0, `rgb(${r}, ${g}, ${b})`)
        grad.addColorStop(1, `rgb(${r2}, ${g2}, ${b2})`)

        ctx.fillStyle = grad
        ctx.fill()

        // Glowing faceted wireframe edges
        ctx.strokeStyle = `rgba(192, 132, 252, ${0.25 + rim * 0.5 + dot1 * 0.2})`
        ctx.lineWidth = 1.1
        ctx.stroke()
      }

      // 9. Draw vertex specular sparkles / glowing nodes
      for (const v of rotatedVertices) {
        if (v.z > 0) {
          const nodeGlow = (v.z / baseScale) * 0.8
          ctx.beginPath()
          ctx.arc(v.projX, v.projY, 1.8 + nodeGlow, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(244, 215, 255, ${0.4 + nodeGlow * 0.5})`
          ctx.shadowColor = '#c084fc'
          ctx.shadowBlur = 6
          ctx.fill()
        }
      }

      // Loop only if motion enabled
      if (!reducedMotion) {
        animationFrameId = requestAnimationFrame(render)
      }
    }

    render()

    return () => {
      isRunning = false
      window.removeEventListener('resize', handleResize)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [reducedMotion])

  // Mouse move handler for interactive parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mousePos.current = { x: x * 1.2, y: y * 1.2 }
  }

  const handleMouseLeave = () => {
    mousePos.current = { x: 0, y: 0 }
    setIsHovered(false)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none"
      aria-label="Interactive 3D Futuristic CampusPulse Core"
    >
      {/* Background Soft Glow Orbs behind sculpture */}
      <div
        className="pointer-events-none absolute w-72 h-72 rounded-full bg-purple-600/25 blur-[90px] -z-10 animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute w-60 h-60 rounded-full bg-fuchsia-600/20 blur-[80px] -z-10 translate-x-12 translate-y-8"
        aria-hidden="true"
      />

      {/* Real-time 3D Canvas Centerpiece */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-grab active:cursor-grabbing transition-transform duration-300"
        style={{
          transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        }}
      />

      {/* Floating Glassmorphic Elements (Surrounding Satellites) */}

      {/* 1. Clubs Element (Top Right) */}
      <div className="absolute -top-1 -right-2 sm:right-0 md:-right-4 animate-float-slow animation-delay-200">
        <Link
          to={ROUTES.CLUBS}
          className="glass-badge group flex items-center gap-3 px-3.5 py-2.5 rounded-2xl border border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all cursor-pointer backdrop-blur-md"
        >
          <div className="w-8 h-8 rounded-xl bg-purple-950/70 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:text-white transition-colors">
            <Users className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-white tracking-tight">Campus Clubs</span>
              <span className="text-[9px] font-mono font-semibold px-1 py-0.2 rounded bg-purple-500/20 text-purple-300">
                42+
              </span>
            </div>
            <p className="text-[10px] text-purple-300/70 font-medium">Tech & Cultural Hubs</p>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-purple-400 opacity-60 group-hover:opacity-100 transition-opacity" />
        </Link>
      </div>

      {/* 2. Events Element (Bottom Right) */}
      <div className="absolute -bottom-2 -right-1 sm:right-2 md:-right-2 animate-float-medium animation-delay-400">
        <Link
          to={ROUTES.EVENTS}
          className="glass-badge group flex items-center gap-3 px-3.5 py-2.5 rounded-2xl border border-fuchsia-500/30 hover:border-fuchsia-400 hover:shadow-[0_0_20px_rgba(217,70,239,0.4)] transition-all cursor-pointer backdrop-blur-md"
        >
          <div className="w-8 h-8 rounded-xl bg-fuchsia-950/70 border border-fuchsia-500/40 flex items-center justify-center text-fuchsia-300 group-hover:text-white transition-colors">
            <Calendar className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-white tracking-tight">Live Events</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <p className="text-[10px] text-fuchsia-200/70 font-medium">RoboWars 2026 Soon</p>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-fuchsia-400 opacity-60 group-hover:opacity-100 transition-opacity" />
        </Link>
      </div>

      {/* 3. Student Help Element (Bottom Left) */}
      <div className="absolute -bottom-1 -left-2 sm:left-0 md:-left-4 animate-float-reverse animation-delay-500">
        <Link
          to={ROUTES.HELP}
          className="glass-badge group flex items-center gap-3 px-3.5 py-2.5 rounded-2xl border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all cursor-pointer backdrop-blur-md"
        >
          <div className="w-8 h-8 rounded-xl bg-cyan-950/70 border border-cyan-500/40 flex items-center justify-center text-cyan-300 group-hover:text-white transition-colors">
            <HelpCircle className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-white tracking-tight">Peer Help</span>
              <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-cyan-500/20 text-cyan-300">
                24/7
              </span>
            </div>
            <p className="text-[10px] text-cyan-200/70 font-medium">Lost & Found • Study</p>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
        </Link>
      </div>

      {/* 4. Marketplace Element (Top Left) */}
      <div className="absolute top-10 -left-3 sm:-left-1 md:-left-6 animate-float-fast animation-delay-100">
        <Link
          to={ROUTES.MARKETPLACE}
          className="glass-badge group flex items-center gap-3 px-3.5 py-2.5 rounded-2xl border border-violet-500/30 hover:border-violet-400 hover:shadow-[0_0_20px_rgba(192,132,252,0.4)] transition-all cursor-pointer backdrop-blur-md"
        >
          <div className="w-8 h-8 rounded-xl bg-violet-950/70 border border-violet-500/40 flex items-center justify-center text-violet-300 group-hover:text-white transition-colors">
            <ShoppingBag className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-white tracking-tight">Marketplace</span>
              <Sparkles className="w-2.5 h-2.5 text-violet-300" />
            </div>
            <p className="text-[10px] text-violet-200/70 font-medium">Textbooks & Kits</p>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-violet-400 opacity-60 group-hover:opacity-100 transition-opacity" />
        </Link>
      </div>
    </div>
  )
}
