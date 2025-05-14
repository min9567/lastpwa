function solution(n, t) {
    var result = n;

    for (let i = 0; i < t; i++) {
        console.log(n);
        result = result * 2;
    }
    return result;
}

console.log(solution(2, 7));
console.log(solution(3, 5));