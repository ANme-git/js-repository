(function( $ ){

    var methods = {
        init : function( options ) { 
        },
        fix : function( content ) {
            var stuff = $.extend({
                'listenTarget' : false, // эталонный объект
                'listenAttr'   : false, // массив атриьбутов
                'useAnimation' : false, // флаг анимации
                'animationQ'   : false, // флаг очереди анимаций
                'animationDel' : false, // время анимации в милисекундах
                'obj'          : this
            },content);
            
            if( !stuff.animationDel ) { stuff.animationDel = 1000; }
            if( stuff.useAnimation ){
                stuff._animationObj = new Object();
                for(i=0;i<stuff.listenAttr.length;i++){
                    var key = stuff.listenAttr[i];
                    var value = stuff.listenTarget.css(stuff.listenAttr[i])
                    
                    switch(key){ // стэк параметров анимации
                        case 'height'   :{ stuff._animationObj.height = value; break;}
                        case 'width'    :{ stuff._animationObj.width = value; break;}
                    }
                    
                } 
            }
            
            if( stuff.listenAttr ){                                                                                    // если есть список атрибутов
                if( stuff.listenTarget ){                                                                              // если исходный элемент существует
                    if( !stuff.useAnimation ){                                                                         // если без анимации
                        for(i=0;i<stuff.listenAttr.length;i++){
                            stuff.obj.css(stuff.listenAttr[i], stuff.listenTarget.css(stuff.listenAttr[i]) );
                        }
                    }else{                                                                                             // если с анимацией
                        if( stuff.animationQ ){                                                                        // если используем очередь
                            
                        }else{                                                                                         // если без очереди
                            stuff.obj.animate(stuff._animationObj,stuff.animationDel);
                        }
                    }
                }
            }
            
            console.dir(stuff);
            
            console.info('fix ' + stuff.obj.selector + ' (',stuff.listenAttr,') ');    
        }
    };

    $.fn.fixPlugin = function( method ) {
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод с именем ' +  method + ' не существует для jQuery.fixPlugin' );
        } 
    };

})( jQuery );