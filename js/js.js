$(function(){

    initGrid();

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

});

function initGrid() {
    var grid_size = 320/2;
    $( ".draggable" )
        .prepend('<div class="handler"></div>')
        .draggable({
            grid: [ grid_size, grid_size ],
            //containment: ".window",
            cursor: "move",
            handle: ".handler",
            stack: ".draggable",
            start: function() {
                $(this).removeClass(function (index, css) {
                    return (css.match (/\bpos-\S+/g) || []).join(' ');
                });
            }
        });
}