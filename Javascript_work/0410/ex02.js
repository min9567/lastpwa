const arr = [1, 2, 3];
const brr = [4, 5, 6];
console.log(arr + brr);
console.log([...arr, ...brr]);

console.log(...[1, 2, 3]);

console.log(..."hello");
console.log([..."hello"]);

// length 프로퍼티 없고
// Symbol.iterator 없죠
const obj = { a: 1, b: 2 };
console.log(obj.a);
console.log(obj.b);

// map 사용하면..
// length 프로퍼티 있고
// Symbol.iterator
// 문법이 다르다 2차원
// 2차원 배열 안에 배열
// 3차원 배열 안에 2차원 배여
[
  [10, 20, 30],
  [11, 22, 33],
]; //2차원

[
  [
    [10, 20, 30],
    [11, 22, 33],
  ],
  [
    [10, 20, 30],
    [11, 22, 33],
  ],
]; // 3차원 배열
// 3차원 배열에 2차원 배열이 2개면 3차원 배열
// 4차원 배열은 3차원 배열이 2개면 4차원 배열

const map = new Map([
  ["a", 1],
  ["b", 2],
]);

console.log(map);
console.log(...map);
console.log("map에서 a로..." + map.get("a"));
console.log("map에서 b로..." + map.get("b"));

const set = new Set([1, 2, 3]);
console.log(set);
console.log(...set);

// console.log(...{ a: 1, b: 2 }); //이거는 안됨

const t1 = { a: 1, b: 2};
const t2 = { a: 3, b: 4, c: 5 };

const reuslt = { ...t1, ...t2, ...{ a: 10 }};
console.log(reuslt);

console.log({ ...{ a: 1, b: 2 } }); // 이건 됨