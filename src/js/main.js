$(document).ready(function(){
    $('.slider-catalog').slick({
      slidesToShow: 3,
      slidesToScroll: 1
    });
    $('.slider-reviews').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots:true,
      arrows:false
    });
  });