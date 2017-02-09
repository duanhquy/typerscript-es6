var Animal = (function () {
    function Animal(name) {
        this.name = name;
        console.log("Xin chao" + this.name);
    }
    Animal.talk = function () {
        console.log("This static is  talk");
    };
    Animal.prototype.run = function () {
        console.log("Person is running");
    };
    return Animal;
}());
var p = new Animal("Du Anh Quy");
p.run();
Animal.talk();
//# sourceMappingURL=lesson18.js.map