const a = "큰따옴표안에 '작은따옴표'"

console.log(a);

const b = '작은따옴표 안에 \"큰따옴표"';

console.log(b);

const c = `a = ${a} b = ${b}`;
console.log(c);

const d = "a = "+a +" b = "+ b;
console.log(d);
