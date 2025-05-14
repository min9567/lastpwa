var a = [1, 2, 3];
// console.log(a);
// console.log(...a);

// for (var i = 0; i < a.length; i++)
//     console.log(a[i]);

[1, 2, 3].forEach(() => { console.log("화살표 함수") });
// [...a].forEach(() => { console.log("화살표 함수") });

// a.forEach(function(){ console.log("전통적인 함수")});