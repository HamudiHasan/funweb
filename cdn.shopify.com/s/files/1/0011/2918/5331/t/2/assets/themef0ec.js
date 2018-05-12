(function($) {
    "use strict";

	jQuery(document).ready(function(){


/*------------------------------------
    02. jQuery MeanMenu
-------------------------------------- */
	$('#mobile-menu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu-area .mobile-menu",
    });
    
/*----------------------------------------
    03. Owl Carousel
---------------------------------------- */

/*------------------------------------------
    04. ScrollUp
------------------------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-chevron-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });  
    
/*------------------------------------------
    05. Wow js
-------------------------------------------- */    
    new WOW().init();
    
/*------------------------------------------
    06. Isotope
-------------------------------------------- */  
    $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-item'
        }
    });    

    
/*------------------------------------
    09. Scroll Down
-------------------------------------- */  
    $('.scroll-down').on('click', function() {
        $('html, body').animate({scrollTop: $('.scroll-area').offset().top - 100 }, 'slow');
        return false;
    });
	
	
          /* Ajax Cart */
    $(".cart-item").on('click', function(){
      $(this).addClass("loading add-item");
      setTimeout(function () {
        $(".cart-item").removeClass("loading");
      },1000);
      setTimeout(function () {
        $(".cart-item").removeClass("add-item");
      },2000);

    });    

    /* Ajax Wishlist */
    $(".action--wishlist").on('click', function(){
      $(this).addClass("loading-wishlist add-wishlist");
      setTimeout(function () {
        $(".action--wishlist").removeClass("loading-wishlist");
      },1000);
      setTimeout(function () {
        $(".add-wishlist").removeClass("add-wishlist");
      },2000);

    });    

	
	
	
	
	/* preloader */
    $(window).on('load', function() {
      $('#preloader_active').fadeOut('slow');
    }); 
      
      
    /* Match Heigh */   
   
      $('.product-tile.wishlist-tile.product-item').matchHeight();
      $('.product-widget-item').matchHeight();
      $('.product-height').matchHeight();
      
      
      
    });

})(jQuery);



