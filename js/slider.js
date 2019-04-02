$('.bigSlider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 425,
      settings: {
        arrows:false,
      }
    },
  ]
});

$('.littleSlider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 425,
      settings: {
        arrows:false,
      }
    },
  ]
});
