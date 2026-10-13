import { useEffect, useState } from 'react'
import menuIcon from '@/assets/icons/menu.svg'
import langIcon from '@/assets/icons/lang.svg'
import { NAV_LINKS, CONTACT_EMAIL } from '@/data/portfolio'
import { useScrolled } from '@/hooks/useScrolled'
import { KakaoContact } from '@/components/ui/KakaoContact/KakaoContact'
import s from './Header.module.scss'

export function Header() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)

  // 메뉴가 열리면 바디 스크롤 잠금 + ESC로 닫기
  useEffect(() => {
    document.body.classList.toggle('is-locked', open)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('is-locked')
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header className={[s.header, scrolled && s.scrolled, open && s.open].filter(Boolean).join(' ')}>
        <div className={s.inner}>
          <a href="#top" className={s.logo} aria-label="LIM. home">
            LIM.
          </a>

          <button type="button" className={s.menuBtn} onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="site-menu">
            <span className={s.menuText}>{open ? 'CLOSE' : 'MENU'}</span>
            <span className={s.menuIcon}>
              <img src={menuIcon} alt="" width={22} height={22} />
            </span>
          </button>

          <div className={s.right}>
            <KakaoContact size="sm" className={s.contact}>
              Contact ↗
            </KakaoContact>
            <button type="button" className={s.lang} aria-label="language">
              <img src={langIcon} alt="" width={22} height={22} />
            </button>
          </div>
        </div>
      </header>

      <nav id="site-menu" className={[s.overlay, open && s.overlayOpen].filter(Boolean).join(' ')} aria-hidden={!open}>
        <ul className={s.navList}>
          {NAV_LINKS.map((link, i) => (
            <li key={link.href} style={{ transitionDelay: open ? `${120 + i * 60}ms` : '0ms' }}>
              <a href={link.href} onClick={() => setOpen(false)}>
                <span className={s.navNum}>0{i + 1}</span>
                <span className={s.navLabel}>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className={s.overlayFoot}>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <span>UX/UI Designer &amp; Web Publisher</span>
        </div>
      </nav>
    </>
  )
}
