
var redwood_fill = "#deb887";

var canyon_lake = {
    title: "Canyon Lake",
    world_coords: [
        [148, -429],
        [150, -432],
        [150, -436],
        [147, -440],
        [145, -441],
        [142, -446],
        [138, -447],
        [135, -447],
        [133, -445],
        [132, -443],
        [131, -438],
        [133, -433],
        [137, -429],
        [141, -428],
        [144, -428],
        [148, -429],
    ],
    fill: "skyblue",
    stroke: {color: 'darkblue', width: '1px'}
};

var cactus_lake = {
    title: "Deep Lake",
    world_coords: [
        [-46, -522],
        [-44, -522],
        [-42, -520],
        [-37, -519],
        [-31, -529],
        [-34, -531],
        [-38, -529],
        [-38, -536],
        [-43, -535],
        [-46, -536],
        [-48, -539],
        [-52, -539],
        [-48, -536],

    ],
    fill: "skyblue",
    stroke: {color: 'darkblue', width: '1px'}
};


var iits_lake_outline = {
    title: "Island in the Sky Lake",
    world_coords: [
        [451, -261],
        [451, -249],
        [444, -249],
        [444, -260],
        [450, -267],
        [451, -261],
    ],
    fill: "skyblue",
    stroke: {color: 'darkblue', width: '1px'}
};


// north of box lake
var redwood_canyon_outline = {
    world_coords: [
        [135, -415], 
        [123, -424], 
        [119, -442], 
        [122, -448], 
        [119, -454], 
        [105, -456], 
        [94, -462], 
        [83, -461], 
        [64, -445], 
        [68, -437], 
        [73, -438], 
    ],
    fill: "none",
    stroke: {color: 'gray', width: '1px'}
};

var redwood_canyon_jut = { 
    world_coords: [
        [305, -327],
        [300, -332],
        [293, -333],
        [292, -336],
        [295, -339],
        [299, -338],
        [300, -332],
    ],
    fill: "none",
    stroke: {color: 'gray', width: '1px'}
};

var redwood_canyon2_outline = {
    world_coords: [
        [479, -26],
        [472, -33],
        [465, -57],
        [462, -65],
        [463, -73],
        [457, -81],
        [460, -72],
        [454, -67],
        [448, -70],
        [429, -122],
        [428, -136],
        [416, -151],
        [392, -156],
        [381, -157],
        [374, -166],
        [318, -174],
        [337, -190],
        [357, -217],
        [341, -250],
        [338, -284],
        [330, -296],
        [342, -314],
        [310, -327],
        [305, -327],
        [312, -338],
        [304, -344],
        [303, -354],
        [342, -354],
        [358, -330],
        [365, -326],
        [379, -313],
        [402, -313],
        [422, -308],
        [435, -307],
        [444, -314],
        [445, -325],
        [467, -337],
        [481, -334],
        [481, -325],
        [483, -324],
        [487, -325],
        [492, -332],
        [501, -335],
        [522, -360],
        [524, -363],
        [523, -368],
        [518, -377],
        [510, -425],
        [489, -432],
        [437, -460],
        [429, -464],
        [421, -473],
        [417, -488],
        [400, -506],
        [384, -511],
        [375, -520],
        [368, -523],
        [363, -535],
        [366, -552],
        [369, -564],
        [366, -579],
    ],
    fill: "none",
    stroke: {color: 'gray', width: '1px'}
};

var redwood_canyon3_outline = {
    world_coords: [
        [366, -579],
        [348, -609],
        [332, -612],
        [323, -608],
        [290, -615],
        [279, -612],
        [262, -617],
        [237, -613],
        [223, -617],
    ],
    fill: "none",
    stroke: {color: 'gray', width: '1px'}
};
var redwood_canyon4_outline = {
    world_coords: [
        [497, -14],
        [494, 4],
        [479, -26],
    ],
    fill: "none",
    stroke: {color: 'gray', width: '1px'}
};

var redwood_outline = {
    world_coords: [
        [135, -415], 
        [130, -412], 
        [128, -345],
        [126, -276],
        [121, -186],
        [134, -185],
        [132, -172],
        [135, -161],
        [146, -136],
        [177, -97],
        [183, -86],
        [194, -74],
        [202, -64],
        [200, -54],
        [205, -48],
        [224, -32],
        [224, -25],
        [237, -22],
        [244, -10],
        [240, 0],
        [264, 0],
        [274, -3],
        [282, -6],
        [287, -5],
        [301, 0],
        [364, 0],
        [402, -1],
        [410, -8],
        [408, -46],
        [403, -54],
        [401, -62],
    ],
    fill: "none",
    stroke: {color: 'darkgreen', width: '1px'}
};

var redwood_entrance4_route = {
    waypoints: [
        [397, -72],
        [418, -61],
    ],
    route: [
        [397, -72],
        [407, -66],
        [409, -64],
        [418, -61],
    ],
    waypointRadius: 5,
    waypointFill: "yellow",
    waypointStroke: {color: 'red', width: '1px'},
    routeStroke: {color: 'red', width: '1px', 'dasharray': '2,3'},
};


var cactus_to_canyon2 = {
    waypoints: [
        [153, -445],
        [357, -526],
        [55, -562],
    ],
    route: [
        [153, -445],
        [219, -512],
        [247, -530],
        [293, -531],
        [306, -513],
        [357, -526],
        [353, -542],
        [362, -559],
        [359, -586],
        [344, -600],
        [325, -601],
        [298, -610],
        [273, -606],
        [253, -609],
        [241, -606],
        [218, -612],
        [202, -612],
        [193, -602],
        [150, -601],
        [136, -605],
        [119, -604],
        [83, -576],
        [55, -562],
    ],
    waypointRadius: 10,
    waypointFill: "yellow",
    waypointStroke: {color: 'red', width: '1px'},
    routeStroke: {color: 'red', width: '1px', 'dasharray': '5,10'},
};

var box_canyon_route1 = {
    waypoints: [
        [-48, -207],
        [-108, -335],
    ],
    route: [
        [-48, -207],
        [-108, -335],
        [-5, -429],
        [54, -445],
        [63, -453],
        [86, -471],
        [131, -464],
        [140, -435],
    ],
    waypointRadius: 10,
    waypointFill: "yellow",
    waypointStroke: {color: 'red', width: '1px'},
    routeStroke: {color: 'red', width: '1px', 'dasharray': '5,10'},
};

var iits_route1 = {
    waypoints: [
        [450, 0],
    ],
    route: [
        [450, 0],
    ],
    waypointRadius: 10,
    waypointFill: "yellow",
    waypointStroke: {color: 'red', width: '1px'},
    routeStroke: {color: 'red', width: '1px', 'dasharray': '5,10'},
};

var box_canyon3 = {
    waypoints: [
        [307, -172],
    ],
    route: [
        [153, -445],
        [195, -419],
        [209, -396],
        [208, -330],
        [231, -300],
        [240, -259],
        [246, -247],
        [241, -200],
        [252, -188],
        [263, -187],
        [276, -175],
        [307, -172],
        [345, -225],
        [332, -248],
        [328, -275],
        [316, -307],
        [284, -322],
        [282, -335],
        [294, -348],
        [294, -366],
        [366, -360],
        [380, -332],
        [411, -324],
        [425, -336],
    ],
    waypointRadius: 10,
    waypointFill: "yellow",
    waypointStroke: {color: 'red', width: '1px'},
    routeStroke: {color: 'red', width: '1px', 'dasharray': '5,10'},
};

var redwood_cliff_passage = {
    waypoints: [
        [429, -74],
        [415, -95],
    ],
    route: [
        [429, -74],
        [415, -95],
    ],
    waypointRadius: 5,
    waypointFill: "yellow",
    waypointStroke: {color: 'red', width: '1px'},
    routeStroke: {color: 'red', width: '1px', 'dasharray': '5,10'},
};

var redwood_route1 = {
    waypoints: [
        [429, -74],
        [415, -95],
    ],
    route: [
        [429, -74],
        [415, -95],
    ],
    waypointRadius: 5,
    waypointFill: "yellow",
    waypointStroke: {color: 'red', width: '1px'},
    routeStroke: {color: 'red', width: '1px', 'dasharray': '5,10'},
};

var redwood_route2 = {
    waypoints: [
    ],
    route: [
        [443, -36],
        [429, -74],
        [419, -135],
        [411, -146],
        [400, -149],
        [379, -150],
        [362, -159],
        [307, -172],
    ],
    waypointRadius: 5,
    waypointFill: "yellow",
    waypointStroke: {color: 'red', width: '1px'},
    routeStroke: {color: 'red', width: '1px', 'dasharray': '5,10'},
};

var redwood_route3 = {
    waypoints: [
        [456, -80],
        [443, -36],
    ],
    route: [
        [456, -80],
        [460, -71],
        [443, -36],
    ],
    waypointRadius: 5,
    waypointFill: "yellow",
    waypointStroke: {color: 'red', width: '1px'},
    routeStroke: {color: 'red', width: '1px', 'dasharray': '5,10'},
};

var cactus_to_canyon = {
    waypoints: [
        [-34, -472],
        [-5, -429],
    ],
    route: [
        [-34, -472],
        [-42, -464],
        [-5, -429],
    ],
    waypointRadius: 10,
    waypointFill: "yellow",
    waypointStroke: {color: 'red', width: '1px'},
    routeStroke: {color: 'red', width: '1px', 'dasharray': '5,10'},
};

var volcano_canyon1 = {
    waypoints: [
        [7, -231],
        [36, -186],
        [35, -136],
    ],
    route: [
        //[46, -180],
        //[33, -190],
        //[12, -221],
        [9, -268],
        [7, -231],
        [36, -186],
        [35, -136],
        [19, -123],
        [19, -103],
        [22, -85],
    ],
    waypointRadius: 5,
    waypointFill: "yellow",
    waypointStroke: {color: 'blue', width: '1px'},
    routeStroke: {color: 'blue', width: '1px', 'dasharray': '5,10'},
};

var iits_cliff = {
    title: "Island in the Sky",
    world_coords: [
        // fake fake fake!
        // .. well, its implied from other data...
        [297, -185],
        [328, -225],
        [303, -299],
        [265, -319],
        [297, -381],
        [372, -371],
        [386, -344],
        [416, -341],
        [457, -356],
        [485, -351],
        [505, -368],
        [491, -408],
        [408, -451],
        [392, -487],
        [355, -515],
        [300, -501],
        [282, -518],
        [250, -519],
        [170, -446],
        [216, -415],
        [216, -415],
        [220, -396],
        [218, -335],
        [240, -308],
        [257, -238],
        [254, -204],
        [297, -185],
    ],
    fill: redwood_fill,
    stroke: {color: 'magenta', width: '1px'}
};

var implied_canyontop_hi1 = {
    world_coords: [
        [400, -60],
        [415, -95],
        [413, -105],
    ],
    fill: "none",
    stroke: {color: 'magenta', width: '1px'}
};

var implied_canyontop_hi2 = {
    world_coords: [
        [236, -194], // real data
        [229, -249],
        [215, -296],
        [193, -328],
        [192, -399],
        [164, -422],
        [152, -415],
        [135, -415],
    ],
    fill: "none",
    stroke: {color: 'magenta', width: '1px'}
};

var implied_canyontop2_1 = {
    world_coords: [
        [115, -480], // real
        [83, -478],
        [50, -459],
    ],
    fill: "none",
    stroke: {color: 'magenta', width: '1px'}
};

var implied_canyontop2_2 = {
    world_coords: [
        [115, -480], // real
        [121, -477], // real
        [141, -478], // real
        [147, -493], // real
        [186, -496], // real
        [212, -515], // real
        [246, -539], // real
        [262, -540], // real
        [268, -547], // real
        [285, -550], // real
        [298, -539],
        [307, -525],
        [342, -531],
        [348, -586], // real
        [295, -599],
        [214, -598],
        [122, -588],
        [108, -577],
    ],
    fill: "none",
    stroke: {color: 'magenta', width: '1px'}
};

var implied_canyontop2_3 = {
    world_coords: [
        [108, -577],
        [73, -558],
    ],
    fill: "none",
    stroke: {color: 'magenta', width: '1px'}
};

var iits_cliff2 = {
    world_coords: [
// possible descent
    //[617, -323],

// clifftop
        [236, -194], 
        [277, -168],
        [287, -165],
        [312, -165],
        [340, -153],
        [345, -150],
        [359, -147],
        [376, -144],
        [400, -143],
        [411, -137],
        [414, -131],
        [413, -118],
        [414, -106],
        [411, -112],

    ],
    fill: "none",
    stroke: {color: 'gray', width: '1px'}
};

var a_route = {
    waypoints: [
        [529, -210],
        [677, -85],
    ],
    route: [
        [529, -210],
        [546, -182],
        [616, -134],
        [677, -85],
    ],
    waypointRadius: 10,
    waypointFill: "yellow",
    waypointStroke: {color: 'red', width: '1px'},
    routeStroke: {color: 'red', width: '1px', 'dasharray': '5,10'},
};

var iits_redwood_forest_s = {
    world_coords: [
        [366, -579],
        [371, -582],
        [387, -586],
        [402, -581],
        [403, -571],
        [410, -570],
        [416, -553], //cliffs?
        [433, -550],
        [435, -544], // end of cliff
        [437, -546], // start of cliff
        [438, -554],
        [447, -554],
        [466, -522],
        [477, -514],
        [503, -489],
        [529, -473],
        [541, -470],
        [547, -456],
        [549, -431],
        [552, -419],
        [559, -412],
        [591, -404],
        [602, -380], // start (end) of cliffs
        [600, -367],
        [599, -351],
        [597, -331],
            [588, -324],
        // cliffs
            [583, -316],
            [563, -313],
            [552, -317],
            [563, -305],
            [566, -297],
            [573, -275],
            [577, -273],
            [594, -268],
            [600, -260],
        // redwoods leave cliffs here
            [598, -253],
            [590, -251],
            [576, -260],
            [567, -254],
            [570, -244],
            [582, -237],
            [585, -226],
            [582, -213],
            [568, -196],
            [555, -191],
        // hello cliffs
            [542, -197],
            [527, -211],
            [522, -215],
        // redwoods leave cliffs
            [527, -201],
            [532, -191],
            [536, -178],
            [547, -158],
            [556, -154],
            [564, -135],
            [561, -112],
            [555, -106],
        // possible way down
            [519, -108],
            [524, -98],
            [524, -87],
            [526, -68],
            [529, -46],
            [536, -40],
            [545, -14],
            [536, -8],
            [507, -32],
    ],
    fill: "none",
    stroke: {color: 'green', width: '1px'}
};

var redwood_3 = {
    world_coords:[
        [109, -577],
        [105, -573],
        [100, -563],
        [100, -523],
        [104, -522],
        [116, -526],
        [113, -515],
        [102, -516],
        [101, -507],
        [119, -513],
        [109, -505],
        [100, -502],
        [101, -489],
        [115, -480],
    ],
    fill: "none",
    stroke: {color: 'green', width: '1px'}
};

var iits_redwood_fill = {
    world_coords: [],
    fill: redwood_fill,
    stroke: {color: redwood_fill, width: '1px'}
};
var iits_redwood_fill2 = {
    world_coords: [],
    fill: redwood_fill,
    stroke: {color: redwood_fill, width: '1px'}
};

var iits_redwood_fill3 = {
    world_coords: [],
    fill: redwood_fill,
    stroke: {color: redwood_fill, width: '1px'}
};

(function() {
    var x = iits_redwood_fill.world_coords;
    x.push.apply(x, iits_redwood_forest_s.world_coords);
    x.push.apply(x, redwood_canyon2_outline.world_coords);

    x = iits_redwood_fill2.world_coords;
    x.push.apply(x, redwood_outline.world_coords);
    x.push.apply(x, implied_canyontop_hi1.world_coords);
    var y = [].concat(iits_cliff2.world_coords);
    y.reverse();
    x.push.apply(x, y);
    x.push.apply(x, implied_canyontop_hi2.world_coords);

    var x = iits_redwood_fill3.world_coords;
    x.push.apply(x, redwood_3.world_coords);
    x.push.apply(x, implied_canyontop2_2.world_coords);
})();


