/* ============================================================
   PAGE: CONTACT
   ============================================================ */

'use strict';

function renderContactPage() {
  const { contact, person } = SITE_DATA;
  const root = document.getElementById('app');

  const methodIcons = { linkedin: ICONS.linkedin, github: ICONS.github, email: ICONS.email, telegram: ICONS.telegram };

  root.innerHTML = `
    <section class="page-header">
      <div class="container">
        <nav class="breadcrumb reveal" aria-label="Breadcrumb">
          <a href="#/" data-route>Home</a>
          <span class="breadcrumb__sep" aria-hidden="true">/</span>
          <span aria-current="page">Contact</span>
        </nav>
        <div class="section__eyebrow reveal">Contact</div>
        <h1 class="page-header__title reveal">${escHtml(contact.title)}</h1>
        <p class="page-header__subtitle reveal">${escHtml(contact.subtitle)}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact__wrapper">

          <div class="contact__info reveal">
            <h2 class="contact__info-title">Ways to reach me</h2>
            <p class="contact__info-note">${escHtml(contact.response_time)}</p>
            <div class="contact__methods">
              ${contact.methods.map(m => `
                <a href="${escHtml(m.href)}" class="contact__method"
                   ${m.href.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                  <span class="contact__method-icon">${methodIcons[m.icon] || ''}</span>
                  <div class="contact__method-body">
                    <div class="contact__method-label">${escHtml(m.label)}</div>
                  </div>
                  <span class="contact__method-arrow">${ICONS.arrowRight}</span>
                </a>
              `).join('')}
            </div>

            <div class="contact__availability">
              <div class="contact__avail-dot"></div>
              <div>
                <div class="contact__avail-status">${escHtml(person.availability.label)}</div>
                <div class="contact__avail-note">Senior IC and technical leadership roles</div>
              </div>
            </div>
          </div>

          <form class="contact__form reveal reveal--delay-1" id="contactForm" novalidate>
            <h2 class="contact__form-title">Send a message</h2>
            <div class="form-group">
              <label for="fname">Name</label>
              <input type="text" id="fname" name="name" placeholder="Your name" required autocomplete="name"/>
            </div>
            <div class="form-group">
              <label for="femail">Email</label>
              <input type="email" id="femail" name="email" placeholder="your@email.com" required autocomplete="email"/>
            </div>
            <div class="form-group">
              <label for="fsubject">Subject <span class="form-optional">(optional)</span></label>
              <input type="text" id="fsubject" name="subject" placeholder="e.g. Technical leadership role"/>
            </div>
            <div class="form-group">
              <label for="fmessage">Message</label>
              <textarea id="fmessage" name="message" placeholder="What would you like to discuss?" required rows="5"></textarea>
            </div>
            <div class="form__success" id="formSuccess">
              ${ICONS.check} Message sent. I'll be in touch within 2 business days.
            </div>
            <button type="submit" class="btn btn--primary form__submit">
              Send Message ${ICONS.arrowRight}
            </button>
          </form>

        </div>
      </div>
    </section>
  `;

  const cleanupReveal = initScrollReveal();
  initContactFormHandler();
  return cleanupReveal;
}

function initContactFormHandler() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn     = form.querySelector('[type="submit"]');
    const success = document.getElementById('formSuccess');

    const inputs = form.querySelectorAll('[required]');
    let valid = true;
    inputs.forEach(input => {
      input.classList.remove('is-error');
      if (!input.value.trim()) { input.classList.add('is-error'); valid = false; }
    });

    const emailEl = form.querySelector('[type="email"]');
    if (emailEl && emailEl.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value)) {
      emailEl.classList.add('is-error');
      valid = false;
    }

    if (!valid) return;

    btn.disabled = true;
    btn.innerHTML = '<span class="btn-spinner"></span> Sending…';

    // Swap with Formspree in production:
    // fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body: new FormData(form), headers:{ Accept:'application/json' } })
    setTimeout(() => {
      form.querySelectorAll('.form-group').forEach(g => g.style.display = 'none');
      btn.style.display = 'none';
      if (success) success.style.display = 'flex';
    }, 900);
  });
}
