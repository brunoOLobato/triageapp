/**
 * Slider
 */
export default function() {
  const $fullslider = $('.slide-full');
  $fullslider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0
  });

  const $logoslider = $('.slide-logo');
  $logoslider.slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  const $testimonyslider = $('.slide-testimony');
  const $status = $('.pagingInfo');
  const changeSlide = (slider, action) => {
    $(slider).slick(action);
  };

  $('#slick-next').on('click', () => {
    changeSlide($testimonyslider, 'slickNext');
  });

  $('#slick-prev').on('click', () => {
    changeSlide($testimonyslider, 'slickPrev');
  });

  $testimonyslider.on('init reInit afterChange', function(event, slick, currentSlide) {
    const i = (currentSlide ? currentSlide : 0) + 1;
    const n = (i <= 9 ? '0' + i : i);
    const c = (slick.slideCount <= 9 ? '0' + slick.slideCount : slick.slideCount);
    $status.text(n + ' / ' + c);
  });
  $testimonyslider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0,
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
      }
    }]
  });

  const $listcontentslider = $('.list-content');
  $listcontentslider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.list-btn',
  });

  const $listbtnslider = $('.list-btn');
  $listbtnslider.slick({
    slidesToShow: 10,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0,
    asNavFor: '.list-content',
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        //dots: true,
      }
    }]
  });
}