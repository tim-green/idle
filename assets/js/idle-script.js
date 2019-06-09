(function($) {
  'use strict';  
    /*
        Preloader JS
    */ 
    var prealoaderOption = $(window);
    prealoaderOption.on("load", function () {
        var preloader = jQuery('.lds-ellipsis');
        var preloaderArea = jQuery('.preloader');
        preloader.fadeOut();
        preloaderArea.delay(350).fadeOut('slow');
    });
    /*
        Preloader JS
    */
    /*  
        Meanmenu JS
    */ 
    $('.nav_menu nav').meanmenu({
      meanMenuContainer: '.mobile_menu',
      meanScreenWidth: "991"
    });
    $(".idle_menu_icon,.idle_close_icon").on('click', function (e){
        e.preventDefault();
        $(".idle_sidenav_right").toggleClass("active");
    });
    /*  
        Meanmenu JS
    */ 
    /*  
        sticky header JS
    */
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
         if (scroll < 100) {
          $("#header_sticky").removeClass("sticky");
         }else{
          $("#header_sticky").addClass("sticky");
         }
    }); 
    /*  
        sticky header JS
    */
    /*
        page_scroll top JS
    */
    $("a.page_scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            //console.log($(hash).offset().top - topOffset);
            $('html, body').animate({
                scrollTop: $(hash).offset().top - $("header").outerHeight() + "px"
            }, 1200, function () {

                //window.location.hash = hash;
            });
        } // End if
    });
    /*/
            page scroll JS
    */
    /* 
        slick slider js
    */
    $('.testimonial_slide').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      arrows: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.feature_slide').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      arrows: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1370,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.partner_slide').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.feed_review').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      cssEase: 'linear',
      asNavFor: '.feed_people'
    });
    $('.feed_people').slick({
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      asNavFor: '.feed_review',
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
    /* 
        slick slider js
    */  
    /* 
        magnific-Popup js
    */
    $('.b_play').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    $('.play_btn').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    $('.play_button_2').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    /* 
        magnific-Popup js
    */
    /* 
            wow js
    */
    new WOW().init();
    /* 
            wow js
    */

})(window.jQuery);   