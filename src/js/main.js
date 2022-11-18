$(document).ready(function(){
    $('.slider-catalog').slick({
      slidesToShow: 3,
      slidesToScroll:1,
      responsive:[
        {
          breakpoint:840,
          settings:{
            slidesToShow: 2
          }
        },
        {
          breakpoint:664,
          settings:{
            slidesToShow: 1
          }
        }
      ]
    });
    $('.slider-reviews').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots:true,
      arrows:false
    });
  });