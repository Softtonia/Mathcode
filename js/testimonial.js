/* comment slider */

$('.slider3').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    
    responsive: [
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });