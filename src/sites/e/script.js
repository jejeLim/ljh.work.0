// SiteE: 원본 HTML의 <script>. React 마운트 직후 init()으로 실행한다.
/* eslint-disable */
export function init() {
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  /* ---------- preloader: count 0→100 then lift curtain ---------- */
  const pre = $('#pre'), preN = $('#preN'), preBar = $('#preBar');
  function finish() { pre.classList.add('done'); document.body.classList.remove('loading'); document.documentElement.classList.add('ready'); setTimeout(() => pre.remove(), 1100); }
  if (reduce) finish();
  else {
    const t0 = performance.now(), D = 1300;
    (function f(t) {
      const k = Math.min(1, (t - t0) / D), e = 1 - Math.pow(1 - k, 3), n = Math.round(e * 100);
      preN.textContent = n; preBar.style.setProperty('--p', n + '%');
      if (k < 1) requestAnimationFrame(f); else setTimeout(finish, 180);
    })(t0);
  }

  /* ---------- blur-in: split words ---------- */
  $$('.bw').forEach(el => {
    const words = el.textContent.trim().split(/\s+/);
    el.setAttribute('aria-label', el.textContent.trim());
    el.innerHTML = words.map((w, i) => `<span class="w" aria-hidden="true" style="--i:${i}">${w}</span>`).join(' ');
  });
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add(e.target.classList.contains('bw') ? 'in' : 'in-view'); io.unobserve(e.target); } }), { threshold: .25 });
  $$('.bw,.pure').forEach(el => io.observe(el));

  /* ---------- custom cursor ---------- */
  if (fine && !reduce) {
    const cur = $('#cur'), curT = $('#curT'); let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
    addEventListener('pointermove', e => { x = e.clientX; y = e.clientY; cur.style.opacity = 1; }, { passive: true });
    document.addEventListener('pointerleave', () => cur.style.opacity = 0);
    (function loop() { cx += (x - cx) * .2; cy += (y - cy) * .2; cur.style.transform = `translate3d(${cx}px,${cy}px,0)`; requestAnimationFrame(loop); })();
    document.addEventListener('pointerover', e => {
      const big = e.target.closest('[data-cursor]'), link = e.target.closest('a,button,input');
      cur.classList.toggle('big', !!big && !link); cur.classList.toggle('link', !!link);
      if (big) curT.textContent = big.dataset.cursor;
    });
  }

  /* ---------- nav: solid after hero, progress, menu ---------- */
  const nav = $('#nav'), hero = $('#hero'), sp = $('#sp');
  const mnav = $('#mnav'), mb = $('#menuBtn');
  const setM = o => { mnav.classList.toggle('open', o); mb.setAttribute('aria-expanded', o); document.body.style.overflow = o ? 'hidden' : ''; if (o) $('#mClose').focus(); };
  mb.addEventListener('click', () => setM(true)); $('#mClose').addEventListener('click', () => { setM(false); mb.focus(); });
  $$('a', mnav).forEach(a => a.addEventListener('click', () => setM(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape' && mnav.classList.contains('open')) { setM(false); mb.focus(); } });

  /* ---------- hero pointer parallax ---------- */
  if (fine && !reduce) hero.addEventListener('pointermove', e => {
    const r = hero.getBoundingClientRect(), dx = (e.clientX - r.left) / r.width - .5, dy = (e.clientY - r.top) / r.height - .5;
    hero.style.setProperty('--mx', (dx * -24).toFixed(1) + 'px'); hero.style.setProperty('--my', (dy * -16).toFixed(1) + 'px');
  });

  /* ---------- 3D tilt jar ---------- */
  const tilt = $('#tilt'), tin = $('.tilt-in', tilt);
  if (fine && !reduce) {
    tilt.addEventListener('pointermove', e => {
      const r = tin.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      tin.style.setProperty('--ry', ((px - .5) * 16).toFixed(2) + 'deg'); tin.style.setProperty('--rx', ((.5 - py) * 12).toFixed(2) + 'deg');
      tin.style.setProperty('--gx', px * 100 + '%'); tin.style.setProperty('--gy', py * 100 + '%'); tin.style.setProperty('--go', 1);
    });
    tilt.addEventListener('pointerleave', () => { ['--rx', '--ry'].forEach(p => tin.style.setProperty(p, '0deg')); tin.style.setProperty('--go', 0); });
  }

  /* ---------- scroll-linked: hero word, parallax, new word, jar rotation, top btn ---------- */
  const word = $('#word'), heroPh = $('.ph', hero), newSec = $('#new'), newWord = $('#newWord'), jar = $('#jar'), wmSec = $('#product');
  const par = $$('[data-speed]'), toTop = $('#toTop');
  let tick = false;
  function onScroll() {
    const y = scrollY, vh = innerHeight, H = document.documentElement.scrollHeight - vh;
    sp.style.setProperty('--sp', H > 0 ? (y / H).toFixed(4) : 0);
    nav.classList.toggle('solid', y > hero.offsetHeight - 80);
    toTop.classList.toggle('show', y > vh * .9);
    if (!reduce) {
      if (y < vh * 1.3) word.style.setProperty('--wy', (y * -.35).toFixed(1) + 'px');
      par.forEach(el => {
        const r = el.getBoundingClientRect(); if (r.bottom < -200 || r.top > vh + 200) return;
        const c = (r.top + r.height / 2 - vh / 2); el.style.setProperty('--py', (c * -(+el.dataset.speed)).toFixed(1) + 'px');
      });
      const nr = newSec.getBoundingClientRect();
      if (nr.bottom > 0 && nr.top < vh) { const p = clamp((vh - nr.top) / (vh + nr.height), 0, 1); newWord.style.setProperty('--nx', (8 - p * 38).toFixed(2) + '%'); }
      const wr = wmSec.getBoundingClientRect();
      if (wr.bottom > 0 && wr.top < vh) { const p = clamp((vh - wr.top) / (vh + wr.height), 0, 1); jar.style.setProperty('--jr', ((p - .5) * -14).toFixed(2) + 'deg'); }
    }
    tick = false;
  }
  addEventListener('scroll', () => { if (!tick) { requestAnimationFrame(onScroll); tick = true; } }, { passive: true });
  addEventListener('resize', onScroll); onScroll();
  toTop.addEventListener('click', () => { toTop.classList.remove('go'); void toTop.offsetWidth; toTop.classList.add('go'); scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });

  /* ---------- magnetic letters (repel from cursor) ---------- */
  const letters = $$('#letters span');
  if (fine && !reduce) {
    wmSec.addEventListener('pointermove', e => {
      letters.forEach(l => {
        const r = l.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const dx = cx - e.clientX, dy = cy - e.clientY, d = Math.hypot(dx, dy), R = 260;
        if (d < R) { const f = (1 - d / R) * 46; l.style.setProperty('--tx', (dx / d * f).toFixed(1) + 'px'); l.style.setProperty('--ty', (dy / d * f).toFixed(1) + 'px'); l.style.setProperty('--tr', (dx / d * f * .15).toFixed(1) + 'deg'); }
        else { l.style.setProperty('--tx', 0); l.style.setProperty('--ty', 0); l.style.setProperty('--tr', '0deg'); }
      });
    });
    wmSec.addEventListener('pointerleave', () => letters.forEach(l => { l.style.setProperty('--tx', 0); l.style.setProperty('--ty', 0); l.style.setProperty('--tr', '0deg'); }));
  }

  /* ---------- magnetic button ---------- */
  if (fine && !reduce) $$('.mag').forEach(b => {
    b.addEventListener('pointermove', e => { const r = b.getBoundingClientRect(); b.style.setProperty('--bx', ((e.clientX - r.left - r.width / 2) * .35).toFixed(1) + 'px'); b.style.setProperty('--by', ((e.clientY - r.top - r.height / 2) * .45).toFixed(1) + 'px'); });
    b.addEventListener('pointerleave', () => { b.style.setProperty('--bx', 0); b.style.setProperty('--by', 0); });
  });

  /* ---------- add to bag: fly dot ---------- */
  const bag = $('#bag'), bagN = $('#bagN'), bagMsg = $('#bagMsg'); let n = 0, msgT;
  function landed(name) {
    n++; bagN.textContent = n; bag.classList.remove('pop'); void bag.offsetWidth; bag.classList.add('pop');
    bagMsg.textContent = `+1 ${name}`; bagMsg.classList.add('show'); clearTimeout(msgT); msgT = setTimeout(() => bagMsg.classList.remove('show'), 2000);
  }
  $$('.add').forEach(b => b.addEventListener('click', () => {
    const name = b.dataset.name;
    if (reduce) return landed(name);
    const s = b.getBoundingClientRect(), t = $('svg', bag).getBoundingClientRect();
    const dot = document.createElement('i'); dot.className = 'fly'; document.body.appendChild(dot);
    const x0 = s.left + s.width / 2 - 7, y0 = s.top + s.height / 2 - 7, x1 = t.left + t.width / 2 - 7, y1 = t.top + t.height / 2 - 7;
    const a = dot.animate([
      { transform: `translate(${x0}px,${y0}px) scale(1)` },
      { transform: `translate(${(x0 + x1) / 2}px,${Math.min(y0, y1) - 120}px) scale(1.4)`, offset: .45 },
      { transform: `translate(${x1}px,${y1}px) scale(.4)`, opacity: .6 }
    ], { duration: 850, easing: 'cubic-bezier(.5,0,.3,1)' });
    a.onfinish = () => { dot.remove(); landed(name); };
  }));

  /* ---------- newsletter ---------- */
  const nl = $('#nl'), nlE = $('#nlE'), nlB = $('#nlB'), nlMsg = $('#nlMsg');
  nl.addEventListener('submit', e => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(nlE.value.trim())) { nl.classList.remove('err'); void nl.offsetWidth; nl.classList.add('err'); nlMsg.textContent = '이메일 주소를 다시 확인해 주세요.'; nlE.focus(); return; }
    nl.classList.remove('err'); nl.classList.add('ok'); nlB.textContent = '✓ Joined'; nlMsg.textContent = '환영해요! 10% 쿠폰을 메일로 보내드렸어요.'; nlE.value = '';
  });
  nlE.addEventListener('input', () => { nl.classList.remove('err', 'ok'); nlB.textContent = 'Subscribe'; nlMsg.textContent = ''; });
})();
}
