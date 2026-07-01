/* ============================================================
   PAGE: BLOG POST DETAIL
   ============================================================ */

'use strict';

function renderBlogPostPage(params) {
  const post = findPost(params.id);
  const root = document.getElementById('app');

  if (!post) {
    return renderNotFoundInline(root, 'Article not found', '#/blog', 'Back to Writing');
  }

  const d = parseDate(post.date);
  const related = SITE_DATA.blog.items.filter(p => p.id !== post.id).slice(0, 2);

  root.innerHTML = `
    <div class="reading-progress" id="readingProgress" aria-hidden="true"></div>

    <section class="page-header">
      <div class="container">
        <nav class="breadcrumb reveal" aria-label="Breadcrumb">
          <a href="#/" data-route>Home</a>
          <span class="breadcrumb__sep" aria-hidden="true">/</span>
          <a href="#/blog" data-route>Writing</a>
          <span class="breadcrumb__sep" aria-hidden="true">/</span>
          <span aria-current="page">${escHtml(post.title)}</span>
        </nav>
        <div class="case-meta reveal">
          <span class="post-card__category">${escHtml(post.category)}</span>
          <span class="case-meta__sep">·</span>
          <span>${escHtml(d.full)}</span>
          <span class="case-meta__sep">·</span>
          <span>${escHtml(post.readTime)}</span>
        </div>
        <h1 class="page-header__title reveal">${escHtml(post.title)}</h1>
        <p class="page-header__subtitle reveal">${escHtml(post.excerpt)}</p>
      </div>
    </section>

    <section class="section">
      <div class="container container--sm">
        <article class="post-body reveal">
          ${renderContentBlocks(post.content)}
        </article>
        <div class="post-body__footer">
          <a href="#/blog" class="btn btn--secondary" data-route>
            ${ICONS.arrowLeft} Back to all articles
          </a>
        </div>
      </div>
    </section>

    ${related.length ? `
    <section class="section section--alt">
      <div class="container container--md">
        <div class="section__header reveal">
          <div class="section__eyebrow">Keep Reading</div>
          <h2 class="section__title">More Articles</h2>
        </div>
        <div class="blog__list">
          ${related.map(p => renderPostCard(p)).join('')}
        </div>
      </div>
    </section>` : ''}
  `;

  const cleanupReveal = initScrollReveal();
  const cleanupProgress = initReadingProgress();
  return () => {
    if (cleanupReveal) cleanupReveal();
    if (cleanupProgress) cleanupProgress();
  };
}

function initReadingProgress() {
  const bar = document.getElementById('readingProgress');
  if (!bar) return null;

  function update() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 100;
    bar.style.width = pct + '%';
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
  return () => window.removeEventListener('scroll', update);
}
