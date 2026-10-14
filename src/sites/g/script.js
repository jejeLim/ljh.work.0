// SiteG: 원본 HTML의 <script>. React 마운트 직후 init()으로 실행한다.
/* eslint-disable */
export function init() {
(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  /* reveal */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15 });
  $$('[data-rv]').forEach(el => io.observe(el));

  /* sheet menu */
  const sh = $('#sheet'), bg = $('#burger');
  const setS = o => { sh.classList.toggle('open', o); bg.setAttribute('aria-expanded', o); document.body.style.overflow = o ? 'hidden' : ''; if (o) $('#sClose').focus(); };
  bg.addEventListener('click', () => setS(true)); $('#sClose').addEventListener('click', () => { setS(false); bg.focus(); });
  sh.addEventListener('click', e => { if (e.target === sh || e.target.closest('a')) setS(false); });

  /* hero: word flipper */
  const words = $$('#flip span'); let wi = 0;
  if (!reduce) setInterval(() => { const cur = words[wi]; cur.classList.remove('on'); cur.classList.add('off'); setTimeout(() => cur.classList.remove('off'), 700); wi = (wi + 1) % words.length; words[wi].classList.add('on'); }, 2200);
  /* hero: blobs follow pointer */
  if (fine && !reduce) $('.hero').addEventListener('pointermove', e => { const r = e.currentTarget.getBoundingClientRect(), dx = (e.clientX - r.left) / r.width - .5, dy = (e.clientY - r.top) / r.height - .5; $$('#blobs i').forEach((b, i) => { const k = (i + 1) * 30 * (i % 2 ? -1 : 1); b.style.setProperty('--bx', (dx * k).toFixed(1) + 'px'); b.style.setProperty('--by', (dy * k).toFixed(1) + 'px'); }); });

  /* showreel slides + progress dots */
  const slides = $$('.slide'), pd = $('#pdots'), reel = $('#reel'), reelPh = $('.ph', reel); let si = 0, sT;
  pd.innerHTML = slides.map((_, i) => `<button type="button" role="tab" aria-label="${i + 1}번 슬라이드" aria-selected="${i === 0}" class="${i === 0 ? 'on' : ''}"><i></i></button>`).join('');
  const dots = $$('button', pd);
  function goS(i) { si = (i + slides.length) % slides.length; slides.forEach((s, k) => s.classList.toggle('on', k === si)); dots.forEach((d, k) => { d.classList.toggle('on', k === si); d.setAttribute('aria-selected', k === si); const f = $('i', d); f.style.animation = 'none'; void f.offsetWidth; f.style.animation = ''; }); reelPh.style.setProperty('--rx', (si * -2) + '%'); clearTimeout(sT); if (!reduce) sT = setTimeout(() => goS(si + 1), 5000); }
  dots.forEach((d, i) => d.addEventListener('click', () => goS(i)));
  reel.addEventListener('mouseenter', () => { clearTimeout(sT); pd.classList.add('paused'); });
  reel.addEventListener('mouseleave', () => { pd.classList.remove('paused'); goS(si); });
  goS(0);

  /* player modal */
  const pl = $('#player'), screen = $('#screen'), fill = $('#pFill'), time = $('#pTime'); let pt = 0, pRaf, playing = false, last, opener;
  const fmt = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  function loop(t) { if (playing) { pt = Math.min(90, pt + (t - last) / 1000); fill.style.width = pt / 90 * 100 + '%'; time.textContent = fmt(pt); if (pt >= 90) setPlay(false); } last = t; pRaf = requestAnimationFrame(loop); }
  function setPlay(p) { playing = p; screen.classList.toggle('paused', !p); $('#pToggle').setAttribute('aria-label', p ? '일시정지' : '재생'); $('#pIco').innerHTML = p ? '<path d="M4 2h3v12H4zM9 2h3v12H9z"/>' : '<path d="M4 2l10 6-10 6z"/>'; }
  function openP(btn) { opener = btn; pt = 0; pl.classList.add('open'); document.body.style.overflow = 'hidden'; setPlay(true); last = performance.now(); cancelAnimationFrame(pRaf); pRaf = requestAnimationFrame(loop); $('#pClose').focus(); }
  function closeP() { if (!pl.classList.contains('open')) return; pl.classList.remove('open'); document.body.style.overflow = ''; cancelAnimationFrame(pRaf); playing = false; opener && opener.focus(); }
  $$('[data-open]').forEach(b => b.addEventListener('click', () => openP(b)));
  $('#pClose').addEventListener('click', closeP); pl.addEventListener('click', e => { if (e.target === pl) closeP(); });
  $('#pToggle').addEventListener('click', () => { if (pt >= 90) pt = 0; setPlay(!playing); });
  $('#pBar').addEventListener('click', e => { const r = e.currentTarget.getBoundingClientRect(); pt = clamp((e.clientX - r.left) / r.width, 0, 1) * 90; });
  addEventListener('keydown', e => { if (e.key === 'Escape') { closeP(); setS(false); } if (e.key === ' ' && pl.classList.contains('open')) { e.preventDefault(); setPlay(!playing); } });

  /* CTA band: spotlight + decode */
  const band = $('.band');
  if (fine) band.addEventListener('pointermove', e => { const r = band.getBoundingClientRect(); band.style.setProperty('--sx', e.clientX - r.left + 'px'); band.style.setProperty('--sy', e.clientY - r.top + 'px'); });
  const dec = $('#dec'), full = dec.dataset.text, pool = '가나다라마바사아자차카타파하브랜드영상콘텐츠ABCDEFGHJKLMNPRSTUVWXYZ0123456789';
  function decode() {
    if (reduce) return; let f = 0; const total = 28;
    const t = setInterval(() => { f++; dec.textContent = [...full].map((ch, i) => ch === ' ' ? ' ' : (i < f / total * full.length ? ch : pool[Math.random() * pool.length | 0])).join(''); if (f >= total) { clearInterval(t); dec.textContent = full; } }, 45);
  }
  new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting) { setTimeout(decode, 300); o.disconnect(); } }), { threshold: .6 }).observe(dec);
  $('.band .btn').addEventListener('mouseenter', decode);

  /* services: auto tabs + diagonal wipe */
  const svc = $('#svc'), tabs = $$('.tab', svc), pics = $$('.svc-img .ph', svc); let ti = 0, tT, svcVis = false;
  function goT(i, user) {
    const prev = ti; ti = (i + tabs.length) % tabs.length;
    tabs.forEach((t, k) => { t.classList.toggle('on', k === ti); t.setAttribute('aria-selected', k === ti); const b = $('.bar2 i', t); b.style.animation = 'none'; void b.offsetWidth; b.style.animation = ''; });
    if (prev !== ti) { pics.forEach(p => p.classList.remove('prev')); pics[prev].classList.add('prev'); pics[prev].classList.remove('on'); pics[ti].classList.add('on'); setTimeout(() => pics[prev].classList.remove('prev'), 1000); }
    clearTimeout(tT); if (!reduce && svcVis && !user) tT = setTimeout(() => goT(ti + 1), 5000);
    if (user) { svc.classList.add('paused'); }
  }
  tabs.forEach((t, i) => t.addEventListener('click', () => { svc.classList.remove('paused'); goT(i); }));
  new IntersectionObserver(es => es.forEach(e => { svcVis = e.isIntersecting; if (svcVis) goT(ti); else clearTimeout(tT); }), { threshold: .4 }).observe(svc);

  /* insights: FLIP filter */
  const cards = $$('.card'), chips = $$('#chips button');
  chips.forEach(c => c.addEventListener('click', () => {
    chips.forEach(x => x.setAttribute('aria-pressed', x === c));
    const f = c.dataset.f, first = new Map(cards.map(k => [k, k.getBoundingClientRect()]));
    cards.forEach(k => k.classList.toggle('hide', f !== 'all' && !k.dataset.c.split(' ').includes(f)));
    $('#empty').style.display = cards.some(k => !k.classList.contains('hide')) ? 'none' : 'block';
    if (reduce) return;
    cards.forEach(k => {
      if (k.classList.contains('hide')) return;
      const a = first.get(k), b = k.getBoundingClientRect();
      if (!a.width) { k.animate([{ opacity: 0, transform: 'scale(.9)' }, { opacity: 1, transform: 'none' }], { duration: 450, easing: 'cubic-bezier(.22,.8,.2,1)' }); return; }
      k.animate([{ transform: `translate(${a.left - b.left}px,${a.top - b.top}px) scale(${a.width / b.width})` }, { transform: 'none' }], { duration: 600, easing: 'cubic-bezier(.22,.8,.2,1)' });
    });
  }));

  /* testimonials: card deck with drag */
  const deck = $('#deck'); let order = $$('.rv', deck);
  $$('.stars', deck).forEach(s => s.innerHTML = Array.from({ length: 5 }, (_, i) => `<svg style="--s:${i}"><use href="#star"/></svg>`).join(''));
  function layout() { order.forEach((c, k) => { c.style.setProperty('--k', k); c.classList.toggle('front', k === 0); c.setAttribute('aria-hidden', k !== 0); }); $('#dCnt').textContent = `${(+order[0].dataset.i) + 1} / ${order.length}`; }
  order.forEach((c, i) => c.dataset.i = i); layout();
  function flyOut(dir) {
    const c = order[0]; c.classList.add('fly'); c.style.transform = `translateX(${dir * 120}%) rotate(${dir * 18}deg)`; c.style.opacity = 0;
    setTimeout(() => { c.classList.remove('fly'); c.style.transform = ''; c.style.opacity = ''; order.push(order.shift()); layout(); }, reduce ? 0 : 450);
  }
  function back() { const c = order.pop(); order.unshift(c); layout(); }
  $('#dNext').addEventListener('click', () => flyOut(1)); $('#dPrev').addEventListener('click', back);
  let sx = 0, dx = 0, drag = null;
  deck.addEventListener('pointerdown', e => { const c = e.target.closest('.rv'); if (c !== order[0]) return; drag = c; sx = e.clientX; dx = 0; c.classList.add('drag'); c.setPointerCapture(e.pointerId); });
  deck.addEventListener('pointermove', e => { if (!drag) return; dx = e.clientX - sx; drag.style.transform = `translateX(${dx}px) rotate(${dx / 20}deg)`; });
  const end = () => { if (!drag) return; const c = drag; drag = null; c.classList.remove('drag'); if (Math.abs(dx) > 90) flyOut(dx > 0 ? 1 : -1); else c.style.transform = ''; };
  deck.addEventListener('pointerup', end); deck.addEventListener('pointercancel', end);

  /* footer: light-follow text */
  const ft = $('#ft');
  if (fine) ft.addEventListener('pointermove', e => { const big = $('.big', ft), r = big.getBoundingClientRect(); big.style.setProperty('--fx', e.clientX - r.left + 'px'); big.style.setProperty('--fy', e.clientY - r.top + 'px'); });

  /* scroll: header pill, reel scale, process line, TOP liquid */
  const hd = $('#hd'), steps = $('#steps'), stepEls = $$('.step', steps), track = $('.track', steps), toTop = $('#toTop'), water = $('#water');
  const mob = () => innerWidth < 600;
  let tick = false;
  function onScroll() {
    const y = scrollY, vh = innerHeight, H = document.documentElement.scrollHeight - vh;
    hd.classList.toggle('pill', y > 60);
    if (!reduce) {
      const r = reel.getBoundingClientRect(), p = clamp((vh - r.top) / (vh * .9), 0, 1);
      reel.style.setProperty('--rs', (.88 + p * .12).toFixed(4)); reel.style.setProperty('--rr', (28 - p * 12).toFixed(1) + 'px');
    }
    const sr = steps.getBoundingClientRect(), tp = clamp((vh * .75 - sr.top) / (sr.height * .9), 0, 1);
    track.style.setProperty('--tp', reduce ? 1 : tp.toFixed(3));
    stepEls.forEach((s, i) => s.classList.toggle('on', reduce || tp >= [.02, .5, .96][i]));
    const lv = H > 0 ? y / H : 0;
    toTop.classList.toggle('show', y > vh * .7);
    if (!toTop.classList.contains('drain')) { water.style.setProperty('--lv', (12 + lv * 88).toFixed(1) + '%'); toTop.classList.toggle('hi', lv > .55); }
    tick = false;
  }
  addEventListener('scroll', () => { if (!tick) { requestAnimationFrame(onScroll); tick = true; } }, { passive: true });
  addEventListener('resize', onScroll); onScroll();
  toTop.addEventListener('click', () => {
    toTop.classList.add('drain'); toTop.classList.remove('hi');
    scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    setTimeout(() => toTop.classList.remove('drain'), 1200);
  });
})();
}
