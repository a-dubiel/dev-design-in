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

