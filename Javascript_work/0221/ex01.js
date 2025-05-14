// forEach() > 


// const arr = [1, 2, 3, 4, 5]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// const result = [1,2,3,4,5].forEach(function(item){console.log(item)});
// 두개 같은 의미. 펑션이 =>로 대체.
// forEach 반환값이 없음.
// 배열안에 있는 요소를 가지고 와서 어떤 동작을 수행하고 끝나는 함수. return 의미없음.
const result = [1,2,3,4,5].forEach((item) => {console.log(item);});

// 배열안에 있는 요소를 가지고와서 어떤 동작을 수행하고 반환되는 값이 있는 함수.
const result2 = [1,2,3,4,5].map(item => {console.log(item); return `<li>${item}</li>`;});
console.log(result2);


const arr = ['안녕','금요일','hh'];
const str = arr.join();

console.log(arr);
console.log(str);
console.log(typeof arr);
console.log(typeof str);