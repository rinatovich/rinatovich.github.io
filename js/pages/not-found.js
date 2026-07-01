/* ============================================================
   PAGE: 404 NOT FOUND
   ============================================================ */

'use strict';

function renderNotFoundPage() {
  const root = document.getElementById('app');
  root.innerHTML = `
    <section class="not-found">
      <div class="container container--sm">
        <div class="not-found__code" aria-hidden="true">404</div>
        <h1 class="not-found__title">Page not found.</h1>
        <p class="not-found__desc">The page you're looking for doesn't exist or has been moved.</p>
        <div class="not-found__actions">
          <a href="#/" class="btn btn--primary" data-route>${ICONS.arrowLeft} Back to Home</a>
          <a href="#/projects" class="btn btn--secondary" data-route>View Projects</a>
        </div>
      </div>
    </section>
  `;
  return () => {};
}
