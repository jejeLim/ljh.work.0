// SiteF: 원본 HTML의 <script>. React 마운트 직후 init()으로 실행한다.
/* eslint-disable */
export function init() {
(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const won = n => n.toLocaleString('ko-KR');
  requestAnimationFrame(() => setTimeout(() => document.documentElement.classList.add('ready'), 60));

  /* reveal (tilt-up) */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .2 });
  $$('[data-up],.lease').forEach(el => io.observe(el));
  /* line-draw icon lengths */
  $$('.ic svg *').forEach(p => { try { p.style.setProperty('--len', Math.ceil(p.getTotalLength())); } catch (e) {} });
  new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); o.unobserve(e.target); } }), { threshold: .3 }).observe($('#featList'));

  /* header + nav indicator + mobile bar + top + parallax */
  const hd = $('#hd'), mbar = $('#mbar'), toTop = $('#toTop'), ind = $('#ind'), gnbLinks = $$('.gnb a:not(.tel)'), leasePh = $('.lease .ph');
  function moveInd(a) { if (!a) { ind.style.opacity = 0; return; } ind.style.opacity = 1; ind.style.width = a.offsetWidth + 'px'; ind.style.transform = `translateX(${a.offsetLeft}px)`; }
  gnbLinks.forEach(a => { a.addEventListener('mouseenter', () => moveInd(a)); });
  $('#gnb').addEventListener('mouseleave', () => moveInd(gnbLinks.find(a => a.classList.contains('cur'))));
  const secIO = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return; gnbLinks.forEach(a => a.classList.toggle('cur', a.hash === '#' + e.target.id)); moveInd(gnbLinks.find(a => a.classList.contains('cur'))); }), { rootMargin: '-45% 0px -50% 0px' });
  ['lease', 'trims', 'price', 'quote'].forEach(id => secIO.observe(document.getElementById(id)));
  let tick = false;
  function onScroll() {
    const y = scrollY, vh = innerHeight;
    hd.classList.toggle('on', y > 40);
    mbar.classList.toggle('show', y > vh * .5);
    toTop.classList.toggle('show', y > vh);
    if (!reduce) { const r = leasePh.parentElement.getBoundingClientRect(); if (r.bottom > 0 && r.top < vh) leasePh.style.setProperty('--py', ((r.top + r.height / 2 - vh / 2) * -.12).toFixed(1) + 'px'); }
    tick = false;
  }
  addEventListener('scroll', () => { if (!tick) { requestAnimationFrame(onScroll); tick = true; } }, { passive: true }); onScroll();

  /* drawer */
  const dr = $('#drawer'), bg = $('#burger');
  const setD = o => { dr.classList.toggle('open', o); bg.setAttribute('aria-expanded', o); document.body.style.overflow = o ? 'hidden' : ''; if (o) $('#dClose').focus(); };
  bg.addEventListener('click', () => setD(true)); $('#dClose').addEventListener('click', () => { setD(false); bg.focus(); });
  dr.addEventListener('click', e => { if (e.target === dr || e.target.closest('a')) setD(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape') { setD(false); closeModal(); } });

  /* stats count-up + confetti */
  const cv = $('#confetti'), ctx = cv.getContext('2d'); let parts = [], raf;
  function burst() {
    const r = cv.getBoundingClientRect(), dpr = Math.min(2, devicePixelRatio || 1);
    cv.width = r.width * dpr; cv.height = r.height * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const cols = ['#FFD66B', '#7CE0C3', '#FF8FB1', '#FFFFFF', '#9FA1FF'];
    parts = Array.from({ length: 90 }, () => ({ x: r.width * (.2 + Math.random() * .6), y: r.height * .6, vx: (Math.random() - .5) * 9, vy: -Math.random() * 9 - 3, s: 3 + Math.random() * 4, a: Math.random() * 6, va: (Math.random() - .5) * .3, c: cols[Math.random() * cols.length | 0], life: 1 }));
    cancelAnimationFrame(raf);
    (function f() {
      ctx.clearRect(0, 0, r.width, r.height); let alive = 0;
      parts.forEach(p => { p.vy += .22; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.a += p.va; p.life -= .008; if (p.life > 0 && p.y < r.height + 20) { alive++; ctx.save(); ctx.globalAlpha = Math.max(0, p.life); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); ctx.restore(); } });
      if (alive) raf = requestAnimationFrame(f);
    })();
  }
  new IntersectionObserver((es, o) => es.forEach(e => {
    if (!e.isIntersecting) return; o.disconnect();
    $$('#stats b').forEach(b => { const to = +b.dataset.n; if (reduce) { b.textContent = won(to); return; } const t0 = performance.now(); (function f(t) { const k = Math.min(1, (t - t0) / 1600), v = Math.round(to * (1 - Math.pow(1 - k, 4))); b.textContent = won(v); if (k < 1) requestAnimationFrame(f); })(t0); });
    if (!reduce) setTimeout(burst, 300);
  }), { threshold: .5 }).observe($('#stats'));

  /* trims: color swap with drive transition */
  const COLORS = [['grey', '그라파이트 그레이', '#5B5F66'], ['white', '펄 화이트', '#F2F2EE'], ['blue', '미드나잇 블루', '#1F2B4D']];
  $$('.trim').forEach(t => {
    const st = $('.stage', t), sw = $('.sw', t), nm = $('.sw-name', t);
    let cur = t.dataset.def;
    const mk = k => { const d = document.createElement('div'); d.className = 'car'; d.style.setProperty('--img', `var(--img-${k})`); return d; };
    st.appendChild(mk(cur));
    sw.innerHTML = COLORS.map(([k, n, c]) => `<button type="button" style="--c:${c}" data-k="${k}" aria-label="${n}" aria-pressed="${k === cur}"></button>`).join('');
    nm.textContent = COLORS.find(c => c[0] === cur)[1];
    sw.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b || b.dataset.k === cur) return;
      cur = b.dataset.k; $$('button', sw).forEach(x => x.setAttribute('aria-pressed', x === b)); nm.textContent = COLORS.find(c => c[0] === cur)[1];
      const old = $('.car:last-child', st), nw = mk(cur);
      if (reduce) { st.replaceChildren(nw); return; }
      nw.classList.add('pre'); st.appendChild(nw); void nw.offsetWidth;
      nw.classList.remove('pre'); old.classList.add('out'); setTimeout(() => old.remove(), 900);
    });
  });

  /* price calculator + odometer */
  function odo(el, value) {
    const s = won(value);
    if (el.dataset.len != s.length) {
      el.innerHTML = [...s].map((ch, k) => /\d/.test(ch) ? `<span class="d" style="--k:${k}"><span>${'0123456789'.split('').map(d => `<i>${d}</i>`).join('')}</span></span>` : `<span>${ch}</span>`).join('');
      el.dataset.len = s.length; void el.offsetWidth;
    }
    const ds = $$('.d>span', el); let i = 0;
    [...s].forEach(ch => { if (/\d/.test(ch)) { ds[i].style.transform = `translateY(-${+ch * 1.1}em)`; i++; } });
    el.setAttribute('aria-label', s);
  }
  const st = { term: 48, down: 20, km: 2 };
  const TF = { 36: 1.12, 48: 1, 60: .92 }, KF = { 1: .96, 2: 1, 3: 1.05 };
  function calc() {
    const f = TF[st.term] * (1 - (st.down - 20) * .0075) * KF[st.km];
    const lease = Math.round(774000 * f / 1000) * 1000, rent = Math.round(960000 * f / 1000) * 1000;
    odo($('#oLease'), lease); odo($('#oRent'), rent);
    const c = `선수금 ${st.down}%, ${st.term}개월, 연 ${st.km}만km 기준`; $('#cLease').textContent = c; $('#cRent').textContent = c;
  }
  function seg(el, key) {
    const pill = $('i', el), btns = $$('button', el);
    const place = () => { const b = btns.find(x => x.getAttribute('aria-pressed') === 'true'); pill.style.width = b.offsetWidth + 'px'; pill.style.transform = `translateX(${b.offsetLeft}px)`; };
    btns.forEach(b => b.addEventListener('click', () => { btns.forEach(x => x.setAttribute('aria-pressed', x === b)); st[key] = +b.dataset.v; place(); calc(); }));
    place(); addEventListener('resize', place); document.fonts && document.fonts.ready.then(place);
  }
  seg($('#term'), 'term'); seg($('#km'), 'km');
  $('#down').addEventListener('input', e => { st.down = +e.target.value; $('#downO').textContent = st.down + '%'; calc(); });
  calc();
  $$('.pc .go').forEach(a => a.addEventListener('click', () => { const s = $('#sProd'); s.value = a.dataset.prod; $('#sTerm').value = st.term + '개월'; meter(); }));

  /* quote form: floating labels, completion meter, validation, modal */
  const form = $('#qForm'), tel = $('#fTel'), msg = $('#qMsg'), req = [...$$('select', form), $('#fName'), tel, $('#fAgree')];
  function meter() { const done = req.filter(el => el.type === 'checkbox' ? el.checked : el.value.trim()).length, p = Math.round(done / req.length * 100); $('#meter').style.setProperty('--m', p + '%'); $('#mPct').textContent = p + '%'; }
  form.addEventListener('input', meter); form.addEventListener('change', meter);
  tel.addEventListener('input', () => { const d = tel.value.replace(/\D/g, '').slice(0, 11); tel.value = d.length < 4 ? d : d.length < 8 ? `${d.slice(0, 3)}-${d.slice(3)}` : `${d.slice(0, 3)}-${d.slice(3, d.length - 4)}-${d.slice(-4)}`; });
  form.addEventListener('input', e => { const f = e.target.closest('.fld'); if (f) f.classList.remove('err'); if (e.target.id === 'fAgree') $('#agreeL').classList.remove('err'); msg.textContent = ''; });
  function fail(el, m) { const f = el.closest('.fld') || $('#agreeL'); f.classList.remove('err'); void f.offsetWidth; f.classList.add('err'); msg.textContent = m; el.focus(); }
  form.addEventListener('submit', e => {
    e.preventDefault();
    const s = $$('select', form).find(x => !x.value); if (s) return fail(s, `${s.options[0].text}을(를) 선택해 주세요.`);
    if ($('#fName').value.trim().length < 2) return fail($('#fName'), '신청인 이름을 입력해 주세요.');
    if (!/^01[016789]-\d{3,4}-\d{4}$/.test(tel.value)) return fail(tel, '연락처를 010-0000-0000 형식으로 입력해 주세요.');
    if (!$('#fAgree').checked) return fail($('#fAgree'), '개인정보 취급방침에 동의해 주세요.');
    $('#mP').textContent = `${$('#fName').value.trim()}님, ${$('#sCar').value} · ${$('#sProd').value} 견적 신청이 접수됐어요. 담당 상담사가 영업시간 내에 연락드릴게요.`;
    openModal(); form.reset(); meter();
  });
  const modal = $('#modal'); let lastF;
  function openModal() { lastF = document.activeElement; modal.classList.add('open'); setTimeout(() => $('#mOk').focus(), 50); }
  function closeModal() { if (!modal.classList.contains('open')) return; modal.classList.remove('open'); lastF && lastF.focus(); }
  $('#mOk').addEventListener('click', closeModal); modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

  /* TOP: car drives up */
  toTop.addEventListener('click', () => {
    if (reduce) { scrollTo(0, 0); return; }
    toTop.classList.remove('go'); void toTop.offsetWidth; toTop.classList.add('go');
    setTimeout(() => scrollTo({ top: 0, behavior: 'smooth' }), 250);
    setTimeout(() => toTop.classList.remove('go'), 1300);
  });
})();
}
