//Strict Mode 
(function($) {
  "use strict";

//Run on Document Ready
$(document).ready(function(){  

    //Smooth scrool
    $("html").niceScroll({styler:"fb",cursorcolor:"#000"});

    //Side menu - Open
    $('.side-menu-open .btn').on('click', function () {
        $('.side-menu').animate({'left': '0px'}, 600, 'easeOutCubic');
    });

    //Side menu - Close
    $('#side-menu-close').on('click', function () {
        var sideWidth = $('.side-menu').outerWidth();
        var sideWidthClose = '-' + sideWidth + 'px';
        $('.side-menu').animate({'left': sideWidthClose}, 600, 'easeOutCubic');
        preventDefault();
    });

    //Smooth Scroll on anchor links
    $('a[href*=#]:not([href=#])').on('click', function () {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700, 'easeInOutExpo');
        return false;
      }
    }
    });

    //Bootstrap Scroll Spy
    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh');
    });

    //Bxslider -see options at http://bxslider.com/
    $('.portfolio-itens').bxSlider({
      slideWidth: 200,
      minSlides: 1,
      maxSlides: 4,
      moveSlides: 1,
      slideMargin: 5,
      auto: false,
      mode: 'horizontal',
      useCSS: false,
      speed: 900,
      infiniteLoop: false,
      hideControlOnEnd: true,
      easing: 'easeOutElastic',
      pager: false,
      prevText: '<i class="fa fa-chevron-left"></i>',
      nextText: '<i class="fa fa-chevron-right"></i>'
    });


    //Nivo Lightbox
    // $('a.nivobox').nivoLightbox({ effect: 'fade' });

    //Portfolio Animations
    var portfolioItem = $('.portfolio-item');
    portfolioItem.on('mouseenter', function () {
        $(this).find('.hover-bg-wrapper').fadeIn(200);
        $(this).find('.hover').show();
        $(this).find('p').addClass('animated').addClass('fadeInUp');
    });

    portfolioItem.on('mouseleave', function () {
        $(this).find('.hover-bg-wrapper').fadeOut(200);
        $(this).find('.hover').fadeOut(200);
        $(this).find('p').removeClass('fadeInUp');
    });

    //Contact Form Validator and Ajax Sender, Ponder if API key for AWS Gateway API is necessary
    //http://stackoverflow.com/questions/35190615/api-gateway-cors-no-access-control-allow-origin-header
    $("#contactForm").validate({
        submitHandler: function() {
            var formData = {
                "name": $("#contactForm #name").val(),
                "email": $("#contactForm #email").val(),
                "subject": $("#contactForm #subject").val(),
                "message": $("#contactForm #message").val()
            };

            $.ajax({
                type: "POST",
                cache: false,
                url: "https://z6xpli9nr0.execute-api.us-west-2.amazonaws.com/prod/makeitwork",
                data: JSON.stringify(formData),
                contentType: "application/json",
                // dataType: "json",
                success: function (data) {
                    console.log('data', data);
                    //need to work on passing data back from lamba
                    if (data.response == "success") {
                        $('#contactWait').hide();
                        $("#contactSuccess").fadeIn(300);
                        $("#contactError").addClass("hidden");

                        $("#contactForm #name, #contactForm #email, #contactForm #subject, #contactForm #message")
                          .val("")
                          .blur()
                          .closest(".control-group")
                          .removeClass("success")
                          .removeClass("error");
                        $('label.error').hide();

                    } else {
                        $('#contactWait').hide();
                        $("#contactError").fadeIn(300);
                        $("#contactSuccess").addClass("hidden");
                    }
                },
                beforeSend: function() {
                  $('#contactWait').fadeIn(200);
                }
            });
        }
    });

    //Modal for Contact Form
    $('.modal-wrap').on('click', function () {
        $('.modal-wrap').fadeOut(300);
    });

    //Background Height fix for vertical progress
    $( ".full-height" ).each(function() {
        var $stretch = $(this);
        $stretch.css({ height: $stretch.closest('.line').find('.content-wrap').height() });
    });

});

//Run on Window Load
$(window).load(function(){
  //Page loader
  $('#page-loader').fadeOut(200, function(){});

  //Safari Crossbrowser animation Fix
  if ($('html').hasClass('safari')) {
      $('#content-body').removeClass('animated');
  }

  //Fade In load
  $('#content-body').addClass('fadeInUp');

  //Background Height fix for vertical progress
  setTimeout(function () {
      $( ".full-height" ).each(function() {
        var $stretch = $(this);
        $stretch.css({ height: $stretch.closest('.line').find('.content-wrap').outerHeight() });
      });  
    }, 300
  );
  
  //Background Height fix for vertical progress on window resize
  $(window).resize(function(){ 
     $( ".full-height" ).each(function() {
      var $stretch = $(this);
      $stretch.css({ height: $stretch.closest('.line').find('.content-wrap').outerHeight() });
    }); 
  });
});
})(jQuery);