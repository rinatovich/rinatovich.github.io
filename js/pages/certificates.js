/* ============================================================
   PAGE: CERTIFICATES
   ============================================================ */

'use strict';

function renderCertificatesPage() {
  const { certificates } = SITE_DATA;
  const root = document.getElementById('app');

  root.innerHTML = `
    <section class="page-header">
      <div class="container">
        <nav class="breadcrumb reveal" aria-label="Breadcrumb">
          <a href="#/" data-route>Home</a>
          <span class="breadcrumb__sep" aria-hidden="true">/</span>
          <span aria-current="page">Certificates</span>
        </nav>
        <div class="section__eyebrow reveal">Credentials</div>
        <h1 class="page-header__title reveal">${escHtml(certificates.title)}</h1>
        <p class="page-header__subtitle reveal">${escHtml(certificates.subtitle)}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="certs__grid">
          ${certificates.items.map((c, i) => renderCertCard(c, i)).join('')}
        </div>
      </div>
    </section>
  `;

  return initScrollReveal();
}

function renderCertCard(c, i) {
  const expiryStr = c.expiry
    ? `Issued ${escHtml(c.date)} · Expires ${escHtml(c.expiry)}`
    : `Issued ${escHtml(c.date)} · No expiry`;

  return `
    <div class="cert-card reveal reveal--delay-${i % 3 + 1}">
      <div class="cert-card__top">
        <div class="cert-card__badge">${escHtml(c.badge)}</div>
        ${c.valid ? `<span class="cert-card__status cert-card__status--valid">${ICONS.check} Valid</span>` : ''}
      </div>
      <div>
        <div class="cert-card__name">${escHtml(c.name)}</div>
        <div class="cert-card__issuer">${escHtml(c.issuer)}</div>
      </div>
      <div>
        <img src="${escHtml(c.image)}" alt="${escHtml(c.name)}" class="cert-card__image" />
      </div>
      <div class="cert-card__footer">
        <div class="cert-card__dates">${expiryStr}</div>
        <a href="${escHtml(c.verify)}" target="_blank" rel="noopener noreferrer" class="cert-card__verify">
          Verify ${ICONS.externalLink}
        </a>
      </div>
    </div>
  `;
}
