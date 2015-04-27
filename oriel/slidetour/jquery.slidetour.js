$(function(){
    
	var H;
    var classFlag = true;
    var current = 0;
    var collectItems = $('.slidetour-container .item');
    
    var init = function(){
        var FWDcollect = $('.slidetour-container .item .forward');
        H = parseInt($($('.item img')[current]).css('height'));
        $('.slidetour-container').css('height', H);
        $('.slidetour-container .item').css('height', H);
        if( classFlag ){
            FWDcollect.each(function(i){
                $(this).addClass('num'+i);
            });
            classFlag = false;
        }
		console.log('init',H);
    }
    
    $('.forward').click(function(){
		init();
        current++;
        $(collectItems).find('.forward').css('opacity','0');
        $(collectItems).find('.backward').css('opacity','0');
        $(collectItems[current]).css('display', 'block')
            .find('img').css({
            'left'   : $(collectItems[current-1]).find('.forward').css('left'),
            'top'    : $(collectItems[current-1]).find('.forward').css('top'),
            'width'  : $(collectItems[current-1]).find('.forward').css('width'),
            'opacity': $(collectItems[current-1]).find('.forward').css('height')
        }).animate({
            'left'   : '0%',
            'top'    : '0%',
            'width'  : '100%',
			'height' : H,
            'opacity': '1'
        },800,function(){
            $(collectItems).css('display','none');
            $(collectItems[current]).css('display', 'block');
        });
        $(collectItems[current]).find('.forward').animate({
                'opacity' : '1'
        },2500);
        $(collectItems[current]).find('.backward').animate({
                'opacity' : '1'
        },2500);
		
    });
    
    $('.backward').click(function(){
	if(current == 0) return;
        $(collectItems[current]).find('.forward').animate({
                'opacity' : '0'
        },800);
        $(collectItems[current]).find('.backward').animate({
                'opacity' : '0'
        },800);
            $(collectItems).css('display','none');
            $(collectItems[current-1]).css('display', 'block');
        
        $(collectItems[current]).css('display', 'block')
            .find('img').css({
            'left'   : '0%',
            'top'    : '0%',
            'width'  : '100%',
			'height' : H,
            'opacity': '1'
        }).animate({
            'left'   : $(collectItems[current-1]).find('.forward').css('left'),
            'top'    : $(collectItems[current-1]).find('.forward').css('top'),
            'width'  : $(collectItems[current-1]).find('.forward').css('width'),
			'height' : '0',
            'opacity': '0'
        },800);
        current--;
        $(collectItems[current]).find('.forward').animate({
                'opacity' : '1'
        },800);
        $(collectItems[current]).find('.backward').animate({
                'opacity' : '1'
        },800);
    });
    

    
    $(window).load(init());
    $(window).resize(function(){
        init();
    });
    
});
