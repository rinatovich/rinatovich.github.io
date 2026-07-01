/* ============================================================
   APP — SPA Bootstrap
   Wires together: Router, Nav, Footer, all page renderers.
   Entry point: called on DOMContentLoaded.
   ============================================================ */

'use strict';

/* ── Nav ─────────────────────────────────────────────────── */

function renderNav() {
  const { nav, person } = SITE_DATA;
  const el = document.getElementById('nav');
  if (!el) return;

  const [first, ...rest] = person.name.split(' ');

  const links = nav.map(item => `
    <a href="${escHtml(item.href)}"
       class="nav__link"
       data-route
       data-nav-href="${escHtml(item.href)}">
      ${escHtml(item.label)}
    </a>
  `).join('');

  const mobileLinks = nav.map(item => `
    <a href="${escHtml(item.href)}"
       class="nav__mobile-link"
       data-route data-close="true"
       data-nav-href="${escHtml(item.href)}">
      ${escHtml(item.label)}
    </a>
  `).join('');

  el.innerHTML = `
    <div class="container">
      <div class="nav__inner">
        <a href="#/" class="nav__logo" data-route>
          ${escHtml(first)} <span>${escHtml(rest.join(' '))}</span>
        </a>
        <div class="nav__links">${links}</div>
        <a href="${escHtml(person.cv)}" class="nav__cta" download>
          ${ICONS.download} Resume
        </a>
        <button class="nav__toggle" id="navToggle"
                aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <div class="nav__mobile" id="navMobile" role="dialog" aria-label="Navigation menu">
      ${mobileLinks}
      <a href="${escHtml(person.cv)}" class="nav__mobile-cta" download>
        ${ICONS.download} Download Resume
      </a>
    </div>
  `;
}

function renderFooter() {
  const { person, nav } = SITE_DATA;
  const el = document.getElementById('footer');
  if (!el) return;

  const year = new Date().getFullYear();
  el.innerHTML = `
    <div class="container">
      <div class="footer__inner">
        <div class="footer__left">
          <div class="footer__name">${escHtml(person.name)}</div>
          <div class="footer__copy">© ${year} · All rights reserved</div>
        </div>
        <div class="footer__links">
          ${nav.filter(n => n.label !== 'Home').map(n =>
            `<a href="${escHtml(n.href)}" class="footer__link" data-route>${escHtml(n.label)}</a>`
          ).join('')}
          <a href="mailto:${escHtml(person.email)}" class="footer__link">Email</a>
        </div>
        <div class="footer__socials">
          <a href="${escHtml(person.linkedin)}" class="footer__social"
             target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            ${ICONS.linkedin}
          </a>
          <a href="${escHtml(person.github)}" class="footer__social"
             target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            ${ICONS.github}
          </a>
        </div>
      </div>
    </div>
  `;
}

/* ── Nav behaviour: scroll + toggle + active ─────────────── */

function initNavBehaviour() {
  const nav    = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('navMobile');
  if (!nav) return;

  // Scroll → glass effect
  const onScroll = () => nav.classList.toggle('nav--scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger
  if (toggle && mobile) {
    toggle.addEventListener('click', () => {
      const open = mobile.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    mobile.querySelectorAll('[data-close]').forEach(link => {
      link.addEventListener('click', () => {
        mobile.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
}

/* ── Update nav active state on route change ─────────────── */

function updateNavActive(hash) {
  // Normalise: #/projects/foo → #/projects, #/ → #/
  const parts = hash.split('/');
  const base  = parts.length > 2 ? parts.slice(0, 3).join('/') : hash;

  document.querySelectorAll('[data-nav-href]').forEach(link => {
    const href = link.getAttribute('data-nav-href');
    // Home is active only on exact match
    const isActive = href === base || (href !== '#/' && base.startsWith(href));
    link.classList.toggle('nav__link--active', isActive);
  });
}

/* ── Page transition ─────────────────────────────────────── */

function transitionPage(renderFn) {
  const app = document.getElementById('app');
  app.classList.add('page-exit');

  return new Promise(resolve => {
    setTimeout(() => {
      app.classList.remove('page-exit');
      app.classList.add('page-enter');
      const cleanup = renderFn();
      setTimeout(() => {
        app.classList.remove('page-enter');
        resolve(cleanup);
      }, 30);
    }, 160);
  });
}

/* ── Intercept data-route clicks (SPA navigation) ──────── */

function initLinkInterception() {
  document.body.addEventListener('click', e => {
    const link = e.target.closest('[data-route]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    // Let the browser handle hashchange naturally — no extra logic needed
    // Just close mobile nav if open
    const mobile = document.getElementById('navMobile');
    const toggle = document.getElementById('navToggle');
    if (mobile && mobile.classList.contains('is-open')) {
      mobile.classList.remove('is-open');
      toggle && toggle.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });
}

/* ── Router setup ────────────────────────────────────────── */

function setupRouter() {
  Router.register('/', () => transitionPage(renderHomePage));
  Router.register('/projects', () => transitionPage(renderProjectsPage));
  Router.register('/projects/:id', (p) => transitionPage(() => renderProjectDetailPage(p)));
  Router.register('/certificates', () => transitionPage(renderCertificatesPage));
  Router.register('/blog', () => transitionPage(renderBlogPage));
  Router.register('/blog/:id', (p) => transitionPage(() => renderBlogPostPage(p)));
  Router.register('/contact', () => transitionPage(renderContactPage));
  Router.registerNotFound(() => transitionPage(renderNotFoundPage));

  // Update nav active state on every route change
  window.addEventListener('hashchange', () => {
    updateNavActive(window.location.hash || '#/');
  });
}

/* ── Boot ────────────────────────────────────────────────── */

function boot() {
  renderNav();
  renderFooter();
  initNavBehaviour();
  initLinkInterception();
  setupRouter();
  Router.init();
  updateNavActive(window.location.hash || '#/');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
