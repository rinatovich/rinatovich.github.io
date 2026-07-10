/* ============================================================
   PAGE: CONTACT
   ============================================================ */

'use strict';

function renderContactPage() {
  const { contact, person } = SITE_DATA;
  const root = document.getElementById('app');

  root.innerHTML = `
    <section class="page-header">
      <div class="container container--md">
        <nav class="breadcrumb reveal" aria-label="Breadcrumb">
          <a href="#/" data-route>${escHtml(t('breadcrumb_home'))}</a>
          <span class="breadcrumb__sep" aria-hidden="true">/</span>
          <span aria-current="page">${escHtml(t('breadcrumb_contact'))}</span>
        </nav>
        <div class="section__eyebrow reveal">${escHtml(t('contact_eyebrow'))}</div>
        <h1 class="page-header__title reveal">${escHtml(contact.title)}</h1>
        <p class="page-header__subtitle reveal">${escHtml(contact.subtitle)}</p>
      </div>
    </section>

    <section class="section">
      <div class="container container--md">
        <div class="contact__grid">

          <div class="contact__info reveal">
            <!-- <div class="contact__avail">
              <span class="hero__dot" aria-hidden="true"></span>
              <span>${escHtml(person.availability.label)} — ${escHtml(t('avail_note'))}</span>
            </div> -->

            <h2 class="contact__info-title">${escHtml(t('ways_to_reach'))}</h2>
            <div class="contact__methods">
              ${contact.methods.map(m => `
                <a href="${escHtml(m.href)}" class="contact__method"
                   ${m.icon !== 'email' ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                  <span class="contact__method-icon">${ICONS[m.icon] || ''}</span>
                  <span class="contact__method-label">${escHtml(m.label)}</span>
                  ${ICONS.arrowRight}
                </a>
              `).join('')}
            </div>

            <p class="contact__response-time">${escHtml(contact.response_time)}</p>
          </div>
          
          <!-- Form 
          <div class="contact__form-wrap reveal">
            <form class="contact__form" id="contactForm" novalidate>
              <h2 class="contact__form-title">${escHtml(t('form_title'))}</h2>

              <div class="form-field">
                <label for="cf-name">${escHtml(t('form_name'))}</label>
                <input type="text" id="cf-name" name="name" placeholder="${escHtml(t('form_name_ph'))}" required>
              </div>

              <div class="form-field">
                <label for="cf-email">${escHtml(t('form_email'))}</label>
                <input type="email" id="cf-email" name="email" placeholder="${escHtml(t('form_email_ph'))}" required>
              </div>

              <div class="form-field">
                <label for="cf-subject">${escHtml(t('form_subject'))} <span class="form-field__optional">${escHtml(t('form_optional'))}</span></label>
                <input type="text" id="cf-subject" name="subject" placeholder="${escHtml(t('form_subject_ph'))}">
              </div>

              <div class="form-field">
                <label for="cf-message">${escHtml(t('form_message'))}</label>
                <textarea id="cf-message" name="message" rows="5" placeholder="${escHtml(t('form_message_ph'))}" required></textarea>
              </div>

             
              <div class="form-field form-field--hp" aria-hidden="true">
                <label for="cf-website">Website</label>
                <input type="text" id="cf-website" name="website" tabindex="-1" autocomplete="off">
              </div>

              <button type="submit" class="btn btn--primary form-submit" id="cfSubmit">
                <span class="form-submit__label">${escHtml(t('form_submit'))}</span>
                ${ICONS.arrowRight}
              </button>

              <p class="form-error" id="cfError" hidden></p>

              <div class="form-success" id="cfSuccess" hidden>
                ${ICONS.check}
                <span>${escHtml(t('form_success'))}</span>
              </div>
            </form>
          </div>
          -->

        </div>
      </div>
    </section>
  `;

  const cleanupReveal = initScrollReveal();
  bindContactForm();
  return cleanupReveal;
}

function bindContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const submit = document.getElementById('cfSubmit');
  const label = submit.querySelector('.form-submit__label');
  const success = document.getElementById('cfSuccess');
  const errorBox = document.getElementById('cfError');

  form.addEventListener('submit', async e => {
    e.preventDefault();

    // Honeypot: if this hidden field got filled in, silently "succeed"
    // without sending anything — it's almost certainly a bot.
    const hp = form.querySelector('#cf-website');
    if (hp && hp.value.trim() !== '') {
      form.reset();
      showFormSuccess();
      return;
    }

    errorBox.hidden = true;
    success.hidden = true;
    success.classList.remove('is-visible');

    const name = form.querySelector('#cf-name').value.trim();
    const email = form.querySelector('#cf-email').value.trim();
    const subject = form.querySelector('#cf-subject').value.trim();
    const message = form.querySelector('#cf-message').value.trim();

    if (!name || !email || !message) {
      showFormError(t('form_error_required'));
      return;
    }

    submit.disabled = true;
    label.textContent = t('form_sending');

    try {
      await sendToTelegram({ name, email, subject, message });
      form.reset();
      showFormSuccess();
    } catch (err) {
      showFormError(t('form_error_generic'));
    } finally {
      submit.disabled = false;
      label.textContent = t('form_submit');
    }
  });

  function showFormSuccess() {
    success.hidden = false;
    requestAnimationFrame(() => success.classList.add('is-visible'));
  }

  function showFormError(msg) {
    errorBox.textContent = msg;
    errorBox.hidden = false;
  }
}

/**
 * Sends the contact-form payload directly to a Telegram chat via the
 * Bot API — no backend required. Configure the bot token/chat ID in
 * js/telegram-config.js.
 */
async function sendToTelegram({ name, email, subject, message }) {
  if (typeof TELEGRAM_CONFIG === 'undefined' ||
      !TELEGRAM_CONFIG.BOT_TOKEN || TELEGRAM_CONFIG.BOT_TOKEN === 'YOUR_BOT_TOKEN_HERE' ||
      !TELEGRAM_CONFIG.CHAT_ID || TELEGRAM_CONFIG.CHAT_ID === 'YOUR_CHAT_ID_HERE') {
    throw new Error('Telegram is not configured yet — edit js/telegram-config.js');
  }

  const lines = [
    '📩 New message from the site',
    `👤 Name: ${name}`,
    `✉️ Email: ${email}`,
    subject ? `📝 Subject: ${subject}` : null,
    '',
    message
  ].filter(Boolean);

  const url = `https://api.telegram.org/bot${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CONFIG.CHAT_ID,
      text: lines.join('\n')
    })
  });

  const data = await res.json().catch(() => null);
  if (!res.ok || !data || data.ok !== true) {
    throw new Error((data && data.description) || 'Telegram request failed');
  }
}
