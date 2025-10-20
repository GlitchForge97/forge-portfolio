// Configuration object
const defaultConfig = {
  main_title: "GlitchForge",
  subtitle: "Intermediate Full Stack Developer & Web/Robotics Enthusiast",
  hero_description: "Crafting creative digital solutions with hands-on experience in modern web technologies, small robotics projects, and problem-solving challenges",
  about_title: "About Me",
  about_description: "Intermediate Full Stack Developer and maker with experience building independent web apps, offline tools, and small robotics projects. I focus on creating interactive, responsive, and visually appealing solutions while learning and experimenting with new technologies.",
  contact_email: "glitchforge97@gmail.com",
  contact_phone: "",
  contact_location: "Bangladesh",
  primary_color: "#64ffda",
  secondary_color: "#00d4ff",
  background_color: "#0a0a0f",
  accent_color: "#0099ff",
  text_color: "#ffffff",
  font_family: "Inter",
  font_size: 16
};

// Create enhanced floating particles
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 80;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 8 + 's';
    particle.style.animationDuration = (Math.random() * 4 + 6) + 's';

    // Vary particle sizes
    const size = Math.random() * 2 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    particlesContainer.appendChild(particle);
  }
}

// Enhanced scroll animations for each section
function setupScrollAnimations() {
  const aboutContent = document.querySelector('.about-content');
  const skillsContainer = document.querySelector('.skills-container');
  const projectCards = document.querySelectorAll('.project-card');
  const certificateCards = document.querySelectorAll('.certificate-card');
  const contactItems = document.querySelectorAll('.contact-item');
  const timelineItems = document.querySelectorAll('.timeline-item');
  const highlightCards = document.querySelectorAll('.highlight-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // About section animation
        if (entry.target.classList.contains('about-content')) {
          entry.target.classList.add('animate');
        }

        // Skills section animation
        if (entry.target.classList.contains('skills-container')) {
          const skillCards = entry.target.querySelectorAll('.skill-card');
          skillCards.forEach((card, index) => {
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            }, index * 200);
          });
        }

        // Projects section animation
        if (entry.target.classList.contains('project-card')) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) rotateX(0deg)';
        }

        // Certificates section animation
        if (entry.target.classList.contains('certificate-card')) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'rotateY(0deg) translateZ(0px)';
        }

        // Contact section animation
        if (entry.target.classList.contains('contact-item')) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }

        // Timeline animation
        if (entry.target.classList.contains('timeline-item')) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }

        // Highlight cards animation
        if (entry.target.classList.contains('highlight-card')) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      }
    });
  }, { threshold: 0.2 });

  // Observe all animated elements
  if (aboutContent) observer.observe(aboutContent);
  if (skillsContainer) observer.observe(skillsContainer);
  projectCards.forEach(card => observer.observe(card));
  certificateCards.forEach(card => observer.observe(card));
  contactItems.forEach(item => observer.observe(item));
  timelineItems.forEach(item => observer.observe(item));
  highlightCards.forEach(card => observer.observe(card));
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav-links a, .cta-button');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Enhanced form submission
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  // Show loading state
  const submitBtn = form.querySelector('.submit-btn');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<span>Sending...</span>';
  submitBtn.style.background = 'linear-gradient(135deg, #64ffda, #00d4ff)';
  submitBtn.disabled = true;

  // Simulate sending (replace with actual API call)
  setTimeout(() => {
    submitBtn.innerHTML = '<span>Message Sent! ✨</span>';
    submitBtn.style.background = 'linear-gradient(135deg, #4ade80, #22c55e)';

    // Reset form after 3 seconds
    setTimeout(() => {
      form.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.style.background = 'linear-gradient(135deg, #64ffda, #00d4ff)';
      submitBtn.disabled = false;
    }, 3000);
  }, 1500);
}

// Enhanced navbar scroll effect
function setupNavbarScroll() {
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      nav.style.background = 'rgba(10, 10, 15, 0.98)';
      nav.style.borderBottom = '1px solid rgba(100, 255, 218, 0.2)';
    } else {
      nav.style.background = 'rgba(10, 10, 15, 0.95)';
      nav.style.borderBottom = '1px solid rgba(100, 255, 218, 0.1)';
    }
  });
}

// Render function for Element SDK
async function render(config) {
  const baseSize = config.font_size || defaultConfig.font_size;
  const customFont = config.font_family || defaultConfig.font_family;
  const baseFontStack = 'sans-serif';

  // Update text content
  document.getElementById('main-title').textContent = config.main_title || defaultConfig.main_title;
  document.getElementById('subtitle').textContent = config.subtitle || defaultConfig.subtitle;
  document.getElementById('hero-description').textContent = config.hero_description || defaultConfig.hero_description;
  document.getElementById('about-title').textContent = config.about_title || defaultConfig.about_title;
  document.getElementById('about-description').textContent = config.about_description || defaultConfig.about_description;
  document.getElementById('contact-email').textContent = config.contact_email || defaultConfig.contact_email;
  document.getElementById('contact-phone').textContent = config.contact_phone || defaultConfig.contact_phone;
  document.getElementById('contact-location').textContent = config.contact_location || defaultConfig.contact_location;

  // Apply font family
  document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;

  // Apply font sizes proportionally
  document.querySelector('.hero h1').style.fontSize = `${baseSize * 3.125}px`;
  document.querySelector('.hero p').style.fontSize = `${baseSize * 1.4}px`;
  document.querySelector('.hero-description').style.fontSize = `${baseSize * 1.1}px`;
  document.querySelectorAll('.section-title').forEach(el => {
    el.style.fontSize = `${baseSize * 2.1875}px`;
  });
  document.body.style.fontSize = `${baseSize}px`;

  // Apply colors
  const primaryColor = config.primary_color || defaultConfig.primary_color;
  const secondaryColor = config.secondary_color || defaultConfig.secondary_color;
  const backgroundColor = config.background_color || defaultConfig.background_color;
  const accentColor = config.accent_color || defaultConfig.accent_color;
  const textColor = config.text_color || defaultConfig.text_color;

  // Update CSS custom properties for colors
  document.documentElement.style.setProperty('--primary-color', primaryColor);
  document.documentElement.style.setProperty('--secondary-color', secondaryColor);
  document.documentElement.style.setProperty('--background-color', backgroundColor);
  document.documentElement.style.setProperty('--accent-color', accentColor);
  document.documentElement.style.setProperty('--text-color', textColor);

  // Apply background color
  document.body.style.background = `linear-gradient(135deg, ${backgroundColor} 0%, #1a1a2e 30%, #16213e 70%, ${accentColor} 100%)`;
  document.body.style.color = textColor;
}

// Element SDK capabilities
function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.primary_color || defaultConfig.primary_color,
        set: (value) => {
          config.primary_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({ primary_color: value });
          }
        }
      },
      {
        get: () => config.secondary_color || defaultConfig.secondary_color,
        set: (value) => {
          config.secondary_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({ secondary_color: value });
          }
        }
      },
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => {
          config.background_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({ background_color: value });
          }
        }
      },
      {
        get: () => config.accent_color || defaultConfig.accent_color,
        set: (value) => {
          config.accent_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({ accent_color: value });
          }
        }
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => {
          config.text_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({ text_color: value });
          }
        }
      }
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (value) => {
        config.font_family = value;
        if (window.elementSdk) {
          window.elementSdk.setConfig({ font_family: value });
        }
      }
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (value) => {
        config.font_size = value;
        if (window.elementSdk) {
          window.elementSdk.setConfig({ font_size: value });
        }
      }
    }
  };
}

// Map to edit panel values
function mapToEditPanelValues(config) {
  return new Map([
    ["main_title", config.main_title || defaultConfig.main_title],
    ["subtitle", config.subtitle || defaultConfig.subtitle],
    ["hero_description", config.hero_description || defaultConfig.hero_description],
    ["about_title", config.about_title || defaultConfig.about_title],
    ["about_description", config.about_description || defaultConfig.about_description],
    ["contact_email", config.contact_email || defaultConfig.contact_email],
    ["contact_phone", config.contact_phone || defaultConfig.contact_phone],
    ["contact_location", config.contact_location || defaultConfig.contact_location]
  ]);
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  setupScrollAnimations();
  setupSmoothScrolling();
  setupNavbarScroll();

  // Initialize Element SDK
  if (window.elementSdk) {
    window.elementSdk.init({
      defaultConfig,
      render,
      mapToCapabilities,
      mapToEditPanelValues
    });
  }
});
