document.addEventListener("DOMContentLoaded", () => {

  // ── Hamburger menu ──────────────────────────────────────
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => navLinks.classList.remove("active"));
    });
  }

  // ── Navbar on scroll ────────────────────────────────────
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
    scrollTopBtn.classList.toggle("visible", window.scrollY > 400);
  }, { passive: true });

  // ── Scroll to top ───────────────────────────────────────
  const scrollTopBtn = document.getElementById("scrollTop");
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ── Active nav link on scroll ───────────────────────────
  const sections = document.querySelectorAll("section[id], header[id]");
  const navAnchors = document.querySelectorAll(".nav-links a");

  const observeSection = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => {
          a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => observeSection.observe(s));

  // ── Scroll reveal ────────────────────────────────────────
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

  // ── Contact form ─────────────────────────────────────────
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (form && formMessage) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      formMessage.textContent = "✓ Merci pour votre message ! Je vous répondrai très prochainement.";
      formMessage.style.color = "#3730a3";
      setTimeout(() => {
        form.reset();
        formMessage.textContent = "";
      }, 4000);
    });
  }

});
