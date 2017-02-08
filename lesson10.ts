var getBonus =  function(valule = 1, tax = valule * 0.1,salary){
    console.log(valule + tax);
    console.log(arguments.length);
}

getBonus(undefined,40,100);