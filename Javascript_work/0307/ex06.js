// const Person = (function () {
    function Person(name) {
        this.name = name;
    }

    Person.prototype.sayHello = function () {
        console.log(`프로토타임 헬로 ${this.name}`)
    }
//     return Person;
// })();
const me = new Person('Park');

me.sayHello = function () {
    console.log(`인스턴스 헬로 ${this.name}`);
}

me.sayHello();
delete me.sayHello;

me.sayHello();

Person.prototype.sayHello = function () {
    console.log(`new 프로토타임 헬로 ${this.name}`)
}
me.sayHello();
delete Person.prototype.sayHello;
me.sayHello;