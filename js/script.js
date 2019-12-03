var containerHeight;
var containerWidth;
var hexSize = 120;

$(document).ready(function () {
    calculateDimensions();
    generateGrid();
});

function generateGrid() {
    console.log("width: " +containerWidth);
    console.log("height: " +containerHeight);
    // for loop of rows.
    for(let i = 1; i < containerHeight; i++) {
        console.log('ROW: ' + i);
        for (let j = 1; j < containerWidth; j++) {
            console.log('COLUMN: ' + j);
            $('body').append("<svg viewbox='0 0 60 60'><path class='hex' id='" + j + "-" + i + "' d='M30 0L0 15L0 45L30 60L60 45L60 15L30 0Z'/></svg>");
        }
    }
        // inner for loop of columns.
}

function generateColumns() {
    // append div for containing row, and then append svgs as children of the row div.
    var bodyWidth = $('body').width();
    for(let i = 0; i < bodyWidth-120; i+=120)
    {
        
    }
}

function calculateDimensions() {
    containerHeight = $(window).height() / hexSize;
    containerWidth = $(window).width() / hexSize;
}