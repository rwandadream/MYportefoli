import { useCallback, useEffect, useRef, type ReactNode } from 'react'

type ParallaxProps = {
  children: ReactNode
  className?: string
  /** multiplier for mouse x/y movement applied to transform translate */
  mouseFactor?: number
}

/**
 * Lightweight parallax:
 * - optional mouse drift on fine pointers, disabled on touch/reduced-motion
 */
export default function Parallax({ children, className = '', mouseFactor = 0 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const mouseState = useRef({ x: 0, y: 0 })
  const targetMouse = useRef({ x: 0, y: 0 })
  const frame = useRef(0)

  const enabled = useCallback(() => {
    if (typeof window === 'undefined') return false
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    if (window.innerWidth <= 1024) return false
    return true
  }, [])

  useEffect(() => {
    if (!enabled()) return
    const el = ref.current
    if (!el) return

    const onMouse = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5)
      const ny = (e.clientY / window.innerHeight - 0.5)
      targetMouse.current = { x: nx, y: ny }
    }

    const tick = () => {
      const drift = mouseFactor
      mouseState.current.x += (targetMouse.current.x - mouseState.current.x) * 0.08
      mouseState.current.y += (targetMouse.current.y - mouseState.current.y) * 0.08
      const mx = mouseState.current.x * drift * 30
      const my = mouseState.current.y * drift * 30
      el.style.transform = `translate3d(${mx.toFixed(2)}px, ${my.toFixed(2)}px, 0)`
      frame.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMouse)
    frame.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMouse)
      cancelAnimationFrame(frame.current)
    }
  }, [enabled, mouseFactor])

  return (
    <div
      ref={ref}
      className={`parallax ${className}`}
      style={{ willChange: mouseFactor ? 'transform' : 'auto', transform: 'translateZ(0)' }}
    >
      {children}
    </div>
  )
}
