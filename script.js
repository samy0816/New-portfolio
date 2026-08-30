// ===== DATA =====

const data = {
    designer: {
        heroRole: 'UX Designer',
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
        filters: ['Case Studies', 'Design Projects'],
        projects: [
            {
                category: 'Case Studies',
                title: 'EuroVoyage — European Travel Buddy',
                desc: 'A companion app helping users navigate travel across Europe with confidence and ease.',
                thumb: 'Case Study',
                img: 'Images/EuroVoyage.png',
                badge: 'Travel · UX Research',
                link: 'eurovoyage-case-study (1).html'
            },
            {
                category: 'Case Studies',
                title: 'EPA Buddy — Electronic Patient Record',
                desc: 'A companion app helping users navigate Germany\'s electronic patient record (ePA) system with clarity.',
                thumb: 'Case Study',
                img: 'Images/EpaBuddy.png',
                badge: 'HealthTech · UX Research',
                link: 'epa-companion-case-study.html'
            },
            {
                category: 'Case Studies',
                title: 'EasyBürger — Bürgeramt Appointments',
                desc: 'Simplifying Bürgeramt appointments for newcomers to Germany with a student-friendly solution.',
                thumb: 'Case Study',
                img: 'Images/Easyburger.png',
                badge: 'GovTech · UX Research',
                link: 'case-study.html'
            },
            {
                category: 'Case Studies',
                title: 'MietMate — Tenant Rights & Rental',
                desc: 'A legal-tech solution empowering tenants with accessible tools to manage rights, contracts, and disputes.',
                thumb: 'Case Study',
                img: 'Images/Mietmate.png',
                badge: 'LegalTech · UX Research',
                link: 'https://www.behance.net/gallery/236267301/UX-Case-Study-Mietmate'
            },
            {
                category: 'Case Studies',
                title: 'PantryPal — Smart Recipe Assistant',
                desc: 'A food-tech app helping users cook smarter, stay on budget, and reduce waste through gamified learning.',
                thumb: 'Case Study',
                img: 'Images/PantryPal.png',
                badge: 'FoodTech · Product Design',
                link: 'https://medium.com/@samarthjoshi1608/ux-case-study-pantrypal-cooking-budgeting-smart-recipe-assistant-7d09d4a78a9b'
            },
            {
                category: 'Case Studies',
                title: 'Concert Booking App — Music Discovery',
                desc: 'An event-tech platform simplifying concert discovery, ticket booking, and travel planning for music lovers.',
                thumb: 'Case Study',
                img: 'Images/concert-booking.png',
                badge: 'Music · Ticketing',
                link: 'https://medium.com/@samarthjoshi1608/ux-case-study-concert-booking-app-c4a6dbf09ace'
            },
            {
                category: 'Design Projects',
                title: 'Hotel X — Stay Booking Platform',
                desc: 'A hotel booking platform UI designed to streamline reservations with straightforward navigation.',
                thumb: 'UI Design',
                img: 'Images/hotel-x.png',
                badge: 'Booking · PMS',
                link: 'https://www.figma.com/proto/8xJ8wW83caqCKeoZTjOXZr/Hotel?type=design&node-id=33-191&t=L8AiPZRct03u7omN-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=72%3A335&mode=design'
            },
            {
                category: 'Design Projects',
                title: 'YogaX — Meditation App UI',
                desc: 'A wellbeing booking platform focused on meditation and yoga with a calming user experience.',
                thumb: 'UI Design',
                img: 'Images/yogax.png',
                badge: 'Wellness · EdTech',
                link: 'https://www.figma.com/proto/Tuli7DywD3AsdJmvYajWRR/Yoga-X?type=design&node-id=45-372&t=jBt9B0xJ7muewPkZ-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=45%3A372&mode=design'
            },
            {
                category: 'Design Projects',
                title: 'Travel X — Travel Website UI',
                desc: 'A travel website UI design delivering a smooth and visually appealing user experience.',
                thumb: 'UI Design',
                img: 'Images/travel-x.png',
                badge: 'Travel · TravelTech',
                link: 'https://www.figma.com/proto/XybJur8tO2D9V8ZmimpcKU/Travel-website?type=design&node-id=10-212&t=4AFD6om51mF8ikL7-1&scaling=min-zoom&page-id=10%3A211&mode=design'
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
    desc: 'A full-stack GenAI platform built with Next.js, TypeScript, FastAPI, and Python, using LangChain and RAG for document processing, semantic retrieval, grounded answers, and contract comparison.',
    thumb: 'Full Stack',
    img: 'Images/Rentwise.png',
    badge: 'Next.js · TypeScript · FastAPI · RAG · LangChain · PostgreSQL ·',
    link: 'https://rentwise-peach.vercel.app/'
},
            {
                category: 'Full Stack',
                title: 'Proconnect — AI Networking Platform',
                desc: 'A modern full-stack professional networking platform inspired by LinkedIn with AI-powered post and comment generation.',
                thumb: 'Full Stack',
                img: 'Images/proconnect.png',
                badge: 'Next.js · Node · MongoDB · AI',
                link: 'https://proconnectdemo.netlify.app/'
            },
            {
                category: 'Full Stack',
                title: 'Trade X — AI Trading Platform',
                desc: 'A powerful full-stack trading platform with RAG AI for smart portfolio management and real-time insights.',
                thumb: 'Full Stack',
                img: 'Images/trade-x.png',
                badge: 'React · Node · MongoDB · AI',
                link: 'https://steady-genie-711707.netlify.app/'
            },
            {
                category: 'Full Stack',
                title: 'Video X — Remote Calling Platform',
                desc: 'Real-time video conferencing with screen sharing, chat, and smart AI meeting assistant.',
                thumb: 'Full Stack',
                img: 'Images/video-x.png',
                badge: 'React · WebRTC · AI',
                link: 'https://videoxplatform.netlify.app/'
            },
            {
                category: 'Full Stack',
                title: 'Nomad Nest — Hotel Booking',
                desc: 'Full-featured hotel booking platform with admin dashboard, auth, and responsive modern UI.',
                thumb: 'Full Stack',
                img: 'Images/nomad-nest.png',
                badge: 'Node.js · EJS · MongoDB',
                link: 'https://nomad-nest-dzm5.onrender.com/listings'
            },
            {
                category: 'Frontend',
                title: 'Climate Simulator',
                desc: 'Interactive climate simulator visualizing the impact of various factors on climate change.',
                thumb: 'Frontend',
                img: 'Images/climate-sim.png',
                badge: 'TypeScript · React',
                link: 'https://lambent-sunburst-0b9df2.netlify.app/'
            },
            {
                category: 'Frontend',
                title: 'Pantry Pal — AI Cooking Platform',
                desc: 'Recipe app helping users learn cooking, manage pantry budget, and get ingredient-based suggestions.',
                thumb: 'Frontend',
                img: 'Images/pantry-pal-dev.png',
                badge: 'React · Tailwind · AI',
                link: 'https://illustrious-churros-8b11d3.netlify.app/#'
            },
            {
                category: 'Data',
                title: 'Quantified Self: Fitbit Data',
                desc: 'Analyzing multi-dimension tracker logs (activity/sleep/heart) to surface patterns & lifestyle insights.',
                thumb: 'Data',
                img: 'Images/fitbit-data.png',
                badge: 'Python · EDA · Health',
                link: 'https://github.com/samy0816/PrepInsta_Winter_Internship/tree/main/Week%208%20(%20Capstone%20project-%20Fitbit%20tracker%20application)'
            },
            {
                category: 'Data',
                title: 'Hans Rosling — Data Storytelling',
                desc: 'Recreated animated bubble charts to communicate multi-variable development progress with impact.',
                thumb: 'Data',
                img: 'Images/hans-rosling.png',
                badge: 'DataViz · Animation · Python',
                link: 'https://github.com/samy0816/PrepInsta_Winter_Internship/tree/main/Week%204%20(%20Advance%20Data%20visualization%20with%20animation%20in%20python%20(%20Hans%20rossling%20Tedex%20data%20visualization%20case%20study)'
            },
            {
                category: 'Data',
                title: 'SQL Sleuth — Detective Queries',
                desc: 'Interactive detective-style querying uncovering anomalies, joins & relational patterns in datasets.',
                thumb: 'Data',
                img: 'Images/sql-sleuth.png',
                badge: 'SQL · Queries · Case Study',
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
        return `
        <a href="${p.link || '#'}" target="_blank" class="project-card reveal-scale${hidden ? ' project-hidden' : ''}">
            <div class="project-card-thumb">
                ${thumbContent}
            </div>
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
//  INIT
// =============================================
animateCursor();
switchRole('designer');

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
