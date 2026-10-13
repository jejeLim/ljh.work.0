// SiteE: E.html 를 React로 변환한 페이지 (단일 파일, 컴포넌트 분리 없음)
import { useEffect, type CSSProperties } from 'react'
import { init } from './script.js'
import './site.scss'

export function SiteE() {
  // 원본 스크립트는 DOM을 직접 조립하므로 마운트 후 한 번만 실행한다
  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <symbol id="i-bag" viewBox="0 0 24 24">
          <path d="M5 8h14l-1.2 12H6.2z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </symbol>
        <symbol id="ne" viewBox="0 0 24 24">
          <path d="M7 17L17 7M8 7h9v9" />
        </symbol>
        <symbol id="ar" viewBox="0 0 24 24">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </symbol>
        <symbol id="up" viewBox="0 0 24 24">
          <path d="M12 19V5M6 11l6-6 6 6" />
        </symbol>
      </svg>
      <div className="pre" id="pre" aria-hidden="true">
        <div className="pre-in">
          <b>{"olea"}</b>
          <span id="preN">{"0"}</span>
        </div>
        <i id="preBar" />
      </div>
      <div className="cur" id="cur" aria-hidden="true">
        <b id="curT">{"view"}</b>
      </div>
      <header className="nav" id="nav">
        <a className="logo" href="#top" aria-label="olea 홈">{"olea"}</a>
        <nav aria-label="주요 메뉴">
          <a href="#about">{"About"}</a>
          <a href="#catalog">{"Catalog"}</a>
          <a href="#care">{"Skincare"}</a>
          <a href="#catalog">{"Hair & Body"}</a>
          <a href="#new">{"New"}</a>
          <a href="#footer">{"Journal"}</a>
        </nav>
        <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
          <button className="menu-btn" id="menuBtn" type="button" aria-expanded="false" aria-controls="mnav">{"Menu"}</button>
          {" "}
          <a className="bag" id="bag" href="#product" aria-label="장바구니">
            <svg>
              <use href="#i-bag" />
            </svg>
            <span className="n">
              <span id="bagN">{"0"}</span>
            </span>
            <span className="bag-msg" id="bagMsg" role="status" />
          </a>
        </div>
        <div className="prog" aria-hidden="true">
          <i id="sp" />
        </div>
      </header>
      <div className="mnav" id="mnav" role="dialog" aria-modal="true" aria-label="메뉴">
        <button type="button" id="mClose">{"Close"}</button>
        {" "}
        <a href="#about">{"About"}</a>
        <a href="#catalog">{"Catalog"}</a>
        <a href="#care">{"Skincare"}</a>
        <a href="#new">{"New"}</a>
        <a href="#product">{"Shop"}</a>
      </div>
      <main className="page" id="top">
        <section className="card hero" id="hero" aria-label="olea">
          <div className="ph ph-eye" role="img" aria-label="주근깨가 있는 피부와 눈의 클로즈업" data-cursor="olea" />
          <h1 className="word" id="word" aria-label="olea">
            <span className="ch">
              <span style={{ "--i": "0" } as CSSProperties}>{"o"}</span>
            </span>
            <span className="ch">
              <span style={{ "--i": "1" } as CSSProperties}>{"l"}</span>
            </span>
            <span className="ch">
              <span style={{ "--i": "2" } as CSSProperties}>{"e"}</span>
            </span>
            <span className="ch">
              <span style={{ "--i": "3" } as CSSProperties}>{"a"}</span>
            </span>
          </h1>
          <div className="sale">
            <div className="sale-in">
              <div className="sale-f">
                <div className="sale-top">
                  <span aria-hidden="true">{"\u21bb"}</span>
                  <em>{"sale -15%"}</em>
                </div>
                <div className="ph ph-butter" role="img" aria-label="코코넛 바디 버터" />
                <p>
                  {"Coconut"}
                  <br />
                  {"body butter"}
                </p>
              </div>
              <div className="sale-b">
                <div className="sale-top">
                  <span>{"body butter"}</span>
                  <em>{"-15%"}</em>
                </div>
                <div>
                  <s>{"\u20a932,000"}</s>
                  <br />
                  <strong>{"\u20a927,200"}</strong>
                </div>
                <button className="pill add" type="button" data-name="Coconut body butter">{"Add to bag"}</button>
              </div>
            </div>
          </div>
        </section>
        <section className="card philo" id="about">
          <div className="copy">
            <h2 className="h2 bw">{"New philosophy of self-care: calm skin & hair"}</h2>
            <p className="txt">
              {"olea\ub294 \uaf2d \ud544\uc694\ud55c \uac83\ub9cc \ub2f4\ub294 \uc758\uc2dd \uc788\ub294 \ub2e8\uc21c\ud568\uc5d0\uc11c \uc2dc\uc791\ud569\ub2c8\ub2e4. \ud6a8\uacfc\uc801\uc778 \ud3ec\ubbac\ub7ec, \ubbff\uc744 \uc218 \uc788\ub294 \uc62c\ub9ac\ube0c \uc720\ub798 \uc131\ubd84, \ub9e4\uc77c \uc4f0\uae30 \uc88b\uc740 \ubd80\ub4dc\ub7ec\uc6b4 \ud14d\uc2a4\ucc98."}
            </p>
            <p className="txt">{"\ud53c\ubd80\ub97c \uc555\ub3c4\ud558\uc9c0 \uc54a\uace0 \ubc1b\uccd0\uc8fc\ub294 \uc2a4\ud0a8\ucf00\uc5b4 \u2014 \ud604\ub300 \uacfc\ud559\uacfc \ucc28\ubd84\ud55c \ubbf8\ub2c8\uba40\ub9ac\uc998\uc744 \ud568\uaed8 \ub2f4\uc558\uc5b4\uc694."}</p>
            <a className="pill pill-sage" href="#care">{"More about olea"}</a>
          </div>
          <div className="tilt" id="tilt">
            <div className="tilt-in">
              <div className="ph ph-jar" role="img" aria-label="뚜껑이 열린 olea 앰버 크림 자" data-cursor="tilt" />
            </div>
          </div>
        </section>
        <section className="card mission" id="catalog">
          <div className="m-row">
            <div className="m-left">
              <h3>{"Brand Mission"}</h3>
              <figure className="quote" style={{ margin: "0" }}>
                <div className="ph ph-model" role="img" aria-label="olea 모델" />
                <p>{"\u201c\ub2f9\uc2e0\uc758 \uc77c\uc0c1\uc801\uc778 \ub3cc\ubd04\uc774 \uc791\uc740 \uc758\uc2dd\uc774 \ub418\uae30\ub97c \ubc14\ub790\uc5b4\uc694. \uc2a4\uc2a4\ub85c\uc758 \uac00\uce58\ub97c \uc54c\uc544\ucc28\ub9ac\ub294 \uc21c\uac04, \uadf8\uacf3\uc774 \uc2dc\uc791\uc774\uc5d0\uc694.\u201d"}</p>
              </figure>
            </div>
            <div className="m-right">
              <p className="bw">
                {"olea\uc758 \ubaa9\ud45c\ub294 \uacfc\ud558\uc9c0 \uc54a\uc740 \ub7ed\uc154\ub9ac \uc2a4\ud30c \ucf00\uc5b4\ub97c \uc77c\uc0c1\uc5d0 \ub4e4\uc774\ub294 \uac83\uc785\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \uc2a4\ud0a8\ucf00\uc5b4\uc758 \uacbd\ud5d8 \uc790\uccb4\uc5d0 \uc9d1\uc911\ud558\uace0, \ud328\ud0a4\uc9c0\ub294 \uadf8 \uacbd\ud5d8\uc744 \ubc29\ud574\ud558\uc9c0 \uc54a\ub3c4\ub85d \ub35c\uc5b4\ub0c8\uc5b4\uc694."}
              </p>
              <a className="pill pill-line" href="#care">{"Learn more"}</a>
            </div>
          </div>
          <div className="acc">
            <a className="tile" href="#product" data-cursor="shop">
              <span className="ph ph-body" />
              <span className="lb">{"( body )"}</span>
              <span className="ar">
                <svg>
                  <use href="#ne" />
                </svg>
              </span>
              <span className="more">{"\ub77c\ubca4\ub354 \ubc14\ub514 \ud06c\ub9bc \u00b7 \uc2a4\ud06c\ub7fd \u00b7 \ubc14\ub514 \ubc84\ud130 \u2014 \ud558\ub8e8 \ub05d \ud53c\ubd80\ub97c \uac10\uc2f8\ub294 \ubcf4\uc2b5 \ub77c\uc778"}</span>
            </a>
            {" "}
            <a className="tile" href="#care" data-cursor="shop">
              <span className="ph ph-face" />
              <span className="lb">{"( face )"}</span>
              <span className="ar">
                <svg>
                  <use href="#ne" />
                </svg>
              </span>
              <span className="more">{"\uc62c\ub9ac\ube0c \uc2a4\ucfe0\uc54c\ub780 \ud398\uc774\uc2a4 \uc624\uc77c\uacfc \uc138\ub7fc\uc73c\ub85c \uc7a5\ubcbd\uc744 \ucc28\ubd84\ud558\uac8c"}</span>
            </a>
            {" "}
            <a className="tile hair" href="#new" data-cursor="shop">
              <span className="ph ph-hair" />
              <span className="lb">{"( hair )"}</span>
              <span className="ar">
                <svg>
                  <use href="#ne" />
                </svg>
              </span>
              <span className="more">{"\ub450\ud53c \ubbf8\uc2a4\ud2b8\uc640 \ub9ac\ube0c\uc778 \ucf00\uc5b4 \u2014 \uac00\ubccd\uac8c, \ub048\uc801\uc784 \uc5c6\uc774"}</span>
            </a>
            {" "}
            <a className="tile" href="#new" data-cursor="shop">
              <span className="ph ph-other" />
              <span className="lb">{"( other )"}</span>
              <span className="ar">
                <svg>
                  <use href="#ne" />
                </svg>
              </span>
              <span className="more">{"\ud578\ub4dc\ud06c\ub9bc \u00b7 \ud2b8\ub798\ube14 \ud0a4\ud2b8 \u00b7 \ub9ac\ud544 \ud30c\uc6b0\uce58"}</span>
            </a>
          </div>
        </section>
        <section className="card pure" id="care">
          <div className="pics">
            <div className="fr">
              <div className="ph ph-mist" data-speed=".08" role="img" aria-label="트래버틴 위 olea 미스트" />
            </div>
            <div className="fr">
              <div className="ph ph-pump" data-speed="-.06" role="img" aria-label="트래버틴 위 olea 펌프 보틀" />
            </div>
          </div>
          <div className="side">
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h2 className="h2 bw">{"Pure care by nature"}</h2>
              <p className="txt">{"\uade0\ud615\uacfc \ucc28\ubd84\ud568\uc744 \uc704\ud574 \uc124\uacc4\ud55c \ud3ec\ubbac\ub7ec. \uac00\ubcbc\uc6b4 \ud14d\uc2a4\ucc98\uc640 \uc21c\ud55c \uc131\ubd84, \ubbf8\ub2c8\uba40\ud55c \uc811\uadfc\uc73c\ub85c \ub9e4\uc77c \uac74\uac15\ud574 \ubcf4\uc774\ub294 \ud53c\ubd80\ub97c \u2014 \uc560\uc4f0\uc9c0 \uc54a\uace0."}</p>
            </div>
            <div className="towel">
              <div className="ph ph-towel" data-speed=".05" role="img" aria-label="타월 위 올리브 그린 튜브와 보틀" />
            </div>
          </div>
        </section>
        <section className="card new" id="new">
          <div className="big" id="newWord" aria-hidden="true">{"new \u00b7 new"}</div>
          <div className="head">
            <h2 className="h2 bw">{"All-in-One Skincare Complex"}</h2>
            <p>{"\ud558\ub8e8 \ub8e8\ud2f4\uc744 \ub2e8\uc21c\ud558\uac8c, \uacb0\uacfc\ub294 \ud0c0\ud611\ud558\uc9c0 \uc54a\ub294 \uba40\ud2f0 \uae30\ub2a5 \ub77c\uc778."}</p>
          </div>
          <div className="img trio" data-speed="-.08" data-cursor="view">
            <div className="ph ph-trio" role="img" aria-label="크림, 베이지, 세이지 컬러 olea 펌프 보틀" />
          </div>
          <div className="img four" data-speed=".1" data-cursor="view">
            <div className="ph ph-four" role="img" aria-label="앰버 보틀 네 개" />
          </div>
          <div className="body">
            <p>{"\uc218\ubd84 \uacf5\uae09, \uc7a5\ubcbd \ucf00\uc5b4, \ud53c\uc9c0 \ubc38\ub7f0\uc2a4\ub97c \ud55c \ubc88\uc758 \ub2e8\uacc4\ub85c. \ub354 \uc801\uc740 \uc81c\ud488, \ub354 \ud070 \ud6a8\uacfc, \uafb8\uc900\ud55c \ucf00\uc5b4."}</p>
            <a className="pill pill-line" href="#product">{"Catalog"}</a>
          </div>
        </section>
        <section className="card wm" id="product" aria-labelledby="pTitle">
          <div className="tags">
            <span className="tag">{"Products"}</span>
            <div>
              <span className="tag">{"Aesthetics"}</span>
              <span className="tag">{"Comfort"}</span>
              <span className="tag">{"Care"}</span>
            </div>
          </div>
          <div className="letters" id="letters" aria-hidden="true">
            <span>{"o"}</span>
            <span>{"l"}</span>
            <span>{"e"}</span>
            <span>{"a"}</span>
            <span>{"\u00b7"}</span>
          </div>
          <div className="jar" id="jar">
            <div className="ph ph-scrub" role="img" aria-label="코코넛 바디 스크럽" />
          </div>
          <div className="pcard">
            <small>{"( for body )"}</small>
            <h3 id="pTitle">
              {"Body scrub"}
              <br />
              {"coconut"}
            </h3>
            <div className="row">
              <strong>{"\u20a918,000"}</strong>
              <button className="mag add" type="button" data-name="Body scrub coconut">
                {"Buy now "}
                <svg>
                  <use href="#ar" />
                </svg>
              </button>
            </div>
          </div>
        </section>
        <footer className="card ft" id="footer">
          <div className="ft-top">
            <div>
              <div className="logo">{"olea"}</div>
              <p>
                {"\ub9e4\uc77c\uc758 \ud53c\ubd80\uc5d0 \ucc28\ubd84\ud55c \uade0\ud615\uc744."}
                <br />
                {"\uc62c\ub9ac\ube0c\uc5d0\uc11c \uc2dc\uc791\ud55c \ud074\ub9b0 \uc2a4\ud0a8\ucf00\uc5b4."}
              </p>
            </div>
            <div>
              <h3>{"Join the ritual \u2014 10% off"}</h3>
              <form className="nl" id="nl" noValidate>
                <label className="sr" htmlFor="nlE">{"\uc774\uba54\uc77c"}</label>
                <input id="nlE" type="email" placeholder="your@email.com" autoComplete="email" />
                <button type="submit" id="nlB">{"Subscribe"}</button>
              </form>
              <p className="nl-msg" id="nlMsg" aria-live="polite" />
            </div>
          </div>
          <div className="ft-bot">
            <span>
              <a href="#about">{"About"}</a>
              {" \u00b7 "}
              <a href="#catalog">{"Catalog"}</a>
              {" \u00b7 "}
              <a href="#footer">{"Stockists"}</a>
              {" \u00b7 "}
              <a href="#footer">{"Contact"}</a>
            </span>
            <span>{"\u00a9 2026 olea skincare"}</span>
          </div>
        </footer>
      </main>
      <button className="top" id="toTop" type="button" aria-label="맨 위로 이동">
        <svg className="ring" viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
          </defs>
          <text>
            <textPath href="#circ">{"back to top \u00b7 olea \u00b7 back to top \u00b7 olea \u00b7"}</textPath>
          </text>
        </svg>
        {" "}
        <svg className="arr" aria-hidden="true">
          <use href="#up" />
        </svg>
      </button>
    </>
  )
}
