// SiteA: 원본 HTML의 <script>. React 마운트 직후 init()으로 실행한다.
/* eslint-disable */
export function init() {
(() => {
  document.documentElement.classList.add('js');
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(pointer: fine)').matches;
  const ic = (n, c = '') => `<svg class="ic ${c}" aria-hidden="true"><use href="#i-${n}"/></svg>`;

  /* ---------- Prism visuals ---------- */
  const PRISM_INNER = '<span class="glow"></span><span class="beam b1"></span><span class="beam b2"></span><span class="beam b3"></span><span class="g2"></span><span class="g1"></span>';
  const SMUDGE_INNER = '<span class="glow"></span><span class="far fa1"></span><span class="far fa2"></span><span class="halo h1"></span><span class="halo h2"></span><span class="halo h3"></span><span class="beam b1"></span><span class="beam b2"></span><span class="beam b3"></span><span class="hot"></span><span class="g2"></span><span class="g1"></span>';
  const prismIO = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle('paused', !e.isIntersecting)));
  function setupPrisms(root = document) {
    $$('.prism', root).forEach(p => {
      if (p.dataset.ready) return;
      p.dataset.ready = '1';
      p.insertAdjacentHTML('afterbegin', p.classList.contains('smudge') ? SMUDGE_INNER : PRISM_INNER);
      const v = +(p.dataset.v || 0);
      p.style.setProperty('--hr', (v * 48) + 'deg');
      if (v % 2) p.classList.add('odd');
      if (p.classList.contains('anim')) prismIO.observe(p);
    });
  }
  setupPrisms();

  /* ---------- Toast ---------- */
  const toastEl = $('#toast'); let toastT;
  function toast(msg) { toastEl.textContent = msg; toastEl.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove('show'), 2600); }

  /* ---------- Count-up ---------- */
  const fmtNum = (n, comma) => comma ? n.toLocaleString('en-US') : String(n);
  const countIO = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    countIO.unobserve(e.target);
    if (reduce) return;
    const el = e.target, to = +el.dataset.to, suf = el.dataset.suffix || '', comma = !!el.dataset.comma, t0 = performance.now(), D = 1700;
    (function f(t) {
      const k = Math.min(1, (t - t0) / D), v = 1 - Math.pow(1 - k, 3);
      el.textContent = fmtNum(Math.round(to * v), comma) + suf;
      if (k < 1) requestAnimationFrame(f);
    })(t0);
  }), { threshold: .6 });
  $$('.count').forEach(el => countIO.observe(el));

  /* ---------- Scroll reveal ---------- */
  const rIO = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); rIO.unobserve(e.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  $$('[data-reveal],[data-stagger]').forEach(el => {
    if (el.hasAttribute('data-stagger')) [...el.children].forEach((c, i) => c.style.setProperty('--rd', (i * 90) + 'ms'));
    rIO.observe(el);
  });

  /* ---------- Header: scrolled / hide-on-scroll / progress / hero parallax ---------- */
  const nav = $('#nav'), bar = $('#progress i'), heroVis = $('.hero-visual');
  let lastY = scrollY, ticking = false, menuOpen = false;
  function onScroll() {
    const y = scrollY;
    nav.classList.toggle('scrolled', y > 40);
    if (y > 480 && y > lastY + 4 && !menuOpen) nav.classList.add('hide');
    else if (y < lastY - 4 || y < 480) nav.classList.remove('hide');
    lastY = y;
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    if (!reduce) heroVis.style.setProperty('--sy', Math.min(y, 1000));
    ticking = false;
  }
  addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
  onScroll();

  const hero = $('.hero'), hp = $('#heroPrism');
  if (!reduce && fine) {
    hero.addEventListener('pointermove', e => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      hp.style.setProperty('--px', (x * 30).toFixed(1) + 'px');
      hp.style.setProperty('--py', (y * 22).toFixed(1) + 'px');
    });
    hero.addEventListener('pointerleave', () => { hp.style.setProperty('--px', '0px'); hp.style.setProperty('--py', '0px'); });
  }

  /* ---------- Nav indicator + scrollspy ---------- */
  const links = $$('.links a'), ind = $('.links .ind'); let activeLink = null;
  function moveInd(a) {
    if (!a) { ind.style.opacity = 0; return; }
    ind.style.opacity = 1; ind.style.width = a.offsetWidth + 'px'; ind.style.transform = `translateX(${a.offsetLeft}px)`;
  }
  links.forEach(a => a.addEventListener('mouseenter', () => moveInd(a)));
  $('.links').addEventListener('mouseleave', () => moveInd(activeLink));
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    activeLink = links.find(l => l.getAttribute('href') === '#' + e.target.id) || null;
    links.forEach(l => l.classList.toggle('on', l === activeLink));
    moveInd(activeLink);
  }), { rootMargin: '-45% 0px -50% 0px' });
  ['top', 'listings', 'guide', 'reviews', 'story', 'journal', 'services', 'newsletter'].forEach(id => spy.observe(document.getElementById(id)));

  /* ---------- Mobile menu ---------- */
  const mm = $('#mmenu'), menuBtn = $('#menuBtn');
  function openMenu() {
    mm.hidden = false; void mm.offsetWidth; mm.classList.add('open'); menuOpen = true;
    document.body.style.overflow = 'hidden'; menuBtn.setAttribute('aria-expanded', 'true'); $('#menuClose').focus();
  }
  function closeMenu() {
    mm.classList.remove('open'); menuOpen = false; document.body.style.overflow = '';
    menuBtn.setAttribute('aria-expanded', 'false'); setTimeout(() => { if (!menuOpen) mm.hidden = true; }, 380);
  }
  menuBtn.addEventListener('click', openMenu);
  $('#menuClose').addEventListener('click', closeMenu);
  $$('a', mm).forEach(a => a.addEventListener('click', closeMenu));
  addEventListener('keydown', e => { if (e.key === 'Escape' && menuOpen) { closeMenu(); menuBtn.focus(); } });

  /* ---------- Carousel factory (arrows, dots, mouse drag) ---------- */
  function makeCarousel(track, prev, next, dotsEl) {
    const gap = () => parseFloat(getComputedStyle(track).columnGap) || 24;
    const step = () => { const c = track.firstElementChild; return c ? c.getBoundingClientRect().width + gap() : 1; };
    const maxScroll = () => track.scrollWidth - track.clientWidth;
    function update() {
      const max = maxScroll(), sl = track.scrollLeft;
      prev.disabled = sl <= 4; next.disabled = sl >= max - 4;
      prev.classList.toggle('on', !prev.disabled); next.classList.toggle('on', !next.disabled);
      if (dotsEl) { const idx = Math.round(sl / step()); $$('button', dotsEl).forEach((d, i) => d.classList.toggle('on', i === idx)); }
    }
    function buildDots() {
      if (!dotsEl) return update();
      const max = maxScroll(), n = max <= 2 ? 1 : Math.round(max / step()) + 1;
      dotsEl.innerHTML = Array.from({ length: n }, (_, i) => `<button type="button" aria-label="Go to slide ${i + 1}"></button>`).join('');
      dotsEl.hidden = n < 2;
      $$('button', dotsEl).forEach((d, i) => d.addEventListener('click', () => track.scrollTo({ left: i * step(), behavior: 'smooth' })));
      update();
    }
    prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
    next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
    track.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
    new ResizeObserver(buildDots).observe(track);
    // mouse drag
    let down = false, sx = 0, sl = 0, moved = false;
    track.addEventListener('pointerdown', e => {
      if (e.pointerType !== 'mouse' || e.button !== 0 || maxScroll() <= 2) return;
      down = true; moved = false; sx = e.clientX; sl = track.scrollLeft;
    });
    addEventListener('pointermove', e => {
      if (!down) return;
      const dx = e.clientX - sx;
      if (!moved && Math.abs(dx) > 5) { moved = true; track.classList.add('dragging'); }
      if (moved) track.scrollLeft = sl - dx;
    });
    addEventListener('pointerup', () => {
      if (!down) return; down = false;
      if (moved) {
        track.classList.remove('dragging');
        const s = step(); track.scrollTo({ left: Math.round(track.scrollLeft / s) * s, behavior: 'smooth' });
        setTimeout(() => { moved = false; }, 0);
      }
    });
    track.addEventListener('click', e => { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
    return { refresh: buildDots };
  }

  /* ---------- Listings ---------- */
  const L = {
    apartment: [
      { t: 'Massive Royal Mansion In Aso Rock Asokoro', d: 'A palatial residence boasting 12 bedrooms, private cinema and swimming pool.', p: 133500, m: [['bed', '12 Beds'], ['bath', '9 Baths'], ['area', '1,240 m²']], tag: 'For Sale', v: 0 },
      { t: 'Verd Residence', d: 'A modern villa wrapped in greenery with 6 bedrooms and a rooftop terrace.', p: 200000, m: [['bed', '6 Beds'], ['bath', '5 Baths'], ['area', '680 m²']], tag: 'New', v: 1, dark: true },
      { t: 'Igbinidion Estate', d: 'Waterfront living with 8 bedrooms, a private dock and an infinity pool.', p: 170500, m: [['bed', '8 Beds'], ['bath', '7 Baths'], ['area', '920 m²']], tag: 'Featured', v: 2 },
      { t: 'Maitama Sky Loft', d: 'A double-height penthouse with city views, smart lighting and a private lift.', p: 148000, m: [['bed', '3 Beds'], ['bath', '3 Baths'], ['area', '310 m²']], tag: 'For Rent', v: 3 },
      { t: 'Lekki Garden Suites', d: 'Family apartments around a shared courtyard garden, minutes from the beach.', p: 96500, m: [['bed', '4 Beds'], ['bath', '3 Baths'], ['area', '240 m²']], tag: 'New', v: 4, dark: true }
    ],
    office: [
      { t: 'Wuse Business Tower', d: 'Grade-A open-plan floors with 24/7 power, fibre internet and secure parking.', p: 310000, m: [['brief', '40 Desks'], ['car', '12 Bays'], ['area', '1,800 m²']], tag: 'For Lease', v: 1, dark: true },
      { t: 'Victoria Island Studio Offices', d: 'Creative studio floors with exposed concrete, natural light and a rooftop lounge.', p: 185000, m: [['brief', '24 Desks'], ['car', '6 Bays'], ['area', '760 m²']], tag: 'New', v: 2 },
      { t: 'Ikeja Tech Hub', d: 'Flexible suites for growing teams, with meeting pods and an on-site café.', p: 142000, m: [['brief', '18 Desks'], ['car', '4 Bays'], ['area', '520 m²']], tag: 'Featured', v: 3 },
      { t: 'Central Area Corporate Suite', d: 'A fully fitted executive floor overlooking the National Mosque.', p: 268000, m: [['brief', '32 Desks'], ['car', '10 Bays'], ['area', '1,350 m²']], tag: 'For Sale', v: 4 }
    ],
    warehouse: [
      { t: 'Apapa Logistics Park', d: 'Port-side storage with cross-docking, 24-hour security and truck staging.', p: 420000, m: [['truck', '6 Docks'], ['height', '12 m Clear'], ['area', '5,400 m²']], tag: 'For Lease', v: 0 },
      { t: 'Kubwa Distribution Centre', d: 'A modern shed on the expressway with racking ready for e-commerce fulfilment.', p: 275000, m: [['truck', '4 Docks'], ['height', '10 m Clear'], ['area', '3,200 m²']], tag: 'New', v: 3, dark: true },
      { t: 'Agbara Cold Storage', d: 'Temperature-controlled chambers with backup generation and a loading canopy.', p: 360000, m: [['truck', '3 Docks'], ['height', '9 m Clear'], ['area', '2,600 m²']], tag: 'Featured', v: 2 },
      { t: 'Onitsha Trade Depot', d: 'A secure yard and depot near the main market, with an office mezzanine.', p: 198000, m: [['truck', '2 Docks'], ['height', '8 m Clear'], ['area', '1,900 m²']], tag: 'For Sale', v: 1 }
    ]
  };
  const money = n => '$ ' + n.toLocaleString('en-US');
  const track = $('#listTrack'), seeAll = $('#seeAll');
  let curTab = 'apartment';
  const cardHTML = (h, i) => `<article class="pcard" style="--i:${i}">
      <div class="pmedia"><div class="prism ${h.dark ? '' : 'light'}" data-v="${h.v}"></div><span class="tag">${h.tag}</span>
        <button class="fav" type="button" aria-pressed="false" aria-label="Save ${h.t}" data-i="${i}">${ic('heart')}</button></div>
      <div class="pbody"><h3>${h.t}</h3><p>${h.d}</p>
        <ul class="meta">${h.m.map(([k, t]) => `<li>${ic(k)}${t}</li>`).join('')}</ul>
        <div class="pfoot"><div class="price"><small>Price</small><strong>${money(h.p)}</strong></div>
          <button class="btn btn-dark btn-sm view" type="button" data-i="${i}">View ${ic('aur', 'diag')}</button></div></div>
    </article>`;
  const listCar = makeCarousel(track, $('#listPrev'), $('#listNext'), $('#listDots'));
  const favs = new Set();
  function renderList(tab, animate) {
    curTab = tab;
    track.innerHTML = L[tab].map(cardHTML).join('');
    setupPrisms(track);
    $$('.fav', track).forEach(b => b.setAttribute('aria-pressed', favs.has(tab + b.dataset.i)));
    track.scrollLeft = 0;
    track.classList.remove('expanded');
    seeAll.firstChild.textContent = 'See All Listings ';
    seeAll.hidden = L[tab].length <= 3;
    if (animate && !reduce) { track.classList.add('enter'); setTimeout(() => track.classList.remove('enter'), 1100); }
    listCar.refresh();
  }
  renderList('apartment', false);

  const tabBtns = $$('#tabs button'), tabInd = $('.tab-ind');
  function placeTabInd() { const b = tabBtns.find(x => x.getAttribute('aria-selected') === 'true'); tabInd.style.width = b.offsetWidth + 'px'; tabInd.style.transform = `translateX(${b.offsetLeft - 4}px)`; tabInd.style.left = '4px'; }
  function selectTab(b, focus) {
    if (b.getAttribute('aria-selected') === 'true') return;
    tabBtns.forEach(x => { const on = x === b; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; });
    if (focus) b.focus();
    placeTabInd();
    if (reduce) return renderList(b.dataset.tab, false);
    track.classList.add('leave');
    setTimeout(() => { track.classList.remove('leave'); renderList(b.dataset.tab, true); }, 220);
  }
  tabBtns.forEach((b, i) => {
    b.addEventListener('click', () => selectTab(b));
    b.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault(); const n = tabBtns[(i + (e.key === 'ArrowRight' ? 1 : -1) + tabBtns.length) % tabBtns.length]; selectTab(n, true);
      }
    });
  });
  placeTabInd();
  document.fonts && document.fonts.ready.then(placeTabInd);
  addEventListener('resize', () => { placeTabInd(); moveInd(activeLink); });

  seeAll.addEventListener('click', () => {
    const ex = track.classList.toggle('expanded');
    seeAll.firstChild.textContent = ex ? 'Show Fewer ' : 'See All Listings ';
    if (ex && !reduce) $$('.pcard', track).slice(3).forEach((c, k) => { c.style.animation = 'none'; void c.offsetWidth; c.style.animation = `rise .7s var(--ease) ${k * 80}ms both`; });
  });

  /* favourites + detail dialog */
  const dlg = $('#detail');
  track.addEventListener('click', e => {
    const fav = e.target.closest('.fav');
    if (fav) {
      const key = curTab + fav.dataset.i, h = L[curTab][fav.dataset.i];
      const on = !favs.has(key); on ? favs.add(key) : favs.delete(key);
      fav.setAttribute('aria-pressed', on);
      toast(on ? `Saved ${h.t} to favourites` : `Removed ${h.t} from favourites`);
      return;
    }
    const view = e.target.closest('.view');
    if (view) openDetail(L[curTab][view.dataset.i]);
  });
  function openDetail(h) {
    $('#dMedia').innerHTML = `<div class="prism anim ${h.dark ? '' : 'light'}" data-v="${h.v}"></div><span class="tag">${h.tag}</span>`;
    setupPrisms($('#dMedia'));
    $('#dTitle').textContent = h.t; $('#dDesc').textContent = h.d;
    $('#dMeta').innerHTML = h.m.map(([k, t]) => `<li>${ic(k)}${t}</li>`).join('');
    $('#dPrice').textContent = money(h.p);
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
  }
  const closeDlg = () => dlg.close ? dlg.close() : dlg.removeAttribute('open');
  $('#dClose').addEventListener('click', closeDlg);
  $('#dBack').addEventListener('click', closeDlg);
  $('#dAgent').addEventListener('click', closeDlg);
  dlg.addEventListener('click', e => { if (e.target === dlg) closeDlg(); });

  /* ---------- Journal carousel ---------- */
  makeCarousel($('#blogTrack'), $('#blogPrev'), $('#blogNext'), null).refresh();

  /* ---------- Guide timeline: auto-progress ---------- */
  const steps = $$('.step'), tlEl = $('#timeline');
  let cur = 0, tlTimer = null, tlHover = false;
  function setStep(i) {
    cur = i;
    steps.forEach((s, k) => {
      s.classList.toggle('lit', k <= i); s.classList.toggle('filled', k < i); s.classList.toggle('current', k === i);
      s.setAttribute('aria-current', k === i ? 'step' : 'false');
    });
  }
  setStep(0);
  const startTl = () => { clearInterval(tlTimer); if (!reduce) tlTimer = setInterval(() => { if (!tlHover) setStep((cur + 1) % steps.length); }, 2600); };
  new IntersectionObserver(es => es.forEach(e => e.isIntersecting ? startTl() : clearInterval(tlTimer)), { threshold: .3 }).observe(tlEl);
  tlEl.addEventListener('mouseenter', () => tlHover = true);
  tlEl.addEventListener('mouseleave', () => tlHover = false);
  steps.forEach((s, k) => {
    s.addEventListener('click', () => { setStep(k); startTl(); });
    s.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setStep(k); startTl(); } });
  });

  /* ---------- Testimonials ---------- */
  const Q = [
    { n: 'Bashir Abdullahi', l: 'Lagos, Nigeria', q: 'I wasted months searching until I found this platform. Within days, I found my perfect home, connected with an agent, and closed the deal fast.' },
    { n: 'Amara Okafor', l: 'Abuja, Nigeria', q: 'The 3D tours saved me three trips across town. I shortlisted two homes from my sofa and signed for one within a week.' },
    { n: 'Daniel Mensah', l: 'Accra, Ghana', q: 'Our agent answered every question the same day. Moving our family felt organised instead of overwhelming.' },
    { n: 'Zainab Bello', l: 'Kano, Nigeria', q: 'I listed my warehouse on a Monday and had three serious offers by Friday. The pricing insights were spot on.' },
    { n: 'Chidi Eze', l: 'Port Harcourt, Nigeria', q: 'Transparent prices, verified listings and no surprise fees. It is the first property search I have actually enjoyed.' }
  ];
  const quote = $('#quote'), stack = $('#stack'), qBar = $('#qBar');
  let qi = 0;
  $('#qTotal').textContent = String(Q.length).padStart(2, '0');
  function showQ(i) {
    qi = (i + Q.length) % Q.length;
    const d = Q[qi];
    quote.classList.add('swap');
    setTimeout(() => {
      $('#qName').textContent = d.n; $('#qLoc').textContent = d.l; $('#qText').textContent = d.q;
      $('#qIdx').textContent = String(qi + 1).padStart(2, '0');
      $('.av', quote).style.filter = `hue-rotate(${qi * 64}deg)`;
      quote.classList.remove('swap');
    }, 260);
    $$('.prism', stack).forEach((p, k) => p.style.setProperty('--hr', (qi * 70 + (k ? 144 : 48)) + 'deg'));
    stack.classList.remove('shuffle'); void stack.offsetWidth; stack.classList.add('shuffle');
    qBar.style.animation = 'none'; void qBar.offsetWidth; qBar.style.animation = '';
  }
  $('#qPrev').addEventListener('click', () => showQ(qi - 1));
  $('#qNext').addEventListener('click', () => showQ(qi + 1));
  $('#qMore').addEventListener('click', () => showQ(qi + 1));
  qBar.addEventListener('animationend', () => { if (!reduce) showQ(qi + 1); });
  new IntersectionObserver(es => es.forEach(e => quote.classList.toggle('idle', !e.isIntersecting))).observe(quote);
  let tx = null;
  quote.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') tx = e.clientX; });
  quote.addEventListener('pointerup', e => { if (tx === null) return; const dx = e.clientX - tx; tx = null; if (Math.abs(dx) > 50) showQ(qi + (dx < 0 ? 1 : -1)); });

  /* ---------- Services: active card follows pointer/focus ---------- */
  const svcs = $$('.svc');
  const activate = c => svcs.forEach(x => x.classList.toggle('active', x === c));
  svcs.forEach(c => {
    c.addEventListener('pointerenter', () => activate(c));
    c.addEventListener('focusin', () => activate(c));
    c.addEventListener('click', () => activate(c));
    c.addEventListener('pointermove', e => { const r = c.getBoundingClientRect(); c.style.setProperty('--x', (e.clientX - r.left) + 'px'); c.style.setProperty('--y', (e.clientY - r.top) + 'px'); });
  });

  /* ---------- Newsletter ---------- */
  const form = $('#subForm'), email = $('#email'), note = $('#subNote'), subBtn = $('#subBtn');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const v = email.value.trim();
    form.classList.remove('err'); note.classList.remove('err', 'ok');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
      void form.offsetWidth; form.classList.add('err'); note.classList.add('err');
      note.textContent = v ? 'That email looks incomplete. Use a format like name@example.com.' : 'Enter your email address to subscribe.';
      email.focus(); return;
    }
    note.classList.add('ok');
    note.textContent = `Thanks! ${v} is on the list for new listings and market insights.`;
    subBtn.innerHTML = `${ic('check')} Subscribed`; subBtn.disabled = true; email.disabled = true;
  });
  email.addEventListener('input', () => { if (form.classList.contains('err')) { form.classList.remove('err'); note.classList.remove('err'); note.textContent = 'No spam. Unsubscribe anytime.'; } });

  /* ---------- Footer wordmark light follows pointer ---------- */
  const wm = $('#wordmark');
  if (fine && !reduce) $('#footer').addEventListener('pointermove', e => {
    const r = wm.getBoundingClientRect(); wm.style.setProperty('--wx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
  });
})();
}
