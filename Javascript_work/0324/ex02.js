class Animal {
    constructor(){
    console.log("Animal")
    }
}

class Dog extends Animal{
    constructor(){
        super();
        console.log("Dog");
    }    
}

const dog = new Dog();
console.log(dog);