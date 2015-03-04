// JavaScript Document
$(function(){
	
	var img_len=$(".width ul li img").length;
	var page=0;
	var width=$(".width").width();
	var $li=$(".width ul li")
	for(var i=0;i<img_len;i++){
	var a=i-1;
	$(".width ul li:eq("+i+")").css("left",a*width+"px")
	}
	slide_bool=true
	var move1;
	var move=window.setInterval(slide,4000);
	function slide(){
		$li.stop();
		page++;
		if(page==img_len-1){
			for(var i=0;i<img_len;i++){
				
			page=0;
			var a=i-1;
			$(".width ul li:eq("+i+")").css("left",a*width+"px")
			}}
		else{$li.animate({left:'-='+width+"px"},1000
		)}
	}
	$(".next").click(function(){
		window.clearInterval(move);
		
		page++;
		if(page==img_len-1){
			for(var i=0;i<img_len;i++){
			page=0;
			var a=i-1;
			
			$(".width ul li:eq("+i+")").css("left",a*width+"px")
			/*$(".width ul li:eq("+i+")").animate({left:a*width+"px"},100)*/
			}
			
		}
		else{$li.animate({left:'-='+width+"px"},500)}
	})
	$(".prev").click(function(){
		window.clearInterval(move);
		page--;
		if(page==-1){
			for(var i=0;i<img_len;i++){
			page=5;
			var a=i-5;
			$(".width ul li:eq("+i+")").css("left",a*width+"px")
			/*$(".width ul li:eq("+i+")").animate({left:a*width+"px"},500)*/
			}
			
		}
		else{$li.animate({left:'+='+width+"px"},500)}
		
	
	})
})
