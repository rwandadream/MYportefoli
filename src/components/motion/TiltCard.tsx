import { useEffect, useRef, useState, type ReactNode } from 'react'

type Media =
  | 'desktop'
  | 'touch'

function getMedia(): Media {
  if (typeof window === 'undefined') return 'desktop'
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) return 'touch'
  if (typeof window.matchMedia === 'function' && window.matchMedia('(pointer: coarse)').matches) return 'touch'
  if (window.innerWidth <= 1024) return 'touch'
  return 'desktop'
}

function getMaxRotation(): number {
  if (typeof window === 'undefined') return 4
  if (window.innerWidth <= 700) return 0
  if (window.innerWidth <= 1024) return 1.5
  return 4
}

type TiltCardProps = {
  children: ReactNode
  className?: string
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [media] = useState<Media>(() => getMedia())
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    if (media === 'touch') return
    const card = cardRef.current
    if (!card) return

    let raf = 0

    const onMove = (e: MouseEvent) => {
      const max = getMaxRotation()
      const rect = card.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      const rx = (0.5 - py) * max
      const ry = (px - 0.5) * max
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        card.style.transform = `perspective(1200px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`
      })
    }

    const onLeave = () => {
      if (raf) cancelAnimationFrame(raf)
      card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)'
    }

    card.addEventListener('mousemove', onMove)
    card.addEventListener('mouseleave', onLeave)
    return () => {
      card.removeEventListener('mousemove', onMove)
      card.removeEventListener('mouseleave', onLeave)
    }
  }, [media])

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${media} ${ready ? 'is-ready' : ''} ${className}`}
      style={{ transformStyle: 'preserve-3d', transition: ready ? 'transform 0.15s ease-out' : undefined }}
    >
      {children}
    </div>
  )
}
