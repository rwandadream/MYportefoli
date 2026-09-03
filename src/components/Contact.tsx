type ContactProps = {
  contact: string
  contactTitle: React.ReactNode
  contactCopy: string
  start: string
}

import Reveal from './motion/Reveal'

export default function Contact({ contact, contactTitle, contactCopy, start }: ContactProps) {
  return (
    <section className="contact section-rule" id="contact">
      <Reveal variant="fade"><p className="section-index">{contact}</p></Reveal>
      <Reveal><h2>{contactTitle}</h2></Reveal>
      <Reveal delay={80}><p className="contact-copy">{contactCopy}</p></Reveal>
      <Reveal delay={140}>
        <a className="button button-primary" href="mailto:sidibehamadounumar@gmail.com">{start} <span aria-hidden="true">&#8599;</span></a>
      </Reveal>
      <div className="contact-links">
        <a href="https://github.com/rwandadream" target="_blank" rel="noreferrer">GitHub &#8599;</a>
        <a href="https://www.linkedin.com/in/hamadoun-o-sidibe" target="_blank" rel="noreferrer">LinkedIn &#8599;</a>
        <a href="mailto:sidibehamadounumar@gmail.com">sidibehamadounumar@gmail.com &#8599;</a>
      </div>
    </section>
  )
}
