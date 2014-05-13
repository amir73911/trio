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
        "images/backs/1.jpg",
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
    $(window).navigation();
    $('.nav-link').click(function(event){
        var href = event.target.hash,
            method = href.slice(1);

        $(window).navigation(method);

        event.preventDefault();
    });
}

(function( $ ){
    var methods = {
        init : function() {

            $('.site-page-main').show();
        },
        catalog : function() {
            $('.site-page-catalog').show();
        },
        hide : function() {

        }
    };

    $.fn.navigation = function( method ) {

        $('.site-page').hide();

        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод с именем ' +  method + ' не существует' );
        }
    };

})(jQuery);