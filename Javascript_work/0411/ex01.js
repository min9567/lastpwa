const obj1 = { aa: 10, bb: 20 };
const obj2 = { aa: 30, cc: 40 };

const result = { ...obj1, ...obj2, dd: 50, bb: 100 };
console.log(result);

// React TodoList
const data = [
  { data: "2025/02/22", todo: "공부하기" },
  { data: "2025/02/23", todo: "놀기" },
];

console.log([...data, { date: "2025/02/24", todo: "영화보기" }]);
