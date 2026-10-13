import { useCallback, useEffect, useState } from 'react'
import s from './Lightbox.module.scss'

export interface LightboxImage {
  src: string
  alt?: string
  caption?: string
}

interface Props {
  images: LightboxImage[]
  /** 열린 인덱스. null이면 닫힘 */
  index: number | null
  onClose: () => void
  onChange?: (index: number) => void
}

/**
 * 이미지 확대 보기. 배경 클릭·ESC로 닫고, 좌우 키/버튼으로 이동한다.
 */
export function Lightbox({ images, index, onClose, onChange }: Props) {
  const open = index !== null && index >= 0 && index < images.length
  const total = images.length
  // 로드가 끝난 이미지의 src를 기억해 두면, 이미지가 바뀔 때 별도 초기화 없이 페이드인이 다시 동작한다
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null)

  const go = useCallback(
    (dir: 1 | -1) => {
      if (!open || total < 2) return
      onChange?.((index! + dir + total) % total)
    },
    [open, total, index, onChange],
  )

  // 바디 스크롤 잠금 + 키보드
  useEffect(() => {
    if (!open) return
    document.body.classList.add('is-locked')
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('is-locked')
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose, go])

  if (!open) return null
  const img = images[index!]
  const loaded = loadedSrc === img.src

  return (
    <div className={s.overlay} role="dialog" aria-modal="true" aria-label={img.alt ?? 'image viewer'} onClick={onClose}>
      <button type="button" className={s.close} onClick={onClose} aria-label="close">
        ×
      </button>

      {total > 1 && (
        <>
          <button
            type="button"
            className={[s.nav, s.navPrev].join(' ')}
            onClick={(e) => {
              e.stopPropagation()
              go(-1)
            }}
            aria-label="previous image"
          >
            ‹
          </button>
          <button
            type="button"
            className={[s.nav, s.navNext].join(' ')}
            onClick={(e) => {
              e.stopPropagation()
              go(1)
            }}
            aria-label="next image"
          >
            ›
          </button>
        </>
      )}

      <figure className={s.figure} onClick={(e) => e.stopPropagation()}>
        <img
          key={img.src}
          src={img.src}
          alt={img.alt ?? ''}
          className={[s.img, loaded && s.imgLoaded].filter(Boolean).join(' ')}
          onLoad={() => setLoadedSrc(img.src)}
        />
        <figcaption className={s.caption}>
          {img.caption && <span>{img.caption}</span>}
          {total > 1 && (
            <span className={s.counter}>
              {String(index! + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          )}
        </figcaption>
      </figure>
    </div>
  )
}
