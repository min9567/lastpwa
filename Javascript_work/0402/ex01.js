// react - useState useEffect

// math.random() 1~46까지 숫자 중에서 중복되지 않는 숫자 6개

// set

const myset = new Set();
myset.add(1);
myset.add(1);
myset.add(2);
myset.add(5);

console.log(myset);
console.log(myset.size);
console.log([...myset]);

setInterval(() => {
const lottoNum = new Set();
do {
    lottoNum.add(parseInt(Math.random() * 46) + 1 );
} while (lottoNum.size != 6 );

console.log([...lottoNum]);
}, 1000);

// for (let i = 0; i < 6; i++) {
// console.log(parseInt(Math.random()*46)+ 1 );
// };