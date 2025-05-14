// 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때,
// array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

function solution(array, n) {
    var answer = 0;
    for (let i = 0; i < array.length; i++) {
        if (n == array[i]) {
            answer++;
        }
    }
    return answer;
}


function solution(array, n) {
    var answer = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (n == element) {
            answer++
        }
    }
    return answer;
}










