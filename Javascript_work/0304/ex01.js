// node 개발환경에서는 전역객체에 암묵적으로 선언되지 않음.
// window 개발환경에서는 전역객체에 암묵적으로 선언됨.
var a = 10;

console.log(a);

// 실행환겨에 따라 자동으로 global window 설정됨.
console.log(globalThis.a);

// 브라우저
console.log(window.a);

//node
console.log(a);

var b = 20.5;

// 올림
console.log(Math.ceil(b));

// 내림
console.log(Math.floor(b));

// 반올림
console.log(Math.round(b));