/* comment slider */

$('.slider1').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay:false,
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
          dots: false,
    arrows: false

        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
    arrows: false

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
    arrows: false

        }
      }
    ]
  });