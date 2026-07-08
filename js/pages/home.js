/* ============================================================
   PAGE: HOME
   Hero + about preview + featured projects + CTA strips.
   Full detail lives on dedicated pages (Projects, Certificates, Blog).
   ============================================================ */

'use strict';

function renderHomePage() {
  const { hero, about, skills, projects } = SITE_DATA;
  const root = document.getElementById('app');

  const featuredProjects = projects.items.slice(0, 3);

  const [firstName, ...rest] = hero.headline.split('\n');

  root.innerHTML = `
    <section class="hero" aria-label="Introduction">
      <canvas class="hero__bg" id="heroBg" aria-hidden="true"></canvas>
      <div class="container">
        <div class="hero__inner">
          <div class="hero__content">
            <div class="hero__eyebrow">
              <span class="hero__dot" aria-hidden="true"></span>
              <span class="hero__eyebrow-text">${escHtml(hero.eyebrow)}</span>
            </div>

            <h1 class="hero__name">
              ${escHtml(firstName)}<span class="hero__name-accent">${escHtml(rest.join(' ') || '')}</span>
            </h1>

            <p class="hero__role">${escHtml(SITE_DATA.person.role)}</p>
            <p class="hero__desc">${escHtml(hero.description)}</p>

            <div class="hero__actions">
              <a href="${escHtml(hero.cta_primary.href)}" class="btn btn--primary" data-route>
                ${escHtml(hero.cta_primary.label)} ${ICONS.arrowRight}
              </a>
              <a href="${escHtml(hero.cta_secondary.href)}" class="btn btn--secondary" download>
                ${ICONS.download} ${escHtml(hero.cta_secondary.label)}
              </a>
            </div>
          </div>

          <div class="hero__visual" aria-hidden="true">
            <div class="hero__photo-wrap">
              <img class="hero__photo" src="assets/img/hero-crop.png" alt="" />
            </div>
            <div class="hero__visual-card">
              <div class="hero__visual-label">${escHtml(t('hero_visual_label'))}</div>
              <svg class="hero__visual-chart" viewBox="0 0 340 140" xmlns="http://www.w3.org/2000/svg">
                ${renderSparkline()}
              </svg>
              <div class="hero__stats">
                ${about.stats.map(s => `
                  <div class="hero__stat">
                    <div class="hero__stat-value">${escHtml(s.value)}</div>
                    <div class="hero__stat-label">${escHtml(s.label)}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt" aria-label="About">
      <div class="container">
        <div class="section__header reveal">
          <div class="section__eyebrow">${escHtml(t('about_eyebrow'))}</div>
          <h2 class="section__title">${escHtml(t('about_title'))}</h2>
        </div>
        <div class="about__grid">
          <div class="about__body reveal">
            ${about.paragraphs.map(p => `<p>${escHtml(p)}</p>`).join('')}
          </div>
          <div class="about__stats">
            ${about.stats.map((s, i) => `
              <div class="about__stat reveal reveal--delay-${i % 3 + 1}">
                <div class="about__stat-value">${escHtml(s.value)}</div>
                <div class="about__stat-label">${escHtml(s.label)}</div>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="skills">
          <div class="section__header reveal">
            <div class="section__eyebrow">${escHtml(t('skills_eyebrow'))}</div>
          </div>
          <div class="skills__grid">
            ${skills.categories.map(cat => `
              <div class="skill-cat reveal">
                <div class="skill-cat__name">${escHtml(cat.name)}</div>
                <div class="skill-cat__items">
                  ${cat.items.map(item => `<div class="skill-cat__item">${escHtml(item)}</div>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <section class="section" aria-label="Featured work">
      <div class="container">
        <div class="section__header reveal section__header--row">
          <div>
            <div class="section__eyebrow">${escHtml(t('work_eyebrow'))}</div>
            <h2 class="section__title">${escHtml(projects.title)}</h2>
            <p class="section__subtitle">${escHtml(projects.subtitle)}</p>
          </div>
          <a href="#/projects" class="btn btn--ghost section__header-cta" data-route>
            ${escHtml(t('view_all_projects'))} ${ICONS.arrowRight}
          </a>
        </div>
        <div class="projects__grid">
          ${featuredProjects.map((p, i) => renderProjectCard(p, i)).join('')}
        </div>
      </div>
    </section>

    <!-- Blog section hidden — remove this comment and restore the
         "Recent writing" <section> block (see project README/instructions)
         to bring the blog back. -->

    <section class="section cta-strip" aria-label="Contact">
      <div class="container container--sm">
        <div class="cta-strip__inner reveal">
          <div class="hero__eyebrow" style="justify-content:center;">
            <span class="hero__dot" aria-hidden="true"></span>
            <span class="hero__eyebrow-text">${escHtml(SITE_DATA.person.availability.label)}</span>
          </div>
          <h2 class="cta-strip__title">${escHtml(SITE_DATA.contact.title)}</h2>
          <p class="cta-strip__desc">${escHtml(SITE_DATA.contact.subtitle)}</p>
          <a href="#/contact" class="btn btn--primary" data-route>
            ${escHtml(t('get_in_touch'))} ${ICONS.arrowRight}
          </a>
        </div>
      </div>
    </section>
  `;

  const cleanupBg = initHeroBg();
  const cleanupReveal = initScrollReveal();
  const cleanupCounters = initCounters(root);
  return () => {
    cleanupBg && cleanupBg();
    cleanupReveal && cleanupReveal();
    cleanupCounters && cleanupCounters();
  };
}

function renderProjectCard(p, i) {
  return `
    <article class="project-card reveal reveal--delay-${i % 3 + 1}">
      <a href="#/projects/${escHtml(p.id)}" class="project-card__link" data-route aria-label="${escHtml(p.title)}">
        <div class="project-card__meta">
          <span class="project-card__domain">${escHtml(p.domain)}</span>
          <span class="project-card__year">${escHtml(p.year)}</span>
        </div>
        <h3 class="project-card__title">${escHtml(p.title)}</h3>
        <p class="project-card__desc">${escHtml(p.description)}</p>
        <div class="project-card__outcome">${escHtml(p.outcome)}</div>
        <div class="project-card__footer">
          <div class="project-card__tags">
            ${p.tags.map(t => `<span class="tag">${escHtml(t)}</span>`).join('')}
          </div>
          <span class="project-card__cta">${escHtml(t('read_case_study'))} ${ICONS.arrowRight}</span>
        </div>
      </a>
    </article>
  `;
}

function renderPostCard(post) {
  const d = parseDate(post.date);
  return `
    <article class="post-card reveal">
      <a href="#/blog/${escHtml(post.id)}" class="post-card__link" data-route>
        <div class="post-card__date-block" aria-hidden="true">
          <span class="post-card__month">${escHtml(d.month)}</span>
          <span class="post-card__day">${d.day}</span>
          <span class="post-card__year">${d.year}</span>
        </div>
        <div class="post-card__content">
          <div class="post-card__meta">
            <span class="post-card__category">${escHtml(post.category)}</span>
            <span class="post-card__read-time">${escHtml(post.readTime)}</span>
          </div>
          <h3 class="post-card__title">${escHtml(post.title)}</h3>
          <p class="post-card__excerpt">${escHtml(post.excerpt)}</p>
          <span class="post-card__cta">${escHtml(t('read_article'))} ${ICONS.arrowRight}</span>
        </div>
      </a>
    </article>
  `;
}

function renderSparkline() {
  const points = [20, 35, 28, 50, 44, 62, 58, 78, 72, 90, 85, 110];
  const w = 340, h = 110, pad = 10;
  const xs = points.map((_, i) => pad + (i / (points.length - 1)) * (w - pad * 2));
  const min = Math.min(...points), max = Math.max(...points);
  const ys = points.map(v => h - pad - ((v - min) / (max - min)) * (h - pad * 2));

  const pathD = xs.map((x, i) => `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${ys[i].toFixed(1)}`).join(' ');
  const areaD = `${pathD} L ${xs[xs.length - 1].toFixed(1)} ${h} L ${xs[0].toFixed(1)} ${h} Z`;

  const barW = 18, gap = (w - pad * 2) / points.length;
  const bars = points.map((v, i) => {
    const bh = ((v - min) / (max - min)) * (h - pad * 2) + pad;
    const bx = pad + i * gap + (gap - barW) / 2;
    return `<rect x="${bx.toFixed(1)}" y="${(h - bh).toFixed(1)}" width="${barW}" height="${bh.toFixed(1)}" fill="#EFF6FF" rx="3"/>`;
  }).join('');

  return `
    ${bars}
    <defs>
      <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2563EB" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="#2563EB" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <path d="${areaD}" fill="url(#areaGrad)"/>
    <path d="${pathD}" stroke="#2563EB" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    ${xs.map((x, i) => i === xs.length - 1
      ? `<circle cx="${x.toFixed(1)}" cy="${ys[i].toFixed(1)}" r="4" fill="#2563EB"/>`
      : ''
    ).join('')}
  `;
}

function initHeroBg() {
  const canvas = document.getElementById('heroBg');
  if (!canvas) return () => {};

  const ctx = canvas.getContext('2d');
  let rafId;

  function draw() {
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const spacing = 36;
    const cols = Math.ceil(w / spacing) + 1;
    const rows = Math.ceil(h / spacing) + 1;

    ctx.fillStyle = 'rgba(37, 99, 235, 0.09)';
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * spacing;
        const y = r * spacing;
        const fade = 1 - (x / w) * 0.6;
        ctx.globalAlpha = 0.09 * fade;
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.globalAlpha = 1;
    ctx.strokeStyle = 'rgba(37, 99, 235, 0.04)';
    ctx.lineWidth = 1;
    for (let i = -rows; i < cols + rows; i++) {
      const x = i * spacing;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + h, h);
      ctx.stroke();
    }
  }

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    draw();
  }

  const ro = new ResizeObserver(() => {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(resize);
  });
  ro.observe(canvas);
  resize();

  return () => ro.disconnect();
}
