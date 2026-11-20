import { useEffect, useState } from 'react'
import { CATEGORY_LABEL_KO, PROFILE, PROJECTS } from '@/data/portfolio'
import { onSelectProject } from '@/lib/projectBus'
import { SectionLabel } from '@/components/ui/SectionLabel/SectionLabel'
import { Pill } from '@/components/ui/Pill/Pill'
import { Reveal } from '@/components/ui/Reveal/Reveal'
import { Lightbox, type LightboxImage } from '@/components/ui/Lightbox/Lightbox'
import s from './ProjectDetail.module.scss'

export function ProjectDetail() {
  const [index, setIndex] = useState(0)
  const [view, setView] = useState<{ images: LightboxImage[]; index: number } | null>(null)
  const total = PROJECTS.length
  const project = PROJECTS[index]
  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total)

  const toImages = (srcs: string[], caption: string): LightboxImage[] =>
    srcs.map((src, i) => ({ src, alt: `${caption} ${i + 1}`, caption }))
  // 확대 보기 대상: 메인 이미지 + 썸네일 전부
  const gallery = toImages([project.image, ...project.thumbs], project.label)
  // PPT처럼 페이지 묶음이 있으면 작업별로 묶어서 연다
  const decks = project.items.flatMap((it) => (it.pages ? [{ title: it.title, images: toImages(it.pages, it.title) }] : []))
  // 썸네일이 없는 작업(PPT)은 대표 이미지가 첫 묶음의 표지라 묶음을 연다
  const openMain = () => setView({ images: project.thumbs.length ? gallery : (decks[0]?.images ?? gallery), index: 0 })

  // Works 카드/슬라이더에서 선택한 프로젝트로 이동
  useEffect(
    () =>
      onSelectProject((id) => {
        const i = PROJECTS.findIndex((p) => p.id === id)
        if (i >= 0) setIndex(i)
      }),
    [],
  )

  // 인쇄물처럼 그룹이 있는 목록은 그룹별로 묶어서 보여준다
  const groups = Array.from(new Set(project.items.map((it) => it.group ?? '')))

  return (
    <section id="projects" className={s.detail}>
      <div className={s.inner}>
        <Reveal variant="fade">
          <SectionLabel>PROJECTS</SectionLabel>
        </Reveal>
      </div>

      <div className={s.grid}>
        {/* ── Main image ── */}
        <Reveal variant="left" className={s.mainWrap}>
          <button type="button" className={s.mainStack} onClick={openMain} aria-label={`${project.label} 이미지 확대`}>
            {PROJECTS.map((p, i) => (
              <div key={p.id} className={[s.main, i === index && s.mainActive].filter(Boolean).join(' ')}>
                <img src={p.image} alt={p.label} className={s.mainImg} style={{ objectPosition: p.imagePosition }} loading={i === 0 ? 'eager' : 'lazy'} />
              </div>
            ))}
            <span className={s.mainNum}>{project.num}</span>
            <span className={s.zoomHint}>⤢</span>
          </button>
        </Reveal>

        {/* ── Info ── */}
        <div className={s.info}>
          <div className={s.tags}>
            {PROJECTS.map((p, i) => (
              <Pill key={p.id} dim={i !== index} onClick={() => setIndex(i)} size="sm">
                {p.num}&nbsp; {CATEGORY_LABEL_KO[p.category]}
              </Pill>
            ))}
          </div>
          <div className={s.rule} />

          <div key={project.id} className={s.body}>
            <div className={s.titleRow}>
              <div>
                <p className={s.kicker}>{project.label}</p>
                <h2 className={s.title}>
                  {project.title[0]}
                  <br />
                  {project.title[1]}
                </h2>
              </div>
              <div className={s.nav}>
                <button type="button" className={s.navBtn} onClick={() => go(-1)} aria-label="previous project">
                  ‹
                </button>
                <button type="button" className={[s.navBtn, s.navBtnDark].join(' ')} onClick={() => go(1)} aria-label="next project">
                  ›
                </button>
              </div>
            </div>

            <div className={s.list}>
              {groups.map((g) => (
                <div key={g} className={s.group}>
                  {g && <p className={s.groupTitle}>{g}</p>}
                  <ol>
                    {project.items
                      .filter((it) => (it.group ?? '') === g)
                      .map((it, i) => (
                        <li key={it.title}>
                          <span className={s.itemNum}>{String(i + 1).padStart(2, '0')}</span>
                          <span className={s.itemBody}>
                            <span className={s.itemTitle}>{it.title}</span>
                            {it.sub && <span className={s.itemSub}>{it.sub}</span>}
                          </span>
                        </li>
                      ))}
                  </ol>
                </div>
              ))}
            </div>

            <dl className={s.meta}>
              <div>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Works</dt>
                <dd>{project.items.length}</dd>
              </div>
              <div>
                <dt>Ownership</dt>
                <dd>{PROFILE.ownership}</dd>
              </div>
            </dl>

            <ul className={s.thumbs}>
              {project.thumbs.map((src, i) => (
                <li key={src} style={{ animationDelay: `${i * 90}ms` }}>
                  <button type="button" className={s.thumb} onClick={() => setView({ images: gallery, index: i + 1 })} aria-label={`${project.label} 이미지 ${i + 2} 확대`}>
                    <img src={src} alt={`${project.label} ${i + 2}`} loading="lazy" />
                    <span className={s.zoomHint}>⤢</span>
                  </button>
                </li>
              ))}
              {decks.map((d, i) => (
                <li key={d.title} style={{ animationDelay: `${i * 90}ms` }}>
                  <button type="button" className={s.thumb} onClick={() => setView({ images: d.images, index: 0 })} aria-label={`${d.title} ${d.images.length}페이지 보기`}>
                    <img src={d.images[0].src} alt={d.title} loading="lazy" />
                    <span className={s.pageCount}>{d.images.length}p</span>
                    <span className={s.zoomHint}>⤢</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Lightbox
        images={view?.images ?? []}
        index={view?.index ?? null}
        onClose={() => setView(null)}
        onChange={(i) => setView((v) => v && { ...v, index: i })}
      />
    </section>
  )
}
