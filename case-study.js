// Smooth scroll animation on load and scroll
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all fade-in-up elements
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = 1 - scrolled / 800;
        }
    });

    // Add hover effect to cards
    const cards = document.querySelectorAll('.overview-card, .feature-card, .persona-card, .finding-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });

    // Animate numbers on scroll
    const animateNumber = (element, target) => {
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    };

    // Observe impact numbers
    const impactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const numberElement = entry.target.querySelector('.impact-number');
                if (numberElement) {
                    const text = numberElement.textContent.trim();
                    // Skip animation for special formats like "10/10", "4:10", "4.8/5", percentages, etc.
                    if (text.includes('/') || text.includes(':') || text.includes('%') || text.includes('.')) {
                        // Keep original text, no animation
                        return;
                    }
                    const number = parseInt(text.replace(/[^0-9]/g, ''));
                    if (!isNaN(number)) {
                        numberElement.textContent = '0';
                        setTimeout(() => animateNumber(numberElement, number), 200);
                    }
                }
            }
        });
    }, { threshold: 0.5 });

    const impactCards = document.querySelectorAll('.impact-card');
    impactCards.forEach(card => impactObserver.observe(card));

    // Add dynamic cursor effect on phone mockups
    const phoneMockups = document.querySelectorAll('.phone-mockup');
    phoneMockups.forEach(mockup => {
        mockup.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            const phoneScreen = this.querySelector('.phone-screen');
            if (phoneScreen) {
                phoneScreen.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        });

        mockup.addEventListener('mouseleave', function() {
            const phoneScreen = this.querySelector('.phone-screen');
            if (phoneScreen) {
                phoneScreen.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            }
        });
    });

    // Add stagger animation to journey steps
    const journeySteps = document.querySelectorAll('.journey-step');
    const journeyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.2 });

    journeySteps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';
        step.style.transition = `all 0.6s ease ${index * 0.1}s`;
        journeyObserver.observe(step);
    });

    // Add progressive reveal for learning items
    const learningItems = document.querySelectorAll('.learning-item');
    const learningObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 150);
            }
        });
    }, { threshold: 0.3 });

    learningItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = `all 0.6s ease ${index * 0.15}s`;
        learningObserver.observe(item);
    });

    // Add scroll progress indicator
    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress-bar';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 4px;
            background: linear-gradient(90deg, #2E7D32, #FFA000);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.pageYOffset / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    };

    createScrollProgress();

    // Add entrance animation for hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }

    // Add pulse animation to action buttons
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 1s infinite';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
        });
    });

    // Back to Top Button Logic
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Original pulse animation logic
    actionButtons.forEach((btn, index) => {
        btn.style.animation = `pulse 2s ease-in-out ${index * 0.2}s infinite`;
    });

    // Create pulse animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.02);
            }
        }
        
        @keyframes float {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }
        
        .scroll-progress-bar {
            box-shadow: 0 2px 10px rgba(46, 125, 50, 0.3);
        }
    `;
    document.head.appendChild(style);

    // Add floating animation to phone mockups
    phoneMockups.forEach((mockup, index) => {
        mockup.style.animation = `float 3s ease-in-out ${index * 0.5}s infinite`;
    });

    // Console message
    console.log('%c EasyBürger Case Study ', 'background: #2563EB; color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
    console.log('%c Designed for international students in Germany ', 'color: #2563EB; font-size: 12px;');
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
