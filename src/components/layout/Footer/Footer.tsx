import { CONTACT, PROFILE } from '@/data/portfolio'
import { SectionLabel } from '@/components/ui/SectionLabel/SectionLabel'
import { KakaoContact } from '@/components/ui/KakaoContact/KakaoContact'
import { Reveal } from '@/components/ui/Reveal/Reveal'
import s from './Footer.module.scss'

const CONTACT_ROWS = [
  { label: 'KakaoTalk', value: CONTACT.kakao, href: undefined, note: '주 연락처' },
  { label: 'Mobile', value: CONTACT.mobile, href: `tel:${CONTACT.mobile.replace(/\s/g, '')}` },
  { label: 'E-mail', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
] as const

export function Footer() {
  return (
    <footer id="contact" className={s.footer}>
      <div className={s.inner}>
        <Reveal variant="fade">
          <SectionLabel light>CONTACT</SectionLabel>
        </Reveal>

        <h2 className={s.title}>
          <Reveal as="span" variant="clip" className={s.line1}>
            <span>Let’s work</span>
          </Reveal>
          <Reveal as="span" variant="clip" delay={160} className={s.line2}>
            <span>together.</span>
          </Reveal>
        </h2>

        <Reveal className={s.row} delay={200}>
          <a href={`mailto:${CONTACT.email}`} className={s.email}>
            {CONTACT.email}
          </a>
          <KakaoContact variant="cream" arrow className={s.cta}>
            Contact me
          </KakaoContact>
        </Reveal>

        <div className={s.rule} />

        <div className={s.bottom}>
          <ul className={s.social}>
            {CONTACT_ROWS.map((c) => (
              <li key={c.label}>
                <span className={s.contactLabel}>{c.label}</span>
                {c.href ? <a href={c.href}>{c.value}</a> : <span className={s.contactValue}>{c.value}</span>}
                {'note' in c && c.note && <span className={s.contactNote}>{c.note}</span>}
              </li>
            ))}
          </ul>
          <p className={s.copy}>© 2026 {PROFILE.nameEn}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
