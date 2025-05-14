/*

    1. 중첩함수여야하고
    2. 내부함수에서 외부함수에 있는 변수 참조
    3. return 함수 이어야한다.

*/

// 클로저 함수
function outer(){
    var x = 1;
    return function inner(){
        console.log(x++);
    }
}

const out1 = outer();
out1();
out1();
out1();