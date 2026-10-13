// SiteD: D.html 를 React로 변환한 페이지 (단일 파일, 컴포넌트 분리 없음)
import { useEffect, type CSSProperties } from 'react'
import { init } from './script.js'
import './site.scss'

export function SiteD() {
  // 원본 스크립트는 DOM을 직접 조립하므로 마운트 후 한 번만 실행한다
  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <symbol id="heart" viewBox="0 0 24 24">
          <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
        </symbol>
        <symbol id="al" viewBox="0 0 24 24">
          <path d="M19 12H5M11 6l-6 6 6 6" />
        </symbol>
        <symbol id="ar" viewBox="0 0 24 24">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </symbol>
        <symbol id="ig" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".6" />
        </symbol>
        <symbol id="yt" viewBox="0 0 24 24">
          <rect x="2" y="5" width="20" height="14" rx="4" />
          <path d="M10 9l5 3-5 3z" />
        </symbol>
        <symbol id="pin" viewBox="0 0 24 24">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </symbol>
      </svg>
      <div className="site">
        <header className="hd" id="hd">
          <nav aria-label="주요 메뉴">
            <a className="lb" href="#shop">{"Shop"}</a>
            <a className="lb" href="#roastery">{"Roastery"}</a>
            <a className="lb" href="#weekly">{"This Week"}</a>
            <a className="lb" href="#footer">{"About us"}</a>
          </nav>
          <button className="lb menu-btn" id="menuBtn" type="button" aria-expanded="false" aria-controls="mm">{"Menu"}</button>
          {" "}
          <a className="logo" href="#top" aria-label="ONDO 홈">{"ONDO"}</a>
          <div className="hd-r">
            <a className="lb d-only" href="#shop">
              {"Favorites ("}
              <span className="cnt" id="favCnt">{"0"}</span>
              {")"}
            </a>
            {" "}
            <a className="lb" href="#weekly">
              {"Cart ("}
              <span className="cnt" id="cartCnt">{"0"}</span>
              {")"}
            </a>
            {" "}
            <a className="lb d-only" href="#footer">{"Account"}</a>
          </div>
        </header>
        <div className="mm" id="mm" role="dialog" aria-modal="true" aria-label="메뉴">
          <div className="mm-top">
            <span className="logo">{"ONDO"}</span>
            <button className="lb" id="mmClose" type="button">{"Close"}</button>
          </div>
          <nav>
            <a href="#shop" style={{ "--k": "0" } as CSSProperties}>{"Shop"}</a>
            <a href="#roastery" style={{ "--k": "1" } as CSSProperties}>{"Roastery"}</a>
            <a href="#weekly" style={{ "--k": "2" } as CSSProperties}>{"This Week"}</a>
            <a href="#order" style={{ "--k": "3" } as CSSProperties}>{"Order"}</a>
            <a href="#footer" style={{ "--k": "4" } as CSSProperties}>{"About"}</a>
          </nav>
          <div className="mm-foot lb mu">
            <span>{"\ub9dd\uc6d0\ub3d9 \u00b7 \ub9e4\uc77c 08\u201320\uc2dc"}</span>
            <span>
              {"Favorites ("}
              <span id="favCnt2">{"0"}</span>
              {")"}
            </span>
          </div>
        </div>
        <main id="top">
          <section className="split hero">
            <div className="copy">
              <div className="copy-top" data-rv>
                <p>{"\ub9e4\uc77c \uc544\uce68 \ub9dd\uc6d0\ub3d9 \ub85c\uc2a4\ud130\ub9ac\uc5d0\uc11c \uc18c\ub7c9\uc529 \uc9c1\uc811 \ubcf6\uc2b5\ub2c8\ub2e4. \uc0b0\uc9c0\uc758 \uac1c\uc131\uc774 \uc0b4\uc544 \uc788\ub294 \ud55c \uc794\uc744, \ubcf6\uc740 \uadf8\ub300\ub85c\uc758 \uc628\ub3c4\ub85c \uc804\ud574\uc694."}</p>
                <a className="oval draw" href="#shop">
                  <svg viewBox="0 0 140 56" preserveAspectRatio="none" aria-hidden="true">
                    <ellipse cx="70" cy="28" rx="65" ry="21" transform="rotate(-5 70 28)" />
                  </svg>
                  <span>{"All products"}</span>
                </a>
              </div>
              <h1 className="big" id="heroTitle">
                <span className="ln">
                  <span>{"Roasted this morning;"}</span>
                </span>
                <span className="ln">
                  <span>{"served at the"}</span>
                </span>
                <span className="ln">
                  <span>{"right temperature"}</span>
                </span>
              </h1>
            </div>
            <div className="hero-img">
              <div className="ph ph-hero" id="heroPh" role="img" aria-label="ONDO 오트 라떼 캔을 들고 있는 손" />
            </div>
          </section>
          <div className="mq" aria-label="Roasted in small batches · Single origin daily · Mangwon roastery since 2019 · Fresh within 7 days">
            <div className="mq-track" aria-hidden="true">
              <div className="mq-item">
                <span>
                  {"Roasted in "}
                  <em>{"Small Batches"}</em>
                </span>
                <i />
                <span>
                  {"Single Origin "}
                  <em>{"Daily"}</em>
                </span>
                <i />
                <span>
                  {"Mangwon Roastery "}
                  <em>{"Since 2019"}</em>
                </span>
                <i />
                <span>
                  {"Fresh "}
                  <em>{"Within 7 Days"}</em>
                </span>
                <i />
              </div>
              <div className="mq-item">
                <span>
                  {"Roasted in "}
                  <em>{"Small Batches"}</em>
                </span>
                <i />
                <span>
                  {"Single Origin "}
                  <em>{"Daily"}</em>
                </span>
                <i />
                <span>
                  {"Mangwon Roastery "}
                  <em>{"Since 2019"}</em>
                </span>
                <i />
                <span>
                  {"Fresh "}
                  <em>{"Within 7 Days"}</em>
                </span>
                <i />
              </div>
            </div>
          </div>
          <section id="shop" aria-label="커피 캔">
            <div className="grid" id="canGrid" />
          </section>
          <section className="split cats" id="roastery">
            <div className="ph ph-asphalt reveal-img" role="img" aria-label="햇빛 그림자 위에 놓인 ONDO 커피 캔" />
            <div className="cat-list">
              <div className="cat" data-rv>
                <h2>{"Coffee can"}</h2>
                <p>
                  {"Cold Brew"}
                  <br />
                  {"Oat Latte"}
                </p>
                <a className="oval sm" href="#shop">
                  <svg viewBox="0 0 140 56" preserveAspectRatio="none" aria-hidden="true">
                    <ellipse cx="70" cy="28" rx="65" ry="21" transform="rotate(-5 70 28)" />
                  </svg>
                  <span>{"All products"}</span>
                </a>
              </div>
              <div className="cat" data-rv>
                <h2>{"Bean pouch"}</h2>
                <p>
                  {"Single Origin"}
                  <br />
                  {"House Blend"}
                </p>
                <a className="oval sm" href="#beans">
                  <svg viewBox="0 0 140 56" preserveAspectRatio="none" aria-hidden="true">
                    <ellipse cx="70" cy="28" rx="65" ry="21" transform="rotate(-5 70 28)" />
                  </svg>
                  <span>{"All products"}</span>
                </a>
              </div>
            </div>
          </section>
          <section id="beans" aria-label="원두">
            <div className="grid" id="pouchGrid" />
          </section>
          <section className="detail" id="weekly">
            <div className="ph ph-jar reveal-img" role="img" aria-label="원두가 담긴 앰버 유리병" />
            <form className="d-info" id="buyForm" data-rv>
              <span className="lb" id="roastDate">{"This week's roast"}</span>
              <h2>{"Ethiopia Guji Hambela"}</h2>
              <p>{"\uc6cc\uc2dc\ub4dc \uac00\uacf5\uc758 \uac8c\uc774\uc0e4 \ud488\uc885\uc744 \ub77c\uc774\ud2b8 \ub85c\uc2a4\ud305\ud588\uc5b4\uc694. \ub9d1\uc740 \uc0b0\ubbf8\uc640 \uaf43\ud5a5\uae30\uac00 \uae38\uac8c \uc774\uc5b4\uc9d1\ub2c8\ub2e4."}</p>
              <hr />
              <div className="notes">
                <b>{"Tasting notes"}</b>
                {"\uc790\uc2a4\ubbfc \u00b7 \ubc31\ub3c4 \u00b7 \uc5bc\uadf8\ub808\uc774"}
              </div>
              <hr />
              <fieldset className="opts" id="sizes">
                <legend>{"\uc6a9\ub7c9"}</legend>
                <label className="r">
                  <input type="radio" name="size" defaultValue="19000" defaultChecked />
                  {"200g"}
                </label>
                {" "}
                <label className="r">
                  <input type="radio" name="size" defaultValue="42000" />
                  {"500g"}
                </label>
                {" "}
                <label className="r">
                  <input type="radio" name="size" defaultValue="79000" />
                  {"1kg"}
                </label>
              </fieldset>
              <fieldset className="grind">
                <legend>{"\ubd84\uc1c4"}</legend>
                <label className="chip">
                  <input type="radio" name="grind" defaultValue="홀빈" defaultChecked />
                  <span>{"\ud640\ube48"}</span>
                </label>
                {" "}
                <label className="chip">
                  <input type="radio" name="grind" defaultValue="핸드드립" />
                  <span>{"\ud578\ub4dc\ub4dc\ub9bd"}</span>
                </label>
                {" "}
                <label className="chip">
                  <input type="radio" name="grind" defaultValue="에스프레소" />
                  <span>{"\uc5d0\uc2a4\ud504\ub808\uc18c"}</span>
                </label>
              </fieldset>
              <div className="d-price" id="dPrice" aria-live="polite">{"\u20a919,000"}</div>
              <div className="buy">
                <button className="go" type="submit">{"Add to cart"}</button>
                <div className="qty">
                  <button type="button" id="qMinus" aria-label="수량 빼기">{"\u2013"}</button>
                  <output id="qty" aria-label="수량">{"1"}</output>
                  <button type="button" id="qPlus" aria-label="수량 더하기">{"+"}</button>
                </div>
              </div>
            </form>
          </section>
          <section className="split hand">
            <div className="copy">
              <h2 className="serif-title" data-rv>
                <span>{"Roasted by"}</span>
                <span className="in2">{"hand ~ every"}</span>
                <span className="row">
                  {"morning "}
                  <small>{"\uc0dd\ub450 \uc120\ubcc4\ubd80\ud130 \ub85c\uc2a4\ud305, \ud3ec\uc7a5\uae4c\uc9c0 \ub9dd\uc6d0\ub3d9 \ub85c\uc2a4\ud130\ub9ac\uc5d0\uc11c \uc9c1\uc811 \ud569\ub2c8\ub2e4. \ubcf6\uc740 \uc9c0 7\uc77c \uc774\ub0b4\uc758 \uc6d0\ub450\ub9cc \ubcf4\ub0b4\ub4dc\ub824\uc694."}</small>
                </span>
              </h2>
              <div className="thumbs" role="group" aria-label="로스터리 사진 선택" data-rv>
                <button type="button" data-k="green" aria-pressed="false" aria-label="생두">
                  <span className="ph ph-green" />
                </button>
                {" "}
                <button type="button" data-k="roaster" aria-pressed="false" aria-label="로스팅 기계">
                  <span className="ph ph-roaster" />
                </button>
                {" "}
                <button type="button" data-k="latte" aria-pressed="false" aria-label="라떼">
                  <span className="ph ph-latte" />
                </button>
              </div>
            </div>
            <div className="stage" id="stage">
              <div className="ph ph-pour on" data-k="pour" role="img" aria-label="유리병에서 손바닥으로 쏟아지는 원두" />
              <div className="ph ph-green" data-k="green" role="img" aria-label="두 손에 담긴 생두" />
              <div className="ph ph-roaster" data-k="roaster" role="img" aria-label="쿨링 트레이로 쏟아지는 갓 볶은 원두" />
              <div className="ph ph-latte" data-k="latte" role="img" aria-label="라떼 아트가 그려진 라떼" />
            </div>
          </section>
          <section className="like" aria-labelledby="likeT">
            <div className="like-hd">
              <h2 id="likeT" data-rv>{"You may like"}</h2>
              <div className="arws">
                <button className="arw" id="lPrev" type="button" aria-label="이전">
                  <svg>
                    <use href="#al" />
                  </svg>
                </button>
                <button className="arw" id="lNext" type="button" aria-label="다음">
                  <svg>
                    <use href="#ar" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="track" id="likeTrack" />
            <div className="prog" aria-hidden="true">
              <i id="prog" />
            </div>
            <a className="lb shop-all" href="#shop">{"Shop all"}</a>
          </section>
          <section className="split order" id="order">
            <div className="copy">
              <div className="copy-top" data-rv>
                <a className="oval sm" href="#weekly">
                  <svg viewBox="0 0 140 56" preserveAspectRatio="none" aria-hidden="true">
                    <ellipse cx="70" cy="28" rx="65" ry="21" transform="rotate(-5 70 28)" />
                  </svg>
                  <span>{"Order"}</span>
                </a>
                <div className="order-txt">
                  <p>{"\uc624\ud6c4 2\uc2dc \uc774\uc804 \uc8fc\ubb38 \uc2dc \ub2f9\uc77c \ub85c\uc2a4\ud305\ud574 \ub2e4\uc74c \ub0a0 \ub3c4\ucc29\ud569\ub2c8\ub2e4. \uac00\uc7a5 \uc2e0\uc120\ud55c \uc0c1\ud0dc\ub85c \ubc1b\uc544\ubcf4\uc138\uc694."}</p>
                  <div className="cd" aria-live="off">
                    <span id="cdLabel">{"\uc624\ub298 \ub85c\uc2a4\ud305 \ub9c8\uac10\uae4c\uc9c0"}</span>
                    <b id="cd">{"--:--:--"}</b>
                  </div>
                </div>
              </div>
              <h2 className="big">
                <span className="ln">
                  <span>{"Roast today,"}</span>
                </span>
                <span className="ln">
                  <span>{"brew tomorrow"}</span>
                </span>
              </h2>
            </div>
            <div className="ph ph-carry reveal-img" role="img" aria-label="ONDO 캐리어 박스를 든 사람" />
          </section>
        </main>
        <footer className="ft" id="footer">
          <a className="logo" href="#top">{"ONDO"}</a>
          <div className="ft-cols">
            <div className="ft-lists">
              <div>
                <h3>{"Menu"}</h3>
                <ul>
                  <li>
                    <a href="#shop">{"Shop"}</a>
                  </li>
                  <li>
                    <a href="#weekly">{"Subscription"}</a>
                  </li>
                  <li>
                    <a href="#footer">{"Wholesale"}</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>{"Info"}</h3>
                <ul>
                  <li>
                    <a href="#footer">{"About us"}</a>
                  </li>
                  <li>
                    <a href="#footer">{"Privacy policy"}</a>
                  </li>
                  <li>
                    <a href="#footer">{"Contact"}</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>{"Visit"}</h3>
                <ul>
                  <li>{"\uc11c\uc6b8 \ub9c8\ud3ec\uad6c \ub9dd\uc6d0\ub85c 00, 1\uce35"}</li>
                  <li>{"\ub9e4\uc77c 08:00 \u2013 20:00"}</li>
                  <li>{"\ub85c\uc2a4\ud305 \ud654 \u00b7 \uae08 / 02-000-0000"}</li>
                </ul>
              </div>
            </div>
            <div className="nl">
              <h3>{"Get 10% off your first bag"}</h3>
              <form id="nl" noValidate>
                <label>
                  <span className="sr">{"\uc774\uba54\uc77c"}</span>
                  <input id="nlEmail" type="email" placeholder="Your email" autoComplete="email" />
                </label>
                {" "}
                <button className="oval sm" type="submit">
                  <svg viewBox="0 0 140 56" preserveAspectRatio="none" aria-hidden="true">
                    <ellipse cx="70" cy="28" rx="65" ry="21" transform="rotate(-5 70 28)" />
                  </svg>
                  <span>{"Sign me up"}</span>
                </button>
              </form>
              <p className="msg" id="nlMsg" aria-live="polite" />
            </div>
          </div>
          <div className="ft-bot">
            <div className="sns">
              <a href="#footer" aria-label="인스타그램">
                <svg>
                  <use href="#ig" />
                </svg>
              </a>
              <a href="#footer" aria-label="유튜브">
                <svg>
                  <use href="#yt" />
                </svg>
              </a>
              <a href="#footer" aria-label="오시는 길">
                <svg>
                  <use href="#pin" />
                </svg>
              </a>
            </div>
            <span>{"\u00a9 2026 ONDO ROASTERS"}</span>
          </div>
        </footer>
      </div>
      <div className="toast" id="toast" role="status" aria-live="polite" />
      <button className="totop" id="toTop" type="button" aria-label="맨 위로 이동">
        <svg className="ring" viewBox="0 0 56 56" aria-hidden="true">
          <circle id="topBar" cx="28" cy="28" r="26.5" />
        </svg>
        <span className="t">{"TOP"}</span>
      </button>
    </>
  )
}
