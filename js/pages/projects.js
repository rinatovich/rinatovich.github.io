/* ============================================================
   PAGE: PROJECTS (list)
   ============================================================ */

'use strict';

function renderProjectsPage() {
  const { projects } = SITE_DATA;
  const root = document.getElementById('app');

  root.innerHTML = `
    <section class="page-header">
      <div class="container">
        <nav class="breadcrumb reveal" aria-label="Breadcrumb">
          <a href="#/" data-route>${escHtml(t('breadcrumb_home'))}</a>
          <span class="breadcrumb__sep" aria-hidden="true">/</span>
          <span aria-current="page">${escHtml(t('breadcrumb_projects'))}</span>
        </nav>
        <div class="section__eyebrow reveal">${escHtml(t('work_eyebrow'))}</div>
        <h1 class="page-header__title reveal">${escHtml(projects.title)}</h1>
        <p class="page-header__subtitle reveal">${escHtml(projects.subtitle)}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="projects__grid">
          ${projects.items.map((p, i) => renderProjectCard(p, i)).join('')}
        </div>
      </div>
    </section>
  `;

  return initScrollReveal();
}
