function solution(money) {
var answer = [];
var price = 5500;
var count = 0;
while(true){
    if( money < price*count){
        answer[0] = count-1;
        answer[1] = money - (price*(count-1));
        break;
    }
    count++
    console.log(price*count);
}
    return answer;
}

console.log(solution(5500));