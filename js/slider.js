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
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: $('.arrow-prev'),
  nextArrow: $('.arrow-next'),
  responsive: [{
      breakpoint: 1025,
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


$(".filter li").on('click', function(){
  var filter = $(this).data('filter');
  $(".littleSlider").slick('slickUnfilter');
  
  if(filter == 'hairmaster'){
    $(".littleSlider").slick('slickFilter','.hairmaster');
  }
  else if(filter == 'manicure-pedicure'){
    $(".littleSlider").slick('slickFilter','.manicure-pedicure');
  }
  else if(filter == 'cosmetologist'){
    $(".littleSlider").slick('slickFilter','.cosmetologist');
  }
  else if(filter == 'browup'){
    
    $(".littleSlider").slick('slickFilter','.browup');
  }
  
})