import exploreIcon from '@/assets/icons/explore.svg'
import s from './ExploreBadge.module.scss'

interface Props {
  href?: string
  size?: number
  className?: string
}

/** 원형 explore 배지. 호버 시 화살표가 회전한다. */
export function ExploreBadge({ href = '#works', size = 128, className }: Props) {
  return (
    <a
      href={href}
      className={[s.badge, className].filter(Boolean).join(' ')}
      style={{ width: size, height: size }}
      aria-label="explore works"
    >
      <span className={s.ring} aria-hidden="true" />
      <img src={exploreIcon} alt="" className={s.icon} style={{ width: size * 0.26, height: size * 0.26 }} />
      <span className={s.text}>explore</span>
    </a>
  )
}
