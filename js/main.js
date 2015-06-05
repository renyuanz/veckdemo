/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('.about-slider').slick({
    autoplay: true,
    autoplaySpeed: 6000
  });
});



// Todo
$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed").removeClass("top-nav-collapse");
  }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});
