$(function(){

    initGrid();

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
            start: function() {
                $(this).removeClass(function (index, css) {
                    return (css.match (/\bpos-\S+/g) || []).join(' ');
                });
            }
        });
}