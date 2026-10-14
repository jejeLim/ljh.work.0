// SiteG: G.html 를 React로 변환한 페이지 (단일 파일, 컴포넌트 분리 없음)
import { useEffect, type CSSProperties } from 'react'
import { init } from './script.js'
import './site.scss'

export function SiteG() {
  // 원본 스크립트는 DOM을 직접 조립하므로 마운트 후 한 번만 실행한다
  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <symbol id="ar" viewBox="0 0 24 24">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </symbol>
        <symbol id="al" viewBox="0 0 24 24">
          <path d="M19 12H5M11 6l-6 6 6 6" />
        </symbol>
        <symbol id="star" viewBox="0 0 24 24">
          <path d="M12 2.5l2.9 6 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.5l1.3-6.6L2.5 9.3l6.6-.8z" />
        </symbol>
        <symbol id="up" viewBox="0 0 24 24">
          <path d="M12 19V5M6 11l6-6 6 6" />
        </symbol>
      </svg>

      <header className="hd" id="hd">
        <div className="hd-in">
          <a className="logo" href="#top" aria-label="LUMEN MEDIA 홈">
            <i>L</i>LUMEN <em>media</em>
          </a>
          <nav className="gnb" aria-label="주요 메뉴">
            <a href="#process">회사소개</a>
            <a href="#services">서비스</a>
            <a href="#reel">포트폴리오</a>
            <a href="#insights">인사이트</a>
          </nav>
          <div className="hd-r">
            <span className="lang">KO</span>
            <a className="btn" href="#contact">
              프로젝트 문의
            </a>
            <button className="burger" id="burger" type="button" aria-label="메뉴 열기" aria-expanded="false" aria-controls="sheet">
              <span />
            </button>
          </div>
        </div>
      </header>
      <div className="sheet" id="sheet">
        <nav aria-label="모바일 메뉴">
          <button className="x" id="sClose" type="button">
            닫기 ✕
          </button>
          <a href="#process">회사소개</a>
          <a href="#services">서비스</a>
          <a href="#reel">포트폴리오</a>
          <a href="#insights">인사이트</a>
          <a href="#contact">프로젝트 문의 →</a>
        </nav>
      </div>

      <main id="top">
        <section className="hero" aria-labelledby="h1">
          <div className="blobs" id="blobs" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="wrap">
            <h1 id="h1">
              브랜드를 빛내는
              <br />
              <span className="flip" id="flip" aria-hidden="true">
                <span className="on">영상</span>
                <span>브랜딩</span>
                <span>콘텐츠</span>
                <span>캠페인</span>
              </span>
              <span className="sr">영상 · 브랜딩 · 콘텐츠 · 캠페인</span> 파트너
            </h1>
            <p className="sub">기획부터 촬영, 디자인, 마케팅까지. 루멘 미디어는 브랜드의 이야기를 가장 빛나는 방식으로 전합니다.</p>
            <div className="cta">
              <a className="btn" href="#contact">
                프로젝트 시작하기{' '}
                <svg>
                  <use href="#ar" />
                </svg>
              </a>
            </div>
          </div>
          <div className="reel" id="reel">
            <div className="ph ph-wave" role="img" aria-label="블루와 바이올렛 빛의 리본이 흐르는 키 비주얼" />
            <div className="slides" id="slides">
              <div className="slide on">
                <h2>브랜드 필름 &amp; 디지털 캠페인</h2>
                <p>2026 SHOWREEL — 120개 브랜드와 함께한 이야기</p>
                <button className="play" type="button" data-open="">
                  <b>
                    <svg viewBox="0 0 12 12">
                      <path d="M2 1l9 5-9 5z" />
                    </svg>
                  </b>
                  쇼릴 보기
                </button>
              </div>
              <div className="slide">
                <h2>숏폼 1,200편, 누적 조회 3억 회</h2>
                <p>틱톡 · 릴스 · 쇼츠 채널을 한 번에 운영합니다</p>
                <button className="play" type="button" data-open="">
                  <b>
                    <svg viewBox="0 0 12 12">
                      <path d="M2 1l9 5-9 5z" />
                    </svg>
                  </b>
                  숏폼 모아보기
                </button>
              </div>
              <div className="slide">
                <h2>기획부터 성과 리포트까지</h2>
                <p>평균 캠페인 ROAS 420% · 재계약률 92%</p>
                <button className="play" type="button" data-open="">
                  <b>
                    <svg viewBox="0 0 12 12">
                      <path d="M2 1l9 5-9 5z" />
                    </svg>
                  </b>
                  케이스 보기
                </button>
              </div>
            </div>
          </div>
          <div className="pdots" id="pdots" role="tablist" aria-label="쇼릴 슬라이드" />
        </section>

        <section className="process" id="process">
          <div className="wrap c">
            <span className="lbl" data-rv="">
              작업 프로세스
            </span>
            <h2 className="h2" data-rv="">
              3단계로 완성하는 작업 방식
            </h2>
            <p className="sub" data-rv="">
              복잡한 제작 과정을 투명하게. 모든 단계에서 함께 보고, 함께 결정합니다.
            </p>
            <div className="steps" id="steps">
              <div className="track" aria-hidden="true">
                <i />
              </div>
              <div className="step" style={{ '--c': '#27C27A' } as CSSProperties}>
                <div className="ico">
                  <svg viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="6" />
                    <path d="M20 20l-4.5-4.5" />
                  </svg>
                </div>
                <h3>발견과 기획</h3>
                <p>브랜드와 고객을 깊이 이해하고, 목표에 맞는 메시지와 전략을 세웁니다.</p>
              </div>
              <div className="step" style={{ '--c': '#1F5BFF' } as CSSProperties}>
                <div className="ico">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 20l4-1 11-11-3-3L5 16z" />
                    <path d="M14 6l3 3" />
                  </svg>
                </div>
                <h3>제작과 디자인</h3>
                <p>촬영 · 편집 · 디자인을 한 팀에서 진행해 일관된 결과물을 만듭니다.</p>
              </div>
              <div className="step" style={{ '--c': '#D45CF2' } as CSSProperties}>
                <div className="ico">
                  <svg viewBox="0 0 24 24">
                    <path d="M5 19c4-1 6-4 7-8l3-6 4 4-6 3c-4 1-7 3-8 7z" />
                    <path d="M9 15l-2 4" />
                  </svg>
                </div>
                <h3>테스트와 런칭</h3>
                <p>채널별 반응을 측정하고 개선하며 캠페인을 성공적으로 런칭합니다.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="band" id="contact">
          <h2 data-rv="">
            당신의 브랜드를 위한
            <br />
            <span className="dec" id="dec" data-text="가장 좋은 이야기">
              가장 좋은 이야기
            </span>
            를 함께 만듭니다.
          </h2>
          <p className="sub" data-rv="">
            작은 아이디어부터 전사 캠페인까지, 첫 미팅은 언제나 무료입니다.
          </p>
          <a className="btn" href="mailto:hello@lumen-media.kr" data-rv="">
            무료 상담 받기{' '}
            <svg>
              <use href="#ar" />
            </svg>
          </a>
        </section>

        <section className="services" id="services">
          <div className="wrap c">
            <span className="lbl" data-rv="">
              서비스
            </span>
            <h2 className="h2" data-rv="">
              우리가 하는 일
            </h2>
            <p className="sub" data-rv="">
              하나의 팀이 기획부터 성과 측정까지 책임집니다.
            </p>
          </div>
          <div className="svc" id="svc">
            <div className="svc-img" data-rv="">
              <div className="ph ph-studio on" data-i="0" role="img" aria-label="영상 촬영 스튜디오" />
              <div className="ph ph-objects" data-i="1" role="img" aria-label="잡지와 머그, 헤드폰 3D 오브젝트" />
              <div className="ph ph-torus" data-i="2" role="img" aria-label="오렌지 링 3D 오브젝트" />
            </div>
            <div className="svc-l" data-rv="">
              <h3>
                브랜드를 위해 무엇이든
                <br />
                <span className="blue">함께 만들어 갑니다.</span>
              </h3>
              <p className="sub">필요한 것만 골라도, 처음부터 끝까지 맡겨도 좋아요.</p>
              <div className="tabs" role="tablist" aria-label="서비스">
                <button className="tab on" type="button" role="tab" aria-selected="true">
                  <span className="bar2">
                    <i />
                  </span>
                  <div>
                    <b>영상 제작</b>
                    <span className="ds">
                      <em>브랜드 필름 · 광고 · 숏폼까지 기획, 촬영, 편집을 원스톱으로 진행합니다.</em>
                    </span>
                  </div>
                </button>
                <button className="tab" type="button" role="tab" aria-selected="false">
                  <span className="bar2">
                    <i />
                  </span>
                  <div>
                    <b>브랜드 디자인</b>
                    <span className="ds">
                      <em>로고와 아이덴티티, 패키지와 굿즈까지 일관된 브랜드 경험을 설계합니다.</em>
                    </span>
                  </div>
                </button>
                <button className="tab" type="button" role="tab" aria-selected="false">
                  <span className="bar2">
                    <i />
                  </span>
                  <div>
                    <b>디지털 마케팅</b>
                    <span className="ds">
                      <em>SNS 운영과 퍼포먼스 광고로 콘텐츠가 실제 성과로 이어지게 합니다.</em>
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="insights" id="insights">
          <div className="wrap">
            <div className="c">
              <span className="lbl" data-rv="">
                인사이트
              </span>
              <h2 className="h2" data-rv="">
                배우고, 기록하고, 나눕니다.
              </h2>
              <p className="sub" data-rv="">
                현장에서 얻은 노하우와 업계 트렌드를 정리해 공유합니다.
              </p>
            </div>
            <div className="chips" id="chips" role="group" aria-label="카테고리 필터">
              <button type="button" aria-pressed="true" data-f="all">
                전체
              </button>
              <button type="button" aria-pressed="false" data-f="brand">
                브랜딩
              </button>
              <button type="button" aria-pressed="false" data-f="video">
                영상
              </button>
              <button type="button" aria-pressed="false" data-f="mkt">
                마케팅
              </button>
              <button type="button" aria-pressed="false" data-f="trend">
                트렌드
              </button>
            </div>
            <div className="cards" id="cards">
              <article className="card" data-c="video trend">
                <div className="im">
                  <div className="ph ph-podcast" role="img" aria-label="팟캐스트 녹음 스튜디오" />
                </div>
                <div className="b">
                  <small>영상</small>
                  <h3>브랜드 팟캐스트, 시작 전에 알아야 할 5가지</h3>
                  <a href="#insights">자세히 보기</a>
                </div>
              </article>
              <article className="card" data-c="brand trend">
                <div className="im">
                  <div className="ph ph-sphere" role="img" aria-label="라벤더 그라데이션 구" />
                </div>
                <div className="b">
                  <small>브랜딩</small>
                  <h3>2026 브랜드 컬러 트렌드: 부드러운 그라데이션</h3>
                  <a href="#insights">자세히 보기</a>
                </div>
              </article>
              <article className="card" data-c="video">
                <div className="im">
                  <div className="ph ph-studio" role="img" aria-label="촬영 현장" />
                </div>
                <div className="b">
                  <small>영상</small>
                  <h3>소규모 촬영팀으로 광고 퀄리티 내는 법</h3>
                  <a href="#insights">자세히 보기</a>
                </div>
              </article>
              <article className="card" data-c="mkt">
                <div className="im">
                  <div className="ph ph-torus" role="img" aria-label="오렌지 링 오브젝트" />
                </div>
                <div className="b">
                  <small>마케팅</small>
                  <h3>숏폼 시대의 퍼포먼스 마케팅 전략</h3>
                  <a href="#insights">자세히 보기</a>
                </div>
              </article>
            </div>
            <p className="empty" id="empty">
              해당 카테고리의 글을 준비하고 있어요.
            </p>
          </div>
        </section>

        <section className="reviews" aria-labelledby="rvT">
          <div className="wrap c">
            <h2 className="h2" id="rvT" data-rv="">
              만족을 전해 주신
              <br />
              고객사의 이야기
            </h2>
          </div>
          <div className="wrap">
            <div className="deck" id="deck">
              <article className="rv">
                <div className="ph ph-p1" role="img" aria-label="김도현 이사" />
                <b>김도현</b>
                <small>오렌지랩 마케팅 이사</small>
                <p>“브랜드 필름 하나로 끝나는 게 아니라, 숏폼과 광고 소재까지 한 번에 이어지는 구조를 만들어 줬어요. 론칭 첫 달 문의가 두 배 가까이 늘었습니다.”</p>
                <div className="stars" aria-label="별점 5점" />
              </article>
              <article className="rv">
                <div className="ph ph-p2" role="img" aria-label="이서연 팀장" />
                <b>이서연</b>
                <small>모아뷰티 브랜드팀 팀장</small>
                <p>“리브랜딩 과정에서 우리가 놓친 고객의 언어를 정확히 짚어 줬어요. 새 패키지와 영상이 나온 뒤 재구매율이 눈에 띄게 올랐습니다.”</p>
                <div className="stars" aria-label="별점 5점" />
              </article>
              <article className="rv">
                <div className="ph ph-p3" role="img" aria-label="박준영 대표" />
                <b>박준영</b>
                <small>스텝업 스튜디오 대표</small>
                <p>“스타트업이라 예산이 빠듯했는데, 꼭 필요한 것부터 단계적으로 제안해 줘서 믿고 맡길 수 있었어요. 소통이 정말 빠릅니다.”</p>
                <div className="stars" aria-label="별점 5점" />
              </article>
            </div>
            <div className="deck-nav">
              <button type="button" id="dPrev" aria-label="이전 후기">
                <svg>
                  <use href="#al" />
                </svg>
              </button>
              <span id="dCnt">1 / 3</span>
              <button type="button" id="dNext" aria-label="다음 후기">
                <svg>
                  <use href="#ar" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="ft" id="ft">
        <div className="wrap">
          <a className="big" href="mailto:hello@lumen-media.kr">
            Let’s create
            <br />
            together.
          </a>
          <div className="ft-row">
            <nav aria-label="푸터 메뉴">
              <a href="#process">회사소개</a>
              <a href="#services">서비스</a>
              <a href="#reel">포트폴리오</a>
              <a href="#insights">인사이트</a>
              <a href="#contact">문의하기</a>
            </nav>
            <a className="mail" href="mailto:hello@lumen-media.kr">
              hello@lumen-media.kr
            </a>
          </div>
          <small>© 2026 LUMEN MEDIA. All rights reserved. · 서울 성동구 성수이로 00, 4층 · 02-000-0000</small>
        </div>
      </footer>

      <button className="top" id="toTop" type="button" aria-label="맨 위로 이동">
        <span className="water" id="water" aria-hidden="true">
          <svg viewBox="0 0 240 20" preserveAspectRatio="none">
            <path d="M0 10 Q15 0 30 10 T60 10 T90 10 T120 10 T150 10 T180 10 T210 10 T240 10 V20 H0z" fill="#1F5BFF" />
          </svg>
          <svg viewBox="0 0 240 20" preserveAspectRatio="none">
            <path d="M0 10 Q15 20 30 10 T60 10 T90 10 T120 10 T150 10 T180 10 T210 10 T240 10 V20 H0z" fill="#1F5BFF" />
          </svg>
        </span>
        <span className="lab">
          <svg>
            <use href="#up" />
          </svg>
          <small>TOP</small>
        </span>
      </button>

      <div className="player" id="player" role="dialog" aria-modal="true" aria-label="쇼릴 재생">
        <button className="close" id="pClose" type="button">
          닫기 ✕
        </button>
        <div className="screen" id="screen">
          <div className="ph ph-wave" aria-hidden="true" />
          <span className="cap">LUMEN SHOWREEL 2026</span>
          <span className="eq" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <div className="ctrl">
            <button type="button" id="pToggle" aria-label="일시정지">
              <svg viewBox="0 0 16 16" id="pIco">
                <path d="M4 2h3v12H4zM9 2h3v12H9z" />
              </svg>
            </button>
            <span id="pTime">0:00</span>
            <div className="bar" id="pBar">
              <i id="pFill" />
            </div>
            <span>1:30</span>
          </div>
        </div>
      </div>
    </>
  )
}
