const obj = {
  aa: 10,
};

const map = new Map();
map.set("aa", 10);

console.log(obj);
console.log(map);

obj.bb = 20;
obj.cc = () => {};
map.set({ aa: 10 }, 20);

console.log(obj);
console.log(map);

// 속성
console.log(Object.keys(obj).length);
console.log(map.size);

// set.size

console.log(...map)

// ...obj는 안됨. { } 객체를 해줘야 로그에 나옴.
// 2025년도 표준안, 모든곳에서 다 허용됨.
console.log({...obj})