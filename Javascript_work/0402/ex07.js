const url = "https://www.naver.com/index.html";

const re = /^https?:\/\/[\w]+.[\w]+.[\w]+\/[\w]+.html$/;

console.log(re.test(url));
console.log(url.match(re));