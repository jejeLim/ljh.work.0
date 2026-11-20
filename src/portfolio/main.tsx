import { StrictMode, useEffect, useRef, useState, type CSSProperties } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/global.scss'
import { CONTACT, PROJECTS, WEBSITES, type ProjectInfo } from '@/data/portfolio'
import { useReveal } from '@/hooks/useReveal'
import { useInView } from '@/hooks/useInView'
import { useCountUp } from '@/hooks/useCountUp'
import { useScrolled } from '@/hooks/useScrolled'
import { Reveal } from '@/components/ui/Reveal/Reveal'
import { Lightbox, type LightboxImage } from '@/components/ui/Lightbox/Lightbox'
import { ScrollTop } from '@/components/ui/ScrollTop/ScrollTop'
import { KakaoContact } from '@/components/ui/KakaoContact/KakaoContact'
import heroPhoto from '@/assets/portfolio/hero.jpg'
import dot from '@/assets/portfolio/dot.svg'
import dotActive from '@/assets/portfolio/dot-active.svg'
import dotMuted from '@/assets/portfolio/dot-muted.svg'
import skillPlanning from '@/assets/portfolio/skill-planning.svg'
import skillUiux from '@/assets/portfolio/skill-uiux.svg'
import skillBranding from '@/assets/portfolio/skill-branding.svg'
import skillWeb from '@/assets/portfolio/skill-web.svg'
import s from './Portfolio.module.scss'

// 메인 index: 새 포트폴리오 디자인(Figma Renewal v4)에 포트폴리오 데이터를 채운 페이지

const pad = (n: number) => String(n).padStart(2, '0')
const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ')

const NAV = [
  { label: 'Works', href: '#works' },
  { label: 'Websites', href: '#websites' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const SKILLS = [
  { icon: skillPlanning, ko: '기획 & UX', en: 'Planning & UX', desc: '요구사항 · IA · 와이어프레임 · 스토리보드' },
  { icon: skillUiux, ko: 'UX/UI 디자인', en: 'Interface Design', desc: '웹·앱 UI · 반응형 · 디자인 시스템' },
  { icon: skillBranding, ko: '브랜딩 & 그래픽', en: 'Branding & Graphic', desc: '로고 · SNS · 상세페이지 · PPT · 인쇄물' },
  { icon: skillWeb, ko: '웹 퍼블리싱', en: 'Web Publishing', desc: 'HTML · CSS · 반응형 웹앱 · JS 인터랙션' },
]

// 숙련도: 3 특급 · 2 고급 · 1 중급
const toolLogos = import.meta.glob<string>('../assets/portfolio/tools/*.png', { eager: true, import: 'default' })
const TOOLS: [file: string, name: string, level: 1 | 2 | 3][] = [
  ['figma', 'Figma', 3],
  ['photoshop', 'Photoshop', 3],
  ['illustrator', 'Illustrator', 2],
  ['xd', 'Adobe XD', 2],
  ['html5', 'HTML5', 3],
  ['css3', 'CSS3', 3],
  ['javascript', 'JavaScript', 1],
  ['react', 'React', 1],
  ['vscode', 'VS Code', 2],
  ['sourcetree', 'Sourcetree', 2],
  ['cafe24', 'Cafe24', 2],
  ['gnuboard', '그누보드', 2],
  ['claude', 'Claude', 2],
  ['chatgpt', 'ChatGPT', 2],
  ['notion', 'Notion', 2],
  ['miro', 'Miro', 2],
  ['slack', 'Slack', 2],
]
// 그누보드 · Cafe24 로고는 여백 없이 잘려 있어 꽉 채워 보여준다
const LOGO_FIT = new Set(['cafe24', 'gnuboard'])
const dots = (n: number) => '●'.repeat(n) + '○'.repeat(3 - n)

const CAREER = [
  ['아이엔소프트', '2025 —'],
  ['바니마니', '2023 — 2024'],
  ['㈜모드니코퍼레이션', '2023'],
  ['그라운드케이', '2021 — 2022'],
  ['엠랩(주)', '2019 — 2021'],
  ['케이사인', '2018 — 2019'],
  ['인트소프트', '2017 — 2018'],
  ['샤이닝', '2014 — 2017'],
]

// ── Works 데이터 ─────────────────────────────────────────
const WORK_ORDER = ['web', 'app', 'ppt', 'branding', 'detail', 'content', 'print']
const WORK_EN: Record<string, string> = {
  web: 'Web Design & Publishing',
  app: 'App Planning & Design',
  ppt: 'Presentation',
  branding: 'Branding & Logo',
  detail: 'Detail Page',
  content: 'SNS Content',
  print: 'Print · POP',
}
const WORK_TAB: Record<string, string> = {
  web: '웹 디자인 & 퍼블리싱',
  app: '앱 기획 & 디자인',
  ppt: 'PPT 디자인',
  branding: '브랜딩 & 로고',
  detail: '상세페이지',
  content: 'SNS 콘텐츠',
  print: '인쇄물 · POP',
}
const WORK_SUB: Record<string, string> = {
  web: 'S&I · SK브로드밴드 · LG U+ · 바니마니 · 엠랩(Mlab) · 케이사인 외',
  app: '앱 UX/UI · 화면 설계 · 공공 전자조달 앱',
  ppt: '회사소개서 · 제안 발표 · 전략 보고서',
  branding: '로고 · BI · CI',
  detail: '상세페이지 · 제품 소개',
  content: 'SNS 피드 · 콘텐츠',
  print: 'POP · 브로슈어 · 차트북',
}
const uniq = (list: string[]) => [...new Set(list)]
const works = WORK_ORDER.map((id) => PROJECTS.find((p) => p.id === id)).filter((p): p is ProjectInfo => !!p)
const totalWorks = works.reduce((n, p) => n + p.items.length, 0)
/** 카드 썸네일: 대표 이미지 + 작업별 표지 */
const coversOf = (p: ProjectInfo) => uniq([p.image, ...p.thumbs, ...p.items.flatMap((it) => (it.pages ? [it.pages[0]] : []))])
const toImages = (srcs: string[], caption: string): LightboxImage[] => srcs.map((src, i) => ({ src, alt: `${caption} ${i + 1}`, caption }))

const sites = WEBSITES
const featured = sites.find((w) => w.featured) ?? sites[0]
const restSites = sites.filter((w) => w !== featured)

// ── 공통 조각 ────────────────────────────────────────────

/** 가로 스크롤 영역을 마우스로 끌어서 넘긴다 (터치는 브라우저 기본 스와이프 사용) */
function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let startX = 0
    let startLeft = 0
    let down = false
    let moved = false
    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return
      down = true
      moved = false
      startX = e.clientX
      startLeft = el.scrollLeft
    }
    const onMove = (e: PointerEvent) => {
      if (!down) return
      const dx = e.clientX - startX
      if (!moved && Math.abs(dx) < 5) return
      moved = true
      el.classList.add(s.dragging)
      el.scrollLeft = startLeft - dx
    }
    const onUp = () => {
      down = false
      el.classList.remove(s.dragging)
    }
    // 끌고 난 직후의 클릭(확대 보기 · 링크 이동)은 막는다
    const onClick = (e: MouseEvent) => {
      if (!moved) return
      e.preventDefault()
      e.stopPropagation()
      moved = false
    }
    el.addEventListener('pointerdown', onDown)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    el.addEventListener('click', onClick, true)
    return () => {
      el.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      el.removeEventListener('click', onClick, true)
    }
  }, [])
  return ref
}

function Eyebrow({ num, label, dark }: { num: string; label?: string; dark?: boolean }) {
  return (
    <Reveal variant="fade" className={cx(s.eyebrow, dark && s.eyebrowDark)}>
      <img src={dot} alt="" width={8} height={8} />
      <span>
        {num}
        {label && <span className={s.eyebrowLabel}>{label}</span>}
      </span>
    </Reveal>
  )
}

function Header() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className={cx(s.header, scrolled && s.headerScrolled, open && s.headerOpen)}>
      <a href="#top" className={s.logo} onClick={close}>
        Lim Jihye
        <img src={dot} alt="" width={8} height={8} />
      </a>
      <nav className={s.nav} aria-label="주요 메뉴">
        {NAV.map((n) => (
          <a key={n.href} href={n.href} onClick={close}>
            {n.label}
          </a>
        ))}
      </nav>
      <a href="#contact" className={s.headerCta}>
        프로젝트 문의
      </a>
      <button type="button" className={s.menuBtn} onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label={open ? '메뉴 닫기' : '메뉴 열기'}>
        <i />
        <i />
        <i />
      </button>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className={s.hero}>
      <h1 className={s.srOnly}>Lim Jihye — UX/UI Designer & Web Publisher</h1>
      <img src={heroPhoto} alt="노트북 화면 속 포트폴리오: HI EVERYONE, I'M JIHYE! DESIGN & PUBLISHING" className={s.heroPhoto} />
      <span className={s.heroFade} aria-hidden="true" />
    </section>
  )
}

function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { threshold: 0.4 })
  const years = useCountUp(11, inView, 1600)
  const months = useCountUp(8, inView, 1600)

  return (
    <section id="skills" className={s.skills}>
      <div className={s.skillsInner}>
        <div className={s.skillsLeft}>
          <Eyebrow num="01" label="Skills & Tools" />
          <div ref={ref} className={s.career} aria-label="경력 11년 8개월">
            <p className={s.careerYears}>
              <span className={s.careerNum}>{years}</span>
              <em>years</em>
            </p>
            <p className={s.careerMonths}>
              <span className={s.careerNum}>{months}</span>
              <em>months</em>
            </p>
          </div>
          <Reveal as="p" className={s.skillsDesc}>
            2014년부터 웹 디자인과 퍼블리싱을 시작해 보안 솔루션, 공공기관, 플랫폼 서비스의 웹·앱 UX/UI를 담당해 왔습니다. 디자인과 퍼블리싱을 함께 해온 경험을 바탕으로 개발자가 그대로 구현할 수 있는 화면을 만듭니다.
          </Reveal>
          <Reveal as="ul" className={s.domains} delay={80}>
            {['보안 솔루션', '공공기관', '플랫폼 서비스'].map((d) => (
              <li key={d}>{d}</li>
            ))}
          </Reveal>
        </div>

        <div className={s.skillsRight}>
          <div className={s.subHead}>
            <h2>Skills</h2>
            <p>기획부터 퍼블리싱까지 한 흐름으로</p>
          </div>
          <ul className={s.skillList}>
            {SKILLS.map((k, i) => (
              <Reveal as="li" key={k.ko} delay={i * 80}>
                <img src={k.icon} alt="" width={26} height={26} />
                <div>
                  <p className={s.skillName}>
                    <strong>{k.ko}</strong>
                    <em>{k.en}</em>
                  </p>
                  <p className={s.skillDesc}>{k.desc}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <div className={cx(s.subHead, s.subHeadTools)}>
            <h2>Tools</h2>
            <p className={s.legend}>●●● 특급&nbsp;&nbsp;&nbsp;●●○ 고급&nbsp;&nbsp;&nbsp;●○○ 중급</p>
          </div>
          <ul className={s.tools}>
            {TOOLS.map(([file, name, level], i) => (
              <Reveal as="li" variant="scale" key={file} delay={i * 30} className={s.tool}>
                <span className={s.toolLogo}>
                  <span className={cx(s.toolImg, LOGO_FIT.has(file) && s.toolImgFit)}>
                    <img src={toolLogos[`../assets/portfolio/tools/${file}.png`]} alt="" />
                  </span>
                </span>
                <span className={s.toolName}>{name}</span>
                <span className={s.toolLevel} aria-label={['', '중급', '고급', '특급'][level]}>
                  {dots(level)}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function WorkCard({ p, selected, onSelect }: { p: ProjectInfo; selected: boolean; onSelect: () => void }) {
  const [cur, setCur] = useState(0)
  const covers = coversOf(p)
  const shown = covers.length > 5 ? covers.slice(0, 4) : covers
  const more = covers.length - shown.length

  return (
    <li className={cx(s.card, selected && s.cardSelected)} data-work={p.id}>
      <button type="button" className={s.cardMain} onClick={onSelect} aria-label={`${p.label} 작업 목록 보기`} aria-expanded={selected}>
        {/* 카드 너비는 대표 이미지 비율로 정하고, 다른 썸네일을 고르면 그 위에 겹쳐 보여준다 */}
        <img src={covers[0]} alt="" className={s.cardCover} style={{ objectPosition: p.imagePosition } as CSSProperties} />
        {cur > 0 && <img key={covers[cur]} src={covers[cur]} alt="" className={s.cardActive} />}
        <span className={s.cardCount}>{pad(p.items.length)} projects</span>
      </button>
      <ul className={s.cardThumbs}>
        {shown.map((src, i) => (
          <li key={src}>
            <button type="button" className={cx(s.thumb, i === cur && s.thumbActive)} onClick={() => setCur(i)} aria-label={`${p.label} ${i + 1}번 이미지`} aria-current={i === cur}>
              <img src={src} alt="" loading="lazy" />
            </button>
          </li>
        ))}
        {more > 0 && (
          <li>
            <button type="button" className={cx(s.thumb, s.thumbMore)} onClick={onSelect} aria-label={`${p.label} 작업 ${more}개 더 보기`}>
              +{more}
            </button>
          </li>
        )}
      </ul>
      <div className={s.cardText}>
        <p className={s.cardTitle}>
          <span>{p.num}</span>
          {WORK_EN[p.id]}
        </p>
        <p className={s.cardSub}>{WORK_SUB[p.id]}</p>
      </div>
    </li>
  )
}

/** 선택한 분야의 작업 목록: 작업마다 표지를 누르면 그 작업의 페이지만 넘겨 본다 */
function WorkDetail({ p, onOpen }: { p: ProjectInfo; onOpen: (images: LightboxImage[], index: number) => void }) {
  const decks = p.items.filter((it) => it.pages?.length)
  const plain = p.items.filter((it) => !it.pages?.length)
  // 작업에 묶이지 않은 대표 이미지 · 썸네일 (로고, SNS 등)
  const inDecks = new Set(decks.flatMap((it) => it.pages!))
  const gallery = toImages(uniq([p.image, ...p.thumbs]).filter((src) => !inDecks.has(src)), p.label)

  return (
    <div key={p.id} className={s.detail} aria-live="polite">
      <div className={s.detailHead}>
        <p className={s.cardTitle}>
          <span>{p.num}</span>
          {WORK_EN[p.id]}
        </p>
        <p className={s.cardSub}>{p.role}</p>
      </div>

      {(decks.length > 0 || gallery.length > 0) && (
        <ul className={s.detailGrid}>
          {decks.map((it) => {
            const images = toImages(it.pages!, it.title)
            return (
              <li key={it.title}>
                <button type="button" className={s.detailItem} onClick={() => onOpen(images, 0)} aria-label={`${it.title} ${images.length}페이지 보기`}>
                  <span className={s.detailImg}>
                    <img src={it.pages![0]} alt="" loading="lazy" />
                    <span className={s.detailCount}>{images.length}p</span>
                  </span>
                  <strong>{it.title}</strong>
                  {it.sub && <span>{it.sub}</span>}
                </button>
              </li>
            )
          })}
          {gallery.map((img, i) => (
            <li key={img.src}>
              <button type="button" className={s.detailItem} onClick={() => onOpen(gallery, i)} aria-label={`${p.label} 이미지 ${i + 1} 크게 보기`}>
                <span className={s.detailImg}>
                  <img src={img.src} alt="" loading="lazy" style={i === 0 ? ({ objectPosition: p.imagePosition } as CSSProperties) : undefined} />
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      {plain.length > 0 && (
        <ol className={s.detailList}>
          {plain.map((it, i) => (
            <li key={it.title}>
              <span>{pad(i + 1)}</span>
              {it.title}
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

function Works({ onOpen }: { onOpen: (images: LightboxImage[], index: number) => void }) {
  const strip = useDragScroll<HTMLUListElement>()
  const tabsRef = useDragScroll<HTMLDivElement>()
  const [tab, setTab] = useState('all')
  const [sel, setSel] = useState(works[0].id)
  const detailRef = useRef<HTMLDivElement>(null)
  const [bar, setBar] = useState({ left: 0, width: 25 })
  const select = (id: string) => {
    setSel(id)
    setTab(id)
    detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const onScroll = () => {
    const el = strip.current
    if (!el) return
    setBar({ left: (el.scrollLeft / el.scrollWidth) * 100, width: (el.clientWidth / el.scrollWidth) * 100 })
  }
  const scrollBy = (dir: 1 | -1) => strip.current?.scrollBy({ left: dir * strip.current.clientWidth * 0.6, behavior: 'smooth' })
  const goTo = (id: string) => {
    setTab(id)
    if (id !== 'all') setSel(id)
    const el = strip.current
    if (!el) return
    const card = id === 'all' ? null : el.querySelector<HTMLElement>(`[data-work="${id}"]`)
    el.scrollTo({ left: card ? card.offsetLeft - el.offsetLeft - parseFloat(getComputedStyle(el).paddingLeft) : 0, behavior: 'smooth' })
  }

  return (
    <section id="works" className={s.works}>
      <div className={s.worksHead}>
        <div>
          <Eyebrow num="02" label="Works" dark />
          <Reveal as="h2" variant="clip" className={s.worksTitle}>
            <span>
              Crafted across
              <br />
              <em>every</em> medium.
            </span>
          </Reveal>
        </div>
        <div className={s.arrows}>
          <button type="button" onClick={() => scrollBy(-1)} aria-label="이전 작업">
            ←
          </button>
          <button type="button" onClick={() => scrollBy(1)} aria-label="다음 작업">
            →
          </button>
        </div>
      </div>

      <div ref={tabsRef} className={s.tabs} role="tablist" aria-label="작업 분류">
        {[{ id: 'all', label: '전체', count: `${totalWorks}+` }, ...works.map((p) => ({ id: p.id, label: WORK_TAB[p.id], count: pad(p.items.length) }))].map((t) => (
          <button key={t.id} type="button" role="tab" aria-selected={tab === t.id} className={cx(s.tab, tab === t.id && s.tabActive)} onClick={() => goTo(t.id)}>
            {t.label}
            <span>{t.count}</span>
          </button>
        ))}
      </div>

      <ul ref={strip} className={s.strip} onScroll={onScroll}>
        {works.map((p) => (
          <WorkCard key={p.id} p={p} selected={p.id === sel} onSelect={() => select(p.id)} />
        ))}
      </ul>

      <div className={s.progress} aria-hidden="true">
        <span style={{ left: `${bar.left}%`, width: `${bar.width}%` }} />
      </div>

      <div ref={detailRef} className={s.detailWrap}>
        <WorkDetail p={works.find((p) => p.id === sel)!} onOpen={onOpen} />
      </div>
    </section>
  )
}

function Websites() {
  const grid = useDragScroll<HTMLUListElement>()

  return (
    <section id="websites" className={s.websites}>
      <span className={cx(s.glow, s.glowWebTl)} aria-hidden="true" />
      <span className={cx(s.glow, s.glowWebBr)} aria-hidden="true" />
      <div className={s.inner}>
        <div className={s.secHead}>
          <div>
            <Eyebrow num="03" label="Websites" />
            <Reveal as="h2" className={s.secTitle}>
              Websites
            </Reveal>
            <Reveal as="p" className={s.secDesc} delay={80}>
              피그마 시안을 그대로 구현한 랜딩페이지 {sites.length}개 — 디자인 · 반응형 퍼블리싱 · 인터랙션
            </Reveal>
          </div>
          <a href={featured.href} target="_blank" rel="noopener noreferrer" className={cx(s.pill, s.liveAll)}>
            Live sites <span>↗</span>
          </a>
        </div>

        <Reveal variant="up" className={s.featured}>
          <a href={featured.href} target="_blank" rel="noopener noreferrer" className={s.featuredShot} aria-label={`${featured.name} 라이브 사이트 보기 (새 창)`}>
            <img src={featured.image} alt={`${featured.name} 랜딩페이지 첫 화면`} />
          </a>
          <div className={s.featuredCopy}>
            <p className={s.featuredEyebrow}>FEATURED · 01</p>
            <div className={s.featuredName}>
              <h3>{featured.name}</h3>
              <p>{featured.kicker}</p>
            </div>
            <p className={s.featuredDesc}>{featured.desc}</p>
            <ul className={s.chips}>
              {featured.tags.slice(0, 3).map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className={s.featuredActions}>
              <a href={featured.href} target="_blank" rel="noopener noreferrer" className={s.pill}>
                Live site <span>↗</span>
              </a>
            </div>
          </div>
        </Reveal>

        <ul ref={grid} className={s.siteGrid}>
          {restSites.map((w, i) => (
            <Reveal as="li" key={w.id} delay={(i % 3) * 90} className={s.site}>
              <a href={w.href} target="_blank" rel="noopener noreferrer" className={s.siteShot} aria-label={`${w.name} 라이브 사이트 보기 (새 창)`}>
                <img src={w.image} alt={`${w.name} 랜딩페이지 첫 화면`} loading="lazy" />
              </a>
              <div className={s.siteName}>
                <h3>{w.name}</h3>
                <span>{pad(i + 2)}</span>
              </div>
              <p className={s.siteKicker}>{w.kicker}</p>
              <p className={s.siteDesc}>{w.desc}</p>
              <p className={s.siteLinks}>
                <a href={w.href} target="_blank" rel="noopener noreferrer">
                  Live site <span>↗</span>
                </a>
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className={s.about}>
      <span className={cx(s.glow, s.glowAbout)} aria-hidden="true" />
      <div className={s.inner}>
        <div className={s.secHead}>
          <div>
            <Eyebrow num="04" label="About" />
            <Reveal as="h2" className={s.secTitle}>
              About
            </Reveal>
            <Reveal as="p" className={s.secDesc} delay={80}>
              2014년부터 보안 솔루션, 공공기관, 플랫폼 서비스의 웹·앱 UX/UI를 담당해 왔습니다.
            </Reveal>
          </div>
        </div>

        <div className={s.aboutCols}>
          <div>
            <p className={s.colLabel}>CAREER</p>
            <ol className={s.careerList}>
              {CAREER.map(([name, period], i) => (
                <Reveal as="li" variant="fade" key={name} delay={i * 50}>
                  <span className={s.company}>
                    <img src={i === 0 ? dotActive : dotMuted} alt="" width={6} height={6} />
                    {name}
                  </span>
                  <span className={s.period}>{period}</span>
                </Reveal>
              ))}
            </ol>
          </div>

          <div>
            <p className={s.colLabel}>WITH TEAM</p>
            <p className={s.teamDesc}>개발이 필요한 프로젝트는 협업 개발자와 함께 진행합니다. 기획부터 디자인, 개발, 앱 배포까지 상용 앱을 함께 완성한 경험이 있습니다.</p>
            <div className={s.team}>
              <Reveal className={s.member}>
                <div className={s.memberHead}>
                  <strong>임지혜</strong>
                  <span>11년+</span>
                </div>
                <p>기획 · UX/UI 디자인 · 웹 퍼블리싱 · 프론트엔드</p>
              </Reveal>
              <Reveal className={s.member} delay={80}>
                <div className={s.memberHead}>
                  <strong>협업 개발자</strong>
                  <span>10년+</span>
                </div>
                <p>프론트엔드(React) · 백엔드 개발 · 환경 셋팅</p>
                <a href="./gongjiyeon/" target="_blank" rel="noopener noreferrer" className={s.devBtn}>
                  개발자 포트폴리오 보기 ↗
                </a>
              </Reveal>
            </div>
            <p className={s.colLabel}>PROCESS</p>
            <p className={s.process}>
              {['기획', '디자인', '퍼블리싱', '검수 & 업그레이드'].map((step, i) => (
                <span key={step}>
                  {i > 0 && <i> → </i>}
                  {step}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <footer id="contact" className={s.contact}>
      <span className={cx(s.glow, s.glowContact)} aria-hidden="true" />
      <div className={s.inner}>
        <div className={s.contactMain}>
          <div>
            <Eyebrow num="05" label="Contact" dark />
            <Reveal as="h2" variant="clip" className={s.contactTitle}>
              <span>
                Let’s work <em>together.</em>
              </span>
            </Reveal>
            <Reveal as="p" delay={120}>
              <a href={`mailto:${CONTACT.email}`} className={s.email}>
                {CONTACT.email}
              </a>
            </Reveal>
          </div>
          <div className={s.contactCta}>
            {/* 카카오톡 jeje.b 친구추가 (CONTACT.kakaoAddUrl이 있으면 바로 연결, 없으면 ID 안내 창) */}
            <KakaoContact className={cx(s.pill, s.pillLight)}>
              프로젝트 문의하기 <span>↗</span>
            </KakaoContact>
            <p>외주 · 협업 프로젝트 · 팀 단위 개발</p>
          </div>
        </div>
        <div className={s.footBar}>
          <p>Lim Jihye · UX/UI Designer & Web Publisher · Since 2014</p>
          <p>© 2026 LIM JIHYE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function PortfolioPage() {
  useReveal()
  const [view, setView] = useState<{ images: LightboxImage[]; index: number } | null>(null)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Works onOpen={(images, index) => setView({ images, index })} />
        <Websites />
        <About />
      </main>
      <Contact />
      <ScrollTop />
      <Lightbox images={view?.images ?? []} index={view?.index ?? null} onClose={() => setView(null)} onChange={(i) => setView((v) => v && { ...v, index: i })} />
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortfolioPage />
  </StrictMode>,
)
