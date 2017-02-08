var displayColor2 = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(arguments.length);
    // console.log(message);
    // console.log(colors);
    for (var i in colors) {
        console.log(i);
    }
    // for(let i in arguments){
    //     console.log(arguments[i]);
    // }
};
var message2 = "111";
var colorsTo = ['Red', 'Blue', 'white'];
displayColor2.apply(void 0, [message2].concat(colorsTo));
//# sourceMappingURL=lesson12.js.map