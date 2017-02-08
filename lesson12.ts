let displayColor2 = function(message, ...colors:string[]){
    console.log(arguments.length);
    // console.log(message);
    // console.log(colors);
   for(let i  in colors){
       console.log(i);
   }
    // for(let i in arguments){
    //     console.log(arguments[i]);
    // }
}

let message2 = "111";
let colorsTo = ['Red','Blue','white'];
displayColor2(message2,...colorsTo);