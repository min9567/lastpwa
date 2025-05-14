// 문자열 4 혹스 6을 solution 함수로 호출해서
// 숫자로만 이루어져 있으면 true, 아니면 false를 retrun
function solution(s) {
    const re = /^[0-9]+$/;
    return re.test(s) && (s.length == 4 || s.length == 6);
}

console.log(solution('1234'));
console.log(solution('12345678'));
console.log(solution('a1234'));