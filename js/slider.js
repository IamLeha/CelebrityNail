$(document).ready(function () {

  $('.bigSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: $('.bottom__box-arrow-prev'),
    nextArrow: $('.bottom__box-arrow-next'),
    responsive: [{
      breakpoint: 425,
      settings: {
        arrows: false,
        autoplay: true,
      }
    }, ]
  });

  $('.littleSlider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: $('.arrow-prev'),
    nextArrow: $('.arrow-next'),
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
        }
      }
    ]
  });

})
/*
$('.bigSlider').slick({
  prevArrow: $('.bottom__box-arrow-prev'),
  nextArrow: $('.bottom__box-arrow-next'),
});*/