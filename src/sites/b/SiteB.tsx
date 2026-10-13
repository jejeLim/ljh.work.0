// SiteB: B.html 를 React로 변환한 페이지 (단일 파일, 컴포넌트 분리 없음)
import { useEffect, type CSSProperties } from 'react'
import { init } from './script.js'
import './site.scss'

export function SiteB() {
  // 원본 스크립트는 DOM을 직접 조립하므로 마운트 후 한 번만 실행한다
  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <symbol id="i-ar" viewBox="0 0 24 24">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </symbol>
        <symbol id="i-al" viewBox="0 0 24 24">
          <path d="M19 12H5M11 6l-6 6 6 6" />
        </symbol>
        <symbol id="i-menu" viewBox="0 0 24 24">
          <path d="M4 8h16M4 16h16" />
        </symbol>
        <symbol id="i-x" viewBox="0 0 24 24">
          <path d="M6 6l12 12M18 6L6 18" />
        </symbol>
        <symbol id="i-ig" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".6" />
        </symbol>
        <symbol id="i-chat" viewBox="0 0 24 24">
          <path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.4A8 8 0 1 1 21 12z" />
        </symbol>
        <symbol id="i-yt" viewBox="0 0 24 24">
          <rect x="2" y="5" width="20" height="14" rx="4" />
          <path d="M10 9l5 3-5 3z" />
        </symbol>
        <symbol id="i-tire" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" />
        </symbol>
        <symbol id="i-car" viewBox="0 0 24 24">
          <path d="M5 16h14M3 16v-3l2.2-5a2 2 0 0 1 1.8-1.2h10a2 2 0 0 1 1.8 1.2L21 13v3" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
        </symbol>
        <symbol id="i-up" viewBox="0 0 24 24">
          <path d="M12 19V5M6 11l6-6 6 6" />
        </symbol>
        <symbol id="i-sparkle" viewBox="0 0 24 24">
          <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
        </symbol>
        <symbol id="i-check" viewBox="0 0 24 24">
          <path d="M5 12l5 5L20 7" />
        </symbol>
        <symbol id="i-user" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </symbol>
        <symbol id="i-phone" viewBox="0 0 24 24">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
        </symbol>
        <symbol id="i-cal" viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </symbol>
        <symbol id="i-pin" viewBox="0 0 24 24">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </symbol>
        <symbol id="i-clock" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </symbol>
      </svg>
      <div className="progress" id="progress" aria-hidden="true">
        <i />
      </div>
      <header className="hd" id="hd">
        <div className="hd-in">
          <nav className="hd-nav" aria-label="주요 메뉴">
            <a href="#classes">{"\ud0c0\uc774\uc5b4"}</a>
            <a href="#price">{"\uac00\uaca9"}</a>
            <a href="#schedule">{"\uc608\uc57d"}</a>
            <a href="#cta">{"\uc774\ubca4\ud2b8"}</a>
            <a href="#about">{"\ub9e4\uc7a5\uc18c\uac1c"}</a>
            <a href="#consult">{"\ubb38\uc758"}</a>
          </nav>
          <a className="logo" href="#top" aria-label="TREAD9 홈">
            <svg className="ic">
              <use href="#i-tire" />
            </svg>
            <span>{"TREAD9"}</span>
          </a>
          <div className="hd-r">
            <div className="hd-contact">
              <small>{"\uc11c\uc6b8 \uc131\ub3d9\uad6c \uc131\uc218\ub3d9"}</small>
              <b>{"02-000-0000"}</b>
            </div>
            <a className="ic-btn hd-sns" href="#footer" aria-label="인스타그램">
              <svg className="ic">
                <use href="#i-ig" />
              </svg>
            </a>
            {" "}
            <a className="ic-btn hd-sns" href="#consult" aria-label="상담 채팅">
              <svg className="ic">
                <use href="#i-chat" />
              </svg>
            </a>
            {" "}
            <a className="btn btn-cy btn-sm hd-cta" href="#consult">{"\ubb34\ub8cc \uc810\uac80 \uc608\uc57d"}</a>
            {" "}
            <button className="ic-btn menu-btn" id="menuBtn" type="button" aria-label="메뉴 열기" aria-expanded="false" aria-controls="mmenu">
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
                <use href="#i-tire" />
              </svg>
              <span>{"TREAD9"}</span>
            </a>
            {" "}
            <button className="ic-btn" id="menuClose" type="button" aria-label="메뉴 닫기">
              <svg className="ic">
                <use href="#i-x" />
              </svg>
            </button>
          </div>
          <nav className="mm-links" aria-label="모바일 메뉴">
            <a href="#classes" style={{ "--k": "0" } as CSSProperties}>{"\ud0c0\uc774\uc5b4"}</a>
            <a href="#price" style={{ "--k": "1" } as CSSProperties}>{"\uac00\uaca9"}</a>
            <a href="#schedule" style={{ "--k": "2" } as CSSProperties}>{"\uc608\uc57d"}</a>
            <a href="#cta" style={{ "--k": "3" } as CSSProperties}>{"\uc774\ubca4\ud2b8"}</a>
            <a href="#about" style={{ "--k": "4" } as CSSProperties}>{"\ub9e4\uc7a5\uc18c\uac1c"}</a>
            <a href="#consult" style={{ "--k": "5" } as CSSProperties}>{"\ubb38\uc758"}</a>
          </nav>
          <div className="mm-foot">
            <span>{"02-000-0000"}</span>
            <a className="btn btn-cy btn-lg" href="#consult">
              {"\ubb34\ub8cc \uc810\uac80 \uc608\uc57d\ud558\uae30 "}
              <svg className="ic">
                <use href="#i-ar" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <main>
        <section className="hero dark" id="top">
          <div className="wrap">
            <div className="hero-copy">
              <span className="chip">
                <svg className="ic">
                  <use href="#i-sparkle" />
                </svg>
                {"\uc131\uc218\ub3d9 \ud0c0\uc774\uc5b4 \uc804\ubb38\uc810 \u00b7 \ub2f9\uc77c \uc7a5\ucc29"}
              </span>
              <h1 className="hl hl-xl">
                <span className="ln">
                  <span>{"\ud0c0\uc774\uc5b4 \uad50\uccb4,"}</span>
                </span>
                <span className="ln">
                  <span>
                    <mark>{"30\ubd84"}</mark>
                    {"\uc774\uba74 \ub05d"}
                  </span>
                </span>
              </h1>
              <p className="lead">{"\ubb34\ub8cc \uc810\uac80\uc744 \uc608\uc57d\ud558\uace0 4\ubcf8 \uad50\uccb4 \uc2dc 10% \ud560\uc778 \ud61c\ud0dd\uc744 \ubc1b\uc544\ubcf4\uc138\uc694."}</p>
              <div className="ctas">
                <a className="btn btn-cy btn-lg" href="#consult">
                  {"\ubb34\ub8cc \uc810\uac80 \uc608\uc57d\ud558\uae30 "}
                  <svg className="ic">
                    <use href="#i-ar" />
                  </svg>
                </a>
                {" "}
                <a className="btn btn-ol btn-lg" href="#classes">{"\ud0c0\uc774\uc5b4 \ubcf4\uae30"}</a>
              </div>
            </div>
            <div className="hero-labels">
              <span>{"\uad6d\uc0b0 \u00b7 \uc218\uc785 7\uac1c \ube0c\ub79c\ub4dc"}</span>
              <span>{"\uc131\uc218\uc5ed \ucc28\ub85c 5\ubd84"}</span>
            </div>
            <div className="hero-vis">
              <figure className="vis ph-product" role="img" aria-label="휠에 장착된 프리미엄 타이어">
                <figcaption>{"\ubb34\ub8cc \uc815\ubc00 \uc810\uac80"}</figcaption>
              </figure>
              <figure className="vis ph-mechanic" role="img" aria-label="타이어를 장착하는 정비사">
                <figcaption>{"\ud720 \uc5bc\ub77c\uc778\uba3c\ud2b8"}</figcaption>
              </figure>
              <figure className="vis ph-lounge" role="img" aria-label="정비실이 보이는 고객 라운지">
                <figcaption>{"\uace0\uac1d \ub77c\uc6b4\uc9c0"}</figcaption>
              </figure>
              <div className="badge" aria-label="첫 점검 무료">
                <small>{"FREE CHECK"}</small>
                <b>{"\uccab \uc810\uac80"}</b>
                <strong>{"\ubb34\ub8cc"}</strong>
              </div>
            </div>
          </div>
        </section>
        <section className="sec dark about" id="about">
          <div className="wrap center">
            <p className="eye" data-reveal>
              <b>{"(01)"}</b>
              {"TREAD9"}
            </p>
            <p className="statement" id="statement">
              {"\ud0c0\uc774\uc5b4\ub294 \ub3c4\ub85c\uc640 \ub9de\ub2ff\uc740"}
              <br />
              {"\ub2e8 "}
              <span className="cy">{"\uc190\ubc14\ub2e5 \ub124 \uc7a5"}</span>
              <br />
              {"\ud06c\uae30\uc758 \uc811\uc810\uc785\ub2c8\ub2e4."}
            </p>
            <p className="sub" data-reveal>{"\uacf5\uae30\uc555 \ud558\ub098, \ub9c8\ubaa8 1mm\uae4c\uc9c0 \uaf3c\uaf3c\ud788 \ud655\uc778\ud574 \uac00\uc871\uc774 \uc548\uc2ec\ud558\uace0 \ub2ec\ub9b4 \uc218 \uc788\ub3c4\ub85d \ub3d5\uc2b5\ub2c8\ub2e4."}</p>
            <span className="vline" aria-hidden="true" />
          </div>
        </section>
        <div className="cloud cloud-kw" aria-hidden="true" />
        <section className="sec light after-cloud" id="why">
          <div className="wrap">
            <div className="sec-head" data-reveal>
              <p className="eye">
                <b>{"(02)"}</b>
                {"WHY TREAD9"}
              </p>
              <h2 className="hl">
                {"\uc65c "}
                <mark>{"\ud2b8\ub808\ub4dc\ub098\uc778"}</mark>
                {"\uc77c\uae4c\uc694?"}
              </h2>
              <p className="sub">{"\ucc98\uc74c \uc624\uc154\ub3c4 \ud22c\uba85\ud558\uac8c, \ub2e4\uc74c\uc5d0\ub3c4 \ubbff\uace0 \ub9e1\uae38 \uc218 \uc788\ub3c4\ub85d."}</p>
            </div>
            <ul className="adv" data-stagger>
              <li>
                <span className="num">{"01"}</span>
                <h3>{"\uc815\ucc30\uc81c \ud22c\uba85 \uac00\uaca9"}</h3>
                <p>{"\uc0ac\uc774\uc988\ubcc4 \uac00\uaca9\uc744 \ubbf8\ub9ac \uacf5\uac1c\ud574\uc694. \ud604\uc7a5\uc5d0\uc11c \ucd94\uac00 \ube44\uc6a9\uc744 \uad8c\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}</p>
              </li>
              <li>
                <span className="num">{"02"}</span>
                <h3>{"30\ubd84 \uc2e0\uc18d \uc7a5\ucc29"}</h3>
                <p>{"\uc608\uc57d \uc2dc\uac04\uc5d0 \ub9de\ucdb0 \ubc14\ub85c \uc791\uc5c5\ud574\uc694. 4\ubcf8 \uad50\uccb4\ub3c4 30\ubd84\uc774\uba74 \ucda9\ubd84\ud569\ub2c8\ub2e4."}</p>
              </li>
              <li>
                <span className="num">{"03"}</span>
                <h3>{"\ubb34\ub8cc \uc815\ubc00 \uc810\uac80"}</h3>
                <p>{"\uacf5\uae30\uc555 \u00b7 \ub9c8\ubaa8\ub3c4 \u00b7 \ud3b8\ub9c8\ubaa8 \u00b7 \uc81c\uc870\uc77c\uc790\uae4c\uc9c0 10\ubd84 \ub9cc\uc5d0 \ubb34\ub8cc\ub85c \ud655\uc778\ud574 \ub4dc\ub824\uc694."}</p>
              </li>
              <li>
                <span className="num">{"04"}</span>
                <h3>{"\ucd5c\uc2e0 \uc0dd\uc0b0 \uc815\ud488"}</h3>
                <p>{"\uc81c\uc870 6\uac1c\uc6d4 \uc774\ub0b4 \uc815\ud488\ub9cc \uc0ac\uc6a9\ud558\uace0 \uc81c\uc870\uc77c\uc790\ub97c \uc9c1\uc811 \ubcf4\uc5ec\ub4dc\ub9bd\ub2c8\ub2e4."}</p>
              </li>
              <li>
                <span className="num">{"05"}</span>
                <h3>{"3D \uc5bc\ub77c\uc778\uba3c\ud2b8 \uc7a5\ube44"}</h3>
                <p>{"\ucd5c\uc2e0 3D \uc7a5\ube44\ub85c \ud720 \uc815\ub82c\uc744 \uce21\uc815\ud558\uace0, \uc804\ud6c4 \ub9ac\ud3ec\ud2b8\ub97c \ub4dc\ub824\uc694."}</p>
              </li>
              <li>
                <span className="num">{"06"}</span>
                <h3>{"1\ub144 \uc0ac\ud6c4 \ubcf4\uc99d"}</h3>
                <p>{"\uc7a5\ucc29 \ud6c4 1\ub144\uac04 \ud391\ud06c \uc218\ub9ac\uc640 \uc704\uce58 \uad50\ud658\uc744 \ubb34\uc0c1\uc73c\ub85c \uc9c0\uc6d0\ud569\ub2c8\ub2e4."}</p>
              </li>
            </ul>
          </div>
        </section>
        <div className="cloud cloud-wk" aria-hidden="true" />
        <section className="sec dark glow after-cloud" id="benefits">
          <div className="wrap center">
            <div className="sec-head" data-reveal>
              <p className="eye">
                <b>{"(03)"}</b>
                {"CHECK YOUR TIRES"}
              </p>
              <h2 className="hl">
                {"\ud0c0\uc774\uc5b4, \uc774\ub7f4 \ub550"}
                <br />
                <mark>{"\ubc14\ub85c"}</mark>
                {" \uad50\uccb4\ud558\uc138\uc694"}
              </h2>
            </div>
            <ul className="strips" id="strips">
              <li className="strip">
                <svg className="ic">
                  <use href="#i-check" />
                </svg>
                {"\ub9c8\ubaa8 \ud55c\uacc4\uc120 1.6mm \ub3c4\ub2ec"}
              </li>
              <li className="strip strip-cy">
                <svg className="ic">
                  <use href="#i-check" />
                </svg>
                {"\uc606\uba74 \uade0\uc5f4 \u00b7 \ubd80\ud480\uc74c"}
              </li>
              <li className="strip">
                <svg className="ic">
                  <use href="#i-check" />
                </svg>
                {"\uc81c\uc870 \ud6c4 5\ub144 \uc774\uc0c1 \uacbd\uacfc"}
              </li>
              <li className="strip">
                <svg className="ic">
                  <use href="#i-check" />
                </svg>
                {"\ud578\ub4e4 \ub5a8\ub9bc \u00b7 \ud55c\ucabd \uc3e0\ub9bc"}
              </li>
              <li className="strip strip-cy">
                <svg className="ic">
                  <use href="#i-check" />
                </svg>
                {"\uc81c\ub3d9 \uac70\ub9ac\uac00 \uae38\uc5b4\uc9d0"}
              </li>
              <li className="strip">
                <svg className="ic">
                  <use href="#i-check" />
                </svg>
                {"\ube57\uae38\uc5d0\uc11c \ubbf8\ub044\ub7ec\uc9d0"}
              </li>
            </ul>
            <span className="vline" aria-hidden="true" />
            <div className="punch" data-reveal>
              <p>{"\uc774 \ubaa8\ub4e0 \uc810\uac80,"}</p>
              <p className="hl hl-md">
                <span className="cy">{"\ub2e8 10\ubd84"}</span>
                {"\uc774\uba74 \ucda9\ubd84\ud569\ub2c8\ub2e4."}
              </p>
            </div>
          </div>
        </section>
        <div className="cloud cloud-kw" aria-hidden="true" />
        <section className="sec light after-cloud" id="classes">
          <div className="wrap">
            <div className="sec-head" data-reveal>
              <p className="eye">
                <b>{"(04)"}</b>
                {"TIRES"}
              </p>
              <h2 className="hl">
                {"7\uac00\uc9c0 \ud0c0\uc774\uc5b4,"}
                <br />
                <mark>{"\ub0b4 \ucc28\uc5d0 \ub9de\ub294"}</mark>
                <br className="br-m" />
                {"\ud0c0\uc774\uc5b4\ub97c \ucc3e\uc544\ubcf4\uc138\uc694"}
              </h2>
            </div>
          </div>
          <div className="car" id="classTrack" aria-label="타이어 목록" />
          <div className="wrap car-ctrl">
            <button className="arw" type="button" id="clsPrev" aria-label="이전 타이어">
              <svg className="ic">
                <use href="#i-al" />
              </svg>
            </button>
            {" "}
            <button className="arw on" type="button" id="clsNext" aria-label="다음 타이어">
              <svg className="ic">
                <use href="#i-ar" />
              </svg>
            </button>
            {" "}
            <a className="btn btn-k" href="#price">
              <svg className="ic">
                <use href="#i-tire" />
              </svg>
              {"\uc804\uccb4 \uac00\uaca9\ud45c \ubcf4\uae30"}
            </a>
          </div>
        </section>
        <div className="cloud cloud-wk" aria-hidden="true" />
        <section className="sec dark glow after-cloud" id="consult">
          <div className="wrap center">
            <p className="pre" data-reveal>{"\ud0c0\uc774\uc5b4 \uc0ac\uc774\uc988\ub3c4 \uc798 \ubaa8\ub974\uc2dc\uaca0\ub2e4\uace0\uc694?"}</p>
            <h2 className="hl hl-md" data-reveal>
              {"\ub3c4\ub300\uccb4 "}
              <span className="cy">{"\uc5b4\ub5a4 \ud0c0\uc774\uc5b4"}</span>
              {"\ub97c"}
              <br />
              {"\uace8\ub77c\uc57c \ud560\uae4c\uc694?"}
            </h2>
            <span className="vline" aria-hidden="true" />
            <h2 className="hl hl-md" data-reveal>
              {"\uc774\uc81c "}
              <mark>{"\uace0\ubbfc"}</mark>
              {"\ud558\uc9c0 \ub9c8\uc138\uc694!"}
            </h2>
            <p className="sub" data-reveal>{"\ucc28\uc885\uacfc \uc5f0\ub77d\ucc98\ub97c \ub0a8\uaca8\uc8fc\uc2dc\uba74 \uc804\ubb38 \uc0c1\ub2f4\uc0ac\uac00 \uc8fc\ud589 \uc2b5\uad00\uc5d0 \ub9de\ub294 \ud0c0\uc774\uc5b4\ub97c \ucd94\ucc9c\ud574 \ub4dc\ub824\uc694."}</p>
            <form className="form" id="form" noValidate data-reveal>
              <div className="f-row">
                <label className="field">
                  <span className="sr">{"\uc774\ub984"}</span>
                  <svg className="ic">
                    <use href="#i-user" />
                  </svg>
                  <input id="fName" name="name" type="text" placeholder="이름" autoComplete="name" required />
                </label>
                {" "}
                <label className="field">
                  <span className="sr">{"\uc5f0\ub77d\ucc98"}</span>
                  <svg className="ic">
                    <use href="#i-phone" />
                  </svg>
                  <input id="fPhone" name="phone" type="tel" inputMode="numeric" placeholder="연락처 (010-0000-0000)" autoComplete="tel" maxLength={13} required />
                </label>
              </div>
              <label className="field">
                <span className="sr">{"\ucc28\uc885 (\uc120\ud0dd)"}</span>
                <svg className="ic">
                  <use href="#i-car" />
                </svg>
                <input id="fCar" name="car" type="text" placeholder="차종 (선택 · 예: 쏘렌토 2022)" />
              </label>
              <fieldset className="chips" id="chips">
                <legend>{"\uad00\uc2ec \ud0c0\uc774\uc5b4"}</legend>
                <label className="chip-in">
                  <input type="checkbox" name="cls" defaultValue="컴포트" />
                  <span>{"\ucef4\ud3ec\ud2b8"}</span>
                </label>
                {" "}
                <label className="chip-in">
                  <input type="checkbox" name="cls" defaultValue="퍼포먼스" />
                  <span>{"\ud37c\ud3ec\uba3c\uc2a4"}</span>
                </label>
                {" "}
                <label className="chip-in">
                  <input type="checkbox" name="cls" defaultValue="SUV 올터레인" />
                  <span>{"SUV \uc62c\ud130\ub808\uc778"}</span>
                </label>
                {" "}
                <label className="chip-in">
                  <input type="checkbox" name="cls" defaultValue="전기차 전용" />
                  <span>{"\uc804\uae30\ucc28 \uc804\uc6a9"}</span>
                </label>
                {" "}
                <label className="chip-in">
                  <input type="checkbox" name="cls" defaultValue="사계절" />
                  <span>{"\uc0ac\uacc4\uc808"}</span>
                </label>
                {" "}
                <label className="chip-in">
                  <input type="checkbox" name="cls" defaultValue="윈터" />
                  <span>{"\uc708\ud130"}</span>
                </label>
                {" "}
                <label className="chip-in">
                  <input type="checkbox" name="cls" defaultValue="런플랫" />
                  <span>{"\ub7f0\ud50c\ub7ab"}</span>
                </label>
                {" "}
                <label className="chip-in">
                  <input type="checkbox" name="cls" defaultValue="잘 모르겠어요" defaultChecked />
                  <span>{"\uc798 \ubaa8\ub974\uaca0\uc5b4\uc694"}</span>
                </label>
              </fieldset>
              <button className="btn btn-cy btn-lg btn-full" type="submit" id="fSubmit">
                {"\ubb34\ub8cc \uc0c1\ub2f4 \uc2e0\uccad\ud558\uae30 "}
                <svg className="ic">
                  <use href="#i-ar" />
                </svg>
              </button>
              {" "}
              <label className="agree">
                <input type="checkbox" id="fAgree" />
                <span className="box">
                  <svg className="ic">
                    <use href="#i-check" />
                  </svg>
                </span>
                {"\uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ubc0f \uc774\uc6a9\uc5d0 \ub3d9\uc758\ud569\ub2c8\ub2e4. (\ud544\uc218)"}
              </label>
              <p className="f-msg" id="fMsg" aria-live="polite" />
            </form>
          </div>
        </section>
        <div className="cloud cloud-kw" aria-hidden="true" />
        <section className="sec light after-cloud" id="belief">
          <div className="wrap">
            <div className="sec-head" data-reveal>
              <p className="eye">
                <b>{"(05)"}</b>
                {"WHY IT MATTERS"}
              </p>
              <h2 className="hl">
                {"\uc88b\uc740 \ud0c0\uc774\uc5b4 \ud558\ub098\uac00"}
                <br />
                <mark>{"\ubc14\uafb8\ub294 \uac83\ub4e4"}</mark>
              </h2>
            </div>
            <div className="venn" id="venn">
              <button className="vc vc1 on" type="button">
                <b>{"\uc81c\ub3d9\ub825"}</b>
                <span>{"\ube57\uae38\uc5d0\uc11c\ub3c4 \uc9e7\uac8c \uba48\ucd94\ub294"}</span>
              </button>
              {" "}
              <button className="vc vc2" type="button">
                <b>{"\uc5f0\ube44"}</b>
                <span>{"\uad6c\ub984\uc800\ud56d\uc744 \ub0ae\ucdb0 \uc808\uc57d"}</span>
              </button>
              {" "}
              <button className="vc vc3" type="button">
                <b>{"\uc815\uc219\uc131"}</b>
                <span>{"\uace0\uc18d\uc5d0\uc11c\ub3c4 \uc870\uc6a9\ud55c \uc2e4\ub0b4"}</span>
              </button>
              {" "}
              <button className="vc vc4" type="button">
                <b>{"\uc2b9\ucc28\uac10"}</b>
                <span>{"\ub178\uba74 \ucda9\uaca9\uc744 \ubd80\ub4dc\ub7fd\uac8c"}</span>
              </button>
              {" "}
              <span className="v-center" aria-hidden="true">
                <svg className="ic">
                  <use href="#i-tire" />
                </svg>
              </span>
            </div>
            <figure className="vis studio ph-shop" data-reveal>
              <figcaption>
                <small>{"SHOP"}</small>
                <b>
                  {"\uc131\uc218\ub3d9 \ub9e4\uc7a5"}
                  <span className="hide-m">{" \u00b7 \ub9ac\ud504\ud2b8 6\ub300 \u00b7 \uace0\uac1d \ub77c\uc6b4\uc9c0 \uc6b4\uc601"}</span>
                </b>
              </figcaption>
            </figure>
          </div>
        </section>
        <div className="cloud cloud-wk" aria-hidden="true" />
        <section className="sec dark glow after-cloud" id="price">
          <div className="wrap center">
            <div className="sec-head price-head" data-reveal>
              <p className="eye">
                <b>{"(06)"}</b>
                {"PRICE"}
              </p>
              <h2 className="hl">
                {"\uac00\uc7a5 "}
                <span className="cy">{"\ud569\ub9ac\uc801\uc778"}</span>
                {" \uc120\ud0dd"}
              </h2>
              <span className="stamp" id="stamp">{"\uccab \uc810\uac80 '0\uc6d0'"}</span>
            </div>
            <div className="toggle" role="group" aria-label="타이어 등급">
              <button type="button" aria-pressed="true" data-term="1">{"\uad6d\uc0b0"}</button>
              {" "}
              <button type="button" aria-pressed="false" data-term="3">{"\uc218\uc785 \u00b7 \ud504\ub9ac\ubbf8\uc5c4"}</button>
            </div>
            <div className="prices" data-stagger>
              <article className="pc">
                <div className="pc-top">
                  <div>
                    <h3>{"\ud0c0\uc774\uc5b4 1\ubcf8 \uad50\uccb4"}</h3>
                    <p>{"\uad6d\uc0b0 \ucef4\ud3ec\ud2b8 \uae30\uc900"}</p>
                  </div>
                </div>
                <div className="pc-price">
                  <s>{"\u20a990,000"}</s>
                  <div>
                    <strong>{"\u20a979,000"}</strong>
                    <span>{"/ 1\ubcf8"}</span>
                  </div>
                </div>
                <ul>
                  <li>
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                    {"\ud0c8\ucc29 \u00b7 \uc7a5\ucc29 \uacf5\uc784 \ud3ec\ud568"}
                  </li>
                  <li>
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                    {"\ud720 \ubc38\ub7f0\uc2a4 \uc870\uc815"}
                  </li>
                  <li>
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                    {"\ud3d0\ud0c0\uc774\uc5b4 \ubb34\ub8cc \ucc98\ub9ac"}
                  </li>
                </ul>
                <a className="btn btn-w btn-full" href="#consult">{"\uc608\uc57d\ud558\uae30"}</a>
              </article>
              <article className="pc pc-best">
                <div className="pc-top">
                  <div>
                    <h3>{"4\ubcf8 \uad50\uccb4 \ud328\ud0a4\uc9c0"}</h3>
                    <p id="bestNote">{"\uac00\uc7a5 \ub9ce\uc774 \uc120\ud0dd\ud574\uc694"}</p>
                  </div>
                  <span className="best">{"BEST"}</span>
                </div>
                <div className="pc-price">
                  <s id="bestOrig">{"\u20a9360,000"}</s>
                  <div>
                    <strong id="bestPrice" data-v="299000">{"\u20a9299,000"}</strong>
                    <span>{"/ 4\ubcf8"}</span>
                  </div>
                </div>
                <ul>
                  <li>
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                    {"4\ubcf8 \uc7a5\ucc29 + \ud720 \uc5bc\ub77c\uc778\uba3c\ud2b8"}
                  </li>
                  <li>
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                    {"\uc9c8\uc18c \ucda9\uc804 \ubb34\ub8cc"}
                  </li>
                  <li>
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                    {"1\ub144 \ud391\ud06c \uc218\ub9ac \ubcf4\uc99d"}
                  </li>
                </ul>
                <a className="btn btn-k btn-full" href="#consult">{"\ud328\ud0a4\uc9c0 \uc608\uc57d\ud558\uae30"}</a>
              </article>
              <article className="pc">
                <div className="pc-top">
                  <div>
                    <h3>{"\uc815\ube44 \ud328\ud0a4\uc9c0"}</h3>
                    <p>{"\uc5bc\ub77c\uc778\uba3c\ud2b8 + \uc704\uce58 \uad50\ud658"}</p>
                  </div>
                </div>
                <div className="pc-price">
                  <span className="s-empty" aria-hidden="true" />
                  <div>
                    <strong>{"\u20a969,000"}</strong>
                    <span>{"/ 1\ud68c"}</span>
                  </div>
                </div>
                <ul>
                  <li>
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                    {"3D \ud720 \uc5bc\ub77c\uc778\uba3c\ud2b8"}
                  </li>
                  <li>
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                    {"\ud0c0\uc774\uc5b4 \uc704\uce58 \uad50\ud658"}
                  </li>
                  <li>
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                    {"\uacf5\uae30\uc555 \u00b7 \ub9c8\ubaa8 \ub9ac\ud3ec\ud2b8"}
                  </li>
                </ul>
                <a className="btn btn-w btn-full" href="#consult">{"\uc608\uc57d\ud558\uae30"}</a>
              </article>
            </div>
            <p className="note">{"\ubaa8\ub4e0 \uac00\uaca9\uc740 \ubd80\uac00\uc138 \u00b7 \uacf5\uc784 \ud3ec\ud568\uc774\uba70, \uc0ac\uc774\uc988\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9c8 \uc218 \uc788\uc5b4\uc694."}</p>
          </div>
        </section>
        <div className="cloud cloud-kw" aria-hidden="true" />
        <section className="sec light after-cloud" id="schedule">
          <div className="wrap">
            <div className="sec-head" data-reveal>
              <p className="eye">
                <b>{"(07)"}</b>
                {"BOOKING"}
              </p>
              <h2 className="hl">
                {"\uc6d0\ud558\ub294 \uc2dc\uac04\uc5d0,"}
                <br />
                <mark>{"\uae30\ub2e4\ub9bc \uc5c6\uc774"}</mark>
                {" \uc7a5\ucc29\ud558\uc138\uc694"}
              </h2>
            </div>
            <div className="days" role="tablist" aria-label="요일" id="days" />
            <ul className="slist" id="slist" role="tabpanel" aria-live="polite" />
          </div>
        </section>
        <div className="cloud cloud-wk" aria-hidden="true" />
        <section className="dark glow cta-foot" id="cta">
          <div className="wrap">
            <div className="final center" data-reveal>
              <div className="badge badge-static" aria-hidden="true">
                <small>{"FREE CHECK"}</small>
                <b>{"\uccab \uc810\uac80"}</b>
                <strong>{"\ubb34\ub8cc"}</strong>
              </div>
              <h2 className="hl hl-lg">
                {"\uccab \uc810\uac80\uc740 "}
                <mark>{"\ubb34\ub8cc"}</mark>
                {"\uc785\ub2c8\ub2e4"}
              </h2>
              <p className="sub">{"\uc9c0\uae08 \uc608\uc57d\ud558\uba74 4\ubcf8 \uad50\uccb4 \uc2dc 10% \ud560\uc778\uae4c\uc9c0 \ub4dc\ub824\uc694."}</p>
              <a className="btn btn-cy btn-lg" href="#consult">
                {"\ubb34\ub8cc \uc810\uac80 \uc608\uc57d\ud558\uae30 "}
                <svg className="ic">
                  <use href="#i-ar" />
                </svg>
              </a>
            </div>
            <footer className="footer" id="footer">
              <div className="f-top">
                <div className="f-brand">
                  <a className="logo" href="#top">
                    <svg className="ic">
                      <use href="#i-tire" />
                    </svg>
                    <span>{"TREAD9"}</span>
                  </a>
                  <p>{"30\ubd84\uc774\uba74 \ub05d\ub098\ub294 \ud0c0\uc774\uc5b4 \uad50\uccb4 \uc804\ubb38\uc810"}</p>
                  <div className="sns">
                    <a className="ic-btn" href="#footer" aria-label="인스타그램">
                      <svg className="ic">
                        <use href="#i-ig" />
                      </svg>
                    </a>
                    {" "}
                    <a className="ic-btn" href="#consult" aria-label="상담 채팅">
                      <svg className="ic">
                        <use href="#i-chat" />
                      </svg>
                    </a>
                    {" "}
                    <a className="ic-btn" href="#footer" aria-label="유튜브">
                      <svg className="ic">
                        <use href="#i-yt" />
                      </svg>
                    </a>
                  </div>
                </div>
                <dl className="f-info">
                  <div>
                    <dt>{"\uc8fc\uc18c"}</dt>
                    <dd>{"\uc11c\uc6b8 \uc131\ub3d9\uad6c \uc131\uc218\uc774\ub85c 00, 1\uce35"}</dd>
                  </div>
                  <div>
                    <dt>{"\uc6b4\uc601 \uc2dc\uac04"}</dt>
                    <dd>
                      {"\ud3c9\uc77c 09:00 \u2013 20:00"}
                      <br />
                      {"\ud1a0\uc694\uc77c 09:00 \u2013 17:00 \u00b7 \uc77c\uc694\uc77c \ud734\ubb34"}
                    </dd>
                  </div>
                  <div>
                    <dt>{"\ubb38\uc758"}</dt>
                    <dd>{"02-000-0000"}</dd>
                  </div>
                </dl>
              </div>
              <div className="f-bot">
                <span>{"\u00a9 2026 TREAD9 TIRE. All rights reserved."}</span>
                <span>{"\uc774\uc6a9\uc57d\uad00 \u00b7 \uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68"}</span>
              </div>
              <div className="wordmark" aria-hidden="true">{"TREAD9"}</div>
            </footer>
          </div>
        </section>
      </main>
      <div className="toast" id="toast" role="status" aria-live="polite" />
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
    </>
  )
}
