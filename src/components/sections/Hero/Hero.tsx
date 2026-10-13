import { useEffect, useState } from 'react'
import heroEllipse from '@/assets/deco/hero-ellipse.svg'
import { ExploreBadge } from '@/components/ui/ExploreBadge/ExploreBadge'
import s from './Hero.module.scss'

const TITLE = 'Portfolio'

export function Hero() {
  const [ready, setReady] = useState(false)
  const [offset, setOffset] = useState(0)

  // 로드 직후 인트로 애니메이션 시작
  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 80)
    return () => window.clearTimeout(t)
  }, [])

  // 스크롤 패럴랙스 (아치 내부 배경만 느리게 이동)
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setOffset(Math.min(window.scrollY, 900) * 0.18))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="top" className={[s.hero, ready && s.ready].filter(Boolean).join(' ')}>
      <div className={s.inner}>
        <div className={s.arch}>
          <div className={s.archBg} style={{ transform: `translateY(${offset}px) scale(1.08)` }}>
            <img src={heroEllipse} alt="" className={s.glow} />
          </div>

          <h1 className={s.title} aria-label={TITLE}>
            {TITLE.split('').map((ch, i) => (
              <span key={i} style={{ transitionDelay: `${500 + i * 55}ms` }}>
                {ch}
              </span>
            ))}
          </h1>
          <p className={s.sub}>보는 순간 기억에 남는 디자인을 빚습니다 · UI/UX · Branding · Web</p>

          <a href="#marquee" className={s.scroll}>
            Scroll Down <span className={s.chev}>⌄</span>
          </a>
          <span className={s.caption}>HERO IMAGE · 대표 작업 이미지</span>
        </div>

        <ExploreBadge className={s.badge} />

        <div className={s.foot}>
          <p className={s.meta}>(Visual &amp; UX Designer — Selected works 2020–2026)</p>
          <ul className={s.sideLinks}>
            <li>
              <a href="#works">Works</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
