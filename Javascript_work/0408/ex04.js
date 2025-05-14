const obj = {
    aa: 10,
    bb: 20,
    [Symbol.for("aaa")] : 1,
    [Symbol.for("bbb")] : 1,
}

console.log(obj[Symbol.for("aaa")]);

// console.log(Object.getOwnPropertyDescriptor(obj, '[Symbol.for("aaa")]'));
console.log(Object.getOwnPropertySymbols(obj)[0]);
console.log(Object.getOwnPropertyDescriptor(obj, 'aa'));

for (const key in obj) {
    console.log(`key = ${key}`);
}