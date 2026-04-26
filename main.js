// ============================================
// MAIN.JS — GrowIt Website
// ============================================

if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

document.addEventListener('DOMContentLoaded', () => {
    // ═══ TRANSLATIONS ═══
    const translations = {
        es: {
            nav: { inicio: 'Inicio', nosotros: 'Nosotros', servicios: 'Servicios', proceso: 'Proceso', contacto: 'Contacto', hablemos: 'Hablemos →' },
            hero: { subtitle: 'Automatizamos procesos, modernizamos sistemas y construimos productos digitales inteligentes para empresas que quieren liderar su industria.', btn1: 'Ver servicios →', btn2: 'Conocer más', scroll: 'SCROLL' }
        },
        en: {
            nav: { inicio: 'Home', nosotros: 'About', servicios: 'Services', proceso: 'Process', contacto: 'Contact', hablemos: "Let's Talk →" },
            hero: { subtitle: 'We automate processes, modernize systems, and build intelligent digital products for companies that want to lead their industry.', btn1: 'View Services →', btn2: 'Learn More', scroll: 'SCROLL' }
        }
    };

    let currentLang = 'es';

    const toggleLanguage = () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        const btn = document.getElementById('langToggle');
        if (btn) btn.textContent = currentLang.toUpperCase();
        const t = translations[currentLang];
        
        const sub = document.querySelector('.hero-subtitle');
        if (sub) sub.textContent = t.hero.subtitle;
        
        const btns = document.querySelectorAll('.hero-buttons a');
        if (btns[0]) btns[0].textContent = t.hero.btn1;
        if (btns[1]) btns[1].textContent = t.hero.btn2;
        
        const scroll = document.querySelector('.hero-scroll span');
        if (scroll) scroll.textContent = t.hero.scroll;
    };

    // Make toggleLanguage global
    window.toggleLanguage = toggleLanguage;

    // ═══ MOBILE MENU ═══
    const closeMobileMenu = () => {
        document.getElementById('mobileOverlay')?.classList.remove('active');
        document.getElementById('hamburger')?.classList.remove('active');
        document.body.style.overflow = '';
    };
    window.closeMobileMenu = closeMobileMenu;

    // ═══ CTA BUTTONS ═══
    const ctaBtn = document.querySelector('.btn-cta');
    ctaBtn?.addEventListener('click', () => {
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    });

    const hamburger = document.getElementById('hamburger');
    const mobileOverlay = document.getElementById('mobileOverlay');

    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileOverlay?.classList.toggle('active');
        document.body.style.overflow = mobileOverlay?.classList.contains('active') ? 'hidden' : '';
    });

    mobileOverlay?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // ═══ SMOOTH SCROLL ═══
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // ═══ NAVBAR SCROLL ═══
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });

    // ═══ SCROLL PROGRESS BAR ═══
    window.addEventListener('scroll', () => {
        const bar = document.getElementById('scroll-progress');
        if (bar) {
            const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
            bar.style.width = pct + '%';
        }
    });

    // ═══ FORM SUBMISSION ═══
    const contactForm = document.getElementById('contactForm');
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('.form-submit');
        const success = document.getElementById('formSuccess');
        if (btn) {
            btn.classList.add('loading');
            setTimeout(() => {
                btn.style.display = 'none';
                if (success) {
                    success.classList.add('visible');
                    success.style.animation = 'successIn 0.6s cubic-bezier(0.16,1,0.3,1)';
                }
            }, 800);
        }
    });

    // ═══ GSAP ANIMATIONS ═══
    if (typeof gsap === 'undefined') {
        console.error('GSAP not loaded - showing content without animations');
        return;
    }
    
    // ── HERO INTRO ANIMATION ──
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroBtns = document.querySelectorAll('.hero-buttons a');
    const heroScroll = document.querySelector('.hero-scroll');
    const heroPortal = document.querySelector('.hero-portal');
    
    gsap.set([heroTitle, heroSubtitle, heroBtns, heroScroll], { opacity: 0, y: 40 });
    if (heroPortal) gsap.set(heroPortal, { opacity: 0, scale: 1.2 });
    
    const tl = gsap.timeline({ delay: 0.3 });
    
    tl.to(heroPortal, { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' })
      .to(heroTitle, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=1.5')
      .to(heroSubtitle, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')
      .to(heroBtns, { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'back.out(1.4)' }, '-=0.4')
      .to(heroScroll, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.3');
    
    // ── SECTION REVEALS ──
    document.querySelectorAll('section').forEach(section => {
        const reveals = section.querySelectorAll('.reveal, h2, p');
        if (reveals.length) {
            gsap.fromTo(reveals, 
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1,
                  scrollTrigger: { trigger: section, start: 'top 80%', once: true }
                }
            );
        }
    });
    
    // ── SERVICES CARDS ──
    const cards = document.querySelectorAll('.servicio-card');
    cards.forEach((card, i) => {
        gsap.fromTo(card, 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, delay: i * 0.15, ease: 'power3.out',
              scrollTrigger: { trigger: '#servicios', start: 'top 70%', once: true }
            }
        );
    });
    
    // ── STATS COUNTER ──
    document.querySelectorAll('.stat-number').forEach(stat => {
        const target = parseInt(stat.dataset.target) || 0;
        const suffix = stat.dataset.suffix || '';
        const obj = { val: 0 };
        
        gsap.to(obj, {
            val: target, duration: 2, ease: 'power2.out',
            scrollTrigger: { trigger: '#stats', start: 'top 80%', once: true },
            onUpdate: () => { stat.textContent = Math.floor(obj.val) + suffix; }
        });
    });
    
    // ── PARALLAX HERO ──
    if (heroTitle) {
        gsap.to(heroTitle, {
            y: 100, opacity: 0, ease: 'none',
            scrollTrigger: { trigger: '#inicio', start: 'top top', end: 'bottom top', scrub: true }
        });
    }
    
    if (heroPortal) {
        gsap.to(heroPortal, {
            scale: 3, opacity: 0, ease: 'none',
            scrollTrigger: { trigger: '#inicio', start: 'top top', end: 'bottom top', scrub: true }
        });
    }
    
    // ── NOSOTROS COUNTERS ──
    document.querySelectorAll('.stat-num[data-target]').forEach(el => {
        const target = parseInt(el.dataset.target) || 0;
        const suffix = el.dataset.suffix || '';
        const obj = { val: 0 };
        
        gsap.to(obj, {
            val: target, duration: 1.5, ease: 'power2.out',
            scrollTrigger: { trigger: '#nosotros', start: 'top 60%', once: true },
            onUpdate: () => { el.textContent = Math.floor(obj.val) + suffix; }
        });
    });
    
    // ── CONTACTO ANIMATION ──
    gsap.fromTo('.contacto-info-box, .contacto-form-box',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.2,
          scrollTrigger: { trigger: '#contacto', start: 'top 70%', once: true }
        }
    );
});