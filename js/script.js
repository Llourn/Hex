const hexType = {
    WHITE: 'fill:url(#white)',
    BLACK: 'fill:url(#black)',
    WATER: 'fill:url(#water)',
    GRASS: 'fill:url(#grass)',
    MOUNTAIN: 'fill:url(#mountain)'
}

const mapSize = {
    SMALL: 1,
    MEDIUM: 2,
    LARGE: 3
}

var hexSize = 120;
var currentMapSize;
var hexRows;
var hexColumns;
var queuedHexType = 'fill:url(#black)';

$(document).ready(function () {
    currentMapSize = mapSize.LARGE;
    calculateDimensions();
    generateGrid();

    $('.hex').click(function(){
        $(this).attr('style', queuedHexType)
    });

    $('.hex').hover(function() {
        $(this).siblings('g').children('use').toggleClass('border-on');
    })
});

document.addEventListener("keydown", function(event) {
    switch (event.which) {
        case 49:
            queuedHexType = hexType.WHITE;
            break;
    
        case 50:
            queuedHexType = hexType.BLACK;
            break;
    
        case 51:
            queuedHexType = hexType.GRASS;
            break;
    
        case 52:
            queuedHexType = hexType.WATER;
            break;
    
        case 53:
            queuedHexType = hexType.MOUNTAIN;
            break;
    
        default:
            console.log('invalid hex type.');
            break;
    }
})

function generateGrid() {
    // for loop of rows.
    for(let i = 0; i < hexRows + 1; i++) {
        $('#container').append("<div class='hexRow' id='row-" + i + "'>");
        // inner for loop of columns.
        for (let j = 0; j < hexColumns + 1; j++) {
            $('#row-'+i).append("<svg viewbox='0 0 60 60'><path id='" + j + "-" + i + "' class='hex' style='fill:url(#white)' d='M30 0L0 15L0 45L30 60L60 45L60 15L30 0Z' /><g clip-path='url(#clipd23MBFcxtL)'><use xlink:href='#adlsVje2n' class='hex-hover' opacity='0' fill-opacity='0' stroke='#000000' stroke-width='6' stroke-opacity='1'/></g></svg>");
        }
    }
}

function grassFill() {

}

function calculateDimensions() {
    // Calculate container size based on chosen map size.
    switch (currentMapSize) {
        case mapSize.SMALL:
            hexColumns = hexRows = 10;
            break;
            
        case mapSize.MEDIUM:
            hexColumns = hexRows = 15;
            break;
            
        case mapSize.LARGE:
            hexColumns = hexRows = 20;
            break;
        
        default:
            console.log("ERROR, Map size invalid!");
            break;
        }
            
        updateContainerDimensions(hexRows, hexColumns);
}

function updateContainerDimensions(w, h) {
    var containerWidth = 120 * w;
    var containerHeight = 86 * h;

    $('#container').width(containerWidth);
    $('#container').height(containerHeight);
}