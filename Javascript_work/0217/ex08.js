const f = (x, y) => x + y; // 함수 몸체에 여러줄 가능
const f = (x, y) => { return x + y ;}; // 함수 몸체에 한줄만 가능 { } 가 있으면 리턴을 생략할수 없다

const res = f(10, 20);
console.log(res);