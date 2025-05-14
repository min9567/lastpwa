const str = "abcd1234";

// \w A-Za-z0-9_ 까지 반복되는거 찾음
console.log(str.match(/\w/));
// + 없으면 1개의 문자만 찾음
console.log(str.match(/\w+/));
// + 가 있기 때문에 문자열+숫자 다찾음.
console.log(str.match(/^(\w+)/));
// 처음에 ^가 있으면 시작을 의미함.
// $ 끝까지