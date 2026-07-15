/* ===================================
   EDESSA - Main JavaScript
   Navigation, FAQ, Scroll Animations
   =================================== */

document.addEventListener('DOMContentLoaded', () => {

  // Navigation scroll shadow
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('nav--scrolled', window.scrollY > 10);
    });
  }

  // Mobile menu toggle
  const mobileToggle = document.querySelector('.nav__mobile-toggle');
  const mobileMenu = document.querySelector('.nav__mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item__question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const isActive = item.classList.contains('active');

      // Close all items in this FAQ list
      item.closest('.faq-list').querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-item__question').setAttribute('aria-expanded', 'false');
      });

      // Open clicked item if it was closed
      if (!isActive) {
        item.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Fade-in animations on scroll
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(el => observer.observe(el));
  }

  // Weight calculator slider
  const weightSlider = document.getElementById('weight-slider');
  const calcWeight = document.getElementById('calc-weight');
  const calcLoss = document.getElementById('calc-loss');
  if (weightSlider && calcWeight && calcLoss) {
    weightSlider.addEventListener('input', () => {
      const weight = parseInt(weightSlider.value);
      calcWeight.textContent = weight;
      // ~18% average weight loss
      const loss = Math.round(weight * 0.18);
      calcLoss.textContent = loss;
    });
  }

  // Quiz option selection
  document.querySelectorAll('.quiz__option').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.quiz__option').forEach(o => o.classList.remove('active'));
      option.classList.add('active');
    });
  });

});
