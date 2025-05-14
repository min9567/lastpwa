// 제어문 if, for, while, break, continue, switch 1번째..
// function 함수호출 매개변수 돌아오는 값
// class 객체선언

function solution(numbers) {
    var max_one = numbers[0];
    var max_two = numbers[1];

    for (var i = 0; i < numbers.length; i++) {
        if (max_one < numbers[i]){
            max_two = max_one;
            max_one = numbers[i];
            // console.log(`max_one = ${max_one}`);
            // console.log(`nunbers[i] = ${numbers[i]}`);
        }
        if (max_two < numbers[i] && numbers[i] < max_one){
            max_two = numbers[i];
        }
    }

    console.log(`max_one: ${max_one}`);
    console.log(`max_two: ${max_two}`);
    return max_one * max_two;

    // console.log(aa[0]);
    // console.log(aa[1]);
    // console.log(aa[2]);
}

const ret = solution([0, 31, 24, 10, 1, 9])
console.log(ret)