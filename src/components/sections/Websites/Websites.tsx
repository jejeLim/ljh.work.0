import arrowLight from '@/assets/icons/arrow-light.svg'
import { WEBSITES, type WebsiteInfo } from '@/data/portfolio'
import { SectionLabel } from '@/components/ui/SectionLabel/SectionLabel'
import { ArrowCircle } from '@/components/ui/ArrowCircle/ArrowCircle'
import { Reveal } from '@/components/ui/Reveal/Reveal'
import s from './Websites.module.scss'

/** 브라우저 창 느낌의 프레임 안에 사이트 첫 화면을 보여준다 */
function Browser({ site, dark }: { site: WebsiteInfo; dark?: boolean }) {
  return (
    <div className={[s.browser, dark && s.browserDark].filter(Boolean).join(' ')}>
      <div className={s.chrome}>
        <span />
        <span />
        <span />
        <i className={s.url}>{site.name.toLowerCase().replace(/\s/g, '')}.landing</i>
      </div>
      <div className={s.screen}>
        <img src={site.image} alt={`${site.name} 랜딩페이지 첫 화면`} loading="lazy" />
      </div>
    </div>
  )
}

/** 대표 사이트(A · Corazon): A 디자인의 다크 글래스 + 프리즘 라이트 무드로 강조 */
function Featured({ site }: { site: WebsiteInfo }) {
  return (
    <Reveal variant="scale" className={s.featured}>
      <div className={s.featuredCard}>
        <span className={s.prism} aria-hidden="true">
          <i className={s.glow} />
          <i className={[s.beam, s.beam1].join(' ')} />
          <i className={[s.beam, s.beam2].join(' ')} />
          <i className={[s.beam, s.beam3].join(' ')} />
        </span>

        <div className={s.featuredCopy}>
          <span className={s.eyebrow}>Featured · 01</span>
          <h3 className={s.featuredTitle}>
            <a href={site.caseHref}>{site.name}</a>
          </h3>
          <p className={s.featuredKicker}>{site.kicker}</p>
          <p className={s.featuredDesc}>{site.desc}</p>
          <ul className={s.tags}>
            {site.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <div className={s.featuredActions}>
            <a href={site.caseHref} className={s.cta}>
              View case study
              <span className={s.ctaIcon}>
                <img src={arrowLight} alt="" width={16} height={16} />
              </span>
            </a>
            <a href={site.href} target="_blank" rel="noopener noreferrer" className={s.liveLink}>
              Live site ↗
            </a>
          </div>
        </div>

        <a href={site.caseHref} className={s.featuredShot} aria-label={`${site.name} 케이스 스터디 보기`}>
          <Browser site={site} dark />
        </a>
      </div>
    </Reveal>
  )
}

function Card({ site, index }: { site: WebsiteInfo; index: number }) {
  return (
    <Reveal as="li" className={s.card} delay={index * 100}>
      <div className={s.cardInner}>
        <a href={site.caseHref} className={s.cardShot} aria-label={`${site.name} 케이스 스터디 보기`}>
          <Browser site={site} />
        </a>
        <div className={s.cardBody}>
          <div>
            <h3 className={s.cardTitle}>
              <a href={site.caseHref}>{site.name}</a>
            </h3>
            <p className={s.cardKicker}>{site.kicker}</p>
            <p className={s.cardDesc}>{site.desc}</p>
            <div className={s.cardLinks}>
              <a href={site.caseHref} className={s.cardCase}>
                Case study
              </a>
              <a href={site.href} target="_blank" rel="noopener noreferrer" className={s.cardLive}>
                Live site ↗
              </a>
            </div>
          </div>
          <a href={site.caseHref} aria-label={`${site.name} 케이스 스터디 보기`}>
            <ArrowCircle className={s.cardArrow} />
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export function Websites() {
  const featured = WEBSITES.find((w) => w.featured) ?? WEBSITES[0]
  const rest = WEBSITES.filter((w) => w !== featured)

  return (
    <section id="websites" className={s.websites}>
      <div className={s.inner}>
        <Reveal variant="fade">
          <SectionLabel>WEBSITES</SectionLabel>
        </Reveal>
        <Reveal as="h2" className={s.title}>
          피그마 시안을 그대로 구현한 랜딩페이지
        </Reveal>
        <Reveal as="p" className={s.desc} delay={80}>
          디자인부터 반응형 퍼블리싱, 인터랙션까지 직접 코딩한 {WEBSITES.length}개의 사이트입니다. 카드를 누르면 메인 컨셉, 브랜드 색상, 컴포넌트, 반응형 구성을
          정리한 케이스 스터디로 이동합니다.
        </Reveal>

        <Featured site={featured} />

        <ul className={s.grid}>
          {rest.map((w, i) => (
            <Card key={w.id} site={w} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}
