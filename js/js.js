$(function(){

    initGrid();
    initPositions();
    initNavigation();

    mainNavAnimate(); /* Главное меню */
    openCatalogTwo(); /* Открытие подкаталога */
    salonsWork(); /* Открытие подкаталога */
    kitchensWork(); /* Открытие подкаталога */

    $('select').styler();
    //jQuery('.kit .inner').jScrollPane();

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

    /* Слайдер kitchens*/
//    $('.kitchen-slider')
//        .royalSlider({
//            loop: true,
//            autoScaleSlider: true,
//            imageScaleMode: "fit",
//            imageAlignCenter: false,
//            controlNavigation: 'thumbnails',
//            controlNavThumbsNavigation: false,
//            transitionType: 'fade',
//            thumbs: {
//                arrows: true,
//                spacing: 0,
//                orientation: 'vertical'
//            }
//        });

    // слайдер кухонь
    $('.kitchen-slider').royalSlider({
        controlNavigation: 'thumbnails',
        thumbs: {
            orientation: 'vertical',
            spacing: 0,
            arrows:	true,
            autoCenter: false,
            arrowsAutoHide: true
        },
        imageAlignCenter: false,
        imageScaleMode: "fill",
        transitionType:'fade',
        loop: true,
        arrowsNav: false
    });


    // слайдер акций
//    $('.bigactions-slider').royalSlider({
//        loop: true,
//        arrowsNav: true,
//        slides: $('.bigactions-slider .rsContent')
//    });


//    background slider
    $.backstretch([
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

    $(document).on('click', '.nav-link', (function(event){
        var href = event.target.hash,
            openPage = href.slice(1),
            closePage = $('.site-page.active').attr('id');

        if (openPage != closePage) {
            $.fn.navigation('close', closePage);
            $.fn.navigation('show', openPage);
        }
        event.preventDefault();
    }));
}

function openCatalogTwo() {
    var slider = $('.catalog-slider'),
        subslider = $('.subcatalog-slider-wrapper');


    subslider.find('.back_link').click(function(){
        subslider.fadeOut(600);
        slider.delay(200).fadeIn(400).animate({"transform": "rotate(-45deg)"}, 400);
        slider.find('.rsThumbs').delay(1000).fadeIn(300);
        slider.siblings('h2').delay(1000).fadeIn();
    });

    slider.on('click', '.link', function(){
        var subcatalogId = $(this).attr('id');

        slider.find('.rsThumbs').fadeOut(300);
        slider.delay(400).animate({"transform": "rotate(0deg)"}, 400).fadeOut(400).siblings('h2').fadeOut();

        subslider.delay(800).fadeIn(400)
    });

    slider.on('click', '.rsContent .head', function(){
        //var subcatalogId = $(this).attr('id');

        slider.find('.rsThumbs').fadeOut(300);
        slider.delay(400).animate({"transform": "rotate(0deg)"}, 400).fadeOut(400).siblings('h2').fadeOut();

        subslider.delay(800).fadeIn(400)
    });


}

function salonsWork() {
    var city_list = $('.city-list select'),
        city_select_btn = $('.city-list .btn'),
        start_selected_town = city_list.find('option:selected').text(),
        points = $('.site-page-salons .points a'),
        start_point = $('.site-page-salons .points a[alt="'+start_selected_town+'"]').addClass('selected'),
        options_str = '';

    // создаём набор option для селекта с городами
    points.each(function(){
        var town = $(this).attr('alt'),
            id = $(this).attr('id');
        options_str+='<option value="'+id+'">'+town+'</option>';
    });
    city_list.append(options_str);

    // при выборе города в селекте на карте обозначается выделенный город
    city_list.change(function(){
        var current_town = $(this).find('option:selected').text(),
            point = $('.site-page-salons .points a[alt="'+current_town+'"]');

        points.removeClass('selected');
        point.addClass('selected');
    });
    // инициализация при загрузке
    city_list.change();

    // при клике на город на карте в селекте выбирается выбранный город
    points.click(function(){
        var town = $(this).attr('alt'),
            id = $(this).attr('id'),
            options = city_list.find('option'),
            selected_option = city_list.find('option[value="'+id+'"]');

        options.removeAttr('selected');
        selected_option.attr('selected', 'selected');

        //обновляем плагин для стилизации селекта
        city_list.trigger('refresh').change();
    });

    // при клике на "Продолжить!" - анимация
    city_select_btn.click(function(e){
        e.preventDefault();
        var selected_town = city_list.find('option:selected').text(),
            selected_town_id = city_list.find('option:selected').val();


        $('.map-wrapper').fadeOut(400);
        $('.salons-slider-wrapper').delay(400).fadeIn(400);

        $('.salons-slider-wrapper .head .town').text(selected_town);
    });

    $('.other_town_link').click(function(e){
        e.preventDefault();
        $('.salons-slider-wrapper').fadeOut(400);
        $('.map-wrapper').delay(400).fadeIn(400);
    });

    $('.salons-slider').on('click', '.salons-content-slider',function(){
        $('.salons-slider-wrapper').fadeOut(400);
        $('.salon-images-slider-wrapper').delay(400).fadeIn(400);
    });

    $('.salon-images-slider-wrapper .close').click(function(){
        $('.salon-images-slider-wrapper').fadeOut(400);
        $('.salons-slider-wrapper').delay(400).fadeIn(400);
    });
}

function kitchensWork(){
    $('.kitchens_nav .kitchens-link').click(function(e){
        e.preventDefault();

        var href = e.target.hash.slice(1);

        $('.info-wrapper .info-item').fadeOut();
        $('.info-wrapper .'+href).fadeIn();
        $('.info-wrapper .back').fadeIn();

    });

    $('.info-wrapper .about .close').click(function(e){
        $('.info-wrapper .about').fadeOut();
        $('.info-wrapper .back').fadeOut();
    });

    $('.info-wrapper .kit .close').click(function(e){
        $('.info-wrapper .kit').fadeOut();
        $('.info-wrapper .back').fadeOut();
    });

    $('.info-wrapper .metering .close').click(function(e){
        $('.info-wrapper .metering').fadeOut();
        $('.info-wrapper .back').fadeOut();
    });
}


(function( $ ){
    var methods = {
        show : function(page) {
            switch (page) {
                case 'main':
                    $('.site-page-main').fadeIn(200).addClass('active');
                    $('.site-page-main .draggable').delay(200).fadeIn(200);
                    if ($('.main_nav').hasClass('active')) {$('.main_nav').fadeOut(200).removeClass('active');}
                    break;
                case 'catalog':
                    $('.site-page-catalog').delay(300).fadeIn(200).addClass('active');
                    if (!$('.main_nav').hasClass('active')) {$('.main_nav').delay(300).fadeIn(200).addClass('active');}
                    break;
                case 'salons':
                    $('.site-page-salons').delay(300).fadeIn(200).addClass('active');
                    if (!$('.main_nav').hasClass('active')) {$('.main_nav').delay(300).fadeIn(200).addClass('active');}
                    break;
                case 'partners':
                    $('.site-page-partners').delay(300).fadeIn(200).addClass('active');
                    if (!$('.main_nav').hasClass('active')) {$('.main_nav').delay(300).fadeIn(200).addClass('active');}
                    break;
                case 'about':
                    $('.site-page-about').delay(300).fadeIn(200).addClass('active');
                    if (!$('.main_nav').hasClass('active')) {$('.main_nav').delay(300).fadeIn(200).addClass('active');}
                    break;
                case 'kitchens':
                    $('.site-page-kitchens').delay(300).fadeIn(200).addClass('active');
                    if (!$('.main_nav').hasClass('active')) {$('.main_nav').delay(300).fadeIn(200).addClass('active');}
                    var kitchenSlider = $('.kitchen-slider').data('royalSlider');
                    setInterval(function() {
                        kitchenSlider.updateSliderSize(true);
                        $('.info-wrapper').width($('.kitchen-slider .rsOverflow').width());
                    }, 500);
                    break;
                case 'actions':
                    $('.site-page-actions').delay(300).fadeIn(200).addClass('active');
                    if (!$('.main_nav').hasClass('active')) {$('.main_nav').delay(300).fadeIn(200).addClass('active');}

//                    var bigactionsSlider = $('.bigactions-slider').data('royalSlider');
//                    setInterval(function() {
//                        bigactionsSlider.updateSliderSize(true);
//                        $('.info-wrapper').width($('.bigactions-slider .rsOverflow').width());
//                    }, 500);
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
                case 'kitchens':
                    $('.site-page-kitchens').fadeOut(200);
                    break;
                case 'actions':
                    $('.site-page-actions').fadeOut(200);
                    break;
                case 'partners':
                    $('.site-page-partners').fadeOut(200);
                    break;
                case 'about':
                    $('.site-page-partners').fadeOut(200);
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