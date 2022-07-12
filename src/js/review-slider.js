$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    pauseOnFocus: true,
    pauseOnHover: true,
    // fade: true,
    asNavFor: '.slider-small',
  });

  $('.slider-small').slick({
    dots: false,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 1000,
    pauseOnFocus: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    asNavFor: '.slider',

    // centerMode: true,
  });
});
