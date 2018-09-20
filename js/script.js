// Plan:
  // Create fixed navbar
  // Navbar appears only the user scrolls up

var beforeScroll = 0;
var afterScroll;
var $navbar = $('.navbar');

// find current position
$(window).on("scroll", function(){
  
  // Calculate updated scroll position
  afterScroll = $(this).scrollTop();
      
  // Compare before and after scroll
  
  // if scrolling is quick and less then -10
  if (beforeScroll < afterScroll) {
    // user is scrolling down
    $navbar.removeClass('slideDown').addClass('slideUp');
  } else if (beforeScroll > afterScroll) {
    // user is scrolling up
    $navbar.removeClass('slideUp').addClass('slideDown');
  }
  // Reset beforeScroll to afterScroll position
  beforeScroll = afterScroll;
});

// Smooth scrolling on CTAs
$("#ctaAbout").click(function() {
  $('html, body').animate({
      scrollTop: $("#aboutMe").offset().top
  }, 2000);
});

// Smooth scrolling on CTAs
$("#ctaProjects").click(function() {
  $('html, body').animate({
      scrollTop: $("#projects").offset().top
  }, 2000);
});

var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});