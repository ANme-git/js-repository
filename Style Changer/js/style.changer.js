$(function(){

  var head = $('head');
  var styles = $('link'), themes = new Array(), links = new Array();
  var curStyleIndex = 0;
  
      styles.each(function(i){
        var buff = this.outerHTML;
        buff = buff.split(' ');
        buff = buff[2].split('>');
        buff = buff[0].split('=');
        buff = buff[1].split('"');
          
        links.push(buff[1]);
          
        buff = buff[1].split('/');
        buff = buff[1].split('.');
        buff = buff[0];
          
        themes.push(buff);
      });
      
      console.log(themes);
      console.log(links);
    
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
      $('title').remove();
      head.append(styles[curStyleIndex].outerHTML);
      head.append('<title>' + themes[curStyleIndex] + '</title>');
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


