// JavaScript Document

$(function(){

console.clear();
	
	var color1 = new Array();
	var oll = $('body *');
	
	var color_collection = new Array();
	var n = 0; // номер коллекции
	
	var max_elements = oll.length;
	console.log('max: ',max_elements);
	console.log('n: ',n);	
		
	oll.each(function(index){
		
		var obj = $(this);
		
		color_collection[n] = new Array();
		var poher = $(this).css('background-color');
		if( !color1[n] ){
			color1[n] = poher;	
			
		}
		
		if( color1[n] == poher ){
			console.log(color1[n], poher);
			color_collection[n][index] = obj;
		}
		
	});
	
	console.dir(color_collection);


});