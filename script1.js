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
        filters: ['Case Studies', 'UX Tools', 'Design Projects'],
        projects: [
            {
                category: 'Case Studies',
                title: 'EuroVoyage — European Travel Buddy',
                desc: 'End-to-end UX design of a travel companion app helping expats and tourists navigate Europe — covering trip planning, local transport, and cultural tips.',
                thumb: 'Case Study',
                img: 'Images/EuroVoyage.png',
                badge: 'Travel · UX Research',
                methods: ['User Research', 'Journey Mapping', 'Wireframing', 'Prototyping', 'Figma'],
                link: 'eurovoyage-case-study (1).html'
            },
            {
                category: 'Case Studies',
                title: 'EPA Buddy — Electronic Patient Record',
                desc: 'Designed a companion app that demystifies Germany\'s ePA system, helping patients understand, manage, and share medical records with confidence.',
                thumb: 'Case Study',
                img: 'Images/EpaBuddy.png',
                badge: 'HealthTech · UX Research',
                methods: ['User Interviews', 'Affinity Mapping', 'Prototyping', 'Usability Testing', 'Figma'],
                link: 'epa-companion-case-study.html'
            },
            {
                category: 'Case Studies',
                title: 'EasyBürger — Bürgeramt Appointments',
                desc: 'Tackled Germany\'s notoriously painful Bürgeramt booking experience — designing a student-friendly solution that reduces appointment anxiety and wait-time confusion.',
                thumb: 'Case Study',
                img: 'Images/Easyburger.png',
                badge: 'GovTech · UX Research',
                methods: ['User Research', 'Service Design', 'Wireframing', 'Prototyping', 'Figma'],
                link: 'case-study.html'
            },
            {
                category: 'Case Studies',
                title: 'MietMate — Tenant Rights & Rental',
                desc: 'A legal-tech solution giving tenants in Germany clear, accessible tools to understand lease terms, track disputes, and assert their rights without needing a lawyer.',
                thumb: 'Case Study',
                img: 'Images/Mietmate.png',
                badge: 'LegalTech · UX Research',
                methods: ['UX Research', 'Information Architecture', 'Interaction Design', 'Figma'],
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
                link: 'https://medium.com/@samarthjoshi1608/ux-case-study-concert-booking-app-c4a6dbf09ace'
            },
            {
                category: 'Design Projects',
                title: 'Hotel X — Stay Booking Platform',
                desc: 'High-fidelity UI for a hotel booking platform — clean listing pages, a frictionless checkout flow, and an intuitive property management dashboard.',
                thumb: 'UI Design',
                img: 'Images/hotel-x.gif',
                badge: 'Booking · PMS',
                methods: ['UI Design', 'Interaction Design', 'Design Systems', 'Figma'],
                link: 'https://www.figma.com/proto/8xJ8wW83caqCKeoZTjOXZr/Hotel?type=design&node-id=33-191&t=L8AiPZRct03u7omN-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=72%3A335&mode=design'
            },
            {
                category: 'Design Projects',
                title: 'YogaX — Meditation App UI',
                desc: 'A calming, minimal UI for a wellness app covering guided meditation, yoga session booking, and mindfulness tracking — designed to reduce cognitive load.',
                thumb: 'UI Design',
                img: 'Images/yoga-1.webp',
                badge: 'Wellness · EdTech',
                methods: ['UI Design', 'Motion Design', 'Color Theory', 'Figma'],
                link: 'https://www.figma.com/proto/Tuli7DywD3AsdJmvYajWRR/Yoga-X?type=design&node-id=45-372&t=jBt9B0xJ7muewPkZ-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=45%3A372&mode=design'
            },
            {
                category: 'Design Projects',
                title: 'Travel X — Travel Website UI',
                desc: 'A visually immersive travel website UI with full-screen hero imagery, smooth scroll transitions, and a destination-first browsing experience.',
                thumb: 'UI Design',
                img: 'Images/travel-x.gif',
                badge: 'Travel · TravelTech',
                methods: ['UI Design', 'Visual Design', 'Responsive Layout', 'Figma'],
                link: 'https://www.figma.com/proto/XybJur8tO2D9V8ZmimpcKU/Travel-website?type=design&node-id=10-212&t=4AFD6om51mF8ikL7-1&scaling=min-zoom&page-id=10%3A211&mode=design'
            },
            {
                category: 'UX Tools',
                title: 'AskAnyone — UX Research Helper',
                desc: 'Built and designed an AI-powered UX research platform that conducts smart user interviews, synthesises responses, and surfaces actionable insights automatically.',
                thumb: 'UX Tool',
                img: 'Images/AskAnyone.png',
                badge: 'UX Research · SaaS',
                methods: ['Product Design', 'UX Research', 'AI Integration', 'Design Systems', 'Figma'],
                link: 'https://askanyone.netlify.app/',
                deployed: true
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
                title: 'Proconnect — AI Networking Platform',
                desc: 'A modern full-stack professional networking platform inspired by LinkedIn. Features AI-powered post and comment generation, user auth, real-time feed, and connection management.',
                thumb: 'Full Stack',
                img: 'Images/proconnect.webp',
                badge: 'Full Stack · AI',
                tech: ['Next.js', 'Node.js', 'MongoDB', 'OpenAI', 'Tailwind CSS', 'JWT'],
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

    const buildCard = (p, hidden) => {
        const thumbContent = p.img
            ? `<img src="${p.img}" alt="${p.title}" class="project-card-img" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
               <span class="thumb-placeholder" style="display:none;">${p.thumb}</span>`
            : `<span class="thumb-placeholder">${p.thumb}</span>`;
        const liveBadge = p.deployed ? '<span class="project-live-badge">⬤ Live Demo</span>' : '';

        if (role === 'developer') {
            const techTags = (p.tech || []).map(t => `<span class="dev-tech-tag">${t}</span>`).join('');
            return `
            <a href="${p.link || '#'}" target="_blank" class="project-card dev-project-card reveal-scale${hidden ? ' project-hidden' : ''}${p.deployed ? ' project-live' : ''}">
                <div class="project-card-thumb dev-card-thumb">
                    ${thumbContent}
                    <span class="dev-card-type-overlay">${p.category}</span>
                </div>
                <div class="dev-card-body">
                    <div class="dev-card-meta">
                        <span class="dev-card-badge">${p.badge}</span>
                        ${liveBadge}
                    </div>
                    <h3 class="dev-card-title">${p.title}</h3>
                    <p class="dev-card-desc">${p.desc}</p>
                    <div class="dev-tech-stack">
                        ${techTags}
                    </div>
                    <span class="dev-card-cta">View project →</span>
                </div>
            </a>
        `;
        }

        if (role === 'designer') {
            const methodTags = (p.methods || []).map(m => `<span class="des-method-tag">${m}</span>`).join('');
            return `
            <a href="${p.link || '#'}" target="_blank" class="project-card des-project-card reveal-scale${hidden ? ' project-hidden' : ''}${p.deployed ? ' project-live' : ''}">
                <div class="project-card-thumb des-card-thumb">
                    ${thumbContent}
                    <span class="des-card-type-overlay">${p.category}</span>
                </div>
                <div class="des-card-body">
                    <div class="des-card-meta">
                        <span class="project-card-badge">${p.badge}</span>
                        ${liveBadge}
                    </div>
                    <h3 class="des-card-title">${p.title}</h3>
                    <p class="des-card-desc">${p.desc}</p>
                    <div class="des-methods-stack">
                        ${methodTags}
                    </div>
                    <span class="des-card-cta">View project →</span>
                </div>
            </a>
        `;
        }

        return `
        <a href="${p.link || '#'}" target="_blank" class="project-card reveal-scale${hidden ? ' project-hidden' : ''}${p.deployed ? ' project-live' : ''}">
            <div class="project-card-thumb">
                ${thumbContent}
            </div>
            ${liveBadge}
            <span class="project-card-badge">${p.badge}</span>
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
        </a>
    `;
    };

    const visible = filtered.slice(0, VISIBLE_COUNT).map(p => buildCard(p, false)).join('');
    const hidden = hasMore ? filtered.slice(VISIBLE_COUNT).map(p => buildCard(p, true)).join('') : '';

    projectGridEl.innerHTML = visible + hidden;

    // Show/hide the button
    if (hasMore && showMoreWrap && showMoreBtn) {
        showMoreWrap.style.display = 'block';
        showMoreBtn.textContent = `Show more (${filtered.length - VISIBLE_COUNT})`;
    } else if (showMoreWrap) {
        showMoreWrap.style.display = 'none';
    }

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
