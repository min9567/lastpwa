// const infiniteFibona = (function () {
//   let [pre, cur] = [0, 1];
//   return {
//     [Symbol.iterator]() {
//       return this;
//     },
//     next() {
//       [pre, cur] = [cur, pre + cur];
//       return { value: cur };
//     },
//   };
// })();


// 제네레이터(*) ex)function* 함수는 암묵적으로 객체 리턴.
const infiniteFibona = (function* () {
    let [pre, cur] = [0, 1];
    while(true){
        [pre,cur] = [cur,pre+cur];
        yield cur;
    }
  })();

for (const num of infiniteFibona) {
    if(num > 10000) break;
    console.log(num);
}

// console.log(infiniteFibona);
// console.log(infiniteFibona.next());
