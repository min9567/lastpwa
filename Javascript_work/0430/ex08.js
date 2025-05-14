const reqData1 = () => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve(1);
    }, 3000);
  });
};

const reqData2 = () => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      reject(2);
    }, 3000);
  });
};

const reqData3 = () => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve(3);
    }, 3000);
  });
};

try {
  const result = await Promise.all([reqData1(), reqData2(), reqData3()]);
  console.log(result);
} catch (e) {
  console.log("에러 발생 " + e);
}
// Promise.all([reqData1(), reqData2(), reqData3()]).then((res) => {
// console.log(res);
// });

// Promise.all([reqData1(), reqData2(), reqData3()])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

console.log("종료");
