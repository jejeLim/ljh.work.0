import arrowDark from '@/assets/icons/arrow-dark.svg'
import s from './ArrowCircle.module.scss'

interface Props {
  size?: number
  className?: string
}

/** 테두리 원형 대각선 화살표 (카드 캡션 등) */
export function ArrowCircle({ size = 40, className }: Props) {
  return (
    <span className={[s.circle, className].filter(Boolean).join(' ')} style={{ width: size, height: size }} aria-hidden="true">
      <img src={arrowDark} alt="" width={18} height={18} />
    </span>
  )
}
