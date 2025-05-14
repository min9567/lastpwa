const map = new Map();
const key = { key : 10};

// map에 {key:10}=>20추가
map.set(key,20);
console.log(map);

// map에 {key:10} 가지고 있는지 확인
console.log(map.has(key));

// map에 {key:10} 삭제
map.delete(key);
console.log(map);

// map에 NaN => 100추가
map.set(NaN, 100);
console.log(map);

// map 모든 내용삭제
map.clear();
console.log(map);