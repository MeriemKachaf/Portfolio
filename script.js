document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-links a');
  const revealElements = document.querySelectorAll('.reveal');
  const skillLevels = document.querySelectorAll('.skill-level');
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  const sections = document.querySelectorAll('main section');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });

  const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.86;

    revealElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < trigger) {
        element.classList.add('visible');
      }
    });

    skillLevels.forEach((bar) => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < trigger && !bar.classList.contains('animated')) {
        bar.style.width = bar.dataset.width;
        bar.classList.add('animated');
      }
    });
  };

  const setActiveLink = () => {
    let currentId = '';

    sections.forEach((section) => {
      const top = window.scrollY;
      const offset = section.offsetTop - 140;
      const height = section.offsetHeight;

      if (top >= offset && top < offset + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  };

  if (form && formMessage) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      formMessage.textContent = 'Merci pour votre message !';
      formMessage.style.color = '#1f7a3d';
      form.reset();
    });
  }

  window.addEventListener('scroll', () => {
    revealOnScroll();
    setActiveLink();
  });

  revealOnScroll();
  setActiveLink();
});
