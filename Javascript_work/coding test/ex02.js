function solution(n) {

    var answer = 0;
    for (var i = 0; i <= n; i = i + 2) {
        console.log(i);
        answer = answer + i;
    }

    return answer;
}

const value = solution(10);
console.log(value);

const value2 = solution(4);
console.log(value2);