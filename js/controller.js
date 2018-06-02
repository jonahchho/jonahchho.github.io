mainApp.controller('slide', function(){

  // Smooth scrolling using jQuery easing

  // Select all links with hashes
  // Remove links that don't actually link to anything
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {

  	// On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && 
    	location.hostname == this.hostname) {

      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      
      // Does a scroll target exist?
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");

        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });
	  	 
});


