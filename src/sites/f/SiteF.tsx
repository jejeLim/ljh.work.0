// SiteF: F.html 를 React로 변환한 페이지 (단일 파일, 컴포넌트 분리 없음)
import { useEffect, type CSSProperties } from 'react'
import { init } from './script.js'
import './site.scss'

export function SiteF() {
  // 원본 스크립트는 DOM을 직접 조립하므로 마운트 후 한 번만 실행한다
  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <symbol id="i-tel" viewBox="0 0 24 24">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
        </symbol>
        <symbol id="i-doc" viewBox="0 0 24 24">
          <path d="M6 3h9l4 4v14H6z" />
          <path d="M14 3v5h5M9 13h7M9 17h5" />
        </symbol>
      </svg>

      <header className="hd" id="hd">
        <div className="wrap">
          <a className="logo" href="#top" aria-label="MOVA 오토리스 홈">
            <i>M</i>
            <b>MOVA</b>
            <span>수입차 리스 · 장기렌트</span>
          </a>
          <nav className="gnb" id="gnb" aria-label="주요 메뉴">
            <a href="#lease">자동차리스란?</a>
            <a href="#trims">신차가격표</a>
            <a href="#price">월대여료</a>
            <a href="#quote">견적신청</a>
            <a className="tel" href="tel:15440000">
              <svg>
                <use href="#i-tel" />
              </svg>
              1544-0000
            </a>
            <span className="ind" id="ind" />
          </nav>
          <button className="burger" id="burger" type="button" aria-label="메뉴 열기" aria-expanded="false" aria-controls="drawer">
            <span />
          </button>
        </div>
      </header>
      <div className="drawer" id="drawer">
        <nav aria-label="모바일 메뉴">
          <button className="x" id="dClose" type="button">
            닫기 ✕
          </button>
          <a href="#lease">자동차리스란?</a>
          <a href="#trims">신차가격표</a>
          <a href="#price">월대여료</a>
          <a href="#quote">견적신청</a>
          <a href="tel:15440000">☎ 1544-0000</a>
        </nav>
      </div>

      <main id="top">
        <section className="hero" aria-label="소개">
          <div className="ph ph-hero" role="img" aria-label="도심 광장에 나란히 선 프리미엄 SUV 세 대" />
          <div className="hero-c">
            <h1>
              <span className="ln">
                <span className="shine">2026 프리미엄 SUV</span>
              </span>
              <span className="ln">
                <span className="shine">오토리스 · 장기렌트</span>
              </span>
            </h1>
            <p>
              수입차 리스 · 장기렌트 전문기업
              <br />
              차량 가격비교부터 맞춤견적까지 한 번에
            </p>
            <div className="ctas">
              <a className="btn btn-ind" href="#quote">
                맞춤견적신청
              </a>
              <a className="btn btn-ol" href="#trims">
                신차가격표
              </a>
            </div>
          </div>
          <a className="notch" href="#feat" aria-label="아래로 이동">
            <svg className="shape" viewBox="0 0 200 34" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 34C40 34 50 0 100 0S160 34 200 34Z" fill="#fff" />
            </svg>
            <svg className="chev" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
        </section>

        <section className="feat" id="feat">
          <ul className="wrap" id="featList">
            <li data-up="">
              <div className="ic">
                <svg viewBox="0 0 40 40">
                  <rect x="7" y="6" width="20" height="26" rx="2" />
                  <path d="M11 13h12M11 18h8M11 23h6" />
                  <circle cx="27" cy="25" r="6" />
                  <path d="M31.5 29.5L35 33" />
                </svg>
              </div>
              <h3>고객 누구나 무료 상담</h3>
              <p>차량 비교부터 계약 조건까지 1:1 상담은 무료예요. 부담 없이 문의하세요.</p>
            </li>
            <li data-up="" style={{ '--d': '.12s' } as CSSProperties}>
              <div className="ic">
                <svg viewBox="0 0 40 40">
                  <path d="M8 26v-5l3-7h18l3 7v5z" />
                  <circle cx="13" cy="27" r="3" />
                  <circle cx="27" cy="27" r="3" />
                  <path d="M8 21h24" />
                  <circle cx="20" cy="8" r="4" />
                  <path d="M18.5 8h3M20 6.5v3" />
                </svg>
              </div>
              <h3>수입차 리스 &amp; 렌트 전문기업</h3>
              <p>합리적인 금융사 조건을 직접 비교해 가장 유리한 견적을 찾아드립니다.</p>
            </li>
            <li data-up="" style={{ '--d': '.24s' } as CSSProperties}>
              <div className="ic">
                <svg viewBox="0 0 40 40">
                  <path d="M6 28h6l8 4 13-7a2 2 0 0 0-2-3l-8 3" />
                  <path d="M12 28v-6h7l4 3h-7" />
                  <circle cx="24" cy="12" r="6" />
                  <path d="M21.5 12l2 2 3.5-4" />
                </svg>
              </div>
              <h3>MOVA의 약속</h3>
              <p>계약 후에도 정비 · 보험 · 반납까지 끝까지 책임지고 관리합니다.</p>
            </li>
          </ul>
        </section>

        <section className="lease" id="lease">
          <div className="txt">
            <h2 data-up="">자동차 리스란?</h2>
            <p data-up="">
              개인 · 법인이 원하는 차량을 리스사가 대신 구매하여 일정 기간 동안 대여해 주고, <span className="mk">매월 일정 금액의 대여료</span>를 받는 자동차 금융 상품입니다.
            </p>
            <p data-up="">
              ‘허 · 하 · 호’ 번호판이 아닌{' '}
              <span className="mk" style={{ '--d': '.7s' } as CSSProperties}>
                일반 번호판
              </span>
              을 사용하며, 법인 · 개인사업자는 리스료 전액을 비용처리해{' '}
              <span className="mk" style={{ '--d': '1.1s' } as CSSProperties}>
                세금 절감 효과
              </span>
              를 누릴 수 있습니다.
            </p>
          </div>
          <div className="pic">
            <div className="ph ph-concrete" role="img" aria-label="콘크리트 건축물 앞의 다크 그레이 SUV" />
          </div>
        </section>

        <section className="stats" id="stats" aria-label="MOVA 실적">
          <canvas id="confetti" aria-hidden="true" />
          <ul className="wrap">
            <li>
              <b data-n="13472">0</b>
              <em>건</em>
              <p>누적 견적상담 진행</p>
            </li>
            <li>
              <b data-n="2814">0</b>
              <em>대</em>
              <p>차량 계약 출고 현황</p>
            </li>
            <li>
              <b data-n="95">0</b>
              <em>%</em>
              <p>고객 재계약률</p>
            </li>
          </ul>
        </section>

        <section className="trims" id="trims">
          <div className="wrap">
            <div className="sec-h" data-up="">
              <small>신차가격표</small>
              <h2>2026 그랜드 SUV 7인승</h2>
            </div>
            <div className="trim-g">
              <article className="trim" data-up="" data-def="grey">
                <div className="stage" role="img" aria-label="AWD 프레스티지 차량 이미지" />
                <h3>AWD 프레스티지</h3>
                <p>강렬하면서도 세련된 디자인</p>
                <div className="sw" role="group" aria-label="색상 선택" />
                <span className="sw-name" />
              </article>
              <article className="trim" data-up="" style={{ '--d': '.12s' } as CSSProperties} data-def="white">
                <div className="stage" role="img" aria-label="AWD 시그니처 차량 이미지" />
                <h3>AWD 시그니처</h3>
                <p>스칸디 감성의 프리미엄 SUV</p>
                <div className="sw" role="group" aria-label="색상 선택" />
                <span className="sw-name" />
              </article>
            </div>
          </div>
        </section>

        <section className="price" id="price">
          <div className="wrap">
            <div className="sec-h" data-up="">
              <small>그랜드 SUV 7인승</small>
              <h2>오토리스 · 장기렌트 가격표</h2>
            </div>
            <div className="calc" data-up="">
              <span className="lb">계약기간</span>
              <div className="seg" id="term" role="group" aria-label="계약기간">
                <button type="button" data-v="36" aria-pressed="false">
                  36개월
                </button>
                <button type="button" data-v="48" aria-pressed="true">
                  48개월
                </button>
                <button type="button" data-v="60" aria-pressed="false">
                  60개월
                </button>
                <i />
              </div>
              <label className="rng" htmlFor="down">
                선수금 <input id="down" type="range" min="0" max="40" step="10" defaultValue="20" />
                <output id="downO" htmlFor="down">
                  20%
                </output>
              </label>
              <span className="lb">연 주행</span>
              <div className="seg" id="km" role="group" aria-label="연간 주행거리">
                <button type="button" data-v="1" aria-pressed="false">
                  1만km
                </button>
                <button type="button" data-v="2" aria-pressed="true">
                  2만km
                </button>
                <button type="button" data-v="3" aria-pressed="false">
                  3만km
                </button>
                <i />
              </div>
            </div>
            <div className="cards">
              <article className="pc best" data-up="">
                <h3>그랜드 SUV 리스</h3>
                <div className="amt">
                  월 <span className="odo" id="oLease" aria-live="polite" /> 원
                </div>
                <div className="cond" id="cLease" />
                <p>차량 반납 · 인수 · 재리스를 자유롭게 선택하고, 사업자는 비용처리로 절세 혜택을 받을 수 있어요.</p>
                <a className="go" href="#quote" data-prod="오토리스">
                  오토리스 견적신청
                </a>
              </article>
              <article className="pc" data-up="" style={{ '--d': '.1s' } as CSSProperties}>
                <h3>그랜드 SUV 장기렌트</h3>
                <div className="amt">
                  월 <span className="odo" id="oRent" aria-live="polite" /> 원
                </div>
                <div className="cond" id="cRent" />
                <p>보험 · 자동차세 · 정비가 모두 포함된 올인원 상품. 사고 시 보험료 할증 걱정이 없어요.</p>
                <a className="go" href="#quote" data-prod="장기렌트">
                  장기렌트 견적신청
                </a>
              </article>
              <article className="pc" data-up="" style={{ '--d': '.2s' } as CSSProperties}>
                <h3>신차할부</h3>
                <div className="amt">
                  연{' '}
                  <span className="odo">
                    <span style={{ height: '1.1em' }}>4~7</span>
                  </span>{' '}
                  %
                </div>
                <div className="cond">신차 할부는 별도 문의 바랍니다.</div>
                <p>합리적인 금리로 내 차를 소유하는 방식. 은행 · 캐피탈 조건을 비교해 드려요.</p>
                <a className="go" href="#quote" data-prod="신차할부">
                  맞춤견적신청
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="quote" id="quote">
          <div className="ph ph-night" aria-hidden="true" />
          <div className="wrap">
            <div className="q-info" data-up="">
              <small>수입차 리스 &amp; 렌트</small>
              <h2>맞춤견적신청</h2>
              <hr />
              <a className="q-tel" href="tel:15440000">
                <i>
                  <svg>
                    <use href="#i-tel" />
                  </svg>
                </i>
                1544-0000
              </a>
              <p>
                평일 오전 9:00 – 오후 7:00
                <br />
                주말 오전 10:00 – 오후 5:00
              </p>
              <div className="meter">
                <span>
                  견적 완성도 <b id="mPct">0%</b>
                </span>
                <i id="meter" />
              </div>
            </div>
            <form className="q" id="qForm" noValidate data-up="" style={{ '--d': '.1s' } as CSSProperties}>
              <div className="sels">
                <div className="fld">
                  <label className="sr" htmlFor="sCar">
                    차량선택
                  </label>
                  <select id="sCar" required defaultValue="">
                    <option value="" disabled>
                      차량선택
                    </option>
                    <option>AWD 프레스티지</option>
                    <option>AWD 시그니처</option>
                  </select>
                </div>
                <div className="fld">
                  <label className="sr" htmlFor="sProd">
                    상품선택
                  </label>
                  <select id="sProd" required defaultValue="">
                    <option value="" disabled>
                      상품선택
                    </option>
                    <option>오토리스</option>
                    <option>장기렌트</option>
                    <option>신차할부</option>
                  </select>
                </div>
                <div className="fld">
                  <label className="sr" htmlFor="sCus">
                    고객구분
                  </label>
                  <select id="sCus" required defaultValue="">
                    <option value="" disabled>
                      고객구분
                    </option>
                    <option>개인</option>
                    <option>개인사업자</option>
                    <option>법인</option>
                  </select>
                </div>
                <div className="fld">
                  <label className="sr" htmlFor="sTerm">
                    이용기간
                  </label>
                  <select id="sTerm" required defaultValue="">
                    <option value="" disabled>
                      이용기간
                    </option>
                    <option>36개월</option>
                    <option>48개월</option>
                    <option>60개월</option>
                  </select>
                </div>
                <div className="fld">
                  <label className="sr" htmlFor="sDep">
                    보증금
                  </label>
                  <select id="sDep" required defaultValue="">
                    <option value="" disabled>
                      보증금
                    </option>
                    <option>0%</option>
                    <option>10%</option>
                    <option>20%</option>
                    <option>30%</option>
                  </select>
                </div>
              </div>
              <div className="fld">
                <input id="fName" type="text" placeholder=" " autoComplete="name" required />
                <label htmlFor="fName">신청인</label>
              </div>
              <div className="fld">
                <input id="fTel" type="tel" inputMode="numeric" placeholder=" " autoComplete="tel" maxLength={13} required />
                <label htmlFor="fTel">연락처</label>
              </div>
              <div className="fld">
                <textarea id="fMemo" placeholder=" " />
                <label htmlFor="fMemo">세부등급, 옵션, 색상 및 기타 문의사항</label>
              </div>
              <label className="agree" id="agreeL">
                <input type="checkbox" id="fAgree" />
                개인정보 취급방침에 동의합니다.
              </label>
              <p className="q-msg" id="qMsg" aria-live="polite" />
              <button className="btn btn-ind" type="submit">
                견적신청하기
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="ft">
        <div className="wrap">
          <p>MOVA 오토리스 | 대표 홍길동 | 사업자등록번호 000-00-00000 | 서울 강남구 테헤란로 000, 0층</p>
          <p>고객센터 1544-0000 | help@mova-lease.kr | © 2026 MOVA AUTO LEASE. All Rights Reserved.</p>
        </div>
      </footer>

      <div className="mbar" id="mbar">
        <a href="tel:15440000">
          <svg>
            <use href="#i-tel" />
          </svg>
          전화상담
        </a>
        <a href="#quote">
          <svg>
            <use href="#i-doc" />
          </svg>
          맞춤견적신청
        </a>
      </div>

      <button className="top" id="toTop" type="button" aria-label="맨 위로 이동">
        <span className="road" aria-hidden="true" />
        <svg className="carI" viewBox="0 0 22 30" aria-hidden="true">
          <rect x="2" y="3" width="18" height="25" rx="6" />
          <rect className="glass" x="5" y="8" width="12" height="5" rx="2" />
          <rect className="glass" x="5" y="20" width="12" height="3" rx="1.5" />
          <rect className="lamp" x="4" y="3.5" width="4" height="2" rx="1" />
          <rect className="lamp" x="14" y="3.5" width="4" height="2" rx="1" />
        </svg>
        <small>TOP</small>
      </button>

      <div className="modal" id="modal" role="dialog" aria-modal="true" aria-labelledby="mT">
        <div className="box">
          <svg viewBox="0 0 72 72" aria-hidden="true">
            <circle cx="36" cy="36" r="32" />
            <path d="M23 37l9 9 18-19" />
          </svg>
          <h3 id="mT">견적 신청이 완료됐어요</h3>
          <p id="mP">담당 상담사가 영업시간 내에 연락드릴게요.</p>
          <button className="ok" id="mOk" type="button">
            확인
          </button>
        </div>
      </div>
    </>
  )
}
