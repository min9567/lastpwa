const arr = Array.of(1,2,3,4)
console.log(arr);

const brr = Array.from([1,2,3,4]);
console.log(brr);

// for of 배열에서만 사용가능 객체에서 사용불가.
for (const element of arr){
    console.log(element)
}
// for in 객체에서 사용하는것 근데 배열에서도 됨
for (const element in arr){
    console.log(element)
}