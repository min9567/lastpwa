const tel = '010-1234-5678';

const re = /^\d{3}-\d{4}-\d{4}$/;
// const re = /^\d{2, 3}-\d{4}-\d{4}$/;

// /is/i;
// / : 정규표현식 
// i : 대소문자를 구별하지 않고 검색.

// /^ : 시작
// $/ : 끝

console.log(re.test(tel));
// flase가 나오면 전화번호 다시 입력해라 라는식으로 사용함.
console.log(re.exec(tel));