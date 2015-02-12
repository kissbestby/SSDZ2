jQuery(document).ready(function($) {
	var length = $('.summery-title p').children('span').width();
	var time_spent = 3000; // Milliseconds

	$('.summery-title p').on({
		mouseenter: function () {
			$(this).css('overflow', 'visible');
			$(this).animate({
				left: "-="+length
			}, time_spent, function () {
				$(this).css({
					left: 0,
					top: 0
				});
			});
		},
		mouseout: function() {
			$(this).css('overflow', 'hidden');
			$(this).css({
				left: 0,
				top: 0
			});
		}
	});
});