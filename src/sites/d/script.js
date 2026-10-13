// SiteD: 원본 HTML의 <script>. React 마운트 직후 init()으로 실행한다.
/* eslint-disable */
export function init() {
(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const won = n => '₩' + n.toLocaleString('ko-KR');

  /* toast */
  const tEl = $('#toast'); let tT;
  const toast = m => { tEl.textContent = m; tEl.classList.add('show'); clearTimeout(tT); tT = setTimeout(() => tEl.classList.remove('show'), 2400); };

  /* counters */
  let cart = 0; const favs = new Set();
  const bump = el => { el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); };
  function addCart(n, name) { cart += n; const c = $('#cartCnt'); c.textContent = cart; bump(c); toast(`${name} ${n > 1 ? n + '개를 ' : '을(를) '}장바구니에 담았어요.`); }

  /* product data */
  const CANS = [['can1', 'Cold Brew Noir', 6500], ['can2', 'Mocha Silk', 6500], ['can3', 'Oat Latte', 6000], ['can4', 'Rose Origin', 7000]];
  const POUCH = [['pouch1', 'Ethiopia Yirgacheffe', 18000], ['pouch2', 'House Blend Ondo', 15000], ['pouch3', 'Colombia Huila', 19000], ['pouch4', 'Kenya Nyeri AA', 21000]];
  const LIKE = [['pouch2', 'House Blend Ondo', 15000], ['can3', 'Oat Latte 4-Pack', 22000], ['jar', 'Guji Hambela Jar', 19000], ['latte', 'Drip Bag Set', 12000], ['pouch4', 'Kenya Nyeri AA', 21000], ['can1', 'Cold Brew Noir', 6500], ['pouch3', 'Colombia Huila', 19000], ['can4', 'Rose Origin', 7000]];
  const card = ([k, n, p], i) => `<article class="card" data-rv style="--d:${i * 80}ms">
      <div class="im"><div class="ph ph-${k}" role="img" aria-label="${n}"></div>
        <button class="fav" type="button" aria-pressed="false" aria-label="${n} 찜하기" data-n="${n}"><svg><use href="#heart"/></svg></button>
        <button class="add" type="button" data-n="${n}">+ Add</button></div>
      <h3>${n}</h3><span class="pr">${won(p)}</span></article>`;
  $('#canGrid').innerHTML = CANS.map(card).join('');
  $('#pouchGrid').innerHTML = POUCH.map(card).join('');
  $('#likeTrack').innerHTML = LIKE.map(([k, n, p]) => `<a class="lk" href="#shop" draggable="false"><span class="ph ph-${k}" role="img" aria-label="${n}"></span><div><span>${n}</span><span>${won(p)}</span></div></a>`).join('');

  document.addEventListener('click', e => {
    const a = e.target.closest('.add');
    if (a) { addCart(1, a.dataset.n); return; }
    const f = e.target.closest('.fav');
    if (f) {
      const on = f.getAttribute('aria-pressed') !== 'true'; f.setAttribute('aria-pressed', on);
      on ? favs.add(f.dataset.n) : favs.delete(f.dataset.n);
      $('#favCnt').textContent = $('#favCnt2').textContent = favs.size; bump($('#favCnt'));
      toast(on ? `${f.dataset.n}을(를) 찜했어요.` : '찜 목록에서 뺐어요.');
    }
  });

  /* reveal */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  $$('[data-rv],.reveal-img,.big').forEach(el => io.observe(el));
  requestAnimationFrame(() => $('#heroTitle').classList.add('in'));

  /* header hide + hero parallax + top button */
  const hd = $('#hd'), heroPh = $('#heroPh'), toTop = $('#toTop'), topBar = $('#topBar');
  let lastY = scrollY, tick = false, menuOpen = false;
  function onScroll() {
    const y = scrollY;
    if (y > 300 && y > lastY + 4 && !menuOpen) hd.classList.add('hide'); else if (y < lastY - 4 || y < 300) hd.classList.remove('hide');
    lastY = y;
    if (!reduce && y < innerHeight * 1.2) heroPh.style.setProperty('--py', (y * 0.12).toFixed(1) + 'px');
    const h = document.documentElement.scrollHeight - innerHeight;
    toTop.classList.toggle('show', y > innerHeight * .8);
    topBar.style.strokeDashoffset = (166 * (1 - (h > 0 ? y / h : 0))).toFixed(1);
    tick = false;
  }
  addEventListener('scroll', () => { if (!tick) { requestAnimationFrame(onScroll); tick = true; } }, { passive: true });
  onScroll();
  toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));

  /* mobile menu */
  const mm = $('#mm'), mb = $('#menuBtn');
  const setMenu = o => { menuOpen = o; mm.classList.toggle('open', o); mb.setAttribute('aria-expanded', o); document.body.style.overflow = o ? 'hidden' : ''; if (o) $('#mmClose').focus(); else mb.focus({ preventScroll: true }); };
  mb.addEventListener('click', () => setMenu(true));
  $('#mmClose').addEventListener('click', () => setMenu(false));
  $$('a', mm).forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape' && menuOpen) setMenu(false); });

  /* this week: date, price, qty */
  const d = new Date(), wd = d.getDay(), back = (wd + 7 - 2) % 7 < (wd + 7 - 5) % 7 ? (wd + 7 - 2) % 7 : (wd + 7 - 5) % 7;
  const rd = new Date(d - back * 864e5);
  $('#roastDate').textContent = `This week's roast · ${String(rd.getMonth() + 1).padStart(2, '0')}.${String(rd.getDate()).padStart(2, '0')} roasted`;
  const price = $('#dPrice'), qEl = $('#qty'); let qty = 1, shown = 19000;
  function roll(to) {
    const from = shown; shown = to;
    if (reduce) { price.textContent = won(to); return; }
    const t0 = performance.now();
    (function f(t) { const k = Math.min(1, (t - t0) / 500), e = 1 - Math.pow(1 - k, 3); price.textContent = won(Math.round((from + (to - from) * e) / 100) * 100); if (k < 1) requestAnimationFrame(f); })(t0);
  }
  const unit = () => +$('input[name=size]:checked').value;
  const upd = () => { qEl.textContent = qty; roll(unit() * qty); };
  $$('input[name=size]').forEach(r => r.addEventListener('change', upd));
  $('#qMinus').addEventListener('click', () => { if (qty > 1) { qty--; upd(); } });
  $('#qPlus').addEventListener('click', () => { if (qty < 9) { qty++; upd(); } });
  $('#buyForm').addEventListener('submit', e => {
    e.preventDefault();
    const sz = $('input[name=size]:checked').parentElement.textContent.trim(), g = $('input[name=grind]:checked').value;
    addCart(qty, `Guji Hambela ${sz} (${g})`);
  });

  /* roasted by hand stage */
  const stage = $$('#stage .ph'), thumbs = $$('.thumbs button');
  thumbs.forEach(b => b.addEventListener('click', () => {
    const on = b.getAttribute('aria-pressed') !== 'true', k = on ? b.dataset.k : 'pour';
    thumbs.forEach(x => x.setAttribute('aria-pressed', x === b && on));
    stage.forEach(s => s.classList.toggle('on', s.dataset.k === k));
  }));

  /* carousel */
  const tr = $('#likeTrack'), prev = $('#lPrev'), next = $('#lNext'), prog = $('#prog');
  const step = () => { const c = tr.firstElementChild; return c ? c.getBoundingClientRect().width + 16 : 240; };
  function updC() {
    const max = tr.scrollWidth - tr.clientWidth, p = max > 0 ? tr.scrollLeft / max : 0;
    prev.disabled = tr.scrollLeft < 4; next.disabled = tr.scrollLeft > max - 4;
    const w = Math.max(.15, tr.clientWidth / tr.scrollWidth); prog.style.width = w * 100 + '%';
    prog.style.transform = `translateX(${p * (1 / w - 1) * 100}%)`;
  }
  prev.addEventListener('click', () => tr.scrollBy({ left: -step() * 2, behavior: 'smooth' }));
  next.addEventListener('click', () => tr.scrollBy({ left: step() * 2, behavior: 'smooth' }));
  tr.addEventListener('scroll', () => requestAnimationFrame(updC), { passive: true });
  new ResizeObserver(updC).observe(tr);
  let down = false, sx = 0, sl = 0, moved = false;
  tr.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.clientX; sl = tr.scrollLeft; });
  addEventListener('pointermove', e => { if (!down) return; const dx = e.clientX - sx; if (!moved && Math.abs(dx) > 5) { moved = true; tr.classList.add('drag'); } if (moved) tr.scrollLeft = sl - dx; });
  addEventListener('pointerup', () => { if (!down) return; down = false; if (moved) { tr.classList.remove('drag'); setTimeout(() => moved = false, 0); } });
  tr.addEventListener('click', e => { if (moved) e.preventDefault(); }, true);

  /* order countdown to 14:00 local */
  const cd = $('#cd'), cdL = $('#cdLabel');
  function tickCd() {
    const n = new Date(), t = new Date(n); t.setHours(14, 0, 0, 0);
    let today = true; if (n >= t) { t.setDate(t.getDate() + 1); today = false; }
    const s = Math.floor((t - n) / 1000), p = v => String(v).padStart(2, '0');
    cdL.textContent = today ? '오늘 로스팅 마감까지' : '내일 로스팅 마감까지';
    cd.textContent = `${p(Math.floor(s / 3600))}:${p(Math.floor(s % 3600 / 60))}:${p(s % 60)}`;
  }
  tickCd(); setInterval(tickCd, 1000);

  /* newsletter */
  const nl = $('#nl'), em = $('#nlEmail'), msg = $('#nlMsg');
  nl.addEventListener('submit', e => {
    e.preventDefault();
    const box = em.parentElement;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em.value.trim())) {
      box.classList.remove('err'); void box.offsetWidth; box.classList.add('err');
      msg.className = 'msg err'; msg.textContent = '이메일 주소를 다시 확인해 주세요.'; em.focus(); return;
    }
    box.classList.remove('err'); msg.className = 'msg'; msg.textContent = '구독해 주셔서 감사해요. 첫 주문 10% 쿠폰을 메일로 보내드렸어요.'; em.value = '';
  });
  em.addEventListener('input', () => { em.parentElement.classList.remove('err'); if (msg.classList.contains('err')) msg.textContent = ''; });
})();
}
