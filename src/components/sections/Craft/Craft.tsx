import { useMemo, useRef } from 'react'
import wave from '@/assets/deco/wave.svg'
import { KEYWORDS, PROFILE } from '@/data/portfolio'
import { useInView } from '@/hooks/useInView'
import { useCountUp } from '@/hooks/useCountUp'
import { Reveal } from '@/components/ui/Reveal/Reveal'
import s from './Craft.module.scss'

/** 결정적 의사 난수 (매 렌더마다 같은 패턴) */
function seeded(seed: number) {
  let t = seed
  return () => {
    t = (t * 9301 + 49297) % 233280
    return t / 233280
  }
}

interface Dot {
  x: number
  y: number
  size: number
  delay: number
  dur: number
}

function useDots(count: number): Dot[] {
  return useMemo(() => {
    const rnd = seeded(42)
    return Array.from({ length: count }, () => ({
      x: rnd() * 100,
      y: rnd() * 100,
      size: 3 + rnd() * 8,
      delay: rnd() * 4,
      dur: 3 + rnd() * 3,
    }))
  }, [count])
}

export function Craft() {
  const dots = useDots(60)
  const numRef = useRef<HTMLDivElement>(null)
  const inView = useInView(numRef, { threshold: 0.4 })
  const years = useCountUp(PROFILE.years, inView, 1600)

  return (
    <section id="craft" className={s.craft}>
      <div className={s.inner}>
        <Reveal as="h2" className={s.title}>
          {PROFILE.years}년의 경험과 노하우로
          <br />
          완성된 디자인
        </Reveal>
        <Reveal as="p" className={s.desc} delay={80}>
          디자인 감각, 빠른 속도, 정확한 니즈 파악, 그리고 끊임없는 업그레이드. 기획부터 디자인, 퍼블리싱까지 한 흐름으로 완성합니다.
        </Reveal>

        <div className={s.cards}>
          {/* ── Keywords card ── */}
          <Reveal variant="left" className={s.cardWrap}>
            <div className={s.dark}>
              <div className={s.dots} aria-hidden="true">
                {dots.map((d, i) => (
                  <i
                    key={i}
                    className={s.dotItem}
                    style={{
                      left: `${d.x}%`,
                      top: `${d.y}%`,
                      width: d.size,
                      height: d.size * 0.8,
                      animationDelay: `${d.delay}s`,
                      animationDuration: `${d.dur}s`,
                    }}
                  />
                ))}
              </div>
              <p className={s.darkLabel}>KEYWORDS</p>
              <ul className={s.keywords}>
                {KEYWORDS.map((k, i) => (
                  <li key={k.en} className={s.keyword} style={{ transitionDelay: `${200 + i * 120}ms` }}>
                    <span className={s.keywordNum}>0{i + 1}</span>
                    <span className={s.keywordKo}>{k.ko}</span>
                    <span className={s.keywordEn}>{k.en}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* ── Number card ── */}
          <Reveal variant="right" delay={120} className={s.cardWrap}>
            <div ref={numRef} className={[s.number, inView && s.numberIn].filter(Boolean).join(' ')}>
              <div className={s.waveWrap}>
                <img src={wave} alt="" className={s.wave} width={650} height={560} />
              </div>
              <p className={s.hours}>
                <span className={s.hoursNum}>{years}</span>
                <span className={s.hoursUnit}>years</span>
              </p>
              <p className={s.hoursLabel}>디자인 &amp; 퍼블리싱 경력 · {PROFILE.since} — 현재</p>
              <p className={s.ownership}>{PROFILE.ownership}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
