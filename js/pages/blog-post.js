/* ============================================================
   PAGE: BLOG POST (detail)
   ============================================================ */

'use strict';

function renderBlogPostPage(params) {
  const post = findPost(params.id);
  const root = document.getElementById('app');

  if (!post) {
    return renderNotFoundInline(root, t('article_not_found'), '#/blog', t('back_to_writing'));
  }

  const d = parseDate(post.date);
  const related = SITE_DATA.blog.items.filter(p => p.id !== post.id).slice(0, 2);

  root.innerHTML = `
    <section class="page-header">
      <div class="container container--md">
        <nav class="breadcrumb reveal" aria-label="Breadcrumb">
          <a href="#/" data-route>${escHtml(t('breadcrumb_home'))}</a>
          <span class="breadcrumb__sep" aria-hidden="true">/</span>
          <a href="#/blog" data-route>${escHtml(t('breadcrumb_writing'))}</a>
          <span class="breadcrumb__sep" aria-hidden="true">/</span>
          <span aria-current="page">${escHtml(post.title)}</span>
        </nav>

        <div class="case-meta reveal">
          <span class="project-card__domain">${escHtml(post.category)}</span>
          <span class="case-meta__sep">·</span>
          <span>${escHtml(d.full)}</span>
          <span class="case-meta__sep">·</span>
          <span>${escHtml(post.readTime)}</span>
        </div>

        <h1 class="page-header__title reveal">${escHtml(post.title)}</h1>
      </div>
    </section>

    <section class="section">
      <div class="container container--md article-body">
        ${post.content.map(renderContentBlock).join('')}
      </div>
    </section>

    ${related.length ? `
    <section class="section section--alt">
      <div class="container container--md">
        <div class="section__header reveal">
          <div class="section__eyebrow">${escHtml(t('keep_reading_eyebrow'))}</div>
          <h2 class="section__title">${escHtml(t('more_articles'))}</h2>
        </div>
        <div class="blog__list">
          ${related.map(p => renderPostCard(p)).join('')}
        </div>
      </div>
    </section>
    ` : ''}

    <section class="section">
      <div class="container container--md">
        <a href="#/blog" class="btn btn--secondary" data-route>
          ${ICONS.arrowLeft} ${escHtml(t('back_to_all_articles'))}
        </a>
      </div>
    </section>
  `;

  return initScrollReveal();
}

function renderContentBlock(block) {
  switch (block.type) {
    case 'h2':
      return `<h2 class="article-body__h2 reveal">${escHtml(block.text)}</h2>`;
    case 'p':
      return `<p class="article-body__p reveal">${escHtml(block.text)}</p>`;
    case 'quote':
      return `<blockquote class="article-body__quote reveal">${escHtml(block.text)}</blockquote>`;
    case 'list':
      return `
        <ul class="article-body__list reveal">
          ${block.items.map(item => `<li>${escHtml(item)}</li>`).join('')}
        </ul>
      `;
    default:
      return '';
  }
}
