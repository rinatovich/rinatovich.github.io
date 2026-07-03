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
  const expiryText = c.expiry
    ? `${escHtml(t('cert_issued'))} ${escHtml(c.date)} · ${escHtml(t('cert_expires'))} ${escHtml(c.expiry)}`
    : `${escHtml(t('cert_issued'))} ${escHtml(c.date)} · ${escHtml(t('cert_no_expiry'))}`;

  return `
    <article class="cert-card reveal reveal--delay-${i % 3 + 1}">
      <div class="cert-card__badge" aria-hidden="true">${escHtml(c.badge)}</div>
      <div class="cert-card__body">
        <h3 class="cert-card__name">${escHtml(c.name)}</h3>
        <p class="cert-card__issuer">${escHtml(c.issuer)}</p>
        <p class="cert-card__date">${expiryText}</p>
      </div>
      <div>
        <img src="${escHtml(c.image)}" alt="${escHtml(c.name)}" class="cert-card__image" />
      </div>
      <div class="cert-card__actions">
        ${c.valid ? `<span class="cert-card__valid">${ICONS.check} ${escHtml(t('cert_valid'))}</span>` : ''}
        <a href="${escHtml(c.verify)}" class="cert-card__verify" target="_blank" rel="noopener noreferrer">
          ${escHtml(t('cert_verify'))} ${ICONS.externalLink}
        </a>
      </div>
    </article>
  `;
}
