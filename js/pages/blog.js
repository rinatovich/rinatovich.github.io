/* ============================================================
   PAGE: BLOG (list)
   ============================================================ */

'use strict';

function renderBlogPage() {
  const { blog } = SITE_DATA;
  const root = document.getElementById('app');

  root.innerHTML = `
    <section class="page-header">
      <div class="container container--md">
        <nav class="breadcrumb reveal" aria-label="Breadcrumb">
          <a href="#/" data-route>${escHtml(t('breadcrumb_home'))}</a>
          <span class="breadcrumb__sep" aria-hidden="true">/</span>
          <span aria-current="page">${escHtml(t('breadcrumb_writing'))}</span>
        </nav>
        <div class="section__eyebrow reveal">${escHtml(t('writing_eyebrow'))}</div>
        <h1 class="page-header__title reveal">${escHtml(blog.title)}</h1>
        <p class="page-header__subtitle reveal">${escHtml(blog.subtitle)}</p>
      </div>
    </section>

    <section class="section">
      <div class="container container--md">
        <div class="blog__list">
          ${blog.items.map(post => renderPostCard(post)).join('')}
        </div>
      </div>
    </section>
  `;

  return initScrollReveal();
}
