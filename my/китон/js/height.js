// JavaScript Document

$(window).load(function(){

	var height_min = 0, height_max = 0;
	
	var height_span = $('.circle2.top .circle-no');
	height_span.each(function(i){
	
		height_min=parseInt($(this).css('height'));
	
	    if(height_max<height_min){
			height_max=height_min;
		}

	});
	
	height_span.each(function(i){
	
	$(this).css('height' , height_max);
		
	});
	
		var height_span = $('.circle2.bottom .circle-no');
	height_span.each(function(i){
	
		height_min=parseInt($(this).css('height'));

	    if(height_max<height_min){
			height_max=height_min;
		}

	});
	
	height_span.each(function(i){
	
	$(this).css('height' , height_max);
		
	});
	
});