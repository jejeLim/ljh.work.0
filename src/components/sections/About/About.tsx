import { useState } from 'react'
import aboutBlur from '@/assets/deco/about-blur-circle.svg'
import aboutEllipse from '@/assets/deco/about-ellipse.svg'
import { ABOUT_TABS, CONTACT, PROFILE } from '@/data/portfolio'
import { SectionLabel } from '@/components/ui/SectionLabel/SectionLabel'
import { Pill } from '@/components/ui/Pill/Pill'
import { ExploreBadge } from '@/components/ui/ExploreBadge/ExploreBadge'
import { Reveal } from '@/components/ui/Reveal/Reveal'
import s from './About.module.scss'

const FLOATING = [
  { label: '✦ branding', cls: 'pillA' },
  { label: '✎ ui / ux', cls: 'pillB' },
  { label: '◎ publishing', cls: 'pillC' },
] as const

export function About() {
  const [tab, setTab] = useState(0)
  const active = ABOUT_TABS[tab]

  return (
    <section id="about" className={s.about}>
      <div className={s.inner}>
        <Reveal variant="fade">
          <SectionLabel>ABOUT ME</SectionLabel>
        </Reveal>
      </div>

      <div className={s.grid}>
        {/* ── Left: 이름 + 타이포 카드 ── */}
        <div className={s.left}>
          <div className={s.head}>
            <Reveal as="h2" className={s.name} variant="up">
              {PROFILE.nameEn}
            </Reveal>
            <Reveal as="p" className={s.role} delay={80}>
              UX/UI Designer &amp;
              <br />
              Web Publisher
            </Reveal>
            <Reveal delay={140}>
              <Pill href={`mailto:${CONTACT.email}`} size="sm">
                {CONTACT.email}&nbsp;&nbsp;↗
              </Pill>
            </Reveal>
          </div>

          <div className={s.portraitWrap}>
            <Reveal variant="scale" className={s.portraitReveal}>
              <div className={s.portrait}>
                <p className={s.portraitName}>
                  Lim
                  <br />
                  Ji hye
                </p>
                <p className={s.portraitKo}>{PROFILE.nameKo}</p>
                <p className={s.portraitMeta}>
                  {PROFILE.years} YEARS · DESIGN &amp; PUBLISHING · SINCE {PROFILE.since}
                </p>
              </div>
            </Reveal>
            <ExploreBadge size={120} className={s.badge} href="#works" />
          </div>
        </div>

        {/* ── Right: 탭 + 소개 ── */}
        <div className={s.right}>
          <div className={s.tabs} role="tablist" aria-label="about tabs">
            {ABOUT_TABS.map((t, i) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={i === tab}
                className={[s.tab, i === tab && s.tabActive].filter(Boolean).join(' ')}
                onClick={() => setTab(i)}
              >
                <span className={s.tabLabel}>{t.label}</span>
                <span className={s.tabNum}>{t.num}</span>
              </button>
            ))}
          </div>

          <div className={s.stage}>
            <img src={aboutBlur} alt="" className={s.blur} />
            <img src={aboutEllipse} alt="" className={s.ellipse} />

            <div key={active.id} className={s.content}>
              <h3 className={s.stageTitle}>{active.title}</h3>
              <p className={s.stageBody}>
                {active.body.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < active.body.length - 1 && <br />}
                  </span>
                ))}
              </p>
              <Pill arrow href={active.id === 'scope' ? '#services' : active.id === 'skills' ? '#skills' : '#works'} className={s.readMore}>
                read more
              </Pill>
            </div>

            {FLOATING.map((f, i) => (
              <Pill key={f.label} variant="ghost" className={[s.floating, s[f.cls]].join(' ')} href="#works">
                <span style={{ animationDelay: `${i * 0.6}s` }}>{f.label}</span>
              </Pill>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
