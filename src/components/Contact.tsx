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
          <a
            className="button button-primary"
            href="https://wa.me/2250749670336?text=Bonjour%20Hamadoun%2C%20je%20viens%20de%20visiter%20ton%20portfolio."
            target="_blank"
            rel="noreferrer"
          >
            {start} <span aria-hidden="true">&#8599;</span>
          </a>
      </Reveal>
      <div className="contact-links">
        <a href="https://github.com/rwandadream" target="_blank" rel="noreferrer">GitHub &#8599;</a>
        <a href="https://www.linkedin.com/in/hamadoun-o-sidibe" target="_blank" rel="noreferrer">LinkedIn &#8599;</a>
          <a href="https://wa.me/22378489616" target="_blank" rel="noreferrer">WhatsApp Mali &#8599;</a>
          <a href="https://wa.me/2250749670336" target="_blank" rel="noreferrer">WhatsApp Côte d’Ivoire &#8599;</a>
          <a href="mailto:sidibehamadounumar@gmail.com">sidibehamadounumar@gmail.com &#8599;</a>
      </div>
    </section>
  )
}
