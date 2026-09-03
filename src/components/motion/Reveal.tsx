import { useEffect, useRef, useState, type ReactNode } from 'react'

export type RevealVariant = 'up' | 'left' | 'right' | 'scale' | 'fade'

type RevealProps = {
  children: ReactNode
  variant?: RevealVariant
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'span' | 'li' | 'article'
  threshold?: number
}

export default function Reveal({
  children,
  variant = 'up',
  delay = 0,
  className = '',
  as = 'div',
  threshold = 0.12,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState<boolean>(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  const Tag = as as 'div'
  return (
    <Tag
      ref={ref as never}
      className={`reveal reveal-${variant} ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
