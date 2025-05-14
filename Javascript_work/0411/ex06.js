function parseURL(url = "") {
  console.log(`url ${url}`);
  //   const aa = 10;
  //   return { aa };

  // ^(\w)+ http https 찾기
  // :\/\/ : // 찾기
  // ([^/]+) : 슬러시(/) 아닌거 여기까지 찾아
  // (.*) 슬러시 (/) 이후 문자 다 찾기.

  const ma = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
//   console.log(ma);
  const [, protocol, host, path] = ma;
  return { protocol, host, path };
}

const result = parseURL("http://www.naver.com/aa");
console.log(result);
