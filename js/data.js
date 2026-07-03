/* ============================================================
   SITE CONTENT (multilingual)
   Single source of truth for all content on the rinatovich.github.io, per language.
   Add a new language by adding a new top-level key here (e.g. "de")
   and a matching UI_STRINGS entry in js/i18n.js.
   ============================================================ */

'use strict';

const SITE_CONTENT = {

  /* ==========================================================
     ENGLISH
     ========================================================== */
  en: {
    "person": {
      "name": "Valiakhmad Makhamatov",
      "role": "Technical Project Manager & Full Stack Engineer",
      "location": "Remote · UTC+5",
      "email": "hello@valiakhmad.dev",
      "linkedin": "https://linkedin.com/in/valiakhmad",
      "github": "https://github.com/valiakhmad",
      "cv": "assets/valiakhmad-makhamatov-cv-2025.pdf",
      "availability": { "open": true, "label": "Open to opportunities" }
    },

    "hero": {
      "eyebrow": "Technical Project Manager & Full Stack Engineer",
      "headline": "Valiakhmad\nMakhamatov",
      "description": "I bridge engineering complexity and business outcomes. With 8+ years of experience, I architect scalable systems, lead cross-functional teams, and ship products that outlast the sprint cycle.",
      "cta_primary": { "label": "View Projects", "href": "#/projects" },
      "cta_secondary": { "label": "Download Resume", "href": "assets/valiakhmad-makhamatov-cv-2025.pdf" }
    },

    "about": {
      "title": "About",
      "paragraphs": [
        "I work at the intersection of software engineering and product delivery — where architectural decisions meet business constraints, and where team dynamics determine whether a good idea ships or stalls.",
        "My background spans full-stack engineering, platform architecture, and technical project management. I've led teams of 4 to 20, rebuilt legacy monoliths without downtime, and reduced deployment cycles from weeks to hours.",
        "I believe the best technical leaders write code and talk to customers. Both habits make you sharper."
      ],
      "stats": [
        { "value": "8+",  "label": "Years in product delivery" },
        { "value": "12",  "label": "Products shipped" },
        { "value": "40%", "label": "Avg. deploy time reduction" },
        { "value": "20",  "label": "Engineers led" }
      ]
    },

    "skills": {
      "title": "Technical Skills",
      "categories": [
        { "name": "Languages",      "items": ["TypeScript", "Python", "Go", "SQL", "Bash"] },
        { "name": "Frontend",       "items": ["React", "Next.js", "CSS / Tailwind", "Framer Motion"] },
        { "name": "Backend",        "items": ["Node.js", "FastAPI", "PostgreSQL", "Redis", "GraphQL"] },
        { "name": "Infrastructure", "items": ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform"] },
        { "name": "Management",     "items": ["Technical Roadmapping", "OKRs", "Sprint Planning", "Architecture Review", "Hiring"] }
      ]
    },

    "projects": {
      "title": "Selected Work",
      "subtitle": "Case studies from projects where both the engineering and the outcome mattered.",
      "items": [
        {
          "id": "platform-rebuild",
          "title": "Platform Rebuild Without Downtime",
          "domain": "Platform Engineering",
          "year": "2023",
          "description": "Migrated a 5-year-old monolith serving 1,000 concurrent users to a microservices architecture. Zero downtime. 6-month timeline. Team of 6 engineers.",
          "outcome": "10× capacity increase. 40% reduction in infrastructure cost.",
          "tags": ["Next.js", "Node.js", "AWS ECS", "PostgreSQL"],
          "role": "Tech Lead / Architect",
          "detail": {
            "client": "B2B SaaS Platform (Series B)",
            "duration": "6 months",
            "team": "6 engineers, 1 designer, 1 PM",
            "overview": "The existing platform was a five-year-old monolith built during the company's earliest days. It worked — until it didn't. As traffic grew past 1,000 concurrent users, response times degraded, deploys became risky multi-hour events, and every new feature took longer to ship than the last.",
            "problem": [
              "The monolith had no clear service boundaries — a change to billing code could break the dashboard.",
              "Deploys required a 2-hour maintenance window, scheduled around customer time zones.",
              "The team was afraid to refactor anything, because nobody fully understood the dependency graph anymore."
            ],
            "approach": [
              "We rejected a full rewrite. A 6-month feature freeze was commercially impossible for a company mid-fundraise.",
              "Instead, we used the Strangler Fig pattern: new functionality was built as standalone services from day one, and existing functionality was peeled off the monolith incrementally, one bounded context at a time.",
              "We introduced an API gateway in front of both the monolith and new services, so the frontend never knew which system was answering a request.",
              "Each migrated service got its own datastore, deployment pipeline, and on-call rotation — forcing real ownership boundaries."
            ],
            "challenges": [
              "Shared database tables were the hardest problem. Two services often read and wrote the same table for different reasons, and untangling that required a temporary dual-write period with reconciliation jobs.",
              "We underestimated how much business logic was implicit in unindexed SQL queries — three weeks were lost rebuilding that logic explicitly in the new services."
            ],
            "results": [
              { "metric": "10× concurrent user capacity",  "detail": "From ~1,000 to 10,000+ concurrent users without re-architecting again" },
              { "metric": "40% lower infrastructure cost",  "detail": "Right-sized containers per service vs. one oversized monolith instance" },
              { "metric": "Zero downtime",                  "detail": "Entire migration shipped without a single customer-facing outage" },
              { "metric": "Deploy time: 2hrs → 8min",        "detail": "Per-service deploys replaced the monolithic release process" }
            ],
            "lessons": "Instrument before you migrate. We added observability to new services from day one, but the legacy monolith stayed a black box until late in the project — and that blind spot cost us the most time."
          }
        },
        {
          "id": "ci-cd-overhaul",
          "title": "CI/CD Pipeline Overhaul",
          "domain": "Developer Experience",
          "year": "2022",
          "description": "Redesigned deployment pipelines across 4 product teams. Introduced trunk-based development, automated testing gates, and environment promotion workflows.",
          "outcome": "Deploy frequency: weekly → daily. Rollback time: 2 hours → 4 minutes.",
          "tags": ["GitHub Actions", "Docker", "Terraform", "Datadog"],
          "role": "Technical PM",
          "detail": {
            "client": "Mid-size fintech, 4 product teams",
            "duration": "3 months",
            "team": "2 platform engineers + 1 TPM (me), embedded across 4 teams",
            "overview": "Four product teams shared one deployment pipeline, originally built for a single team two years earlier. Every team's release competed for the same queue. A failed test in one team's code could block every other team's release for hours.",
            "problem": [
              "One shared Jenkins pipeline, no isolation between teams' build queues.",
              "Manual QA sign-off was required before any production deploy — releases happened once a week, on Thursdays, by tradition.",
              "Rolling back a bad deploy meant re-running the entire pipeline from scratch — roughly 2 hours."
            ],
            "approach": [
              "Migrated from Jenkins to GitHub Actions with per-team, per-service pipelines — eliminating the shared queue entirely.",
              "Introduced trunk-based development with short-lived feature branches and mandatory automated test gates before merge.",
              "Built a one-click rollback mechanism using immutable container tags — rolling back became 'redeploy the previous tag', not 're-run everything'.",
              "Ran weekly 'deploy office hours' for the first month to coach teams through the new workflow."
            ],
            "challenges": [
              "Two teams had test suites that took 25+ minutes to run, which made the new 'merge requires green tests' policy painful. We had to parallelize their test runners before the new process was viable.",
              "Cultural resistance to giving up the weekly release cadence — some engineers were nervous about daily production deploys at first."
            ],
            "results": [
              { "metric": "Daily deploys",            "detail": "Up from one fixed release day per week" },
              { "metric": "Rollback: 2hrs → 4min",     "detail": "Via immutable tag redeploys instead of full pipeline reruns" },
              { "metric": "Build queue eliminated",    "detail": "Each team now deploys independently, with zero cross-team blocking" },
              { "metric": "Test suite: 25min → 6min",  "detail": "After parallelization across the two slowest teams" }
            ],
            "lessons": "The technical migration was the easy part. The harder part was convincing engineers that daily deploys were safer than weekly ones — smaller diffs are easier to debug. That took weeks of trust-building, not days."
          }
        },
        {
          "id": "b2b-saas-mvp",
          "title": "B2B SaaS MVP — 0 to Launch",
          "domain": "Product Engineering",
          "year": "2021",
          "description": "Took a fintech B2B product from whiteboard to production in 4 months. Owned both technical architecture and sprint delivery. First paying customer in week 16.",
          "outcome": "$120K ARR at launch. Raised seed round 3 months later.",
          "tags": ["React", "FastAPI", "PostgreSQL", "Stripe"],
          "role": "Full Stack Engineer / TPM",
          "detail": {
            "client": "Pre-seed fintech startup (2 co-founders)",
            "duration": "4 months",
            "team": "Me + 1 contract designer, founders handled sales",
            "overview": "Two non-technical co-founders had a validated idea and a handful of LOIs from prospective customers, but no product. I was brought on as the first technical hire, responsible for both building the MVP and running the delivery process — there was no separate PM.",
            "problem": [
              "No existing technical infrastructure — literally starting from an empty repository.",
              "Founders needed something demoable to close their first paying customers within 4 months, or risk losing the LOIs.",
              "Budget for infrastructure and third-party services was near zero pre-seed."
            ],
            "approach": [
              "Scoped a deliberately narrow MVP — one core workflow, done well, instead of five workflows done partially.",
              "Used boring, well-understood technology (React, FastAPI, PostgreSQL) to maximize my own velocity as a solo engineer.",
              "Ran weekly demos with the founders, who relayed feedback from prospective customers in near real time — effectively a 1-week feedback loop with the market.",
              "Integrated Stripe billing in week 10, ahead of schedule, so the first customer could be invoiced immediately at signature."
            ],
            "challenges": [
              "Being the only engineer meant every architectural decision was mine alone, with no one to sanity-check tradeoffs. I leaned on weekly async code review from a friend at another company as an informal safety net.",
              "Two prospective customers asked for features that would have doubled the scope. Saying no to both, twice, was the hardest and most valuable decision of the project."
            ],
            "results": [
              { "metric": "$120K ARR at launch",     "detail": "Three paying customers signed before the public launch date" },
              { "metric": "First customer: week 16", "detail": "Within the original 4-month target" },
              { "metric": "Seed round closed",       "detail": "3 months post-launch, citing working product as key diligence factor" },
              { "metric": "Zero scope creep features shipped", "detail": "Two large feature requests were deliberately declined pre-launch" }
            ],
            "lessons": "Saying no to a customer's feature request before launch is uncomfortable but often correct. Both declined features turned out to be edge cases that fewer than 5% of later customers ever needed."
          }
        }
      ]
    },

    "certificates": {
      "title": "Certifications",
      "subtitle": "Verified professional credentials.",
      "items": [
        {
          "name": "CS50's Compyuter Science",
          "issuer": "Edx and Harvard University",
          "date": "2021",
          "expiry": null,
          "valid": true,
          "image": "../../assets/img/certificates/img/Makhamatov_Valiakhmad_CS50_Harvard_EDU-2-1.png",
          "verify": "../../assets/img/certificates/pdf/Makhamatov_Valiakhmad_CS50_Harvard_EDU-2.pdf",
          "badge": "CS"
        },
        {
          "name": "Fullstack Web Development",
          "issuer": "STARK EDU",
          "date": "2019",
          "expiry": null,
          "valid": true,
          "image": "../../assets/img/certificates/img/Stark_EDU_Certificate-1.png",
          "verify": "../../assets/img/certificates/pdf/Stark_EDU_Certificate.pdf",
          "badge": "WEB"
        },
        {
          "name": "Fortinet Certified Fundamentals in Cybersecurity",
          "issuer": "Fortinet",
          "date": "2025",
          "expiry": "2027",
          "valid": true,
          "image": "../../assets/img/certificates/img/Valiakhmad Makhamatov FCF Cybersecurity-3-1.png",
          "verify": "../../assets/img/certificates/pdf/Valiakhmad Makhamatov FCF Cybersecurity-3.pdf",
          "badge": "CS"
        },
        {
          "name": "Introduction to the Threat Landscape",
          "issuer": "Fortinet",
          "date": "2025",
          "expiry": null,
          "valid": true,
          "image": "../../assets/img/certificates/img/Course_Completion_Certificate-2-1.png",
          "verify": "../../assets/img/certificates/pdf/Course_Completion_Certificate-2.pdf",
          "badge": "CS"
        },
        {
          "name": "Project management",
          "issuer": "Google",
          "date": "2022",
          "expiry": null,
          "valid": true,
          "image": "../../assets/img/certificates/img/Makhamatov_Valiakhmad_GPM-1-1.png",
          "verify": "../../assets/img/certificates/pdf/Makhamatov_Valiakhmad_GPM-1.pdf",
          "badge": "PM"
        }
      ]
    },

    "blog": {
      "title": "Writing",
      "subtitle": "Observations on engineering, product, and the space between.",
      "items": [
        {
          "id": "why-platform-teams-fail",
          "title": "Why Platform Teams Fail (And How to Fix It)",
          "date": "2024-11-12",
          "readTime": "7 min read",
          "category": "Engineering",
          "excerpt": "Platform teams that focus on tooling instead of developer experience don't fail because the tools are bad. They fail because they forgot who they're building for.",
          "content": [
            { "type": "p", "text": "I've watched three platform teams fail in the last five years, and they all failed for the same reason — not bad tooling, but a forgotten audience." },
            { "type": "h2", "text": "The pattern" },
            { "type": "p", "text": "A platform team is formed. They're smart, motivated, and given real autonomy. They build something genuinely impressive — a self-service deployment system, a beautiful internal CLI, a service mesh. Six months later, adoption is near zero and the team is being asked to justify its headcount." },
            { "type": "p", "text": "What went wrong wasn't the engineering. It was that the platform team spent six months building for an imagined ideal user instead of the actual, busy, skeptical engineer down the hall." },
            { "type": "h2", "text": "Three early warning signs" },
            { "type": "list", "items": [
              "The platform team's roadmap has no item that came directly from a product engineer's complaint.",
              "Nobody on the platform team has shipped a customer-facing feature using their own platform.",
              "Adoption is being driven by a mandate, not by the platform being obviously better than the alternative."
            ]},
            { "type": "h2", "text": "What actually works" },
            { "type": "p", "text": "The platform teams I've seen succeed all did one unglamorous thing: they embedded with a product team for a full sprint before writing a line of platform code. Not a workshop. Not an interview. Actual pairing, actual on-call, actual deploy-day stress." },
            { "type": "quote", "text": "If your platform team can't tell you the name of the engineer who was paged at 2am last week because of a deploy failure, they're not close enough to the problem." },
            { "type": "p", "text": "Platform engineering is a product discipline wearing infrastructure clothing. Treat it that way, and the tooling tends to follow." }
          ]
        },
        {
          "id": "technical-pm-dilemma",
          "title": "The Technical PM's Dilemma: Code or Coordinate?",
          "date": "2024-09-03",
          "readTime": "5 min read",
          "category": "Leadership",
          "excerpt": "The best technical project managers I've worked with share one habit: they keep their hands in the codebase. Not to prove a point — to stay honest.",
          "content": [
            { "type": "p", "text": "Somewhere around your third year as a technical PM, you'll be told — gently, by someone senior — that you should stop writing code. Your time is better spent coordinating, the argument goes. Let the engineers engineer." },
            { "type": "p", "text": "I think this advice is half right and dangerously incomplete." },
            { "type": "h2", "text": "The case for stepping back" },
            { "type": "p", "text": "It's true that a TPM who spends six hours a day in an IDE isn't doing the coordination work the team needs. Sprint planning doesn't run itself. Stakeholder updates don't write themselves. There's real opportunity cost to staying heads-down in code." },
            { "type": "h2", "text": "The case for staying close" },
            { "type": "p", "text": "But there's a specific failure mode I've watched happen to TPMs who fully step away from code: they lose the ability to smell when an estimate is wrong. Not calculate — smell. A felt sense, built from muscle memory, that a 'two day' task is actually a five day task wearing a disguise." },
            { "type": "list", "items": [
              "Without that instinct, every estimate has to be taken on faith.",
              "Without that instinct, technical debt conversations become abstract instead of concrete.",
              "Without that instinct, you can't credibly push back when an engineer says something is harder than it looks — because you genuinely don't know."
            ]},
            { "type": "h2", "text": "My actual practice" },
            { "type": "p", "text": "I keep one small, real piece of the codebase that I own end to end — usually something low-stakes, like an internal tool or a small service. Not because the org needs me to ship it. Because I need to ship it, to stay calibrated." },
            { "type": "quote", "text": "Coordination without technical calibration becomes management theater. You're moving sticky notes you don't understand." }
          ]
        },
        {
          "id": "strangler-fig-playbook",
          "title": "Strangler Fig Migration: A Practical Playbook",
          "date": "2024-06-20",
          "readTime": "12 min read",
          "category": "Architecture",
          "excerpt": "A big-bang rewrite is almost always the wrong call. Here's the step-by-step approach I've used to migrate three legacy monoliths without a feature freeze.",
          "content": [
            { "type": "p", "text": "I've now run three Strangler Fig migrations on three very different monoliths — a Rails e-commerce platform, a PHP fintech backend, and the Node.js platform described in my Platform Rebuild case study. The specifics differ every time. The playbook doesn't." },
            { "type": "h2", "text": "Step 1 — Map the bounded contexts first" },
            { "type": "p", "text": "Before writing any migration code, spend real time — a week, sometimes two — mapping which parts of the monolith actually represent distinct business domains. This is slower than it sounds, because monoliths actively obscure their own boundaries through years of expedient coupling." },
            { "type": "h2", "text": "Step 2 — Pick the lowest-risk service first" },
            { "type": "p", "text": "Resist the temptation to migrate the most painful part of the system first. Migrate the part with the fewest dependents and the clearest boundary. The first migration's job is to prove the pattern works in your specific environment — not to deliver maximum immediate value." },
            { "type": "h2", "text": "Step 3 — Put a gateway in front of everything" },
            { "type": "p", "text": "An API gateway (or even a simple reverse proxy with routing rules) that sits in front of both the monolith and the new services is non-negotiable. It lets you migrate routes one at a time, invisibly to the frontend." },
            { "type": "h2", "text": "Step 4 — Dual-write before you cut over" },
            { "type": "p", "text": "For any data that both the monolith and the new service need, run a dual-write period: both systems write, but only one is the source of truth, and you reconcile differences. This is tedious. It is also the single highest-leverage step for avoiding data loss during migration." },
            { "type": "list", "items": [
              "Dual-write for at least one full business cycle (weekly, monthly — whatever applies)",
              "Build a reconciliation job that alerts on any divergence",
              "Only flip the source of truth once divergence has been zero for the full cycle"
            ]},
            { "type": "h2", "text": "Step 5 — Delete the old code. Actually delete it." },
            { "type": "p", "text": "The step everyone skips. Once a service is migrated, the corresponding monolith code becomes a trap — half-maintained, occasionally still receiving traffic by accident, a constant source of confusion. Schedule the deletion as its own ticket, with its own owner, in the same sprint as the cutover." },
            { "type": "quote", "text": "A migration isn't done when the new service works. It's done when the old code is gone and nobody can accidentally route traffic back to it." }
          ]
        }
      ]
    },

    "contact": {
      "title": "Let's Talk",
      "subtitle": "Open to senior engineering and technical leadership roles. I read every message personally.",
      "response_time": "I typically respond within 2 business days.",
      "methods": [
        { "label": "LinkedIn", "href": "https://linkedin.com/in/valiakhmad", "icon": "linkedin" },
        { "label": "GitHub",   "href": "https://github.com/valiakhmad",      "icon": "github" },
        { "label": "Email",    "href": "mailto:hello@valiakhmad.dev",        "icon": "email" }
      ]
    },

    "nav": [
      { "label": "Home",         "href": "#/" },
      { "label": "Projects",     "href": "#/projects" },
      { "label": "Certificates", "href": "#/certificates" },
      { "label": "Writing",      "href": "#/blog" },
      { "label": "Contact",      "href": "#/contact" }
    ]
  },

  /* ==========================================================
     РУССКИЙ
     ========================================================== */
  ru: {
    "person": {
      "name": "Valiakhmad Makhamatov",
      "role": "Технический руководитель проектов и Full Stack инженер",
      "location": "Удалённо · UTC+5",
      "email": "hello@valiakhmad.dev",
      "linkedin": "https://linkedin.com/in/valiakhmad",
      "github": "https://github.com/valiakhmad",
      "cv": "assets/valiakhmad-makhamatov-cv-2025.pdf",
      "availability": { "open": true, "label": "Открыт для предложений" }
    },

    "hero": {
      "eyebrow": "Технический руководитель проектов и Full Stack инженер",
      "headline": "Valiakhmad\nMakhamatov",
      "description": "Я соединяю инженерную сложность и бизнес-результат. За 8+ лет опыта я проектирую масштабируемые системы, руковожу кросс-функциональными командами и выпускаю продукты, которые живут дольше одного спринта.",
      "cta_primary": { "label": "Смотреть проекты", "href": "#/projects" },
      "cta_secondary": { "label": "Скачать резюме", "href": "assets/valiakhmad-makhamatov-cv-2025.pdf" }
    },

    "about": {
      "title": "Обо мне",
      "paragraphs": [
        "Я работаю на стыке разработки ПО и продуктового деливери — там, где архитектурные решения встречаются с бизнес-ограничениями, а динамика внутри команды определяет, выйдет ли хорошая идея в релиз или застрянет.",
        "Мой опыт охватывает full-stack разработку, архитектуру платформ и техническое управление проектами. Я руководил командами от 4 до 20 человек, перестраивал легаси-монолиты без простоя и сокращал циклы деплоя с недель до часов.",
        "Я убеждён: лучшие технические лидеры пишут код и общаются с клиентами. Обе привычки делают вас острее."
      ],
      "stats": [
        { "value": "8+",  "label": "лет в продуктовом деливери" },
        { "value": "12",  "label": "запущенных продуктов" },
        { "value": "40%", "label": "среднее сокращение времени деплоя" },
        { "value": "20",  "label": "инженеров под руководством" }
      ]
    },

    "skills": {
      "title": "Технические навыки",
      "categories": [
        { "name": "Языки",         "items": ["TypeScript", "Python", "Go", "SQL", "Bash"] },
        { "name": "Frontend",      "items": ["React", "Next.js", "CSS / Tailwind", "Framer Motion"] },
        { "name": "Backend",       "items": ["Node.js", "FastAPI", "PostgreSQL", "Redis", "GraphQL"] },
        { "name": "Инфраструктура","items": ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform"] },
        { "name": "Менеджмент",    "items": ["Технический роадмэппинг", "OKR", "Спринт-планирование", "Ревью архитектуры", "Найм персонала"] }
      ]
    },

    "projects": {
      "title": "Избранные проекты",
      "subtitle": "Кейсы проектов, где имели значение и инженерия, и результат.",
      "items": [
        {
          "id": "platform-rebuild",
          "title": "Перестройка платформы без простоя",
          "domain": "Платформенная инженерия",
          "year": "2023",
          "description": "Перевели монолит пятилетней давности, обслуживающий 1000 одновременных пользователей, на микросервисную архитектуру. Без простоя. Срок — 6 месяцев. Команда из 6 инженеров.",
          "outcome": "Рост ёмкости в 10 раз. Снижение затрат на инфраструктуру на 40%.",
          "tags": ["Next.js", "Node.js", "AWS ECS", "PostgreSQL"],
          "role": "Тех. лид / архитектор",
          "detail": {
            "client": "B2B SaaS-платформа (раунд Series B)",
            "duration": "6 месяцев",
            "team": "6 инженеров, 1 дизайнер, 1 PM",
            "overview": "Существующая платформа представляла собой монолит пятилетней давности, созданный на заре компании. Он работал — пока не перестал. Когда трафик превысил 1000 одновременных пользователей, время отклика начало деградировать, деплои превратились в рискованные многочасовые события, а каждая новая фича выходила дольше предыдущей.",
            "problem": [
              "У монолита не было чётких границ сервисов — изменение в биллинге могло сломать дашборд.",
              "Деплой требовал двухчасового окна обслуживания, привязанного к часовым поясам клиентов.",
              "Команда боялась что-либо рефакторить, потому что уже никто до конца не понимал граф зависимостей."
            ],
            "approach": [
              "Мы отказались от полного переписывания — шестимесячная заморозка фич была коммерчески невозможна для компании в процессе фандрайзинга.",
              "Вместо этого использовали паттерн Strangler Fig: новый функционал с первого дня строился как отдельные сервисы, а существующий постепенно отделялся от монолита по одному ограниченному контексту за раз.",
              "Ввели API-шлюз перед монолитом и новыми сервисами, чтобы фронтенд не знал, какая система отвечает на запрос.",
              "Каждый мигрированный сервис получал собственное хранилище данных, пайплайн деплоя и дежурство — это вынуждало формировать реальные зоны ответственности."
            ],
            "challenges": [
              "Самой сложной проблемой оказались общие таблицы базы данных: два сервиса часто читали и писали одну и ту же таблицу по разным причинам, и распутать это удалось только через временный период двойной записи с последующей сверкой.",
              "Мы недооценили, сколько бизнес-логики было неявно зашито в неиндексированных SQL-запросах — три недели ушли на то, чтобы явно воссоздать эту логику в новых сервисах."
            ],
            "results": [
              { "metric": "Рост ёмкости в 10×",  "detail": "С ~1000 до 10 000+ одновременных пользователей без повторного пересмотра архитектуры" },
              { "metric": "Снижение затрат на инфраструктуру на 40%",  "detail": "Контейнеры под каждый сервис подобраны по размеру вместо одного избыточного монолитного инстанса" },
              { "metric": "Нулевой простой",                  "detail": "Вся миграция прошла без единого сбоя, заметного клиентам" },
              { "metric": "Время деплоя: 2 часа → 8 минут",        "detail": "Поштучные деплои сервисов заменили монолитный релизный процесс" }
            ],
            "lessons": "Настраивайте мониторинг до миграции, а не во время неё. Мы с первого дня внедрили observability для новых сервисов, но легаси-монолит долго оставался «чёрным ящиком» — и именно это слепое пятно стоило нам больше всего времени."
          }
        },
        {
          "id": "ci-cd-overhaul",
          "title": "Перестройка CI/CD-пайплайна",
          "domain": "Developer Experience",
          "year": "2022",
          "description": "Перепроектировали пайплайны деплоя для 4 продуктовых команд. Внедрили trunk-based разработку, автоматические тестовые гейты и процессы продвижения между окружениями.",
          "outcome": "Частота деплоев: раз в неделю → ежедневно. Время отката: 2 часа → 4 минуты.",
          "tags": ["GitHub Actions", "Docker", "Terraform", "Datadog"],
          "role": "Технический PM",
          "detail": {
            "client": "Финтех среднего размера, 4 продуктовые команды",
            "duration": "3 месяца",
            "team": "2 платформенных инженера + 1 TPM (я), встроены в 4 команды",
            "overview": "Четыре продуктовые команды делили один пайплайн деплоя, изначально созданный для одной команды двумя годами ранее. Релиз каждой команды конкурировал за одну и ту же очередь. Упавший тест в коде одной команды мог заблокировать релизы всех остальных на часы.",
            "problem": [
              "Один общий Jenkins-пайплайн без изоляции очередей сборки между командами.",
              "Перед любым продакшн-деплоем требовалось ручное QA-подтверждение — релизы выходили раз в неделю, по четвергам, по традиции.",
              "Откат неудачного деплоя означал перезапуск всего пайплайна с нуля — примерно 2 часа."
            ],
            "approach": [
              "Перешли с Jenkins на GitHub Actions с отдельными пайплайнами по командам и сервисам — это полностью убрало общую очередь.",
              "Внедрили trunk-based разработку с недолгоживущими feature-ветками и обязательными автоматическими тестовыми гейтами перед мержем.",
              "Построили механизм отката в один клик на основе неизменяемых тегов контейнеров — откат стал означать «передеплоить предыдущий тег», а не «перезапустить всё заново».",
              "Первый месяц проводили еженедельные «деплой-часы», чтобы помочь командам освоить новый процесс."
            ],
            "challenges": [
              "У двух команд тестовые наборы выполнялись 25+ минут, что делало новую политику «мерж только с зелёными тестами» болезненной. Пришлось распараллелить их тест-раннеры, прежде чем новый процесс стал жизнеспособным.",
              "Культурное сопротивление отказу от еженедельного релизного ритма — некоторые инженеры поначалу нервничали из-за ежедневных продакшн-деплоев."
            ],
            "results": [
              { "metric": "Ежедневные деплои", "detail": "Вместо одного фиксированного релизного дня в неделю" },
              { "metric": "Откат: 2 часа → 4 минуты",     "detail": "За счёт передеплоя неизменяемых тегов вместо полного перезапуска пайплайна" },
              { "metric": "Очередь сборки устранена",    "detail": "Каждая команда теперь деплоится независимо, без блокировок между командами" },
              { "metric": "Тестовый набор: 25 мин → 6 мин",  "detail": "После распараллеливания у двух самых медленных команд" }
            ],
            "lessons": "Техническая миграция оказалась самой лёгкой частью. Сложнее было убедить инженеров, что ежедневные деплои безопаснее еженедельных — меньшие диффы проще отлаживать. На это ушли недели выстраивания доверия, а не дни."
          }
        },
        {
          "id": "b2b-saas-mvp",
          "title": "B2B SaaS MVP — от нуля до запуска",
          "domain": "Продуктовая инженерия",
          "year": "2021",
          "description": "Довёл финтех-продукт для B2B от идеи на доске до продакшена за 4 месяца. Отвечал и за техническую архитектуру, и за спринт-деливери. Первый платящий клиент — на 16-й неделе.",
          "outcome": "$120K ARR на момент запуска. Раунд seed закрыт спустя 3 месяца.",
          "tags": ["React", "FastAPI", "PostgreSQL", "Stripe"],
          "role": "Full Stack инженер / TPM",
          "detail": {
            "client": "Финтех-стартап на pre-seed стадии (2 сооснователя)",
            "duration": "4 месяца",
            "team": "Я + 1 дизайнер на контракте, продажами занимались основатели",
            "overview": "Два нетехнических сооснователя имели проверенную идею и несколько писем о намерениях (LOI) от потенциальных клиентов, но не имели продукта. Меня наняли первым техническим сотрудником — я отвечал и за создание MVP, и за организацию процесса деливери: отдельного PM не было.",
            "problem": [
              "Никакой существующей технической инфраструктуры — буквально старт с пустого репозитория.",
              "Основателям нужно было что-то демонстрируемое, чтобы закрыть первых платящих клиентов в течение 4 месяцев — иначе был риск потерять LOI.",
              "Бюджет на инфраструктуру и сторонние сервисы на pre-seed стадии был почти нулевым."
            ],
            "approach": [
              "Сознательно сузили MVP до одного основного сценария, сделанного хорошо, вместо пяти сценариев, сделанных наполовину.",
              "Использовал проверенные, понятные технологии (React, FastAPI, PostgreSQL), чтобы максимизировать собственную скорость как единственного инженера.",
              "Проводил еженедельные демо с основателями, которые передавали обратную связь от потенциальных клиентов почти в реальном времени — фактически недельный цикл обратной связи с рынком.",
              "Интегрировал биллинг через Stripe на 10-й неделе, с опережением графика, чтобы первому клиенту можно было выставить счёт сразу после подписания."
            ],
            "challenges": [
              "Будучи единственным инженером, все архитектурные решения принимал в одиночку, без возможности свериться с кем-то ещё. Опирался на еженедельное асинхронное код-ревью от друга из другой компании как на неформальную подстраховку.",
              "Два потенциальных клиента запросили фичи, которые удвоили бы объём работ. Дважды сказать «нет» обоим было самым сложным и самым ценным решением проекта."
            ],
            "results": [
              { "metric": "$120K ARR на запуске",     "detail": "Три платящих клиента подписаны до даты публичного запуска" },
              { "metric": "Первый клиент: 16-я неделя", "detail": "В рамках изначальной цели в 4 месяца" },
              { "metric": "Раунд seed закрыт",       "detail": "Через 3 месяца после запуска, работающий продукт назван ключевым фактором due diligence" },
              { "metric": "Ноль лишних фич из-за scope creep", "detail": "Два крупных запроса на фичи сознательно отклонены до запуска" }
            ],
            "lessons": "Отказать клиенту в фиче до запуска — некомфортно, но часто правильно. Обе отклонённые фичи впоследствии оказались крайними случаями, нужными менее чем 5% последующих клиентов."
          }
        }
      ]
    },

    "certificates": {
      "title": "Сертификаты",
      "subtitle": "Подтверждённые профессиональные квалификации.",
      "items": [
        {
          "name": "CS50's Compyuter Science",
          "issuer": "Edx and Harvard University",
          "date": "2021",
          "expiry": null,
          "valid": true,
          "image": "../../assets/img/certificates/img/Makhamatov_Valiakhmad_CS50_Harvard_EDU-2-1.png",
          "verify": "../../assets/img/certificates/pdf/Makhamatov_Valiakhmad_CS50_Harvard_EDU-2.pdf",
          "badge": "CS"
        },
        {
          "name": "Fullstack Web Development",
          "issuer": "STARK EDU",
          "date": "2019",
          "expiry": null,
          "valid": true,
          "image": "../../assets/img/certificates/img/Stark_EDU_Certificate-1.png",
          "verify": "../../assets/img/certificates/pdf/Stark_EDU_Certificate.pdf",
          "badge": "WEB"
        },
        {
          "name": "Fortinet Certified Fundamentals in Cybersecurity",
          "issuer": "Fortinet",
          "date": "2025",
          "expiry": "2027",
          "valid": true,
          "image": "../../assets/img/certificates/img/Valiakhmad Makhamatov FCF Cybersecurity-3-1.png",
          "verify": "../../assets/img/certificates/pdf/Valiakhmad Makhamatov FCF Cybersecurity-3.pdf",
          "badge": "CS"
        },
        {
          "name": "Introduction to the Threat Landscape",
          "issuer": "Fortinet",
          "date": "2025",
          "expiry": null,
          "valid": true,
          "image": "../../assets/img/certificates/img/Course_Completion_Certificate-2-1.png",
          "verify": "../../assets/img/certificates/pdf/Course_Completion_Certificate-2.pdf",
          "badge": "CS"
        },
        {
          "name": "Project management",
          "issuer": "Google",
          "date": "2022",
          "expiry": null,
          "valid": true,
          "image": "../../assets/img/certificates/img/Makhamatov_Valiakhmad_GPM-1-1.png",
          "verify": "../../assets/img/certificates/pdf/Makhamatov_Valiakhmad_GPM-1.pdf",
          "badge": "PM"
        }
      ]
    },

    "blog": {
      "title": "Блог",
      "subtitle": "Наблюдения об инженерии, продукте и пространстве между ними.",
      "items": [
        {
          "id": "why-platform-teams-fail",
          "title": "Почему платформенные команды терпят неудачу (и как это исправить)",
          "date": "2024-11-12",
          "readTime": "7 мин чтения",
          "category": "Инженерия",
          "excerpt": "Платформенные команды, которые фокусируются на инструментах, а не на опыте разработчиков, проваливаются не потому, что инструменты плохие. Они проваливаются, потому что забыли, для кого строят.",
          "content": [
            { "type": "p", "text": "Я наблюдал провал трёх платформенных команд за последние пять лет, и все они провалились по одной и той же причине — не из-за плохих инструментов, а из-за забытой аудитории." },
            { "type": "h2", "text": "Паттерн" },
            { "type": "p", "text": "Формируется платформенная команда. Они умны, мотивированы и получают реальную автономию. Они строят что-то действительно впечатляющее — систему self-service деплоя, красивый внутренний CLI, service mesh. Полгода спустя adoption близок к нулю, а команду просят обосновать свою численность." },
            { "type": "p", "text": "Проблема была не в инженерии. Проблема в том, что платформенная команда полгода строила продукт для воображаемого идеального пользователя вместо реального, занятого, скептичного инженера за соседним столом." },
            { "type": "h2", "text": "Три ранних тревожных сигнала" },
            { "type": "list", "items": [
              "В роадмапе платформенной команды нет ни одного пункта, пришедшего напрямую от жалобы продуктового инженера.",
              "Никто в платформенной команде не выкатывал клиентскую фичу, используя собственную платформу.",
              "Adoption обеспечивается директивой, а не тем, что платформа очевидно лучше альтернатив."
            ]},
            { "type": "h2", "text": "Что реально работает" },
            { "type": "p", "text": "Платформенные команды, которые я видел успешными, все сделали одну неброскую вещь: они встраивались в продуктовую команду на полный спринт, прежде чем написать хоть одну строчку платформенного кода. Не воркшоп. Не интервью. Настоящее парное программирование, настоящее дежурство, настоящий стресс дня деплоя." },
            { "type": "quote", "text": "Если ваша платформенная команда не может назвать имя инженера, которого поднимали в 2 часа ночи на прошлой неделе из-за сбоя деплоя, значит, она недостаточно близка к проблеме." },
            { "type": "p", "text": "Платформенная инженерия — это продуктовая дисциплина в одежде инфраструктуры. Относитесь к ней так, и инструменты подтянутся сами." }
          ]
        },
        {
          "id": "technical-pm-dilemma",
          "title": "Дилемма технического PM: код или координация?",
          "date": "2024-09-03",
          "readTime": "5 мин чтения",
          "category": "Лидерство",
          "excerpt": "Лучшие технические проджект-менеджеры, с которыми я работал, разделяют одну привычку: они держат руки в кодовой базе. Не чтобы что-то доказать — чтобы оставаться честными.",
          "content": [
            { "type": "p", "text": "Где-то на третий год работы техническим PM вам мягко, кем-то более старшим, скажут, что пора перестать писать код. Ваше время лучше тратить на координацию, гласит аргумент. Пусть инженеры занимаются инженерией." },
            { "type": "p", "text": "Я считаю этот совет наполовину верным и опасно неполным." },
            { "type": "h2", "text": "Аргументы за то, чтобы отойти в сторону" },
            { "type": "p", "text": "Это правда, что TPM, проводящий шесть часов в день в IDE, не выполняет ту координационную работу, которая нужна команде. Спринт-планирование не проводит себя само. Апдейты для стейкхолдеров не пишутся сами. У глубокого погружения в код есть реальная альтернативная стоимость." },
            { "type": "h2", "text": "Аргументы за то, чтобы оставаться близко" },
            { "type": "p", "text": "Но есть конкретный сценарий провала, который я наблюдал у TPM, полностью отошедших от кода: они теряют способность «чуять», когда оценка неверна. Не рассчитать — почувствовать. Ощущение, наработанное мышечной памятью, что задача на «два дня» на самом деле пятидневная задача в маскировке." },
            { "type": "list", "items": [
              "Без этого чутья каждую оценку приходится принимать на веру.",
              "Без этого чутья разговоры о техническом долге становятся абстрактными, а не конкретными.",
              "Без этого чутья невозможно убедительно возразить, когда инженер говорит, что что-то сложнее, чем кажется — потому что вы правда не знаете."
            ]},
            { "type": "h2", "text": "Моя реальная практика" },
            { "type": "p", "text": "Я держу за собой один небольшой, реальный участок кодовой базы, которым владею целиком — обычно что-то некритичное, вроде внутреннего инструмента или маленького сервиса. Не потому, что организации нужно, чтобы я его выкатил. Потому что мне нужно его выкатывать, чтобы оставаться откалиброванным." },
            { "type": "quote", "text": "Координация без технической калибровки превращается в управленческий театр. Вы двигаете стикеры, смысла которых не понимаете." }
          ]
        },
        {
          "id": "strangler-fig-playbook",
          "title": "Миграция по паттерну Strangler Fig: практический плейбук",
          "date": "2024-06-20",
          "readTime": "12 мин чтения",
          "category": "Архитектура",
          "excerpt": "Переписывание с нуля почти всегда неверное решение. Вот пошаговый подход, который я использовал для миграции трёх легаси-монолитов без заморозки фич.",
          "content": [
            { "type": "p", "text": "Я провёл уже три миграции по паттерну Strangler Fig на трёх очень разных монолитах — платформе e-commerce на Rails, финтех-бэкенде на PHP и Node.js-платформе из кейса «Перестройка платформы». Детали каждый раз разные. Плейбук — нет." },
            { "type": "h2", "text": "Шаг 1 — сначала картируйте ограниченные контексты" },
            { "type": "p", "text": "Прежде чем писать код миграции, потратьте реальное время — неделю, иногда две — на то, чтобы понять, какие части монолита на самом деле представляют отдельные бизнес-домены. Это медленнее, чем звучит, потому что монолиты годами скрывают собственные границы за счёт удобной, но случайной связанности." },
            { "type": "h2", "text": "Шаг 2 — сначала выберите сервис с наименьшим риском" },
            { "type": "p", "text": "Устойте перед соблазном мигрировать самую болезненную часть системы первой. Мигрируйте часть с наименьшим числом зависимых компонентов и самой чёткой границей. Задача первой миграции — доказать, что паттерн работает именно в вашей среде, а не принести максимальную немедленную ценность." },
            { "type": "h2", "text": "Шаг 3 — поставьте шлюз перед всем" },
            { "type": "p", "text": "API-шлюз (или даже простой reverse proxy с правилами маршрутизации) перед монолитом и новыми сервисами — обязателен. Он позволяет мигрировать маршруты по одному, незаметно для фронтенда." },
            { "type": "h2", "text": "Шаг 4 — двойная запись перед переключением" },
            { "type": "p", "text": "Для любых данных, нужных и монолиту, и новому сервису, ведите период двойной записи: пишут обе системы, но источником истины является только одна, а расхождения сверяются. Это утомительно. Но это же и самый эффективный шаг для предотвращения потери данных при миграции." },
            { "type": "list", "items": [
              "Ведите двойную запись минимум один полный бизнес-цикл (неделя, месяц — в зависимости от контекста)",
              "Постройте job для сверки, который оповещает о любом расхождении",
              "Переключайте источник истины только после того, как расхождений не было весь цикл"
            ]},
            { "type": "h2", "text": "Шаг 5 — удалите старый код. Реально удалите." },
            { "type": "p", "text": "Шаг, который все пропускают. Как только сервис мигрирован, соответствующий код в монолите превращается в ловушку — полуподдерживаемый, иногда всё ещё случайно получающий трафик, постоянный источник путаницы. Планируйте удаление отдельным тикетом, с отдельным владельцем, в том же спринте, что и переключение." },
            { "type": "quote", "text": "Миграция завершена не тогда, когда новый сервис заработал. Она завершена, когда старый код удалён и никто случайно не сможет вернуть на него трафик." }
          ]
        }
      ]
    },

    "contact": {
      "title": "Давайте поговорим",
      "subtitle": "Открыт для senior-ролей в инженерии и техническом лидерстве. Читаю каждое сообщение лично.",
      "response_time": "Обычно отвечаю в течение 2 рабочих дней.",
      "methods": [
        { "label": "LinkedIn", "href": "https://linkedin.com/in/valiakhmad", "icon": "linkedin" },
        { "label": "GitHub",   "href": "https://github.com/valiakhmad",      "icon": "github" },
        { "label": "Email",    "href": "mailto:hello@valiakhmad.dev",        "icon": "email" }
      ]
    },

    "nav": [
      { "label": "Главная",     "href": "#/" },
      { "label": "Проекты",     "href": "#/projects" },
      { "label": "Сертификаты", "href": "#/certificates" },
      { "label": "Блог",        "href": "#/blog" },
      { "label": "Контакты",    "href": "#/contact" }
    ]
  }
};
