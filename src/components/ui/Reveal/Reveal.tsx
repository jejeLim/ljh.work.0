import type { CSSProperties, ElementType, ReactNode } from 'react'

type Variant = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade' | 'clip'

interface Props {
  as?: ElementType
  variant?: Variant
  delay?: number
  className?: string
  style?: CSSProperties
  children: ReactNode
  id?: string
}

/** 스크롤 진입 시 나타나는 래퍼. useReveal 훅이 전역에서 .is-in을 부여한다. */
export function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, className, style, children, id }: Props) {
  return (
    <Tag
      id={id}
      data-reveal={variant}
      className={className}
      style={{ ...style, '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
