document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  mobileMenuToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-times');
    this.querySelector('i').classList.toggle('fa-bars');
  });
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        mobileMenuToggle.querySelector('i').classList.toggle('fa-times');
        mobileMenuToggle.querySelector('i').classList.toggle('fa-bars');
      }
    });
  });
  
  // Volunteer role tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Remove active class from all buttons and contents
      tabBtns.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button and corresponding content
      this.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Animate numbers on scroll
  const animateNumbers = () => {
    const numberElements = document.querySelectorAll('[data-count]');
    
    numberElements.forEach(element => {
      const target = parseInt(element.getAttribute('data-count'));
      const duration = 2000; // Animation duration in ms
      const step = target / (duration / 16); // 60fps
      let current = 0;
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const animate = () => {
              current += step;
              if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(animate);
              } else {
                element.textContent = target;
              }
            };
            
            animate();
            observer.unobserve(element);
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(element);
    });
  };
  
  animateNumbers();
  
  // Form submission
  const volunteerForm = document.getElementById('volunteerForm');
  if (volunteerForm) {
    volunteerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Here you would typically send the form data to a server
      // For demo purposes, we'll just show an alert
      alert('Thank you for your application! We will contact you soon.');
      this.reset();
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Header scroll effect
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      header.style.padding = '10px 0';
      document.querySelector('.logo-img').style.height = '50px';
    } else {
      header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      header.style.padding = '15px 0';
      document.querySelector('.logo-img').style.height = '60px';
    }
  });
});