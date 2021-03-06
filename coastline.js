
var other_coast = {
    world_coords: [
        [712, 578],
        [670, 605],
        [649, 609],
        [639, 597],
        [648, 594],
        [623, 590],
        [624, 611],
        [629, 615],
        [611, 670],
        [610, 710],
        [584, 713],
        [569, 714],
        [547, 729],
        [557, 735],
        [529, 748],
        [499, 749],
        [475, 749],
        [455, 741],
        [-65, 765],
        [-772, 731], // fake!
        [-773, -136],
        [-771, -239],
        [-782, -463],
        [-773, -620],
        [-772, -625],
        [-744, -687],
        [-544, -792],
        [-378, -786],
        [-367, -790],
        [-270, -782],
        [-125, -775],
        [-5, -772],
        [109, -771],
    ],
    fill: "none",
    stroke: {color: 'darkblue', width: '2px'}
};

var south_coast = {
    world_coords: [
        [765, -219],
        [777, -200],
        [778, -100],
        [786, -38],
        [775, -10],
        [750, 38],
        [753, 76],
        [741, 183],
        [729, 228],
        [695, 447],
    ],
    fill: "none",
    stroke: {color: 'darkblue', width: '2px'}
};

var taco_coast = {
    world_coords: [
        [109, -771],
        [666, -749], // fake!
        [748, -665],
        [781, -330],
        [772, -323],
        [761, -295],
        [765, -272],
        [765, -219],
    ],
    fill: "none",
    stroke: {color: 'darkblue', width: '2px'}
};


var coast_fill = {
    world_coords: [
    ],
    fill: "white",
    stroke: {color: 'darkblue', width: '2px'}
};

(function() {
    var x = coast_fill.world_coords;
    x.push.apply(x, taco_coast.world_coords);
    x.push.apply(x, south_coast.world_coords);
    x.push.apply(x, other_coast.world_coords);
})()
