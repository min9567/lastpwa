const reqData1 = () => {
    return new Promise(Resolve => {
        return setTimeout(() => {
            Resolve(1);
        }, 3000);
    });
};

const reqData2 = () => {
    return new Promise(Resolve => {
        return setTimeout(() => {
            Resolve(2);
        }, 3000);
    });
};

const reqData3 = () => {
    return new Promise(Resolve => {
        return setTimeout(() => {
            Resolve(3);
        }, 3000);
    });
};

// const result = reqData();
// console.log(result);

// reqData1().then((result) => {
//     console.log(result);
//     return reqData2()
// })

// then((result) => {
//     console.log(result);
//     return reqData3()
// })

// .then((result) => {
//     console.log(result);
// });

const result = Promise.all([reqData1(), reqData2(), reqData3()]);
console.log(result);

Promise.all([reqData1(), reqData2(), reqData3()]).then((res) => {
console.log(res);
});