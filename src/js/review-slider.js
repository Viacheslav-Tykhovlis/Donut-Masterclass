$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 1000,
    pauseOnFocus: true,
    pauseOnHover: true,
    fade: true,
    slidesToShow: 1,
    infinite: true,
    appendDots: $('.clients-feedback__pagination'),
  });
});
