console.log('Hello World!');



var users = [
  {userId:"홍길동", userAge:10},
  {userId:"박길동", userAge:20},
]

console.log(users);

var printusers1 = `user[0] = id = ${users[0].userId} age = ${users[0].userAge}`;
var printUsers2 = `user[1] = id = ${users[1].userId} age = ${users[1].userAge}`;

document.getElementById('app').innerHTML = printusers1 + printUsers2;

