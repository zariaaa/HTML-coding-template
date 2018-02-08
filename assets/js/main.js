(function($) {
'use strict';






  AOS.init({
    easing: 'ease-out-back',
    duration: 1000
  });

 /*
  $('.count').counterUp({
      delay: 2,
      time: 1000
  });


  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
*/

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});



/* sticky header */
$(document).on('scroll',function() {
  var scroll = $(document).scrollTop();
  if(scroll > 74) {
    $('header').addClass('sticky');
  }
  else {
    $('header').removeClass('sticky');
  }
});


/* SCrollToSection */


/* ============ Owl Carousel */

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    dots:true,
    nav:true,
    
});


    
/* ============= Navigation */
var main_nav = $('nav').height();

/* ============= Mobile Menu */
$(document).on('click','.mobile-button',function() {
  $('nav').toggleClass('visible');
  $('.mobile-button').toggleClass('visible');
});

/* ============= Hello Text Box */
$(window).on('scroll',function() {
  var offset = $(document).scrollTop();
  var opacity = 1-(offset/600);
  $('.hello .text-box').css('opacity',opacity);

  if(main_nav < offset) {
    $('nav').addClass('sticky-nav');
  }
  else {
    $('nav').removeClass('sticky-nav');
  }
});


$('.owsl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
/*
$('.tab-nav').owlCarousel({
        items:1,
        loop:true,
        center:true,
        margin:10,
        nav:false,
        URLhashListener:true,
        // autoplayHoverPause:true,
        startPosition: 'URLHash'
    });

*/


$('.js-scroll').on('click', function(e){
      e.preventDefault();

      var $target = $($(this).attr('href'));

      $('html, body').animate({
        scrollTop: $target.offset().top-200}, 300);
   
  });




var $win             = $(window);
var $counterItems    = $('#counter-sec');
var windowHalfHeight = screen.availHeight / 2;
var animated         = false;

$win.on('scroll', function(){
   if ($win.scrollTop() + windowHalfHeight > $counterItems.offset().top && !animated) {
    animated = true;

    $('.count').each(function(){
      var $this = $(this);
      var number = $this.data('number');

      $({ counter: 0 }).animate({
        counter: number
      }, {
        duration: 1000, 
        step: function(now) {
          $this.text(parseInt(now));
        }
      });
    });
  }
});


})(jQuery);


  
