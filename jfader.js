(function($) {
	$.fn.jfader = function(params) { 
		params = $.extend( {
			nextButtonHTML: '<button class="jfader-btn-next">Next</button>', 
			prevButtonHTML: '<button class="jfader-btn-prev">Previous</button>'
		}, params);

		var carousel = $(this);

		carousel.find('li').hide();
		carousel.children('li:first').addClass('active').show();
		
		var nextButton = $(params.nextButtonHTML);
		var prevButton = $(params.prevButtonHTML);

		carousel.after(prevButton, nextButton);

		nextButton.click(function() { changeImage(carousel, 'forward') });
		prevButton.click(function() { changeImage(carousel, 'back') });
		
		return this;
	};

	function changeImage(carousel, direction) {
		var next = null;
		var active = carousel.find('li.active');
		var forward = direction === 'forward'; 
		next = forward ? active.next() : active.prev(); 
		if (next.length == 0) next = forward ? carousel.children('li:first') : carousel.children('li:last'); 

		active.fadeOut(function() {
			next.fadeIn();
			active.removeClass('active');
			next.addClass('active');
		});
	}

})(jQuery);
