class Animal{
    constructor (name){
        this.name = name;
        console.log("Xin chao" + this.name);
    }

    static talk(){
        console.log("This static is  talk");
    }

    run(){
        console.log("Person is running");
    }
}

let p = new Animal("Du Anh Quy");
p.run();
Animal.talk();