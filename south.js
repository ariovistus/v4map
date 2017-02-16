
var conifer_fill = "#bfcfbf";

var rocky_lake = {
    title: "Rocky Lake",
    world_coords: [
        [676, 77],
        [677, 83],
        [679, 87],
        [677, 90],
        [672, 91],
        [667, 92],
        [665, 90],
        [666, 87],
        [670, 82],
        [673, 79],
        [676, 77],
    ],
    fill: "skyblue",
    stroke: {color: 'darkblue', width: '1px'}
};


var scrubby_lake = {
    title: "some scrubby lake",
    world_coords: [
        [547, 650],
        [546, 652],
        [545, 651],
        [544, 650],
        [544, 648],
        [545, 647],
        [547, 649],
        [547, 650],
    ],
    fill: "skyblue",
    stroke: {color: 'darkblue', width: '1px'}

};

var scrubby_lake2 = {
    title: "another scrubby lake",
    world_coords: [
        [556, 660],
        [554, 661],
        [552, 659],
        [552, 657],
        [555, 657],
        [558, 659],
        [558, 660],
        [556, 660],
    ],
    fill: "skyblue",
    stroke: {color: 'darkblue', width: '1px'}

};

var box_lake = {
    title: "Box Lake",
    world_coords: [
        [651, 480],
        [658, 474],
        [656, 465],
        [652, 461],
        [645, 461],
        [639, 471],
        [641, 479],
        [651, 480],
    ],
    fill: "skyblue",
    stroke: {color: 'darkblue', width: '1px'}

};

var box_lake_cliffs = {
    world_coords: [
        [645, 451],
        [635, 454],
        [634, 468],
        [629, 472],
        [633, 488],
        [654, 491],
    ],
    fill: "none",
    stroke: {color: 'gray', width: '1px'},
};

var box_lake_route = {
    waypoints: [
        [655, 482],
        [654, 485],
    ],
    route: [
        [655, 482],
        [654, 485],
    ],
    waypointRadius: 5,
    waypointFill: "yellow",
    waypointStroke: {color: 'red', width: '1px'},
    routeStroke: {color: 'red', width: '1px', 'dasharray': '2,3'},
};


var sw_canyon_edge1 = {
    world_coords: [
        [380, 578],
        [367, 590],
        [329, 600],
        [302, 586],
        [298, 566],
        [288, 552],
        [279, 548],
        [265, 563],
        [257, 570],
        [228, 570],
        [213, 558],
    ],
    fill: "none",
    stroke: {color: 'gray', width: '1px'}
};

var sw_canyon_edge2 = {
    world_coords: [
        [214, 547],
        [238, 559],
        [248, 561],
        [255, 555],
        [260, 543],
        [267, 538],
        [282, 536],
        [294, 547],
        [313, 561],
        [324, 585],
        [335, 588],
        [358, 583],
        [372, 572],
        [389, 562],
    ],
    fill: "none",
    stroke: {color: 'gray', width: '1px'}
};

var forest_sw_edge1 = {
    world_coords: [
        [232, 524],
        [276, 509],
        [320, 519],
        [342, 503],
        [349, 498],
        [356, 503],
        [359, 508],
        [351, 520],
        [359, 534],
        [379, 541],
        [391, 520],
        [402, 501],
        [396, 480],
        [409, 463],
        [418, 478],
        [413, 488],
        [414, 500],
        [434, 512],
        [435, 532],
        [450, 537],
        [460, 527],
        [477, 527],
        [483, 531],
        [481, 517],
        [487, 505],
        [461, 497],
        [471, 484],
        [465, 474],
        [481, 466],
        [475, 443],
        [486, 455],
        [496, 460],
        [489, 486],
        [494, 496],
        [509, 498],
        [507, 492],
        [527, 491],
    ],
    fill: "none",
    stroke: {color: 'green', width: '1px'},
};

var forest_sw_edge2 = {
    world_coords: [
        [527, 491],
        [545, 447],
        [557, 435],
        [555, 406],
        [573, 393],
        [554, 382],
        [531, 389],
        [525, 376],
        [536, 369],
        [511, 331],
        [516, 313],
        [510, 292],
        [500, 295],
        [487, 281],
        [487, 267],
        [495, 260],
        [500, 271],
        [509, 267],
        [507, 234],
        [497, 229],
        [487, 215],
        [503, 207],
        [508, 213],
        [520, 209],
        [529, 202],
        [537, 198],
        [539, 193],
        [529, 182],
        [518, 181],
        [507, 175],
        [508, 170],
        [520, 151],
        [530, 144],
        [538, 131],
        [539, 119],
        [514, 100],
        [524, 94],
        [532, 104],
        [560, 114],
        [565, 94],
        [579, 105],
        [602, 88],
        [597, 56],
        [594, 31],
        [606, 3],
        [623, -13],
        [637, -27],
        [629, -36],
        [631, -41],
        [650, -38],
        [667, -43],
        [685, -27],
        [700, -39],
        [696, -54],
        [679, -65],
        [673, -82],
        [681, -86],
        [696, -76],
        [707, -87],
        [701, -98],
        [690, -109],
        [695, -115],
        [633, -188],
        [653, -198],
        [678, -201],
        [708, -190],
        [707, -209],
        [668, -204],
        [654, -210],
    ],
    fill: "none",
    stroke: {color: 'green', width: '1px'},
};

var sw_bridge = {
    world_coords: [
        [288, 552],
        [294, 547],
    ], 
    fill: "none",
    stroke: {color: 'orange', width: '2px'},
};

var shelter_lake = {
    title: "Shelter Lake",
    world_coords: [
        [468, 543],
        [469, 546],
        [467, 548],
        [457, 549],
        [455, 547],
        [457, 544],
        [462, 542],
        [467, 541],
        [468, 543],
    ],
    fill: "skyblue",
    stroke: {color: 'darkblue', width: '1px'}
};

var blue_lake = {
    title: "Blue Lake",
    world_coords: [
        [576, 447],
        [575, 451],
        [580, 451],
        [580, 448],
        [579, 446],
        [576, 447],
    ],
    fill: "skyblue",
    stroke: {color: 'darkblue', width: '1px'}
};

var galli_forest1 = {
    world_coords: [
        [234, 572],
        [244, 587],
        [263, 586],
        [278, 596],
        [309, 603],
        [335, 603],
        [360, 602],
        [379, 594],
        [384, 580],
        [398, 569],
        [405, 574],
        [417, 570],
        [427, 576],
        [446, 600],
        [473, 600],
        [495, 590],
        [504, 584],
        [549, 558],
        [550, 530],
        [541, 496],
    ],
    fill: "none",
    stroke: {color: 'green', width: '1px'}
};

var galli_forest2 = {
    world_coords: [
        [541, 496],
        [563, 489],
        [594, 465],
        [599, 449],
        [607, 444],
        [611, 465],
        [633, 491],
        [647, 501],
        [661, 493],
        [671, 484],
        [666, 459],
    ],
    fill: "none",
    stroke: {color: 'green', width: '1px'}
};

var k_road = {
    world_coords: [
        [662, 453],
    ],
    fill: "none",
    stroke: {color: 'orange', width: '1px'}
};

var k2_road = {
    world_coords: [
            [441, 574],
            [426, 552],
            [425, 545],
            [423, 534],
            [414, 505],
            [407, 485],
            [408, 466],
            [416, 441],
            [405, 423],
    ],
    fill: "none",
    stroke: {color: 'orange', width: '1px'}
};

var k3_road = {
    world_coords: [
            [407, 485],
            [417, 483],
            [434, 466],
            [431, 451],

    ],
    fill: "none",
    stroke: {color: 'orange', width: '1px'}
};

var k4_road = {
    world_coords: [
            [358, 490],
            [354, 507],
        //crossroads
            [345, 523],
            [361, 548],
            [386, 551],
            [407, 564],
            [418, 561],
            [426, 573],
            [441, 574],
            [454, 583],
    [485, 599],
    [502, 585],
    [545, 555],
    [550, 552],
    [580, 539],
        [605, 561],

    ],
    fill: "none",
    stroke: {color: 'orange', width: '1px'}
};

var k5_road = {
    world_coords: [
        [299, 533], // crossroads
        [294, 547],
        [288, 552],
        [277, 573],
        [277, 592],
        [269, 603],
    ],
    fill: "none",
    stroke: {color: 'orange', width: '1px'}
};

var k6_road = {
    world_coords: [
        [201, 529],
        [231, 531], 
        [271, 517], 
        [276, 509], 
    ],
    fill: "none",
    stroke: {color: 'orange', width: '1px'}
};

var spino_road = {
    world_coords: [
        [731, -196],
        [728, -170],
        [744, -127],
        [752, -103],
        [745, -74],
        [746, -50],
        [750, -18],
        [728, 15],
        [683, 49],
        [681, 64],
    ],
    fill: "none",
    stroke: {color: 'orange', width: '1px'}
};

var galli_road1 = {
    world_coords: [
        [624, 483],
        [639, 503],
        [643, 522],
        [654, 543],
        [654, 554],
        [618, 552],
        [605, 561],
        [608, 591],
        [595, 606],
        [569, 644],
        [550, 651],
    ],
    fill: "none",
    stroke: {color: 'orange', width: '1px'}
};

var galli_road2 = {
    world_coords: [
        [345, 523],
        [319, 530], 
        [291, 534], 
        [271, 517], 
    ],
    fill: "none",
    stroke: {color: 'orange', width: '1px'}
};

var forest_south_fill = {
    world_coords: [],
    fill: conifer_fill,
    stroke: {color: 'orange', width: '0px'}
};

(function() {
    var x = forest_south_fill.world_coords;
    x.push.apply(x, forest_sw_edge2.world_coords); 
    x.push.apply(x, south_coast.world_coords); 
    var y = [].concat(galli_forest2.world_coords);
    y.reverse();
    x.push.apply(x, y); 
})();
