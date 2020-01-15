'use strict';

$(function () {
  // Слаидер на главной странице
  $('#slideshow').slick({
    dots: true,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          
        }
      }
    ]
  });

  // Карусель услуг
  $('#carousel-services-list').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/icons-sprite.svg#icon-angle"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/icons-sprite.svg#icon-angle"></use></svg></button>',
    appendArrows: '#carousel-services',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          
        }
      }
    ]
  });
});