// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때,
// numbers의 num1번째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을
// return 하도록 solution 함수를 완성해보세요.

// 배열 [] 이란 각 집합을 한칸씩 모아둔 것
// 배열[숫자] ==> 그 배열의 해당 인덱스에 들어있는 집합
// 인덱스 ==> 번호 같은거에요 '존재하면'0부터 시작하는
// length ==> 길이 '존재하면'1부터 시작하는
function solution(numbers, num1, num2) {
    let answer = [];//answer 는 빈 배열이다.
    for(let i = num1; i <= num2; i++) {
        answer.push(numbers[i]); //배열의 내장함수인데 배열.push(값) ==>앞의 배열에 (값)을 제일 뒤의 '신규'인덱스부터 한칸씩1 넣는다.
        //빈 배열로 선언했던 answer라는 배열 안에 numbers라는 배열 중 해당하는 인덱스에 위치한 집합을 넣겠다.
        }
    return answer;
}


console.log(solution([1, 2, 3, 4, 5], 1, 3));
//0부터 시작하는 인덱스 0부터
//length는 1부터

//''.length == 0
//' '.length==1
//''[0] == undefined || null || -1
//' '[0] == ' ';