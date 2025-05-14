function solution(s) {
    var answer = '';
    s = s.toLowerCase();
    const s_s = s.split(" ");
    for (let i = 0; i < s_s.length; i++){
        const spiltStr = s_s[i];
        for(let j = 0; j < spiltStr.length; j++){
            if ( j % 2 == 0 ){
                answer += spiltStr[j].toUpperCase();
            } else {
                answer += spiltStr[j];
            }
        }
        if((s_s.length - 1 ) != i)
            answer += " ";
    }
    return answer;
}

console.log(solution("try hello world"));