const a = { x: 10 };
const b = { y: 20 };
a.__proto__ = b;

console.log(a.x);
console.log(a.y);