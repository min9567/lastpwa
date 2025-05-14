const a = "a,b,c"; // 원시타입, 함스프오퍼티 변수프로퍼티x
console.log(a.split(','));
a.aa = 10; // 무시.
a[0] = 'c';
console.log(a);

console.log(Object.getOwnPropertyDescriptors(a));

// 객체 타입 함수프로퍼티 변수프로퍼티o
const b = new String("a,b,c");
console.log(b.split(','));
b.aa = 10;
console.log(b);
