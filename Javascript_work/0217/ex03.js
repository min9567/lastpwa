const name = "키키키";
const age = 20;

const person = {
    name,
    age
}

// const person2 = {name:'ggg', age:20};
const person2 = {...person};
person.name = "배고파";

console.log(person);
console.log(person2);