const arr1 = [1, 2];
const arr2 = [3, 4];

const result2 = [...arr1, ...arr2];
console.log(result2);


// 맨앞
result2.unshift(3);
// 맨뒤
result2.push(10);

result2.splice(2, 1, 5, 10);
    //   (인덱스, 삭제수, 5,10 : 추가할것.)
console.log(result2);

// const result = arr1.concat(arr2);
// console.log(arr1);
// console.log(arr2);
// console.log(result);