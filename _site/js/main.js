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
    autoplaySpeed: 5000
  });

  $("ul.tabs-custom").tabs();

  var myVideo1 = videojs('MY_VIDEO_1');
  var myVideo2 = videojs('MY_VIDEO_2');

  $(".modal-trigger").leanModal({
    dismissble: true,
    opacity: .5,
    in_duration: 300,
    out_duration: 200,
    complete: function() {
      myVideo1.pause();
      myVideo2.pause();
    }
  });

});
