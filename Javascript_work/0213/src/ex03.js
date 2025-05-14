var a = 10;

var person = {
    name: 'john',
    sayHello: function() {
        console.log(` hi, my name is ${this.name}`);
    },
    'a-a' : 10
};


console.log(person.a-a);
console.log(person['a-a']);

console.log(typeof person);
console.log(person);

person.sayHello();

var empty = {}
console.log(typeof empty);
console.log(empty);