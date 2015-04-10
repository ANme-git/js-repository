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
    
    $('body').css('margin-top','50px');
    $('body').append('<div id="panel"></div>');
    $('#panel').css({
        'position':'fixed',
        'width':'100%',
        'height':'50px',
        'background':'#000',
        'top':'0',
        'left':'0',
        'background': '#707070',
        'background': '-moz-linear-gradient(top, #707070 0%, #303030 49%, #000000 50%, #443a3a 100%)',
        'background': '-webkit-gradient(linear, left top, left bottom, color-stop(0%,#707070), color-stop(49%,#303030), color-stop(50%,#000000), color-stop(100%,#443a3a))',
        'background': '-webkit-linear-gradient(top, #707070 0%,#303030 49%,#000000 50%,#443a3a 100%)',
        'background': '-o-linear-gradient(top, #707070 0%,#303030 49%,#000000 50%,#443a3a 100%)',
        'background': '-ms-linear-gradient(top, #707070 0%,#303030 49%,#000000 50%,#443a3a 100%)',
        'background': 'linear-gradient(to bottom, #707070 0%,#303030 49%,#000000 50%,#443a3a 100%)',
        'filter': 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#707070", endColorstr="#443a3a",GradientType=0 )'
    });
    $('#panel').append('<div class="logo"></div><div class="carousel"></div><div class="submit-button">Выбрать</div>');
    $('#panel .logo').css({
        'position' : 'absolute',
        'width':'100px',
        'height':'34px',
        'top' : '5px',
        'left' : '20px',
        'border' : '0',
        'background':'url(images/create_white.png)'
    });
    $('#panel .submit-button').css({
        'position':'absolute',
        'right':'20px',
        'top':'7px',
        'height':'35px',
        'line-height':'35px',
        'font-size':'16px',
        'color':'#fff',
        'padding':'0 10px',
        'border-radius': '5px',
        'cursor':'pointer',
        'background': '#49c0f0',
        'background': '-moz-linear-gradient(top, #49c0f0 0%, #2eb0e3 100%)',
        'background': '-webkit-gradient(linear, left top, left bottom, color-stop(0%,#49c0f0), color-stop(100%,#2eb0e3))',
        'background': '-webkit-linear-gradient(top, #49c0f0 0%,#2eb0e3 100%)',
        'background': '-o-linear-gradient(top, #49c0f0 0%,#2eb0e3 100%)',
        'background': '-ms-linear-gradient(top, #49c0f0 0%,#2eb0e3 100%)',
        'background': 'linear-gradient(to bottom, #49c0f0 0%,#2eb0e3 100%)',
        'filter': 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#49c0f0", endColorstr="#2eb0e3",GradientType=0 )'
    }).click(function(){
        sendMail();
    });
    

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


