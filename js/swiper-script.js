// hero swiper
const hero_swiper = new Swiper('.hero-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 2200,
  },
});

// client swiper
const client_swiper = new Swiper('.client-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  slidesPerView: 1,
  spaceBetween: 30,

  autoplay: {
    delay: 1800,
  },

  breakpoints: {
    954: {
      slidesPerView: 2,
    },
  },
});

// brand swiper
const brand_swiper = new Swiper('.brand-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  slidesPerView: 1,
  spaceBetween: 30,

  autoplay: {
    delay: 1700,
  },

  breakpoints: {
    356: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 3,
    },
    954: {
      slidesPerView: 4,
    },
  },
});
