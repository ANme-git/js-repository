(function( $ ){

    var methods = {
        init : function( options ) { 
            var stuff = $.extend({
                'hideSpeed' : 500,
                'showSpeed' : 500,
                'startId'   : 0,
                'obj'       : this
            },content);
            
            var collect = stuff.obj.find('.accordeon-item');
            var heads =  stuff.obj.find('.accordeon-item .head');
            var texts =  stuff.obj.find('.accordeon-item .container');
            var maxParsedWidth = parseInt(stuff.obj.css('width')) - parseInt($(collect[0]).find('.head').css('width'))*collect.length;
        
        
            $(collect[stuff.startId]).find('.container').css('width',maxParsedWidth);
            
            heads.each(function(i){
                $(this).click(function(){
                    
                    if( parseInt($(texts[i]).css('width'))!=0 ) return true;
                    
                    $(texts).animate({
                        'width' : 0
                    },stuff.hideSpeed,function(){
                        $(texts[i]).animate({
                            'width' : maxParsedWidth
                        },stuff.showSpeed);
                    });
                    
                });
            });
        }
    };

    $.fn.accordeonPlugin = function( method ) {
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод с именем ' +  method + ' не существует для jQuery.accordeonPlugin' );
        } 
    };

})( jQuery );