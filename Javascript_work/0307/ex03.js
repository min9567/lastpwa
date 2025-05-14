// function Person(name){}
// Person.prototype 소유하고 있다 -> constructor(생성자) 생성자가 있음.

// const Person = name => {
//     this.name = name;
// }

// Person.prototype 소유하고 있지 않다 -> constructor 가 없다

// console.log(Person.prototype);
// console.dir(Person.prototype);

// new Person();

class Person{
    // new 를 사용하게 되면 constructor 자동으로 실행
    constructor(){
        this.x = 10;
        this.y = 20;
        console.log("test");
    }
}

const p1 = new Person();
console.log(p1);