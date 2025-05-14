// 문자열 my_string과 정수 n이 매개변수로 주어질 때,
// my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(mystring, n) {
    var answer = '';
    for (let i = 0; i < mystring.length; i++){
        answer += mystring[i].repeat(n);
}
    return answer;
}

console.log(solution('hello',3));





// function solution (mystring, letter){
//     var result = '';
// for (let i = 0; i < mystring.length; i++) {
//     console.log(mystring[i]);
//     if (mystring[i] !== letter)
//     result = result + mystring[i];
// }
// return result;
// }

// console.log(solution('abcdef','f'));