(function($){
	"use strict";

	// Sidebar Menu
	$('.sidebar-area ul li a').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 80);
        e.preventDefault();
    });

}(jQuery));