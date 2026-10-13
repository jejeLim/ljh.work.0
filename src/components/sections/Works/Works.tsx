import { useEffect, useMemo, useState } from 'react'
import worksEllipse from '@/assets/deco/works-ellipse.svg'
import worksFrame from '@/assets/deco/works-frame.svg'
import { CATEGORY_LABEL, FEATURED_IDS, PROJECTS, WORK_FILTERS, type ProjectInfo, type WorkFilter } from '@/data/portfolio'
import { selectProject } from '@/lib/projectBus'
import { SectionLabel } from '@/components/ui/SectionLabel/SectionLabel'
import { Pill } from '@/components/ui/Pill/Pill'
import { ArrowCircle } from '@/components/ui/ArrowCircle/ArrowCircle'
import { Reveal } from '@/components/ui/Reveal/Reveal'
import s from './Works.module.scss'

const AUTOPLAY_MS = 5200
const FEATURED = FEATURED_IDS.map((id) => PROJECTS.find((p) => p.id === id)!)
const TOTAL_WORKS = PROJECTS.reduce((n, p) => n + p.items.length, 0)

/** 상단 대표 작업 슬라이더 */
function FeaturedSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = FEATURED.length
  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total)

  useEffect(() => {
    if (paused) return
    const t = window.setInterval(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS)
    return () => window.clearInterval(t)
  }, [paused, total])

  const current = FEATURED[index]

  return (
    <Reveal variant="scale" className={s.slider}>
      <div
        className={s.sliderInner}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        role="region"
        aria-roledescription="carousel"
        aria-label="featured works"
      >
        {FEATURED.map((w, i) => (
          <div key={w.id} className={[s.slideBg, i === index && s.slideBgActive].filter(Boolean).join(' ')} aria-hidden="true">
            <img src={w.image} alt="" className={s.slideImg} loading={i === 0 ? 'eager' : 'lazy'} />
            <span className={s.slideShade} />
          </div>
        ))}
        <img src={worksEllipse} alt="" className={s.sliderGlow} />

        <a href="#projects" className={s.slideContent} key={current.id} onClick={() => selectProject(current.id)}>
          <p className={s.featLabel}>
            FEATURED&nbsp;&nbsp;{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}&nbsp;&nbsp;·&nbsp;&nbsp;{current.label}
          </p>
          <h3 className={s.featTitle}>{current.labelEn}</h3>
          <img src={worksFrame} alt="" className={s.featUnderline} width={120} height={20} />
        </a>

        <button type="button" className={[s.arrow, s.arrowPrev].join(' ')} onClick={() => go(-1)} aria-label="previous">
          ‹
        </button>
        <button type="button" className={[s.arrow, s.arrowNext].join(' ')} onClick={() => go(1)} aria-label="next">
          ›
        </button>

        <div className={s.dots} role="tablist">
          {FEATURED.map((w, i) => (
            <button
              key={w.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`slide ${i + 1}`}
              className={[s.dot, i === index && s.dotActive].filter(Boolean).join(' ')}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </Reveal>
  )
}

function Card({ project, index }: { project: ProjectInfo; index: number }) {
  return (
    <Reveal as="li" className={s.card} delay={(index % 3) * 100}>
      <a href="#projects" className={s.cardLink} onClick={() => selectProject(project.id)}>
        <div className={s.thumb} style={{ height: project.cardHeight }}>
          <img src={project.image} alt={project.label} className={s.thumbImg} loading="lazy" />
          <span className={s.thumbNum}>{project.num}</span>
          <span className={s.thumbOverlay}>View project</span>
        </div>
        <div className={s.caption}>
          <div>
            <h3 className={s.cardTitle}>{project.label}</h3>
            <p className={s.cardMeta}>
              {CATEGORY_LABEL[project.category]} · {project.items.length} works
            </p>
          </div>
          <ArrowCircle className={s.cardArrow} />
        </div>
      </a>
    </Reveal>
  )
}

export function Works() {
  const [filter, setFilter] = useState<WorkFilter>('All')

  const cards = useMemo(() => (filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)), [filter])

  return (
    <section id="works" className={s.works}>
      <div className={s.inner}>
        <Reveal variant="fade">
          <SectionLabel>SELECTED WORKS</SectionLabel>
        </Reveal>

        <Reveal as="h2" className={s.title}>
          경험과 노하우로 완성한 작업들
        </Reveal>
        <Reveal as="p" className={s.desc} delay={80}>
          웹·앱 디자인부터 브랜딩, 콘텐츠, 인쇄물까지. 기획부터 퍼블리싱까지 직접 진행한 작업을 이미지로 소개합니다.
        </Reveal>

        <Reveal className={s.filter} delay={140}>
          {WORK_FILTERS.map((f) => (
            <Pill key={f} active={filter === f} onClick={() => setFilter(f)}>
              {f === 'All' ? `All ${TOTAL_WORKS}` : f === 'Content' ? 'SNS' : f}
            </Pill>
          ))}
        </Reveal>

        <FeaturedSlider />

        <ul className={s.masonry} key={filter}>
          {cards.map((p, i) => (
            <Card key={p.id} project={p} index={i} />
          ))}
        </ul>

        <Reveal className={s.more}>
          <Pill arrow href="#projects" className={s.moreBtn}>
            View all projects
          </Pill>
        </Reveal>
      </div>
    </section>
  )
}
