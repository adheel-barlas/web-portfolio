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

var swiper = new Swiper('.project-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.project-slider__pagination',
    clickable: true,
  }
});

// JS for contact form

// Auto resize input
function resizeInput() {
  $(this).attr('size', $(this).val().length);
}

$('input[type="text"], input[type="email"]')
  // event handler
  .keyup(resizeInput)
  // resize on page load
  .each(resizeInput);


console.clear();
// Adapted from georgepapadakis.me/demo/expanding-textarea.html
(function(){

var textareas = document.querySelectorAll('.expanding'),
    
    resize = function(t) {
      t.style.height = 'auto';
      t.style.overflow = 'hidden'; // Ensure scrollbar doesn't interfere with the true height of the text.
      t.style.height = (t.scrollHeight + t.offset ) + 'px';
      t.style.overflow = '';
    },
    
    attachResize = function(t) {
      if ( t ) {
        t.offset = !window.opera ? (t.offsetHeight - t.clientHeight) : (t.offsetHeight + parseInt(window.getComputedStyle(t, null).getPropertyValue('border-top-width')));

        resize(t);

        if ( t.addEventListener ) {
          t.addEventListener('input', function() { resize(t); });
          t.addEventListener('mouseup', function() { resize(t); }); // set height after user resize
        }

        t['attachEvent'] && t.attachEvent('onkeyup', function() { resize(t); });
      }
    };

// IE7 support
if ( !document.querySelectorAll ) {

  function getElementsByClass(searchClass,node,tag) {
    var classElements = new Array();
    node = node || document;
    tag = tag || '*';
    var els = node.getElementsByTagName(tag);
    var elsLen = els.length;
    var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
    for (i = 0, j = 0; i < elsLen; i++) {
      if ( pattern.test(els[i].className) ) {
        classElements[j] = els[i];
        j++;
      }
    }
    return classElements;
  }
  
  textareas = getElementsByClass('expanding');
}

for (var i = 0; i < textareas.length; i++ ) {
  attachResize(textareas[i]);
}

})();
