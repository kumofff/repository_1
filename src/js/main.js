$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight:true,
        speed:700,
        waitForAnimate:false,
        responsive:[
            {
              breakpoint:750,
              settings:{
                slidesToShow: 2
              }  
            },{
              breakpoint:520,
              settings:{
                slidesToShow: 1
                }  
              }
        ]

    })
     
  });