fetch("https://6809e0571f1a52874cde2b14.mockapi.io/todos/1")
  .then((res) => {
    // console.log(res);
    console.log('ggggg')
    // return "test"; // 프로미스 fullfilled 상태

    // stream 상테에 body 내용을 읽어서 json형태로 만들어서
    // Promise상태로 변경
    return res.json();
  })
  .then((result) => {
    console.log("result", result);
  })
  .catch((e) => {
    console.log(e);
  });
