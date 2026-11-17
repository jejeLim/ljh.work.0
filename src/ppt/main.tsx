import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/global.scss'
import { PROFILE, PROJECTS, type ProjectItem } from '@/data/portfolio'
import { useReveal } from '@/hooks/useReveal'
import { Footer } from '@/components/layout/Footer/Footer'
import { ScrollTop } from '@/components/ui/ScrollTop/ScrollTop'
import { SectionLabel } from '@/components/ui/SectionLabel/SectionLabel'
import { Lightbox, type LightboxImage } from '@/components/ui/Lightbox/Lightbox'
import s from './PptPage.module.scss'

// PPT 의뢰자에게 보내는 페이지: 메인 데이터의 PPT 항목만 보여준다
const ppt = PROJECTS.find((p) => p.id === 'ppt')!
const decks = ppt.items.filter((it) => it.pages)
const num = (n: number) => String(n + 1).padStart(2, '0')

const icon = (d: string) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
)

const FLOW = [
  {
    tag: 'AI',
    title: '구성 · 초안',
    desc: '원고를 AI로 분석해 페이지 구성과 메시지 흐름을 빠르게 정리',
    // 문서 + 반짝임
    icon: icon('M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-5-5ZM14 3v5h5M9 13h6M9 17h4M17.5 1.5l.5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5L15.5 3.5l1.5-.5.5-1.5Z'),
  },
  {
    tag: 'Figma',
    title: '디자인 시스템',
    desc: '컬러 · 타이포 · 레이아웃을 컴포넌트로 만들어 전 페이지에 적용',
    // 컴포넌트 그리드
    icon: icon('M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM16.5 13l3.5 3.5-3.5 3.5-3.5-3.5z'),
  },
  {
    tag: 'AI × Figma',
    title: '대량 제작 · 수정',
    desc: '페이지가 늘어나도 톤을 유지하고, 수정 사항은 한 번에 반영',
    // 겹쳐진 페이지
    icon: icon('M8 3h11a1 1 0 0 1 1 1v11M5 6h11a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1ZM7.5 13l2 2 4-4'),
  },
]

type View ={ images: LightboxImage[]; index: number }

function Deck({ deck, n, onZoom }: { deck: ProjectItem; n: number; onZoom: (v: View) => void }) {
  const [cur, setCur] = useState(0)
  const images = deck.pages!.map((src, i) => ({ src, alt: `${deck.title} ${i + 1}`, caption: deck.title }))
  const total = images.length
  const go = (dir: 1 | -1) => setCur((i) => (i + dir + total) % total)
  const [sub, desc] = (deck.sub ?? '').split(' — ')

  return (
    <section id={`deck-${num(n)}`} className={s.deck}>
      <div className={s.deckHead}>
        <span className={s.num}>{num(n)}</span>
        <div>
          <h2 className={s.deckTitle}>{deck.title}</h2>
          {sub && <p className={s.meta}>{sub}</p>}
          {desc && <p className={s.desc}>{desc}</p>}
        </div>
      </div>

      <div className={s.stage}>
        <button type="button" className={s.stageImg} onClick={() => onZoom({ images, index: cur })} aria-label={`${deck.title} ${cur + 1}페이지 크게 보기`}>
          <img src={images[cur].src} alt={images[cur].alt} loading={n === 0 ? 'eager' : 'lazy'} />
          <span className={s.zoomHint}>⤢</span>
        </button>
        {total > 1 && (
          <div className={s.controls}>
            <button type="button" className={s.arrow} onClick={() => go(-1)} aria-label="이전 페이지">
              ‹
            </button>
            <span className={s.counter}>
              {num(cur)} / {num(total - 1)}
            </span>
            <button type="button" className={s.arrow} onClick={() => go(1)} aria-label="다음 페이지">
              ›
            </button>
          </div>
        )}
      </div>

      {total > 1 && (
        <ul className={s.strip}>
          {images.map((img, i) => (
            <li key={img.src}>
              <button type="button" className={[s.thumb, i === cur && s.thumbActive].filter(Boolean).join(' ')} onClick={() => setCur(i)} aria-label={`${i + 1}페이지`} aria-current={i === cur}>
                <img src={img.src} alt="" loading="lazy" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

function PptPage() {
  useReveal()
  const [view, setView] = useState<View | null>(null)

  return (
    <>
      <a href="../" className={s.home}>
        다른 디자인 보러가기 →
      </a>
      <main className={s.page}>
        <header className={s.head}>
          <SectionLabel>{ppt.labelEn}</SectionLabel>
          <h1 className={s.title}>
            {ppt.title[0]}
            <br />
            {ppt.title[1]}
          </h1>
          <p className={s.lead}>
            {PROFILE.nameEn} · 제안서 · 보고서 · 회사소개서 · 이러닝 디자인
          </p>
          <p className={s.notice}>
            여기에 소개한 작업 외에도 다수의 PPT를 디자인했으나,
            <br />
            이러닝, 국가 프로젝트 등 고객사 보안 정책에 따라 공개가 어려운 작업은 포함하지 않았습니다.
          </p>
        </header>

        {/* 작업 방식: AI + Figma로 빠르게 많은 페이지 제작 */}
        <section className={s.flow} aria-label="작업 방식">
          <p className={s.flowHead}>
            <strong>AI × Figma</strong>로 짧은 시간 안에 많은 페이지를 일관된 품질로 제작합니다
          </p>
          <ol className={s.steps}>
            {FLOW.map((f, i) => (
              <li key={f.title} className={s.step}>
                <span className={s.stepTop}>
                  <span className={s.stepIcon}>{f.icon}</span>
                  <span className={s.stepNum}>{num(i)}</span>
                </span>
                <span className={s.stepTag}>{f.tag}</span>
                <strong className={s.stepTitle}>{f.title}</strong>
                <span className={s.stepDesc}>{f.desc}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* 표지 목록: 누르면 해당 작업으로 이동 */}
        <nav className={s.index} aria-label="PPT 작업 목록">
          {decks.map((d, n) => (
            <a key={d.title} href={`#deck-${num(n)}`} className={s.cover}>
              <img src={d.pages![0]} alt="" loading="eager" />
              <span className={s.coverText}>
                <span className={s.coverNum}>{num(n)}</span>
                {d.title}
              </span>
            </a>
          ))}
        </nav>

        {decks.map((d, n) => (
          <Deck key={d.title} deck={d} n={n} onZoom={setView} />
        ))}
      </main>
      <Footer />
      <ScrollTop />
      <Lightbox
        images={view?.images ?? []}
        index={view?.index ?? null}
        onClose={() => setView(null)}
        onChange={(i) => setView((v) => v && { ...v, index: i })}
      />
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PptPage />
  </StrictMode>,
)
