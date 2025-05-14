const a = 10;
function getPromise() {
  return new Promise((resolve, reject) => {
    if (a > 0) {
      resolve("정상작동");
    } else {
      reject("실패");
    }
  });
}

getPromise()
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
