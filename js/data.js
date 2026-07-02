/* ============================================================
   SITE DATA
   Single source of truth for all content on the site.
   Edit values here to update the site — no other file needed.
   ============================================================ */

'use strict';

const SITE_DATA = {
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
      { "label": "LinkedIn", "href": "https://www.linkedin.com/in/valiakhmad-makhamatov-55b2aa203/", "icon": "linkedin" },
      { "label": "GitHub",   "href": "https://github.com/rinatovich",                                "icon": "github" },
      { "label": "Email",    "href": "mailto:makhamatov.valiakhmad@gmail.com",                       "icon": "email" },
      { "label": "Telegram", "href": "https://t.me/rinatovic99",                                     "icon": "telegram" }
    ]
  },

  "nav": [
    { "label": "Home",         "href": "#/" },
    { "label": "Projects",     "href": "#/projects" },
    { "label": "Certificates", "href": "#/certificates" },
    { "label": "Writing",      "href": "#/blog" },
    { "label": "Contact",      "href": "#/contact" }
  ]
};
