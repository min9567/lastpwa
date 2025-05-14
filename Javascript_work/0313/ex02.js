// document.querySelector('td'); -> td태크 하나
// document.querySelectorAll('td'); -> td 태그 여러개 배열로 가져옴


const arr = [
    "<td>{ name: '홍길동', age: 20 }</td>",
    "<td>{ name: '김길동', age: 30 }</td>",
    "<td>{ name: '김철수', age: 25 }</td>"
];

// const arr = [
//     { name: '홍길동', age: 20 },
//     { name: '김길동', age: 30 },
//     { name: '김철수', age: 25 }
// ];

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// forEach : 반환값 x
// map : 반환값 o
// filter : true, false에 따라 반환
// reduce : 줄여서 반환

arr.forEach ( obj => {
    console.log(obj);
})