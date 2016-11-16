$(function() {
	$('.videoButton').on('click',function(){
		$('.video').fadeIn();
	});
	$('.close').on('click', function(){
		$('.video').fadeOut();	
	});

	$('.section7 .flickity').flickity({
	// options
		cellAlign: 'center',
		contain: true,
		watchCSS: true, 
		pageDots: false,
		freeScroll: true
	});
	$('.section8 .flickity').flickity({
	// options
		cellAlign: 'center',
		contain: true,
		watchCSS: true, 
		prevNextButtons: false
	});
	$('#menuIcon').on('click', function(){
		$('.slide').toggleClass('show-menu');
		$(this).toggleClass('fa-times fa-bars');
	});

	var $nav = $('.sticky');
	var $win = $(window);
	var winH = $win.height(); // Get the window height.

	$win.on("scroll", function () {
       if ($(this).scrollTop() > winH ) {
           $nav.addClass("fixed");
       } else {
           $nav.removeClass("fixed");
       }
   }).on("resize", function(){ // If the user resizes the window
      winH = $(this).height(); // you'll need the new height value
   });

   $(".section9").click(function() {
       $('iframe').css("pointer-events","auto");
   });
   $(".section7").click(function() {
       $('iframe').css("pointer-events","none");
   });
   $(".section10").click(function() {
       $('iframe').css("pointer-events","none");
   });
});	

