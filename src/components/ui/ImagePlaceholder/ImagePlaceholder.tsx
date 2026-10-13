import type { CSSProperties, ReactNode } from 'react'
import s from './ImagePlaceholder.module.scss'

interface Props {
  gradient: string
  caption?: string
  className?: string
  style?: CSSProperties
  children?: ReactNode
  /** 실제 이미지가 준비되면 src를 넘기면 그라디언트 대신 표시된다 */
  src?: string
  alt?: string
}

/** 이미지 자리에 쓰는 그라디언트 플레이스홀더. src가 있으면 실제 이미지를 렌더링한다. */
export function ImagePlaceholder({ gradient, caption, className, style, children, src, alt = '' }: Props) {
  return (
    <div className={[s.box, className].filter(Boolean).join(' ')} style={{ backgroundImage: gradient, ...style }}>
      {src && <img src={src} alt={alt} className={s.img} loading="lazy" />}
      {children}
      {caption && !src && <span className={s.caption}>{caption}</span>}
    </div>
  )
}
