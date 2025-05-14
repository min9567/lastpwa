const arr = [1, 2, 3, 4, 5];

// filler 1,3,5
console.log(Boolean(1));
console.log(Boolean(0));

const brr = arr.filter((item) => {
    console.log(`item = ${item}`);
    return item %2 == 1;

 });

console.log(brr);