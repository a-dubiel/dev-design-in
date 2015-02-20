/*
 * dev-design-list
 * v. 0.0.1
 * Thursday, February 19th, 2015, 7:09:49 PM
 * 
 * 2015 Andrzej Dubiel | http://adubiel.me/
 */

$(document).ready(function(){

  var header = $('.header').outerHeight(true);
  var win = $(window).height();
  $('.nav-main, .main').css('height', win - header);  


  $('.grid').isotope({
    itemSelector: '.cell',
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });



});

