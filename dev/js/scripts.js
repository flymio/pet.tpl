'use strict';

$(function () {
  // Поддержка svg спрайтов в IE11
  svg4everybody();
  
  // Меню
  $('#pull').on('click', function() {
    $('#sub-nav').stop(true, true).slideToggle(300);
  });

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
        breakpoint: 990,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          infinite: false
        }
      }
    ]
  });

  // Карусель о центрах
  $('#about-list')
    .slick({
      dots: true,
      arrows: false,
      swipe: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            
          }
        }
      ]
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide){
      var containerVideo = $('#about-list .video.play');
      
      if (containerVideo.length) {
        var video = $(containerVideo[0]).find('video');
        if (!video[0].paused && !video[0].ended) {
          video[0].pause();
          containerVideo.removeClass('play');
        }
      }
    })
    .on('afterChange', function(event, slick, currentSlide){
      var targetsWrapper = $('#about-list .video__wrapper');

      targetsWrapper.unbind('click');
      targetsWrapper.on('click', function() {
        videoControl($(this));
      });
    });

  // Воспроизведение видео
  function videoControl(currentElement) {
    var wrapper = currentElement;
    var containerVideo = wrapper.closest('.video');
    var video = containerVideo.find('video');

    if (video.length) {
      if (!video[0].paused && !video[0].ended) {
        video[0].pause();
        containerVideo.removeClass('play');
      } else {
        video[0].play();
        containerVideo.addClass('play');
      }
    }
  }

  $('.video__wrapper').on('click', function() {
    videoControl($(this));
  });

  // Карусель новостей
  $('#news-list').slick({
    dots: false,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/icons-sprite.svg#icon-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/icons-sprite.svg#icon-arrow"></use></svg></button>',
    appendArrows: '#news-carousel',
    appendDots: '#news-dots',
    infinite: false,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Карусель экспертов
  $('#experts-list').slick({
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/icons-sprite.svg#icon-angle-quadro"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/icons-sprite.svg#icon-angle-quadro"></use></svg></button>',
    appendArrows: '#experts-carousel',
    appendDots: '#experts-carousel',
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: false,
          variableWidth: true
        }
      }
    ]
  });

  // Карусель городов
  $('#carousel-cities').slick({
    dots: false,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/icons-sprite.svg#icon-angle"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/icons-sprite.svg#icon-angle"></use></svg></button>',
    appendArrows: '#cities-arrows',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
          variableWidth: true
        }
      }
    ]
  });

  // Слайдшоу экспертов
  $('#experts-slides').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/icons-sprite.svg#icon-angle"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/icons-sprite.svg#icon-angle"></use></svg></button>',
    appendArrows: '#experts-arrow',
    variableWidth: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          arrows: false,
          variableWidth: false,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          variableWidth: false,
          dots: false,
          infinite: false
        }
      }
    ]
  });

  // Маска телефона
  $('input[type=tel]').mask('+7 999 999 99 99');

  // Скроллинг к месту формы
  $('.scroll-button').on('click', function(e) {
    e.preventDefault();

    var scrollBlock = $(this).attr('href');
    var blockPosition = $(scrollBlock).offset().top;

    $('html, body').animate({scrollTop: blockPosition}, 800);
  });
});