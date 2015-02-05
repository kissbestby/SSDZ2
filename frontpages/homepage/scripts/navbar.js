jQuery(document).ready(function() {

	$(".banner_nav li").last().find("a").css("border", 0);

	$(".banner_nav li").hover(
		function(){
			var menu_title = $(this).find(".menu-title");
			menu_title.css("background-color", "#00468C");

			var prev_box = menu_title.parent().prev().find(".menu-title").find("a");
			prev_box.css("border-color", "transparent");

			menu_title.css("cursor", "pointer");
			menu_title.find("a").css("color", "#FFF");
			$(this).find(".menu").show();
		},
		function(){
			var menu_title = $(this).find(".menu-title");
			menu_title.css("background-color", "");

			var prev_box = menu_title.parent().prev().find(".menu-title").find("a");
			prev_box.css("border-color", "#00468C");

			menu_title.css("cursor", "default");
			menu_title.find("a").css("color", "#000");
			$(this).find(".menu").hide();
		});

	$(".menu-title").click(function() {
		window.location.href = $(this).find("a").attr("href");
	});

	$(".menu").width($(".banner_nav li").width() - 2);
});