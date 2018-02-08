(function($) {
'use strict';

	var window_def_height = $( window ).height();

	$(document).ready(function() {
		$('.nvx_parallax').each(function() {
			var nvx_padding = $(this).data('nvxpadding');
			$(this).find('.nvx_parallax_content').css('padding',nvx_padding+'% 0');
		});
	});

	$(window).on('scroll resize',function(){
		if($(window).width() > 800) {
			$('.nvx_parallax').each(function() {
				var window_def_height = $( window ).height();
				if($(window).scrollTop() >= ($(this).offset().top-window_def_height)) {
					$(this).css({ backgroundPosition: '50%'+ -(($(window).scrollTop() - $(this).offset().top) / 2.5) + 'px' });
				}
			});
		}
	});

})(jQuery);
