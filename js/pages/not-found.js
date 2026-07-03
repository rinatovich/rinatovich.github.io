/* ============================================================
   PAGE: 404 NOT FOUND
   ============================================================ */

'use strict';

function renderNotFoundPage() {
  const root = document.getElementById('app');

  root.innerHTML = `
    <section class="section" style="min-height: 70vh; display:flex; align-items:center;">
      <div class="container container--sm" style="text-align:center;">
        <h1 class="page-header__title">404</h1>
        <p class="page-header__subtitle" style="margin-inline:auto;">
          ${escHtml(t('notfound_title'))} ${escHtml(t('notfound_desc'))}
        </p>
        <div class="hero__actions" style="justify-content:center; margin-top: var(--sp-6);">
          <a href="#/" class="btn btn--primary" data-route>${escHtml(t('notfound_home'))}</a>
          <a href="#/projects" class="btn btn--secondary" data-route>${escHtml(t('notfound_projects'))}</a>
        </div>
      </div>
    </section>
  `;

  return () => {};
}
