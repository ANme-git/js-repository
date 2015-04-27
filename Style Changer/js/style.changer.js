$(function(){

  var head = $('head');
  var styles = $('link'), themes = new Array(), links = new Array();
  var curStyleIndex = 1;
  
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
    
    console.log(styles);
    console.log(links);
    console.log(themes);
    
    $('body').css('margin-top','50px');
    $('body').append('<div id="panel"></div>');
    $('#panel').append('<div class="logo"></div><div class="carousel"></div><div class="submit-button">Выбрать</div>');
    $('#panel .submit-button').click(function(){
        sendMail();
    });
    $('#panel .carousel').append('<div class="left-arrow"></div><div class="lent"></div><div class="right-arrow"></div>');
    

  var sendMail = function(){
      var body = 'Выбрана тема оформления "'+themes[curStyleIndex]+'"%0A';
        body  += 'Это письмо составлено с помощью программы быстрого выбора тем оформления сайтов для компании "Аджика" и не требует ответа.'
      
      try{
          window.open('mailto:mourmourical@yahoo.com?subject=StyleChanger&body='+body);
          return true;
      }catch(Error){
          return false;
      }   
  }
    
  var changeStyle = function(){
    $('body').append('<sprite><p>Pls, wait until we change a style...</p></sprite>');
    $('body sprite').css({
      'display':'block',
      'position':'absolute',
      'left': '0',
      'top' : '50px',
      'right' : '0',
      'bottom': '0',
      'background':'#fff',
      'opacity':'0'
    });
    
    $('body sprite').animate({
      'opacity':'1'
    },300,function(){
      $('link').remove();
      head.append(styles[0].outerHTML); // always append StyleChanger.css for script GUI
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
  head.append(styles[0].outerHTML); // always append StyleChanger.css for script GUI
  head.append(styles[curStyleIndex].outerHTML);

  $(window).keypress(function(event){

  switch(event.charCode){
    case 44:{
      curStyleIndex--;
        if(curStyleIndex<1){
	   curStyleIndex = styles.length-1;
      }
    break;}
    case 46:{
      curStyleIndex++;
        if(curStyleIndex> styles.length-1){
	   curStyleIndex = 1;
      }
    break;}
  }
  changeStyle();

  });
  
  

});


