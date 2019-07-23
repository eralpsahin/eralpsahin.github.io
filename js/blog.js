'use strict';

document.addEventListener('DOMContentLoaded', () => {
  $(window).scroll(function() {
    if ($('.navbar').offset().top > 50) {
      $('.navbar').addClass('top-nav-short');
    } else {
      $('.navbar').removeClass('top-nav-short');
    }
  });
});
