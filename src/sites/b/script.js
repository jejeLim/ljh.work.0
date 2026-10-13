// SiteB: 원본 HTML의 <script>. React 마운트 직후 init()으로 실행한다.
/* eslint-disable */
export function init() {
(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(pointer: fine)').matches;
  const icon = (n, c = '') => `<svg class="ic ${c}" aria-hidden="true"><use href="#i-${n}"/></svg>`;

  /* ---------- Toast ---------- */
  const toastEl = $('#toast'); let toastT;
  function toast(msg) {
    toastEl.textContent = msg; toastEl.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove('show'), 2800);
  }

  /* ---------- Photo visuals: pause zoom when off-screen ---------- */
  const visIO = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle('paused', !e.isIntersecting)));
  const setupVis = (root = document) => $$('.vis', root).forEach(el => visIO.observe(el));
  setupVis();

  /* ---------- Classes (data + carousel) ---------- */
  const CLASSES = [
    { ko: '컴포트', en: 'COMFORT', lv: '승용', tm: '16-18"', d: '조용하고 부드러운 승차감, 출퇴근과 장거리에 가장 무난한 선택이에요.', ph: 'product' },
    { ko: '퍼포먼스', en: 'PERFORMANCE', lv: '고성능', tm: '18-20"', d: '높은 접지력과 정확한 핸들링으로 스포티한 주행을 원할 때 좋아요.', ph: 'perf' },
    { ko: 'SUV 올터레인', en: 'SUV · A/T', lv: 'SUV', tm: '17-20"', d: '포장도로와 비포장도로를 모두 달리는 SUV를 위한 튼튼한 타이어예요.', ph: 'suv' },
    { ko: '전기차 전용', en: 'EV', lv: '전기차', tm: '18-21"', d: '무거운 차체를 버티고 소음과 구름저항을 줄여 주행거리를 늘려줘요.', ph: 'wet' },
    { ko: '사계절', en: 'ALL SEASON', lv: '승용', tm: '16-19"', d: '봄부터 겨울까지 교체 없이, 가벼운 눈길까지 대응하는 실속형이에요.', ph: 'mechanic' },
    { ko: '윈터', en: 'WINTER', lv: '겨울', tm: '16-19"', d: '영하의 기온과 눈길 · 빙판길에서도 안정적으로 멈추고 출발해요.', ph: 'winter' },
    { ko: '런플랫', en: 'RUNFLAT', lv: '수입차', tm: '17-20"', d: '펑크가 나도 일정 거리를 달릴 수 있어 수입차에 많이 쓰여요.', ph: 'shop' }
  ];
  
  const rots = [-3, 2, -2, 3, -2.5, 2, -3];
  const track = $('#classTrack');
  track.innerHTML = CLASSES.map((c, i) => `
    <article class="ccard" style="--r:${rots[i]}deg">
      <div class="vis ph-${c.ph}" role="img" aria-label="${c.ko} 타이어"></div>
      <div class="cbody">
        <p class="cmeta"><b>${String(i + 1).padStart(2, '0')}</b><span>${c.en}</span></p>
        <h3>${c.ko}</h3>
        <p class="tags"><span class="lv">${c.lv}</span><span class="tm">${c.tm}</span></p>
        <p>${c.d}</p>
        <a class="more" href="#consult" data-cls="${c.ko}">이 타이어 상담받기 ${icon('ar')}</a>
      </div>
    </article>`).join('');
  setupVis(track);

  function makeCarousel(tr, prev, next) {
    const step = () => { const c = tr.firstElementChild; return c ? c.getBoundingClientRect().width + (parseFloat(getComputedStyle(tr).columnGap) || 24) : 300; };
    const max = () => tr.scrollWidth - tr.clientWidth;
    function update() {
      prev.disabled = tr.scrollLeft <= 4; next.disabled = tr.scrollLeft >= max() - 4;
      prev.classList.toggle('on', !prev.disabled); next.classList.toggle('on', !next.disabled);
    }
    prev.addEventListener('click', () => tr.scrollBy({ left: -step(), behavior: 'smooth' }));
    next.addEventListener('click', () => tr.scrollBy({ left: step(), behavior: 'smooth' }));
    tr.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
    new ResizeObserver(update).observe(tr);
    let down = false, sx = 0, sl = 0, moved = false;
    tr.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse' || e.button !== 0) return; down = true; moved = false; sx = e.clientX; sl = tr.scrollLeft; });
    addEventListener('pointermove', e => {
      if (!down) return;
      const dx = e.clientX - sx;
      if (!moved && Math.abs(dx) > 5) { moved = true; tr.classList.add('dragging'); }
      if (moved) tr.scrollLeft = sl - dx;
    });
    addEventListener('pointerup', () => {
      if (!down) return; down = false;
      if (moved) { tr.classList.remove('dragging'); const s = step(); tr.scrollTo({ left: Math.round(tr.scrollLeft / s) * s, behavior: 'smooth' }); setTimeout(() => { moved = false; }, 0); }
    });
    tr.addEventListener('click', e => { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
    update();
  }
  makeCarousel(track, $('#clsPrev'), $('#clsNext'));

  /* ---------- Reveal, highlight swipe, lines ---------- */
  const revealIO = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in'); revealIO.unobserve(e.target);
  }), { rootMargin: '0px 0px -10% 0px' });
  $$('[data-stagger]').forEach(el => [...el.children].forEach((c, i) => c.style.setProperty('--rd', i * 90 + 'ms')));
  $$('#strips .strip').forEach((s, i) => s.style.setProperty('--i', i));
  $$('[data-reveal],[data-stagger],.vline,#strips,#stamp,#venn').forEach(el => revealIO.observe(el));

  const markIO = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    setTimeout(() => e.target.classList.add('on'), reduce ? 0 : 350);
    markIO.unobserve(e.target);
  }), { rootMargin: '0px 0px -15% 0px' });
  $$('mark').forEach(m => m.closest('.hero') ? setTimeout(() => m.classList.add('on'), reduce ? 0 : 900) : markIO.observe(m));

  /* ---------- About statement: words light up while scrolling ---------- */
  const st = $('#statement');
  (function splitWords(node) {
    [...node.childNodes].forEach(ch => {
      if (ch.nodeType === 3) {
        const frag = document.createDocumentFragment();
        ch.textContent.split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) frag.append(part);
          else { const s = document.createElement('span'); s.className = 'w'; s.textContent = part; frag.append(s); }
        });
        ch.replaceWith(frag);
      } else if (ch.nodeType === 1 && ch.tagName !== 'BR') splitWords(ch);
    });
  })(st);
  const words = $$('.w', st);
  function lightWords() {
    if (reduce) { words.forEach(w => w.classList.add('lit')); return; }
    const r = st.getBoundingClientRect(), vh = innerHeight;
    const p = Math.min(1, Math.max(0, (vh * .85 - r.top) / (r.height + vh * .3)));
    const n = Math.round(p * words.length);
    words.forEach((w, i) => w.classList.toggle('lit', i < n));
  }

  /* ---------- Header: hide on scroll, progress, scrollspy ---------- */
  const hd = $('#hd'), bar = $('#progress i');
  let lastY = scrollY, ticking = false, menuOpen = false;
  function onScroll() {
    const y = scrollY;
    if (y > 400 && y > lastY + 4 && !menuOpen) hd.classList.add('hide');
    else if (y < lastY - 4 || y < 400) hd.classList.remove('hide');
    lastY = y;
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    lightWords();
    ticking = false;
  }
  addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
  addEventListener('resize', lightWords);
  onScroll();

  const navLinks = $$('.hd-nav a');
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    navLinks.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  ['top', 'about', 'classes', 'consult', 'price', 'schedule', 'cta'].forEach(id => spy.observe(document.getElementById(id)));

  /* ---------- Mobile menu ---------- */
  const mm = $('#mmenu'), menuBtn = $('#menuBtn');
  function openMenu() {
    mm.hidden = false; void mm.offsetWidth; mm.classList.add('open'); menuOpen = true;
    document.body.style.overflow = 'hidden'; menuBtn.setAttribute('aria-expanded', 'true'); $('#menuClose').focus();
  }
  function closeMenu() {
    mm.classList.remove('open'); menuOpen = false; document.body.style.overflow = '';
    menuBtn.setAttribute('aria-expanded', 'false');
    setTimeout(() => { if (!menuOpen) mm.hidden = true; }, 360);
  }
  menuBtn.addEventListener('click', openMenu);
  $('#menuClose').addEventListener('click', closeMenu);
  $$('a', mm).forEach(a => a.addEventListener('click', closeMenu));
  addEventListener('keydown', e => { if (e.key === 'Escape' && menuOpen) { closeMenu(); menuBtn.focus(); } });

  /* ---------- Consult form ---------- */
  const form = $('#form'), fName = $('#fName'), fPhone = $('#fPhone'), fAgree = $('#fAgree'), fMsg = $('#fMsg');
  const chipInputs = $$('#chips input');
  const unsure = chipInputs.find(i => i.value === '잘 모르겠어요');
  chipInputs.forEach(inp => inp.addEventListener('change', () => {
    if (inp === unsure && inp.checked) chipInputs.forEach(o => { if (o !== unsure) o.checked = false; });
    else if (inp.checked) unsure.checked = false;
    if (!chipInputs.some(o => o.checked)) unsure.checked = true;
    const sp = inp.nextElementSibling; sp.classList.remove('pop'); void sp.offsetWidth; sp.classList.add('pop');
  }));
  function pickClass(name) {
    chipInputs.forEach(o => { o.checked = o.value === name; });
    if (!chipInputs.some(o => o.checked)) unsure.checked = true;
  }
  fPhone.addEventListener('input', () => {
    const d = fPhone.value.replace(/\D/g, '').slice(0, 11);
    fPhone.value = d.length < 4 ? d : d.length < 8 ? `${d.slice(0, 3)}-${d.slice(3)}` : `${d.slice(0, 3)}-${d.slice(3, d.length - 4)}-${d.slice(-4)}`;
  });
  function fail(el, msg) {
    const box = el.closest('.field') || el.closest('.agree');
    box.classList.remove('err'); void box.offsetWidth; box.classList.add('err');
    fMsg.className = 'f-msg err'; fMsg.textContent = msg;
    el.focus();
  }
  [fName, fPhone, fAgree].forEach(el => el.addEventListener('input', () => {
    (el.closest('.field') || el.closest('.agree')).classList.remove('err');
    if (fMsg.classList.contains('err')) { fMsg.className = 'f-msg'; fMsg.textContent = ''; }
  }));
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = fName.value.trim(), phone = fPhone.value.trim();
    if (name.length < 2) return fail(fName, '이름을 2글자 이상 입력해 주세요.');
    if (!/^01[016789]-\d{3,4}-\d{4}$/.test(phone)) return fail(fPhone, '연락처를 010-0000-0000 형식으로 입력해 주세요.');
    if (!fAgree.checked) return fail(fAgree, '개인정보 수집 및 이용에 동의해 주세요.');
    const picks = chipInputs.filter(i => i.checked).map(i => i.value).join(', ');
    const car = ($('#fCar').value || '').trim();
    form.classList.add('done');
    const btn = $('#fSubmit'); btn.disabled = true; btn.innerHTML = `${icon('check')} 신청서 작성 완료`;
    fMsg.className = 'f-msg ok';
    fMsg.textContent = `${name}님, 상담 신청이 완료되었어요.${car ? ' 차종: ' + car + ' ·' : ''} 관심 타이어: ${picks}`;
  });

  // "이 타이어 상담받기" + schedule "예약" → preselect class in the form
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-cls],[data-svc]');
    if (!a) return;
    if (a.dataset.cls) pickClass(a.dataset.cls);
    toast(a.dataset.svc ? `${a.dataset.svc} 예약 상담으로 이동해요.` : `상담 폼에 '${a.dataset.cls}'을(를) 선택해 두었어요.`);
  });

  /* ---------- Belief Venn ---------- */
  const vcs = $$('#venn .vc'); let vi = 0, vHover = false, vTimer;
  const setV = i => { vi = i; vcs.forEach((c, k) => { c.classList.toggle('on', k === i); c.setAttribute('aria-pressed', k === i); }); };
  vcs.forEach((c, i) => {
    c.addEventListener('mouseenter', () => { vHover = true; setV(i); });
    c.addEventListener('mouseleave', () => { vHover = false; });
    c.addEventListener('focus', () => setV(i));
    c.addEventListener('click', () => setV(i));
  });
  setV(0);
  new IntersectionObserver(es => es.forEach(e => {
    clearInterval(vTimer);
    if (e.isIntersecting && !reduce) vTimer = setInterval(() => { if (!vHover) setV((vi + 1) % vcs.length); }, 2600);
  }), { threshold: .3 }).observe($('#venn'));

  /* ---------- Pricing toggle ---------- */
  const won = n => '₩' + Math.round(n).toLocaleString('ko-KR');
  const bestPrice = $('#bestPrice'), bestOrig = $('#bestOrig'), bestNote = $('#bestNote');
  const TERMS = { 1: { p: 299000, o: 360000, n: '가장 많이 선택해요' }, 3: { p: 590000, o: 690000, n: '수입 프리미엄 4본 기준' } };
  function rollTo(el, to) {
    const from = +el.dataset.v || to; el.dataset.v = to;
    if (reduce) { el.textContent = won(to); return; }
    const t0 = performance.now(), D = 600;
    (function f(t) {
      const k = Math.min(1, (t - t0) / D), e = 1 - Math.pow(1 - k, 3);
      el.textContent = won(from + (to - from) * e);
      if (k < 1) requestAnimationFrame(f);
    })(t0);
    el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash');
  }
  $$('.toggle button').forEach(b => b.addEventListener('click', () => {
    $$('.toggle button').forEach(x => x.setAttribute('aria-pressed', x === b));
    const t = TERMS[b.dataset.term];
    rollTo(bestPrice, t.p); bestOrig.textContent = won(t.o); bestNote.textContent = t.n;
  }));

  /* ---------- Schedule ---------- */
  const SV = {
    '타이어 교체': { en: 'TIRE CHANGE', tm: '30분' }, '휠 얼라인먼트': { en: 'ALIGNMENT', tm: '40분' },
    '무료 정밀 점검': { en: 'FREE CHECK', tm: '10분' }, '위치 교환': { en: 'ROTATION', tm: '20분' },
    '펑크 수리': { en: 'REPAIR', tm: '20분' }, '질소 충전': { en: 'NITROGEN', tm: '10분' }, '휠 밸런스': { en: 'BALANCING', tm: '20분' }
  };
  const T = (time, ko, ins) => ({ time, ko, ins });
  const SCHED = [
    [T('09:00', '타이어 교체', '김도윤'), T('10:30', '휠 얼라인먼트', '박준호'), T('13:00', '무료 정밀 점검', '이건우'), T('15:30', '위치 교환', '정민재'), T('18:00', '펑크 수리', '김도윤')],
    [T('09:30', '무료 정밀 점검', '이건우'), T('11:00', '타이어 교체', '박준호'), T('14:00', '휠 밸런스', '정민재'), T('16:30', '휠 얼라인먼트', '김도윤'), T('19:00', '타이어 교체', '이건우')],
    [T('09:00', '휠 얼라인먼트', '박준호'), T('10:30', '타이어 교체', '김도윤'), T('13:30', '질소 충전', '정민재'), T('15:00', '무료 정밀 점검', '이건우'), T('18:30', '위치 교환', '박준호')],
    [T('09:30', '타이어 교체', '정민재'), T('11:00', '펑크 수리', '이건우'), T('13:00', '휠 얼라인먼트', '김도윤'), T('16:00', '타이어 교체', '박준호'), T('19:00', '무료 정밀 점검', '정민재')],
    [T('09:00', '무료 정밀 점검', '김도윤'), T('10:30', '휠 밸런스', '박준호'), T('13:30', '타이어 교체', '이건우'), T('15:30', '휠 얼라인먼트', '정민재'), T('18:00', '타이어 교체', '김도윤')],
    [T('09:00', '타이어 교체', '박준호'), T('10:30', '무료 정밀 점검', '이건우'), T('13:00', '휠 얼라인먼트', '김도윤'), T('15:00', '위치 교환', '정민재')],
    []
  ];
  const DAYS = ['월', '화', '수', '목', '금', '토', '일'];
  const daysEl = $('#days'), slist = $('#slist');
  const today = (new Date().getDay() + 6) % 7;
  daysEl.innerHTML = DAYS.map((d, i) => `<button type="button" role="tab" id="day${i}" aria-controls="slist" aria-selected="false" tabindex="-1" class="${i > 4 ? 'we' : ''}">${d}${i === today ? '<span class="today">오늘</span>' : ''}</button>`).join('') + '<span class="day-ind" aria-hidden="true"></span>';
  const dayBtns = $$('button', daysEl), dayInd = $('.day-ind', daysEl);
  function renderDay(i, animate) {
    dayBtns.forEach((b, k) => { b.setAttribute('aria-selected', k === i); b.tabIndex = k === i ? 0 : -1; });
    dayInd.style.transform = `translateX(${dayBtns[i].offsetLeft - 5}px)`; dayInd.style.left = '5px';
    slist.setAttribute('aria-labelledby', 'day' + i);
    slist.innerHTML = SCHED[i].length ? SCHED[i].map((r, k) => {
      const c = SV[r.ko];
      return `<li class="srow" style="--i:${k}">
        <time>${r.time}</time>
        <div><h3>${r.ko}</h3><span class="en">${c.en}<span class="sr"> · </span></span></div>
        <span class="ins">${icon('user')}${r.ins}</span>
        <span class="lvl${r.ko === '무료 정밀 점검' ? ' hi' : ''}">${c.tm}</span>
        <a class="btn btn-k" href="#consult" data-svc="${r.ko}" aria-label="${DAYS[i]}요일 ${r.time} ${r.ko} 예약 상담">예약</a>
      </li>`;
    }).join('') : '<li class="s-empty">일요일은 휴무예요. 월요일 09:00부터 예약할 수 있어요.</li>';
    if (animate && !reduce) { slist.classList.remove('swap'); void slist.offsetWidth; slist.classList.add('swap'); }
  }
  dayBtns.forEach((b, i) => {
    b.addEventListener('click', () => renderDay(i, true));
    b.addEventListener('keydown', e => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const n = (i + (e.key === 'ArrowRight' ? 1 : -1) + 7) % 7;
      dayBtns[n].focus(); renderDay(n, true);
    });
  });
  renderDay(today, false);
  addEventListener('resize', () => { const i = dayBtns.findIndex(b => b.getAttribute('aria-selected') === 'true'); dayInd.style.transform = `translateX(${dayBtns[i].offsetLeft - 5}px)`; });
  document.fonts && document.fonts.ready.then(() => { const i = dayBtns.findIndex(b => b.getAttribute('aria-selected') === 'true'); dayInd.style.transform = `translateX(${dayBtns[i].offsetLeft - 5}px)`; });

  /* ---------- Back to top ---------- */
  const toTop = $('#toTop'), toTopBar = $('#toTopBar');
  function topUpdate() {
    const h = document.documentElement.scrollHeight - innerHeight, p = h > 0 ? scrollY / h : 0;
    toTop.classList.toggle('show', scrollY > innerHeight * .8);
    toTopBar.style.strokeDashoffset = (157 * (1 - p)).toFixed(1);
  }
  addEventListener('scroll', () => requestAnimationFrame(topUpdate), { passive: true });
  topUpdate();
  toTop.addEventListener('click', () => { scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); setTimeout(() => $('.logo').focus({ preventScroll: true }), reduce ? 0 : 700); });

  /* ---------- Footer wordmark light ---------- */
  const wm = $('.wordmark');
  if (fine && !reduce) $('#footer').addEventListener('pointermove', e => {
    const r = wm.getBoundingClientRect();
    wm.style.setProperty('--wx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
  });
})();
}
