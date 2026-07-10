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
      "email": "makhamatov.valiakhmad@gmail.com",
      "telegram": "https://t.me/rinatovic99",
      "linkedin": "https://www.linkedin.com/in/valiakhmad-makhamatov-55b2aa203/",
      "github": "https://github.com/rinatovich",
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
      ],
      "education": [
        {
          "logo": "./assets/img/TGTU.jpg",
          "logoAlt": "TSTU logo",
          "period": "2019 — 2023",
          "degree": "Bachelor of Electronics and Automation Engineering",
          "institution": "Tashkent State Technical University (TSTU)",
          "tag": "Higher education"
        },
        {
          "logo": "./assets/img/TPKIT.webp",
          "logoAlt": "TPKIT logo",
          "period": "2016 — 2019",
          "degree": "Telecommunication and Network Technologies",
          "institution": "Tashkent Professional College of IT (TPKIT)",
          "tag": "Vocational education"
        }
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
          "id": "bank-modernization",
          "title": "IT Infrastructure Modernization for a Major National Bank",
          "domain": "IT Infrastructure",
          "year": "2025",
          "description": "Led a large-scale modernization of a bank's infrastructure: the core banking system was migrated to new, higher-capacity hardware, and the entire corporate network was upgraded to modern equipment.",
          "outcome": "25% faster end-of-day banking close. 10× increase in corporate network throughput.",
          "tags": ["IT Infrastructure", "Core Banking", "Banking", "Fintech"],
          "role": "Project Manager",
          "detail": {
            "client": "Major state-owned bank",
            "duration": "1 year",
            "team": "10 engineers, 5 brokers/vendor reps, 1 PM, 1 presales engineer",
            "overview": "The bank's existing infrastructure was over five years old and could no longer keep pace with current transaction volumes.",
            "problem": [
              "Low throughput on the corporate data network.",
              "Server infrastructure running at over 70% utilization.",
              "Much of the hardware was end-of-life and no longer eligible for vendor support or upgrades.",
              "No centralized management of IT resources and networks."
            ],
            "approach": [
              "Ran a full audit of all existing hardware across the bank's infrastructure.",
              "Designed a phased migration plan to move the core banking system onto new hardware without service interruption."
            ],
            "challenges": [
              "Delivering the migration while keeping banking services fully available at all times.",
              "Some hardware installations required additional engineering work to fit the new architecture."
            ],
            "results": [
              { "metric": "10× network throughput",  "detail": "Network hardware replacement moved corporate bandwidth from 100 Mbit to 1 Gbit" },
              { "metric": "Higher-capacity backbone",  "detail": "Infrastructure network rebuilt on 10/40 Gbit switches, up from a 1 Gbit ceiling" },
              { "metric": "25% faster end-of-day close", "detail": "Average close time dropped 25% within the first month on the new hardware" },
              { "metric": "Centralized IT resource management", "detail": "Rolled out centralized management tooling across the infrastructure" }
            ],
            "lessons": "Careful planning of every step, with repeated rehearsals, pays off — the discipline invested upfront is what makes a zero-downtime migration possible."
          }
        },
        {
          "id": "chemical-safety",
          "title": "National Hazardous Chemicals Registry Platform",
          "domain": "Software Development",
          "year": "2026",
          "description": "Designed and built a hazardous chemicals registry platform end to end.",
          "outcome": "Digitized chemical-substance records that previously existed only as scattered paper and file-based documentation.",
          "tags": ["Web Development", "Platform", "Chem Registry"],
          "role": "Full Stack Engineer",
          "link": "",
          "detail": {
            "client": "Committee of Ecology",
            "duration": "6 months",
            "team": "2 frontend engineers, 2 backend engineers, 1 business analyst, 1 project manager, 1 designer",
            "overview": "The client initially wanted a working version in 1–2 months; reaching a genuinely production-ready platform took 6.",
            "problem": [
              "No unified electronic system existed for looking up information on hazardous chemical substances.",
              "Documentation for each substance was kept in scattered, inconsistent formats across different departments."
            ],
            "approach": [
              "Co-developed detailed requirements with the client before writing code.",
              "Worked in short Agile cycles — shipping a usable increment to the client every week or sooner, then moving on to the next module."
            ],
            "challenges": [
              "Functionality added mid-project at the client's request required a partial re-architecture of the platform."
            ],
            "results": [
              { "metric": "One unified system of record", "detail": "Replaced hundreds of scattered files with a single searchable registry" },
              { "metric": "Bulk import/export", "detail": "Added Excel import so operators could register dozens of substances at once instead of one by one" }
            ],
            "lessons": "Getting the client to a precise, shared understanding of how the product and the underlying business process will actually work is the single biggest driver of project success."
          }
        },
        {
          "id": "Techno-Economic-Feasibility-Study",
          "title": "National Spatial Data Infrastructure",
          "domain": "Technical Advisory",
          "year": "2025",
          "description": "Built and defended the technical and financial case for Uzbekistan's National Spatial Data Infrastructure to secure World Bank investment.",
          "outcome": "Secured $35M in investment financing.",
          "tags": ["Investment Case", "Business Planning", "Economic Analysis", "Technical Analysis"],
          "role": "Technical Expert",
          "detail": {
            "client": "Government agency | Cadastre Agency under the Ministry of Economy and Finance of the Republic of Uzbekistan",
            "duration": "8 months",
            "team": "Technical expert, financial analyst, systems analyst, systems architect",
            "overview": "Prepared a large-scale Feasibility Study to support a World Bank investment application. The process ran roughly 8 months and involved deep engagement with multiple government institutions.",
            "problem": [
              "No National Spatial Data Infrastructure existed.",
              "Low levels of digitization and no unified architecture across agencies."
            ],
            "approach": [
              "Conducted a full audit of the client's existing infrastructure, with deep immersion into every information system and how it actually operated.",
              "Documented the client's business processes for handling and storing spatial data."
            ],
            "challenges": [
              "Maintaining full alignment across every government stakeholder involved.",
              "Making the full potential and value of the program legible and convincing to a non-technical audience."
            ],
            "results": [
              { "metric": "Pilot planned in the country's top tourism destination",     "detail": "First rollout scheduled in one of Uzbekistan's cities, with roughly $5M allocated to the pilot" },
              { "metric": "Two new Tier III data centers designed", "detail": "Scoped two additional Tier III data centers, with 5-year operating costs modeled" },
              { "metric": "Existing infrastructure modernization plan",       "detail": "Scoped upgrades to existing equipment to meet the requirements of the new infrastructure and platforms" },
              { "metric": "Full investment case delivered and defended", "detail": "Prepared and jointly presented the detailed defense document alongside the client's leadership" }
            ],
            "lessons": "Working toward a genuinely public-benefit outcome is sometimes more motivating than the financial upside alone."
          }
        },
        {
          "id": "innovative-contact-center",
          "title": "Innovative Contact Center — End-to-End Automation of Bank Customer Service",
          "domain": "Contact Center / Automation",
          "year": "2026 — 2031",
          "status": { "label": "In funding defense", "type": "progress" },
          "description": "A six-component program: an omnichannel chat platform, a chatbot for it, inbound and outbound voice bots, a speech analytics platform, and an intelligent Workforce Management system.",
          "outcome": "$26M in savings vs. the baseline scenario, $8M NPV, targeting 40% automation by year 5.",
          "tags": ["Omnichannel", "Chatbot", "Voice Bot", "Speech Analytics", "WFM", "Financial Modeling"],
          "role": "Automation Program Lead",
          "detail": {
            "client": "Major commercial bank",
            "duration": "Case-building and defense: 2024–2026; execution: late 2026 onward (5-year horizon)",
            "team": "Business analysts, financial analyst, solution architects, vendor managers, program lead (me)",
            "overview": "The program brings together six major contact-center automation components: an omnichannel chat platform, a chatbot for that platform, an outbound voice bot, an inbound voice bot, a speech analytics platform, and an intelligent Workforce Management platform for operator scheduling. The project has completed its full pre-project phase and is now preparing for funding defense.",
            "problem": [
              "Customer service ran on fragmented, manual contact-center processes with no unified omnichannel platform.",
              "The absence of intelligent automation on voice and chat channels drove constant headcount growth and operator overload.",
              "Operator schedules were built manually, with no demand forecasting — leading to overstaffing or understaffing depending on the period."
            ],
            "approach": [
              "Ran a detailed study of current contact-center business processes and every customer touchpoint across channels.",
              "Analyzed the local and global vendor markets for omnichannel platforms, chat and voice bots, speech analytics, and WFM, including deployment experience at other banks.",
              "Ran pilots and tests with multiple vendors across the program's key components.",
              "Drafted a separate RFP for each of the six components.",
              "Built a two-scenario financial model — baseline vs. automated — projecting economic impact over a 5-year horizon.",
              "Prepared the internal documentation package: implementation strategy, phased rollout plan, and a full project risk register."
            ],
            "challenges": [
              "Aligning business units, IT, and risk management around a single vision for a large cross-functional program.",
              "Reconciling six independent components into one coherent architecture and delivery roadmap.",
              "Building a business case strong enough to justify a large budget and prove payback over a five-year horizon."
            ],
            "results": [
              { "metric": "$26M in savings", "detail": "Difference between the automated and baseline scenarios over the program horizon" },
              { "metric": "$8M NPV", "detail": "Net present value from the financial model" },
              { "metric": "421 fewer headcount required", "detail": "Achieved through automation of routine contact-center operations" },
              { "metric": "$10M in payroll savings", "detail": "Reduced staffing costs from automating operator functions" },
              { "metric": "40% target automation rate", "detail": "By the end of program year 5" }
            ],
            "lessons": "A large-scale automation program needs more than a strong technical case — it needs an equally rigorous financial model and a clear phased rollout strategy, since that combination is ultimately what determines whether a project gets funded."
          }
        },
        {
          "id": "koica-equipment-supply",
          "title": "Network and Server Equipment Rollout for an IT Park, KOICA-Financed",
          "domain": "IT Infrastructure / Procurement",
          "year": "2022",
          "description": "Procured and commissioned network and server hardware and storage systems for an IT park under financing from KOICA, including delivery of key software licenses.",
          "outcome": "$1.5M project budget, delivered in 5 months including customs delays.",
          "tags": ["Equipment Procurement", "Network Infrastructure", "Data Center", "KOICA"],
          "role": "Technical Project Lead",
          "detail": {
            "client": "Uzbekistan IT Park · financed by KOICA (Korea International Cooperation Agency)",
            "duration": "5 months (including equipment customs delay)",
            "team": "Technical project lead (me), supplier partner, logistics, installation engineers",
            "overview": "Procured and commissioned new network, server, and storage hardware for an IT park under KOICA financing. The defining constraint was that every aspect of equipment placement, installation, and configuration had to meet KOICA's standards. I was involved from spec sign-off through to full go-live.",
            "problem": [
              "The IT park's network and server infrastructure needed a full refresh on a tight timeline.",
              "Every step, from architecture to installation, had to strictly comply with the donor's technical standards.",
              "Part of the budget covered software license procurement, which added complexity to logistics and customs clearance."
            ],
            "approach": [
              "Ran a market study of network, server, and storage equipment vendors.",
              "Designed and signed off on a solution architecture aligned with KOICA's requirements and standards.",
              "Agreed technical specifications for equipment and licenses with both the donor and the client.",
              "Managed customs clearance, installation, and full commissioning of every system."
            ],
            "challenges": [
              "Equipment was delayed in customs over documentation, requiring a schedule revision without exceeding the overall budget.",
              "Strict compliance with KOICA's placement and installation standards required extra sign-off at every stage."
            ],
            "results": [
              { "metric": "$1.5M project budget", "detail": "Full delivery of network, server, and storage hardware plus software licenses" },
              { "metric": "5-month delivery", "detail": "Including a customs delay on equipment shipment" },
              { "metric": "Full compliance with KOICA standards", "detail": "Across placement, installation, and configuration of all delivered equipment" }
            ],
            "lessons": "On donor-financed projects, customs clearance and documentation are effectively a project within the project — they need the same rigor in planning as the technical architecture itself."
          }
        },
        {
          "id": "situation-center-security",
          "title": "Situational Center Design for a Security Agency",
          "domain": "Infrastructure Design",
          "year": "2024",
          "status": { "label": "Not implemented", "type": "not-implemented" },
          "description": "Full design of the infrastructure and operating processes for a situational center for a national security agency: market analysis, work plan, and procurement plan.",
          "outcome": "Delivered a complete project documentation package and a validated cost estimate of $2.3M.",
          "tags": ["Situational Center", "Infrastructure Design", "Security Sector", "Procurement"],
          "role": "Technical Expert / Solution Designer",
          "detail": {
            "client": "National security agency, Republic of Uzbekistan",
            "duration": "Several months, 2024",
            "team": "Technical expert (me), market analysts, cost estimators",
            "overview": "The project called for a complete design of the infrastructure and operating processes for a situational center — from equipment architecture through to a procurement plan and a fully justified cost estimate for the tender committee.",
            "problem": [
              "The client had no situational center meeting modern monitoring and decision-making requirements.",
              "Infrastructure needed to be designed from scratch, with every cost fully justified."
            ],
            "approach": [
              "Ran a market analysis of equipment and solutions for situational centers.",
              "Built a detailed work plan for standing up the center.",
              "Prepared a procurement plan with a cost justification for every component."
            ],
            "challenges": [
              "High competition in the tender with non-transparent selection criteria.",
              "The tender was ultimately awarded to a different company, despite a complete and well-prepared solution."
            ],
            "results": [
              { "metric": "$2.3M", "detail": "Full project cost estimate, built from market analysis and the procurement plan" },
              { "metric": "Complete design documentation package", "detail": "Work plan and procurement plan, ready for execution" }
            ],
            "lessons": "Not every well-prepared project reaches implementation — public-sector tenders don't depend on technical and financial rigor alone. Even so, the situational-center design methodology built here carried directly into later projects."
          }
        },
        {
          "id": "smart-highway-huawei",
          "title": "Smart Highway — AI-Based Traffic Control System with Huawei",
          "domain": "Smart Roads / AI",
          "year": "2024",
          "status": { "label": "Project frozen", "type": "frozen" },
          "description": "Led the IT workstream of a smart-highway program with Huawei: infrastructure for an AI-based road traffic control system.",
          "outcome": "Delivered a complete implementation plan and a $50M cost estimate for the IT workstream.",
          "tags": ["Smart Road", "AI", "Huawei", "Video Analytics", "Supply Chain Logistics"],
          "role": "Technical Expert / IT Workstream Lead",
          "detail": {
            "client": "National smart-highway program · in partnership with Huawei",
            "duration": "2024",
            "team": "Technical expert (me), Huawei partners, vendor managers",
            "overview": "On a joint program with Huawei to build a smart highway, I owned the IT workstream — the infrastructure for an AI-based road traffic control system.",
            "problem": [
              "An intelligent traffic-control infrastructure had to be designed from scratch for a long highway corridor.",
              "Equipment supply logistics were complex and required selecting the right vendors jointly with Huawei."
            ],
            "approach": [
              "Ran a detailed scoping phase to understand the project and the requirements for an AI-based traffic control system.",
              "Built an implementation plan for the IT workstream.",
              "Selected equipment vendors and structured the supply logistics chain.",
              "Delivered the final cost estimate for the IT workstream."
            ],
            "challenges": [
              "The scale of the program ($50M for the IT workstream alone) required sign-off from a wide range of stakeholders.",
              "The project was frozen after the planning phase, for reasons unrelated to the technical work."
            ],
            "results": [
              { "metric": "$50M", "detail": "Cost estimate for the IT workstream — the AI-based traffic control infrastructure" },
              { "metric": "Complete implementation plan", "detail": "Logistics chains, vendors, and architecture agreed with Huawei" }
            ],
            "lessons": "Working alongside a major international partner like Huawei builds real depth in AI infrastructure, even when the project itself doesn't ultimately reach execution."
          }
        },
        {
          "id": "small-business-web-projects",
          "title": "Web Development for Small Businesses",
          "domain": "Web Development",
          "year": "2020 — 2024",
          "description": "A series of small web projects — brochure sites, landing pages, and simple online stores — for small business owners.",
          "outcome": "First digital presence and first online sales for several small businesses.",
          "tags": ["React", "Landing Page", "Small Business", "Web Development"],
          "role": "Full Stack Developer",
          "detail": {
            "client": "Several small businesses (private clients)",
            "duration": "Standalone projects, 2–4 weeks each",
            "team": "Solo developer",
            "overview": "Alongside larger infrastructure and advisory programs, I regularly take on small web projects for small business owners — from brochure sites to simple online stores — helping them get their first real digital presence.",
            "problem": [
              "Most clients had no website at all — only a social media page.",
              "Budget and timelines were always tight."
            ],
            "approach": [
              "Used a standard but flexible stack (React, HTML/CSS, a lightweight backend where needed) to move fast.",
              "Focused on simple, clear sites the business owner could update themselves afterward."
            ],
            "challenges": [
              "Fitting small projects around larger program work required disciplined time management."
            ],
            "results": [
              { "metric": "Several sites shipped", "detail": "Brochure sites and landing pages for local small businesses" },
              { "metric": "Fast turnaround", "detail": "2 to 4 weeks from kickoff to launch per project" }
            ],
            "lessons": "Small projects are a great way to stay close to hands-on development, even as the primary role shifts toward management and strategy."
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
        { "label": "GitHub",   "href": "https://github.com/rinatovich",      "icon": "github" },
        { "label": "Telegram",   "href": "https://t.me/rinatovic99",      "icon": "telegram" },
        { "label": "Email",    "href": "mailto:makhamatov.valiakhmad@gmail.com",        "icon": "email" }
      ]
    },

    "nav": [
      { "label": "Home",         "href": "#/" },
      { "label": "Projects",     "href": "#/projects" },
      { "label": "Certificates", "href": "#/certificates" },
      { "label": "Contact",      "href": "#/contact" }
    ]
  },

  /* ==========================================================
     РУССКИЙ
     ========================================================== */
  ru: {
    "person": {
      "name": "Valiakhmad Makhamatov",
      "role": "Технический руководитель проектов | Менеджер развития бизнеса",
      "location": "Удалённо · UTC+5",
      "email": "makhamatov.valiakhmad@gmail.com",
      "linkedin": "https://www.linkedin.com/in/valiakhmad-makhamatov-55b2aa203/",
      "telegram": "https://t.me/rinatovic99",
      "github": "https://github.com/rinatovich",
      "cv": "assets/valiakhmad-makhamatov-cv-2025.pdf",
      "availability": { "open": true, "label": "Открыт для предложений" }
    },

    "hero": {
      "eyebrow": "Технический руководитель проектов | Менеджер развития бизнеса",
      "headline": "Valiakhmad\nMakhamatov",
      "description": "Управляю полным жизненным циклом (End-to-End) высокотехнологичных продуктов. Сочетаю глубокую инженерную экспертизу с системным подходом к управлению кросс-функциональными командами. Реализую проекты национального масштаба с фокусом на измеримый ROI и операционную эффективность",
      "cta_primary": { "label": "Смотреть проекты", "href": "#/projects" },
      "cta_secondary": { "label": "Скачать резюме", "href": "assets/valiakhmad-makhamatov-cv-2025.pdf" }
    },

    "about": {
      "title": "Обо мне",
      "paragraphs": [
        "Я специализируюсь на управлении полным жизненным циклом высокотехнологичных продуктов, обеспечивая стратегическую связку между инженерной архитектурой и бизнес-целями организации. Моя работа — это трансформация сложности в измеримые результаты в условиях жестких регуляторных и рыночных ограничений.",
        "С более чем 8-летним опытом в цифровой трансформации (включая банковский сектор и Enterprise-решения), я руководил кросс-функциональными департаментами до 20 человек. Мой фокус — построение прозрачных процессов управления (Governance), внедрение ИИ-решений и реинжиниринг критической ИТ-инфраструктуры с упором на окупаемость инвестиций (ROI).",
        "Я придерживаюсь гибридной модели лидерства: глубокое понимание технического ядра позволяет мне принимать обоснованные архитектурные решения, а менеджерская экспертиза — эффективно управлять ожиданиями стейкхолдеров и развивать таланты внутри команды."
      ],
      "stats": [
        { "value": "5+",  "label": "лет в продуктовом деливери" },
        { "value": "6",  "label": "запущенных проектов" },
        { "value": "35%", "label": "рост операционной эффективности" },
        { "value": "40",  "label": "сотрудников под руководством" }
      ],
      "education": [
        {
          "logo": "./assets/img/TGTU.jpg",
          "logoAlt": "Логотип ТГТУ",
          "period": "2019 — 2023",
          "degree": "Бакалавр по направлению «Электроника и автоматизация»",
          "institution": "Ташкентский государственный технический университет (ТГТУ)",
          "tag": "Высшее образование"
        },
        {
          "logo": "./assets/img/TPKIT.webp",
          "logoAlt": "Логотип TPKIT",
          "period": "2016 — 2019",
          "degree": "Телекоммуникационные и сетевые технологии",
          "institution": "Ташкентский профессиональный колледж ИТ (TPKIT)",
          "tag": "Средне-специальное"
        }
      ]
    },

    "skills": {
      "title": "Навыки",
      "subtitle": "Технические навыки",
      "categories": [
        { "name": "Менеджмент и стратегия",    "items": ["Технический роадмэппинг", "Спринт-планирование", "Ревью архитектуры", "Найм персонала", "Финансовое моделирование", "Управление рисками", "Управление вендорами"] },
        { "name": "Вэб-разработка",      "items": ["React", "Next.js", "CSS / Tailwind", "Node.js", "PostgreSQL","TypeScript", "Python"] },
        { "name": "Инфраструктура","items": ["Docker", "GitHub Actions", "Nginx", "Linux OS", "Gitlab", "Zabbix", "Prometheus"] }
      ]
    },

    "projects": {
      "title": "Избранные проекты",
      "subtitle": "Кейсы проектов, где имели значение и инженерия, и результат.",
      "items": [
        {
          "id": "bank-modernization",
          "title": "Модернизация ИТ инфраструктуры в одном из крупных банков страны",
          "domain": "ИТ инфраструктура",
          "year": "2025",
          "description": "Была проведена масштабная модернизация оборудования инфраструктуры банка. Основная банковская система была смигрирована на новое более мощное оборудование, вся инфраструктура пользовательской сети была заменена на новые более производительные устройства",
          "outcome": "Снижение времени закрытия банковского дня на 25%. Увеличение пропускной способности корпоративной сети передачи данных в 10 раз.",
          "tags": ["IT инфраструктура", "АБС", "Банкинг", "Финтех"],
          "role": "Менеджер проекта",
          "detail": {
            "client": "Крупный государственный банк",
            "duration": "1 год",
            "team": "10 инженеров, 5 Брокеры, 1 PM, 1 Пресейл инженер",
            "overview": "Существующая инфраструктура представляла собой сет оборудования которым уже более 5 лет и за современными нагрузками оно не поспевало.",
            "problem": [
              "Низкая пропускная способность корпоративной сети передачи данных.",
              "Серверная инфраструктура загружена на более чем 70%.",
              "Большая часть оборудования устарела и не подлежала дальнейшей поддержке и апгрейду.",
              "Отсутствовало централизованное управление ресурсами и сетями."
            ],
            "approach": [
              "Была проведена масштабная компания по аудиту всего оборудования",
              "Был разработан специальный план по миграции основной банковской системы на новое оборудование без остановки работы",
            ],
            "challenges": [
              "Выполнение работ при условии сохранения полной непрерывной доступности банковских сервисов",
              "Монтаж нового оборудования частично требовал инженерных доработок",
            ],
            "results": [
              { "metric": "Рост пропускной способности корпоративной сети передачи данных 10Х",  "detail": "В связи с заменной сетевого оборудования, пропускная способность сети из 100МБит перешла на 1ГБит  " },
              { "metric": "Рост пропускной способности инфраструктурной сети",  "detail": "Инфраструктурная сеть построена на основе 10 и 20Гбитных коммутаторах в то время как до этого максимальная пропускная способность была 1Гбит" },
              { "metric": "Сокращение закрытия банковского дня",                  "detail": "Банковский день закрывался в среднем на 25% быстрее после первого месяца эксплуатации нового оборудования" },
              { "metric": "Централизованное управление всеми ресурсами ИТ",        "detail": "Были внедрены системы централизованное управления ресурсами ИТ инфраструктуры" }
            ],
            "lessons": "Тщательное планирование каждого шага и многократные репитиции дают свой плод. Как говориться тяжело в учении, легко в бою"
          }
        },
        {
          "id": "chemical-safety",
          "title": "Разработка полноценной платформы для реестра опасных химических веществ",
          "domain": "Разработка",
          "year": "2026",
          "description": "Разработка платформы для реестра опасных химических веществ под ключ.",
          "outcome": "Цифровизация карточек химических веществ",
          "tags": ["Web Development", "Platform", "Chem-registry"],
          "role": "Fullstack инженер",
          "link": "",
          "detail": {
            "client": "Комитет экологии",
            "duration": "6 месяца",
            "team": "2 фронт энд разработчика, 2 бэкэнд разработчика, 1 бизнес аналитик, 1 проектный менеджер, 1 дизайнер",
            "overview": "Разработка требовалось в кратчайшие сроки за 1-2 месяца но по итогу до стадии полноценного продукта он дошел только за 6 месяцев",
            "problem": [
              "Отсутствовала единая электронная система для учёта и просмотра информации об опасных химических веществах.",
              "Документация по каждому веществу хранилась разрозненно, в разных форматах и у разных ответственных.",
            ],
            "approach": [
              "Совместно с заказчиком было разработано техническое задание.",
              "Разработка велась в режиме Agile: каждую неделю, а иногда и чаще, заказчику передавался готовый результат, после чего команда переходила к следующему модулю."
            ],
            "challenges": [
              "Часть функциональности, добавленной в середине проекта по запросу заказчика, потребовала пересмотра архитектуры",
            ],
            "results": [
              { "metric": "Единая система для хранения информации", "detail": "Вместо сотни разрозненных файлов внедрена единая система" },
              { "metric": "Возможность импорта и экспорта",     "detail": "Для удобства ввода химических элементов десятками была внедрена система импорта из Excel" },
            ],
            "lessons": "Чёткое совместное понимание того, как продукт и бизнес-процесс будут работать на практике, — главный фактор успеха такого проекта"
          }
        },
        {
          "id": "Techno-Economic-Feasibility-Study",
          "title": "Национальная инфратсруктура пространственных данных",
          "domain": "Технический экспертиза",
          "year": "2025",
          "description": "Защита проекта по разработке Национальной инфраструктуры пространственных данных для привлечения инвестиций от Всемирного банка.",
          "outcome": "Привлечение инвестиций в размере $35млн.",
          "tags": ["Привлечение инвестиций", "Бизнес-планирование", "Экономический анализ", "Технический анализ"],
          "role": "Технический эксперт",
          "detail": {
            "client": "Государственный орган | Кадастровое агентство при Министерстве экономики и финансов Республики Узбекистан",
            "duration": "8 месяцев",
            "team": "Технический эксперт, финансовый аналитик, аналитик систем, системный архитектор",
            "overview": "Подготовка масштабного документа Технико-экономического обоснования проекта (ТЭО) для защиты инвестиций от Всемирного банка. Процедура заняла около 8 месяцев и стала ценным опытом взаимодействия с различными государственными институтами",
            "problem": [
              "Отсутствие Национальной инфраструктуры пространственных данных.",
              "Низкая цифровизация и остутсвие единой архитектуры.",
            ],
            "approach": [
              "Полный аудит всей существующей инфраструктуры заказчика, полное погружение во все информационные системы и методы их работы",
              "Документация бизнес процессов заказчика связанных с обработкой и хранением пространственных данных.",
            ],
            "challenges": [
              "Вести полную согласованность со всеми заинтересованными структурами государства",
              "Показать и раскрыть как весь потенциал так и всю ценность проекта"
            ],
            "results": [
              { "metric": "Запланирован пилот в самом туристически притягательном городе Узбекистана",     "detail": "Первый пилотный запуск системы запланирован в одном из городов Республики. При этом для данного пилота выделено около $5 млн" },
              { "metric": "Спроектированы дополнительные дата центры", "detail": "В рамках проекта были запланированы возведение еще 2х дополнительных абсолютно новых дата центра уровня Tier 3 и просчитаны стоимость их эксплуатации на 5 лет" },
              { "metric": "Модернизация текущего оборудования",       "detail": "Также проектом предусмотрена модернизация уже существующего оборудования для соотвествия требованиям работы с инфраструктурой и новыми платформами" },
              { "metric": "Подготовлен детальный документ", "detail": "Подготовлен детальный документ по зашитие проекта а также осуществлена защита совместно с руководствующим составом заказчика" }
            ],
            "lessons": "Работа на общее благо иногда дает больше мотивации нежели чем материальное состовляющее."
          }
        },
        {
          "id": "innovative-contact-center",
          "title": "Инновационный контакт-центр — комплексная автоматизация клиентского сервиса банка",
          "domain": "Контакт-центр / Автоматизация",
          "year": "2026 — 2031",
          "status": { "label": "На стадии защиты", "type": "progress" },
          "description": "Программа из шести взаимосвязанных компонентов: омниканальная чат-платформа, чат-бот, голосовые боты для инбаунда и аутбаунда, платформа речевой аналитики и интеллектуальная система Workforce Management.",
          "outcome": "$26 млн экономии против базового сценария, NPV $8 млн, целевой уровень автоматизации 40% к концу 5-го года.",
          "tags": ["Omnichannel", "Chatbot", "Voice Bot", "Speech Analytics", "WFM", "Финансовое моделирование"],
          "role": "Руководитель программы автоматизации",
          "detail": {
            "client": "Крупный коммерческий банк",
            "duration": "Обоснование и защита — 2024–2026, реализация — конец 2026 и далее (горизонт 5 лет)",
            "team": "Бизнес-аналитики, финансовый аналитик, архитекторы решений, вендор-менеджеры, руководитель программы (я)",
            "overview": "Программа объединяет шесть крупных компонентов автоматизации контакт-центра банка: омниканальную чат-платформу, чат-бота для неё, голосового бота для аутбаунда, голосового бота для инбаунда, платформу речевой аналитики и интеллектуальную платформу Workforce Management для составления графиков операторов. Проект прошёл полный цикл предпроектной подготовки и сейчас готовится к защите для получения финансирования на реализацию.",
            "problem": [
              "Обслуживание клиентов банка построено на разрозненных ручных процессах контакт-центра без единой омниканальной платформы.",
              "Отсутствие интеллектуальной автоматизации в голосовых и чат-каналах приводит к высокой нагрузке на операторов и постоянному росту штата.",
              "Графики операторов составляются вручную, без учёта прогноза нагрузки, что ведёт к переизбытку или дефициту персонала в разные периоды."
            ],
            "approach": [
              "Проведено детальное изучение текущих бизнес-процессов контакт-центра и точек контакта с клиентом по всем каналам.",
              "Выполнен анализ локального и мирового рынка поставщиков решений для омниканальных платформ, чат- и голосовых ботов, речевой аналитики и WFM, включая опыт внедрения в других банках.",
              "Проведены пилотные проекты и тестирования с несколькими вендорами по ключевым компонентам решения.",
              "Разработаны отдельные RFP по каждому из шести компонентов программы.",
              "Построена финансовая модель с двумя сценариями — базовым и с автоматизацией — с расчётом экономического эффекта на горизонте 5 лет.",
              "Подготовлен пакет внутренних документов: стратегия и план поэтапного внедрения, реестр и матрица рисков проекта."
            ],
            "challenges": [
              "Согласование единого видения между бизнес-подразделениями, ИТ и риск-менеджментом по масштабной кросс-функциональной программе.",
              "Сведение шести независимых компонентов в единую согласованную архитектуру и дорожную карту внедрения.",
              "Обоснование крупного бюджета на защите проекта перед руководством и подтверждение окупаемости на пятилетнем горизонте."
            ],
            "results": [
              { "metric": "$26 млн экономии", "detail": "Разница между сценарием с автоматизацией и базовым сценарием на горизонте реализации программы" },
              { "metric": "NPV $8 млн", "detail": "Чистая приведённая стоимость проекта по результатам финансового моделирования" },
              { "metric": "Сокращение штата на 421 человека", "detail": "За счёт автоматизации типовых операций контакт-центра" },
              { "metric": "$10 млн экономии на ФОТ (Perex)", "detail": "Снижение расходов на персонал благодаря автоматизации операторских функций" },
              { "metric": "Целевой уровень автоматизации 40%", "detail": "К концу 5-го года реализации программы" }
            ],
            "lessons": "Масштабная программа автоматизации требует не только сильного технического обоснования, но и убедительной финансовой модели с чёткой стратегией поэтапного внедрения — именно это в итоге определяет, получит ли проект финансирование."
          }
        },
        {
          "id": "koica-equipment-supply",
          "title": "Поставка и запуск сетевого и серверного оборудования для ИТ-парка при финансировании KOICA",
          "domain": "ИТ-инфраструктура / Поставки",
          "year": "2022",
          "description": "Поставка и ввод в эксплуатацию сетевого, серверного оборудования и систем хранения данных для ИТ-парка при финансировании международной организации KOICA, включая лицензии ключевого ПО.",
          "outcome": "Бюджет проекта $1.5 млн, реализован за 5 месяцев с учётом задержки оборудования на таможне.",
          "tags": ["Поставка оборудования", "Сетевая инфраструктура", "Дата-центр", "KOICA"],
          "role": "Технический руководитель проекта",
          "detail": {
            "client": "ИТ-парк Узбекистана · при финансировании международной организации KOICA",
            "duration": "5 месяцев (с учётом задержки оборудования на таможне)",
            "team": "Технический руководитель проекта (я), партнёр-поставщик, логисты, инженеры монтажа",
            "overview": "Проект по поставке и вводу в эксплуатацию нового сетевого, серверного оборудования и систем хранения данных для ИТ-парка, реализованный при финансировании международной организации KOICA. Ключевым условием было полное соответствие размещения, монтажа и настройки оборудования стандартам KOICA. Я участвовал в проекте от согласования спецификаций до полного запуска.",
            "problem": [
              "Требовалось полностью обновить сетевую и серверную инфраструктуру ИТ-парка в сжатые сроки.",
              "Все работы — от архитектуры до монтажа — должны были строго соответствовать техническим стандартам донора.",
              "Часть бюджета проекта включала поставку лицензий ключевого ПО, что усложняло логистику и таможенное оформление."
            ],
            "approach": [
              "Проведено маркетинговое исследование рынка поставщиков сетевого, серверного оборудования и систем хранения данных.",
              "Разработана и согласована архитектура решения с учётом требований и стандартов KOICA.",
              "Согласованы технические спецификации оборудования и лицензий с донором и заказчиком.",
              "Организована растаможка оборудования, монтаж и полный запуск систем в эксплуатацию."
            ],
            "challenges": [
              "Оборудование задержалось на таможне из-за документации, что потребовало пересмотра графика без превышения общего бюджета.",
              "Строгое соответствие всем стандартам KOICA по размещению и монтажу оборудования требовало дополнительных согласований на каждом этапе."
            ],
            "results": [
              { "metric": "Бюджет проекта $1.5 млн", "detail": "Полная поставка сетевого, серверного оборудования, систем хранения данных и лицензий ПО" },
              { "metric": "Срок реализации 5 месяцев", "detail": "С учётом задержки поставки оборудования на таможне" },
              { "metric": "Полное соответствие стандартам KOICA", "detail": "По размещению, монтажу и настройке всего поставленного оборудования" }
            ],
            "lessons": "При работе с донорским финансированием таможенное оформление и документация — это отдельный проект внутри проекта, который нужно планировать так же тщательно, как техническую архитектуру."
          }
        },
        {
          "id": "situation-center-security",
          "title": "Проектирование ситуационного центра для силовых структур",
          "domain": "Проектирование инфраструктуры",
          "year": "2024",
          "status": { "label": "Проект не реализован", "type": "not-implemented" },
          "description": "Полное проектирование инфраструктуры и рабочих процессов ситуационного центра для силовой структуры: маркетинговый анализ, план работ и план закупа.",
          "outcome": "Подготовлен полный пакет проектной документации и обоснование стоимости проекта в размере $2.3 млн.",
          "tags": ["Ситуационный центр", "Проектирование", "Силовые структуры", "Закупки"],
          "role": "Технический эксперт / Проектировщик",
          "detail": {
            "client": "Силовая структура Республики Узбекистан",
            "duration": "Несколько месяцев, 2024",
            "team": "Технический эксперт (я), аналитики рынка, сметчики",
            "overview": "Проект предполагал полное проектирование инфраструктуры и рабочих процессов ситуационного центра для силовой структуры — от архитектуры оборудования до плана закупок и обоснования стоимости перед конкурсной комиссией.",
            "problem": [
              "У заказчика отсутствовал ситуационный центр, отвечающий современным требованиям к мониторингу и принятию решений.",
              "Требовалось спроектировать инфраструктуру с нуля и полностью обосновать её стоимость."
            ],
            "approach": [
              "Проведён маркетинговый анализ рынка оборудования и решений для ситуационных центров.",
              "Разработан детальный план работ по созданию центра.",
              "Подготовлен план закупа с обоснованием стоимости каждого компонента."
            ],
            "challenges": [
              "Высокая конкуренция на тендере при непрозрачных критериях отбора победителя.",
              "Проект в итоге выиграла другая компания — несмотря на подготовленное комплексное решение."
            ],
            "results": [
              { "metric": "$2.3 млн", "detail": "Полная оценка стоимости проекта, подготовленная на основе маркетингового анализа и плана закупа" },
              { "metric": "Полный пакет проектной документации", "detail": "План работ и план закупа, готовые к реализации" }
            ],
            "lessons": "Не каждый качественно подготовленный проект доходит до реализации — тендерные процессы в госсекторе зависят не только от технической и финансовой проработки. Тем не менее, наработанная методология проектирования ситуационных центров пригодилась в последующих проектах."
          }
        },
        {
          "id": "smart-highway-huawei",
          "title": "Умная автомагистраль — интеллектуальная система контроля трафика совместно с Huawei",
          "domain": "Умные дороги / AI",
          "year": "2024",
          "status": { "label": "Проект заморожен", "type": "frozen" },
          "description": "ИТ-часть проекта умной автомагистрали совместно с Huawei: инфраструктура для системы контроля дорожного трафика на основе искусственного интеллекта.",
          "outcome": "Подготовлен полный план реализации и оценка ИТ-части проекта на $50 млн.",
          "tags": ["Smart Road", "AI", "Huawei", "Видеоаналитика", "Логистика поставок"],
          "role": "Технический эксперт / Руководитель ИТ-части",
          "detail": {
            "client": "Государственный проект умной автомагистрали · партнёр Huawei",
            "duration": "2024",
            "team": "Технический эксперт (я), партнёры Huawei, вендор-менеджеры",
            "overview": "В рамках совместного с Huawei проекта по созданию умной автомагистрали я отвечал за ИТ-часть — создание инфраструктуры для системы контроля дорожного трафика на основе искусственного интеллекта.",
            "problem": [
              "Требовалось спроектировать с нуля инфраструктуру для интеллектуального контроля дорожного трафика на протяжённой автомагистрали.",
              "Необходимо было выстроить сложную логистику поставки оборудования и подобрать подходящих вендоров совместно с Huawei."
            ],
            "approach": [
              "Проведено детальное ознакомление с проектом и требованиями к системе контроля трафика на основе ИИ.",
              "Составлен план реализации ИТ-части проекта.",
              "Подобраны вендоры оборудования и выстроены логистические цепочки поставки.",
              "Подготовлена итоговая стоимость ИТ-части проекта."
            ],
            "challenges": [
              "Масштаб проекта ($50 млн ИТ-часть) требовал согласования с большим количеством заинтересованных сторон.",
              "Проект был заморожен после этапа планирования по причинам, не связанным с технической проработкой."
            ],
            "results": [
              { "metric": "$50 млн", "detail": "Оценка стоимости ИТ-части проекта — инфраструктуры системы контроля трафика на основе ИИ" },
              { "metric": "Готовый план реализации", "detail": "Логистические цепочки, вендоры и архитектура согласованы с партнёром Huawei" }
            ],
            "lessons": "Работа с крупным международным партнёром вроде Huawei даёт возможность выстроить экспертизу в области AI-инфраструктуры, даже когда сам проект в итоге не переходит в стадию реализации."
          }
        },
        {
          "id": "small-business-web-projects",
          "title": "Веб-разработка для малого бизнеса",
          "domain": "Веб-разработка",
          "year": "2020 — 2024",
          "description": "Серия небольших веб-проектов — сайты-визитки, лендинги и простые интернет-магазины для малого бизнеса.",
          "outcome": "Digital-присутствие и первые онлайн-продажи для нескольких небольших компаний.",
          "tags": ["React", "Landing Page", "Small Business", "Web Development"],
          "role": "Fullstack разработчик",
          "detail": {
            "client": "Несколько малых предприятий (частные заказчики)",
            "duration": "Разовые проекты, по 2–4 недели каждый",
            "team": "Соло-разработчик",
            "overview": "Параллельно с крупными инфраструктурными и консалтинговыми проектами я регулярно беру небольшие веб-проекты для малого бизнеса — от сайтов-визиток до простых интернет-магазинов, помогая владельцам бизнеса получить первое цифровое присутствие.",
            "problem": [
              "У большинства заказчиков не было сайта или присутствия в интернете — только страницы в соцсетях.",
              "Бюджет и сроки всегда были крайне ограничены."
            ],
            "approach": [
              "Использовал типовой, но гибкий стек (React, HTML/CSS, лёгкий бэкенд при необходимости) для быстрой разработки.",
              "Фокусировался на простых и понятных сайтах, которые владелец бизнеса может обновлять сам."
            ],
            "challenges": [
              "Совмещение мелких проектов с основной занятостью на крупных программах требовало чёткого тайм-менеджмента."
            ],
            "results": [
              { "metric": "Несколько запущенных сайтов", "detail": "Сайты-визитки и лендинги для локальных малых предприятий" },
              { "metric": "Быстрые сроки", "detail": "От 2 до 4 недель на проект от старта до запуска" }
            ],
            "lessons": "Небольшие проекты — отличный способ держать руку на пульсе разработки, даже когда основная роль смещается в сторону управления и стратегии."
          }
        },
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
        { "label": "LinkedIn", "href": "https://www.linkedin.com/in/valiakhmad-makhamatov-55b2aa203/", "icon": "linkedin" },
        { "label": "GitHub",   "href": "https://github.com/rinatovich",      "icon": "github" },
        { "label": "Email",    "href": "mailto:makhamatov.valiakhmad@gmail.com",        "icon": "email" },
        { "label": "Telegram",   "href": "https://t.me/rinatovic99",      "icon": "telegram" },
      ]
    },

    "nav": [
      { "label": "Главная",     "href": "#/" },
      { "label": "Проекты",     "href": "#/projects" },
      { "label": "Сертификаты", "href": "#/certificates" },
      { "label": "Контакты",    "href": "#/contact" }
    ]
  },

  /* ==========================================================
     O'ZBEKCHA
     ========================================================== */
  uz: {
    "person": {
      "name": "Valiakhmad Makhamatov",
      "role": "Texnik loyiha menejeri va Full Stack muhandis",
      "location": "Masofaviy · UTC+5",
      "email": "makhamatov.valiakhmad@gmail.com",
      "linkedin": "https://www.linkedin.com/in/valiakhmad-makhamatov-55b2aa203/",
      "telegram": "https://t.me/rinatovic99",
      "github": "https://github.com/rinatovich",
      "cv": "assets/valiakhmad-makhamatov-cv-2025.pdf",
      "availability": { "open": true, "label": "Takliflarga ochiqman" }
    },

    "hero": {
      "eyebrow": "Texnik loyiha menejeri va Full Stack muhandis",
      "headline": "Valiakhmad\nMakhamatov",
      "description": "Men muhandislik murakkabligini biznes natijalari bilan bog'layman. 8 yildan ortiq tajribam davomida masshtablanuvchi tizimlar quraman, funksiyalararo jamoalarga rahbarlik qilaman va bitta sprintdan uzoqroq umr ko'radigan mahsulotlarni ishga tushiraman.",
      "cta_primary": { "label": "Loyihalarni ko'rish", "href": "#/projects" },
      "cta_secondary": { "label": "Rezyumeni yuklab olish", "href": "assets/valiakhmad-makhamatov-cv-2025.pdf" }
    },

    "about": {
      "title": "Men haqimda",
      "paragraphs": [
        "Men dasturiy ta'minot muhandisligi va mahsulotni yetkazib berish chorrahasida ishlayman — bu yerda arxitektura qarorlari biznes cheklovlari bilan uchrashadi, jamoa ichidagi dinamika esa yaxshi g'oya релизга chiqadimi yoki to'xtab qoladimi, shuni belgilaydi.",
        "Tajribam full-stack dasturlash, platforma arxitekturasi va texnik loyiha boshqaruvini qamrab oladi. Men 4 dan 20 tagacha muhandisdan iborat jamoalarga rahbarlik qildim, legacy monolitlarni to'xtovsiz qayta qurdim va deploy siklini haftalardan soatlarga qisqartirdim.",
        "Men ishonamanki, eng yaxshi texnik yetakchilar kod yozadi va mijozlar bilan gaplashadi. Ikkala odat ham sizni o'tkirlashtiradi."
      ],
      "stats": [
        { "value": "8+",  "label": "yil mahsulot yetkazib berishda" },
        { "value": "12",  "label": "ishga tushirilgan mahsulot" },
        { "value": "40%", "label": "o'rtacha deploy vaqti qisqarishi" },
        { "value": "20",  "label": "boshqarilgan muhandis" }
      ],
      "education": [
        {
          "logo": "./assets/img/TGTU.jpg",
          "logoAlt": "TDTU logotipi",
          "period": "2019 — 2023",
          "degree": "Elektronika va avtomatlashtirish muhandisligi bakalavri",
          "institution": "Toshkent davlat texnika universiteti (TDTU)",
          "tag": "Oliy ta'lim"
        },
        {
          "logo": "./assets/img/TPKIT.webp",
          "logoAlt": "TPKIT logotipi",
          "period": "2016 — 2019",
          "degree": "Telekommunikatsiya va tarmoq texnologiyalari",
          "institution": "Toshkent axborot texnologiyalari professional kolleji (TPKIT)",
          "tag": "O'rta maxsus ta'lim"
        }
      ]
    },

    "skills": {
      "title": "Texnik ko'nikmalar",
      "categories": [
        { "name": "Dasturlash tillari", "items": ["TypeScript", "Python", "Go", "SQL", "Bash"] },
        { "name": "Frontend",           "items": ["React", "Next.js", "CSS / Tailwind", "Framer Motion"] },
        { "name": "Backend",            "items": ["Node.js", "FastAPI", "PostgreSQL", "Redis", "GraphQL"] },
        { "name": "Infratuzilma",       "items": ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform"] },
        { "name": "Boshqaruv",          "items": ["Texnik rejalashtirish", "OKR", "Sprint rejalashtirish", "Arxitektura ko'rib chiqish", "Yollash"] }
      ]
    },

    "projects": {
      "title": "Tanlangan ishlar",
      "subtitle": "Ham muhandislik, ham natija muhim bo'lgan loyihalardan keyslar.",
      "items": [
        {
          "id": "bank-modernization",
          "title": "Yirik milliy bank uchun IT infratuzilmasini modernizatsiya qilish",
          "domain": "IT infratuzilmasi",
          "year": "2025",
          "description": "Bankning infratuzilmasini keng ko'lamli modernizatsiya qildim: asosiy bank tizimi yangi, yuqori quvvatli uskunaga ko'chirildi, butun korporativ tarmoq zamonaviy uskunalarga yangilandi.",
          "outcome": "Bank kunini yopish vaqti 25% qisqardi. Korporativ tarmoq o'tkazuvchanligi 10 barobar oshdi.",
          "tags": ["IT infratuzilma", "Asosiy bank tizimi", "Banking", "Fintech"],
          "role": "Loyiha menejeri",
          "detail": {
            "client": "Yirik davlat banki",
            "duration": "1 yil",
            "team": "10 muhandis, 5 broker/vendor vakili, 1 PM, 1 preseyl muhandisi",
            "overview": "Bankning mavjud infratuzilmasi 5 yildan oshgan edi va joriy tranzaksiya hajmlariga endi yetarli emas edi.",
            "problem": [
              "Korporativ ma'lumotlar tarmog'ining o'tkazuvchanligi past edi.",
              "Server infratuzilmasi 70% dan yuqori yuklangan edi.",
              "Uskunalarning katta qismi eskirgan va vendor tomonidan qo'llab-quvvatlanmasdi.",
              "IT resurslari va tarmoqlarni markazlashgan boshqarish tizimi yo'q edi."
            ],
            "approach": [
              "Bankning barcha mavjud uskunalari bo'yicha to'liq audit o'tkazildi.",
              "Asosiy bank tizimini xizmatni to'xtatmasdan yangi uskunaga ko'chirish uchun bosqichma-bosqich migratsiya rejasi ishlab chiqildi."
            ],
            "challenges": [
              "Bank xizmatlarining to'liq va uzluksiz mavjudligini saqlab qolgan holda ishlarni bajarish.",
              "Ba'zi uskunalarni o'rnatish yangi arxitekturaga moslashtirish uchun qo'shimcha muhandislik ishlarini talab qildi."
            ],
            "results": [
              { "metric": "Tarmoq o'tkazuvchanligi 10× oshdi",  "detail": "Tarmoq uskunalarini almashtirish orqali korporativ tarmoq 100 Mbit dan 1 Gbit ga o'tdi" },
              { "metric": "Yuqori quvvatli backbone",  "detail": "Infratuzilma tarmog'i avvalgi 1 Gbit chegarasi o'rniga 10/40 Gbit kommutatorlar asosida qurildi" },
              { "metric": "Bank kunini yopish 25% tezlashdi", "detail": "Yangi uskunada ishlashning birinchi oyidayoq o'rtacha yopish vaqti 25% ga qisqardi" },
              { "metric": "IT resurslarini markazlashgan boshqarish", "detail": "Butun infratuzilma bo'ylab markazlashgan boshqaruv vositalari joriy etildi" }
            ],
            "lessons": "Har bir qadamni puxta rejalashtirish va bir necha marta sinab ko'rish o'z samarasini beradi — aynan shu intizom to'xtovsiz migratsiyani mumkin qiladi."
          }
        },
        {
          "id": "chemical-safety",
          "title": "Xavfli kimyoviy moddalar milliy reyestri platformasi",
          "domain": "Dasturiy ta'minot ishlab chiqish",
          "year": "2026",
          "description": "Xavfli kimyoviy moddalar reyestri uchun platformani noldan to'liq loyihalashtirdim va qurdim.",
          "outcome": "Ilgari faqat tarqoq qog'oz va fayl ko'rinishida bo'lgan kimyoviy moddalar hujjatlari raqamlashtirildi.",
          "tags": ["Veb-dasturlash", "Platforma", "Kimyoviy reyestr"],
          "role": "Full Stack muhandis",
          "link": "",
          "detail": {
            "client": "Ekologiya qo'mitasi",
            "duration": "6 oy",
            "team": "2 frontend muhandis, 2 backend muhandis, 1 biznes-analitik, 1 loyiha menejeri, 1 dizayner",
            "overview": "Mijoz dastlab 1–2 oyda tayyor variantni xohlagan edi, ammo haqiqiy production darajasidagi platformaga yetishga 6 oy ketdi.",
            "problem": [
              "Xavfli kimyoviy moddalar haqidagi ma'lumotni ko'rish uchun yagona elektron tizim mavjud emas edi.",
              "Har bir modda bo'yicha hujjatlar turli formatlarda va turli bo'limlarda tarqoq holda saqlanardi."
            ],
            "approach": [
              "Mijoz bilan birgalikda batafsil texnik topshiriq ishlab chiqildi.",
              "Ish Agile uslubida olib borildi — har hafta yoki undan tezroq mijozga tayyor natija topshirilib, keyingi modulga o'tilardi."
            ],
            "challenges": [
              "Loyiha o'rtasida mijoz talabiga ko'ra qo'shilgan ba'zi funksionallik arxitekturani qisman qayta qurishni talab qildi."
            ],
            "results": [
              { "metric": "Yagona ma'lumotlar tizimi", "detail": "Yuzlab tarqoq fayllar o'rniga yagona qidiriladigan reyestr joriy etildi" },
              { "metric": "Ommaviy import/eksport", "detail": "Operatorlar o'nlab moddalarni birma-bir emas, balki Excel orqali bir vaqtda kiritishi uchun import funksiyasi qo'shildi" }
            ],
            "lessons": "Mahsulot va tegishli biznes-jarayon amalda qanday ishlashi haqida mijoz bilan aniq umumiy tushunishga erishish — loyiha muvaffaqiyatining asosiy omili."
          }
        },
        {
          "id": "Techno-Economic-Feasibility-Study",
          "title": "Milliy fazoviy ma'lumotlar infratuzilmasi",
          "domain": "Texnik ekspertiza",
          "year": "2025",
          "description": "Jahon banki investitsiyasini jalb qilish uchun O'zbekistonning Milliy fazoviy ma'lumotlar infratuzilmasi loyihasining texnik va moliyaviy asoslamasini tayyorladim va himoya qildim.",
          "outcome": "$35 mln hajmida investitsiya jalb qilindi.",
          "tags": ["Investitsiya jalb qilish", "Biznes-rejalashtirish", "Iqtisodiy tahlil", "Texnik tahlil"],
          "role": "Texnik ekspert",
          "detail": {
            "client": "Davlat organi | O'zbekiston Respublikasi Iqtisodiyot va moliya vazirligi huzuridagi Kadastr agentligi",
            "duration": "8 oy",
            "team": "Texnik ekspert, moliyaviy analitik, tizim analitikasi mutaxassisi, tizim arxitektori",
            "overview": "Jahon banki investitsiyasini himoya qilish uchun keng ko'lamli Texnik-iqtisodiy asoslash (TIA) hujjati tayyorlandi. Jarayon taxminan 8 oy davom etdi va turli davlat institutlari bilan ishlashda qimmatli tajriba bo'ldi.",
            "problem": [
              "Milliy fazoviy ma'lumotlar infratuzilmasi mavjud emas edi.",
              "Raqamlashtirish darajasi past va idoralar o'rtasida yagona arxitektura yo'q edi."
            ],
            "approach": [
              "Mijozning barcha mavjud infratuzilmasi bo'yicha to'liq audit o'tkazildi, har bir axborot tizimi va uning ishlash usuliga chuqur kirib borildi.",
              "Fazoviy ma'lumotlarni qayta ishlash va saqlash bilan bog'liq mijoz biznes-jarayonlari hujjatlashtirildi."
            ],
            "challenges": [
              "Loyihaga jalb qilingan barcha davlat tuzilmalari bilan to'liq muvofiqlikni saqlash.",
              "Loyihaning butun salohiyati va qiymatini notexnik auditoriyaga tushunarli va ishonarli tarzda ko'rsatish."
            ],
            "results": [
              { "metric": "Pilot O'zbekistonning eng jozibali turistik shahrida rejalashtirildi",     "detail": "Tizimning birinchi ishga tushirilishi respublika shaharlaridan birida rejalashtirilgan, pilot uchun ~$5 mln ajratilgan" },
              { "metric": "Ikkita yangi Tier III ma'lumotlar markazi loyihalashtirildi", "detail": "Qo'shimcha ikkita Tier III darajali ma'lumotlar markazi ko'lami aniqlandi, 5 yillik ekspluatatsiya xarajatlari hisoblab chiqildi" },
              { "metric": "Mavjud uskunalarni modernizatsiya qilish rejasi",       "detail": "Yangi infratuzilma va platformalar talablariga javob berish uchun mavjud uskunalarni yangilash ko'lami belgilandi" },
              { "metric": "To'liq investitsiya asoslamasi taqdim etildi va himoya qilindi", "detail": "Batafsil himoya hujjati tayyorlandi va mijoz rahbariyati bilan birgalikda taqdim etildi" }
            ],
            "lessons": "Jamiyat manfaati uchun ishlash ba'zan faqat moliyaviy natijadan ko'ra kuchliroq motivatsiya beradi."
          }
        },
        {
          "id": "innovative-contact-center",
          "title": "Innovatsion kontakt-markaz — bank mijozlarga xizmat ko'rsatishni to'liq avtomatlashtirish",
          "domain": "Kontakt-markaz / Avtomatlashtirish",
          "year": "2026 — 2031",
          "status": { "label": "Moliyalashtirish himoyasi bosqichida", "type": "progress" },
          "description": "Olti komponentdan iborat dastur: omnikanal chat-platforma, unga mo'ljallangan chat-bot, inbound va outbound uchun ovozli botlar, nutq analitikasi platformasi va aqlli Workforce Management tizimi.",
          "outcome": "Bazaviy stsenariyga nisbatan $26 mln tejamkorlik, $8 mln NPV, 5-yil oxiriga 40% avtomatlashtirish maqsadi.",
          "tags": ["Omnichannel", "Chat-bot", "Ovozli bot", "Nutq analitikasi", "WFM", "Moliyaviy modellashtirish"],
          "role": "Avtomatlashtirish dasturi rahbari",
          "detail": {
            "client": "Yirik tijorat banki",
            "duration": "Asoslash va himoya — 2024–2026, amalga oshirish — 2026 oxiridan boshlab (5 yillik ufq)",
            "team": "Biznes-analitiklar, moliyaviy analitik, yechim arxitektorlari, vendor-menejerlar, dastur rahbari (men)",
            "overview": "Dastur bank kontakt-markazini avtomatlashtirishning oltita yirik komponentini birlashtiradi: omnikanal chat-platforma, unga mo'ljallangan chat-bot, outbound uchun ovozli bot, inbound uchun ovozli bot, nutq analitikasi platformasi va operatorlar grafigini tuzuvchi aqlli Workforce Management platformasi. Loyiha loyihagacha bo'lgan barcha bosqichlarni to'liq yakunladi va hozir moliyalashtirishni olish uchun himoyaga tayyorlanmoqda.",
            "problem": [
              "Bank mijozlarga xizmat ko'rsatishi yagona omnikanal platformasiz, tarqoq qo'lda bajariladigan kontakt-markaz jarayonlariga asoslangan edi.",
              "Ovozli va chat kanallarida aqlli avtomatlashtirish yo'qligi operatorlar yukini oshirib, shtatning doimiy o'sishiga olib kelardi.",
              "Operatorlar grafigi yuklamani prognozlashsiz, qo'lda tuzilardi — bu turli davrlarda xodimlar ortiqcha yoki yetishmovchiligiga sabab bo'lardi."
            ],
            "approach": [
              "Kontakt-markazning joriy biznes-jarayonlari va barcha kanallar bo'yicha mijoz bilan aloqa nuqtalari batafsil o'rganildi.",
              "Omnikanal platformalar, chat va ovozli botlar, nutq analitikasi va WFM bo'yicha mahalliy va jahon vendorlar bozori, shu jumladan boshqa banklardagi joriy etish tajribasi tahlil qilindi.",
              "Dasturning asosiy komponentlari bo'yicha bir nechta vendor bilan pilot loyihalar va testlar o'tkazildi.",
              "Dasturning oltita komponenti bo'yicha alohida RFP tayyorlandi.",
              "5 yillik ufqda iqtisodiy samarani hisoblagan holda ikki stsenariyli — bazaviy va avtomatlashtirilgan — moliyaviy model qurildi.",
              "Ichki hujjatlar to'plami tayyorlandi: joriy etish strategiyasi va bosqichma-bosqich reja, loyiha risklari reyestri va matritsasi."
            ],
            "challenges": [
              "Yirik funksiyalararo dastur bo'yicha biznes bo'linmalari, IT va risk-menejment o'rtasida yagona qarashni kelishish.",
              "Oltita mustaqil komponentni yagona izchil arxitektura va joriy etish yo'l xaritasiga birlashtirish.",
              "Rahbariyat oldida yirik byudjetni asoslash va besh yillik ufqda o'zini oqlashini tasdiqlash."
            ],
            "results": [
              { "metric": "$26 mln tejamkorlik", "detail": "Dastur amalga oshirilish ufqida avtomatlashtirilgan va bazaviy stsenariylar o'rtasidagi farq" },
              { "metric": "$8 mln NPV", "detail": "Moliyaviy modellashtirish natijalariga ko'ra loyihaning sof joriy qiymati" },
              { "metric": "421 kishiga shtat qisqarishi", "detail": "Kontakt-markazning tipik operatsiyalarini avtomatlashtirish hisobiga" },
              { "metric": "$10 mln FOT tejamkorligi", "detail": "Operator funksiyalarini avtomatlashtirish orqali xodimlar xarajatlarini kamaytirish" },
              { "metric": "40% maqsadli avtomatlashtirish darajasi", "detail": "Dasturning 5-yili oxiriga kelib" }
            ],
            "lessons": "Yirik avtomatlashtirish dasturi kuchli texnik asoslamadan tashqari, xuddi shunday puxta moliyaviy model va aniq bosqichma-bosqich joriy etish strategiyasini talab qiladi — aynan shu birikma loyiha moliyalashtirish olish-olmasligini belgilaydi."
          }
        },
        {
          "id": "koica-equipment-supply",
          "title": "KOICA moliyalashtiruvida IT-park uchun tarmoq va server uskunalarini yetkazib berish",
          "domain": "IT infratuzilmasi / Yetkazib berish",
          "year": "2022",
          "description": "KOICA (Koreya xalqaro hamkorlik agentligi) moliyalashtiruvida IT-park uchun tarmoq, server uskunalari va ma'lumotlarni saqlash tizimlarini yetkazib berdim va ishga tushirdim, shu jumladan asosiy dasturiy ta'minot litsenziyalari.",
          "outcome": "$1,5 mln loyiha byudjeti, bojxona kechikishlarini hisobga olgan holda 5 oyda amalga oshirildi.",
          "tags": ["Uskuna yetkazib berish", "Tarmoq infratuzilmasi", "Ma'lumotlar markazi", "KOICA"],
          "role": "Loyihaning texnik rahbari",
          "detail": {
            "client": "O'zbekiston IT-parki · KOICA moliyalashtiruvida",
            "duration": "5 oy (uskuna bojxona kechikishini hisobga olgan holda)",
            "team": "Loyihaning texnik rahbari (men), yetkazib beruvchi hamkor, logistika, o'rnatish muhandislari",
            "overview": "KOICA moliyalashtiruvida IT-park uchun yangi tarmoq, server uskunalari va ma'lumotlarni saqlash tizimlarini yetkazib berdim va ishga tushirdim. Asosiy shart — uskunalarni joylashtirish, o'rnatish va sozlashning har bir jihati KOICA standartlariga to'liq mos kelishi edi. Loyihada spetsifikatsiyalarni kelishishdan to to'liq ishga tushirilgunga qadar ishtirok etdim.",
            "problem": [
              "IT-parkning tarmoq va server infratuzilmasini qisqa muddatda to'liq yangilash kerak edi.",
              "Arxitekturadan tortib o'rnatishgacha bo'lgan barcha ishlar donor texnik standartlariga qat'iy mos kelishi kerak edi.",
              "Byudjetning bir qismi dasturiy ta'minot litsenziyalarini yetkazib berishni o'z ichiga olardi, bu logistika va bojxona rasmiylashtirishni murakkablashtirardi."
            ],
            "approach": [
              "Tarmoq, server uskunalari va ma'lumotlarni saqlash tizimlari yetkazib beruvchilari bozori bo'yicha marketing tadqiqoti o'tkazildi.",
              "KOICA talablari va standartlariga mos yechim arxitekturasi ishlab chiqildi va kelishildi.",
              "Uskunalar va litsenziyalarning texnik spetsifikatsiyalari donor va mijoz bilan kelishildi.",
              "Uskunalarni bojxonadan o'tkazish, o'rnatish va tizimlarni to'liq ishga tushirish tashkil etildi."
            ],
            "challenges": [
              "Uskuna hujjatlar sababli bojxonada kechikdi, bu umumiy byudjetdan oshmasdan jadvalni qayta ko'rib chiqishni talab qildi.",
              "KOICA ning joylashtirish va o'rnatish standartlariga qat'iy rioya qilish har bir bosqichda qo'shimcha kelishuvlarni talab qildi."
            ],
            "results": [
              { "metric": "$1,5 mln loyiha byudjeti", "detail": "Tarmoq, server uskunalari, ma'lumotlarni saqlash tizimlari va dasturiy litsenziyalarni to'liq yetkazib berish" },
              { "metric": "5 oylik amalga oshirish muddati", "detail": "Uskuna yetkazib berishdagi bojxona kechikishini hisobga olgan holda" },
              { "metric": "KOICA standartlariga to'liq muvofiqlik", "detail": "Yetkazib berilgan barcha uskunalarni joylashtirish, o'rnatish va sozlash bo'yicha" }
            ],
            "lessons": "Donor moliyalashtiruvidagi loyihalarda bojxona rasmiylashtiruvi va hujjatlar aslida loyiha ichidagi alohida loyihadir — uni texnik arxitektura kabi puxtalik bilan rejalashtirish kerak."
          }
        },
        {
          "id": "situation-center-security",
          "title": "Kuch tuzilmalari uchun Vaziyat markazini loyihalashtirish",
          "domain": "Infratuzilmani loyihalashtirish",
          "year": "2024",
          "status": { "label": "Loyiha amalga oshirilmadi", "type": "not-implemented" },
          "description": "Kuch tuzilmasi uchun Vaziyat markazi infratuzilmasi va ish jarayonlarini to'liq loyihalashtirish: marketing tahlili, ish rejasi va xarid rejasi.",
          "outcome": "To'liq loyiha hujjatlari to'plami va $2,3 mln miqdorida asoslangan xarajat bahosi tayyorlandi.",
          "tags": ["Vaziyat markazi", "Loyihalashtirish", "Kuch tuzilmalari", "Xaridlar"],
          "role": "Texnik ekspert / Yechim loyihachisi",
          "detail": {
            "client": "O'zbekiston Respublikasi kuch tuzilmasi",
            "duration": "Bir necha oy, 2024",
            "team": "Texnik ekspert (men), bozor analitiklari, smeta mutaxassislari",
            "overview": "Loyiha kuch tuzilmasi uchun Vaziyat markazi infratuzilmasi va ish jarayonlarini — uskunalar arxitekturasidan tortib xarid rejasi va tender komissiyasi oldida to'liq asoslangan xarajat bahosigacha — to'liq loyihalashtirishni nazarda tutgan edi.",
            "problem": [
              "Mijozda zamonaviy monitoring va qaror qabul qilish talablariga javob beradigan Vaziyat markazi mavjud emas edi.",
              "Infratuzilmani noldan loyihalashtirish va har bir xarajatni to'liq asoslash kerak edi."
            ],
            "approach": [
              "Vaziyat markazlari uchun uskunalar va yechimlar bozori tahlili o'tkazildi.",
              "Markazni yaratish bo'yicha batafsil ish rejasi tuzildi.",
              "Har bir komponent xarajati asoslangan xarid rejasi tayyorlandi."
            ],
            "challenges": [
              "Tenderda shaffof bo'lmagan tanlov mezonlari bilan yuqori raqobat.",
              "To'liq va puxta tayyorlangan yechimga qaramay, tenderni oxir-oqibat boshqa kompaniya yutib oldi."
            ],
            "results": [
              { "metric": "$2,3 mln", "detail": "Bozor tahlili va xarid rejasi asosida tayyorlangan loyihaning to'liq xarajat bahosi" },
              { "metric": "To'liq loyiha hujjatlari to'plami", "detail": "Amalga oshirishga tayyor ish rejasi va xarid rejasi" }
            ],
            "lessons": "Har bir puxta tayyorlangan loyiha amalga oshirilishga yetib bormaydi — davlat sektoridagi tenderlar faqat texnik va moliyaviy puxtalikka bog'liq emas. Shunga qaramay, bu yerda ishlab chiqilgan vaziyat markazlarini loyihalashtirish metodologiyasi keyingi loyihalarda to'g'ridan-to'g'ri qo'l keldi."
          }
        },
        {
          "id": "smart-highway-huawei",
          "title": "Aqlli avtomagistral — Huawei bilan hamkorlikda AI asosidagi trafikni boshqarish tizimi",
          "domain": "Aqlli yo'llar / AI",
          "year": "2024",
          "status": { "label": "Loyiha muzlatilgan", "type": "frozen" },
          "description": "Huawei bilan hamkorlikdagi aqlli avtomagistral dasturining IT qismiga rahbarlik qildim: sun'iy intellekt asosidagi yo'l trafigini boshqarish tizimi uchun infratuzilma.",
          "outcome": "IT qismi uchun to'liq amalga oshirish rejasi va $50 mln xarajat bahosi tayyorlandi.",
          "tags": ["Aqlli yo'l", "AI", "Huawei", "Video analitika", "Yetkazib berish logistikasi"],
          "role": "Texnik ekspert / IT qismi rahbari",
          "detail": {
            "client": "Milliy aqlli avtomagistral dasturi · Huawei hamkorligida",
            "duration": "2024",
            "team": "Texnik ekspert (men), Huawei hamkorlari, vendor-menejerlar",
            "overview": "Huawei bilan birgalikda aqlli avtomagistral yaratish dasturida men IT qismiga — sun'iy intellekt asosidagi yo'l trafigini boshqarish tizimi uchun infratuzilmaga — javobgar edim.",
            "problem": [
              "Uzun avtomagistral yo'nalishi uchun aqlli trafikni boshqarish infratuzilmasini noldan loyihalashtirish kerak edi.",
              "Uskuna yetkazib berish logistikasi murakkab edi va Huawei bilan birgalikda to'g'ri vendorlarni tanlashni talab qilardi."
            ],
            "approach": [
              "AI asosidagi trafikni boshqarish tizimiga bo'lgan loyiha va talablar bilan batafsil tanishildi.",
              "IT qismini amalga oshirish rejasi tuzildi.",
              "Uskuna vendorlari tanlandi va yetkazib berish logistika zanjirlari qurildi.",
              "IT qismining yakuniy xarajat bahosi tayyorlandi."
            ],
            "challenges": [
              "Dasturning ko'lami (faqat IT qismi uchun $50 mln) ko'plab manfaatdor tomonlar bilan kelishishni talab qildi.",
              "Loyiha rejalashtirish bosqichidan so'ng, texnik ishlarga bog'liq bo'lmagan sabablarga ko'ra muzlatildi."
            ],
            "results": [
              { "metric": "$50 mln", "detail": "IT qismi — AI asosidagi trafikni boshqarish infratuzilmasi — uchun xarajat bahosi" },
              { "metric": "To'liq amalga oshirish rejasi", "detail": "Logistika zanjirlari, vendorlar va arxitektura Huawei bilan kelishilgan" }
            ],
            "lessons": "Huawei kabi yirik xalqaro hamkor bilan ishlash, hatto loyiha oxir-oqibat amalga oshirish bosqichiga yetmasa ham, AI infratuzilmasi sohasida haqiqiy ekspertiza shakllantiradi."
          }
        },
        {
          "id": "small-business-web-projects",
          "title": "Kichik biznes uchun veb-dasturlash",
          "domain": "Veb-dasturlash",
          "year": "2020 — 2024",
          "description": "Kichik biznes egalari uchun bir qator kichik veb-loyihalar — vizit-saytlar, lending-sahifalar va oddiy internet-do'konlar.",
          "outcome": "Bir nechta kichik kompaniyalar uchun birinchi raqamli mavjudlik va birinchi onlayn sotuvlar.",
          "tags": ["React", "Lending sahifa", "Kichik biznes", "Veb-dasturlash"],
          "role": "Full Stack dasturchi",
          "detail": {
            "client": "Bir nechta kichik korxonalar (xususiy mijozlar)",
            "duration": "Alohida loyihalar, har biri 2–4 hafta",
            "team": "Yakka dasturchi",
            "overview": "Yirik infratuzilma va konsalting dasturlari bilan bir qatorda men muntazam ravishda kichik biznes egalari uchun kichik veb-loyihalarni — vizit-saytlardan oddiy internet-do'konlargacha — olib boraman, ularga birinchi haqiqiy raqamli mavjudlikka erishishda yordam beraman.",
            "problem": [
              "Mijozlarning aksariyatida umuman sayt yo'q edi — faqat ijtimoiy tarmoqdagi sahifa bor edi.",
              "Byudjet va muddatlar doimo cheklangan edi."
            ],
            "approach": [
              "Tez ishlash uchun standart, ammo moslashuvchan stekdan (React, HTML/CSS, kerak bo'lganda yengil backend) foydalandim.",
              "Biznes egasi keyinchalik o'zi yangilay oladigan sodda va tushunarli saytlarga e'tibor qaratdim."
            ],
            "challenges": [
              "Kichik loyihalarni yirik dasturlar bilan bir vaqtda olib borish intizomli vaqt boshqaruvini talab qilardi."
            ],
            "results": [
              { "metric": "Bir nechta sayt ishga tushirildi", "detail": "Mahalliy kichik korxonalar uchun vizit-saytlar va lending-sahifalar" },
              { "metric": "Tez muddat", "detail": "Har bir loyiha uchun boshlanishidan ishga tushirilishigacha 2 dan 4 haftagacha" }
            ],
            "lessons": "Kichik loyihalar — asosiy rol boshqaruv va strategiyaga siljigan bo'lsa ham, amaliy dasturlash bilan aloqani saqlab qolishning ajoyib usuli."
          }
        }
      ]
    },

    "certificates": {
      "title": "Sertifikatlar",
      "subtitle": "Tasdiqlangan professional malakalar.",
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
      "title": "Blog",
      "subtitle": "Muhandislik, mahsulot va ular oralig'idagi bo'shliq haqida kuzatuvlar.",
      "items": [
        {
          "id": "why-platform-teams-fail",
          "title": "Nega platforma jamoalari muvaffaqiyatsizlikka uchraydi (va buni qanday tuzatish mumkin)",
          "date": "2024-11-12",
          "readTime": "7 daqiqalik o'qish",
          "category": "Muhandislik",
          "excerpt": "Vositalarga e'tibor qaratib, dasturchi tajribasiga e'tibor bermaydigan platforma jamoalari yomon vositalar tufayli muvaffaqiyatsizlikka uchramaydi. Ular kim uchun qurayotganini unutgani uchun muvaffaqiyatsizlikka uchraydi.",
          "content": [
            { "type": "p", "text": "So'nggi besh yilda uchta platforma jamoasining muvaffaqiyatsizligini kuzatdim va ularning barchasi bir xil sababdan — yomon vositalar emas, balki unutilgan auditoriya tufayli muvaffaqiyatsizlikka uchradi." },
            { "type": "h2", "text": "Naqsh" },
            { "type": "p", "text": "Platforma jamoasi tuziladi. Ular aqlli, motivatsiyalangan va haqiqiy avtonomiyaga ega. Ular chindan ham ta'sirli narsa quradi — o'z-o'ziga xizmat ko'rsatuvchi deploy tizimi, chiroyli ichki CLI, service mesh. Olti oydan keyin qabul qilish deyarli nolga tushadi va jamoadan o'z shtatini asoslashi so'raladi." },
            { "type": "p", "text": "Muammo muhandislikda emas edi. Muammo shundaki, platforma jamoasi olti oy davomida xayoliy ideal foydalanuvchi uchun emas, balki koridordagi haqiqiy, band, shubhali muhandis uchun mahsulot qurishi kerak edi." },
            { "type": "h2", "text": "Uchta erta ogohlantiruvchi belgi" },
            { "type": "list", "items": [
              "Platforma jamoasining roadmap'ida mahsulot muhandisining shikoyatidan to'g'ridan-to'g'ri kelib chiqqan bironta ham element yo'q.",
              "Platforma jamoasidagi hech kim o'z platformasidan foydalanib mijozga mo'ljallangan funksiyani chiqarmagan.",
              "Qabul qilish platforma muqobillardan aniq yaxshi bo'lgani uchun emas, balki buyruq bilan haydalmoqda."
            ]},
            { "type": "h2", "text": "Haqiqatan ham nima ishlaydi" },
            { "type": "p", "text": "Men muvaffaqiyatli ko'rgan barcha platforma jamoalari bir jozibasiz narsani qilishdi: ular platforma kodining bitta qatorini yozishdan oldin to'liq sprint davomida mahsulot jamoasiga qo'shilishdi. Workshop emas. Intervyu emas. Haqiqiy juftlikda ishlash, haqiqiy navbatchilik, deploy kunining haqiqiy stressi." },
            { "type": "quote", "text": "Agar platforma jamoangiz o'tgan hafta deploy nosozligi tufayli tunda soat ikkida chaqirilgan muhandisning ismini ayta olmasa, demak, ular muammoga yetarlicha yaqin emas." },
            { "type": "p", "text": "Platforma muhandisligi — infratuzilma kiyimidagi mahsulot intizomi. Unga shunday munosabatda bo'ling, vositalar esa o'zi izidan ergashadi." }
          ]
        },
        {
          "id": "technical-pm-dilemma",
          "title": "Texnik PM dilemmasi: kod yozishmi yoki koordinatsiya qilishmi?",
          "date": "2024-09-03",
          "readTime": "5 daqiqalik o'qish",
          "category": "Yetakchilik",
          "excerpt": "Men ishlagan eng yaxshi texnik loyiha menejerlari bitta odatni baham ko'rishadi: ular qo'llarini kod bazasida ushlab turishadi. Nimanidir isbotlash uchun emas — halol qolish uchun.",
          "content": [
            { "type": "p", "text": "Texnik PM sifatida uchinchi yilingiz atrofida kimdir katta lavozimdagi kishi sizga yumshoq tarzda kod yozishni to'xtatishingiz kerakligini aytadi. Vaqtingizni koordinatsiyaga sarflagan yaxshiroq, degan fikr bildiriladi. Muhandislar muhandislik qilsin." },
            { "type": "p", "text": "Menimcha, bu maslahat yarmi to'g'ri va xavfli darajada to'liq emas." },
            { "type": "h2", "text": "Chetga chiqish uchun dalillar" },
            { "type": "p", "text": "Kunning olti soatini IDE'da o'tkazadigan TPM jamoaga kerak bo'lgan koordinatsiya ishini bajarmayotgani rost. Sprint rejalashtirish o'z-o'zidan bajarilmaydi. Manfaatdor tomonlar uchun yangilanishlar o'z-o'zidan yozilmaydi. Kodga chuqur sho'ng'ib qolishning haqiqiy muqobil narxi bor." },
            { "type": "h2", "text": "Yaqin qolish uchun dalillar" },
            { "type": "p", "text": "Ammo koddan to'liq chetlashgan TPM'larda men kuzatgan aniq muvaffaqiyatsizlik ssenariysi bor: ular bahoning noto'g'ri ekanini 'hidlash' qobiliyatini yo'qotishadi. Hisoblash emas — hidlash. Mushak xotirasidan qurilgan sezgi, 'ikki kunlik' vazifa aslida niqoblangan besh kunlik vazifa ekanini." },
            { "type": "list", "items": [
              "Bu sezgisiz har bir baho e'tiqod asosida qabul qilinishi kerak.",
              "Bu sezgisiz texnik qarz haqidagi suhbatlar mavhum bo'lib qoladi, aniq emas.",
              "Bu sezgisiz muhandis biror narsa ko'rinishidan qiyinroq deganida ishonchli tarzda e'tiroz bildira olmaysiz — chunki chindan ham bilmaysiz."
            ]},
            { "type": "h2", "text": "Mening haqiqiy amaliyotim" },
            { "type": "p", "text": "Men boshidan oxirigacha o'zim egallik qiladigan kod bazasining bitta kichik, haqiqiy qismini saqlab qolaman — odatda ichki vosita yoki kichik servis kabi past xavfli narsa. Tashkilotga uni chiqarishim kerak bo'lgani uchun emas. O'zimni kalibrlangan holda saqlash uchun uni chiqarishim kerak bo'lgani uchun." },
            { "type": "quote", "text": "Texnik kalibrovkasiz koordinatsiya boshqaruv teatriga aylanadi. Siz tushunmaydigan yopishqoq qog'ozlarni siljitayapsiz." }
          ]
        },
        {
          "id": "strangler-fig-playbook",
          "title": "Strangler Fig migratsiyasi: amaliy qo'llanma",
          "date": "2024-06-20",
          "readTime": "12 daqiqalik o'qish",
          "category": "Arxitektura",
          "excerpt": "Katta portlash bilan qayta yozish deyarli har doim noto'g'ri qaror. Mana funksiyalarni muzlatmasdan uchta legacy monolitni ko'chirish uchun ishlatgan bosqichma-bosqich yondashuvim.",
          "content": [
            { "type": "p", "text": "Men endi uchta juda xilma-xil monolitda — Rails e-commerce platformasi, PHP fintech backend va 'Platformani qayta qurish' keysida tavsiflangan Node.js platformasida — uchta Strangler Fig migratsiyasini o'tkazdim. Har safar tafsilotlar farq qiladi. Qo'llanma esa yo'q." },
            { "type": "h2", "text": "1-qadam — avval chegaralangan kontekstlarni xaritalang" },
            { "type": "p", "text": "Migratsiya kodini yozishdan oldin monolitning qaysi qismlari haqiqatan ham alohida biznes domenlarini ifodalashini xaritalashga haqiqiy vaqt — bir hafta, ba'zan ikki hafta — sarflang. Bu eshitilganidan sekinroq, chunki monolitlar yillar davomida qulay biriktirish orqali o'z chegaralarini faol ravishda yashiradi." },
            { "type": "h2", "text": "2-qadam — avval eng past xavfli servisni tanlang" },
            { "type": "p", "text": "Tizimning eng og'riqli qismini birinchi bo'lib ko'chirish vasvasasiga qarshilik ko'rsating. Eng kam bog'liqliklarga va eng aniq chegaraga ega qismni ko'chiring. Birinchi migratsiyaning vazifasi — maksimal darhol qiymat berish emas, balki patternning aynan sizning muhitingizda ishlashini isbotlash." },
            { "type": "h2", "text": "3-qadam — hamma narsaning oldiga gateway qo'ying" },
            { "type": "p", "text": "Monolit va yangi servislar oldida turgan API gateway (yoki hatto marshrutlash qoidalari bilan oddiy reverse proxy) muhokama qilinmaydi. U yo'nalishlarni birma-bir, frontend uchun sezilmasdan ko'chirish imkonini beradi." },
            { "type": "h2", "text": "4-qadam — o'tishdan oldin ikki tomonlama yozing" },
            { "type": "p", "text": "Ham monolit, ham yangi servisga kerak bo'lgan har qanday ma'lumot uchun ikki tomonlama yozish davrini o'tkazing: ikkala tizim ham yozadi, lekin faqat bittasi haqiqat manbai hisoblanadi, farqlar esa solishtiriladi. Bu zerikarli. Ammo bu migratsiya paytida ma'lumot yo'qotilishining oldini olish uchun eng yuqori samarali qadam." },
            { "type": "list", "items": [
              "Kamida bitta to'liq biznes sikli davomida ikki tomonlama yozing (haftalik, oylik — nima mos kelsa)",
              "Har qanday farqlanish haqida ogohlantiradigan solishtirish job'ini qurng",
              "Haqiqat manbaini faqat butun sikl davomida farqlanish nolga teng bo'lgandan keyin almashtiring"
            ]},
            { "type": "h2", "text": "5-qadam — eski kodni o'chiring. Haqiqatan ham o'chiring." },
            { "type": "p", "text": "Hamma o'tkazib yuboradigan qadam. Servis ko'chirilgach, monolitdagi tegishli kod tuzoqqa aylanadi — yarim qo'llab-quvvatlanadigan, ba'zan tasodifan hali ham trafik oladigan, doimiy chalkashlik manbai. O'chirishni o'sha ko'chirish bilan bir sprintda, alohida egasi bo'lgan alohida ticket sifatida rejalashtiring." },
            { "type": "quote", "text": "Migratsiya yangi servis ishlaganda emas, balki eski kod yo'qolib, hech kim tasodifan trafikni unga qaytara olmaganda tugallangan hisoblanadi." }
          ]
        }
      ]
    },

    "contact": {
      "title": "Keling, gaplashamiz",
      "subtitle": "Senior darajadagi muhandislik va texnik rahbarlik lavozimlariga ochiqman. Har bir xabarni shaxsan o'qiyman.",
      "response_time": "Odatda 2 ish kuni ichida javob beraman.",
      "methods": [
        { "label": "LinkedIn", "href": "https://www.linkedin.com/in/valiakhmad-makhamatov-55b2aa203/", "icon": "linkedin" },
        { "label": "GitHub",   "href": "https://github.com/rinatovich",      "icon": "github" },
        { "label": "Email",    "href": "mailto:makhamatov.valiakhmad@gmail.com",        "icon": "email" },
        { "label": "Telegram",   "href": "https://t.me/rinatovic99",      "icon": "telegram" },
      ]
    },

    "nav": [
      { "label": "Bosh sahifa",  "href": "#/" },
      { "label": "Loyihalar",    "href": "#/projects" },
      { "label": "Sertifikatlar","href": "#/certificates" },
      { "label": "Aloqa",        "href": "#/contact" }
    ]
  }
};
