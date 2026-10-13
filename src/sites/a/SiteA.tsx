// SiteA: A.html 를 React로 변환한 페이지 (단일 파일, 컴포넌트 분리 없음)
import { useEffect, type CSSProperties } from 'react'
import { init } from './script.js'
import './site.scss'

export function SiteA() {
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
        <symbol id="i-aur" viewBox="0 0 24 24">
          <path d="M7 17L17 7M8 7h9v9" />
        </symbol>
        <symbol id="i-pool" viewBox="0 0 24 24">
          <path d="M2 18c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5M8 15V5a2 2 0 0 1 4 0M16 15V5a2 2 0 0 0-4 0M8 9h8M8 12.5h8" />
        </symbol>
        <symbol id="i-leaf" viewBox="0 0 24 24">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </symbol>
        <symbol id="i-sun" viewBox="0 0 24 24">
          <path d="M12 2v3M4.9 6.9l1.4 1.4M19.1 6.9l-1.4 1.4M2 16h2M20 16h2M17 16a5 5 0 0 0-10 0M2 20h20" />
        </symbol>
        <symbol id="i-menu" viewBox="0 0 24 24">
          <path d="M4 8h16M4 16h16" />
        </symbol>
        <symbol id="i-x" viewBox="0 0 24 24">
          <path d="M6 6l12 12M18 6L6 18" />
        </symbol>
        <symbol id="i-heart" viewBox="0 0 24 24">
          <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z" />
        </symbol>
        <symbol id="i-bed" viewBox="0 0 24 24">
          <path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" />
        </symbol>
        <symbol id="i-bath" viewBox="0 0 24 24">
          <path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM6 12V5a2 2 0 0 1 3.5-1.3M6 20l-1 2M18 20l1 2" />
        </symbol>
        <symbol id="i-area" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </symbol>
        <symbol id="i-brief" viewBox="0 0 24 24">
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
        </symbol>
        <symbol id="i-car" viewBox="0 0 24 24">
          <path d="M3 13l2-6a2 2 0 0 1 2-1.4h10A2 2 0 0 1 19 7l2 6v5h-3M3 13v5h3M3 13h18M9 18h6" />
          <circle cx="7.5" cy="17.5" r="1.5" />
          <circle cx="16.5" cy="17.5" r="1.5" />
        </symbol>
        <symbol id="i-truck" viewBox="0 0 24 24">
          <path d="M1 6h13v10H1zM14 10h4l3 3v3h-7" />
          <circle cx="5.5" cy="17.5" r="1.5" />
          <circle cx="17.5" cy="17.5" r="1.5" />
        </symbol>
        <symbol id="i-height" viewBox="0 0 24 24">
          <path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" />
        </symbol>
        <symbol id="i-pin" viewBox="0 0 24 24">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </symbol>
        <symbol id="i-star" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" stroke="none" />
        </symbol>
        <symbol id="i-search" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </symbol>
        <symbol id="i-home" viewBox="0 0 24 24">
          <path d="M3 10l9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
        </symbol>
        <symbol id="i-chat" viewBox="0 0 24 24">
          <path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.4A8 8 0 1 1 21 12z" />
        </symbol>
        <symbol id="i-key" viewBox="0 0 24 24">
          <circle cx="7.5" cy="15.5" r="4.5" />
          <path d="M10.7 12.3L21 2M17 6l3 3M15 8l2 2" />
        </symbol>
        <symbol id="i-check" viewBox="0 0 24 24">
          <path d="M5 12l5 5L20 7" />
        </symbol>
        <symbol id="i-sofa" viewBox="0 0 24 24">
          <path d="M4 11V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3M2 13a2 2 0 0 1 4 0v2h12v-2a2 2 0 0 1 4 0v5H2zM5 18v2M19 18v2" />
        </symbol>
        <symbol id="i-lamp" viewBox="0 0 24 24">
          <path d="M8 2h8l3 8H5zM12 10v10M8 22h8" />
        </symbol>
        <symbol id="i-hammer" viewBox="0 0 24 24">
          <path d="M15 12l-8.5 8.5a2.1 2.1 0 0 1-3-3L12 9M17.6 15L22 10.6M20 8l-5.7-5.7a2 2 0 0 0-2.8 0L10 4l6 6" />
        </symbol>
        <symbol id="i-mail" viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </symbol>
        <symbol id="i-ig" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".6" />
        </symbol>
        <symbol id="i-li" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M8 11v5M12 16v-5M16 16v-3a2 2 0 0 0-4 0" />
          <circle cx="8" cy="8" r=".6" />
        </symbol>
        <symbol id="i-yt" viewBox="0 0 24 24">
          <rect x="2" y="5" width="20" height="14" rx="4" />
          <path d="M10 9l5 3-5 3z" />
        </symbol>
      </svg>
      <div className="progress" id="progress" aria-hidden="true">
        <i />
      </div>
      <div className="announce">
        <span className="new">{"NEW"}</span>
        {" "}
        <span>
          <span className="t-full">{"Virtual 3D tours are now live across 12 cities \u2014 explore homes from anywhere."}</span>
          <span className="t-mid">{"Virtual 3D tours are now live across 12 cities."}</span>
          <span className="t-short">{"3D tours now live in 12 cities"}</span>
        </span>
        {" "}
        <a href="#listings">
          {"Explore "}
          <svg className="ic">
            <use href="#i-ar" />
          </svg>
        </a>
      </div>
      <header className="nav" id="nav">
        <div className="wrap nav-in">
          <a className="logo" href="#top" aria-label="Corazon home">
            <span className="logo-mark" />
            {"Corazon"}
          </a>
          <nav className="links" aria-label="Primary">
            <a href="#listings">{"Listings"}</a>
            <a href="#guide">{"How it works"}</a>
            <a href="#reviews">{"Reviews"}</a>
            <a href="#journal">{"Journal"}</a>
            <a href="#services">{"Services"}</a>
            {" "}
            <span className="ind" aria-hidden="true" />
          </nav>
          <div className="nav-r">
            <a className="signin" href="#newsletter">{"Sign in"}</a>
            {" "}
            <a className="btn btn-light btn-sm" href="#newsletter">{"Get Started"}</a>
            {" "}
            <button className="menu-btn" id="menuBtn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mmenu">
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
              <span className="logo-mark" />
              {"Corazon"}
            </a>
            {" "}
            <button className="menu-btn" id="menuClose" type="button" aria-label="Close menu" style={{ display: "grid" }}>
              <svg className="ic">
                <use href="#i-x" />
              </svg>
            </button>
          </div>
          <nav className="mm-links" aria-label="Mobile">
            <a href="#listings" style={{ "--k": "0" } as CSSProperties}>{"Listings"}</a>
            <a href="#guide" style={{ "--k": "1" } as CSSProperties}>{"How it works"}</a>
            <a href="#reviews" style={{ "--k": "2" } as CSSProperties}>{"Reviews"}</a>
            <a href="#journal" style={{ "--k": "3" } as CSSProperties}>{"Journal"}</a>
            <a href="#services" style={{ "--k": "4" } as CSSProperties}>{"Services"}</a>
          </nav>
          <a className="btn btn-light btn-lg" href="#newsletter">
            {"Get Started "}
            <svg className="ic">
              <use href="#i-ar" />
            </svg>
          </a>
        </div>
      </div>
      <main>
        <section className="hero dark" id="top">
          <div className="wrap">
            <div className="hero-visual">
              <div className="prism bare anim smudge hero-prism" data-v="0" id="heroPrism" />
            </div>
            <div className="hero-copy">
              <span className="eyebrow">{"Welcome to Corazon"}</span>
              <h1 className="h1">
                <span className="ln">
                  <span>{"Find Your Dream"}</span>
                </span>
                <span className="ln">
                  <span>{"Home With Ease."}</span>
                </span>
              </h1>
              <p className="lead">
                {"Discover top listings, explore virtual tours, and connect with trusted agents in minutes."}
              </p>
              <div className="cta-row">
                <a className="btn btn-light btn-lg" href="#listings">
                  {"Browse Listing "}
                  <svg className="ic">
                    <use href="#i-ar" />
                  </svg>
                </a>
                {" "}
                <a className="btn btn-glass btn-lg" href="#guide">{"Learn More"}</a>
              </div>
              <div className="trust">
                <span className="avs" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <span>
                  {"Trusted by "}
                  <b className="count" data-to="25000" data-suffix="+" data-comma="1">{"25,000+"}</b>
                  {" homeowners"}
                </span>
              </div>
            </div>
            <div className="amen glass">
              <h2>
                {"Every home,"}
                <br />
                {"thoughtfully equipped"}
              </h2>
              <div className="am">
                <span className="am-ic">
                  <svg className="ic">
                    <use href="#i-pool" />
                  </svg>
                </span>
                <div>
                  <h3>{"Private Pool"}</h3>
                  <p>{"Enhance relaxation and exclusivity with your own water retreat."}</p>
                </div>
              </div>
              <div className="am">
                <span className="am-ic">
                  <svg className="ic">
                    <use href="#i-leaf" />
                  </svg>
                </span>
                <div>
                  <h3>{"Private Garden"}</h3>
                  <p>{"Provides greenery and a serene environment all year round."}</p>
                </div>
              </div>
              <div className="am">
                <span className="am-ic">
                  <svg className="ic">
                    <use href="#i-sun" />
                  </svg>
                </span>
                <div>
                  <h3>{"Spacious Balcony"}</h3>
                  <p>{"Offers great views and outdoor relaxation at golden hour."}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec light" id="listings">
          <div className="wrap">
            <div className="sec-head" data-reveal>
              <div className="head-l">
                <span className="eyebrow">{"Featured Listings"}</span>
                <h2 className="h2">
                  {"Homes curated for"}
                  <br />
                  {"the way you live"}
                </h2>
              </div>
              <div className="controls">
                <div className="tabs" role="tablist" aria-label="Property type" id="tabs">
                  <button role="tab" type="button" aria-selected="true" data-tab="apartment">{"Apartment"}</button>
                  {" "}
                  <button role="tab" type="button" aria-selected="false" data-tab="office" tabIndex={-1}>{"Office"}</button>
                  {" "}
                  <button role="tab" type="button" aria-selected="false" data-tab="warehouse" tabIndex={-1}>{"Warehouse"}</button>
                  {" "}
                  <span className="tab-ind" aria-hidden="true" />
                </div>
                <div className="arrows">
                  <button className="arw" type="button" id="listPrev" aria-label="Previous listings">
                    <svg className="ic">
                      <use href="#i-al" />
                    </svg>
                  </button>
                  {" "}
                  <button className="arw on" type="button" id="listNext" aria-label="Next listings">
                    <svg className="ic">
                      <use href="#i-ar" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel" id="listTrack" role="tabpanel" aria-live="polite" data-reveal />
            <div className="dots" id="listDots" />
            <button className="btn btn-ghost btn-lg see-all" type="button" id="seeAll">
              {"See All Listings "}
              <svg className="ic">
                <use href="#i-ar" />
              </svg>
            </button>
          </div>
        </section>
        <section className="sec white" id="guide">
          <div className="wrap">
            <div className="guide-head" data-reveal>
              <div className="head-l">
                <span className="eyebrow">{"How it works"}</span>
                <h2 className="h2 big">
                  {"User guide for"}
                  <br />
                  {"first timer"}
                </h2>
              </div>
              <div className="guide-r">
                <p>
                  {"New to buying or renting? Four simple steps take you from browsing to holding the keys, with no jargon and no stress."}
                </p>
                <a className="btn btn-dark" href="#listings">
                  {"Start Searching "}
                  <svg className="ic">
                    <use href="#i-search" />
                  </svg>
                </a>
              </div>
            </div>
            <ol className="timeline" id="timeline" data-stagger>
              <li className="step" tabIndex={0}>
                <div className="rail">
                  <span className="dot" />
                  <span className="line">
                    <i />
                  </span>
                </div>
                <div className="step-body">
                  <span className="s-ic">
                    <svg className="ic">
                      <use href="#i-search" />
                    </svg>
                  </span>
                  <div className="s-txt">
                    <span className="s-num">{"Step 01"}</span>
                    <h3>{"Search"}</h3>
                    <p>
                      {"Use smart filters to find properties that match your budget, location and lifestyle."}
                    </p>
                  </div>
                </div>
              </li>
              <li className="step" tabIndex={0}>
                <div className="rail">
                  <span className="dot" />
                  <span className="line">
                    <i />
                  </span>
                </div>
                <div className="step-body">
                  <span className="s-ic">
                    <svg className="ic">
                      <use href="#i-home" />
                    </svg>
                  </span>
                  <div className="s-txt">
                    <span className="s-num">{"Step 02"}</span>
                    <h3>{"Tour"}</h3>
                    <p>{"Explore immersive 3D tours or book an in-person visit in just a few taps."}</p>
                  </div>
                </div>
              </li>
              <li className="step" tabIndex={0}>
                <div className="rail">
                  <span className="dot" />
                  <span className="line">
                    <i />
                  </span>
                </div>
                <div className="step-body">
                  <span className="s-ic">
                    <svg className="ic">
                      <use href="#i-chat" />
                    </svg>
                  </span>
                  <div className="s-txt">
                    <span className="s-num">{"Step 03"}</span>
                    <h3>{"Connect"}</h3>
                    <p>{"Chat directly with verified agents and get answers within hours, not days."}</p>
                  </div>
                </div>
              </li>
              <li className="step" tabIndex={0}>
                <div className="rail">
                  <span className="dot" />
                  <span className="line">
                    <i />
                  </span>
                </div>
                <div className="step-body">
                  <span className="s-ic">
                    <svg className="ic">
                      <use href="#i-key" />
                    </svg>
                  </span>
                  <div className="s-txt">
                    <span className="s-num">{"Step 04"}</span>
                    <h3>{"Close"}</h3>
                    <p>{"Make an offer, sign securely online and get the keys to your new home."}</p>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section className="sec dark testi" id="reviews">
          <div className="wrap">
            <div className="center-head" data-reveal>
              <span className="eyebrow">{"Testimonials"}</span>
              <h2 className="h2">{"Satisfied Clients Speak"}</h2>
              <p className="lead">{"Real stories from people who found their place with Corazon."}</p>
            </div>
            <div className="testi-grid" data-stagger>
              <div className="stack" id="stack">
                <div className="photo p1">
                  <div className="prism light" data-v="1" />
                </div>
                <div className="photo p2">
                  <div className="prism anim" data-v="3" />
                </div>
                <div className="badge">
                  <strong>{"4.9"}</strong>
                  <div>
                    <div className="stars" aria-label="Rated 4.9 out of 5">
                      <svg className="ic">
                        <use href="#i-star" />
                      </svg>
                      <svg className="ic">
                        <use href="#i-star" />
                      </svg>
                      <svg className="ic">
                        <use href="#i-star" />
                      </svg>
                      <svg className="ic">
                        <use href="#i-star" />
                      </svg>
                      <svg className="ic">
                        <use href="#i-star" />
                      </svg>
                    </div>
                    <small>{"2,400+ reviews"}</small>
                  </div>
                </div>
              </div>
              <article className="quote glass" id="quote">
                <div className="qbody" aria-live="polite">
                  <div className="who">
                    <span className="av" />
                    <div>
                      <b id="qName">{"Bashir Abdullahi"}</b>
                      <span className="loc">
                        <svg className="ic">
                          <use href="#i-pin" />
                        </svg>
                        <span id="qLoc">{"Lagos, Nigeria"}</span>
                      </span>
                    </div>
                    <div className="stars" aria-label="5 out of 5 stars">
                      <svg className="ic">
                        <use href="#i-star" />
                      </svg>
                      <svg className="ic">
                        <use href="#i-star" />
                      </svg>
                      <svg className="ic">
                        <use href="#i-star" />
                      </svg>
                      <svg className="ic">
                        <use href="#i-star" />
                      </svg>
                      <svg className="ic">
                        <use href="#i-star" />
                      </svg>
                    </div>
                  </div>
                  <span className="qmark" aria-hidden="true">{"\u201c"}</span>
                  <p className="qtext" id="qText">
                    {"I wasted months searching until I found this platform. Within days, I found my perfect home, connected with an agent, and closed the deal fast."}
                  </p>
                </div>
                <div className="qfoot">
                  <div className="qnav">
                    <button className="arw" type="button" id="qPrev" aria-label="Previous review">
                      <svg className="ic">
                        <use href="#i-al" />
                      </svg>
                    </button>
                    {" "}
                    <button className="arw on" type="button" id="qNext" aria-label="Next review">
                      <svg className="ic">
                        <use href="#i-ar" />
                      </svg>
                    </button>
                    {" "}
                    <span className="qcount">
                      <span id="qIdx">{"01"}</span>
                      {" / "}
                      <span id="qTotal">{"05"}</span>
                    </span>
                  </div>
                  <button className="btn btn-light" type="button" id="qMore">
                    {"See More "}
                    <svg className="ic">
                      <use href="#i-ar" />
                    </svg>
                  </button>
                </div>
                <div className="qprog" aria-hidden="true">
                  <i id="qBar" />
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="sec white" id="story">
          <div className="wrap story-grid">
            <div className="stats" data-stagger>
              <div className="stat">
                <span className="stat-num count" data-to="10" data-suffix="+ Million">{"10+ Million"}</span>
                <p>{"Properties listed across our verified network."}</p>
              </div>
              <div className="stat">
                <span className="stat-num count" data-to="8" data-suffix="x More">{"8x More"}</span>
                <p>{"Faster closings than traditional agency workflows."}</p>
              </div>
              <div className="stat">
                <span className="stat-num count" data-to="1" data-suffix="+ Million">{"1+ Million"}</span>
                <p>{"Happy residents who found home with Corazon."}</p>
              </div>
            </div>
            <div className="story-vis" data-reveal>
              <div className="prism light anim" data-v="4" />
            </div>
            <div className="story" data-reveal>
              <span className="kicker">
                <svg className="ic">
                  <use href="#i-pin" />
                </svg>
                {"Abuja, Nigeria"}
              </span>
              <h3>{"The Transformation Of Real Estate."}</h3>
              <p>
                {"Abuja is going through a remarkable real estate transformation. Modern architecture, smart building systems and sustainable design are reshaping how the whole city lives, works and invests."}
              </p>
              <ul className="checks">
                <li>
                  <i>
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </i>
                  {"Verified listings & transparent pricing"}
                </li>
                <li>
                  <i>
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </i>
                  {"Smart-home ready developments"}
                </li>
                <li>
                  <i>
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </i>
                  {"Dedicated local agents in every district"}
                </li>
              </ul>
              <a className="btn btn-ghost" href="#journal">
                {"Our Story "}
                <svg className="ic diag">
                  <use href="#i-aur" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <section className="sec light" id="journal">
          <div className="wrap">
            <div className="sec-head" data-reveal>
              <div className="head-l">
                <span className="eyebrow">{"Blog"}</span>
                <h2 className="h2">
                  {"From the"}
                  <br />
                  {"Corazon Journal"}
                </h2>
              </div>
              <div className="arrows">
                <button className="arw" type="button" id="blogPrev" aria-label="Previous articles">
                  <svg className="ic">
                    <use href="#i-al" />
                  </svg>
                </button>
                {" "}
                <button className="arw on" type="button" id="blogNext" aria-label="Next articles">
                  <svg className="ic">
                    <use href="#i-ar" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="carousel" id="blogTrack" data-stagger>
              <article className="bcard">
                <a className="bmedia" href="#journal">
                  <div className="prism" data-v="0" />
                  <span className="tag">{"Market Insight"}</span>
                </a>
                <div className="bbody">
                  <time dateTime="2026-10-02">{"Oct 02, 2026 \u00b7 5 min read"}</time>
                  <h3>{"Abuja's luxury market in 2026: where prices are heading"}</h3>
                  <p>
                    {"Demand for gated estates keeps climbing. Here is what the data says for buyers this year."}
                  </p>
                  <a className="more" href="#journal">
                    {"Read article "}
                    <svg className="ic">
                      <use href="#i-ar" />
                    </svg>
                  </a>
                </div>
              </article>
              <article className="bcard">
                <a className="bmedia" href="#journal">
                  <div className="prism light" data-v="2" />
                  <span className="tag">{"Buying Guide"}</span>
                </a>
                <div className="bbody">
                  <time dateTime="2026-09-24">{"Sep 24, 2026 \u00b7 4 min read"}</time>
                  <h3>{"10 questions to ask before you sign a lease"}</h3>
                  <p>{"A practical checklist to avoid hidden fees and surprises on move-in day."}</p>
                  <a className="more" href="#journal">
                    {"Read article "}
                    <svg className="ic">
                      <use href="#i-ar" />
                    </svg>
                  </a>
                </div>
              </article>
              <article className="bcard">
                <a className="bmedia" href="#journal">
                  <div className="prism" data-v="3" />
                  <span className="tag">{"Design"}</span>
                </a>
                <div className="bbody">
                  <time dateTime="2026-09-15">{"Sep 15, 2026 \u00b7 6 min read"}</time>
                  <h3>{"How natural light changes the value of a home"}</h3>
                  <p>{"Architects share why orientation and glazing matter more than square metres."}</p>
                  <a className="more" href="#journal">
                    {"Read article "}
                    <svg className="ic">
                      <use href="#i-ar" />
                    </svg>
                  </a>
                </div>
              </article>
              <article className="bcard">
                <a className="bmedia" href="#journal">
                  <div className="prism light" data-v="4" />
                  <span className="tag">{"Investment"}</span>
                </a>
                <div className="bbody">
                  <time dateTime="2026-09-03">{"Sep 03, 2026 \u00b7 7 min read"}</time>
                  <h3>{"Warehouses are the quiet winners of the decade"}</h3>
                  <p>{"Logistics growth is turning industrial space into a top-performing asset class."}</p>
                  <a className="more" href="#journal">
                    {"Read article "}
                    <svg className="ic">
                      <use href="#i-ar" />
                    </svg>
                  </a>
                </div>
              </article>
              <article className="bcard">
                <a className="bmedia" href="#journal">
                  <div className="prism" data-v="1" />
                  <span className="tag">{"Neighbourhoods"}</span>
                </a>
                <div className="bbody">
                  <time dateTime="2026-08-27">{"Aug 27, 2026 \u00b7 5 min read"}</time>
                  <h3>{"Five Lagos districts families are moving to next"}</h3>
                  <p>{"Schools, commute times and green space, compared side by side."}</p>
                  <a className="more" href="#journal">
                    {"Read article "}
                    <svg className="ic">
                      <use href="#i-ar" />
                    </svg>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="sec dark services" id="services">
          <div className="wrap">
            <div className="center-head" data-reveal>
              <span className="eyebrow">{"Services"}</span>
              <h2 className="h2">{"Beyond the keys"}</h2>
              <p className="lead">
                {"Make your new place feel like home with our in-house design and renovation experts."}
              </p>
            </div>
            <div className="svc-grid" data-stagger>
              <article className="svc glass active">
                <div className="svc-top">
                  <span className="svc-ic">
                    <svg className="ic">
                      <use href="#i-sofa" />
                    </svg>
                  </span>
                  <span className="svc-num">{"01"}</span>
                </div>
                <div>
                  <h3>
                    {"Furniture"}
                    <br />
                    {"Design"}
                  </h3>
                  <p>
                    {"The design of furniture holds substantial influence over the aesthetics, ambiance and usability of every space you live in."}
                  </p>
                  <a className="more" href="#newsletter">
                    {"Learn more "}
                    <svg className="ic">
                      <use href="#i-aur" />
                    </svg>
                  </a>
                </div>
              </article>
              <article className="svc glass">
                <div className="svc-top">
                  <span className="svc-ic">
                    <svg className="ic">
                      <use href="#i-lamp" />
                    </svg>
                  </span>
                  <span className="svc-num">{"02"}</span>
                </div>
                <div>
                  <h3>
                    {"Interior"}
                    <br />
                    {"Details"}
                  </h3>
                  <p>
                    {"Interior detailing introduces dimension, tactile qualities and captivating visual elements that elevate a room."}
                  </p>
                  <a className="more" href="#newsletter">
                    {"Learn more "}
                    <svg className="ic">
                      <use href="#i-aur" />
                    </svg>
                  </a>
                </div>
              </article>
              <article className="svc glass">
                <div className="svc-top">
                  <span className="svc-ic">
                    <svg className="ic">
                      <use href="#i-hammer" />
                    </svg>
                  </span>
                  <span className="svc-num">{"03"}</span>
                </div>
                <div>
                  <h3>
                    {"Home"}
                    <br />
                    {"Revamping"}
                  </h3>
                  <p>
                    {"From layout changes to full renovations, we refresh your home to match the way you live today."}
                  </p>
                  <a className="more" href="#newsletter">
                    {"Learn more "}
                    <svg className="ic">
                      <use href="#i-aur" />
                    </svg>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="dark foot-sec" id="newsletter">
          <div className="wrap">
            <div className="cta-card" data-reveal>
              <div className="prism bare anim deco l" data-v="1" />
              <div className="prism bare anim deco r" data-v="3" />
              <span className="eyebrow">{"Newsletter"}</span>
              <h2 className="h2">
                {"Stay ahead of"}
                <br />
                {"the market"}
              </h2>
              <p className="lead">{"Get new listings, price drops and market insights before anyone else."}</p>
              <form className="sub" id="subForm" noValidate>
                <label className="sr" htmlFor="email">{"Email address"}</label>
                {" "}
                <svg className="ic">
                  <use href="#i-mail" />
                </svg>
                {" "}
                <input id="email" name="email" type="email" placeholder="Enter your email" autoComplete="email" required />
                {" "}
                <button className="btn btn-light btn-sm" type="submit" id="subBtn">{"Subscribe"}</button>
              </form>
              <p className="sub-note" id="subNote" aria-live="polite">{"No spam. Unsubscribe anytime."}</p>
            </div>
            <footer className="footer" id="footer">
              <div className="foot-top" data-reveal>
                <div className="brand">
                  <a className="logo" href="#top">
                    <span className="logo-mark" />
                    {"Corazon"}
                  </a>
                  <p>
                    {"Find your dream home with ease. Verified listings, virtual tours and trusted agents, all in one place."}
                  </p>
                  <div className="socials">
                    <a href="#footer" aria-label="Instagram">
                      <svg className="ic">
                        <use href="#i-ig" />
                      </svg>
                    </a>
                    {" "}
                    <a href="#footer" aria-label="X">
                      <svg className="ic">
                        <use href="#i-x" />
                      </svg>
                    </a>
                    {" "}
                    <a href="#footer" aria-label="LinkedIn">
                      <svg className="ic">
                        <use href="#i-li" />
                      </svg>
                    </a>
                    {" "}
                    <a href="#footer" aria-label="YouTube">
                      <svg className="ic">
                        <use href="#i-yt" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="fcols">
                  <div className="fcol">
                    <h4>{"Company"}</h4>
                    <a href="#story">{"About"}</a>
                    <a href="#footer">{"Careers"}</a>
                    <a href="#journal">{"Press"}</a>
                  </div>
                  <div className="fcol">
                    <h4>{"Explore"}</h4>
                    <a href="#listings">{"Listings"}</a>
                    <a href="#reviews">{"Agents"}</a>
                    <a href="#guide">{"3D Tours"}</a>
                  </div>
                  <div className="fcol">
                    <h4>{"Support"}</h4>
                    <a href="#guide">{"Help center"}</a>
                    <a href="#newsletter">{"Contact"}</a>
                    <a href="#footer">{"Privacy"}</a>
                  </div>
                </div>
              </div>
              <div className="foot-bot">
                <span>{"\u00a9 2026 Corazon. All rights reserved."}</span>
                <nav aria-label="Legal">
                  <a href="#footer">{"Terms"}</a>
                  <a href="#footer">{"Privacy"}</a>
                  <a href="#footer">{"Cookies"}</a>
                </nav>
              </div>
              <div className="wordmark" id="wordmark" aria-hidden="true">{"Corazon"}</div>
            </footer>
          </div>
        </section>
      </main>
      <dialog className="detail" id="detail" aria-labelledby="dTitle">
        <button className="d-close" type="button" id="dClose" aria-label="Close details">
          <svg className="ic">
            <use href="#i-x" />
          </svg>
        </button>
        <div className="d-grid">
          <div className="d-media" id="dMedia" />
          <div className="d-body">
            <h3 id="dTitle" />
            <p id="dDesc" />
            <ul className="meta" id="dMeta" />
            <div className="price">
              <small>{"Price"}</small>
              <strong id="dPrice" />
            </div>
            <div className="d-actions">
              <a className="btn btn-dark" href="#newsletter" id="dAgent">
                {"Talk to an Agent "}
                <svg className="ic">
                  <use href="#i-ar" />
                </svg>
              </a>
              {" "}
              <button className="btn btn-ghost" type="button" id="dBack">{"Keep browsing"}</button>
            </div>
          </div>
        </div>
      </dialog>
      <div className="toast" id="toast" role="status" aria-live="polite" />
    </>
  )
}
