// Per-project colors: set `color` (hex) and optionally `decor` on each project in the data below.
// bg, border, and chip tints are auto-derived from the single hex.
function themeFromColor(hex, decor) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const mix = (c) => Math.round(c * 0.13 + 255 * 0.87);
    const dark = (c) => Math.round(c * 0.72);
    return {
        bg:         `rgb(${mix(r)},${mix(g)},${mix(b)})`,
        border:     `rgba(${r},${g},${b},0.28)`,
        accent:     hex,
        chipBg:     `rgba(${r},${g},${b},0.09)`,
        chipBorder: `rgba(${r},${g},${b},0.22)`,
        chipColor:  `rgb(${dark(r)},${dark(g)},${dark(b)})`,
        decor:      decor || '◎',
    };
}

// ===== DATA =====

const data = {
    designer: {
        heroRole: 'Product Designer',
        roleDescriptor: 'research what users need & make technology feel effortless.',
        floatingElements: [
            { char: '✏️',  angle: 0,   radius: 130 },
            { char: '🎨',  angle: 45,  radius: 140 },
            { char: '◉',   angle: 90,  radius: 125 },
            { char: '◇',   angle: 135, radius: 135 },
            { char: '✦',   angle: 180, radius: 128 },
            { char: '📐',  angle: 225, radius: 138 },
            { char: '✂️',  angle: 270, radius: 132 },
            { char: '🖌️',  angle: 315, radius: 142 },
        ],
        techStack: [
            'Figma', 'Adobe XD', 'Sketch', 'Miro',
            'Wireframing', 'Prototyping', 'User Research', 'Usability Testing',
            'Interaction Design', 'Design Systems', 'Accessibility (a11y)'
        ],
        filters: ['Case Studies', 'UX Tools', 'UI Design'],
        projects: [
            {
                category: 'Case Studies',
                title: 'EuroVoyage — European Travel Buddy',
                desc: 'End-to-end UX design of a travel companion app helping expats and tourists navigate Europe — covering trip planning, local transport, and cultural tips.',
                thumb: 'Case Study',
                img: 'Images/EuroVoyage.gif',
                badge: 'Travel · UX Research',
                methods: ['User Research', 'Journey Mapping', 'Wireframing', 'Prototyping', 'Figma'],
                color: '#2563a8', decor: '◎',
                link: 'eurovoyage-niva-style-final-refined.html'
            },
            {
                category: 'Case Studies',
                title: 'EPA Buddy — Electronic Patient Record',
                desc: 'Designed a companion app that demystifies Germany\'s ePA system, helping patients understand, manage, and share medical records with confidence.',
                thumb: 'Case Study',
                img: 'Images/EpaBuddy.gif',
                badge: 'HealthTech · UX Research',
                methods: ['User Interviews', 'Affinity Mapping', 'Prototyping', 'Usability Testing', 'Figma'],
                color: '#1d7a54', decor: '✦',
                link: 'epa-companion-niva-style-final.html'
            },
            {
                category: 'Case Studies',
                title: 'EasyBürger — Bürgeramt Appointments',
                desc: 'Tackled Germany\'s notoriously painful Bürgeramt booking experience — designing a student-friendly solution that reduces appointment anxiety and wait-time confusion.',
                thumb: 'Case Study',
                img: 'Images/Easyburger.gif',
                badge: 'GovTech · UX Research',
                methods: ['User Research', 'Service Design', 'Wireframing', 'Prototyping', 'Figma'],
                color: '#b05c14', decor: '◈',
                link: 'easyburger-niva-style-final-refined.html'
            },
            {
                category: 'Case Studies',
                title: 'MietMate — Tenant Rights & Rental',
                desc: 'A legal-tech solution giving tenants in Germany clear, accessible tools to understand lease terms, track disputes, and assert their rights without needing a lawyer.',
                thumb: 'Case Study',
                img: 'Images/Mietmate.png',
                badge: 'LegalTech · UX Research',
                methods: ['UX Research', 'Information Architecture', 'Interaction Design', 'Figma'],
                color: '#7c2d8a', decor: '◉',
                link: 'https://www.behance.net/gallery/236267301/UX-Case-Study-Mietmate'
            },
            {
                category: 'Case Studies',
                title: 'PantryPal — Smart Recipe Assistant',
                desc: 'A gamified food-tech app designed to help users cook smarter with what they already have, manage grocery budgets, and reduce household food waste.',
                thumb: 'Case Study',
                img: 'Images/PantryPal.png',
                badge: 'FoodTech · Product Design',
                methods: ['Gamification Design', 'User Research', 'Wireframing', 'Prototyping', 'Figma'],
                color: '#c05218', decor: '✿',
                link: 'https://medium.com/@samarthjoshi1608/ux-case-study-pantrypal-cooking-budgeting-smart-recipe-assistant-7d09d4a78a9b'
            },
            {
                category: 'Case Studies',
                title: 'Concert Booking App — Music Discovery',
                desc: 'Simplified the end-to-end concert experience — from discovering live events and booking tickets to planning travel logistics, all in one music-first platform.',
                thumb: 'Case Study',
                img: 'Images/concert-booking.jfif',
                badge: 'Music · Ticketing',
                methods: ['User Research', 'Information Architecture', 'Prototyping', 'Usability Testing', 'Figma'],
                color: '#6b2d9a', decor: '⬡',
                link: 'https://medium.com/@samarthjoshi1608/ux-case-study-concert-booking-app-c4a6dbf09ace'
            },
            {
                    category: 'UI Design',
    title: 'MindFlow — AI Wellness App',
    desc: 'An AI-powered mindfulness app focused on emotional wellbeing, featuring mood tracking, guided breathing, journaling, and a calming design system crafted for a seamless wellness experience.',
    thumb: 'UI/UX Design',
    img: 'Images/Mindflow.png',
    badge: 'AI · Wellness',
    methods: [
        'UI/UX Design',
        'Visual Design',
        'Design System',
        'Figma'
    ],
    color: '#1D55D3',
    decor: '◎',
    link: 'https://www.behance.net/gallery/253857111/MindFlow-AI-Wellness-App-UIUX-Design'
            },
     
            {
                category: 'UI Design',
    title: 'FinCore — Finance Dashboard',
    desc: 'A modern fintech dashboard designed for financial management, analytics, budgeting, and transaction tracking with a scalable enterprise UI system.',
    thumb: 'UI/UX Design',
    img: 'Images/Fincore.png',
    badge: 'FinTech · SaaS',
    methods: [
        'UI/UX Design',
        'Dashboard Design',
        'Design System',
        'Figma'
    ],
    color: '#8934F6',
    decor: '◈',
    link: 'https://www.behance.net/gallery/253727867/FinCore-Modern-Finance-Dashboard-UIUX-Design'
            },
            {
                category: 'UX Tools',
                title: 'AskAnyone — UX Research Helper',
                desc: 'Built and designed an AI-powered UX research platform that conducts smart user interviews, synthesises responses, and surfaces actionable insights automatically.',
                thumb: 'UX Tool',
                img: 'Images/AskAnyone.png',
                badge: 'UX Research · SaaS',
                methods: ['Product Design', 'UX Research', 'AI Integration', 'Design Systems', 'Figma'],
                color: '#1e5fa8', decor: '◉',
                link: 'https://askanyone.netlify.app/',
                deployed: true
            },
                   {
                category: 'UI Design',
                title: 'YogaX — Meditation App UI',
                desc: 'A calming, minimal UI for a wellness app covering guided meditation, yoga session booking, and mindfulness tracking — designed to reduce cognitive load.',
                thumb: 'UI Design',
                img: 'Images/yoga-1.webp',
                badge: 'EdTech',
                methods: ['UI Design', 'Motion Design', 'Color Theory', 'Figma'],
                color: '#FEAF26', decor: '✦',
                link: 'https://www.figma.com/proto/Tuli7DywD3AsdJmvYajWRR/Yoga-X?type=design&node-id=45-372&t=jBt9B0xJ7muewPkZ-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=45%3A372&mode=design'
            }
        ]
    },
    developer: {
        heroRole: 'Full‑Stack Developer',
        roleDescriptor: 'code, build products & ship features.',
        floatingElements: [
            { char: '</>',  angle: 0,   radius: 130, isCode: true },
            { char: '{ }',  angle: 45,  radius: 140, isCode: true },
            { char: '< >',  angle: 90,  radius: 125, isCode: true },
            { char: '#',    angle: 135, radius: 135, isCode: true },
            { char: '[ ]',  angle: 180, radius: 128, isCode: true },
            { char: '_',    angle: 225, radius: 138, isCode: true },
            { char: ';',    angle: 270, radius: 132, isCode: true },
            { char: 'λ',    angle: 315, radius: 142, isCode: true },
        ],
        techStack: [
            'React', 'Next.js', 'TypeScript', 'Node.js', 'Express.js',
            'MongoDB', 'PostgreSQL', 'Python', 'Java', 'C/C++',
            'ASP.NET', 'Git', 'Docker', 'Agile'
        ],
        filters: ['Full Stack', 'Frontend', 'Data'],
        projects: [
  {
    category: 'Full Stack',
    title: 'RentWise — GenAI Rental Document Platform',
    desc: 'A full-stack GenAI platform that helps tenants understand complex German rental contracts, find important information, compare documents, and get grounded answers using Next.js, FastAPI, PostgreSQL, LangChain, and RAG.',
    thumb: 'Full Stack',
    img: 'Images/Rentwise.png',
    badge: 'Full Stack · GenAI',
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'LangChain', 'RAG', 'LLMs', 'PostgreSQL'],
    color: '#1fceb6', decor: '◎',
    link: 'https://rentwise-peach.vercel.app/',
    deployed: true
},
            {
                category: 'Full Stack',
                title: 'Proconnect — AI Networking Platform',
                desc: 'A modern full-stack professional networking platform inspired by LinkedIn. Features AI-powered post and comment generation, user auth, real-time feed, and connection management.',
                thumb: 'Full Stack',
                img: 'Images/proconnect.webp',
                badge: 'Full Stack · AI',
                tech: ['Next.js', 'Node.js', 'MongoDB', 'HuggingFace', 'Tailwind CSS', 'JWT'],
                color: '#1c50a0', decor: '◎',
                link: 'https://proconnectdemo.netlify.app/',
                deployed: true
            },
            {
                category: 'Full Stack',
                title: 'Trade X — AI Trading Platform',
                desc: 'A full-stack trading dashboard with RAG-based AI for portfolio Q&A, real-time market insights, watchlist management, and interactive charting.',
                thumb: 'Full Stack',
                img: 'Images/trade-x.webp',
                badge: 'Full Stack · AI',
                tech: ['React', 'Node.js', 'MongoDB', 'RAG / LLM', 'Chart.js', 'REST API'],
                color: '#167644', decor: '✦',
                link: 'https://steady-genie-711707.netlify.app/',
                deployed: true
            },
            {
                category: 'Full Stack',
                title: 'Video X — Remote Calling Platform',
                desc: 'Real-time video conferencing platform with screen sharing, in-call chat, room management, and an AI meeting assistant that summarises calls.',
                thumb: 'Full Stack',
                img: 'Images/video-x.avif',
                badge: 'Full Stack · WebRTC',
                tech: ['React', 'WebRTC', 'Socket.io', 'Node.js', 'OpenAI', 'Express'],
                color: '#7a1a6a', decor: '◈',
                link: 'https://videoxplatform.netlify.app/',
                deployed: true
            },
            {
                category: 'Full Stack',
                title: 'Nomad Nest — Hotel Booking',
                desc: 'Full-featured hotel booking platform with listing creation, image uploads, map integration, user auth, reviews, and a responsive admin dashboard.',
                thumb: 'Full Stack',
                img: 'Images/nomad-nest.jpg',
                badge: 'Full Stack · MVC',
                tech: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Passport.js', 'Cloudinary'],
                color: '#8a4a18', decor: '◉',
                link: 'https://nomad-nest-dzm5.onrender.com/listings'
            },
            {
                category: 'Frontend',
                title: 'Climate Simulator',
                desc: 'Interactive data-driven simulator that lets users adjust variables (emissions, deforestation, energy mix) and visualises their projected climate impact in real time.',
                thumb: 'Frontend',
                img: 'Images/Climate.png',
                badge: 'Frontend · DataViz',
                tech: ['TypeScript', 'React', 'D3.js', 'CSS Modules'],
                color: '#1a6a78', decor: '✿',
                link: 'https://lambent-sunburst-0b9df2.netlify.app/'
            },
            {
                category: 'Frontend',
                title: 'Pantry Pal — AI Cooking Platform',
                desc: 'Recipe discovery app where users input available ingredients and get AI-generated meal suggestions, nutritional info, and a grocery budget tracker.',
                thumb: 'Frontend',
                img: 'Images/PantryPal1.png',
                badge: 'Frontend · AI',
                tech: ['React', 'Tailwind CSS', 'OpenAI API', 'Vite', 'LocalStorage'],
                color: '#b05218', decor: '⬡',
                link: 'https://illustrious-churros-8b11d3.netlify.app/#'
            },
            {
                category: 'Data',
                title: 'Quantified Self: Fitbit Data',
                desc: 'End-to-end EDA on multi-dimensional Fitbit logs (activity, sleep, heart rate) to surface behavioural patterns, anomalies, and personalised lifestyle insights.',
                thumb: 'Data',
                img: 'Images/fitbit-data.jpg',
                badge: 'Data · EDA',
                tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
                color: '#8a1a2a', decor: '◎',
                link: 'https://github.com/samy0816/PrepInsta_Winter_Internship/tree/main/Week%208%20(%20Capstone%20project-%20Fitbit%20tracker%20application)'
            },
            {
                category: 'Data',
                title: 'Hans Rosling — Data Storytelling',
                desc: 'Recreated Rosling\'s famous animated bubble charts in Python to communicate multi-variable global development progress across decades with narrative impact.',
                thumb: 'Data',
                img: 'Images/hans-rosling.png',
                badge: 'Data · Animation',
                tech: ['Python', 'Matplotlib', 'NumPy', 'Pandas', 'FuncAnimation'],
                color: '#1a3878', decor: '✦',
                link: 'https://github.com/samy0816/PrepInsta_Winter_Internship/tree/main/Week%204%20(%20Advance%20Data%20visualization%20with%20animation%20in%20python%20(%20Hans%20rossling%20Tedex%20data%20visualization%20case%20study)'
            },
            {
                category: 'Data',
                title: 'SQL Sleuth — Detective Queries',
                desc: 'Interactive detective-themed SQL challenge uncovering anomalies, multi-table joins, and relational patterns across mystery datasets — documented as a case study.',
                thumb: 'Data',
                img: 'Images/174092-clue-illustration.png',
                badge: 'Data · SQL',
                tech: ['MySQL', 'SQL Joins', 'Subqueries', 'Aggregations', 'Web Scraping'],
                color: '#3c1a7a', decor: '◈',
                link: 'https://github.com/samy0816/PrepInsta_Winter_Internship/tree/main/Week%205(%20MySQL%20and%20Web%20Scraping)'
            }
        ]
    }
};

// ===== STATE =====
let currentRole = 'designer';
let activeFilter = 'Case Studies';

// ===== DOM REFS =====
const toggleBtn = document.getElementById('roleToggle');
const toggleLabels = document.querySelectorAll('.toggle-label');
const heroRoleEl = document.getElementById('heroRole');
const roleDescriptorEl = document.getElementById('roleDescriptor');
const techStackEl = document.getElementById('techStack');
const filterTabsEl = document.getElementById('filterTabs');
const projectGridEl = document.getElementById('projectGrid');
const showMoreWrap = document.getElementById('showMoreWrap');
const showMoreBtn = document.getElementById('showMoreBtn');

let projectsExpanded = false;
const VISIBLE_COUNT = 3;

// =============================================
//  CURSOR TRAIL
// =============================================
const cursorTrail = document.getElementById('cursorTrail');
let cursorX = -100, cursorY = -100;
let ringX = -100, ringY = -100;

const cursorDot = document.createElement('div');
cursorDot.className = 'cursor-dot';
cursorTrail.appendChild(cursorDot);

const cursorRing = document.createElement('div');
cursorRing.className = 'cursor-ring';
cursorTrail.appendChild(cursorRing);

const dots = [];
const MAX_DOTS = 18;
for (let i = 0; i < MAX_DOTS; i++) {
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    dot.style.width = `${6 - i * 0.25}px`;
    dot.style.height = `${6 - i * 0.25}px`;
    dot.style.opacity = `${0.5 - i * 0.025}`;
    cursorTrail.appendChild(dot);
    dots.push({ el: dot, x: -100, y: -100 });
}

document.addEventListener('mousemove', (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
});

function animateCursor() {
    ringX += (cursorX - ringX) * 0.12;
    ringY += (cursorY - ringY) * 0.12;

    cursorDot.style.left = cursorX + 'px';
    cursorDot.style.top = cursorY + 'px';
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';

    let prevX = cursorX, prevY = cursorY;
    dots.forEach((dot, i) => {
        dot.x += (prevX - dot.x) * (0.35 - i * 0.015);
        dot.y += (prevY - dot.y) * (0.35 - i * 0.015);
        dot.el.style.left = dot.x + 'px';
        dot.el.style.top = dot.y + 'px';
        prevX = dot.x;
        prevY = dot.y;
    });

    requestAnimationFrame(animateCursor);
}

document.addEventListener('mouseover', (e) => {
    if (e.target.matches('a, button, .project-card, .filter-tab, .toggle-switch, .toggle-label, .blog-card, .tech-tag, input, textarea')) {
        cursorDot.classList.add('hovering');
        cursorRing.classList.add('hovering');
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.matches('a, button, .project-card, .filter-tab, .toggle-switch, .toggle-label, .blog-card, .tech-tag, input, textarea')) {
        cursorDot.classList.remove('hovering');
        cursorRing.classList.remove('hovering');
    }
});

// Project card gradient tracking
document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.project-card');
    if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width) * 100 + '%');
        card.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height) * 100 + '%');
    }
});

// =============================================
//  AVATAR EYE TRACKING
// =============================================
document.addEventListener('mousemove', (e) => {
    const avatar = document.getElementById('heroAvatar');
    if (!avatar) return;
    const pupils = avatar.querySelectorAll('.eye-pupil');
    const rect = avatar.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (window.innerWidth / 2);
    const dy = (e.clientY - cy) / (window.innerHeight / 2);
    const max = 3;
    const mx = Math.max(-max, Math.min(max, dx * max));
    const my = Math.max(-max, Math.min(max, dy * max));
    pupils.forEach(p => p.style.transform = `translate(${mx}px, ${my}px)`);
});

// =============================================
//  SCROLL REVEAL (Intersection Observer)
// =============================================
let revealObserver;

function setupScrollReveal() {
    revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children')
        .forEach(el => revealObserver.observe(el));
}

function reObserveProjects() {
    document.querySelectorAll('.project-card').forEach(el => {
        if (revealObserver) revealObserver.observe(el);
    });
}

// =============================================
//  FLOATING ORBIT ELEMENTS
// =============================================
const floatingOrbit = document.getElementById('floatingOrbit');

function renderFloatingElements(role) {
    const elements = data[role].floatingElements;
    const avatar = document.getElementById('heroAvatar');
    const hero = document.querySelector('.hero');
    if (!hero || !floatingOrbit) return;

    const isMobile = window.innerWidth <= 768;
    const heroRect = hero.getBoundingClientRect();

    if (isMobile) {
        // Position orbit top-right on mobile
        const cx = heroRect.width * 0.72;
        const cy = heroRect.height * 0.25;
        floatingOrbit.style.left = cx + 'px';
        floatingOrbit.style.top = cy + 'px';
    } else if (avatar) {
        const avatarRect = avatar.getBoundingClientRect();
        const cx = avatarRect.left - heroRect.left + avatarRect.width / 2;
        const cy = avatarRect.top - heroRect.top + avatarRect.height / 2;
        floatingOrbit.style.left = cx + 'px';
        floatingOrbit.style.top = cy + 'px';
    } else {
        // Fallback: center in hero
        floatingOrbit.style.left = (heroRect.width / 2) + 'px';
        floatingOrbit.style.top = (heroRect.height / 2) + 'px';
    }

    const scale = isMobile ? 0.55 : 1;

    floatingOrbit.innerHTML = '<div class="orbit-ring">' + elements.map((el, i) => {
        const rad = (el.angle * Math.PI) / 180;
        const x = Math.cos(rad) * el.radius * scale;
        const y = Math.sin(rad) * el.radius * scale;
        const cls = el.isCode ? 'float-item code' : 'float-item';
        const pulseDelay = (i * 0.3) + 's';
        const fadeDelay = (i * 0.07) + 's';
        return `<span class="${cls}" style="left:${x}px;top:${y}px;--pulse-delay:${pulseDelay};--fade-delay:${fadeDelay}">${el.char}</span>`;
    }).join('') + '</div>';
}
function renderTechStack(role) {
    const stack = data[role].techStack;
    techStackEl.innerHTML = stack
        .map(tag => `<span class="tech-tag">${tag}</span>`)
        .join('');
}

function renderFilters(role) {
    const filters = data[role].filters;
    activeFilter = filters[0];
    filterTabsEl.innerHTML = filters
        .map((f, i) =>
            `<button class="filter-tab ${i === 0 ? 'active' : ''}" data-filter="${f}">${f}</button>`
        )
        .join('');

    filterTabsEl.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabsEl.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeFilter = tab.dataset.filter;
            renderProjects(currentRole, activeFilter);
        });
    });
}

function renderProjects(role, filter) {
    const projects = data[role].projects;
    const filtered = projects.filter(p => p.category === filter);
    const hasMore = filtered.length > VISIBLE_COUNT;

    projectsExpanded = false;

    const buildSlide = (p, idx) => {
        const [mainTitle, subTitle] = p.title.includes(' — ') ? p.title.split(' — ') : [p.title, ''];
        const chips = (role === 'developer' ? (p.tech || []) : (p.methods || []));
        const ctaLabel = role === 'developer' ? 'View project' : 'View case study';
        const imgContent = p.img
            ? `<img src="${p.img}" alt="${p.title}" class="fc-img" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">`
            : `<div class="fc-img-placeholder">${p.thumb}</div>`;
        const liveBadge = p.deployed ? `<span class="fc-live">⬤ Live</span>` : '';
        const chipsHtml = chips.length
            ? `<div class="fc-chips">${chips.map(c => `<span class="fc-chip">${c}</span>`).join('')}</div>`
            : '';

        return `
        <a href="${p.link || '#'}" target="_blank"
           class="project-card fc-card fc-slide"
           data-logical="${idx}">
            <div class="fc-media">
                ${imgContent}
                <div class="fc-media-overlay">
                    <span class="fc-cat">${p.thumb}</span>
                    ${liveBadge}
                </div>
            </div>
            <div class="fc-body">
                <div class="fc-meta"><span class="fc-badge">${p.badge}</span></div>
                <div class="fc-heading">
                    <h3 class="fc-title">${mainTitle}</h3>
                    ${subTitle ? `<p class="fc-subtitle">${subTitle}</p>` : ''}
                </div>
                <p class="fc-desc">${p.desc}</p>
                ${chipsHtml}
                <div class="fc-footer">
                    <span class="fc-cta">${ctaLabel}</span>
                    <span class="fc-arrow">→</span>
                </div>
            </div>
        </a>`;
    };

    const N = filtered.length;
    const slidesHtml = (() => {
        if (N <= 1) return buildSlide(filtered[0], 0);
        // Infinite loop: [clone of last] [real cards] [clone of first]
        const slots = [];
        slots.push(buildSlide(filtered[N - 1], N - 1));
        filtered.forEach((p, i) => slots.push(buildSlide(p, i)));
        slots.push(buildSlide(filtered[0], 0));
        return slots.join('');
    })();
    const dotsHtml = filtered.map((_, i) => `<button class="fc-dot" data-index="${i}" aria-label="Go to project ${i + 1}"></button>`).join('');

    projectGridEl.innerHTML = `
        <div class="fc-viewport" id="fcViewport">
            ${N > 1 ? '<button class="fc-nav fc-prev" aria-label="Previous project">‹</button>' : ''}
            <div class="fc-track">${slidesHtml}</div>
            ${N > 1 ? '<button class="fc-nav fc-next" aria-label="Next project">›</button>' : ''}
        </div>
        ${N > 1 ? `<div class="fc-dots">${dotsHtml}</div>` : ''}
    `;

    const viewport = projectGridEl.querySelector('#fcViewport');
    const track = projectGridEl.querySelector('.fc-track');
    const slides = Array.from(track.querySelectorAll('.fc-slide'));
    const dots = projectGridEl.querySelectorAll('.fc-dot');
    const prevBtn = projectGridEl.querySelector('.fc-prev');
    const nextBtn = projectGridEl.querySelector('.fc-next');
    const logicalOf = (slot) => ((slot - 1) % N + N) % N;
    const slideW = () => (slides[0] ? slides[0].offsetWidth : 1);
    const gap = 24;
    let carouselSlot = N > 1 ? 1 : 0;

    function positionTrack(slot, animate = true) {
        if (N <= 1) {
            // Single card: just center it in the track
            if (!animate) track.style.transition = 'none';
            track.style.justifyContent = 'center';
            track.style.transform = 'translateX(0)';
            if (!animate) { void track.offsetWidth; track.style.transition = ''; }
            return;
        }
        track.style.justifyContent = '';
        if (!animate) track.style.transition = 'none';
        const offset = viewport.clientWidth / 2 - slideW() / 2 - slot * (slideW() + gap);
        track.style.transform = `translateX(${offset}px)`;
        if (!animate) { void track.offsetWidth; track.style.transition = ''; }
    }

    function applyStates(logical) {
        slides.forEach(el => {
            const li = parseInt(el.dataset.logical, 10);
            el.classList.toggle('is-active', li === logical);
            if (N > 1) {
                el.classList.toggle('is-prev', li === ((logical - 1 + N) % N));
                el.classList.toggle('is-next', li === ((logical + 1) % N));
            } else {
                el.classList.remove('is-prev', 'is-next');
            }
        });
        dots.forEach((d, di) => d.classList.toggle('is-active', di === logical));
    }

    function goTo(slot) {
        carouselSlot = Math.max(0, Math.min(N + 1, slot));
        positionTrack(carouselSlot, true);
        applyStates(logicalOf(carouselSlot));
    }

    // Snap back to the real card after reaching a clone (seamless infinite)
    track.addEventListener('transitionend', () => {
        if (carouselSlot === N + 1) {
            carouselSlot = 1;
            positionTrack(1, false);
        } else if (carouselSlot === 0) {
            carouselSlot = N;
            positionTrack(N, false);
        }
    });

    if (prevBtn) prevBtn.addEventListener('click', () => goTo(carouselSlot - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(carouselSlot + 1));
    dots.forEach(d => d.addEventListener('click', () => goTo(parseInt(d.dataset.index, 10) + 1)));

    // Swipe / drag to navigate
    let startX = 0, dragging = false;
    track.addEventListener('pointerdown', (e) => { startX = e.clientX; dragging = true; });
    window.addEventListener('pointerup', () => { dragging = false; });
    track.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 40) {
            goTo(carouselSlot + (dx < 0 ? 1 : -1));
            dragging = false;
        }
    });

    goTo(N > 1 ? 1 : 0);
    window.addEventListener('resize', () => goTo(carouselSlot));

    // Hide show-more (carousel navigates all cards)
    if (showMoreWrap) showMoreWrap.style.display = 'none';

    setTimeout(reObserveProjects, 50);
}

function switchRole(role) {
    currentRole = role;

    heroRoleEl.textContent = data[role].heroRole;
    roleDescriptorEl.style.opacity = '0';
    setTimeout(() => {
        roleDescriptorEl.textContent = data[role].roleDescriptor;
        roleDescriptorEl.style.opacity = '1';
    }, 200);

    toggleLabels.forEach(label => {
        label.classList.toggle('active', label.dataset.role === role);
    });

    if (role === 'developer') {
        toggleBtn.classList.add('dev');
    } else {
        toggleBtn.classList.remove('dev');
    }

    renderTechStack(role);
    renderFilters(role);
    renderProjects(role, activeFilter);
    renderFloatingElements(role);
}

// =============================================
//  SHOW MORE / SHOW LESS
// =============================================
if (showMoreBtn) {
    showMoreBtn.addEventListener('click', () => {
        projectsExpanded = !projectsExpanded;
        const allCards = projectGridEl.querySelectorAll('.project-card');

        if (projectsExpanded) {
            // Show all hidden cards
            allCards.forEach(c => c.classList.remove('project-hidden'));
            showMoreBtn.textContent = 'Show less';
            // Re-trigger reveal animation on newly shown cards
            setTimeout(() => {
                allCards.forEach(c => {
                    if (!c.classList.contains('visible')) {
                        c.classList.add('reveal-scale', 'visible');
                    }
                    if (revealObserver) revealObserver.observe(c);
                });
            }, 50);
        } else {
            // Hide cards beyond first VISIBLE_COUNT
            allCards.forEach((c, i) => {
                if (i >= VISIBLE_COUNT) {
                    c.classList.add('project-hidden');
                    c.classList.remove('visible');
                }
            });
            showMoreBtn.textContent = `Show more (${allCards.length - VISIBLE_COUNT})`;
            showMoreBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
}

// =============================================
//  HAMBURGER MENU
// =============================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

function closeMobileMenu() {
    if (hamburger) hamburger.classList.remove('active');
    if (navLinks) navLinks.classList.remove('open');
    if (navOverlay) navOverlay.classList.remove('active');
}

function openMobileMenu() {
    if (hamburger) hamburger.classList.add('active');
    if (navLinks) navLinks.classList.add('open');
    if (navOverlay) navOverlay.classList.add('active');
}

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

if (navOverlay) {
    navOverlay.addEventListener('click', closeMobileMenu);
}

// Close menu on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks && navLinks.classList.contains('open')) {
        closeMobileMenu();
    }
});

// =============================================
//  EVENT LISTENERS
// =============================================
toggleBtn.addEventListener('click', () => {
    switchRole(currentRole === 'designer' ? 'developer' : 'designer');
});

toggleLabels.forEach(label => {
    label.addEventListener('click', () => {
        const role = label.dataset.role;
        if (role !== currentRole) switchRole(role);
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Reposition floating elements on resize
window.addEventListener('resize', () => renderFloatingElements(currentRole));

window.addEventListener('keydown', (e) => {
    if ((e.key === 't' || e.key === 'T') &&
        document.activeElement.tagName !== 'INPUT' &&
        document.activeElement.tagName !== 'TEXTAREA') {
        switchRole(currentRole === 'designer' ? 'developer' : 'designer');
    }
});

// =============================================
//  PORTFOLIO CHOOSER — first visit overlay
// =============================================
(function() {
    const chooser = document.getElementById('portfolioChooser');
    if (!chooser) return;

    const saved = localStorage.getItem('portfolioPreference');

    if (saved) {
        // Returning visitor — skip overlay, go straight to preference
        chooser.remove();
        switchRole(saved);
        return;
    }

    // First visit — show chooser after tiny delay for smooth render
    setTimeout(() => chooser.classList.add('visible'), 100);

    const options = chooser.querySelectorAll('.chooser-option');
    options.forEach(btn => {
        btn.addEventListener('click', () => {
            const choice = btn.dataset.choice;
            localStorage.setItem('portfolioPreference', choice);
            chooser.classList.add('fade-out');
            switchRole(choice);
            setTimeout(() => chooser.remove(), 800);
        });
    });
})();

// =============================================
//  INIT
// =============================================
animateCursor();
// Default role only set if no chooser preference; chooser handles its own init
if (!localStorage.getItem('portfolioPreference')) {
    switchRole('designer');
}

// Add reveal classes on DOM ready
function initRevealClasses() {
    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
        const aboutText = aboutContent.querySelector('.about-text');
        const techStack = aboutContent.querySelector('.tech-stack');
        if (aboutText) aboutText.classList.add('reveal-left');
        if (techStack) techStack.classList.add('reveal-right');
    }

    const blogList = document.querySelector('.blog-list');
    if (blogList) blogList.classList.add('stagger-children');

    const contactContent = document.querySelector('.contact-content');
    if (contactContent) contactContent.classList.add('reveal');

    setupScrollReveal();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRevealClasses);
} else {
    initRevealClasses();
}
