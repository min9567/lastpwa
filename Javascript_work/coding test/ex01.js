//양꼬치 n 120,000 음료 k 2,000
// n k 임의의 숫자
// 양꼬치 10인분 음료수 1개 무료

function solution(n, k) {
    var total = 0;

    var a = n * 12000;
    var b = k * 2000;

    total = a + b

    total = total - Math.trunc(n/10)*2000;

    return total;
}

const value1 = solution(10,3);
console.log(value1); // 124,000

const value2 = solution(64,6);
console.log(value2); // 768,000