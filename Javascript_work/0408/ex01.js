// const mysymbol1 = Symbol();
// const mysymbol2 = Symbol();

// console.log(mysymbol1 === mysymbol2);
// console.log(mysymbol1);
// console.log(mysymbol2);

// console.log(typeof mysymbol1);

const aa = {};
aa.aaa = 10;
console.log(aa);

String.prototype.aaa = 10;
console.log(String.prototype.aaa);

let a = "adcdef";
a = a.replace(/a/, "aaa");
console.log(a);
console.log(a.aaa);