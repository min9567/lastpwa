const str1 = "1234";
const str2 = "abcd";
const str3 = "12cd";

const re1 = /[\d]+/;
// 숫자가 1개라도 포함되어 있는지
const re2 = /^\d+$/;
// 숫자로만 이루어져 있는지.

console.log(re1.test(str1));
console.log(re1.test(str2));
console.log(re1.test(str3));

console.log(re2.test(str1));
console.log(re2.test(str2));
console.log(re2.test(str3));