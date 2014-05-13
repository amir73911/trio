$(function(){

    initGrid();
    initPositions();
    initNavigation();

    mainNavAnimate(); /* Главное меню */

    $(".actions-slider").royalSlider({
        imageScaleMode: "none",
        slidesSpacing: 0,
        loop: true,
        controlNavigation: "none",
        autoPlay: {
            enabled: true,
            pauseOnHover: true
        }
    });

    $('.catalog-slider').royalSlider({
        controlNavigation: 'thumbnails'
    })

    $.backstretch([
        //"images/backs/1.jpg",
        "images/backs/meri.jpg",
        "images/backs/parma.jpg"
    ], {duration: 4000, fade: 1000});

});

$(window).resize(function(){
    initPositions();
})

function initGrid() {
    var grid_size = 320/2;
    $( ".draggable" )
        .prepend('<div class="handler"></div>')
        .draggable({
            grid: [ grid_size, grid_size ],
            cursor: "move",
            helper: "original",
            handle: ".handler"
        });
}

function initPositions() {
    var win = $('.window'),
        el = $('.site-page-main .draggable'),
        grid = 320,
        w_count = Math.floor(win.width()/grid),
        h_count = Math.floor(win.height()/grid),
        top = grid*(h_count-1);

    el.each(function(index){
        $(this).css({
            'left': (grid*(w_count-(index+1)))-grid/2,
            'top': top
        })
    })
}


function mainNavAnimate() {
    var parent    = $('.main_nav');
    var opener    = parent.find('.opener');
    var ul_lev1   = parent.find('.level-1');
    var ul_lev2   = parent.find('.level-2');
    var drop      = parent.find('.drop');
    var droped_ul = drop.find('.level-2');

    parent.hover(function() {
        ul_lev1.fadeIn(200);
    }, function() {
        ul_lev1.fadeOut(200);
        ul_lev2.fadeOut(200);
    });

    drop.hover(function() {
        $(this).find('.level-2').stop(1,1).fadeIn(200);
    }, function() {
        $(this).find('.level-2').stop(1,1).fadeOut(200);
    });
}

function initNavigation() {

    $.fn.navigation('show', 'main');  //первый запуск

    $('.nav-link').click(function(event){
        var href = event.target.hash,
            openPage = href.slice(1),
            closePage = $('.site-page.active').attr('id');

        $.fn.navigation('close', closePage);
        $.fn.delay(5000).navigation('show', openPage);

        event.preventDefault();
    });
}

(function( $ ){
    var methods = {
        show : function(page) {
            switch (page) {
                case 'main':
                    $('.site-page-main').fadeIn(200).addClass('active');
                    $('.site-page-main .draggable').delay(200).fadeIn(200)
                    break;
                case 'catalog':
                    $('.site-page-catalog').delay(2000).fadeIn(200).addClass('active');
                    break;
            }
        },
        close : function(page) {
            switch (page) {
                case 'main':
                    $('.site-page-main .draggable').fadeOut(200);
                    $('.site-page-main').delay(200).fadeOut(200);
                    break;
                case 'catalog':
                    $('.site-page-catalog').fadeOut(200);
                    $('.site-page-main').delay(200).fadeOut(200);
                    break;
            }
        }
    };

    $.fn.navigation = function( method ) {

        $('.site-page').removeClass('active');

        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод с именем ' +  method + ' не существует' );
        }
    };

})(jQuery);