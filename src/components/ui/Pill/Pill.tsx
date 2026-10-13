import type { ReactNode } from 'react'
import arrowLight from '@/assets/icons/arrow-light.svg'
import arrowDark from '@/assets/icons/arrow-footer.svg'
import s from './Pill.module.scss'

type Variant = 'light' | 'dark' | 'ghost' | 'cream'

interface Props {
  children: ReactNode
  variant?: Variant
  /** 오른쪽에 원형 화살표 아이콘 */
  arrow?: boolean
  active?: boolean
  dim?: boolean
  href?: string
  /** href가 있을 때 새 탭으로 열기 */
  external?: boolean
  onClick?: () => void
  className?: string
  size?: 'sm' | 'md'
}

export function Pill({ children, variant = 'light', arrow = false, active, dim, href, external, onClick, className, size = 'md' }: Props) {
  const cls = [s.pill, s[variant], s[size], arrow && s.hasArrow, active && s.active, dim && s.dim, className]
    .filter(Boolean)
    .join(' ')

  const inner = (
    <>
      <span className={s.label}>{children}</span>
      {arrow && (
        <span className={s.arrow}>
          <img src={variant === 'dark' || variant === 'cream' ? arrowDark : arrowLight} alt="" width={16} height={16} />
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
        {inner}
      </a>
    )
  }
  return (
    <button type="button" className={cls} onClick={onClick} aria-pressed={active}>
      {inner}
    </button>
  )
}
