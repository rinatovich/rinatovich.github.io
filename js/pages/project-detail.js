/* ============================================================
   PAGE: PROJECT DETAIL
   Full case study — overview, problem, approach, results, lessons.
   ============================================================ */

'use strict';

function renderProjectDetailPage(params) {
  const project = findProject(params.id);
  const root = document.getElementById('app');

  if (!project) {
    return renderNotFoundInline(root, t('project_not_found'), '#/projects', t('back_to_projects'));
  }

  const d = project.detail;
  const related = SITE_DATA.projects.items.filter(p => p.id !== project.id).slice(0, 2);

  root.innerHTML = `
    <section class="page-header">
      <div class="container container--md">
        <nav class="breadcrumb reveal" aria-label="Breadcrumb">
          <a href="#/" data-route>${escHtml(t('breadcrumb_home'))}</a>
          <span class="breadcrumb__sep" aria-hidden="true">/</span>
          <a href="#/projects" data-route>${escHtml(t('breadcrumb_projects'))}</a>
          <span class="breadcrumb__sep" aria-hidden="true">/</span>
          <span aria-current="page">${escHtml(project.title)}</span>
        </nav>

        <div class="case-meta reveal">
          <span class="project-card__domain">${escHtml(project.domain)}</span>
          ${project.status ? `<span class="project-card__status project-card__status--${escHtml(project.status.type)}">${escHtml(project.status.label)}</span>` : ''}
          <span class="case-meta__sep">·</span>
          <span>${escHtml(project.year)}</span>
          <span class="case-meta__sep">·</span>
          <span>${escHtml(project.role)}</span>
        </div>

        <h1 class="page-header__title reveal">${escHtml(project.title)}</h1>
        <p class="page-header__subtitle reveal">${escHtml(project.description)}</p>
        ${project.link ? `
          <a href="${escHtml(project.link)}" class="btn btn--secondary reveal" target="_blank" rel="noopener noreferrer" style="margin-top: var(--sp-4);">
            ${escHtml(t('view_live_project'))} ${ICONS.externalLink}
          </a>
        ` : ''}
      </div>
    </section>

    <section class="section section--alt">
      <div class="container container--md">
        <div class="case-info-grid reveal">
          <div class="case-info-grid__item">
            <div class="case-info-grid__label">${escHtml(t('label_client'))}</div>
            <div class="case-info-grid__value">${escHtml(d.client)}</div>
          </div>
          <div class="case-info-grid__item">
            <div class="case-info-grid__label">${escHtml(t('label_duration'))}</div>
            <div class="case-info-grid__value">${escHtml(d.duration)}</div>
          </div>
          <div class="case-info-grid__item">
            <div class="case-info-grid__label">${escHtml(t('label_team'))}</div>
            <div class="case-info-grid__value">${escHtml(d.team)}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container container--md case-body">

        <div class="case-section reveal">
          <h2 class="case-section__title">${escHtml(t('section_overview'))}</h2>
          <p class="case-section__text">${escHtml(d.overview)}</p>
        </div>

        <div class="case-section reveal">
          <h2 class="case-section__title">${escHtml(t('section_problem'))}</h2>
          <ul class="case-list">
            ${d.problem.map(item => `<li>${escHtml(item)}</li>`).join('')}
          </ul>
        </div>

        <div class="case-section reveal">
          <h2 class="case-section__title">${escHtml(t('section_approach'))}</h2>
          <ul class="case-list">
            ${d.approach.map(item => `<li>${escHtml(item)}</li>`).join('')}
          </ul>
        </div>

        <div class="case-section reveal">
          <h2 class="case-section__title">${escHtml(t('section_challenges'))}</h2>
          <ul class="case-list">
            ${d.challenges.map(item => `<li>${escHtml(item)}</li>`).join('')}
          </ul>
        </div>

        <div class="case-section reveal">
          <h2 class="case-section__title">${escHtml(t('section_results'))}</h2>
          <div class="case-results">
            ${d.results.map(r => `
              <div class="case-result-card">
                <div class="case-result-card__metric">${escHtml(r.metric)}</div>
                <div class="case-result-card__detail">${escHtml(r.detail)}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="case-section case-lessons reveal">
          <h2 class="case-section__title">${escHtml(t('section_lessons'))}</h2>
          <p class="case-section__text">${escHtml(d.lessons)}</p>
        </div>

        <div class="case-section reveal">
          <h2 class="case-section__title">${escHtml(t('section_stack'))}</h2>
          <div class="project-card__tags">
            ${project.tags.map(tag => `<span class="tag">${escHtml(tag)}</span>`).join('')}
          </div>
        </div>

      </div>
    </section>

    ${related.length ? `
    <section class="section section--alt">
      <div class="container">
        <div class="section__header reveal">
          <div class="section__eyebrow">${escHtml(t('more_work_eyebrow'))}</div>
          <h2 class="section__title">${escHtml(t('related_projects'))}</h2>
        </div>
        <div class="projects__grid projects__grid--2">
          ${related.map((p, i) => renderProjectCard(p, i)).join('')}
        </div>
      </div>
    </section>
    ` : ''}

    <section class="section">
      <div class="container container--md">
        <a href="#/projects" class="btn btn--secondary" data-route>
          ${ICONS.arrowLeft} ${escHtml(t('back_to_all_projects'))}
        </a>
      </div>
    </section>
  `;

  return initScrollReveal();
}

function renderNotFoundInline(root, title, backHref, backLabel) {
  root.innerHTML = `
    <section class="section" style="min-height: 60vh; display:flex; align-items:center;">
      <div class="container container--sm" style="text-align:center;">
        <h1 class="page-header__title">${escHtml(title)}</h1>
        <p class="page-header__subtitle" style="margin-inline:auto;">${escHtml(t('item_missing'))}</p>
        <a href="${escHtml(backHref)}" class="btn btn--primary" data-route style="margin-top: var(--sp-6);">
          ${ICONS.arrowLeft} ${escHtml(backLabel)}
        </a>
      </div>
    </section>
  `;
  return () => {};
}
