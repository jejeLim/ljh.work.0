import { useEffect, useState, type ReactNode } from 'react'
import { CONTACT } from '@/data/portfolio'
import { Pill } from '@/components/ui/Pill/Pill'
import s from './KakaoContact.module.scss'

interface Props {
  children: ReactNode
  variant?: 'light' | 'dark' | 'ghost' | 'cream'
  arrow?: boolean
  size?: 'sm' | 'md'
  className?: string
}

/**
 * 카카오톡 연락 버튼.
 * - CONTACT.kakaoAddUrl 이 있으면 그 링크(QR 친구추가)로 바로 연결
 * - 없으면 ID(jeje.b)와 복사 버튼, 친구추가 방법을 보여주는 창을 연다
 */
export function KakaoContact({ children, variant, arrow, size, className }: Props) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!open) return
    document.body.classList.add('is-locked')
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('is-locked')
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  if (CONTACT.kakaoAddUrl) {
    return (
      <Pill variant={variant} arrow={arrow} size={size} className={className} href={CONTACT.kakaoAddUrl} external>
        {children}
      </Pill>
    )
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.kakao)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      // 클립보드 권한이 없는 환경에서는 사용자가 직접 선택해 복사할 수 있도록 둔다
    }
  }

  return (
    <>
      <Pill variant={variant} arrow={arrow} size={size} className={className} onClick={() => setOpen(true)}>
        {children}
      </Pill>

      {open && (
        <div className={s.overlay} role="dialog" aria-modal="true" aria-labelledby="kakao-title" onClick={() => setOpen(false)}>
          <div className={s.card} onClick={(e) => e.stopPropagation()}>
            <button type="button" className={s.close} onClick={() => setOpen(false)} aria-label="close">
              ×
            </button>
            <p className={s.eyebrow}>KakaoTalk · 주 연락처</p>
            <h3 id="kakao-title" className={s.title}>
              카카오톡으로 연락하기
            </h3>
            <p className={s.desc}>
              카카오톡 <b>친구 추가 → ID로 추가</b>에서 아래 ID를 검색해 주세요.
            </p>

            <div className={s.idRow}>
              <span className={s.id}>{CONTACT.kakao}</span>
              <button type="button" className={[s.copy, copied && s.copied].filter(Boolean).join(' ')} onClick={copy}>
                {copied ? '복사됨 ✓' : 'ID 복사'}
              </button>
            </div>

            <div className={s.alt}>
              <a href={`mailto:${CONTACT.email}`}>이메일로 연락 ↗</a>
              <a href={`tel:${CONTACT.mobile.replace(/\s/g, '')}`}>전화 {CONTACT.mobile}</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
