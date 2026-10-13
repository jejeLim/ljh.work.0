import { useEffect, useState, type RefObject } from 'react'

interface Options {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

/** 요소가 뷰포트에 들어왔는지 감지한다. once=true면 한 번 보이면 유지. */
export function useInView<T extends Element>(
  ref: RefObject<T | null>,
  { threshold = 0.2, rootMargin = '0px 0px -8% 0px', once = true }: Options = {},
) {
  // IntersectionObserver 미지원 환경에서는 처음부터 보이는 것으로 간주
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) io.unobserve(el)
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [ref, threshold, rootMargin, once])

  return inView
}
