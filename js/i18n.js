/* ============================================================
   I18N
   Language state, persistence, and UI string dictionary.
   SITE_CONTENT (js/data.js) must be loaded before this file.

   Add a new language:
     1. Add a "xx" key to SITE_CONTENT in js/data.js with the same shape.
     2. Add a "xx" key to UI_STRINGS below with the same keys as "en".
     3. Add "xx" to SUPPORTED_LANGS and give it a label in LANG_META.
   ============================================================ */

'use strict';

const SUPPORTED_LANGS = ['en', 'ru', 'uz'];
const LANG_STORAGE_KEY = 'rinatovich.github.io-lang';

/** Metadata used to render the language switcher itself */
const LANG_META = {
  en: { short: 'EN', name: 'English',  htmlLang: 'en', dateLocale: 'en-US' },
  ru: { short: 'RU', name: 'Русский',  htmlLang: 'ru', dateLocale: 'ru-RU' },
  uz: { short: 'UZ', name: "O'zbek",   htmlLang: 'uz', dateLocale: 'uz-UZ' }
};

/** UI copy that lives outside SITE_CONTENT (labels, headings, buttons, etc.) */
const UI_STRINGS = {
  en: {
    site_title: 'Valiakhmad Makhamatov — Technical Project Manager & Full Stack Engineer',
    site_description: 'Technical Project Manager and Full Stack Engineer with 8+ years building scalable digital products at the intersection of engineering and business.',

    nav_resume: 'Resume',
    nav_resume_full: 'Download Resume',
    lang_switch_label: 'Switch language',

    footer_email: 'Email',
    footer_rights: 'All rights reserved',

    breadcrumb_home: 'Home',
    breadcrumb_projects: 'Projects',
    breadcrumb_certificates: 'Certificates',
    breadcrumb_writing: 'Writing',
    breadcrumb_contact: 'Contact',
    breadcrumb_about: 'About',

    hero_visual_label: 'Delivery Track Record',

    about_eyebrow: 'About',
    about_title: 'Engineering + Delivery',
    edu_section_eyebrow: 'Academic Background',
    edu_section_title: 'Education',
    edu_degree_label: 'Degree',
    skills_eyebrow: 'Technical Skills',

    work_eyebrow: 'Work',
    view_all_projects: 'View all projects',
    read_case_study: 'Read case study',
    view_live_project: 'View live project',

    writing_eyebrow: 'Writing',
    all_articles: 'All articles',
    read_article: 'Read article',

    get_in_touch: 'Get in touch',

    credentials_eyebrow: 'Credentials',
    cert_valid: 'Valid',
    cert_issued: 'Issued',
    cert_expires: 'Expires',
    cert_no_expiry: 'No expiry',
    cert_verify: 'Verify',
    education_eyebrow: 'Education & Certifications',
    education_title: 'Where I studied and what I earned',
    view_all_certificates: 'View all certificates',

    project_not_found: 'Project not found',
    back_to_projects: 'Back to Projects',
    item_missing: "This item doesn't exist or may have been moved.",
    label_client: 'Client',
    label_duration: 'Duration',
    label_team: 'Team',
    section_overview: 'Overview',
    section_problem: 'The Problem',
    section_approach: 'Approach',
    section_challenges: 'Challenges',
    section_results: 'Results',
    section_lessons: 'Lessons Learned',
    section_stack: 'Tech Stack',
    more_work_eyebrow: 'More Work',
    related_projects: 'Related Projects',
    back_to_all_projects: 'Back to all projects',

    article_not_found: 'Article not found',
    back_to_writing: 'Back to Writing',
    back_to_all_articles: 'Back to all articles',
    keep_reading_eyebrow: 'Keep Reading',
    more_articles: 'More Articles',

    contact_eyebrow: 'Contact',
    ways_to_reach: 'Ways to reach me',
    avail_note: 'Senior IC and technical leadership roles',
    form_title: 'Send a message',
    form_name: 'Name',
    form_name_ph: 'Your name',
    form_email: 'Email',
    form_email_ph: 'your@email.com',
    form_subject: 'Subject',
    form_optional: '(optional)',
    form_subject_ph: 'e.g. Technical leadership role',
    form_message: 'Message',
    form_message_ph: 'What would you like to discuss?',
    form_success: "Message sent. I'll be in touch within 2 business days.",
    form_submit: 'Send Message',
    form_sending: 'Sending…',
    form_error_required: 'Please fill in your name, email, and message.',
    form_error_generic: "Couldn't send the message. Please try again or email me directly.",

    notfound_title: 'Page not found.',
    notfound_desc: "The page you're looking for doesn't exist or has been moved.",
    notfound_home: 'Back to Home',
    notfound_projects: 'View Projects'
  },

  ru: {
    site_title: 'Валиахмад Махаматов — технический руководитель проектов и Full Stack инженер',
    site_description: 'Технический руководитель проектов и Full Stack инженер с опытом 8+ лет в создании масштабируемых цифровых продуктов на стыке инженерии и бизнеса.',

    nav_resume: 'Резюме',
    nav_resume_full: 'Скачать резюме',
    lang_switch_label: 'Сменить язык',

    footer_email: 'Email',
    footer_rights: 'Все права защищены',

    breadcrumb_home: 'Главная',
    breadcrumb_projects: 'Проекты',
    breadcrumb_certificates: 'Сертификаты',
    breadcrumb_writing: 'Блог',
    breadcrumb_contact: 'Контакты',
    breadcrumb_about: 'Обо мне',

    hero_visual_label: 'Показатели деливери',

    about_eyebrow: 'Обо мне',
    about_title: 'Инженерия + Деливери',
    edu_section_eyebrow: 'Академический бэкграунд',
    edu_section_title: 'Образование',
    edu_degree_label: 'Специальность',
    skills_eyebrow: 'Технические навыки',

    work_eyebrow: 'Работа',
    view_all_projects: 'Все проекты',
    read_case_study: 'Читать кейс',
    view_live_project: 'Открыть проект',

    writing_eyebrow: 'Блог',
    all_articles: 'Все статьи',
    read_article: 'Читать статью',

    get_in_touch: 'Связаться',

    credentials_eyebrow: 'Квалификации',
    cert_valid: 'Действителен',
    cert_issued: 'Выдан',
    cert_expires: 'Истекает',
    cert_no_expiry: 'Бессрочно',
    cert_verify: 'Проверить',
    view_all_certificates: 'Смотреть все сертификаты',

    project_not_found: 'Проект не найден',
    back_to_projects: 'К списку проектов',
    item_missing: 'Этот раздел не существует или был перемещён.',
    label_client: 'Клиент',
    label_duration: 'Срок',
    label_team: 'Команда',
    section_overview: 'Обзор',
    section_problem: 'Проблема',
    section_approach: 'Подход',
    section_challenges: 'Сложности',
    section_results: 'Результаты',
    section_lessons: 'Выводы',
    section_stack: 'Стек технологий',
    more_work_eyebrow: 'Ещё работы',
    related_projects: 'Похожие проекты',
    back_to_all_projects: 'Ко всем проектам',

    article_not_found: 'Статья не найдена',
    back_to_writing: 'К блогу',
    back_to_all_articles: 'Ко всем статьям',
    keep_reading_eyebrow: 'Читать далее',
    more_articles: 'Другие статьи',

    contact_eyebrow: 'Контакты',
    ways_to_reach: 'Как со мной связаться',
    avail_note: 'Senior-роли в инженерии и техническом лидерстве',
    form_title: 'Написать сообщение',
    form_name: 'Имя',
    form_name_ph: 'Ваше имя',
    form_email: 'Email',
    form_email_ph: 'your@email.com',
    form_subject: 'Тема',
    form_optional: '(необязательно)',
    form_subject_ph: 'например, техническое лидерство',
    form_message: 'Сообщение',
    form_message_ph: 'Что вы хотите обсудить?',
    form_success: 'Сообщение отправлено. Отвечу в течение 2 рабочих дней.',
    form_submit: 'Отправить',
    form_sending: 'Отправка…',
    form_error_required: 'Пожалуйста, заполните имя, email и сообщение.',
    form_error_generic: 'Не удалось отправить сообщение. Попробуйте ещё раз или напишите мне напрямую.',

    notfound_title: 'Страница не найдена.',
    notfound_desc: 'Страница, которую вы ищете, не существует или была перемещена.',
    notfound_home: 'На главную',
    notfound_projects: 'Смотреть проекты'
  },

  uz: {
    site_title: 'Valiakhmad Makhamatov — Texnik loyiha menejeri va Full Stack muhandis',
    site_description: '8 yildan ortiq tajribaga ega texnik loyiha menejeri va Full Stack muhandis, muhandislik va biznes chorrahasida masshtablanuvchi raqamli mahsulotlar yaratadi.',

    nav_resume: 'Rezyume',
    nav_resume_full: 'Rezyumeni yuklab olish',
    lang_switch_label: 'Tilni almashtirish',

    footer_email: 'Email',
    footer_rights: 'Barcha huquqlar himoyalangan',

    breadcrumb_home: 'Bosh sahifa',
    breadcrumb_projects: 'Loyihalar',
    breadcrumb_certificates: 'Sertifikatlar',
    breadcrumb_writing: 'Blog',
    breadcrumb_contact: 'Aloqa',
    breadcrumb_about: 'Men haqimda',

    hero_visual_label: "Ish natijalari ko'rsatkichlari",

    about_eyebrow: 'Men haqimda',
    about_title: 'Muhandislik + Yetkazib berish',
    edu_section_eyebrow: 'Akademik tayyorgarlik',
    edu_section_title: "Ta'lim",
    edu_degree_label: "Mutaxassislik",
    skills_eyebrow: 'Texnik ko\'nikmalar',

    work_eyebrow: 'Ish',
    view_all_projects: "Barcha loyihalarni ko'rish",
    read_case_study: "Keysni o'qish",
    view_live_project: "Loyihani ochish",

    writing_eyebrow: 'Blog',
    all_articles: 'Barcha maqolalar',
    read_article: "Maqolani o'qish",

    get_in_touch: "Bog'lanish",

    credentials_eyebrow: 'Malakalar',
    cert_valid: 'Amal qiladi',
    cert_issued: 'Berilgan',
    cert_expires: 'Amal qilish muddati',
    cert_no_expiry: 'Muddatsiz',
    cert_verify: 'Tekshirish',
    view_all_certificates: 'Barcha sertifikatlarni ko\'rish',

    project_not_found: 'Loyiha topilmadi',
    back_to_projects: 'Loyihalarga qaytish',
    item_missing: "Bu bo'lim mavjud emas yoki ko'chirilgan.",
    label_client: 'Mijoz',
    label_duration: 'Muddat',
    label_team: 'Jamoa',
    section_overview: 'Umumiy ko\'rinish',
    section_problem: 'Muammo',
    section_approach: 'Yondashuv',
    section_challenges: 'Qiyinchiliklar',
    section_results: 'Natijalar',
    section_lessons: 'Xulosalar',
    section_stack: 'Texnologiyalar to\'plami',
    more_work_eyebrow: "Boshqa ishlar",
    related_projects: "O'xshash loyihalar",
    back_to_all_projects: 'Barcha loyihalarga qaytish',

    article_not_found: 'Maqola topilmadi',
    back_to_writing: 'Blogga qaytish',
    back_to_all_articles: 'Barcha maqolalarga qaytish',
    keep_reading_eyebrow: "O'qishni davom ettiring",
    more_articles: 'Boshqa maqolalar',

    contact_eyebrow: 'Aloqa',
    ways_to_reach: "Men bilan bog'lanish usullari",
    avail_note: 'Senior darajadagi muhandislik va texnik rahbarlik lavozimlari',
    form_title: 'Xabar yuborish',
    form_name: 'Ism',
    form_name_ph: 'Ismingiz',
    form_email: 'Email',
    form_email_ph: 'your@email.com',
    form_subject: 'Mavzu',
    form_optional: '(ixtiyoriy)',
    form_subject_ph: 'masalan, texnik rahbarlik lavozimi',
    form_message: 'Xabar',
    form_message_ph: 'Nimani muhokama qilmoqchisiz?',
    form_success: '2 ish kuni ichida javob beraman.',
    form_submit: 'Yuborish',
    form_sending: 'Yuborilmoqda…',
    form_error_required: "Iltimos, ismingiz, email va xabar maydonlarini to'ldiring.",
    form_error_generic: "Xabarni yuborib bo'lmadi. Qaytadan urinib ko'ring yoki menga to'g'ridan-to'g'ri email yozing.",

    notfound_title: 'Sahifa topilmadi.',
    notfound_desc: "Siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan.",
    notfound_home: 'Bosh sahifaga qaytish',
    notfound_projects: "Loyihalarni ko'rish"
  }
};

/* ── Language detection & persistence ────────────────────── */

function detectInitialLang() {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  } catch (e) { /* localStorage unavailable — ignore */ }

  const nav = (navigator.language || navigator.userLanguage || 'en').slice(0, 2).toLowerCase();
  return SUPPORTED_LANGS.includes(nav) ? nav : 'en';
}

let currentLang = detectInitialLang();
let SITE_DATA = SITE_CONTENT[currentLang];

/** Translate a UI string key for the current language (falls back to English) */
function t(key) {
  const dict = UI_STRINGS[currentLang] || UI_STRINGS.en;
  if (dict && Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
  return UI_STRINGS.en[key] !== undefined ? UI_STRINGS.en[key] : key;
}

function getLang() {
  return currentLang;
}

/** Switch the active language, update storage/DOM, and notify listeners */
function setLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang) || lang === currentLang) return;

  currentLang = lang;
  SITE_DATA = SITE_CONTENT[lang];

  try { localStorage.setItem(LANG_STORAGE_KEY, lang); } catch (e) { /* ignore */ }

  document.documentElement.setAttribute('lang', LANG_META[lang].htmlLang);
  document.title = t('site_title');

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t('site_description'));

  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}
