$(function(){

    initGrid();
    initPositions();

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
        "http://dl.dropbox.com/u/515046/www/garfield-interior.jpg",
        "http://dl.dropbox.com/u/515046/www/cheers.jpg"
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