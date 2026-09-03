type AboutProps = {
  about: string
  aboutTitle: React.ReactNode
  aboutCopy: string
  aboutCopy2: string
  journeyLink: string
}

import Reveal from './motion/Reveal'

export default function About({ about, aboutTitle, aboutCopy, aboutCopy2, journeyLink }: AboutProps) {
  return (
    <section className="intro section-rule">
      <Reveal variant="fade"><p className="section-index">{about}</p></Reveal>
      <div className="intro-content">
        <Reveal><h2>{aboutTitle}</h2></Reveal>
        <Reveal delay={120}>
          <div className="intro-text">
            <p>{aboutCopy}</p>
            <p>{aboutCopy2}</p>
            <a className="text-link" href="#journey">{journeyLink} <span aria-hidden="true">&#8599;</span></a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
