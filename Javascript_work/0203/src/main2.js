var a; // undefind 값 할당
console.log(a);

console.log("main2.js");

console.log(aaa);



function aaa(){
  const m =10;
  console.log("aaa 함수.");
}

a=10; //값의 재할당
console.log(a);
a=20; //값의 재할당
console.log(a);

aaa();

console.log(m); //가비지 콜레턱 자동됨.