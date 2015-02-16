jQuery(document).ready(
	function(){
		
		var objMain=$(".article").height();
		var objClNav=$(".cl_nav").height();
		var objYl=$(".yq_link").height();
		var temp=objMain - objClNav-objYl;	

		if (objMain<380) {
			var objMin=$(".cl").height();
			var a=objMin-objClNav-objYl;
			$(".autoheight").css('height',a);
		}	
		else{
		$(".autoheight").css('height',temp);
		}
		
    }
	);
	

