var displayColor = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colors);
    // for(let i in arguments){
    //     console.log(arguments[i]);
    // }
};
var message = "111";
displayColor(undefined, 'Red');
displayColor(message, 'Red', 'Blue');
displayColor(message, 'Red', 'Blue', 'white');
//# sourceMappingURL=lesson11.js.map