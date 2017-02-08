let displayColor = function(message, ...colors:string[]){
    console.log(message);
    console.log(colors);
    // for(let i in arguments){
    //     console.log(arguments[i]);
    // }
}

let message = "111";
displayColor(undefined,'Red');
displayColor(message, 'Red','Blue');
displayColor(message, 'Red','Blue','white');