import { useRef } from 'react'
import iconUiux from '@/assets/icons/skill-uiux.svg'
import iconBranding from '@/assets/icons/skill-branding.svg'
import iconMotion from '@/assets/icons/skill-motion.svg'
import iconWeb from '@/assets/icons/skill-web.svg'
import { SKILLS, TOOLS, type SkillItem } from '@/data/portfolio'
import { useInView } from '@/hooks/useInView'
import { useCountUp } from '@/hooks/useCountUp'
import { Reveal } from '@/components/ui/Reveal/Reveal'
import s from './Skills.module.scss'

const ICONS = { uiux: iconUiux, branding: iconBranding, motion: iconMotion, web: iconWeb } as const

function Stat({ value, suffix, start }: { value: number; suffix: string; start: boolean }) {
  const n = useCountUp(value, start, 1600)
  return (
    <span className={s.stat}>
      <span className={s.statNum}>{n}</span>
      <span className={s.statSuffix}>{suffix}</span>
    </span>
  )
}

function Skill({ item, index, start }: { item: SkillItem; index: number; start: boolean }) {
  return (
    <Reveal as="li" className={s.item} delay={index * 90}>
      <div className={s.iconWrap}>
        {item.stat ? (
          <Stat value={item.stat.value} suffix={item.stat.suffix} start={start} />
        ) : (
          <img src={ICONS[item.icon!]} alt="" className={s.icon} />
        )}
      </div>
      <h3 className={s.name}>{item.name}</h3>
      <p className={s.tool}>{item.tool}</p>
    </Reveal>
  )
}

export function Skills() {
  const ref = useRef<HTMLUListElement>(null)
  const inView = useInView(ref, { threshold: 0.3 })

  return (
    <section id="skills" className={s.skills}>
      <div className={s.inner}>
        <Reveal as="h2" className={s.title}>
          SKILLS &amp; TOOLS
        </Reveal>
        <Reveal as="p" className={s.desc} delay={100}>
          기획의 시작부터 화면 위 완성까지. 12년간 UX/UI 디자인과 웹 퍼블리싱을 한 흐름으로 다루며
          <br />
          디자인 감각, 빠른 속도, 정확한 니즈 파악으로 결과물을 꾸준히 업그레이드해 왔습니다.
        </Reveal>

        <ul ref={ref} className={s.list}>
          {SKILLS.map((item, i) => (
            <Skill key={item.id} item={item} index={i} start={inView} />
          ))}
        </ul>

        <Reveal as="ul" className={s.tools} delay={200}>
          {TOOLS.map((t) => (
            <li key={t} className={s.toolChip}>
              {t}
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
