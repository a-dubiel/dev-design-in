/*
 * dev-design-list
 * v. 0.0.1
 * Friday, February 20th, 2015, 1:57:29 PM
 * 
 * 2015 Andrzej Dubiel | http://adubiel.me/
 */

/**
$(document).ready(function(){

  var header = $('.header').outerHeight(true);
  var logo = $('.logo').outerHeight(true);
  var win = $(window).height();
  $('.nav-main, .main').css('height', win - header);   


  $('.nav-mobile').click(function(){
    $('body').toggleClass('nav-opened');   
  });


  $('.grid').isotope({
    itemSelector: '.cell',
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });



});
*/
