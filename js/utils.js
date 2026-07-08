/* ============================================================
   UTILS
   Shared helper functions used across page renderers.
   ============================================================ */

'use strict';

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function parseDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  const locale = (typeof LANG_META !== 'undefined' && LANG_META[getLang()])
    ? LANG_META[getLang()].dateLocale
    : 'en-US';
  return {
    day:   d.getDate(),
    month: d.toLocaleString(locale, { month: 'short' }).toUpperCase(),
    year:  d.getFullYear(),
    full:  d.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' }),
  };
}

/** Render an icon by name (inline SVG, no external deps) */
const ICONS = {
  linkedin: `<svg fill="none" height="50" width="50" id="Layer_1" viewBox="-143 145 512 512" >
<path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9  V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7  C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6  c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z  " fill="currentColor"/>
</svg>`,
  github: `<svg width="50" height="50" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.5v-1.7C6.73 20.3 6.14 18.4 6.14 18.4c-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.63.07-.63 1.02.07 1.55 1.07 1.55 1.07.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.24-.26-4.6-1.15-4.6-5.1 0-1.13.39-2.05 1.04-2.77-.1-.26-.45-1.31.1-2.74 0 0 .85-.28 2.78 1.06A9.44 9.44 0 0112 7.4c.86 0 1.72.12 2.52.35 1.93-1.34 2.78-1.06 2.78-1.06.55 1.43.2 2.48.1 2.74.65.72 1.04 1.64 1.04 2.77 0 3.96-2.37 4.83-4.62 5.09.36.32.68.95.68 1.92v2.84c0 .28.18.6.69.5A10.24 10.24 0 0022 12.24C22 6.58 17.52 2 12 2z" fill="currentColor"/></svg>`,
  telegram: `<svg width="50" height="50" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z" fill="currentColor"/></svg>`,
  email: `<svg width="50" height="50" viewBox="0 0 22 22" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM7.005 9C7.005 8.45 7.45 8 8 8H16C16.55 8 17 8.45 17 9V15C17 15.55 16.55 16 16 16H8C7.45 16 7 15.55 7 15L7.005 9ZM12 12.5L8.00001 9.99997V15H16V9.99997L12 12.5ZM12 11.5L8.00001 9.00001H16L12 11.5Z" fill="currentColor"/>
</svg>`,
  arrowRight: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  arrowLeft: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  download: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 2v8M5 8l3 3 3-3M3 13h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  externalLink: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8.5l3.5 3.5L13 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

/** Find a project by id, or null */
function findProject(id) {
  return SITE_DATA.projects.items.find(p => p.id === id) || null;
}

/** Find a blog post by id, or null */
function findPost(id) {
  return SITE_DATA.blog.items.find(p => p.id === id) || null;
}

/** Render rich content blocks (used by blog post detail) */
function renderContentBlocks(blocks) {
  return blocks.map(block => {
    switch (block.type) {
      case 'h2':
        return `<h2 class="post-body__h2">${escHtml(block.text)}</h2>`;
      case 'p':
        return `<p class="post-body__p">${escHtml(block.text)}</p>`;
      case 'quote':
        return `<blockquote class="post-body__quote">${escHtml(block.text)}</blockquote>`;
      case 'list':
        return `<ul class="post-body__list">${block.items.map(i => `<li>${escHtml(i)}</li>`).join('')}</ul>`;
      default:
        return '';
    }
  }).join('');
}

/** Scroll-reveal observer — call after injecting new .reveal elements */
function initScrollReveal(root = document) {
  const elements = root.querySelectorAll('.reveal:not(.is-visible)');
  if (!elements.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
  return () => observer.disconnect();
}

/**
 * Animate stat numbers counting up from 0 when they scroll into view.
 * Targets .hero__stat-value and .about__stat-value — no markup changes
 * needed, it parses the existing text (e.g. "8+", "40%", "20").
 */
function initCounters(root = document) {
  if (prefersReducedMotion()) return () => {};

  const els = root.querySelectorAll('.hero__stat-value, .about__stat-value');
  if (!els.length) return () => {};

  const animateEl = (el) => {
    const raw = el.textContent.trim();
    const match = raw.match(/^(\D*)(\d+(?:[.,]\d+)?)(.*)$/);
    if (!match) return;

    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr.replace(',', '.'));
    const decimals = (numStr.split(/[.,]/)[1] || '').length;
    const duration = 1100;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = `${prefix}${(target * eased).toFixed(decimals)}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = raw;
      }
    }
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateEl(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  els.forEach(el => observer.observe(el));
  return () => observer.disconnect();
}

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Cursor-follow spotlight on cards. Delegated on document.body so it
 * keeps working across SPA route changes with no per-page rebinding.
 * Position writes are batched to one per animation frame (instead of
 * once per mousemove event) so it never fights the browser's paint
 * cycle — that's what causes the "micro-stutter" feel.
 */
function initSpotlightCards() {
  if (prefersReducedMotion()) return;

  const SELECTOR = '.project-card, .cert-card, .post-card, .hero__visual-card, .case-result-card';
  let currentCard = null;
  let lastX = 0, lastY = 0;
  let queued = false;

  function paint() {
    queued = false;
    if (!currentCard) return;
    const rect = currentCard.getBoundingClientRect();
    currentCard.style.setProperty('--mx', `${(lastX - rect.left).toFixed(1)}px`);
    currentCard.style.setProperty('--my', `${(lastY - rect.top).toFixed(1)}px`);
  }

  document.body.addEventListener('mousemove', e => {
    const card = e.target.closest(SELECTOR);
    if (!card) return;
    currentCard = card;
    lastX = e.clientX;
    lastY = e.clientY;
    if (!queued) {
      queued = true;
      requestAnimationFrame(paint);
    }
  });
}

/**
 * Subtle magnetic pull on primary buttons — they lean gently toward
 * the cursor while hovered, then spring back on mouse-out.
 *
 * This runs its own requestAnimationFrame loop that eases the button's
 * current offset toward a target offset (lerp) every frame, completely
 * decoupled from how often mousemove actually fires. That's what makes
 * it feel like one continuous glide instead of a series of little
 * snaps — retriggering a CSS transition on every mousemove (the old
 * approach) is what produced the jittery feel.
 */
function initMagneticButtons() {
  if (prefersReducedMotion()) return;
  if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;

  const SELECTOR = '.btn--primary, .btn--secondary, .nav__cta';
  const STRENGTH = 8;
  const EASE = 0.14; // lower = smoother/laggier, higher = snappier
  const SETTLE_THRESHOLD = 0.05;

  /** el -> { targetX, targetY, curX, curY, running } */
  const state = new Map();

  function ensure(el) {
    if (!state.has(el)) {
      state.set(el, { targetX: 0, targetY: 0, curX: 0, curY: 0, running: false });
    }
    return state.get(el);
  }

  function loop(el) {
    const s = state.get(el);
    if (!s) return;

    s.curX += (s.targetX - s.curX) * EASE;
    s.curY += (s.targetY - s.curY) * EASE;
    el.style.transform = `translate(${s.curX.toFixed(2)}px, ${s.curY.toFixed(2)}px)`;

    const atRestTarget = s.targetX === 0 && s.targetY === 0;
    const settled = Math.abs(s.targetX - s.curX) < SETTLE_THRESHOLD
                  && Math.abs(s.targetY - s.curY) < SETTLE_THRESHOLD;

    if (atRestTarget && settled) {
      el.style.transform = '';
      el.style.willChange = '';
      s.running = false;
      state.delete(el);
      return;
    }
    requestAnimationFrame(() => loop(el));
  }

  document.addEventListener('mousemove', e => {
    const btn = e.target.closest(SELECTOR);

    // Any previously-active button the cursor has left should ease back to rest
    state.forEach((s, el) => {
      if (el !== btn) { s.targetX = 0; s.targetY = 0; }
    });

    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const s = ensure(btn);
    btn.style.willChange = 'transform';
    s.targetX = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * STRENGTH;
    s.targetY = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * STRENGTH;

    if (!s.running) {
      s.running = true;
      requestAnimationFrame(() => loop(btn));
    }
  });

  document.addEventListener('mouseleave', () => {
    state.forEach(s => { s.targetX = 0; s.targetY = 0; });
  });
}

/** Slim accent progress bar at the top of the viewport, tracking scroll */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgressBar');
  if (!bar) return;

  const update = () => {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    const pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
    bar.style.width = `${pct}%`;
  };

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}
