import { useEffect, type CSSProperties } from 'react'
import arrowLight from '@/assets/icons/arrow-light.svg'
import { CASES, getCase, type CaseId } from '@/data/cases'
import { useReveal } from '@/hooks/useReveal'
import { useScrolled } from '@/hooks/useScrolled'
import { SectionLabel } from '@/components/ui/SectionLabel/SectionLabel'
import { Pill } from '@/components/ui/Pill/Pill'
import { Reveal } from '@/components/ui/Reveal/Reveal'
import s from './CaseStudy.module.scss'

interface Props {
  id: CaseId
}

/** 케이스 페이지는 /case/{id}/ 에 있으므로 루트와 사이트까지의 상대 경로 */
const ROOT = '../../'
const LIVE = (id: CaseId) => `${ROOT}sites/${id}/`
const CASE = (id: CaseId) => `../${id}/`

export function CaseStudy({ id }: Props) {
  const c = getCase(id)
  const idx = CASES.findIndex((x) => x.id === id)
  const prev = CASES[(idx - 1 + CASES.length) % CASES.length]
  const next = CASES[(idx + 1) % CASES.length]
  const scrolled = useScrolled(40)
  useReveal()

  useEffect(() => {
    document.title = `${c.name} — Case Study | LIM JIHYE`
  }, [c.name])

  return (
    <div className={s.page} style={{ '--accent': c.accent, '--accent2': c.accent2 } as CSSProperties}>
      {/* ── Top bar ── */}
      <header className={[s.bar, scrolled && s.barScrolled].filter(Boolean).join(' ')}>
        <div className={s.barInner}>
          <a href={`${ROOT}#websites`} className={s.back}>
            ← Portfolio
          </a>
          <span className={s.barTitle}>
            {c.num}&nbsp; {c.name}
          </span>
          <Pill href={LIVE(c.id)} external size="sm">
            Live site ↗
          </Pill>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className={[s.hero, c.dark && s.heroDark].filter(Boolean).join(' ')}>
          <span className={s.heroGlow} aria-hidden="true" />
          <div className={s.inner}>
            <Reveal variant="fade">
              <span className={s.kicker}>CASE STUDY · {c.num}</span>
            </Reveal>
            <Reveal as="h1" className={s.title}>
              {c.name}
            </Reveal>
            <Reveal as="p" className={s.heroKicker} delay={60}>
              {c.kicker}
            </Reveal>
            <Reveal as="p" className={s.tagline} delay={120}>
              {c.tagline}
            </Reveal>

            <Reveal as="dl" className={s.meta} delay={180}>
              {c.meta.map((m) => (
                <div key={m.label}>
                  <dt>{m.label}</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
            </Reveal>

            <Reveal variant="scale" delay={240} className={s.heroShot}>
              <a href={LIVE(c.id)} target="_blank" rel="noopener noreferrer" className={s.browser} aria-label={`${c.name} 라이브 사이트 열기`}>
                <span className={s.chrome}>
                  <i />
                  <i />
                  <i />
                  <b>{c.name.toLowerCase().replace(/\s/g, '')}.landing</b>
                </span>
                <img src={c.responsive.breakpoints[0].image} alt={`${c.name} 데스크톱 첫 화면`} />
              </a>
            </Reveal>
          </div>
        </section>

        {/* ── 01 Concept ── */}
        <section className={s.section} id="concept">
          <div className={s.inner}>
            <div className={s.sectionHead}>
              <Reveal variant="fade">
                <SectionLabel>01 · 메인 컨셉</SectionLabel>
              </Reveal>
              <Reveal as="h2" className={s.h2}>
                {c.concept.title}
              </Reveal>
            </div>
            <div className={s.conceptGrid}>
              <div className={s.conceptBody}>
                {c.concept.body.map((p, i) => (
                  <Reveal as="p" key={i} delay={i * 80}>
                    {p}
                  </Reveal>
                ))}
                <Reveal as="ul" className={s.keywords} delay={160}>
                  {c.concept.keywords.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </Reveal>
              </div>
              <Reveal className={s.layoutCard} variant="right">
                <p className={s.cardLabel}>Layout principles</p>
                <ol className={s.layoutList}>
                  {c.concept.layout.map((l, i) => (
                    <li key={i}>
                      <span>{String(i + 1).padStart(2, '0')}</span>
                      {l}
                    </li>
                  ))}
                </ol>
                <p className={s.cardLabel} style={{ marginTop: 28 }}>
                  Sections
                </p>
                <ul className={s.sectionsList}>
                  {c.sections.map((sec) => (
                    <li key={sec}>{sec}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 02 Colors ── */}
        <section className={[s.section, s.sectionAlt].join(' ')} id="colors">
          <div className={s.inner}>
            <div className={s.sectionHead}>
              <Reveal variant="fade">
                <SectionLabel>02 · 브랜드 색상</SectionLabel>
              </Reveal>
              <Reveal as="h2" className={s.h2}>
                Color system
              </Reveal>
              <Reveal as="p" className={s.lead} delay={60}>
                원본 CSS의 :root 변수로 정의한 팔레트입니다. 색은 변수로만 참조해, 한 곳만 바꾸면 전체 톤이 함께 바뀝니다.
              </Reveal>
            </div>
            <ul className={s.swatches}>
              {c.colors.map((col, i) => (
                <Reveal as="li" key={col.name} delay={i * 50} className={[s.swatch, col.gradient && s.swatchWide].filter(Boolean).join(' ')}>
                  <span className={s.chip} style={{ background: col.value, color: col.light ? '#1e1a18' : '#fff' }}>
                    <b>{col.name}</b>
                  </span>
                  <span className={s.swatchMeta}>
                    <code>{col.gradient ? col.value.replace('linear-gradient(90deg,', '').replace(')', '').split(',').join(' → ') : col.value.toUpperCase()}</code>
                    <em>{col.role}</em>
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 03 Type & Components ── */}
        <section className={s.section} id="components">
          <div className={s.inner}>
            <div className={s.sectionHead}>
              <Reveal variant="fade">
                <SectionLabel>03 · 컴포넌트 정리 및 사용</SectionLabel>
              </Reveal>
              <Reveal as="h2" className={s.h2}>
                Type scale &amp; Components
              </Reveal>
              <Reveal as="p" className={s.lead} delay={60}>
                피그마의 Foundations · Components 프레임과 같은 순서로, 서체 스케일을 먼저 정의하고 반복되는 UI를 컴포넌트로 묶어 각 섹션에서 재사용했습니다.
              </Reveal>
            </div>

            <Reveal className={s.typeCard}>
              <p className={s.cardLabel}>Typography · {c.fonts.join(' / ')}</p>
              <ul className={s.typeList}>
                {c.type.map((t) => (
                  <li key={t.name}>
                    <span className={s.typeName}>{t.name}</span>
                    <span
                      className={s.typeSample}
                      style={{
                        fontFamily: t.family,
                        fontSize: t.size,
                        fontWeight: t.weight,
                        fontStyle: t.italic ? 'italic' : 'normal',
                        letterSpacing: t.letterSpacing,
                      }}
                    >
                      {t.sample}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <ul className={s.components}>
              {c.components.map((comp, i) => (
                <Reveal as="li" key={comp.name} className={s.component} delay={(i % 3) * 80}>
                  <span className={s.compNum}>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{comp.name}</h3>
                  <p>{comp.desc}</p>
                  <span className={s.compUsage}>
                    <i>Used in</i> {comp.usage}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 04 Responsive ── */}
        <section className={[s.section, s.sectionAlt].join(' ')} id="responsive">
          <div className={s.inner}>
            <div className={s.sectionHead}>
              <Reveal variant="fade">
                <SectionLabel>04 · 반응형 웹앱</SectionLabel>
              </Reveal>
              <Reveal as="h2" className={s.h2}>
                Responsive web app
              </Reveal>
              <Reveal as="p" className={s.lead} delay={60}>
                {c.responsive.intro}
              </Reveal>
            </div>

            <ul className={s.devices}>
              {c.responsive.breakpoints.map((bp, i) => (
                <Reveal as="li" key={bp.label} className={[s.device, s[`device${bp.label}`]].join(' ')} delay={i * 120} variant="up">
                  <div className={s.deviceHead}>
                    <b>{bp.label}</b>
                    <span>{bp.width}px</span>
                  </div>
                  <div className={s.deviceFrame}>
                    <img src={bp.image} alt={`${c.name} ${bp.label} 화면`} loading="lazy" />
                  </div>
                  <ul className={s.deviceNotes}>
                    {bp.notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ul>

            <Reveal className={s.rulesCard} delay={100}>
              <p className={s.cardLabel}>Responsive rules</p>
              <ul className={s.rules}>
                {c.responsive.rules.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={s.cta}>
          <div className={s.inner}>
            <Reveal className={s.ctaCard} variant="scale">
              <p className={s.kicker}>LIVE SITE</p>
              <h2 className={s.ctaTitle}>{c.name} 실제 페이지 보기</h2>
              <p className={s.ctaDesc}>데스크톱·태블릿·모바일에서 직접 줄여 보며 반응형 동작을 확인해 보세요.</p>
              <a href={LIVE(c.id)} target="_blank" rel="noopener noreferrer" className={s.ctaBtn}>
                Open {c.name}
                <span className={s.ctaIcon}>
                  <img src={arrowLight} alt="" width={16} height={16} />
                </span>
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ── Footer nav ── */}
      <footer className={s.footer}>
        <div className={s.inner}>
          <nav className={s.footNav} aria-label="case navigation">
            <a href={CASE(prev.id)} className={s.footLink}>
              <small>← Previous</small>
              <b>
                {prev.num} {prev.name}
              </b>
            </a>
            <a href={`${ROOT}#websites`} className={s.footHome}>
              All websites
            </a>
            <a href={CASE(next.id)} className={[s.footLink, s.footLinkNext].join(' ')}>
              <small>Next →</small>
              <b>
                {next.num} {next.name}
              </b>
            </a>
          </nav>
          <p className={s.copy}>© 2026 LIM JIHYE. Case study of {c.name}.</p>
        </div>
      </footer>
    </div>
  )
}
