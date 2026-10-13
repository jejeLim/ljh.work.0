// SiteC: 원본 HTML의 <script>. React 마운트 직후 init()으로 실행한다.
/* eslint-disable */
export function init() {
(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const toastEl = $('#toast'); let tT;
  const toast = m => { toastEl.textContent = m; toastEl.classList.add('show'); clearTimeout(tT); tT = setTimeout(() => toastEl.classList.remove('show'), 2600); };

  /* reveal */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -10% 0px' });
  $$('[data-st]').forEach(el => [...el.children].forEach((c, i) => c.style.setProperty('--d', i * 100 + 'ms')));
  $$('[data-rv],[data-st],.vline,#stats,#map').forEach(el => io.observe(el));

  /* header */
  const toTop = $('#toTop'), toTopBar = $('#toTopBar');
  toTop.addEventListener('click', () => { scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); $('.logo').focus({ preventScroll: true }); });
  const hd = $('#hd'); let lastY = scrollY, tick = false, menuOpen = false;
  function onScroll() {
    const y = scrollY;
    hd.classList.toggle('solid', y > 60);
    if (y > 500 && y > lastY + 4 && !menuOpen) hd.classList.add('hide'); else if (y < lastY - 4 || y < 500) hd.classList.remove('hide');
    lastY = y;
    $$('[data-par]').forEach(el => { const r = el.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return; const p = (r.top + r.height / 2 - innerHeight / 2) / innerHeight; el.firstElementChild.style.setProperty('--py', (p * -36).toFixed(1) + 'px'); });
    const h = document.documentElement.scrollHeight - innerHeight, pr = h > 0 ? y / h : 0;
    toTop.classList.toggle('show', y > 600);
    toTopBar.style.strokeDashoffset = (157 * (1 - pr)).toFixed(1);
    tick = false;
  }
  addEventListener('scroll', () => { if (!tick) { requestAnimationFrame(onScroll); tick = true; } }, { passive: true });
  onScroll();
  const navA = $$('.nav a');
  const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) navA.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id)); }), { rootMargin: '-45% 0px -50% 0px' });
  ['rooms', 'gallery', 'price', 'steps', 'reviews', 'contact'].forEach(id => spy.observe(document.getElementById(id)));

  /* mobile menu */
  const mm = $('#mmenu'), mb = $('#menuBtn');
  const openM = () => { mm.hidden = false; void mm.offsetWidth; mm.classList.add('open'); menuOpen = true; document.body.style.overflow = 'hidden'; mb.setAttribute('aria-expanded', 'true'); $('#menuClose').focus(); };
  const closeM = () => { mm.classList.remove('open'); menuOpen = false; document.body.style.overflow = ''; mb.setAttribute('aria-expanded', 'false'); setTimeout(() => { if (!menuOpen) mm.hidden = true; }, 360); };
  mb.addEventListener('click', openM); $('#menuClose').addEventListener('click', closeM);
  $$('a', mm).forEach(a => a.addEventListener('click', closeM));
  addEventListener('keydown', e => { if (e.key === 'Escape' && menuOpen) { closeM(); mb.focus(); } });

  /* gallery coverflow */
  const G = [['room', '솔 객실 · 침실'], ['cabin', '오두막 외관 · 해 질 녘'], ['spa', '숲 객실 · 노천 스파'], ['fire', '불멍 자리 · 밤'], ['forest', '아침 숲길'], ['loft', '바람 객실 · 복층 거실']];
  const cf = $('#cf'), thumbs = $('#thumbs'); let gi = 0;
  cf.innerHTML = G.map(([k, c], i) => `<figure class="cf-item" data-i="${i}" role="group" aria-label="${i + 1} / ${G.length}"><div class="ph ph-${k}" role="img" aria-label="${c}"></div><figcaption>${c}</figcaption></figure>`).join('');
  thumbs.innerHTML = G.map(([k, c], i) => `<button type="button" class="ph ph-${k}" aria-label="${c} 보기" data-i="${i}"></button>`).join('');
  const items = $$('.cf-item', cf), tbtn = $$('button', thumbs);
  function layoutG() {
    const w = cf.clientWidth, mob = w < 600, n = G.length;
    items.forEach((el, i) => {
      let o = i - gi; if (o > n / 2) o -= n; if (o < -n / 2) o += n;
      const a = Math.abs(o), dir = Math.sign(o);
      const x = mob ? o * 104 : dir * (a === 0 ? 0 : a === 1 ? w * .3 : w * .44);
      const s = a === 0 ? 1 : a === 1 ? (mob ? .9 : .66) : .5;
      el.style.transform = `translateX(${mob ? x + '%' : x + 'px'}) scale(${s})`;
      el.style.opacity = a > 2 ? 0 : a === 2 ? (mob ? 0 : .35) : a === 1 ? (mob ? .5 : .62) : 1;
      el.style.zIndex = 10 - a; el.style.pointerEvents = a > 2 ? 'none' : '';
      el.classList.toggle('on', a === 0);
    });
    tbtn.forEach((b, i) => b.setAttribute('aria-current', i === gi));
    if (thumbs.scrollWidth > thumbs.clientWidth) { const b = tbtn[gi]; thumbs.scrollTo({ left: b.offsetLeft - thumbs.offsetLeft - (thumbs.clientWidth - b.offsetWidth) / 2, behavior: reduce ? 'auto' : 'smooth' }); }
  }
  const goG = i => { gi = (i + G.length) % G.length; layoutG(); };
  items.forEach(el => el.addEventListener('click', () => { const i = +el.dataset.i; i === gi ? openLB() : goG(i); }));
  tbtn.forEach(b => b.addEventListener('click', () => goG(+b.dataset.i)));
  $('#gPrev').addEventListener('click', () => goG(gi - 1)); $('#gNext').addEventListener('click', () => goG(gi + 1));
  let sx = null; cf.addEventListener('pointerdown', e => sx = e.clientX); cf.addEventListener('pointerup', e => { if (sx === null) return; const d = e.clientX - sx; sx = null; if (Math.abs(d) > 40) goG(gi + (d < 0 ? 1 : -1)); });
  addEventListener('resize', layoutG); layoutG();
  let gTimer; const gAuto = () => { clearInterval(gTimer); if (!reduce) gTimer = setInterval(() => { if (!lb.open) goG(gi + 1); }, 4500); };
  new IntersectionObserver(es => es.forEach(e => e.isIntersecting ? gAuto() : clearInterval(gTimer))).observe(cf);
  cf.addEventListener('mouseenter', () => clearInterval(gTimer)); cf.addEventListener('mouseleave', gAuto);
  /* lightbox */
  const lb = $('#lb'), lbPh = $('#lbPh');
  function drawLB() { lbPh.className = 'ph lb-ph ph-' + G[gi][0]; lbPh.setAttribute('aria-label', G[gi][1]); $('#lbCap').textContent = `${G[gi][1]}  ·  ${gi + 1} / ${G.length}`; }
  function openLB() { drawLB(); lb.showModal ? lb.showModal() : lb.setAttribute('open', ''); }
  $('#gOpen').addEventListener('click', openLB);
  $('#lbPrev').addEventListener('click', () => { goG(gi - 1); drawLB(); });
  $('#lbNext').addEventListener('click', () => { goG(gi + 1); drawLB(); });
  $('#lbClose').addEventListener('click', () => lb.close());
  lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
  lb.addEventListener('keydown', e => { if (e.key === 'ArrowRight') $('#lbNext').click(); if (e.key === 'ArrowLeft') $('#lbPrev').click(); });

  /* stats count-up */
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; cio.unobserve(e.target); if (reduce) return;
    $$('strong[data-to]', e.target).forEach(el => {
      const to = +el.dataset.to, dec = +(el.dataset.dec || 0), suf = el.dataset.suf || '', t0 = performance.now();
      (function f(t) { const k = Math.min(1, (t - t0) / 1600), v = to * (1 - Math.pow(1 - k, 3)); el.textContent = (el.dataset.fmt ? Math.round(v).toLocaleString('ko-KR') : v.toFixed(dec)) + suf; if (k < 1) requestAnimationFrame(f); })(t0);
    });
  }), { threshold: .4 });
  cio.observe($('#stats'));

  /* booking steps: light up in sequence */
  const steps = $$('#stepList .step'); let si = -1, sTimer;
  new IntersectionObserver(es => es.forEach(e => {
    clearInterval(sTimer);
    if (!e.isIntersecting) return;
    if (reduce) { steps.forEach(s => s.classList.add('lit')); return; }
    sTimer = setInterval(() => { si = (si + 1) % (steps.length + 2); steps.forEach((s, k) => s.classList.toggle('lit', k <= si && si < steps.length + 1)); }, 650);
  }), { threshold: .3 }).observe($('#stepList'));

  /* price: season toggle + "now" badge */
  const tbl = $('#tbl');
  $$('.season button').forEach(b => b.addEventListener('click', () => { $$('.season button').forEach(x => x.setAttribute('aria-pressed', x === b)); tbl.dataset.season = b.dataset.s; }));
  const now = new Date(), md = (now.getMonth() + 1) * 100 + now.getDate();
  const peak = (md >= 715 && md <= 820) || md >= 1224 || md <= 101;
  const head = peak ? $$('th.peak')[0] : $$('th.off')[0];
  head.insertAdjacentHTML('beforeend', '<span class="now">지금</span>');
  if (peak) $('.season [data-s="peak"]').click();

  /* reviews carousel */
  const R = [['김*연 님', '숲 객실 · 2026년 9월', '도착하자마자 나무 냄새부터 달랐어요. 밤에는 노천 스파에서 별을 보고, 아침에는 새소리에 깼습니다. 아이들도 불멍을 제일 좋아했어요.', 'spa'],
    ['이*호 님', '솔 객실 · 2026년 8월', '결혼기념일 패키지로 다녀왔는데 객실 장식부터 케이크까지 세심하게 준비해 주셔서 감동이었어요. 조용히 쉬기에 이만한 곳이 없네요.', 'room'],
    ['박*진 님', '별채 · 2026년 7월', '부모님 모시고 여덟 명이 함께 묵었어요. 복층 거실이 넓어서 다 같이 둘러앉아 이야기하기 좋았고, 바비큐 데크도 깔끔했어요.', 'loft'],
    ['최*아 님', '바람 객실 · 2026년 6월', '반려견과 함께 갈 수 있는 곳을 찾다가 알게 됐어요. 숲길 산책 코스가 객실 바로 앞이라 강아지가 정말 신나 했어요.', 'forest'],
    ['정*우 님', '숲 객실 · 2026년 5월', '불멍 세트 꼭 추가하세요. 장작이 넉넉해서 밤늦게까지 이야기 나누다 들어왔어요. 사장님 부부도 친절하셨어요.', 'fire']];
  const rv = $('#rv'), rd = $('#rvDots'); let ri = 0;
  rv.innerHTML = R.map(([n, m, q, k], i) => `<article class="rv-card" data-i="${i}"><div class="ph av ph-${k}" aria-hidden="true"></div><div><b>${n}</b><span class="stars" aria-label="별점 5점">★★★★★</span><small>${m}</small></div><p>${q}</p></article>`).join('');
  rd.innerHTML = R.map((_, i) => `<button type="button" aria-label="${i + 1}번째 후기"></button>`).join('');
  const rc = $$('.rv-card', rv), rb = $$('button', rd);
  function layoutR() {
    const mob = rv.clientWidth < 600, n = R.length;
    rc.forEach((el, i) => { let o = i - ri; if (o > n / 2) o -= n; if (o < -n / 2) o += n; const a = Math.abs(o);
      el.style.transform = `translateX(${o * (mob ? 108 : 96)}%) scale(${a ? .8 : 1})`; el.style.opacity = a === 0 ? 1 : a === 1 ? (mob ? 0 : .35) : 0;
      el.style.zIndex = 5 - a; el.style.pointerEvents = a > 1 ? 'none' : ''; el.classList.toggle('on', a === 0); el.setAttribute('aria-hidden', a !== 0); });
    rb.forEach((b, i) => b.setAttribute('aria-current', i === ri));
  }
  const goR = i => { ri = (i + R.length) % R.length; layoutR(); };
  rc.forEach(el => el.addEventListener('click', () => goR(+el.dataset.i)));
  rb.forEach((b, i) => b.addEventListener('click', () => goR(i)));
  let rx = null; rv.addEventListener('pointerdown', e => rx = e.clientX); rv.addEventListener('pointerup', e => { if (rx === null) return; const d = e.clientX - rx; rx = null; if (Math.abs(d) > 40) goR(ri + (d < 0 ? 1 : -1)); });
  layoutR(); addEventListener('resize', layoutR);
  let rTimer; const rAuto = () => { clearInterval(rTimer); if (!reduce) rTimer = setInterval(() => goR(ri + 1), 6000); };
  new IntersectionObserver(es => es.forEach(e => e.isIntersecting ? rAuto() : clearInterval(rTimer))).observe(rv);
  rv.addEventListener('mouseenter', () => clearInterval(rTimer)); rv.addEventListener('mouseleave', rAuto);

  /* FAQ: one open at a time */
  const dets = $$('.faq details');
  dets.forEach(d => d.addEventListener('toggle', () => { if (d.open) dets.forEach(o => { if (o !== d) o.open = false; }); }));

  /* form */
  const form = $('#form'), fName = $('#fName'), fPhone = $('#fPhone'), fRoom = $('#fRoom'), fDate = $('#fDate'), fPax = $('#fPax'), fAgree = $('#fAgree'), fMsg = $('#fMsg');
  const today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset()); fDate.min = today.toISOString().slice(0, 10);
  fPhone.addEventListener('input', () => { const d = fPhone.value.replace(/\D/g, '').slice(0, 11); fPhone.value = d.length < 4 ? d : d.length < 8 ? `${d.slice(0, 3)}-${d.slice(3)}` : `${d.slice(0, 3)}-${d.slice(3, d.length - 4)}-${d.slice(-4)}`; });
  const fail = (el, m) => { const b = el.closest('.fld') || el.closest('.agree'); b.classList.remove('err'); void b.offsetWidth; b.classList.add('err'); fMsg.className = 'f-msg err'; fMsg.textContent = m; el.focus(); };
  [fName, fPhone, fRoom, fDate, fPax, fAgree].forEach(el => el.addEventListener('input', () => { (el.closest('.fld') || el.closest('.agree')).classList.remove('err'); if (fMsg.classList.contains('err')) { fMsg.className = 'f-msg'; fMsg.textContent = ''; } }));
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (fName.value.trim().length < 2) return fail(fName, '이름을 2글자 이상 입력해 주세요.');
    if (!/^01[016789]-\d{3,4}-\d{4}$/.test(fPhone.value)) return fail(fPhone, '연락처를 010-0000-0000 형식으로 입력해 주세요.');
    if (!fRoom.value) return fail(fRoom, '문의할 객실을 선택해 주세요.');
    if (!fDate.value) return fail(fDate, '체크인 날짜를 선택해 주세요.');
    if (!fPax.value) return fail(fPax, '인원을 선택해 주세요.');
    if (!fAgree.checked) return fail(fAgree, '개인정보 수집 및 이용에 동의해 주세요.');
    const d = new Date(fDate.value + 'T00:00:00');
    form.classList.add('done'); const b = $('#fBtn'); b.disabled = true; b.textContent = '문의 작성 완료';
    fMsg.className = 'f-msg ok';
    fMsg.textContent = `${fName.value.trim()}님, ${d.getMonth() + 1}월 ${d.getDate()}일 ${fRoom.value} ${fPax.value} 문의 작성이 완료되었어요.`;
  });
  document.addEventListener('click', e => { const a = e.target.closest('[data-pick]'); if (!a) return; fRoom.value = a.dataset.pick; toast(`문의 폼에 '${a.dataset.pick}'을(를) 선택해 두었어요.`); });
})();
}
