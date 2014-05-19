$(function(){

    initGrid();
    initPositions();
    initNavigation();

    mainNavAnimate(); /* Главное меню */
    openCatalogTwo(); /* Открытие подкаталога */

    $('select').styler();

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

    /* Слайдер каталога */
    $('.catalog-slider')
        .royalSlider({
            controlNavigation: 'thumbnails',
            arrowsNav: false,
            navigateByClick: false,
            controlNavThumbsNavigation: false,
            loop: true,
            thumbs: {
                arrows: false,
                spacing: 0
            },
            slides: $('.catalog-slider .rsContent')
        });

    $('.catalog-slider').find('.rsThumbs').clone(true, true).addClass('add-thumbs').appendTo('.catalog-slider');
    var catalogSlider = $('.catalog-slider').data('royalSlider');
    catalogSlider.ev.on('rsAfterSlideChange', function(event) {
        var el = $('.catalog-slider').find('.rsThumbs').eq(0).find('.rsThumbsContainer');
        var el2 = $('.catalog-slider').find('.rsThumbs.add-thumbs').find('.rsThumbsContainer');
        el2.attr('style', el.attr('style'));
    });

    /* Слайдер подкаталога */
    $('.subcatalog-slider')
        .royalSlider({
            controlNavigation: 'thumbnails',
            arrowsNav: false,
            navigateByClick: false,
            controlNavThumbsNavigation: false,
            loop: true,
            thumbs: {
                arrows: false,
                spacing: 0
            },
            transitionSpeed: 400,
            slides: $('.subcatalog-slider .rsContent')
        });
    $('.subcatalog-slider').find('.rsThumbs').clone(true, true).addClass('add-thumbs').appendTo('.subcatalog-slider');
    $('.subcatalog-slider').append('<div class="arrow left"></div><div class="arrow right"></div>');
    var subcatalogSlider = $('.subcatalog-slider').data('royalSlider');
    subcatalogSlider.ev.on('rsAfterSlideChange', function(event) {
        var el = $('.subcatalog-slider').find('.rsThumbs').eq(0).find('.rsThumbsContainer');
        var el2 = $('.subcatalog-slider').find('.rsThumbs.add-thumbs').find('.rsThumbsContainer');
        el2.attr('style', el.attr('style'));
    });
    $('.subcatalog-slider .left').click(function(){subcatalogSlider.prev()});
    $('.subcatalog-slider .right').click(function(){subcatalogSlider.next()});

    /* Слайдер салонов */
    $('.salons-slider')
        .royalSlider({
            controlNavigation: 'thumbnails',
            arrowsNav: false,
            navigateByClick: false,
            controlNavThumbsNavigation: false,
            loop: true,
            thumbs: {
                arrows: false,
                spacing: 0
            },
            slides: $('.salons-slider .rsContent')
        });
    $('.salons-slider').find('.rsThumbs').clone(true, true).addClass('add-thumbs').appendTo('.salons-slider');
    var catalogSlider = $('.salons-slider').data('royalSlider');
    catalogSlider.ev.on('rsAfterSlideChange', function(event) {
        var el = $('.salons-slider').find('.rsThumbs').eq(0).find('.rsThumbsContainer');
        var el2 = $('.salons-slider').find('.rsThumbs.add-thumbs').find('.rsThumbsContainer');
        el2.attr('style', el.attr('style'));
    });

    /* Слайдер изображений салона*/
    $('.salon-images-slider')
        .royalSlider({
            loop: true,
            imageScaleMode: "none",
            imageAlignCenter: false,
            controlNavigation: 'none',
            arrowsNavAutoHide: false
        });

//    $.backstretch([
//        "images/backs/meri.jpg",
//        "images/backs/parma.jpg"
//    ], {duration: 4000, fade: 1000});

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
    $.fn.navigation('show', 'salons');  //первый запуск

    $('.nav-link').click(function(event){
        var href = event.target.hash,
            openPage = href.slice(1),
            closePage = $('.site-page.active').attr('id');

        if (openPage != closePage) {
            $.fn.navigation('close', closePage);
            $.fn.navigation('show', openPage);
        }
        event.preventDefault();
    });
}

function openCatalogTwo() {
    $('.catalog-slider').on('click', '.link', function(){
        var slider = $('.catalog-slider'),
            subslider = $('.subcatalog-slider-wrapper');
            subcatalogId = $(this).attr('id');

        slider.find('.rsThumb').fadeOut(300);
        slider.delay(400).animate({"transform": "rotate(0deg)"}, 400).fadeOut(400).siblings('h2').fadeOut();

        subslider.delay(800).fadeIn(400)
    });
}


(function( $ ){
    var methods = {
        show : function(page) {
            switch (page) {
                case 'main':
                    $('.site-page-main').fadeIn(200).addClass('active');
                    $('.site-page-main .draggable').delay(200).fadeIn(200);
                    break;
                case 'catalog':
                    $('.site-page-catalog').delay(300).fadeIn(200).addClass('active');
                    break;
                case 'salons':
                    $('.site-page-salons').delay(300).fadeIn(200).addClass('active');
                    break;
            }
        },
        close : function(page) {
            switch (page) {
                case 'main':
                    $('.site-page-main .draggable').fadeOut(200);
                    $('.site-page-main').fadeOut(200);
                    break;
                case 'catalog':
                    $('.site-page-catalog').fadeOut(200);
                    break;
                case 'salons':
                    $('.site-page-salons').fadeOut(200);
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