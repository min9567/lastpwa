const str = "Is this all ok Is?";

const re = /is/i;

// i = 플래그

console.log(re.test(str));
console.log(re.exec(str));
console.log(str.match(re));

const aa = "a1b2c3d4e5";

console.log(aa.split(/\d/));