
const a = 10;
// a = 20;

let b = 20;
console.log(b);
b = 30;
console.log(b);

// 초기값 i=0; 조건 i<10; 변경되는값 i++
for (let i = 0; i < 10; i = (i + 1) * 2) {
    console.log(i);
}