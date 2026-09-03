import { useRef, useEffect } from 'react'

type NavProps = {
  text: { navWork: string; navJourney: string; navContact: string; availability: string }
  language: 'en' | 'fr'
  onToggleLanguage: () => void
  mobileMenuOpen: boolean
  onToggleMobileMenu: () => void
  onCloseMobileMenu: () => void
}

export default function Nav({ text, language, onToggleLanguage, mobileMenuOpen, onToggleMobileMenu, onCloseMobileMenu }: NavProps) {
  const isFrench = language === 'fr'
  const menuRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (mobileMenuOpen) {
      previouslyFocused.current = document.activeElement as HTMLElement
      document.body.style.overflow = 'hidden'
      const firstLink = menuRef.current?.querySelector('a') as HTMLElement
      firstLink?.focus()
    } else {
      document.body.style.overflow = ''
      previouslyFocused.current?.focus()
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseMobileMenu()
        return
      }
      if (e.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>('a, button')
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen, onCloseMobileMenu])

  return (
    <>
      <nav className="nav" aria-label="Main navigation">
        <a className="wordmark" href="#top">HOS<span>.</span></a>
        <div className="nav-links">
          <a href="#work">{text.navWork}</a>
          <a href="#journey">{text.navJourney}</a>
          <a href="#contact">{text.navContact}</a>
        </div>
        <div className="nav-tools">
          <button
            ref={hamburgerRef}
            className={`hamburger ${mobileMenuOpen ? 'is-open' : ''}`}
            type="button"
            onClick={onToggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span /><span /><span />
          </button>
          <button className="language-toggle" type="button" onClick={onToggleLanguage} aria-label="Change language">
            {isFrench ? 'EN' : 'FR'}
          </button>
          <a className="availability" href="mailto:sidibehamadounumar@gmail.com">
            <span /> {text.availability}
          </a>
        </div>
      </nav>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-overlay ${mobileMenuOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="mobile-overlay-content">
          <a href="#work" onClick={onCloseMobileMenu}>{text.navWork}</a>
          <a href="#journey" onClick={onCloseMobileMenu}>{text.navJourney}</a>
          <a href="#contact" onClick={onCloseMobileMenu}>{text.navContact}</a>
          <div className="mobile-overlay-tools">
            <button className="language-toggle" type="button" onClick={onToggleLanguage} aria-label="Change language">
              {isFrench ? 'EN' : 'FR'}
            </button>
            <a className="availability" href="mailto:sidibehamadounumar@gmail.com">
              <span /> {text.availability}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
