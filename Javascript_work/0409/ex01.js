const iter = {
  aa() {},
  [Symbol.iterator]() {
    let cur = 1;
    const max = 5;
    return {
      next() {
        return { value: cur++, done: max < cur };
      },
    };
  },
};
// 이터러블 프로토콜 무한루프
// for of
for (const element of iter) {
    console.log(element)
}

// 스프레드 문법
console.log(...iter);

// 배열 분해
const [a,b,c,d] = iter;
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);
console.log(`d = ${d}`);

// 이터레이터 프로토콜
const 이터레이터 = iter[Symbol.iterator]();
console.log(이터레이터.next());
console.log(이터레이터.next());
console.log(이터레이터.next());
