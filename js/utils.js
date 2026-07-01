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
  return {
    day:   d.getDate(),
    month: d.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
    year:  d.getFullYear(),
    full:  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
  };
}

/** Render an icon by name (inline SVG, no external deps) */
const ICONS = {
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 48 48" version="1.1"><defs><style>.b{fill:#000000;}.c{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}</style></defs><circle class="b" cx="15.64" cy="13.46" r=".75"/><line class="c" x1="15.64" x2="15.64" y1="16.93" y2="31.91"/><path class="c" d="m33.11 31.91v-9.61a5.83 5.83 0 0 0-5.82-5.82 5.83 5.83 0 0 0-5.83 5.82v9.61"/><line class="c" x1="21.46" x2="21.46" y1="22.3" y2="16.93"/><path class="c" d="m40.5 5.5h-33a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2z"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2"><defs><style>.cls-1{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;fill-rule:evenodd;}</style></defs><path class="cls-1" d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5"/></svg>`,
  email: `<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 64 64" fill="none" stroke="#000000"><rect x="8" y="12" width="48" height="40"/><polyline points="56 20 32 36 8 20"/></svg>`,
  arrowRight: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  arrowLeft: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  download: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 2v8M5 8l3 3 3-3M3 13h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  externalLink: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8.5l3.5 3.5L13 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  telegram: `<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2"><defs><style>.cls-1{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}</style></defs><path class="cls-1" d="M40.83,8.48c1.14,0,2,1,1.54,2.86l-5.58,26.3c-.39,1.87-1.52,2.32-3.08,1.45L20.4,29.26a.4.4,0,0,1,0-.65L35.77,14.73c.7-.62-.15-.92-1.07-.36L15.41,26.54a.46.46,0,0,1-.4.05L6.82,24C5,23.47,5,22.22,7.23,21.33L40,8.69a2.16,2.16,0,0,1,.83-.21Z"/></svg>`,
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
