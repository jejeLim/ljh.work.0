// SiteC: C.html 를 React로 변환한 페이지 (단일 파일, 컴포넌트 분리 없음)
import { useEffect, type CSSProperties } from 'react'
import { init } from './script.js'
import './site.scss'

export function SiteC() {
  // 원본 스크립트는 DOM을 직접 조립하므로 마운트 후 한 번만 실행한다
  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#EBC1B3" />
            <stop offset="1" stopColor="#9E6B5F" />
          </linearGradient>
        </defs>
        <symbol id="i-cabin" viewBox="0 0 24 24">
          <path d="M12 3L3 20h18L12 3z" />
          <path d="M12 11l-3.5 9M12 11l3.5 9M9.5 16h5" />
        </symbol>
        <symbol id="i-menu" viewBox="0 0 24 24">
          <path d="M4 8h16M4 16h16" />
        </symbol>
        <symbol id="i-x" viewBox="0 0 24 24">
          <path d="M6 6l12 12M18 6L6 18" />
        </symbol>
        <symbol id="i-phone" viewBox="0 0 24 24">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
        </symbol>
        <symbol id="i-al" viewBox="0 0 24 24">
          <path d="M15 6l-6 6 6 6" />
        </symbol>
        <symbol id="i-ar" viewBox="0 0 24 24">
          <path d="M9 6l6 6-6 6" />
        </symbol>
        <symbol id="i-up" viewBox="0 0 24 24">
          <path d="M12 19V5M6 11l6-6 6 6" />
        </symbol>
        <symbol id="i-down" viewBox="0 0 24 24">
          <path d="M6 9l6 6 6-6" />
          <path d="M6 4l6 6 6-6" opacity=".5" />
        </symbol>
        <symbol id="i-check" viewBox="0 0 24 24">
          <path d="M5 12l5 5L20 7" />
        </symbol>
        <symbol id="i-plus" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12h14" />
        </symbol>
        <symbol id="i-grill" viewBox="0 0 24 24">
          <path d="M4 9h16a8 8 0 0 1-16 0z" />
          <path d="M8 17l-2 4M16 17l2 4M12 17v4M8 6c0-1 1-1.5 1-2.5M12 6c0-1 1-1.5 1-2.5M16 6c0-1 1-1.5 1-2.5" />
        </symbol>
        <symbol id="i-tub" viewBox="0 0 24 24">
          <path d="M3 12h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z" />
          <path d="M8 9c0-1.2 1-1.6 1-2.8M12 9c0-1.2 1-1.6 1-2.8M16 9c0-1.2 1-1.6 1-2.8" />
        </symbol>
        <symbol id="i-paw" viewBox="0 0 24 24">
          <circle cx="7" cy="9" r="1.8" />
          <circle cx="11" cy="6" r="1.8" />
          <circle cx="15" cy="7" r="1.8" />
          <circle cx="18" cy="11" r="1.6" />
          <path d="M8 17c0-3 2-5 4.5-5s4 2 4 4.5c0 2-1.5 3.5-4 3.5S8 19.5 8 17z" />
        </symbol>
        <symbol id="i-clock" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </symbol>
        <symbol id="i-car" viewBox="0 0 24 24">
          <path d="M5 16V11l2-5h10l2 5v5" />
          <path d="M3 16h18v3H3zM7 19v2M17 19v2M5 11h14" />
        </symbol>
        <symbol id="i-coffee" viewBox="0 0 24 24">
          <path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
          <path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H17M8 3c0 1.5 1 1.5 1 3M12 3c0 1.5 1 1.5 1 3" />
        </symbol>
        <symbol id="i-userp" viewBox="0 0 24 24">
          <circle cx="10" cy="8" r="4" />
          <path d="M3 21a7 7 0 0 1 14 0M19 8v6M16 11h6" />
        </symbol>
        <symbol id="i-fire" viewBox="0 0 24 24">
          <path d="M12 3c2 3 5 5 5 9a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3 0-5 1-8z" />
          <path d="M5 21l14-3M5 18l14 3" />
        </symbol>
        <symbol id="i-cal" viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </symbol>
        <symbol id="i-bed" viewBox="0 0 24 24">
          <path d="M2 18V7M2 13h20v5M22 13a3 3 0 0 0-3-3h-8v3" />
          <circle cx="6" cy="11" r="1.5" />
        </symbol>
        <symbol id="i-users" viewBox="0 0 24 24">
          <circle cx="9" cy="8" r="3.5" />
          <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6" />
        </symbol>
        <symbol id="i-card" viewBox="0 0 24 24">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20M6 15h4" />
        </symbol>
        <symbol id="i-msg" viewBox="0 0 24 24">
          <path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.4A8 8 0 1 1 21 12z" />
          <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
        </symbol>
        <symbol id="i-key" viewBox="0 0 24 24">
          <circle cx="8" cy="15" r="4" />
          <path d="M11 12l9-9M16 7l3 3" />
        </symbol>
        <symbol id="i-pin" viewBox="0 0 24 24">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </symbol>
        <symbol id="i-bus" viewBox="0 0 24 24">
          <rect x="4" y="3" width="16" height="15" rx="2" />
          <path d="M4 11h16M8 18v3M16 18v3" />
        </symbol>
        <symbol id="i-ig" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".6" />
        </symbol>
        <symbol id="i-chat" viewBox="0 0 24 24">
          <path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.4A8 8 0 1 1 21 12z" />
        </symbol>
        <symbol id="i-send" viewBox="0 0 24 24">
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />
        </symbol>
        <symbol id="lau" viewBox="0 0 60 100">
          <path d="M46 96C22 84 12 58 20 8" stroke="url(#lg)" strokeWidth="1.8" fill="none" />
          <g fill="url(#lg)">
            <ellipse cx="33" cy="86" rx="3.6" ry="8.5" transform="rotate(-93 33 86)" />
            <ellipse cx="25" cy="75" rx="3.6" ry="8.5" transform="rotate(-80 25 75)" />
            <ellipse cx="18" cy="62" rx="3.6" ry="8.5" transform="rotate(-68 18 62)" />
            <ellipse cx="13" cy="49" rx="3.6" ry="8.5" transform="rotate(-56 13 49)" />
            <ellipse cx="11" cy="36" rx="3.6" ry="8.5" transform="rotate(-44 11 36)" />
            <ellipse cx="12" cy="23" rx="3.6" ry="8.5" transform="rotate(-32 12 23)" />
            <ellipse cx="15" cy="11" rx="3.6" ry="8.5" transform="rotate(-20 15 11)" />
          </g>
          <g fill="url(#lg)" opacity=".85">
            <ellipse cx="46" cy="83" rx="3.2" ry="7.5" transform="rotate(-21 46 83)" />
            <ellipse cx="38" cy="72" rx="3.2" ry="7.5" transform="rotate(-8 38 72)" />
            <ellipse cx="31" cy="59" rx="3.2" ry="7.5" transform="rotate(4 31 59)" />
            <ellipse cx="26" cy="46" rx="3.2" ry="7.5" transform="rotate(16 26 46)" />
            <ellipse cx="24" cy="33" rx="3.2" ry="7.5" transform="rotate(28 24 33)" />
            <ellipse cx="25" cy="20" rx="3.2" ry="7.5" transform="rotate(40 25 20)" />
          </g>
        </symbol>
      </svg>
      <header className="hd" id="hd">
        <div className="wrap hd-in">
          <a className="logo" href="#top" aria-label="느린숲 홈">
            <svg className="ic">
              <use href="#i-cabin" />
            </svg>
            <span>
              <b>{"\ub290\ub9b0\uc232"}</b>
              <i>{"Neurin Forest"}</i>
            </span>
          </a>
          <nav className="nav" aria-label="주요 메뉴">
            <a href="#rooms">{"\uac1d\uc2e4"}</a>
            <a href="#gallery">{"\uac24\ub7ec\ub9ac"}</a>
            <a href="#price">{"\uc774\uc6a9\uc694\uae08"}</a>
            <a href="#steps">{"\uc608\uc57d\uc548\ub0b4"}</a>
            <a href="#reviews">{"\ud6c4\uae30"}</a>
            <a href="#contact">{"\uc624\uc2dc\ub294 \uae38"}</a>
          </nav>
          <div className="hd-r">
            <span className="tel">
              <svg className="ic">
                <use href="#i-phone" />
              </svg>
              {"031-000-0000"}
            </span>
            {" "}
            <a className="btn btn-cream btn-sm" href="#contact">{"\uc608\uc57d\ud558\uae30"}</a>
            {" "}
            <button className="menu-btn" id="menuBtn" type="button" aria-label="메뉴 열기" aria-expanded="false" aria-controls="mmenu">
              <svg className="ic">
                <use href="#i-menu" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className="mmenu" id="mmenu" hidden>
        <div className="wrap mm-in">
          <div className="mm-top">
            <a className="logo" href="#top">
              <svg className="ic">
                <use href="#i-cabin" />
              </svg>
              <span>
                <b>{"\ub290\ub9b0\uc232"}</b>
                <i>{"Neurin Forest"}</i>
              </span>
            </a>
            <button className="menu-btn" style={{ display: "grid" }} id="menuClose" type="button" aria-label="메뉴 닫기">
              <svg className="ic">
                <use href="#i-x" />
              </svg>
            </button>
          </div>
          <nav className="mm-links" aria-label="모바일 메뉴">
            <a href="#rooms" style={{ "--k": "0" } as CSSProperties}>{"\uac1d\uc2e4"}</a>
            <a href="#gallery" style={{ "--k": "1" } as CSSProperties}>{"\uac24\ub7ec\ub9ac"}</a>
            <a href="#price" style={{ "--k": "2" } as CSSProperties}>{"\uc774\uc6a9\uc694\uae08"}</a>
            <a href="#steps" style={{ "--k": "3" } as CSSProperties}>{"\uc608\uc57d\uc548\ub0b4"}</a>
            <a href="#reviews" style={{ "--k": "4" } as CSSProperties}>{"\ud6c4\uae30"}</a>
            <a href="#contact" style={{ "--k": "5" } as CSSProperties}>{"\uc624\uc2dc\ub294 \uae38"}</a>
          </nav>
          <div className="mm-foot">
            <span>{"\uc608\uc57d \uc804\ud654 031-000-0000"}</span>
            <a className="btn btn-cream btn-lg" href="#contact">{"\uc608\uc57d \ubb38\uc758\ud558\uae30"}</a>
          </div>
        </div>
      </div>
      <main>
        <section className="hero" id="top">
          <div className="wrap">
            <div className="hero-in">
              <div className="hero-tx">
                <span className="en">{"Neurin Forest \u00b7 Gapyeong"}</span>
                <h1 className="h1">
                  <span className="ln">
                    <span>{"\uc232\uc5d0\uc11c \ubcf4\ub0b4\ub294"}</span>
                  </span>
                  <span className="ln">
                    <span>{"\ub290\ub9b0 \ud558\ub8e8"}</span>
                  </span>
                </h1>
                <p>{"\uac00\ud3c9 \uae4a\uc740 \uc232\uc18d, \ub2e8 6\ucc44\uc758 A-\ud504\ub808\uc784 \uc624\ub450\ub9c9. \uc7a5\uc791 \ud0c0\ub294 \uc18c\ub9ac\uc640 \ubcc4\ube5b \uc544\ub798\uc5d0\uc11c \ucc9c\ucc9c\ud788 \uc26c\uc5b4\uac00\uc138\uc694."}</p>
                <div className="hero-cta">
                  <a className="btn btn-cream btn-lg" href="#contact">{"\uc608\uc57d\ud558\uae30"}</a>
                  <a className="btn btn-olc btn-lg" href="#rooms">{"\uac1d\uc2e4 \ub458\ub7ec\ubcf4\uae30"}</a>
                </div>
                <dl className="hero-info">
                  <div>
                    <dt>{"\uccb4\ud06c\uc778"}</dt>
                    <dd>{"15:00"}</dd>
                  </div>
                  <div>
                    <dt>{"\uccb4\ud06c\uc544\uc6c3"}</dt>
                    <dd>{"11:00"}</dd>
                  </div>
                  <div>
                    <dt>{"\uac1d\uc2e4"}</dt>
                    <dd>{"6\ucc44"}</dd>
                  </div>
                </dl>
              </div>
              <div className="hero-ph">
                <div className="ph ph-cabin" role="img" aria-label="숲속 A-프레임 오두막 외관" />
                <span className="hero-badge">
                  <i />
                  {"\uc774\ubc88 \uc8fc\ub9d0 2\ucc44 \ub0a8\uc74c"}
                </span>
              </div>
            </div>
            <a className="scroll" href="#gallery">
              {"\ub354 \uc54c\uc544\ubcf4\uae30"}
              <svg className="ic">
                <use href="#i-down" />
              </svg>
            </a>
          </div>
        </section>
        <div className="edge" style={{ "--top": "var(--esp)", "--bot": "var(--paper)" } as CSSProperties} aria-hidden="true" />
        <section className="sec paper" id="gallery">
          <div className="wrap">
            <div className="head" data-rv>
              <span className="en">{"Gallery"}</span>
              <h2 className="h2">{"\uacf5\uac04 \ub458\ub7ec\ubcf4\uae30"}</h2>
              <p className="lead">{"\ud1b5\ub098\ubb34 \ud5a5\uc774 \ub0a8\uc544 \uc788\ub294 \uac1d\uc2e4\ubd80\ud130 \ubcc4\uc774 \uc3df\uc544\uc9c0\ub294 \ubd88\uba4d \uc790\ub9ac\uae4c\uc9c0."}</p>
            </div>
            <div className="cf" id="cf" aria-roledescription="carousel" aria-label="펜션 사진" />
            <div className="thumbs" id="thumbs" aria-label="사진 선택" />
            <div className="g-ctrl">
              <button className="circ" type="button" id="gPrev" aria-label="이전 사진">
                <svg className="ic">
                  <use href="#i-al" />
                </svg>
              </button>
              <button className="btn btn-fill" type="button" id="gOpen">{"\uac24\ub7ec\ub9ac \ud06c\uac8c \ubcf4\uae30"}</button>
              <button className="circ" type="button" id="gNext" aria-label="다음 사진">
                <svg className="ic">
                  <use href="#i-ar" />
                </svg>
              </button>
            </div>
          </div>
        </section>
        <dialog className="lightbox" id="lb" aria-label="사진 크게 보기">
          <div className="ph lb-ph" id="lbPh" role="img" />
          <div className="lb-bar">
            <button className="circ" type="button" id="lbPrev" aria-label="이전 사진">
              <svg className="ic">
                <use href="#i-al" />
              </svg>
            </button>
            <span className="lb-cap" id="lbCap" />
            <div style={{ display: "flex", gap: "8px" }}>
              <button className="circ" type="button" id="lbNext" aria-label="다음 사진">
                <svg className="ic">
                  <use href="#i-ar" />
                </svg>
              </button>
              <button className="circ" type="button" id="lbClose" aria-label="닫기">
                <svg className="ic">
                  <use href="#i-x" />
                </svg>
              </button>
            </div>
          </div>
        </dialog>
        <div className="edge flip" style={{ "--top": "var(--paper)", "--bot": "var(--esp)" } as CSSProperties} aria-hidden="true" />
        <section className="sec dark" id="numbers">
          <div className="wrap">
            <div className="head" data-rv>
              <span className="en">{"In Numbers"}</span>
              <h2 className="h2">{"\uc190\ub2d8\ub4e4\uc774 \uc99d\uba85\ud55c \uc232\uc18d \ud734\uc2dd"}</h2>
            </div>
            <div className="stats" id="stats">
              <div className="stat">
                <svg className="lau l" viewBox="0 0 60 100" aria-hidden="true">
                  <use href="#lau" />
                </svg>
                <svg className="lau r" viewBox="0 0 60 100" aria-hidden="true">
                  <use href="#lau" />
                </svg>
                <span className="stars" aria-hidden="true">{"\u2605\u2605\u2605\u2605\u2605"}</span>
                <small>{"\ub204\uc801 \ud22c\uc219"}</small>
                <strong data-to="12000" data-fmt="comma" data-suf="팀">{"12,000\ud300"}</strong>
              </div>
              <div className="stat">
                <svg className="lau l" viewBox="0 0 60 100" aria-hidden="true">
                  <use href="#lau" />
                </svg>
                <svg className="lau r" viewBox="0 0 60 100" aria-hidden="true">
                  <use href="#lau" />
                </svg>
                <span className="stars" aria-hidden="true">{"\u2605\u2605\u2605\u2605\u2605"}</span>
                <small>{"\uc7ac\ubc29\ubb38\uc728"}</small>
                <strong data-to="38" data-suf="%">{"38%"}</strong>
              </div>
              <div className="stat">
                <svg className="lau l" viewBox="0 0 60 100" aria-hidden="true">
                  <use href="#lau" />
                </svg>
                <svg className="lau r" viewBox="0 0 60 100" aria-hidden="true">
                  <use href="#lau" />
                </svg>
                <span className="stars" aria-hidden="true">{"\u2605\u2605\u2605\u2605\u2605"}</span>
                <small>{"\ud3c9\uade0 \ud3c9\uc810"}</small>
                <strong data-to="4.9" data-dec="1" data-suf=" / 5">{"4.9 / 5"}</strong>
              </div>
              <div className="stat">
                <svg className="lau l" viewBox="0 0 60 100" aria-hidden="true">
                  <use href="#lau" />
                </svg>
                <svg className="lau r" viewBox="0 0 60 100" aria-hidden="true">
                  <use href="#lau" />
                </svg>
                <span className="stars" aria-hidden="true">{"\u2605\u2605\u2605\u2605\u2605"}</span>
                <small>{"\uc774\uc6a9 \ud6c4\uae30"}</small>
                <strong data-to="3200" data-fmt="comma" data-suf="+개">{"3,200+\uac1c"}</strong>
              </div>
            </div>
            <span className="vline" aria-hidden="true" />
            <div className="closing" data-rv>
              <p>{"\uc190\ub2d8\ub4e4\uc774 \ub0a8\uaca8\uc8fc\uc2e0 \ubcc4\uc810,"}</p>
              <p>
                {"\ub354 \ub530\ub73b\ud55c \uc27c\uc73c\ub85c"}
                <br />
                {"\ubcf4\ub2f5\ud558\uaca0\uc2b5\ub2c8\ub2e4."}
              </p>
            </div>
          </div>
        </section>
        <div className="edge" style={{ "--top": "var(--esp)", "--bot": "var(--paper)" } as CSSProperties} aria-hidden="true" />
        <section className="sec paper" id="gift">
          <div className="wrap split">
            <div className="split-tx" data-rv>
              <span className="en">{"Anniversary Package"}</span>
              <h2 className="h2">
                {"\uae30\ub150\uc77c\uc5d4,"}
                <br />
                {"\uc232\uc744 \uc120\ubb3c\ud558\uc138\uc694"}
              </h2>
              <p>{"\uc0dd\uc77c, \ud504\ub7ec\ud3ec\uc988, \uacb0\ud63c\uae30\ub150\uc77c. \ud2b9\ubcc4\ud55c \ud558\ub8e8\ub97c \uc704\ud574 \uac1d\uc2e4 \uc7a5\uc2dd\ubd80\ud130 \ucf00\uc774\ud06c\uc640 \uc640\uc778, \ubaa8\ub2e5\ubd88\uae4c\uc9c0 \ubbf8\ub9ac \uc900\ube44\ud574 \ub458\uac8c\uc694."}</p>
              <ul className="checks">
                <li>
                  <span className="dot">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                  {"\uac1d\uc2e4 \uaf43 \uc7a5\uc2dd & \ub808\ud130\ub9c1 \uac00\ub79c\ub4dc"}
                </li>
                <li>
                  <span className="dot">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                  {"\ucf00\uc774\ud06c \u00b7 \uc640\uc778 \uc138\ud305 (2\uc778)"}
                </li>
                <li>
                  <span className="dot">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                  {"\ubd88\uba4d \uc138\ud2b8 & \ub9c8\uc2dc\uba5c\ub85c"}
                </li>
                <li>
                  <span className="dot">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                  {"\ub808\uc774\ud2b8 \uccb4\ud06c\uc544\uc6c3 13:00"}
                </li>
              </ul>
              <div className="buy">
                <a className="btn btn-fill" href="#contact" data-pick="기념일 패키지">{"\ud328\ud0a4\uc9c0 \uc608\uc57d\ud558\uae30"}</a>
                <div>
                  <small>{"\uac1d\uc2e4 \uc694\uae08 +"}</small>
                  <b>{"\u20a989,000"}</b>
                </div>
              </div>
            </div>
            <div className="split-ph" data-par>
              <div className="ph ph-fire" role="img" aria-label="숲속 오두막 앞 모닥불과 의자" />
            </div>
          </div>
        </section>
        <section className="strip" aria-label="부대시설">
          <ul className="wrap" data-st>
            <li>
              <span className="ring">
                <svg className="ic">
                  <use href="#i-grill" />
                </svg>
              </span>
              <div>
                <b>{"\uac1d\uc2e4\ub9c8\ub2e4 \uac1c\ubcc4 \ubc14\ube44\ud050 \ub370\ud06c"}</b>
                <span>{"\uc22f\uacfc \uadf8\ub9b4\ub9cc \uc2e0\uccad\ud558\uba74 \ubc14\ub85c \uc2dc\uc791"}</span>
              </div>
            </li>
            <li>
              <span className="ring">
                <svg className="ic">
                  <use href="#i-tub" />
                </svg>
              </span>
              <div>
                <b>{"\ud504\ub77c\uc774\ube57 \ub178\ucc9c \uc2a4\ud30c"}</b>
                <span>{"\uc232\uc744 \ubc14\ub77c\ubcf4\ub294 \ud788\ub178\ud0a4 \uc695\uc870"}</span>
              </div>
            </li>
            <li>
              <span className="ring">
                <svg className="ic">
                  <use href="#i-paw" />
                </svg>
              </span>
              <div>
                <b>{"\ubc18\ub824\uacac \ub3d9\ubc18 \uac1d\uc2e4 2\ucc44"}</b>
                <span>{"\uc18c\ud615\uacac 2\ub9c8\ub9ac\uae4c\uc9c0 \ud568\uaed8"}</span>
              </div>
            </li>
          </ul>
        </section>
        <section className="sec paper" id="rooms">
          <div className="wrap">
            <div className="head" data-rv>
              <span className="en">{"Rooms"}</span>
              <h2 className="h2">{"\uba38\ubb3c \uacf3\uc744 \uace0\ub974\uc138\uc694"}</h2>
              <p className="lead">{"\ub458\uc774\uc11c \uc870\uc6a9\ud788, \uac00\uc871\uacfc \ub109\ub109\ud558\uac8c. \ubaa8\ub4e0 \uac1d\uc2e4\uc5d0 \uac1c\ubcc4 \ubc14\ube44\ud050 \ub370\ud06c\uac00 \uc788\uc5b4\uc694."}</p>
            </div>
            <div className="rooms" data-st>
              <article className="room">
                <div className="room-ph">
                  <div className="ph ph-room" role="img" aria-label="솔 객실 침실" />
                  <span className="cap">{"2\uc778"}</span>
                </div>
                <div className="room-b">
                  <span className="en">{"Sol"}</span>
                  <h3>{"\uc194 \uac1d\uc2e4"}</h3>
                  <p>{"\uae30\uc900 2\uc778 \u00b7 \ucd5c\ub300 3\uc778 \u00b7 33\u33a1 \u00b7 \ud038 \uce68\ub300"}</p>
                  <div className="room-f">
                    <div>
                      <small>{"1\ubc15 \uae30\uc900"}</small>
                      <b>{"\u20a9180,000~"}</b>
                    </div>
                    <a className="btn btn-ol btn-sm" href="#contact" data-pick="솔 객실">{"\uc608\uc57d \ubb38\uc758"}</a>
                  </div>
                </div>
              </article>
              <article className="room">
                <div className="room-ph">
                  <div className="ph ph-loft" role="img" aria-label="바람 객실 복층 거실" />
                  <span className="cap">{"4\uc778"}</span>
                </div>
                <div className="room-b">
                  <span className="en">{"Baram"}</span>
                  <h3>{"\ubc14\ub78c \uac1d\uc2e4"}</h3>
                  <p>{"\uae30\uc900 2\uc778 \u00b7 \ucd5c\ub300 4\uc778 \u00b7 46\u33a1 \u00b7 \ubcf5\uce35"}</p>
                  <div className="room-f">
                    <div>
                      <small>{"1\ubc15 \uae30\uc900"}</small>
                      <b>{"\u20a9230,000~"}</b>
                    </div>
                    <a className="btn btn-ol btn-sm" href="#contact" data-pick="바람 객실">{"\uc608\uc57d \ubb38\uc758"}</a>
                  </div>
                </div>
              </article>
              <article className="room">
                <div className="room-ph">
                  <div className="ph ph-spa" role="img" aria-label="숲 객실 노천 스파" />
                  <span className="cap">{"6\uc778"}</span>
                </div>
                <div className="room-b">
                  <span className="en">{"Soop"}</span>
                  <h3>{"\uc232 \uac1d\uc2e4"}</h3>
                  <p>{"\uae30\uc900 4\uc778 \u00b7 \ucd5c\ub300 6\uc778 \u00b7 59\u33a1 \u00b7 \ub178\ucc9c \uc2a4\ud30c"}</p>
                  <div className="room-f">
                    <div>
                      <small>{"1\ubc15 \uae30\uc900"}</small>
                      <b>{"\u20a9320,000~"}</b>
                    </div>
                    <a className="btn btn-ol btn-sm" href="#contact" data-pick="숲 객실">{"\uc608\uc57d \ubb38\uc758"}</a>
                  </div>
                </div>
              </article>
              <article className="room">
                <div className="room-ph">
                  <div className="ph ph-cabin" role="img" aria-label="별채 외관" />
                  <span className="cap">{"8\uc778"}</span>
                </div>
                <div className="room-b">
                  <span className="en">{"Byeolchae"}</span>
                  <h3>{"\ubcc4\ucc44"}</h3>
                  <p>{"\uae30\uc900 6\uc778 \u00b7 \ucd5c\ub300 8\uc778 \u00b7 82\u33a1 \u00b7 \ub3c5\ucc44"}</p>
                  <div className="room-f">
                    <div>
                      <small>{"1\ubc15 \uae30\uc900"}</small>
                      <b>{"\u20a9450,000~"}</b>
                    </div>
                    <a className="btn btn-ol btn-sm" href="#contact" data-pick="별채">{"\uc608\uc57d \ubb38\uc758"}</a>
                  </div>
                </div>
              </article>
            </div>
            <div className="center-btn">
              <a className="btn btn-ol" href="#price">{"\uac1d\uc2e4 \uc694\uae08 \ube44\uad50\ud558\uae30"}</a>
            </div>
          </div>
        </section>
        <section className="strip" aria-label="이용 안내">
          <ul className="wrap" data-st>
            <li>
              <span className="ring">
                <svg className="ic">
                  <use href="#i-clock" />
                </svg>
              </span>
              <div>
                <b>{"\uccb4\ud06c\uc778 15:00 \u00b7 \uccb4\ud06c\uc544\uc6c3 11:00"}</b>
                <span>{"\uc5bc\ub9ac \uccb4\ud06c\uc778\uc740 \uc804\ub0a0\uae4c\uc9c0 \ubb38\uc758"}</span>
              </div>
            </li>
            <li>
              <span className="ring">
                <svg className="ic">
                  <use href="#i-car" />
                </svg>
              </span>
              <div>
                <b>{"\ubb34\ub8cc \uc8fc\ucc28 12\ub300"}</b>
                <span>{"\uac1d\uc2e4 \ubc14\ub85c \uc55e\uae4c\uc9c0 \ucc28\ub7c9 \uc9c4\uc785"}</span>
              </div>
            </li>
            <li>
              <span className="ring">
                <svg className="ic">
                  <use href="#i-coffee" />
                </svg>
              </span>
              <div>
                <b>{"\ub9e4\uc77c \uc544\uce68 \uc6f0\ucef4 \uc870\uc2dd"}</b>
                <span>{"\uc218\uc81c \ube75\uacfc \ud578\ub4dc\ub4dc\ub9bd \ucee4\ud53c"}</span>
              </div>
            </li>
          </ul>
        </section>
        <section className="sec paper2 story" id="story">
          <div className="wrap split">
            <div className="stack" data-rv>
              <div className="ph ph-forest" role="img" aria-label="안개 낀 숲길과 오두막" />
            </div>
            <div className="split-tx" data-rv>
              <span className="en">{"Our Story \u00b7 since 2016"}</span>
              <h2 className="h2">
                {"\uc232\uc744 \ub2ee\uc740 \uc9d1\uc744"}
                <br />
                {"\uc9d3\uae30 \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4"}
              </h2>
              <p>
                {"\uc11c\uc6b8\uc5d0\uc11c \uc9c0\uce5c \ubab8\uc73c\ub85c \ucc98\uc74c \uc774 \uc232\uc5d0 \uc654\ub358 \ub0a0, \uc6b0\ub9ac\ub294 \uc774\uacf3\uc5d0 \uba38\ubb3c\uae30\ub85c \ud588\uc2b5\ub2c8\ub2e4. \uc190\uc73c\ub85c \ub2e4\ub4ec\uc740 \ub098\ubb34\uc640 \uc624\ub798 \uc4f8\uc218\ub85d \ud3b8\ud574\uc9c0\ub294 \uac00\uad6c\ub4e4\ub85c \uc624\ub450\ub9c9\uc744 \ud55c \ucc44\uc529 \uc9c0\uc5c8\uace0, \uc5b4\ub290\ub367 \uc5ec\uc12f \ucc44\uac00 \ub418\uc5c8\uc5b4\uc694."}
              </p>
              <p>{"\ubc14\uc058\uac8c \uc0ac\ub294 \uc0ac\ub78c\ub4e4\uc774 \uc7a0\uc2dc \uba48\ucdb0 \uac08 \uc218 \uc788\ub294 \uacf3. \ub290\ub9b0\uc232\uc774 \ucc98\uc74c\ubd80\ud130 \uc9c0\uae08\uae4c\uc9c0 \uc9c0\ud0a4\uace0 \uc2f6\uc740 \ub2e8 \ud558\ub098\uc758 \uc57d\uc18d\uc785\ub2c8\ub2e4."}</p>
              <span className="sign">{"\u2014 \ub290\ub9b0\uc232 \uc8fc\uc778\uc7a5 \ubd80\ubd80 \ub4dc\ub9bc"}</span>
            </div>
          </div>
        </section>
        <div className="edge" style={{ "--top": "var(--paper2)", "--bot": "var(--esp)" } as CSSProperties} aria-hidden="true" />
        <section className="sec dark" id="steps">
          <div className="wrap">
            <div className="head" data-rv>
              <span className="en">{"How to Book"}</span>
              <h2 className="h2">{"\uc608\uc57d\uc740 \uc774\ub807\uac8c \uc9c4\ud589\ub3fc\uc694"}</h2>
              <p className="lead">{"\uc804\ud654\ub098 \ubb38\uc758 \ud3fc\uc73c\ub85c \uac04\ud3b8\ud558\uac8c. \ud655\uc815\uae4c\uc9c0 \uc624\ub798 \uac78\ub9ac\uc9c0 \uc54a\uc544\uc694."}</p>
            </div>
            <ol className="steps" id="stepList">
              <li className="step">
                <span className="c">
                  <em>{"01"}</em>
                  <svg className="ic">
                    <use href="#i-cal" />
                  </svg>
                </span>
                <b>{"\ub0a0\uc9dc \uc120\ud0dd"}</b>
                <span>{"\uc6d0\ud558\ub294 \ub0a0\uc9dc\uc758 \ube48 \uac1d\uc2e4 \ud655\uc778"}</span>
              </li>
              <li className="step">
                <span className="c">
                  <em>{"02"}</em>
                  <svg className="ic">
                    <use href="#i-bed" />
                  </svg>
                </span>
                <b>{"\uac1d\uc2e4 \uc120\ud0dd"}</b>
                <span>{"\uc778\uc6d0\uacfc \ucde8\ud5a5\uc5d0 \ub9de\ub294 \uac1d\uc2e4 \uace0\ub974\uae30"}</span>
              </li>
              <li className="step">
                <span className="c">
                  <em>{"03"}</em>
                  <svg className="ic">
                    <use href="#i-users" />
                  </svg>
                </span>
                <b>{"\uc778\uc6d0 \u00b7 \uc635\uc158"}</b>
                <span>{"\ubc14\ube44\ud050, \ubd88\uba4d, \uae30\ub150\uc77c \uc635\uc158 \ucd94\uac00"}</span>
              </li>
              <li className="step">
                <span className="c">
                  <em>{"04"}</em>
                  <svg className="ic">
                    <use href="#i-card" />
                  </svg>
                </span>
                <b>{"\uacb0\uc81c"}</b>
                <span>{"\uce74\ub4dc \u00b7 \uacc4\uc88c\uc774\uccb4"}</span>
              </li>
              <li className="step">
                <span className="c">
                  <em>{"05"}</em>
                  <svg className="ic">
                    <use href="#i-msg" />
                  </svg>
                </span>
                <b>{"\ud655\uc815 \ubb38\uc790"}</b>
                <span>{"\uc608\uc57d \ud655\uc815\uacfc \uc548\ub0b4 \ubb38\uc790 \ubc1c\uc1a1"}</span>
              </li>
              <li className="step">
                <span className="c">
                  <em>{"06"}</em>
                  <svg className="ic">
                    <use href="#i-key" />
                  </svg>
                </span>
                <b>{"\uccb4\ud06c\uc778"}</b>
                <span>{"\ub3c4\ucc29 \ud6c4 \ud0a4\ub97c \ubc1b\uace0 \uc26c\uc5b4\uac00\uae30"}</span>
              </li>
            </ol>
          </div>
        </section>
        <div className="edge flip" style={{ "--top": "var(--esp)", "--bot": "var(--paper)" } as CSSProperties} aria-hidden="true" />
        <section className="sec paper" id="price">
          <div className="wrap">
            <div className="head" data-rv>
              <span className="en">{"Price"}</span>
              <h2 className="h2">{"\uc774\uc6a9\uc694\uae08 \uc548\ub0b4"}</h2>
              <p className="lead">{"1\ubc15 \uae30\uc900 \uc694\uae08\uc774\uba70, \uae30\uc900 \uc778\uc6d0 \ucd08\uacfc \uc2dc 1\uc778 \u20a920,000\uc774 \ucd94\uac00\ub3fc\uc694."}</p>
            </div>
            <div className="season" role="group" aria-label="시즌 선택">
              <button type="button" data-s="off" aria-pressed="true">{"\ube44\uc218\uae30"}</button>
              <button type="button" data-s="peak" aria-pressed="false">{"\uc131\uc218\uae30"}</button>
            </div>
            <div className="tbl-wrap" data-rv>
              <table id="tbl" data-season="off">
                <caption className="sr">{"\uac1d\uc2e4\ubcc4 \uc2dc\uc98c \u00b7 \uc694\uc77c \uc694\uae08"}</caption>
                <thead>
                  <tr>
                    <th scope="col">{"\uac1d\uc2e4"}</th>
                    <th scope="col" className="c-cap">{"\uae30\uc900 / \ucd5c\ub300"}</th>
                    <th scope="col" className="off" id="thOff1">{"\ube44\uc218\uae30 \ud3c9\uc77c"}</th>
                    <th scope="col" className="off">{"\ube44\uc218\uae30 \uc8fc\ub9d0"}</th>
                    <th scope="col" className="peak hi">{"\uc131\uc218\uae30 \ud3c9\uc77c"}</th>
                    <th scope="col" className="peak hi">{"\uc131\uc218\uae30 \uc8fc\ub9d0"}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{"\uc194 \uac1d\uc2e4"}</th>
                    <td className="c-cap cap2">{"2 / 3\uc778"}</td>
                    <td className="off">{"\u20a9180,000"}</td>
                    <td className="off">{"\u20a9220,000"}</td>
                    <td className="peak hi">{"\u20a9240,000"}</td>
                    <td className="peak hi">{"\u20a9280,000"}</td>
                  </tr>
                  <tr>
                    <th scope="row">{"\ubc14\ub78c \uac1d\uc2e4"}</th>
                    <td className="c-cap cap2">{"2 / 4\uc778"}</td>
                    <td className="off">{"\u20a9230,000"}</td>
                    <td className="off">{"\u20a9270,000"}</td>
                    <td className="peak hi">{"\u20a9290,000"}</td>
                    <td className="peak hi">{"\u20a9340,000"}</td>
                  </tr>
                  <tr>
                    <th scope="row">{"\uc232 \uac1d\uc2e4"}</th>
                    <td className="c-cap cap2">{"4 / 6\uc778"}</td>
                    <td className="off">{"\u20a9320,000"}</td>
                    <td className="off">{"\u20a9370,000"}</td>
                    <td className="peak hi">{"\u20a9390,000"}</td>
                    <td className="peak hi">{"\u20a9450,000"}</td>
                  </tr>
                  <tr>
                    <th scope="row">{"\ubcc4\ucc44"}</th>
                    <td className="c-cap cap2">{"6 / 8\uc778"}</td>
                    <td className="off">{"\u20a9450,000"}</td>
                    <td className="off">{"\u20a9520,000"}</td>
                    <td className="peak hi">{"\u20a9540,000"}</td>
                    <td className="peak hi">{"\u20a9620,000"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="tbl-note">{"\uc131\uc218\uae30: 7\uc6d4 15\uc77c \u2013 8\uc6d4 20\uc77c, 12\uc6d4 24\uc77c \u2013 1\uc6d4 1\uc77c \u00b7 \uc8fc\ub9d0: \uae08 \u00b7 \ud1a0\uc694\uc77c \ubc0f \uacf5\ud734\uc77c \uc804\ub0a0"}</p>
          </div>
        </section>
        <section className="strip" aria-label="추가 옵션">
          <ul className="wrap" data-st>
            <li>
              <span className="ring">
                <svg className="ic">
                  <use href="#i-userp" />
                </svg>
              </span>
              <div>
                <b>{"\ucd94\uac00 \uc778\uc6d0 1\uc778 \u20a920,000"}</b>
                <span>{"\uc601\uc720\uc544(36\uac1c\uc6d4 \ubbf8\ub9cc)\ub294 \ubb34\ub8cc"}</span>
              </div>
            </li>
            <li>
              <span className="ring">
                <svg className="ic">
                  <use href="#i-grill" />
                </svg>
              </span>
              <div>
                <b>{"\ubc14\ube44\ud050 \uadf8\ub9b4 \u20a930,000"}</b>
                <span>{"\uc22f \u00b7 \uadf8\ub9b4 \u00b7 \ud1a0\uce58 \u00b7 \uc9d1\uac8c \ud3ec\ud568"}</span>
              </div>
            </li>
            <li>
              <span className="ring">
                <svg className="ic">
                  <use href="#i-fire" />
                </svg>
              </span>
              <div>
                <b>{"\ubd88\uba4d \uc138\ud2b8 \u20a920,000"}</b>
                <span>{"\uc7a5\uc791 10kg \u00b7 \ub9c8\uc2dc\uba5c\ub85c \u00b7 \ub2f4\uc694"}</span>
              </div>
            </li>
          </ul>
        </section>
        <div className="edge" style={{ "--top": "var(--bark)", "--bot": "var(--esp)" } as CSSProperties} aria-hidden="true" />
        <section className="sec dark" id="reviews">
          <div className="wrap">
            <div className="head" data-rv>
              <span className="en">{"Reviews"}</span>
              <h2 className="h2">{"\ub2e4\ub140\uac04 \ubd84\ub4e4\uc758 \uc774\uc57c\uae30"}</h2>
            </div>
            <div className="rv" id="rv" aria-roledescription="carousel" aria-label="이용 후기" aria-live="polite" />
            <div className="dots" id="rvDots" />
            <div className="center-btn" style={{ marginTop: "0" }}>
              <a className="btn btn-olc" href="#contact">{"\ub098\ub3c4 \uc608\uc57d \ubb38\uc758\ud558\uae30"}</a>
            </div>
          </div>
        </section>
        <div className="edge flip" style={{ "--top": "var(--esp)", "--bot": "var(--paper)" } as CSSProperties} aria-hidden="true" />
        <section className="sec paper" id="faq">
          <div className="wrap">
            <div className="head" data-rv>
              <span className="en">{"FAQ"}</span>
              <h2 className="h2">{"\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38"}</h2>
            </div>
            <div className="faq" data-st>
              <details open>
                <summary>
                  <span>{"\ubc18\ub824\uacac\uacfc \ud568\uaed8 \ubb35\uc744 \uc218 \uc788\ub098\uc694?"}</span>
                  <svg className="ic">
                    <use href="#i-plus" />
                  </svg>
                </summary>
                <p className="ans">{"\ubc18\ub824\uacac \ub3d9\ubc18 \uac1d\uc2e4 2\ucc44(\uc194 \u00b7 \ubc14\ub78c)\uc5d0\uc11c \uc18c\ud615\uacac 2\ub9c8\ub9ac\uae4c\uc9c0 \ud568\uaed8\ud560 \uc218 \uc788\uc5b4\uc694. 1\ub9c8\ub9ac\ub2f9 \u20a920,000\uc774 \ucd94\uac00\ub418\uba70, \uce68\uad6c \uc704 \ub3d9\ubc18\uc740 \uc5b4\ub824\uc6cc\uc694."}</p>
              </details>
              <details>
                <summary>
                  <span>{"\ubc14\ube44\ud050\uc640 \ubd88\uba4d\uc740 \uc5b4\ub5bb\uac8c \uc774\uc6a9\ud558\ub098\uc694?"}</span>
                  <svg className="ic">
                    <use href="#i-plus" />
                  </svg>
                </summary>
                <p className="ans">
                  {"\uccb4\ud06c\uc778 \ub54c \uc2e0\uccad\ud558\uc2dc\uba74 \uc6d0\ud558\ub294 \uc2dc\uac04\uc5d0 \uac1d\uc2e4 \ub370\ud06c\ub85c \uc900\ube44\ud574 \ub4dc\ub824\uc694. \ubc14\ube44\ud050 \uadf8\ub9b4 \u20a930,000, \ubd88\uba4d \uc138\ud2b8 \u20a920,000\uc774\uba70 \ubc24 10\uc2dc\uae4c\uc9c0 \uc774\uc6a9\ud560 \uc218 \uc788\uc5b4\uc694."}
                </p>
              </details>
              <details>
                <summary>
                  <span>{"\uc608\uc57d \ucde8\uc18c\uc640 \ud658\ubd88 \uaddc\uc815\uc774 \uad81\uae08\ud574\uc694"}</span>
                  <svg className="ic">
                    <use href="#i-plus" />
                  </svg>
                </summary>
                <p className="ans">
                  {"\uc774\uc6a9\uc77c \uae30\uc900 7\uc77c \uc804\uae4c\uc9c0 \uc804\uc561 \ud658\ubd88, 3\uc77c \uc804\uae4c\uc9c0 50% \ud658\ubd88\ub418\uba70, 2\uc77c \uc804\ubd80\ud130\ub294 \ud658\ubd88\uc774 \uc5b4\ub824\uc6cc\uc694. \uae30\uc0c1 \uc545\ud654\ub85c \uc774\ub3d9\uc774 \uc5b4\ub824\uc6b4 \uacbd\uc6b0\uc5d0\ub294 \ub0a0\uc9dc \ubcc0\uacbd\uc744 \ub3c4\uc640\ub4dc\ub824\uc694."}
                </p>
              </details>
              <details>
                <summary>
                  <span>{"\ub300\uc911\uad50\ud1b5\uc73c\ub85c \uac08 \uc218 \uc788\ub098\uc694?"}</span>
                  <svg className="ic">
                    <use href="#i-plus" />
                  </svg>
                </summary>
                <p className="ans">{"\uccad\ud3c9\uc5ed\uc5d0\uc11c \ucc28\ub85c 15\ubd84 \uac70\ub9ac\uc608\uc694. \uc0ac\uc804 \uc608\uc57d \uc2dc \uccb4\ud06c\uc778 \uc2dc\uac04(15:00 \u2013 18:00)\uc5d0 \ub9de\ucdb0 \ubb34\ub8cc \ud53d\uc5c5\uc744 \ud574 \ub4dc\ub824\uc694."}</p>
              </details>
            </div>
            <p className="faq-note">{"\ub354 \uad81\uae08\ud55c \uc810\uc740 \uc804\ud654\ub098 \ubb38\uc758 \ud3fc\uc73c\ub85c \ud3b8\ud558\uac8c \ubb3c\uc5b4\ubd10 \uc8fc\uc138\uc694."}</p>
          </div>
        </section>
        <section className="sec paper2" id="guide">
          <div className="wrap">
            <div className="head" data-rv>
              <span className="en">{"Around Here"}</span>
              <h2 className="h2">{"\ub290\ub9b0\uc232 \uc8fc\ubcc0 \uc5ec\ud589 \uac00\uc774\ub4dc"}</h2>
              <p className="lead">{"\ucc28\ub85c 20\ubd84 \uc548\uc5d0 \ub2ff\ub294, \uc8fc\uc778\uc7a5\uc774 \uc9c1\uc811 \ub2e4\ub140\uc628 \uacf3\ub4e4\uc774\uc5d0\uc694."}</p>
            </div>
            <div className="guide" data-st>
              <article className="g-card">
                <div className="g-ph">
                  <div className="ph ph-forest" role="img" aria-label="안개 낀 잣나무 숲길" />
                </div>
                <div className="g-b">
                  <small>{"\uc0b0\ucc45 \u00b7 \ub3c4\ubcf4 10\ubd84"}</small>
                  <h3>{"\uc7a3\ub098\ubb34 \uc232\uae38 \uc0b0\ucc45"}</h3>
                  <p>{"\uc774\ub978 \uc544\uce68 \uc548\uac1c\uac00 \uae54\ub9ac\ub294 1.8km \uc232\uae38. \uac1d\uc2e4\uc5d0\uc11c \ubc14\ub85c \uc774\uc5b4\uc838\uc694."}</p>
                  <a className="more" href="#contact">
                    {"\uae38 \uc548\ub0b4 \ubb38\uc758"}
                    <svg className="ic">
                      <use href="#i-ar" />
                    </svg>
                  </a>
                </div>
              </article>
              <article className="g-card">
                <div className="g-ph">
                  <div className="ph ph-loft" role="img" aria-label="통나무 카페 내부" />
                </div>
                <div className="g-b">
                  <small>{"\uce74\ud398 \u00b7 \ucc28\ub85c 15\ubd84"}</small>
                  <h3>{"\ud638\uc22b\uac00 \ud1b5\ub098\ubb34 \uce74\ud398"}</h3>
                  <p>{"\uc9c1\uc811 \uad6c\uc6b4 \ube75\uacfc \ud578\ub4dc\ub4dc\ub9bd \ucee4\ud53c, \ucc3d\uac00 \uc790\ub9ac\uc5d0\uc11c \ubcf4\ub294 \ud638\uc218 \ud48d\uacbd."}</p>
                  <a className="more" href="#contact">
                    {"\uae38 \uc548\ub0b4 \ubb38\uc758"}
                    <svg className="ic">
                      <use href="#i-ar" />
                    </svg>
                  </a>
                </div>
              </article>
              <article className="g-card">
                <div className="g-ph">
                  <div className="ph ph-fire" role="img" aria-label="별이 보이는 밤의 모닥불" />
                </div>
                <div className="g-b">
                  <small>{"\uccb4\ud5d8 \u00b7 \ucc28\ub85c 20\ubd84"}</small>
                  <h3>{"\ubcc4 \ubcf4\uae30 \uc804\ub9dd\ub300"}</h3>
                  <p>{"\ub9d1\uc740 \ub0a0 \ubc24 10\uc2dc \uc774\ud6c4, \uc740\ud558\uc218\uac00 \uac00\uc7a5 \uc798 \ubcf4\uc774\ub294 \uc5b8\ub355\uc774\uc5d0\uc694."}</p>
                  <a className="more" href="#contact">
                    {"\uae38 \uc548\ub0b4 \ubb38\uc758"}
                    <svg className="ic">
                      <use href="#i-ar" />
                    </svg>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="sec paper" id="contact">
          <div className="wrap">
            <div className="head" data-rv>
              <span className="en">{"Contact"}</span>
              <h2 className="h2">{"\uc608\uc57d \ubb38\uc758 \u00b7 \uc624\uc2dc\ub294 \uae38"}</h2>
            </div>
            <div className="contact">
              <form className="form" id="form" noValidate data-rv>
                <h3>{"\ube60\ub978 \uc608\uc57d \ubb38\uc758"}</h3>
                <p>{"\ub0a8\uaca8\uc8fc\uc2dc\uba74 \uc0c1\ub2f4 \uc2dc\uac04 \ub0b4\uc5d0 \ubb38\uc790\ub85c \ub2f5\ubcc0\ub4dc\ub824\uc694."}</p>
                <label className="fld">
                  <span className="sr">{"\uc774\ub984"}</span>
                  <input id="fName" type="text" placeholder="이름" autoComplete="name" />
                </label>
                {" "}
                <label className="fld">
                  <span className="sr">{"\uc5f0\ub77d\ucc98"}</span>
                  <input id="fPhone" type="tel" inputMode="numeric" maxLength={13} placeholder="연락처 (010-0000-0000)" autoComplete="tel" />
                </label>
                {" "}
                <label className="fld">
                  <span className="sr">{"\uac1d\uc2e4"}</span>
                  <select id="fRoom">
                    <option value="">{"\uac1d\uc2e4 \uc120\ud0dd"}</option>
                    <option>{"\uc194 \uac1d\uc2e4"}</option>
                    <option>{"\ubc14\ub78c \uac1d\uc2e4"}</option>
                    <option>{"\uc232 \uac1d\uc2e4"}</option>
                    <option>{"\ubcc4\ucc44"}</option>
                    <option>{"\uae30\ub150\uc77c \ud328\ud0a4\uc9c0"}</option>
                  </select>
                </label>
                <div className="f-row">
                  <label className="fld">
                    <span className="sr">{"\uccb4\ud06c\uc778 \ub0a0\uc9dc"}</span>
                    <input id="fDate" type="date" />
                  </label>
                  <label className="fld">
                    <span className="sr">{"\uc778\uc6d0"}</span>
                    <select id="fPax">
                      <option value="">{"\uc778\uc6d0"}</option>
                      <option>{"2\uba85"}</option>
                      <option>{"3\uba85"}</option>
                      <option>{"4\uba85"}</option>
                      <option>{"5\uba85"}</option>
                      <option>{"6\uba85"}</option>
                      <option>{"7\uba85"}</option>
                      <option>{"8\uba85"}</option>
                    </select>
                  </label>
                </div>
                <button className="btn btn-cream btn-lg btn-full" type="submit" id="fBtn">{"\ubb38\uc758 \ub0a8\uae30\uae30"}</button>
                {" "}
                <label className="agree">
                  <input type="checkbox" id="fAgree" />
                  <span className="box">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                  {"\uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ubc0f \uc774\uc6a9\uc5d0 \ub3d9\uc758\ud569\ub2c8\ub2e4."}
                </label>
                <p className="f-msg" id="fMsg" aria-live="polite" />
              </form>
              <ul className="info" data-rv>
                <li>
                  <span className="ring">
                    <svg className="ic">
                      <use href="#i-pin" />
                    </svg>
                  </span>
                  <div>
                    <small>{"\uc8fc\uc18c"}</small>
                    <span>{"\uacbd\uae30\ub3c4 \uac00\ud3c9\uad70 \uc0c1\uba74 \uc232\uae38\ub85c 000"}</span>
                  </div>
                </li>
                <li>
                  <span className="ring">
                    <svg className="ic">
                      <use href="#i-phone" />
                    </svg>
                  </span>
                  <div>
                    <small>{"\uc608\uc57d \uc804\ud654"}</small>
                    <span>{"031-000-0000"}</span>
                  </div>
                </li>
                <li>
                  <span className="ring">
                    <svg className="ic">
                      <use href="#i-clock" />
                    </svg>
                  </span>
                  <div>
                    <small>{"\uc0c1\ub2f4 \uc2dc\uac04"}</small>
                    <span>{"\ub9e4\uc77c 09:00 \u2013 21:00"}</span>
                  </div>
                </li>
                <li>
                  <span className="ring">
                    <svg className="ic">
                      <use href="#i-car" />
                    </svg>
                  </span>
                  <div>
                    <small>{"\uc790\uac00\uc6a9"}</small>
                    <span>{"\uc11c\uc6b8 \uc7a0\uc2e4\uc5d0\uc11c \uc57d 1\uc2dc\uac04 10\ubd84"}</span>
                  </div>
                </li>
                <li>
                  <span className="ring">
                    <svg className="ic">
                      <use href="#i-bus" />
                    </svg>
                  </span>
                  <div>
                    <small>{"\ub300\uc911\uad50\ud1b5"}</small>
                    <span>{"\uccad\ud3c9\uc5ed \ud53d\uc5c5 \uc11c\ube44\uc2a4 (\uc0ac\uc804 \uc608\uc57d)"}</span>
                  </div>
                </li>
              </ul>
              <div className="map" id="map" role="img" aria-label="느린숲 위치 약도">
                <svg viewBox="0 0 400 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                  <rect width="400" height="420" fill="#D9D0C3" />
                  <path d="M0 300C80 280 120 330 200 310S330 250 400 270V420H0Z" fill="#B8C4BF" />
                  <path d="M-10 120C90 140 150 90 230 120S350 200 410 170" stroke="#F6F1EA" strokeWidth="14" fill="none" />
                  <path d="M120 -10C140 100 180 180 170 260S150 380 190 430" stroke="#F6F1EA" strokeWidth="10" fill="none" />
                  <path d="M260 -10L300 430" stroke="#EDE6DB" strokeWidth="6" />
                  <g fill="#A9B79F">
                    <circle cx="60" cy="60" r="34" />
                    <circle cx="330" cy="70" r="40" />
                    <circle cx="320" cy="360" r="30" />
                    <circle cx="60" cy="230" r="26" />
                  </g>
                  <text x="300" y="300" fontSize="11" fill="#6B7F7A" fontFamily="sans-serif">{"\uccad\ud3c9\ud638"}</text>
                  <text x="24" y="112" fontSize="11" fill="#8A7262" fontFamily="sans-serif">{"\uc232\uae38\ub85c"}</text>
                </svg>
                <div className="pin">
                  <span>
                    <svg className="ic">
                      <use href="#i-cabin" />
                    </svg>
                    {"\ub290\ub9b0\uc232"}
                  </span>
                  <i />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="edge" style={{ "--top": "var(--paper)", "--bot": "var(--esp)" } as CSSProperties} aria-hidden="true" />
      </main>
      <footer className="footer">
        <div className="wrap">
          <div className="f-top">
            <div className="f-brand">
              <a className="logo" href="#top">
                <svg className="ic">
                  <use href="#i-cabin" />
                </svg>
                <span>
                  <b>{"\ub290\ub9b0\uc232"}</b>
                  <i>{"Neurin Forest"}</i>
                </span>
              </a>
              <p>{"\uc232\uc5d0\uc11c \ubcf4\ub0b4\ub294 \ub290\ub9b0 \ud558\ub8e8"}</p>
              <div className="sns">
                <a href="#contact" aria-label="인스타그램">
                  <svg className="ic">
                    <use href="#i-ig" />
                  </svg>
                </a>
                <a href="#contact" aria-label="카카오톡 채널">
                  <svg className="ic">
                    <use href="#i-chat" />
                  </svg>
                </a>
                <a href="#contact" aria-label="블로그">
                  <svg className="ic">
                    <use href="#i-send" />
                  </svg>
                </a>
              </div>
            </div>
            <p className="f-info">
              {"\uc0c1\ud638 \ub290\ub9b0\uc232 \ud39c\uc158 \u00b7 \ub300\ud45c [\ub300\ud45c\uc790\uba85] \u00b7 \uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 [000-00-00000]"}
              <br />
              {"\uc8fc\uc18c \uacbd\uae30\ub3c4 \uac00\ud3c9\uad70 \uc0c1\uba74 \uc232\uae38\ub85c 000 \u00b7 \uc608\uc57d 031-000-0000"}
              <br />
              {"\uc785\uae08 \uacc4\uc88c [\uc740\ud589\uba85 000-0000-0000] \u00b7 \uc608\uae08\uc8fc [\uc608\uae08\uc8fc]"}
            </p>
          </div>
          <p className="f-bot">{"\u00a9 2026 Neurin Forest. All rights reserved."}</p>
        </div>
      </footer>
      <button className="totop" id="toTop" type="button" aria-label="맨 위로 이동">
        <svg className="ring" viewBox="0 0 56 56" aria-hidden="true">
          <circle className="track" cx="28" cy="28" r="25" />
          <circle className="bar" id="toTopBar" cx="28" cy="28" r="25" />
        </svg>
        <svg className="ic arrow">
          <use href="#i-up" />
        </svg>
        <small>{"TOP"}</small>
      </button>
      <div className="toast" id="toast" role="status" aria-live="polite" />
    </>
  )
}
