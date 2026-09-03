import profileImage from '../assets/leh.jpeg'
import Parallex from './motion/Parallax'
import Reveal from './motion/Reveal'

type HeroProps = {
  eyebrow: string
  heroTitle: React.ReactNode
  heroCopy: string
  view: string
  talk: string
}

export default function Hero({ eyebrow, heroTitle, heroCopy, view, talk }: HeroProps) {
  return (
    <section className="hero" id="top">
      <Reveal variant="fade"><p className="eyebrow">{eyebrow}</p></Reveal>
      <Reveal variant="up" delay={80}><h1>{heroTitle}</h1></Reveal>
      <div className="hero-bottom">
        <Reveal variant="left" delay={160}>
          <p className="hero-copy">{heroCopy}</p>
        </Reveal>
        <Reveal variant="left" delay={240}>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">{view} <span aria-hidden="true">&#8599;</span></a>
            <a className="button button-quiet" href="mailto:sidibehamadounumar@gmail.com">{talk} <span aria-hidden="true">&#8599;</span></a>
          </div>
        </Reveal>
      </div>
      <Parallex mouseFactor={0.35} className="hero-deco">
        <div className="hero-mark" aria-hidden="true">HOS<span>/</span>26</div>
      </Parallex>
      <Parallex mouseFactor={0.18} className="hero-image-wrap">
        <img
          className="profile-image"
          src={profileImage}
          alt="Portrait of Hamadoun Oumarou Sidibe"
          fetchPriority="high"
          width="300"
          height="400"
        />
      </Parallex>
    </section>
  )
}
