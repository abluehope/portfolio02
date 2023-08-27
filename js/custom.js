$(function () {
  const nav_offset = $(".header_nav").offset();
  $(window).scroll(function () {
    if ($(document).scrollTop() > nav_offset.top) {
      $(".header_nav").addClass("nav_fixed");
    } else {
      $(".header_nav").removeClass("nav_fixed");
    }
  });

  $(window).on("scroll", function () {
    let sct = $(window).scrollTop();
    if (sct > 0) {
      $(".to_top").addClass("on");
    } else {
      $(".to_top").removeClass("on");
    }
  });

  // 퀵 메뉴 고정
  var $target = $(".quick_menu");
  var $footer = $(".footer");
  $(window).on("scroll", function () {
    var $window = $(window),
      anchor = $window.scrollTop() + $window.height();
    var fot = $footer.offset().top;
    if (anchor > fot) $target.removeClass("qm_fixed");
    else $target.addClass("qm_fixed");
  });

  $(".to_top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  const main_slide = new Swiper(".main_slide", {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    on: {
      slideChangeTransitionStart: function () {
        $(".main_visual .slogan .slogan_itm")
          .eq(this.realIndex)
          .addClass("on")
          .siblings()
          .removeClass("on");
          $(".main_visual .dots li")
          .eq(this.realIndex)
          .addClass("on")
          .siblings()
          .removeClass("on");
      },
    },
  });

  $(".main_visual .dots li").on("click", function () {
    const idx = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    main_slide.slideTo(idx);
  });

  const banner_slide = new Swiper(".banner_slide", {
    loop: true,
    speed: 1000,
    on: {
      slideChangeTransitionStart: function () {
        $(".main_h_info .banner_slide_wrap .dots li")
          .eq(this.realIndex)
          .addClass("on")
          .siblings()
          .removeClass("on");
      },
    },
  });

  $(".main_h_info .banner_slide_wrap .dots li").on("click", function () {
    const idx = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    banner_slide.slideTo(idx);
  });

  const doctor_slide = new Swiper(".doctor_slide", {
    loop: true,
    speed: 1000,
    on: {
      slideChangeTransitionStart: function () {
        $(".main_h_info .doctor_slide_wrap .dots li")
          .eq(this.realIndex)
          .addClass("on")
          .siblings()
          .removeClass("on");
      },
    },
  });

  $(".main_h_info .doctor_slide_wrap .dots li").on("click", function () {
    const idx = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    doctor_slide.slideTo(idx);
  });

  const news_slide = new Swiper(".news_slide", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    on: {
      slideChangeTransitionStart: function () {
        $(".main_notice .dots li")
          .eq(this.realIndex)
          .addClass("on")
          .siblings()
          .removeClass("on");
      },
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  $(".main_notice .dots li").on("click", function () {
    const idx = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    news_slide.slideTo(idx);
  });

  $(".main_notice .arrows .left").on("click", function () {
    news_slide.slidePrev();
  });
  $(".main_notice .arrows .right").on("click", function () {
    news_slide.slideNext();
  });
});
