import { useEffect, useState } from 'react'

interface UseCountUpOptions {
  end: number
  start?: number
  duration?: number
  enabled?: boolean
}

/**
 * Custom hook to animate numbers smoothly from start to end when enabled.
 */
export function useCountUp({
  end,
  start = 0,
  duration = 1800,
  enabled = true,
}: UseCountUpOptions): number {
  const [count, setCount] = useState<number>(enabled ? end : start)

  useEffect(() => {
    if (!enabled) return

    let startTime: number | null = null
    let animationFrameId: number

    const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3)

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.floor(start + (end - start) * easeOutCubic(progress))

      setCount(current)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    animationFrameId = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [end, start, duration, enabled])

  return count
}
