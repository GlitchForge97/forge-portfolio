const defaultConfig = {
background_color: '#080808',
surface_color: '#1a1a1a',
text_color: '#e8e8e8',
accent_color: '#00ff88',
secondary_accent: '#00ccff',
main_title: 'GlitchForge',
tagline: 'Building interactive systems through code, design, and curiosity.',
hero_subtitle: 'Student developer Md Sharek Abdullah Al Zabir from Dhaka — exploring the intersection of web development, problem-solving, and hardware interaction.',
about_title: 'Building & Learning',
skills_title: 'Skills & Technologies',
projects_title: 'Featured Projects',
certs_title: 'Certifications',
contact_title: 'Let\'s Connect',
font_family: 'Inter, -apple-system, BlinkMacSystemFont'
};

// Mobile navigation
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle) {
navToggle.addEventListener('click', () => {
navToggle.classList.toggle('active');
navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
});
});

document.addEventListener('click', (e) => {
if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
}
});
}

async function onConfigChange(config) {
const bgColor = config.background_color || defaultConfig.background_color;
const textColor = config.text_color || defaultConfig.text_color;
const accentColor = config.accent_color || defaultConfig.accent_color;
const fontFamily = config.font_family || defaultConfig.font_family;

document.body.style.background = bgColor;
document.body.style.color = textColor;
document.body.style.fontFamily = `${fontFamily}, sans-serif`;

const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
heroTitle.textContent = config.main_title || defaultConfig.main_title;
}

const heroTagline = document.querySelector('.hero-tagline');
if (heroTagline) {
heroTagline.textContent = config.tagline || defaultConfig.tagline;
}

const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
heroSubtitle.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
}

const aboutTitle = document.querySelector('#about .section-title');
if (aboutTitle) {
aboutTitle.textContent = config.about_title || defaultConfig.about_title;
}

const skillsTitle = document.querySelector('#skills .section-title');
if (skillsTitle) {
skillsTitle.textContent = config.skills_title || defaultConfig.skills_title;
}

const projectsTitle = document.querySelector('#projects .section-title');
if (projectsTitle) {
projectsTitle.textContent = config.projects_title || defaultConfig.projects_title;
}

const certsTitle = document.querySelector('#certifications .section-title');
if (certsTitle) {
certsTitle.textContent = config.certs_title || defaultConfig.certs_title;
}

const contactTitle = document.querySelector('#contact .section-title');
if (contactTitle) {
contactTitle.textContent = config.contact_title || defaultConfig.contact_title;
}

document.querySelectorAll('.section-eyebrow').forEach(el => {
el.style.color = accentColor;
});

document.querySelectorAll('.hero-cta').forEach(el => {
el.style.background = `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%)`;
});
}

if (window.elementSdk) {
window.elementSdk.init({
defaultConfig,
onConfigChange,
mapToCapabilities: (config) => ({
    recolorables: [
    {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => {
        config.background_color = value;
        window.elementSdk.setConfig({ background_color: value });
        }
    },
    {
        get: () => config.surface_color || defaultConfig.surface_color,
        set: (value) => {
        config.surface_color = value;
        window.elementSdk.setConfig({ surface_color: value });
        }
    },
    {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => {
        config.text_color = value;
        window.elementSdk.setConfig({ text_color: value });
        }
    },
    {
        get: () => config.accent_color || defaultConfig.accent_color,
        set: (value) => {
        config.accent_color = value;
        window.elementSdk.setConfig({ accent_color: value });
        }
    },
    {
        get: () => config.secondary_accent || defaultConfig.secondary_accent,
        set: (value) => {
        config.secondary_accent = value;
        window.elementSdk.setConfig({ secondary_accent: value });
        }
    }
    ],
    borderables: [],
    fontEditable: {
    get: () => config.font_family || defaultConfig.font_family,
    set: (value) => {
        config.font_family = value;
        window.elementSdk.setConfig({ font_family: value });
    }
    },
    fontSizeable: undefined
}),
mapToEditPanelValues: (config) => new Map([
    ['main_title', config.main_title || defaultConfig.main_title],
    ['tagline', config.tagline || defaultConfig.tagline],
    ['hero_subtitle', config.hero_subtitle || defaultConfig.hero_subtitle],
    ['about_title', config.about_title || defaultConfig.about_title],
    ['skills_title', config.skills_title || defaultConfig.skills_title],
    ['projects_title', config.projects_title || defaultConfig.projects_title],
    ['certs_title', config.certs_title || defaultConfig.certs_title],
    ['contact_title', config.contact_title || defaultConfig.contact_title]
])
});
}

// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
cursor.style.left = e.clientX + 'px';
cursor.style.top = e.clientY + 'px';

setTimeout(() => {
cursorFollower.style.left = e.clientX + 'px';
cursorFollower.style.top = e.clientY + 'px';
}, 50);
});

document.querySelectorAll('a, button, .project-card, .cert-card, .skill-item').forEach(el => {
el.addEventListener('mouseenter', () => {
cursor.style.transform = 'scale(2)';
cursor.style.opacity = '0.5';
});
el.addEventListener('mouseleave', () => {
cursor.style.transform = 'scale(1)';
cursor.style.opacity = '1';
});
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
});
});

// Scroll reveal
const observerOptions = {
threshold: 0.1,
rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
    entry.target.classList.add('active');
}
});
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Nav scroll effect
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
const currentScroll = window.pageYOffset;

if (currentScroll > 100) {
nav.classList.add('scrolled');
} else {
nav.classList.remove('scrolled');
}
});

// Contact form
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
e.preventDefault();
const btn = contactForm.querySelector('.submit-btn');
const originalText = btn.textContent;

btn.textContent = 'Sending...';
btn.style.opacity = '0.7';

setTimeout(() => {
btn.textContent = '✓ Message Sent!';
btn.style.background = 'linear-gradient(135deg, #00ff88 0%, #00ccaa 100%)';

setTimeout(() => {
    btn.textContent = originalText;
    btn.style.opacity = '1';
    contactForm.reset();
}, 3000);
}, 1500);
});
