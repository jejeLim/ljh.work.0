import type { MouseEvent } from 'react'
import { useScrolled } from '@/hooks/useScrolled'
import s from './ScrollTop.module.scss'

/** 스크롤이 일정 깊이를 넘으면 오른쪽 하단에 나타나는 '맨 위로' 버튼 */
export function ScrollTop({ threshold = 400 }: { threshold?: number }) {
  const visible = useScrolled(threshold)

  const toTop = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      className={[s.btn, visible && s.visible].filter(Boolean).join(' ')}
      onClick={toTop}
      aria-label="맨 위로 이동"
      inert={!visible}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 14.25V3.75M4.5 8.25L9 3.75L13.5 8.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className={s.label}>TOP</span>
    </button>
  )
}
