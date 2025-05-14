// 37장 제너레이터 추가할때 좀더 쉬워짐
const myIter = {
  [Symbol.iterator]() {
    let cur = 1;
    const max = 5;
    return {
      next() {
        return {
          value: cur++, // for of 의 element로 됨
          done: max < cur, // done가 true가 되면 for of 멈춤
        };
      },
    };
  },
};
// 객체 안에 [Symbol.iterator] 메서드를 생성하면
// 생성된 메서드는 객체를 리턴해야 하고
// 리턴된 객체 안에는 next() 함수가 생성되고
// next 함수는 value와 done을 반환하는 객체
// for of 로 나열이 가능하다.
for (const element of myIter){
    console.log(element);
}

// prototype 체인에 symbol.itrator
const aaa = [10, 20, 30];

for (const element of aaa) {
    console.log(element);    
}