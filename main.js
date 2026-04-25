// ============================================
// MAIN.JS — GrowIt Website
// ============================================

function closeMobileMenu() {
    document.getElementById('mobileOverlay').classList.remove('active');
    document.getElementById('hamburger').classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
const translations = {
    es: {
        nav: { inicio: 'Inicio', nosotros: 'Nosotros', servicios: 'Servicios', proceso: 'Proceso', beneficios: 'Por qué Nosotros', tecnologias: 'Tecnologías', contacto: 'Contacto', hablemos: 'Hablemos →' },
        hero: { chip: 'INTELIGENCIA ARTIFICIAL · CENTROAMÉRICA', title1: 'Hacemos crecer', title2: 'tu negocio', title3: 'con IA.', subtitle: 'Automatizamos procesos, modernizamos sistemas y construimos productos digitales inteligentes para empresas que quieren liderar su industria.', btn1: 'Ver servicios →', btn2: 'Conocer más', scroll: 'SCROLL' },
        stats: { proyectos: 'Proyectos entregados', satisfaction: 'Satisfacción del cliente', tecnologias: 'Tecnologías de IA', roi: 'ROI promedio' },
        nosotros: { title: 'Nosotros', subtitle: 'La IA al servicio de tu crecimiento', heroTitle: 'Somos <span class="gradient">Grow IT</span>, pioneros en IA para empresas centroamericanas.', chip: 'Quiénes somos', desc: 'Somos una empresa fundada con el propósito de acercar la inteligencia artificial a las empresas de la región. No vendemos tecnología genérica — entendemos el contexto local, los desafíos reales y construimos soluciones que funcionan.', desc2: 'Creemos que la IA no es el futuro, es el presente. Y ese presente comienza aquí, en Centroamérica, con un equipo que entiende tu idioma, tu mercado y tus objetivos.', value1: 'Enfoque en resultados reales', value2: 'Tecnología de punta adaptada', value3: 'Equipo senior dedicado', value4: 'Soporte continuo post-lanzamiento', terminal1: '> Analizando sistema actual...', terminal2: '✓ Oportunidades de IA encontradas: 7', terminal3: '> Entrenando modelo personalizado...', terminal4: '✓ Precisión del modelo: 97.3%', terminal5: '> Desplegando en producción...', terminal6: '✓ Sistema operativo. ROI proyectado: 3.2×', metric1: 'Base', metric2: 'Presencia', metric3: 'Modalidad' },
        servicios: { title: 'Servicios', subtitle: 'Todo lo que necesitas para transformar tu empresa con IA', card1: 'Páginas Web Inteligentes', card1d: 'Diseños inmersivos con IA integrada que se adaptan al comportamiento del usuario y maximizan conversiones.', card2: 'Software a la Medida', card2d: 'Aplicaciones empresariales potenciadas con IA que automatizan decisiones y optimizan operaciones críticas.', card3: 'Migración de Sistemas Legacy', card3d: 'Modernizamos tu infraestructura con IA integrada, reduciendo costos hasta 40% y mejorando rendimiento.', card4: 'Automatización con Agentes IA', card4d: 'Agentes inteligentes que operan 24/7, manejan consultas, procesan datos y toman decisiones autónomas.', card5: 'Modernización de Empresas', card5d: 'Transformación digital completa con IA que posiciona tu empresa por delante de la competencia.', card6: 'Aplicaciones Móviles', card6d: 'Apps nativas e híbridas con funcionalidades de IA como reconocimiento, procesamiento de lenguaje y análisis predictivo.', card7: 'Análisis de Datos con IA', card7d: 'Extraemos insights actionables de tus datos con machine learning, prediciendo tendencias y oportunidades.' },
        proceso: { title: 'Proceso', subtitle: 'Cómo trabajamos', headerTitle: 'Del problema a la solución en 4 pasos', step1: 'Diagnóstico', step1d: 'Analizamos tu empresa, procesos actuales y encontramos dónde la IA genera más valor. Identificamos oportunidades de automatización y optimización.', step2: 'Estrategia IA', step2d: 'Diseñamos la solución técnica a medida, el plan de implementación y definimos los KPIs de éxito. Presentamos el roadmap completo.', step3: 'Desarrollo', step3d: 'Construimos e integramos la solución con metodología ágil. Entregamos resultados funcionales cada semana para tu validación.', step4: 'Lanzamiento', step4d: 'Desplegamos en producción, capacitamos a tu equipo y brindamos soporte continuo 24/7. Monitoreamos el rendimiento y optimizamos.' },
        beneficios: { title: 'Por qué Nosotros', subtitle: 'IA que realmente funciona', headerTitle: 'No implementamos tecnología por tecnología. Construimos soluciones que generan resultados medibles desde el día uno.', b1t: 'Implementación Rápida', b1d: 'De semanas a meses, no años. Vemos resultados en las primeras iteraciones.', b2t: 'ROI Medible', b2d: 'Cada solución tiene KPIs claros. Medimos éxito en términos de negocio.', b3t: 'Equipo Dedicado', b3d: 'Expertos senior en IA trabajando directamente en tu proyecto.', b4t: 'Soporte Continuo', b4d: 'Post-lanzamiento no te abandonamos. Siempre hay alguien disponible.' },
        tecnologias: { title: 'Tecnologías', subtitle: 'Tecnologías que dominamos', headerTitle: 'Usamos las herramientas más modernas de inteligencia artificial para construir soluciones de siguiente nivel.', tech1: 'Machine Learning', tech2: 'Computer Vision', tech3: 'NLP', tech4: 'Python', tech5: 'React', tech6: 'APIs', tech7: 'Cloud', tech8: 'LLMs' },
        contacto: { title: 'Contacto', subtitle: '¿Listo para transformar tu negocio?', name: 'Nombre', email: 'Email', message: 'Mensaje', btn: 'Enviar mensaje', empresa: 'Empresa', empresaP: 'Nombre de tu empresa', service: 'Tipo de servicio', serviceOp: 'Selecciona un servicio', presupuesto: 'Presupuesto aproximado', presupuestoOp: 'Selecciona un rango', opt1: 'Menos de $1,000', opt2: '$1,000 - $5,000', opt3: '$5,000 - $20,000', opt4: '$20,000 - $50,000', opt5: 'Más de $50,000', web: 'Páginas Web Inteligentes', software: 'Software a la Medida', migracion: 'Migración de Sistemas Legacy', automatizacion: 'Automatización con Agentes IA', modernizacion: 'Modernización de Empresas', movil: 'Aplicaciones Móviles', analisis: 'Análisis de Datos con IA', mensajeP: 'Cuéntanos sobre tu proyecto...', success: '✓ Mensaje enviado. Te contactaremos pronto.' },
        footer: { made: 'Hecho en Centroamérica con IA', navTitle: 'Navegación', servicesTitle: 'Servicios', tagline: 'IA que hace crecer tu negocio', about: 'Empresa guatemalteca especializada en implementar soluciones de inteligencia artificial para empresas de la región centroamericana.' }
    },
    en: {
        nav: { inicio: 'Home', nosotros: 'About', servicios: 'Services', proceso: 'Process', beneficios: 'Why Us', tecnologias: 'Technologies', contacto: 'Contact', hablemos: "Let's Talk →" },
        hero: { chip: 'ARTIFICIAL INTELLIGENCE · CENTRAL AMERICA', title1: 'We make', title2: 'your business', title3: 'grow with AI.', subtitle: 'We automate processes, modernize systems, and build intelligent digital products for companies that want to lead their industry.', btn1: 'View Services →', btn2: 'Learn More', scroll: 'SCROLL' },
        stats: { proyectos: 'Projects Delivered', satisfaction: 'Client Satisfaction', tecnologias: 'AI Technologies', roi: 'Average ROI' },
        nosotros: { title: 'About', subtitle: 'AI at the service of your growth', heroTitle: 'We are <span class="gradient">Grow IT</span>, pioneers in AI for Central American businesses.', chip: 'Who we are', desc: 'We are a company founded with the purpose of bringing artificial intelligence to businesses in the region. We do not sell generic technology — we understand the local context, real challenges, and build solutions that work.', desc2: 'We believe AI is not the future, it is the present. And that present begins here, in Central America, with a team that understands your language, your market, and your goals.', value1: 'Focus on real results', value2: 'Cutting-edge technology', value3: 'Dedicated senior team', value4: 'Continuous post-launch support', terminal1: '> Analyzing current system...', terminal2: '✓ AI opportunities found: 7', terminal3: '> Training custom model...', terminal4: '✓ Model accuracy: 97.3%', terminal5: '> Deploying to production...', terminal6: '✓ System live. Projected ROI: 3.2×', metric1: 'Base', metric2: 'Presence', metric3: 'Mode' },
        servicios: { title: 'Our Services', subtitle: 'Everything you need to transform your business with AI', card1: 'Intelligent Websites', card1d: 'Immersive designs with integrated AI that adapt to user behavior and maximize conversions.', card2: 'Custom Software', card2d: 'Enterprise applications powered by AI that automate decisions and optimize critical operations.', card3: 'Legacy Systems Migration', card3d: 'We modernize your infrastructure with integrated AI, reducing costs by up to 40% and improving performance.', card4: 'AI Agent Automation', card4d: 'Intelligent agents that operate 24/7, handle queries, process data, and make autonomous decisions.', card5: 'Business Modernization', card5d: 'Complete digital transformation with AI that positions your company at the forefront of the competition.', card6: 'Mobile Applications', card6d: 'Native and hybrid apps with AI features like recognition, language processing, and predictive analysis.', card7: 'AI Data Analysis', card7d: 'We extract actionable insights from your data with machine learning, predicting trends and opportunities.' },
        proceso: { title: 'Process', subtitle: 'How we work', headerTitle: 'From problem to solution in 4 steps', step1: 'Diagnosis', step1d: 'We analyze your company, current processes, and find where AI generates the most value. Identify automation and optimization opportunities.', step2: 'AI Strategy', step2d: 'We design a custom technical solution, implementation plan, and define success KPIs. Present the complete roadmap.', step3: 'Development', step3d: 'We build and integrate the solution using agile methodology. Deliver functional results weekly for your validation.', step4: 'Launch', step4d: 'Deploy to production, train your team, and provide 24/7 continuous support. Monitor performance and optimize.' },
        beneficios: { title: 'Why Us', subtitle: 'AI that actually works', headerTitle: "We don't implement technology for technology's sake. We build solutions that generate measurable results from day one.", b1t: 'Fast Implementation', b1d: 'Weeks to months, not years. We see results in the first iterations.', b2t: 'Measurable ROI', b2d: 'Every solution has clear KPIs. We measure success in business terms.', b3t: 'Dedicated Team', b3d: 'Senior AI experts working directly on your project.', b4t: 'Continuous Support', b4d: 'Post-launch we do not abandon you. There is always someone available.' },
        tecnologias: { title: 'Technologies', subtitle: 'Technologies we master', headerTitle: 'We use the most modern artificial intelligence tools to build next-level solutions.', tech1: 'Machine Learning', tech2: 'Computer Vision', tech3: 'NLP', tech4: 'Python', tech5: 'React', tech6: 'APIs', tech7: 'Cloud', tech8: 'LLMs' },
        contacto: { title: 'Contact', subtitle: 'Ready to transform your business?', name: 'Name', email: 'Email', message: 'Message', btn: 'Send Message', empresa: 'Company', empresaP: 'Your company name', service: 'Service type', serviceOp: 'Select a service', presupuesto: 'Approximate budget', presupuestoOp: 'Select a range', opt1: 'Less than $1,000', opt2: '$1,000 - $5,000', opt3: '$5,000 - $20,000', opt4: '$20,000 - $50,000', opt5: 'More than $50,000', web: 'Intelligent Websites', software: 'Custom Software', migracion: 'Legacy Systems Migration', automatizacion: 'Automation with AI Agents', modernizacion: 'Business Modernization', movil: 'Mobile Applications', analisis: 'AI Data Analysis', mensajeP: 'Tell us about your project...', success: '✓ Message sent. We will contact you soon.' },
        footer: { made: 'Made in Central America with AI', navTitle: 'Navigation', servicesTitle: 'Services', tagline: 'AI that grows your business', about: 'Guatemalan company specialized in implementing artificial intelligence solutions for businesses in the Central American region.' }
    }
};

let currentLang = 'es';

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    document.getElementById('langToggle').textContent = currentLang.toUpperCase();
    const mobileLangBtn = document.querySelector('.lang-toggle-mobile');
    if(mobileLangBtn) mobileLangBtn.textContent = currentLang.toUpperCase();
    applyTranslations();
    
    // Update meta tags
    if(currentLang === 'en') {
        document.title = 'Grow IT — Artificial Intelligence for businesses | Central America';
        document.querySelector('meta[name="description"]').content = 'Grow IT transforms businesses with AI. We develop custom software, automate processes, modernize systems, and build intelligent digital products throughout Central America.';
        document.querySelector('meta[name="keywords"]').content = 'artificial intelligence, AI, custom software, automation, machine learning, data analysis, mobile apps, Central America';
        document.querySelector('meta[property="og:title"]').content = 'Grow IT — Artificial Intelligence for businesses | Central America';
        document.querySelector('meta[name="twitter:title"]').content = 'Grow IT — Artificial Intelligence for businesses | Central America';
    } else {
        document.title = 'Grow IT — Inteligencia Artificial para empresas | Centroamérica';
        document.querySelector('meta[name="description"]').content = 'Grow IT transforma empresas con IA. Desarrollamos software a medida, automatizamos procesos, modernizamos sistemas y construimos productos digitales inteligentes en toda Centroamérica.';
        document.querySelector('meta[name="keywords"]').content = 'inteligencia artificial, IA, software a medida, automatización, machine learning, análisis de datos, aplicaciones móviles, Centroamérica';
        document.querySelector('meta[property="og:title"]').content = 'Grow IT — Inteligencia Artificial para empresas | Centroamérica';
        document.querySelector('meta[name="twitter:title"]').content = 'Grow IT — Inteligencia Artificial para empresas | Centroamérica';
    }
}

function applyTranslations() {
    const t = translations[currentLang];
    
    // Nav links
    const navLinks = document.querySelectorAll('.nav-link');
    if(navLinks[0]) navLinks[0].textContent = t.nav.inicio;
    if(navLinks[1]) navLinks[1].textContent = t.nav.nosotros;
    if(navLinks[2]) navLinks[2].textContent = t.nav.servicios;
    if(navLinks[3]) navLinks[3].textContent = t.nav.proceso;
    if(navLinks[4]) navLinks[4].textContent = t.nav.beneficios;
    if(navLinks[5]) navLinks[5].textContent = t.nav.tecnologias;
    if(navLinks[6]) navLinks[6].textContent = t.nav.contacto;
    
    // Nav CTA
    const ctaBtns = document.querySelectorAll('.btn-cta, .btn-cta-mobile');
    ctaBtns.forEach(btn => btn.textContent = t.nav.hablemos);
    
    // Hero
    document.querySelector('.chip').textContent = t.hero.chip;
    const heroLines = document.querySelectorAll('.hero-title .line');
    heroLines[0].textContent = currentLang === 'es' ? 'Hacemos crecer' : 'We make';
    heroLines[1].textContent = currentLang === 'es' ? 'tu negocio' : 'your business';
    heroLines[2].innerHTML = currentLang === 'es' ? '<span class="gradient">con IA.</span>' : '<span class="gradient">grow with AI.</span>';
    document.querySelector('.hero-subtitle').textContent = t.hero.subtitle;
    const heroBtns = document.querySelectorAll('.hero-buttons .btn-primary, .hero-buttons .btn-secondary');
    heroBtns[0].textContent = t.hero.btn1;
    heroBtns[1].textContent = t.hero.btn2;
    document.querySelector('.hero-scroll span').textContent = t.hero.scroll;
    
    // Stats
    const statLabels = document.querySelectorAll('.stat-label');
    statLabels[0].textContent = t.stats.proyectos;
    statLabels[1].textContent = t.stats.satisfaction;
    statLabels[2].textContent = t.stats.tecnologias;
    statLabels[3].textContent = t.stats.roi;
    
    // Nosotros
    document.querySelectorAll('.section-title')[0].textContent = t.nosotros.title;
    const nosotrosTxts = document.querySelectorAll('#nosotros .section-subtitle, #nosotros .reveal');
    nosotrosTxts[0].textContent = t.nosotros.subtitle;
    nosotrosTxts[1].textContent = t.nosotros.desc;
    nosotrosTxts[2].textContent = t.nosotros.desc2;
    
    // Hero title and chip
    const heroTitles = document.querySelectorAll('#nosotros h2');
    if(heroTitles[0]) heroTitles[0].innerHTML = t.nosotros.heroTitle;
    
    const chips = document.querySelectorAll('#nosotros .chip');
    if(chips[0]) chips[0].textContent = t.nosotros.chip;
    
    // Values list
    const values = document.querySelectorAll('#nosotros .values-list li');
    if(values[0]) values[0].textContent = t.nosotros.value1;
    if(values[1]) values[1].textContent = t.nosotros.value2;
    if(values[2]) values[2].textContent = t.nosotros.value3;
    if(values[3]) values[3].textContent = t.nosotros.value4;
    
    // Terminal lines
    const terminalLines = document.querySelectorAll('#nosotros .terminal-line');
    if(terminalLines[0]) terminalLines[0].textContent = t.nosotros.terminal1;
    if(terminalLines[1]) terminalLines[1].textContent = t.nosotros.terminal2;
    if(terminalLines[2]) terminalLines[2].textContent = t.nosotros.terminal3;
    if(terminalLines[3]) terminalLines[3].textContent = t.nosotros.terminal4;
    if(terminalLines[4]) terminalLines[4].textContent = t.nosotros.terminal5;
    if(terminalLines[5]) terminalLines[5].textContent = t.nosotros.terminal6;
    
    // Metric values and labels
    const metricValues = document.querySelectorAll('#nosotros .metric-mini-value');
    if(metricValues[0]) metricValues[0].textContent = currentLang === 'es' ? 'El Salvador' : 'El Salvador';
    if(metricValues[1]) metricValues[1].textContent = currentLang === 'es' ? 'Guatemala' : 'Guatemala';
    if(metricValues[2]) metricValues[2].textContent = currentLang === 'es' ? 'Remoto' : 'Remote';
    
    const metricLabels = document.querySelectorAll('#nosotros .metric-mini-label');
    if(metricLabels[0]) metricLabels[0].textContent = t.nosotros.metric1;
    if(metricLabels[1]) metricLabels[1].textContent = t.nosotros.metric2;
    if(metricLabels[2]) metricLabels[2].textContent = t.nosotros.metric3;
    
    // Servicios  
    document.querySelectorAll('.section-title')[1].textContent = t.servicios.title;
    const serviciosTxts = document.querySelectorAll('#servicios .section-subtitle');
    serviciosTxts[0].textContent = t.servicios.subtitle;
    const servicioCards = document.querySelectorAll('.servicio-card h3, .servicio-card p');
    servicioCards[0].textContent = t.servicios.card1;
    servicioCards[1].textContent = t.servicios.card1d;
    servicioCards[2].textContent = t.servicios.card2;
    servicioCards[3].textContent = t.servicios.card2d;
    servicioCards[4].textContent = t.servicios.card3;
    servicioCards[5].textContent = t.servicios.card3d;
    servicioCards[6].textContent = t.servicios.card4;
    servicioCards[7].textContent = t.servicios.card4d;
    servicioCards[8].textContent = t.servicios.card5;
    servicioCards[9].textContent = t.servicios.card5d;
    servicioCards[10].textContent = t.servicios.card6;
    servicioCards[11].textContent = t.servicios.card6d;
    servicioCards[12].textContent = t.servicios.card7;
    servicioCards[13].textContent = t.servicios.card7d;
    
    // Proceso
    document.querySelectorAll('.section-title')[2].textContent = t.proceso.title;
    document.querySelectorAll('#proceso .section-subtitle')[0].textContent = t.proceso.subtitle;
    const procesoHeaders = document.querySelectorAll('#proceso h2');
    if(procesoHeaders[0]) procesoHeaders[0].textContent = t.proceso.headerTitle;
    const procesoSteps = document.querySelectorAll('.proceso-step h3, .proceso-step p');
    procesoSteps[0].textContent = t.proceso.step1;
    procesoSteps[1].textContent = t.proceso.step1d;
    procesoSteps[2].textContent = t.proceso.step2;
    procesoSteps[3].textContent = t.proceso.step2d;
    procesoSteps[4].textContent = t.proceso.step3;
    procesoSteps[5].textContent = t.proceso.step3d;
    procesoSteps[6].textContent = t.proceso.step4;
    procesoSteps[7].textContent = t.proceso.step4d;
    
    // Beneficios — COMMENTED OUT (sección no existe)
    // document.querySelectorAll('.section-title')[3].textContent = t.beneficios.title;
    // document.querySelectorAll('#beneficios .section-subtitle')[0].textContent = t.beneficios.subtitle;
    // const beneficioHeaders = document.querySelectorAll('#beneficios h2');
    // if(beneficioHeaders[0]) beneficioHeaders[0].innerHTML = t.beneficios.headerTitle;
    // const beneficioCards = document.querySelectorAll('.beneficio-card h3, .beneficio-card p');
    // if(beneficioCards[0]) beneficioCards[0].textContent = t.beneficios.b1t;
    // if(beneficioCards[1]) beneficioCards[1].textContent = t.beneficios.b1d;
    // if(beneficioCards[2]) beneficioCards[2].textContent = t.beneficios.b2t;
    // if(beneficioCards[3]) beneficioCards[3].textContent = t.beneficios.b2d;
    // if(beneficioCards[4]) beneficioCards[4].textContent = t.beneficios.b3t;
    // if(beneficioCards[5]) beneficioCards[5].textContent = t.beneficios.b3d;
    // if(beneficioCards[6]) beneficioCards[6].textContent = t.beneficios.b4t;
    // if(beneficioCards[7]) beneficioCards[7].textContent = t.beneficios.b4d;
    
    // Tecnologias — COMMENTED OUT (sección no existe)
    // document.querySelectorAll('.section-title')[4].textContent = t.tecnologias.title;
    // document.querySelectorAll('#tecnologias .section-subtitle')[0].textContent = t.tecnologias.subtitle;
    // const techHeaders = document.querySelectorAll('#tecnologias h2');
    // if(techHeaders[0]) techHeaders[0].innerHTML = t.tecnologias.headerTitle;
    // const techItems = document.querySelectorAll('#tecnologias .tech-item');
    // if(techItems[0]) techItems[0].textContent = t.tecnologias.tech1;
    // if(techItems[1]) techItems[1].textContent = t.tecnologias.tech2;
    // if(techItems[2]) techItems[2].textContent = t.tecnologias.tech3;
    // if(techItems[3]) techItems[3].textContent = t.tecnologias.tech4;
    // if(techItems[4]) techItems[4].textContent = t.tecnologias.tech5;
    // if(techItems[5]) techItems[5].textContent = t.tecnologias.tech6;
    // if(techItems[6]) techItems[6].textContent = t.tecnologias.tech7;
    // if(techItems[7]) techItems[7].textContent = t.tecnologias.tech8;
    
    // Contacto
    document.querySelectorAll('.section-title')[5].textContent = t.contacto.title;
    document.querySelectorAll('#contacto .section-subtitle')[0].textContent = t.contacto.subtitle;
    
    // Form labels
    const formLabels = document.querySelectorAll('#contacto .form-group label');
    if(formLabels[0]) formLabels[0].textContent = t.contacto.name;
    if(formLabels[1]) formLabels[1].textContent = t.contacto.email;
    if(formLabels[2]) formLabels[2].textContent = t.contacto.empresa;
    if(formLabels[3]) formLabels[3].textContent = t.contacto.service;
    if(formLabels[4]) formLabels[4].textContent = t.contacto.presupuesto;
    
    // Form placeholders
    const formInputs = document.querySelectorAll('#contacto .form-group input');
    if(formInputs[0]) formInputs[0].placeholder = currentLang === 'es' ? 'Tu nombre' : 'Your name';
    if(formInputs[1]) formInputs[1].placeholder = currentLang === 'es' ? 'tu@email.com' : 'you@email.com';
    if(formInputs[2]) formInputs[2].placeholder = t.contacto.empresaP;
    
    // Submit button
    const submitBtn = document.querySelector('#contacto .form-submit .btn-text');
    if(submitBtn) submitBtn.textContent = t.contacto.btn;
    
    // Select options
    const selectService = document.querySelector('#contacto #servicio');
    if(selectService) {
        selectService.options[0].textContent = t.contacto.serviceOp;
        selectService.options[1].textContent = t.contacto.web;
        selectService.options[2].textContent = t.contacto.software;
        selectService.options[3].textContent = t.contacto.migracion;
        selectService.options[4].textContent = t.contacto.automatizacion;
        selectService.options[5].textContent = t.contacto.modernizacion;
        selectService.options[6].textContent = t.contacto.movil;
        selectService.options[7].textContent = t.contacto.analisis;
    }
    
    const selectPresupuesto = document.querySelector('#contacto #presupuesto');
    if(selectPresupuesto) {
        selectPresupuesto.options[0].textContent = t.contacto.presupuestoOp;
        selectPresupuesto.options[1].textContent = t.contacto.opt1;
        selectPresupuesto.options[2].textContent = t.contacto.opt2;
        selectPresupuesto.options[3].textContent = t.contacto.opt3;
        selectPresupuesto.options[4].textContent = t.contacto.opt4;
        selectPresupuesto.options[5].textContent = t.contacto.opt5;
    }
    
    // Message placeholder and success
    const messageTextarea = document.querySelector('#contacto textarea');
    if(messageTextarea) messageTextarea.placeholder = t.contacto.mensajeP;
    
    const formSuccess = document.querySelector('#contacto .form-success');
    if(formSuccess) formSuccess.textContent = t.contacto.success;
    
    // Footer
    document.querySelector('.footer-bottom span').textContent = '© 2025 Grow IT. ' + t.footer.made;
    document.querySelector('.footer-tagline').textContent = t.footer.tagline;
    document.querySelector('.footer-about').textContent = t.footer.about;
    const footerH4s = document.querySelectorAll('.footer-column h4');
    if(footerH4s[0]) footerH4s[0].textContent = t.footer.navTitle;
    if(footerH4s[1]) footerH4s[1].textContent = t.footer.servicesTitle;
    
    // Footer navigation links
    const footerNavLinks = document.querySelectorAll('.footer-column:first-of-type ul li a');
    if(footerNavLinks[0]) footerNavLinks[0].textContent = t.nav.inicio;
    if(footerNavLinks[1]) footerNavLinks[1].textContent = t.nav.nosotros;
    if(footerNavLinks[2]) footerNavLinks[2].textContent = t.nav.servicios;
    if(footerNavLinks[3]) footerNavLinks[3].textContent = t.nav.proceso;
    if(footerNavLinks[4]) footerNavLinks[4].textContent = t.nav.beneficios;
    if(footerNavLinks[5]) footerNavLinks[5].textContent = t.nav.tecnologias;
    if(footerNavLinks[6]) footerNavLinks[6].textContent = t.nav.contacto;
    
    // Footer service links
    const footerServiceLinks = document.querySelectorAll('.footer-column:last-of-type ul li a');
    if(footerServiceLinks[0]) footerServiceLinks[0].textContent = t.servicios.card1;
    if(footerServiceLinks[1]) footerServiceLinks[1].textContent = t.servicios.card2;
    if(footerServiceLinks[2]) footerServiceLinks[2].textContent = t.servicios.card3;
    if(footerServiceLinks[3]) footerServiceLinks[3].textContent = t.servicios.card4;
    if(footerServiceLinks[4]) footerServiceLinks[4].textContent = t.servicios.card7;
    if(footerServiceLinks[5]) footerServiceLinks[5].textContent = t.servicios.card6;
    if(footerServiceLinks[6]) footerServiceLinks[6].textContent = t.servicios.card5;
}

// ============================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// MOBILE MENU
// ============================================
const hamburger = document.getElementById('hamburger');
const mobileOverlay = document.getElementById('mobileOverlay');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = mobileOverlay.classList.contains('active') ? 'hidden' : '';
});

mobileOverlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ============================================
// ACTIVE NAV LINK
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = { threshold: 0.3 };

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + entry.target.id) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => navObserver.observe(section));

// ============================================
// HERO ANIMATION ON LOAD - GSAP SPLIT TEXT
// ============================================
window.addEventListener('DOMContentLoaded', () => {
    // Split each .line into individual words
    document.querySelectorAll('.hero-title .line').forEach(line => {
        const html = line.innerHTML;
        // Wrap text nodes in words, preserve inner HTML tags like <span class="gradient">
        const temp = document.createElement('div');
        temp.innerHTML = html;
        let result = '';
        temp.childNodes.forEach(node => {
            if (node.nodeType === 3) {
                // Text node — split into words
                result += node.textContent.split(/(\s+)/).map(w => 
                    w.trim() ? `<span class="word">${w}</span>` : w
                ).join('');
            } else {
                // Element node (e.g. <span class="gradient">) — wrap its text content
                const tag = node.cloneNode(false);
                tag.innerHTML = node.textContent.split(/(\s+)/).map(w =>
                    w.trim() ? `<span class="word">${w}</span>` : w
                ).join('');
                result += tag.outerHTML;
            }
        });
        line.innerHTML = result;
        line.style.opacity = '1';
        line.style.transform = 'none';
    });

    const allWords = document.querySelectorAll('.hero-title .word');
    const tl = gsap.timeline({ delay: 0.3 });

    tl.to(allWords, { opacity: 1, y: '0%', duration: 0.6, ease: 'power3.out', stagger: 0.07 })
      .to('#heroSubtitle', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
      .to('#heroButtons', { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.3')
      .to('#heroScroll', { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, '-=0.2');
});

// ============================================
// GSAP SCROLLTRIGGER — REVEAL ANIMATIONS
// ============================================
gsap.registerPlugin(ScrollTrigger);

// Generic reveals with stagger
document.querySelectorAll('section').forEach(section => {
    const reveals = section.querySelectorAll('.reveal');
    if (!reveals.length) return;
    gsap.fromTo(reveals, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: section, start: 'top 80%', once: true }
        }
    );
});

// Burbujas de servicios
gsap.utils.toArray('.servicio-card').forEach((card, i) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        delay: i * 0.11,
        ease: 'back.out(1.5)'
    });

    // Flotación continua después de aparecer
    gsap.to(card, {
        y: -10,
        duration: 2.2 + i * 0.28,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 0.8 + i * 0.35
    });
});

// Beneficio cards — COMMENTED OUT (sección no existe en HTML)
// gsap.fromTo('.beneficio-card',
//     { opacity: 0, y: 50 },
//     { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1,
//       scrollTrigger: { trigger: '#beneficios', start: 'top 75%', once: true }
//     }
// );

// Tech items — COMMENTED OUT (sección no existe en HTML)
// gsap.fromTo('.tech-item',
//     { opacity: 0, scale: 0.8 },
//     { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.7)', stagger: 0.06,
//       scrollTrigger: { trigger: '#tecnologias', start: 'top 75%', once: true }
//     }
// );

// Contacto
gsap.fromTo('.contacto-info-box',
    { opacity: 0, x: -40 },
    { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '#contacto', start: 'top 75%', once: true }
    }
);
gsap.fromTo('.contacto-form-box',
    { opacity: 0, x: 40 },
    { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '#contacto', start: 'top 75%', once: true }
    }
);

// ============================================
// CLIP-PATH SECTION REVEALS + FADE OUT ON EXIT
// ============================================
document.querySelectorAll('.section-reveal').forEach(section => {
    // Fade in + clip reveal on enter
    gsap.to(section, {
        clipPath: 'inset(0% 0 0% 0)',
        ease: 'power2.out',
        scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            end: 'top 40%',
            scrub: 1
        }
    });
    // Fade out content when leaving viewport (not the section itself)
    const inner = section.querySelector('.section-header, .nosotros-grid, .servicios-grid, .contacto-wrapper');
    if (inner) {
        gsap.to(inner, {
            opacity: 0, y: -40, ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'bottom 60%',
                end: 'bottom 20%',
                scrub: true
            }
        });
    }
});

// ============================================
// GLOW BLOBS PARALLAX
// ============================================
document.querySelectorAll('.ambient-glow').forEach((blob, i) => {
    const speed = 80 + (i % 3) * 40;
    const xDrift = (i % 2 === 0 ? 1 : -1) * (30 + i * 10);
    gsap.to(blob, {
        y: -speed,
        x: xDrift,
        ease: 'none',
        scrollTrigger: {
            trigger: blob.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
});

// ============================================
// CONTENT PARALLAX LAYERS (fondo lento, contenido normal)
// ============================================
document.querySelectorAll('.section-header').forEach(header => {
    gsap.to(header, {
        y: -30,
        ease: 'none',
        scrollTrigger: {
            trigger: header.closest('section'),
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
});

// ============================================
// STATS COUNTER — GSAP ScrollTrigger
// ============================================
document.querySelectorAll('.stat-number').forEach(stat => {
    const target = parseInt(stat.dataset.target);
    const suffix = stat.dataset.suffix || '+';
    const obj = { val: 0 };
    gsap.to(obj, {
        val: target, duration: 2, ease: 'power2.out',
        scrollTrigger: { trigger: '#stats', start: 'top 80%', once: true },
        onUpdate: () => { stat.textContent = Math.floor(obj.val) + suffix; }
    });
});

// Stats items stagger + parallax
document.querySelectorAll('.stat-item').forEach((item, i) => {
    gsap.fromTo(item,
        { opacity: 0, y: 50 + i * 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '#stats', start: 'top 85%', once: true, delay: i * 0.1 }
        }
    );
    // Continuous parallax at different speeds
    gsap.to(item, {
        y: -15 * (i + 1),
        ease: 'none',
        scrollTrigger: { trigger: '#stats', start: 'top bottom', end: 'bottom top', scrub: true }
    });
});

// ============================================
// TERMINAL TYPING — COMMENTED OUT (elemento no existe en HTML)
// ============================================
// const terminalLines = document.querySelectorAll('.terminal-line');
// ScrollTrigger.create({
//     trigger: '#terminal',
//     start: 'top 80%',
//     once: true,
//     onEnter: () => {
//         terminalLines.forEach((line, index) => {
//             setTimeout(() => line.classList.add('visible'), parseInt(line.dataset.delay) || index * 400);
//         });
//     }
// });

// ============================================
// SERVICIOS CARDS TILT + DYNAMIC GLOW
// ============================================
const cards = document.querySelectorAll('.servicio-card');
const isMobileCheck = window.innerWidth < 768;

if (!isMobileCheck) {
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            const rotateX = (0.5 - y) * 20;
            const rotateY = (x - 0.5) * 20;
            const color = card.dataset.color || 'cyan';
            const glowColors = {
                cyan: 'rgba(0,245,196,0.15)',
                violet: 'rgba(108,71,255,0.15)',
                magenta: 'rgba(255,45,120,0.15)'
            };
            const borderColors = {
                cyan: 'rgba(0,245,196,0.4)',
                violet: 'rgba(108,71,255,0.4)',
                magenta: 'rgba(255,45,120,0.4)'
            };
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
            card.style.background = `radial-gradient(circle at ${x*100}% ${y*100}%, ${glowColors[color]}, transparent 60%)`;
            card.style.borderColor = borderColors[color];
            card.style.boxShadow = `0 20px 60px rgba(0,0,0,0.3), 0 0 40px ${glowColors[color]}`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
            card.style.background = 'rgba(255,255,255,0.07)';
            card.style.borderColor = 'rgba(255,255,255,0.1)';
            card.style.boxShadow = '';
        });
    });
}

// ============================================
// PROCESO — HORIZONTAL SCROLL CINEMATOGRÁFICO
// ============================================
const procesoTrack = document.getElementById('procesoTrack');
if (procesoTrack && window.innerWidth > 768) {
    const steps = gsap.utils.toArray('.timeline-step');

    // Calcular el ancho total a desplazar
    const getScrollAmount = () => -(procesoTrack.scrollWidth - window.innerWidth + 80);

    // Mover el track horizontalmente mientras el outer scrollea
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.proceso-outer',
            start: 'top top',
            end: () => '+=' + (procesoTrack.scrollWidth - window.innerWidth + 80),
            scrub: 1.2,
            pin: '.proceso-sticky',
            anticipatePin: 1,
            invalidateOnRefresh: true
        }
    });

    tl.to(procesoTrack, {
        x: getScrollAmount,
        ease: 'none'
    });

    // Cada step aparece conforme entra desde la derecha
    steps.forEach((step, i) => {
        const progress = i / steps.length;
        ScrollTrigger.create({
            trigger: '.proceso-outer',
            start: 'top top',
            end: () => '+=' + (procesoTrack.scrollWidth - window.innerWidth + 80),
            onUpdate: (self) => {
                if (self.progress > progress - 0.05 && self.progress < progress + 0.45) {
                    gsap.to(step, { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', overwrite: 'auto' });
                }
            }
        });
    });
}

// Mobile — reveal normal
if (window.innerWidth <= 768) {
    gsap.utils.toArray('.timeline-step').forEach((step, i) => {
        gsap.fromTo(step,
            { opacity: 0, y: 40 },
            {
                scrollTrigger: { trigger: step, start: 'top 85%' },
                opacity: 1, y: 0, duration: 0.7, delay: i * 0.15, ease: 'power2.out'
            }
        );
    });
}

// ============================================
// COUNTERS EN NOSOTROS
// ============================================
const nosotrosObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.stat-num[data-target]').forEach(el => {
            const target = parseInt(el.dataset.target);
            const suffix = el.dataset.suffix || '';
            const start = Date.now();
            const duration = 1600;
            const tick = () => {
                const elapsed = Date.now() - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.round(target * eased) + suffix;
                if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        });
        nosotrosObserver.unobserve(entry.target);
    });
}, { threshold: 0.4 });

const nosotrosStats = document.querySelector('.nosotros-stats');
if (nosotrosStats) nosotrosObserver.observe(nosotrosStats.closest('section'));

// Stagger step cards as they scroll in
    gsap.fromTo('.timeline-step',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.2,
          scrollTrigger: { trigger: '#proceso', start: 'top 60%', once: true }
        }
    );
}

// ============================================
// FORM SUBMISSION
// ============================================
const contactForm = document.getElementById('contactForm');
const formSubmit = contactForm.querySelector('.form-submit');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formSubmit.classList.add('loading');
    const formGroups = contactForm.querySelectorAll('.form-group');
    formGroups.forEach((group, i) => {
        group.style.transition = `all 0.3s ease ${i * 0.05}s`;
        group.style.opacity = '0';
        group.style.transform = 'translateY(20px)';
    });
    setTimeout(() => {
        formSubmit.style.display = 'none';
        formSuccess.classList.add('visible');
        formSuccess.style.animation = 'successIn 0.6s cubic-bezier(0.16,1,0.3,1)';
    }, 800);
});

// ============================================
// PARALLAX HERO — GSAP ScrollTrigger
// ============================================
gsap.to('.hero-content', {
    y: 120, opacity: 0, ease: 'none',
    scrollTrigger: { trigger: '#inicio', start: 'top top', end: 'bottom top', scrub: true }
});
gsap.to('.hero-scroll', {
    y: 60, opacity: 0, ease: 'none',
    scrollTrigger: { trigger: '#inicio', start: 'top top', end: '40% top', scrub: true }
});

// Hero — efecto cinematográfico al scrollear
gsap.to('#inicio .hero-content-inner', {
    scrollTrigger: {
        trigger: '#inicio',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5
    },
    scale: 0.72,
    y: -55,
    opacity: 0,
    ease: 'none'
});

gsap.to('.hero-portal', {
    scrollTrigger: {
        trigger: '#inicio',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    scale: 4,
    opacity: 0,
    ease: 'none'
});

// ============================================
// SMOOTH SCROLL FOR NAV LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================
const scrollProgressBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    scrollProgressBar.style.width = progress + '%';
});

// ============================================
// MAGNETIC BUTTONS
// ============================================
const magneticBtns = document.querySelectorAll('.btn-primary, .btn-cta');
magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

// ============================================
// TEXT SCRAMBLE EFFECT FOR HERO
// ============================================
try {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%';
    const heroTitleLine = document.querySelector('.hero-title .line:last-child');
    if (heroTitleLine) {
        const originalText = heroTitleLine.textContent;
        function scrambleText() {
            let iteration = 0;
            const interval = setInterval(() => {
                heroTitleLine.textContent = originalText.split('').map((letter, index) => {
                    if (index < iteration) return originalText[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join('');
                if (iteration >= originalText.length) {
                    clearInterval(interval);
                    heroTitleLine.textContent = originalText;
                }
                iteration += 1 / 3;
            }, 30);
        }
        scrambleText();
    }
} catch(e) { console.log('Scramble effect skipped'); }

// ============================================
// SECTION CLIP-PATH REVEALS
// ============================================
const revealHeaders = document.querySelectorAll('#nosotros h2, #servicios h2, #proceso h2, #contacto h2');
revealHeaders.forEach(header => header.classList.add('section-reveal'));

const sectionRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('revealed');
    });
}, { threshold: 0.2 });

revealHeaders.forEach(header => sectionRevealObserver.observe(header));

// ============================================
// AMBIENT GLOW BLOBS
// ============================================
function createAmbientGlows() {
    const sections = ['nosotros', 'servicios', 'contacto'];
    const glowConfigs = {
        nosotros: [
            { top: '10%', left: '5%', background: 'radial-gradient(circle, rgba(0,245,196,0.15), transparent 70%)' },
            { bottom: '15%', right: '10%', background: 'radial-gradient(circle, rgba(108,71,255,0.12), transparent 70%)' }
        ],
        servicios: [
            { top: '30%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(108,71,255,0.1), transparent 70%)' }
        ],
        contacto: [
            { top: '50%', right: '5%', background: 'radial-gradient(circle, rgba(255,45,120,0.1), transparent 70%)' }
        ]
    };

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (!section) return;
        section.style.position = 'relative';
        glowConfigs[sectionId].forEach(config => {
            const blob = document.createElement('div');
            blob.className = 'ambient-glow';
            blob.style.top = config.top;
            blob.style.bottom = config.bottom;
            blob.style.left = config.left;
            blob.style.right = config.right;
            blob.style.width = '200px';
            blob.style.height = '200px';
            blob.style.background = config.background;
            if (config.transform) blob.style.transform = config.transform;
            section.appendChild(blob);
        });
    });
}
createAmbientGlows();

// ============================================
// LIQUID GLASS CLASS APPLICATION
// ============================================
const glassElements = document.querySelectorAll('.servicio-card, .panel-inner, .contacto-form-box, .contacto-info-box, .step-node, .chip');
glassElements.forEach(el => el.classList.add('glass-element'));


// ============================================
// Three.js — Circuit Board with Light Pulses
// ============================================
try {
    const canvas = document.getElementById('neural-canvas');
    if (!canvas) throw new Error('Canvas not found');

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 6, 8);
    camera.lookAt(0, 0, 0);

    const group = new THREE.Group();
    scene.add(group);

    // ── Board base ──
    const boardGeo = new THREE.PlaneGeometry(16, 16);
    const boardMat = new THREE.MeshBasicMaterial({
        color: 0x060a14, transparent: true, opacity: 0.6, side: THREE.DoubleSide
    });
    const board = new THREE.Mesh(boardGeo, boardMat);
    board.rotation.x = -Math.PI / 2;
    group.add(board);

    // ── Grid lines (subtle PCB traces) ──
    const gridMat = new THREE.LineBasicMaterial({ color: 0x0a1628, transparent: true, opacity: 0.4 });
    for (let i = -8; i <= 8; i += 0.8) {
        const hGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-8,0.01,i), new THREE.Vector3(8,0.01,i)]);
        group.add(new THREE.Line(hGeo, gridMat));
        const vGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(i,0.01,-8), new THREE.Vector3(i,0.01,8)]);
        group.add(new THREE.Line(vGeo, gridMat));
    }

    // ── Circuit traces (main paths) ──
    const traces = [];
    const traceMat = new THREE.LineBasicMaterial({ color: 0x0d2847, transparent: true, opacity: 0.7 });

    function makeTrace(points) {
        const v = points.map(p => new THREE.Vector3(p[0], 0.02, p[1]));
        const geo = new THREE.BufferGeometry().setFromPoints(v);
        const line = new THREE.Line(geo, traceMat.clone());
        group.add(line);
        traces.push({ points: v, line });
        return v;
    }

    // Main horizontal highways
    makeTrace([[-8,0],[8,0]]);
    makeTrace([[-8,2],[8,2]]);
    makeTrace([[-8,-2],[8,-2]]);
    makeTrace([[-8,4],[8,4]]);
    makeTrace([[-8,-4],[8,-4]]);
    // Vertical highways
    makeTrace([[0,-8],[0,8]]);
    makeTrace([[3,-8],[3,8]]);
    makeTrace([[-3,-8],[-3,8]]);
    // Diagonal branches
    makeTrace([[-6,-6],[-3,-3],[0,-3],[3,0],[3,3],[6,6]]);
    makeTrace([[6,-6],[3,-3],[0,0],[-3,3],[-6,6]]);
    makeTrace([[-5,1],[-3,1],[-3,3],[-1,3],[-1,5]]);
    makeTrace([[5,-1],[3,-1],[3,-3],[1,-3],[1,-5]]);
    makeTrace([[-7,-3],[-5,-3],[-5,-1],[-2,-1],[-2,1],[1,1],[1,3],[4,3]]);
    makeTrace([[7,3],[5,3],[5,1],[2,1],[2,-1],[-1,-1],[-1,-3],[-4,-3]]);

    // ── Chip nodes ──
    const chipGeo = new THREE.BoxGeometry(0.8, 0.12, 0.8);
    const chipPositions = [[0,0],[-3,2],[3,-2],[-5,-4],[5,4],[2,3],[-2,-3],[-4,0],[4,0],[0,4],[0,-4]];
    const chips = [];

    chipPositions.forEach(([x,z]) => {
        const mat = new THREE.MeshBasicMaterial({ color: 0x0a1a30, transparent: true, opacity: 0.8 });
        const chip = new THREE.Mesh(chipGeo, mat);
        chip.position.set(x, 0.06, z);
        group.add(chip);
        chips.push(chip);

        // Chip border glow
        const edges = new THREE.EdgesGeometry(chipGeo);
        const edgeMat = new THREE.LineBasicMaterial({ color: 0x00f5c4, transparent: true, opacity: 0.15 });
        const wireframe = new THREE.LineSegments(edges, edgeMat);
        wireframe.position.copy(chip.position);
        group.add(wireframe);
    });

    // ── Light pulses (spheres that travel along traces) ──
    const pulses = [];
    const pulseColors = [0x00f5c4, 0x6c47ff, 0xff2d78, 0x00f5c4, 0x6c47ff];
    const pulseGeo = new THREE.SphereGeometry(0.06, 8, 8);

    for (let i = 0; i < 25; i++) {
        const trace = traces[i % traces.length];
        const color = pulseColors[i % pulseColors.length];
        const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9 });
        const mesh = new THREE.Mesh(pulseGeo, mat);
        mesh.position.y = 0.05;
        group.add(mesh);

        // Point light for glow
        const light = new THREE.PointLight(color, 0.3, 1.5);
        light.position.y = 0.1;
        group.add(light);

        pulses.push({
            mesh, light, trace: trace.points,
            speed: 0.3 + Math.random() * 0.7,
            progress: Math.random(),
            direction: Math.random() > 0.5 ? 1 : -1
        });
    }

    // ── Controls ──
    let mX = 0, mY = 0;
    document.addEventListener('mousemove', e => {
        mX = (e.clientX / window.innerWidth) * 2 - 1;
        mY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    let scrollProgress = 0;
    ScrollTrigger.create({
        trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: true,
        onUpdate: self => { scrollProgress = self.progress; }
    });

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // ── Animate ──
    const introStart = Date.now();

    function animate() {
        requestAnimationFrame(animate);
        const time = performance.now() * 0.001;
        const introT = Math.min((Date.now() - introStart) / 2500, 1);
        const eased = 1 - Math.pow(1 - introT, 3);

        // Board tilt with mouse + scroll
        group.rotation.x = -0.5 + mY * 0.08 + scrollProgress * 0.2;
        group.rotation.y = mX * 0.12 + scrollProgress * Math.PI * 0.3;
        group.rotation.z = Math.sin(time * 0.1) * 0.02;

        // Intro scale
        group.scale.setScalar(eased);

        // Camera drift
        camera.position.y = 6 - scrollProgress * 3;
        camera.position.z = 8 - scrollProgress * 3;
        camera.lookAt(0, 0, 0);

        // Pulse speed increases with scroll
        const speedMult = 1 + scrollProgress * 3;

        // Move pulses along traces
        pulses.forEach(p => {
            p.progress += p.speed * p.direction * 0.005 * speedMult;
            if (p.progress > 1) { p.progress = 0; }
            if (p.progress < 0) { p.progress = 1; }

            const pts = p.trace;
            const totalLen = pts.length - 1;
            const idx = p.progress * totalLen;
            const i = Math.floor(idx);
            const frac = idx - i;
            const a = pts[Math.min(i, pts.length - 1)];
            const b = pts[Math.min(i + 1, pts.length - 1)];

            p.mesh.position.x = a.x + (b.x - a.x) * frac;
            p.mesh.position.z = a.z + (b.z - a.z) * frac;
            p.light.position.x = p.mesh.position.x;
            p.light.position.z = p.mesh.position.z;

            // Pulse brightness
            p.mesh.material.opacity = 0.6 + Math.sin(time * 4 + p.progress * 10) * 0.4;
            p.light.intensity = (0.2 + scrollProgress * 0.5) * eased;
        });

        // Chip glow pulse
        chips.forEach((chip, i) => {
            const glow = 0.3 + Math.sin(time * 2 + i * 1.2) * 0.15 + scrollProgress * 0.3;
            chip.material.opacity = glow;
        });

        renderer.render(scene, camera);
    }
    animate();
} catch(e) {
    console.error('Three.js error:', e);
}