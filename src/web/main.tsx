import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/global.scss'
import { PROFILE, PROJECTS, WEBSITES, type ProjectItem } from '@/data/portfolio'
import { Lightbox, type LightboxImage } from '@/components/ui/Lightbox/Lightbox'
import { Websites } from '@/components/sections/Websites/Websites'
import { Showcase, icon, num, type FlowStep } from '@/showcase/Showcase'
import s from '@/showcase/Showcase.module.scss'

// 웹디자인 의뢰자에게 보내는 페이지: 클라이언트 작업 + 직접 구현한 랜딩페이지
const web = PROJECTS.find((p) => p.id === 'web')!
const shots: LightboxImage[] = [web.image, ...web.thumbs].map((src, i) => ({ src, alt: `${web.label} ${i + 1}`, caption: web.label }))
// 모바일 앱 UI: 앱 작업 중 화면 묶음이 있는 것
const app = PROJECTS.find((p) => p.id === 'app')!.items.find((it) => it.pages)!
const [appSub, appDesc] = (app.sub ?? '').split(' — ')
// 화면 이름: src/assets/works/app-procure/01~08.jpg 순서와 같다
const APP_SCREENS = ['메인 (로그인 전)', '빠른 조달검색', '조달계획 목록', '검색 필터', '기간 선택 바텀시트', '조회결과 상세', '품목명세서', '마이페이지']
// pages[0]은 여러 화면을 모은 목업, 나머지가 화면별 상세
const [appCover, ...appScreens] = app.pages!
const appShots: LightboxImage[] = appScreens.map((src, i) => ({ src, alt: `${app.title} ${i + 1}`, caption: `${app.title} · ${APP_SCREENS[i] ?? ''}` }))

// 화면 묶음이 있는 웹 작업 (브라우저 창 뷰어로 보여준다)
const webDecks = web.items.filter((it) => it.pages)

/** 브라우저 창 안에서 긴 페이지를 스크롤해 보고, 아래 썸네일로 화면을 바꾼다 */
function WebDeck({ deck, n, onZoom }: { deck: ProjectItem; n: number; onZoom: (images: LightboxImage[], index: number) => void }) {
  const [cur, setCur] = useState(0)
  const images = deck.pages!.map((src, i) => ({ src, alt: `${deck.title} ${i + 1}`, caption: deck.title }))
  const total = images.length
  const go = (dir: 1 | -1) => setCur((i) => (i + dir + total) % total)
  const [sub, desc] = (deck.sub ?? '').split(' — ')

  return (
    <section className={s.deck}>
      <div className={s.deckHead}>
        <span className={s.num}>{num(n)}</span>
        <div>
          <h2 className={s.deckTitle}>{deck.title}</h2>
          {sub && <p className={s.meta}>{sub}</p>}
          {desc && <p className={s.desc}>{desc}</p>}
          {deck.href && (
            <a href={deck.href} target="_blank" rel="noopener noreferrer" className={s.liveLink}>
              사이트 바로가기 ↗
            </a>
          )}
        </div>
      </div>

      <div className={s.browser}>
        <div className={s.browserBar} aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        {/* key: 화면을 바꾸면 스크롤을 맨 위로 */}
        <div key={cur} className={s.browserScreen} tabIndex={0} aria-label={`${deck.title} ${cur + 1}번 화면 (스크롤해서 보기)`}>
          <img src={images[cur].src} alt={images[cur].alt} loading={n === 1 ? 'eager' : 'lazy'} />
        </div>
      </div>

      <div className={s.controls}>
        {total > 1 && (
          <>
            <button type="button" className={s.arrow} onClick={() => go(-1)} aria-label="이전 화면">
              ‹
            </button>
            <span className={s.counter}>
              {num(cur)} / {num(total - 1)}
            </span>
            <button type="button" className={s.arrow} onClick={() => go(1)} aria-label="다음 화면">
              ›
            </button>
          </>
        )}
        <button type="button" className={s.zoomBtn} onClick={() => onZoom(images, cur)}>
          크게 보기 ⤢
        </button>
      </div>

      {total > 1 && (
        <ul className={s.strip}>
          {images.map((img, i) => (
            <li key={img.src}>
              <button type="button" className={[s.thumb, i === cur && s.thumbActive].filter(Boolean).join(' ')} onClick={() => setCur(i)} aria-label={`${i + 1}번 화면`} aria-current={i === cur}>
                <img src={img.src} alt="" loading="lazy" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

/** 휴대폰 목업 안에서 긴 화면을 스크롤해 보고, 오른쪽 목록으로 화면을 바꾼다 */
function AppMockup({ onZoom }: { onZoom: (index: number) => void }) {
  const [cur, setCur] = useState(0)
  const total = appShots.length
  const go = (dir: 1 | -1) => setCur((i) => (i + dir + total) % total)

  return (
    <div className={s.mockup}>
      <div className={s.device}>
        <span className={s.notch} aria-hidden="true" />
        {/* key: 화면을 바꾸면 스크롤을 맨 위로 */}
        <div key={cur} className={s.screen} tabIndex={0} aria-label={`${APP_SCREENS[cur]} 화면 (스크롤해서 보기)`}>
          <img src={appShots[cur].src} alt={appShots[cur].alt} />
        </div>
      </div>

      <div className={s.screenNav}>
        <p className={s.screenHint}>휴대폰 화면 안에서 스크롤하면 전체 화면을 볼 수 있어요.</p>
        <ol className={s.screenList}>
          {APP_SCREENS.slice(0, total).map((name, i) => (
            <li key={name}>
              <button type="button" className={[s.screenItem, i === cur && s.screenItemActive].filter(Boolean).join(' ')} onClick={() => setCur(i)} aria-current={i === cur}>
                <span className={s.coverNum}>{num(i)}</span>
                {name}
              </button>
            </li>
          ))}
        </ol>
        <div className={s.screenCtrl}>
          <button type="button" className={s.arrow} onClick={() => go(-1)} aria-label="이전 화면">
            ‹
          </button>
          <span className={s.counter}>
            {num(cur)} / {num(total - 1)}
          </span>
          <button type="button" className={s.arrow} onClick={() => go(1)} aria-label="다음 화면">
            ›
          </button>
          <button type="button" className={s.zoomBtn} onClick={() => onZoom(cur)}>
            크게 보기 ⤢
          </button>
        </div>
      </div>
    </div>
  )
}
// 이 페이지는 /web/ 아래에 있으므로 루트 기준 상대 경로를 한 단계 올린다
const sites = WEBSITES.map((w) => ({ ...w, href: `.${w.href}`, caseHref: `.${w.caseHref}` }))

const FLOW: FlowStep[] = [
  {
    tag: 'AI',
    title: '기획 · 구조 설계',
    desc: '요구사항을 AI로 정리해 사이트맵, 화면 구성, 카피 초안을 빠르게 도출',
    // 사이트맵
    icon: icon('M12 3v5M12 8H5v4M12 8h7v4M12 8v4M3 12h4v4H3zM10 12h4v4h-4zM17 12h4v4h-4zM17.5 1.5l.5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5L15.5 3.5l1.5-.5.5-1.5Z'),
  },
  {
    tag: 'Figma',
    title: 'UI 디자인 · 반응형 시안',
    desc: '컴포넌트와 디자인 토큰으로 데스크톱 · 태블릿 · 모바일 시안을 한 번에 설계',
    // 데스크톱 + 모바일
    icon: icon('M3 5h13a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1ZM7 19h5M9.5 15v4M19 9h2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z'),
  },
  {
    tag: 'AI × Code',
    title: '퍼블리싱 · 인터랙션',
    desc: '시안을 그대로 코드로 옮기고, 반응형과 인터랙션까지 직접 구현해 빠르게 오픈',
    // 코드
    icon: icon('M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16'),
  },
]

function WebPage() {
  const [view, setView] = useState<{ images: LightboxImage[]; index: number } | null>(null)

  return (
    <Showcase
      label={web.labelEn}
      title={web.title}
      lead={`${PROFILE.nameEn} · 기업 홈페이지 · 공공기관 · 랜딩페이지 · 반응형 웹 퍼블리싱`}
      notice={['여기에 소개한 작업 외에도 다수의 웹사이트를 디자인했으나,', '공공기관, 국가 프로젝트 등 고객사 보안 정책에 따라 공개가 어려운 작업은 포함하지 않았습니다.']}
      flowHead={
        <>
          <strong>AI × Figma</strong>로 기획부터 디자인, 퍼블리싱까지 빠르게 완성합니다
        </>
      }
      flow={FLOW}
      after={<Websites sites={sites} />}
    >
      {/* 클라이언트 작업 */}
      <section className={s.deck}>
        <div className={s.deckHead}>
          <span className={s.num}>01</span>
          <div>
            <h2 className={s.deckTitle}>클라이언트 웹사이트</h2>
            <p className={s.meta}>{web.role}</p>
            <ol className={s.clientList}>
              {web.items.map((it, i) => (
                <li key={it.title}>
                  <span className={s.coverNum}>{num(i)}</span>
                  {it.title}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <ul className={s.clientShots}>
          {shots.map((img, i) => (
            <li key={img.src}>
              <button type="button" className={s.stageImg} onClick={() => setView({ images: shots, index: i })} aria-label={`${img.alt} 크게 보기`}>
                <img src={img.src} alt={img.alt} loading="eager" />
                <span className={s.zoomHint}>⤢</span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {webDecks.map((d, i) => (
        <WebDeck key={d.title} deck={d} n={i + 1} onZoom={(images, index) => setView({ images, index })} />
      ))}

      {/* 모바일 앱 UI */}
      <section className={s.deck}>
        <div className={s.deckHead}>
          <span className={s.num}>{num(webDecks.length + 1)}</span>
          <div>
            <h2 className={s.deckTitle}>{app.title}</h2>
            <p className={s.meta}>{appSub}</p>
            <p className={s.desc}>{appDesc}</p>
          </div>
        </div>
        <button type="button" className={[s.stageImg, s.appCover].join(' ')} onClick={() => setView({ images: [{ src: appCover, alt: `${app.title} 목업`, caption: app.title }], index: 0 })} aria-label={`${app.title} 목업 크게 보기`}>
          <img src={appCover} alt={`${app.title} 목업`} loading="lazy" />
          <span className={s.zoomHint}>⤢</span>
        </button>
        <AppMockup onZoom={(i) => setView({ images: appShots, index: i })} />
      </section>

      <Lightbox
        images={view?.images ?? []}
        index={view?.index ?? null}
        onClose={() => setView(null)}
        onChange={(i) => setView((v) => v && { ...v, index: i })}
      />
    </Showcase>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WebPage />
  </StrictMode>,
)
