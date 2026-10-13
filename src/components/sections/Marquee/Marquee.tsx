import { MARQUEE_ITEMS } from '@/data/portfolio'
import s from './Marquee.module.scss'

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className={s.track} aria-hidden={hidden}>
      {MARQUEE_ITEMS.map((item) => (
        <li key={item} className={s.group}>
          <span className={s.word}>{item}</span>
          <span className={s.plus} aria-hidden="true">
            +
          </span>
          <span className={s.slash} aria-hidden="true">
            /
          </span>
        </li>
      ))}
    </ul>
  )
}

/** 무한 스크롤 텍스트 띠. 호버 시 일시정지. */
export function Marquee() {
  return (
    <section id="marquee" className={s.marquee}>
      <div className={s.mover}>
        <Track />
        <Track hidden />
      </div>
    </section>
  )
}
