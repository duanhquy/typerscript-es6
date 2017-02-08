var empolyee = {
    id: 1,
    greet: function () {
        setTimeout(()=>console.log(this.id),1000);  
    }
//     greet: function () {
//         var self = this;
//         setTimeout(function () {
//             console.log(self.id);
//         }, 1000)
//     }
}

empolyee.greet();

// var empolyee2 = {
//     id: 1,
//     greet: function () {
//         setTimeout(()=>console.log(this.i),1000);  
//     }
// }

// empolyee2.greet();