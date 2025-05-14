const str = 'aaa@naver.com';
const re = /[A-Za-z]+@[A-Za-z]+.[A-Za-z]+/;

const arr = str.match(re);
console.log(arr);

console.log(re.test(str));