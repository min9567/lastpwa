const add = (x, y) => {return x + y;};
const sub = (x, y) => x - y;

console.log(add(10, 5));
console.log(sub(5, 3));

// const getUser = () => ({ name: "ㅇㅇㅇ", age: 20})
const getUser = () => {
    var name = "ㅇㅇㅇ";
    var age = 20;
    return {name, age};
}

console.log(getUser());