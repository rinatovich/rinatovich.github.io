/* ============================================================
   APP — SPA Bootstrap
   Wires together: Router, Nav, Footer, all page renderers.
   Entry point: called on DOMContentLoaded.
   ============================================================ */

'use strict';

/* ── Language switcher ───────────────────────────────────── */

function renderLangSwitch(idSuffix) {
  return `
    <div class="lang-switch" id="langSwitch${idSuffix}" role="group" aria-label="${escHtml(t('lang_switch_label'))}">
      ${SUPPORTED_LANGS.map(l => `
        <button type="button"
                class="lang-switch__btn${l === getLang() ? ' is-active' : ''}"
                data-lang="${l}"
                aria-pressed="${l === getLang()}"
                title="${escHtml(LANG_META[l].name)}">
          ${LANG_META[l].short}
        </button>
      `).join('')}
    </div>
  `;
}

function bindLangSwitch(idSuffix) {
  const el = document.getElementById(`langSwitch${idSuffix}`);
  if (!el) return;
  el.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('is-active')) return;
      btn.classList.add('is-rippling');
      btn.addEventListener('animationend', () => btn.classList.remove('is-rippling'), { once: true });
      setLang(btn.getAttribute('data-lang'));
    });
  });
}

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
        ${renderLangSwitch('Desktop')}
        <a href="${escHtml(person.cv)}" class="nav__cta" download>
          ${ICONS.download} ${escHtml(t('nav_resume'))}
        </a>
        <button class="nav__toggle" id="navToggle"
                aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <div class="nav__mobile" id="navMobile" role="dialog" aria-label="Navigation menu">
      ${mobileLinks}
      ${renderLangSwitch('Mobile')}
      <a href="${escHtml(person.cv)}" class="nav__mobile-cta" download>
        ${ICONS.download} ${escHtml(t('nav_resume_full'))}
      </a>
    </div>
  `;

  bindLangSwitch('Desktop');
  bindLangSwitch('Mobile');
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
          <div class="footer__copy">© ${year} · ${escHtml(t('footer_rights'))}</div>
        </div>
        <div class="footer__links">
          ${nav.filter(n => n.href !== '#/').map(n =>
            `<a href="${escHtml(n.href)}" class="footer__link" data-route>${escHtml(n.label)}</a>`
          ).join('')}
          <a href="mailto:${escHtml(person.email)}" class="footer__link">${escHtml(t('footer_email'))}</a>
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
          <a href="${escHtml(person.telegram)}" class="footer__social"
             target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            ${ICONS.telegram}
          </a>
          <a href="${escHtml(person.email)}" class="footer__social"
             target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            ${ICONS.email}
          </a>
        </div>
      </div>
    </div>
  `;
}

/* ── Nav behaviour: scroll + toggle + active ─────────────── */

function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('nav--scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function bindNavInteractions() {
  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('navMobile');
  if (!toggle || !mobile) return;

  toggle.addEventListener('click', () => {
    const open = mobile.classList.toggle('is-open');
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : 'auto';
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
  window.scrollTo({ top: 0, behavior: 'smooth' });

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
    closeMobileMenu();
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

/* ── Language change ─────────────────────────────────────── */
function closeMobileMenu() {
  const mobile = document.getElementById('navMobile');
  const toggle = document.getElementById('navToggle');

  mobile?.classList.remove('is-open');
  toggle?.classList.remove('is-open');
  toggle?.setAttribute('aria-expanded', 'false');

  document.body.style.overflow = '';
}
function onLangChange() {

  closeMobileMenu();
  const nav = document.getElementById('nav');
  const footer = document.getElementById('footer');
  const chrome = [nav, footer].filter(Boolean);

  // Nav/footer aren't touched by the router's page transition, so they
  // get their own short fade — kept in lockstep with transitionPage's
  // own timing (160ms exit) so everything settles together.
  chrome.forEach(el => el.classList.add('lang-fade-out'));

  window.setTimeout(() => {
    renderNav();
    renderFooter();
    bindNavInteractions();
    updateNavActive(window.location.hash || '#/');

    requestAnimationFrame(() => {
      const freshChrome = [
        document.getElementById('nav'),
        document.getElementById('footer'),
      ].filter(Boolean);

      freshChrome.forEach(el => {
        el.classList.remove('lang-fade-out');
        el.classList.add('lang-fade-in');
      });

      window.setTimeout(() => {
        freshChrome.forEach(el => el.classList.remove('lang-fade-in'));
      }, 420);
    });
  }, 160);

  // #app fades itself out/in via the same mechanism normal navigation
  // uses (transitionPage), so it never fights that animation.
  Router.refresh();
}

/* ── Boot ────────────────────────────────────────────────── */

function boot() {
  document.documentElement.setAttribute('lang', LANG_META[getLang()].htmlLang);
  document.title = t('site_title');
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t('site_description'));

  renderNav();
  renderFooter();
  initNavScroll();
  bindNavInteractions();

  initLinkInterception();
  initSpotlightCards();
  initMagneticButtons();
  initScrollProgress();
  setupRouter();
  Router.init();
  updateNavActive(window.location.hash || '#/');

  window.addEventListener('langchange', onLangChange);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
