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

