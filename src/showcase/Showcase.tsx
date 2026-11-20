import type { ReactNode } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { Footer } from '@/components/layout/Footer/Footer'
import { ScrollTop } from '@/components/ui/ScrollTop/ScrollTop'
import { SectionLabel } from '@/components/ui/SectionLabel/SectionLabel'
import s from './Showcase.module.scss'

/** 의뢰자에게 URL로만 보내는 분야별 페이지(/ppt/, /web/)의 공통 틀 */

export const num = (n: number) => String(n + 1).padStart(2, '0')

export const icon = (d: string) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
)

export interface FlowStep {
  tag: string
  title: string
  desc: string
  icon: ReactNode
}

interface Props {
  label: string
  title: [string, string]
  lead: string
  notice: [string, string]
  flowHead: ReactNode
  flow: FlowStep[]
  children: ReactNode
  /** main 바깥(전체 폭)에 붙일 섹션 */
  after?: ReactNode
}

export function Showcase({ label, title, lead, notice, flowHead, flow, children, after }: Props) {
  useReveal()

  return (
    <>
      <a href="../" className={s.home}>
        다른 디자인 보러가기 →
      </a>
      <main className={s.page}>
        <header className={s.head}>
          <SectionLabel>{label}</SectionLabel>
          <h1 className={s.title}>
            {title[0]}
            <br />
            {title[1]}
          </h1>
          <p className={s.lead}>{lead}</p>
          <p className={s.notice}>
            {notice[0]}
            <br />
            {notice[1]}
          </p>
        </header>

        {/* 작업 방식: AI + Figma로 빠르게 제작 */}
        <section className={s.flow} aria-label="작업 방식">
          <p className={s.flowHead}>{flowHead}</p>
          <ol className={s.steps}>
            {flow.map((f, i) => (
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

        {children}
      </main>
      {after}
      <Footer />
      <ScrollTop />
    </>
  )
}
