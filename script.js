/* ===== CONFIGURAÇÃO (edite aqui) ===== */
const COMMISSIONS_OPEN = true;          // true = OPEN, false = CLOSED
const SLOTS = { taken: 3, total: 5 };   // "Vagas: 3/5"

// Preços. TODO: confirmar os valores em dólar (só anime/icon = US$10 é oficial).
const PRICES = {
  brl: { anime: { icon: 30, busto: 60, fullbody: 90 }, chibi: { icon: 20, busto: 40, fullbody: 60 } },
  usd: { anime: { icon: 10, busto: 20, fullbody: 30 }, chibi: { icon: 7, busto: 14, fullbody: 20 } } // TODO
};

// Portfólio — para adicionar uma arte, inclua uma linha aqui e coloque o arquivo em img/.
// style: 'anime' | 'chibi' · format: 'icon' | 'busto' | 'fullbody' · commission: true se for arte de cliente
// Se existir um .webp com o mesmo nome (obra.webp), ele é usado automaticamente.
const PORTFOLIO = [
  { file: 'placeholder-1.svg', style: 'anime', format: 'busto',    commission: true  }, // TODO: trocar pelas artes reais
  { file: 'placeholder-2.svg', style: 'chibi', format: 'icon',     commission: true  },
  { file: 'placeholder-3.svg', style: 'anime', format: 'fullbody', commission: false },
  { file: 'placeholder-4.svg', style: 'chibi', format: 'fullbody', commission: true  },
  { file: 'placeholder-5.svg', style: 'anime', format: 'icon',     commission: false },
  { file: 'placeholder-6.svg', style: 'chibi', format: 'busto',    commission: false },
  { file: 'placeholder-7.svg', style: 'anime', format: 'fullbody', commission: true  },
  { file: 'placeholder-8.svg', style: 'chibi', format: 'busto',    commission: true  }
];

/* ===== TRADUÇÕES ===== */
const I18N = {
  pt: {
    nav_portfolio: 'Portfólio', nav_commissions: 'Commissions', nav_how: 'Como pedir', nav_terms: 'Termos', nav_about: 'Sobre', nav_contact: 'Contato',
    hero_sub: 'ilustradora · anime, semirrealismo & chibi',
    btn_portfolio: 'Ver portfólio', btn_order: 'Fazer pedido',
    seal_open: 'COMMISSIONS OPEN ✦', seal_closed: 'COMMISSIONS CLOSED ✦', slots: 'Vagas',
    featured_cap: 'destaque ✦',
    portfolio_sub: 'um pouquinho do meu mundo',
    f_all: 'Todos', fmt_busto: 'Busto',
    badge_commission: 'Commission', want_one: 'Quero uma assim',
    pay_note: 'Pagamento apenas via Pix',
    addons_title: 'Adicionais',
    ad_scene: 'Cenário: +60% do valor.',
    ad_char: '+1 personagem: dobra o valor (ex.: {ex}).',
    ad_detail: 'A partir do busto: +20% se o personagem tiver detalhes em excesso.',
    price_icon: 'Icon', price_busto: 'Busto', price_fullbody: 'Fullbody',
    style_anime: 'Estilo Anime', style_chibi: 'Estilo Chibi',
    step1: 'Escolha o estilo e o formato.',
    step2: 'Mande sua referência pelo Instagram ou X.',
    step3: 'Pagamento: 50% para começar ou 100% adiantado.',
    step4: 'Esboço para aprovação, finalização e entrega.',
    process_title: 'Do esboço à arte final', process_sub: 'arraste para ver o processo', sketch: 'Esboço', final: 'Final',
    t_time_h: 'Prazo de entrega', t_time: 'De 2 a 14 dias.',
    t_pay_h: 'Pagamento', t_pay: '50% antes do início e o restante após a finalização, ou 100% adiantado.',
    t_ref_h: 'Reembolso', t_ref: 'Só antes de o esboço ser concluído. Após a aprovação do esboço, os 50% pagos não são reembolsados.',
    t_do_h: 'Faço', t_do: 'OCs, thumbnails, ships, pets.',
    t_dont_h: 'Não faço', t_dont: 'Furry, NSFW, mecha, fetiche.',
    t_client_h: 'O cliente não pode', t_client: 'Retirar a assinatura, revender a arte, usar a arte em IA.',
    testi_title: 'O que dizem os clientes',
    testi1: '“TODO: depoimento real do cliente 1.”', testi2: '“TODO: depoimento real do cliente 2.”', testi3: '“TODO: depoimento real do cliente 3.”',
    about_text: 'Oi, eu sou a Baiacuz! Desenho desde os 12 anos, inspirada pelo trabalho de outros artistas e pelas mídias que consumo. Trabalho com anime/semirrealismo e chibi, sempre buscando algo delicado e cheio de brilho.',
    q1: 'Qual o prazo de entrega?', a1: 'De 2 a 14 dias, dependendo do formato e da fila.',
    q2: 'Quais as formas de pagamento?', a2: 'Apenas via Pix. 50% para começar e o restante na finalização, ou 100% adiantado.',
    q3: 'Aceita OCs e ships?', a3: 'Sim! OCs, ships, pets e thumbnails.',
    q4: 'O que enviar de referência?', a4: 'Imagens do personagem (de frente e de costas, se possível), cores, acessórios e a pose/expressão desejada.',
    q5: 'Posso usar a arte em perfil e stream?', a5: 'Sim, com crédito. Revenda e uso em IA são proibidos.',
    q6: 'Posso usar a arte comercialmente?', a6: 'TODO: confirmar a política de uso comercial.',
    footer_rights: '© Baiacuz — todos os direitos reservados / no AI use'
  },
  en: {
    nav_portfolio: 'Portfolio', nav_commissions: 'Commissions', nav_how: 'How to order', nav_terms: 'Terms', nav_about: 'About', nav_contact: 'Contact',
    hero_sub: 'illustrator · anime, semi-realism & chibi',
    btn_portfolio: 'View portfolio', btn_order: 'Order now',
    seal_open: 'COMMISSIONS OPEN ✦', seal_closed: 'COMMISSIONS CLOSED ✦', slots: 'Slots',
    featured_cap: 'featured ✦',
    portfolio_sub: 'a little glimpse of my world',
    f_all: 'All', fmt_busto: 'Bust',
    badge_commission: 'Commission', want_one: 'I want one like this',
    pay_note: 'Payment via PayPal only',
    addons_title: 'Add-ons',
    ad_scene: 'Background: +60% of the price.',
    ad_char: '+1 character: doubles the price (e.g. {ex}).',
    ad_detail: 'From bust up: +20% if the character has excessive details.',
    price_icon: 'Icon', price_busto: 'Bust', price_fullbody: 'Fullbody',
    style_anime: 'Anime Style', style_chibi: 'Chibi Style',
    step1: 'Choose your style and format.',
    step2: 'Send your reference via Instagram or X.',
    step3: 'Payment: 50% to start or 100% upfront.',
    step4: 'Sketch for approval, finishing and delivery.',
    process_title: 'From sketch to final art', process_sub: 'drag to see the process', sketch: 'Sketch', final: 'Final',
    t_time_h: 'Delivery time', t_time: '2 to 14 days.',
    t_pay_h: 'Payment', t_pay: '50% before starting and the rest after completion, or 100% upfront.',
    t_ref_h: 'Refunds', t_ref: 'Only before the sketch is completed. Once the sketch is approved, the 50% paid is non-refundable.',
    t_do_h: 'I draw', t_do: 'OCs, thumbnails, ships, pets.',
    t_dont_h: "I don't draw", t_dont: 'Furry, NSFW, mecha, fetish.',
    t_client_h: 'The client may not', t_client: 'Remove the signature, resell the art, use the art for AI.',
    testi_title: 'What clients say',
    testi1: '“TODO: real client testimonial 1.”', testi2: '“TODO: real client testimonial 2.”', testi3: '“TODO: real client testimonial 3.”',
    about_text: "Hi, I'm Baiacuz! I've been drawing since I was 12, inspired by other artists' work and the media I consume. I do anime/semi-realism and chibi, always aiming for something delicate and sparkly.",
    q1: 'How long does it take?', a1: '2 to 14 days, depending on the format and the queue.',
    q2: 'Which payment methods?', a2: 'PayPal only. 50% to start and the rest on completion, or 100% upfront.',
    q3: 'Do you accept OCs and ships?', a3: 'Yes! OCs, ships, pets and thumbnails.',
    q4: 'What references should I send?', a4: 'Images of the character (front and back if possible), colors, accessories and the desired pose/expression.',
    q5: 'Can I use the art as an avatar or on stream?', a5: 'Yes, with credit. Reselling and AI use are prohibited.',
    q6: 'Can I use the art commercially?', a6: 'TODO: confirm the commercial use policy.',
    footer_rights: '© Baiacuz — all rights reserved / no AI use'
  }
};

/* ===== HELPERS ===== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
};
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover:hover) and (pointer:fine)').matches;
let lang = 'pt';
const t = k => I18N[lang][k] ?? k;

/* ===== LOADER (1ª visita, ≤1s) ===== */
(function loader() {
  const el = $('#loader');
  if (store.get('bz_seen')) return;
  store.set('bz_seen', '1');
  el.classList.add('show');
  const done = () => { el.classList.add('hide'); setTimeout(() => el.remove(), 600); };
  setTimeout(done, reduceMotion ? 200 : 900);
})();

/* ===== IMAGENS: fallback ===== */
document.addEventListener('error', e => {
  const img = e.target;
  if (img.tagName !== 'IMG') return;
  if (img.id === 'heroLogo') { img.classList.add('fail'); return; }
  const fb = img.dataset.fallback;
  if (fb && !img.dataset.fbDone) { img.dataset.fbDone = '1'; img.src = fb; }
}, true);
// imagens que já falharam antes do script carregar
$$('img').forEach(img => { if (img.complete && !img.naturalWidth) img.dispatchEvent(new Event('error')); });

/* ===== IDIOMA ===== */
function pickLang() {
  const saved = store.get('bz_lang');
  if (saved === 'pt' || saved === 'en') return saved;
  return (navigator.language || 'en').toLowerCase().startsWith('pt') ? 'pt' : 'en';
}
function money(n) { return (lang === 'pt' ? 'R$' : 'US$') + n; }

function applyLang(l) {
  lang = l;
  document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en';
  store.set('bz_lang', l);
  $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  $$('.lang button').forEach(b => b.classList.toggle('on', b.dataset.lang === l));
  renderSeal(); renderPrices(); renderGalleryCaptions();
  $('#payNote').textContent = t('pay_note');
}

function renderSeal() {
  $('#seal').textContent = t(COMMISSIONS_OPEN ? 'seal_open' : 'seal_closed');
  $('#slots').textContent = `${t('slots')}: ${SLOTS.taken}/${SLOTS.total}`;
}

/* ===== PREÇOS ===== */
function renderPrices() {
  const P = PRICES[lang === 'pt' ? 'brl' : 'usd'];
  const grid = $('#priceGrid');
  grid.innerHTML = ['anime', 'chibi'].map(style => `
    <article class="price-card reveal in" data-style="${style}">
      <h3 class="chrome">${t('style_' + style)}</h3>
      <div class="price-art"><img src="img/exemplo-${style}.png" data-fallback="img/placeholder.svg" alt="" loading="lazy"></div>
      ${['icon', 'busto', 'fullbody'].map(f => `
        <div class="price-row" data-format="${f}"><span>${t('price_' + f)}</span><b>${money(P[style][f])}</b></div>`).join('')}
    </article>`).join('');
  const ex = P.anime.icon;
  $('#addonsList').innerHTML = `
    <li>${t('ad_scene')}</li>
    <li>${t('ad_char').replace('{ex}', `${money(ex)} + ${money(ex)} = ${money(ex * 2)}`)}</li>
    <li>${t('ad_detail')}</li>`;
}

/* ===== GALERIA ===== */
const gallery = $('#gallery');
const filters = { style: 'all', format: 'all' };
const fmtLabel = f => ({ icon: 'Icon', busto: t('fmt_busto'), fullbody: 'Fullbody' }[f]);
const styleLabel = s => (s === 'anime' ? 'Anime' : 'Chibi');

PORTFOLIO.forEach((p, i) => {
  const fig = document.createElement('figure');
  fig.className = 'g-item';
  fig.dataset.style = p.style; fig.dataset.format = p.format; fig.dataset.index = i;
  const webp = /\.(jpe?g|png)$/i.test(p.file) ? `<source srcset="img/${p.file.replace(/\.(jpe?g|png)$/i, '.webp')}" type="image/webp">` : '';
  fig.innerHTML = `<picture>${webp}<img src="img/${p.file}" alt="" loading="lazy" decoding="async"></picture>
    ${p.commission ? '<span class="g-badge"></span>' : ''}<figcaption class="g-cap"></figcaption>`;
  const img = $('img', fig);
  img.addEventListener('load', () => img.classList.add('loaded'));
  if (img.complete && img.naturalWidth) img.classList.add('loaded');
  img.addEventListener('error', () => img.classList.add('loaded'));
  fig.addEventListener('click', () => openLightbox(p));
  gallery.appendChild(fig);
});

function renderGalleryCaptions() {
  $$('.g-item').forEach(el => {
    $('.g-cap', el).textContent = `${styleLabel(el.dataset.style)} · ${fmtLabel(el.dataset.format)}`;
    const b = $('.g-badge', el); if (b) b.textContent = t('badge_commission');
  });
}

function applyFilters() {
  const items = $$('.g-item');
  const match = el => (filters.style === 'all' || el.dataset.style === filters.style) &&
                      (filters.format === 'all' || el.dataset.format === filters.format);
  items.forEach(el => { if (!match(el)) el.classList.add('is-out'); });
  setTimeout(() => {
    items.forEach(el => {
      if (match(el)) { el.hidden = false; requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove('is-out'))); }
      else el.hidden = true;
    });
  }, reduceMotion ? 0 : 320);
}
function bindPills(id, key) {
  $$('.pill', $(id)).forEach(b => b.addEventListener('click', () => {
    $$('.pill', $(id)).forEach(x => x.classList.toggle('active', x === b));
    filters[key] = b.dataset.filter; applyFilters();
  }));
}
bindPills('#filterStyle', 'style'); bindPills('#filterFormat', 'format');

/* ===== LIGHTBOX ===== */
const lb = $('#lightbox'); let lbList = [], lbPos = 0;
function visiblePortfolio() {
  return $$('.g-item').filter(el => !el.hidden).map(el => PORTFOLIO[+el.dataset.index]);
}
function openLightbox(p) {
  lbList = visiblePortfolio(); lbPos = Math.max(0, lbList.indexOf(p));
  lb.hidden = false; document.body.style.overflow = 'hidden'; showLb();
}
function showLb() {
  const p = lbList[lbPos];
  $('#lbImg').src = 'img/' + p.file;
  $('#lbCaption').textContent = `${styleLabel(p.style)} · ${fmtLabel(p.format)}`;
  $('#lbBadge').hidden = !p.commission;
  $('#lbWant').onclick = e => { e.preventDefault(); closeLb(); goToPrice(p.style, p.format); };
}
function closeLb() { lb.hidden = true; document.body.style.overflow = ''; }
function stepLb(d) { lbPos = (lbPos + d + lbList.length) % lbList.length; showLb(); }
$('#lbClose').addEventListener('click', closeLb);
$('#lbPrev').addEventListener('click', () => stepLb(-1));
$('#lbNext').addEventListener('click', () => stepLb(1));
lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
document.addEventListener('keydown', e => {
  if (lb.hidden) return;
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowLeft') stepLb(-1);
  if (e.key === 'ArrowRight') stepLb(1);
});
let tx = null;
lb.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
lb.addEventListener('touchend', e => {
  if (tx === null) return;
  const dx = e.changedTouches[0].clientX - tx; tx = null;
  if (Math.abs(dx) > 50) stepLb(dx < 0 ? 1 : -1);
});

function goToPrice(style, format) {
  const card = $(`.price-card[data-style="${style}"]`);
  $('#commissions').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  if (!card) return;
  const row = $(`.price-row[data-format="${format}"]`, card);
  setTimeout(() => {
    card.classList.add('flash'); row && row.classList.add('flash');
    setTimeout(() => { card.classList.remove('flash'); row && row.classList.remove('flash'); }, 2600);
  }, 500);
}

/* ===== PROTEÇÃO (só imagens) ===== */
document.addEventListener('contextmenu', e => { if (e.target.closest('img, .g-item, .lightbox figure')) e.preventDefault(); });
document.addEventListener('dragstart', e => { if (e.target.tagName === 'IMG') e.preventDefault(); });

/* ===== MENU / TOPO ===== */
const nav = $('#nav'), menuBtn = $('#menuBtn');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', open);
});
$$('#nav a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', false); }));
$$('.lang button').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));
const toTop = $('#toTop');
toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));

/* ===== SCROLL: reveal, parallax, topo ===== */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
$$('.reveal').forEach(el => io.observe(el));
const pImg = $('#parallaxImg'), pFrame = pImg.parentElement;
let ticking = false;
function onScroll() {
  toTop.classList.toggle('show', scrollY > 700);
  if (!reduceMotion) {
    const r = pFrame.getBoundingClientRect();
    if (r.bottom > 0 && r.top < innerHeight) {
      const p = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
      pImg.style.transform = `translateY(${-9 + p * -6}%)`;
    }
  }
  ticking = false;
}
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();

/* ===== COMPARATIVO ===== */
const cr = $('#compareRange');
cr.addEventListener('input', () => {
  $('#compareTop').style.clipPath = `inset(0 ${100 - cr.value}% 0 0)`;
  $('#compareHandle').style.left = cr.value + '%';
});

/* ===== CARROSSEL ===== */
(function carousel() {
  const track = $('#carTrack'), n = track.children.length, dots = $('#carDots');
  dots.innerHTML = '<i></i>'.repeat(n);
  const go = i => track.scrollTo({ left: track.clientWidth * ((i + n) % n), behavior: 'smooth' });
  const cur = () => Math.round(track.scrollLeft / track.clientWidth);
  $('#carPrev').addEventListener('click', () => go(cur() - 1));
  $('#carNext').addEventListener('click', () => go(cur() + 1));
  track.addEventListener('scroll', () => $$('i', dots).forEach((d, i) => d.classList.toggle('on', i === cur())), { passive: true });
  $$('i', dots)[0].classList.add('on');
})();

/* ===== GLITTER (capa) ===== */
(function glitter() {
  const c = $('#glitter'), ctx = c.getContext('2d');
  let w, h, ps = [], raf, visible = true;
  const resize = () => {
    const r = c.getBoundingClientRect(); w = c.width = r.width; h = c.height = r.height;
    const count = Math.min(90, Math.round(w * h / 14000));
    ps = Array.from({ length: count }, () => ({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.5 + .4, ph: Math.random() * 6.28, sp: Math.random() * .012 + .004 }));
  };
  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    ps.forEach(p => {
      p.ph += p.sp; const a = reduceMotion ? .5 : (Math.sin(p.ph) + 1) / 2;
      ctx.globalAlpha = a * .9; ctx.fillStyle = '#fff'; ctx.shadowColor = '#9aa0aa'; ctx.shadowBlur = 6;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.28); ctx.fill();
    });
    if (!reduceMotion && visible) raf = requestAnimationFrame(draw);
  };
  resize(); draw();
  addEventListener('resize', () => { resize(); if (reduceMotion) draw(); });
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && !reduceMotion) { cancelAnimationFrame(raf); draw(); } }).observe(c);
})();

/* ===== CURSOR COM RASTRO ✦ (desktop) ===== */
if (finePointer && !reduceMotion) {
  const layer = $('#cursorLayer'); let last = 0;
  addEventListener('mousemove', e => {
    const now = performance.now(); if (now - last < 55) return; last = now;
    const s = document.createElement('span');
    s.className = 'trail'; s.textContent = '✦';
    s.style.left = e.clientX + (Math.random() * 10 - 5) + 'px'; s.style.top = e.clientY + (Math.random() * 10 - 5) + 'px';
    layer.appendChild(s); setTimeout(() => s.remove(), 1000);
  });
}

/* ===== INIT ===== */
applyLang(pickLang());
