// filter 로도 가능함...

//find id가 2번인 요소를 찾는것
//findIndex id가 2번인 index를 찾는것
const myUsers = new Users([
    { id: 1, name: "홍" },
    { id: 2, name: "나야" },
    { id: 3, name: "피곤" },
]);

const result =
    myUsers.find((item) => {
        console.log(item);
        return item.id === 2;
    });

console.log("===========result=============")
console.lob(result);



const resultIndex =
    myUsers.find((item) => {
        console.log(item);
        return item.id === 2;
    });

console.log("===========result=============")
console.lob(resultIndex);