import dot8 from '@/assets/icons/dot-8.svg'
import arrowLight from '@/assets/icons/arrow-light.svg'
import brandImg from '@/assets/works/brand-02.jpg'
import { CATEGORY_LABEL, CONTACT, PROFILE, PROJECTS } from '@/data/portfolio'
import { selectProject } from '@/lib/projectBus'
import { SectionLabel } from '@/components/ui/SectionLabel/SectionLabel'
import { Pill } from '@/components/ui/Pill/Pill'
import { ExploreBadge } from '@/components/ui/ExploreBadge/ExploreBadge'
import { Reveal } from '@/components/ui/Reveal/Reveal'
import s from './Services.module.scss'

/**
 * 작업 분야 섹션. 피그마 Process 섹션의 레이아웃(타이틀 · 원형 이미지 · 행 목록)을
 * 그대로 쓰되, 내용은 PDF의 7개 작업 분야로 채운다. 행을 누르면 Projects 상세로 이동.
 */
export function Services() {
  return (
    <section id="services" className={s.services}>
      <div className={s.inner}>
        <Reveal variant="fade">
          <SectionLabel>SERVICES</SectionLabel>
        </Reveal>
      </div>
      <div className={s.rule} />

      <div className={s.top}>
        <Reveal as="h2" className={s.title} variant="left">
          PLANNING
          <br />
          DESIGN &amp;
          <br />
          PUBLISHING
        </Reveal>

        <Reveal variant="scale" className={s.circleWrap}>
          <div className={s.circle}>
            <img src={brandImg} alt="브랜딩 작업 — MODENY" className={s.circleImg} loading="lazy" />
          </div>
          <ExploreBadge size={104} className={s.badge} href="#projects" />
        </Reveal>

        <div className={s.copy}>
          <Reveal as="p" className={s.text} variant="right">
            웹·앱 UX/UI부터 브랜딩, SNS 콘텐츠, PPT, 인쇄물, 상세페이지까지. 기획에서 디자인, 퍼블리싱까지 한 사람이 끝까지 책임지고 완성합니다.
          </Reveal>
          <Reveal className={s.readMore} variant="right" delay={100}>
            <a href="#projects" className={s.readMoreLink}>
              View Projects
              <span className={s.readMoreIcon}>
                <img src={arrowLight} alt="" width={16} height={16} />
              </span>
            </a>
          </Reveal>
          <Reveal variant="right" delay={180}>
            <Pill href={`mailto:${CONTACT.email}`} className={s.work}>
              work with me
              <img src={dot8} alt="" width={8} height={8} className={s.workDot} />
            </Pill>
          </Reveal>
        </div>

        <Reveal as="p" className={s.step1} delay={200}>
          {PROFILE.ownership}&nbsp;&nbsp;·&nbsp;&nbsp;{PROJECTS.length} CATEGORIES
        </Reveal>
      </div>

      <ul className={s.rows}>
        {PROJECTS.map((p, i) => (
          <Reveal as="li" key={p.id} className={s.row} delay={i * 60}>
            <a href="#projects" className={s.rowLink} onClick={() => selectProject(p.id)}>
              <span className={s.num}>{p.num}</span>
              <span className={s.thumb}>
                <img src={p.image} alt="" loading="lazy" />
              </span>
              <span className={s.rowText}>
                <span className={s.rowTitle}>{p.labelEn}</span>
                <span className={s.rowSub}>
                  {p.label} · {CATEGORY_LABEL[p.category]} · {p.items.length} works
                </span>
              </span>
              <span className={s.more} aria-hidden="true">
                •••
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
