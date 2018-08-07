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

// Skill bar component


// Animation for skill bar
var $window = $(window);
var $elem = $(".container-skillbar")

    function isScrolledIntoView($elem, $window) {
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

// On scroll to view point, animate skill bars
$(document).on("scroll", function () {
    if (isScrolledIntoView($elem, $window)) {
        jQuery(document).ready(function(){
          jQuery('.skillbar').each(function(){
            jQuery(this).find('.skillbar-bar').animate({
              width:jQuery(this).attr('data-percent')
            },3000);
          });
        });
    }
});

// Smooth scrolling on CTAs
$("#ctaAbout").click(function() {
  $('html, body').animate({
      scrollTop: $("#aboutMe").offset().top
  }, 2000);
});