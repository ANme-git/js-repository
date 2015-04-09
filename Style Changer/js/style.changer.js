$(function(){

  var head = $('head');
  var styles = $('link');
  var curStyleIndex = 0;
  
  var changeStyle = function(){
    
    $('body').append('<sprite><p>Pls, wait until we change a style...</p></sprite>');
    $('body sprite').css({
      'display':'block',
      'position':'absolute',
      'left': '0',
      'top' : '0',
      'right' : '0',
      'bottom': '0',
      'background':'#fff',
      'opacity':'0'
    });
    
    $('body sprite').animate({
      'opacity':'1'
    },300,function(){
      $('link').remove();
      head.append(styles[curStyleIndex].outerHTML);
      
    });
    
    $('body sprite').animate({
      'opacity':''
    },300,function(){
      $('body sprite').remove();    
    });

    
    
  }
  
  $('link').remove();

  // ставим начальный стиль
  head.append(styles[curStyleIndex].outerHTML);

  $(window).keypress(function(event){

  switch(event.charCode){
    case 44:{
      curStyleIndex--;
      if(curStyleIndex<0){
	curStyleIndex = styles.length-1;
      }
    break;}
    case 46:{
      curStyleIndex++;
      if(curStyleIndex> styles.length-1){
	curStyleIndex = 0;
      }
    break;}
  }
  changeStyle();

  });
  
  

});


