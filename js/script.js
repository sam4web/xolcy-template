// prealoader
$(document).ready(() => {
  $('#preloader').fadeOut();
});

// back to top
$('.back-to-top').click(() => {
  window.scrollTo(0, 0);
});

// nav toggle
$('.toggle-btn').click(() => {
  $('.header').toggleClass('header-toggle-active');
});

$(window).resize(() => {
  $('.header').removeClass('header-toggle-active');
});

// scroll active
$(window).scroll(() => {
  let scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $('.back-to-top').fadeIn();
    $('.header').addClass('header-scroll-active');
  } else {
    $('.back-to-top').fadeOut();
    $('.header').removeClass('header-scroll-active');
  }
});

// counter
setTimeout(() => {
  $('.odometer_number_one').html(2570);
  $('.odometer_number_two').html(300);
  $('.odometer_number_three').html(4500);
  $('.odometer_number_four').html(270);
}, 1000);

// Back to top
$('.back-to-top').click(() => {
  window.scrollTo(0, 0);
});
