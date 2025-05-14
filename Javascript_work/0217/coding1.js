function solution(mystring){
    let answer = '';
    for (let i = mystring.length -1; i >= 0; i--){
         answer += mystring[i];
    }
    return answer;
}

console.log(solution('jaron'));