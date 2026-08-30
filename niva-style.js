document.addEventListener('DOMContentLoaded', function () {
    // Lazy-load & async-decode all images (perf)
    document.querySelectorAll('img').forEach(img => {
        if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
        if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
    });

    // Scroll-reveal
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => revealObserver.observe(el));

    // Sidebar scrollspy
    const navLinks = Array.from(document.querySelectorAll('.side-nav a'));
    const sections = navLinks
        .map(link => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    function setActive(id) {
        navLinks.forEach(link => {
            link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
        });
    }

    const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) setActive(entry.target.id);
        });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
    sections.forEach(sec => spyObserver.observe(sec));

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Back to top
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.pageYOffset > 400);
        });
        backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
});
