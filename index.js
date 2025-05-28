function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
      particlesContainer.appendChild(particle);
    }
  }

  function initSwipers() {
    const swiperConfig = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      initialSlide: 0,
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slideToClickedSlide: true,
      loop: true,
      loopedSlides: 3,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 800,
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 'auto',
        },
      }
    };

    const tobaccoSwiper = new Swiper('.tobaccoSwiper', {
      ...swiperConfig,
      autoplay: { delay: 3000, disableOnInteraction: false }
    });

    const vapeSwiper = new Swiper('.vapeSwiper', {
      ...swiperConfig,
      autoplay: { delay: 3500, disableOnInteraction: false }
    });

    const drinksSwiper = new Swiper('.drinksSwiper', {
      ...swiperConfig,
      autoplay: { delay: 4000, disableOnInteraction: false }
    });

    const pouchesSwiper = new Swiper ('.pouchesSwiper', {
        ...swiperConfig,
        autoplay: { delay: 4500, disableOnInteraction: false}
    });

    setTimeout(() => {
      tobaccoSwiper.autoplay.start();
      vapeSwiper.autoplay.start();
      drinksSwiper.autoplay.start();
      pouchesSwiper.autoplay.start();
    }, 100);
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
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
  }

  function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-title, .product-card').forEach(el => {
      observer.observe(el);
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    initSwipers();
    initSmoothScroll();
    initScrollAnimations();
  });