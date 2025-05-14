function solution(n) {
    n += '';
    // n = String(n);
    // n = n.toString(n);
    // 셋다 동일.

    const sum = n.split('')
    .map(item => Number(item))
    .reduce((a,b)=>a+b,0);
    // const arr = n.split('');
    // console.log(arr);

    // //forEach map filter reduce
    // const brr = arr.map(item => Number(item));
    // console.log(brr);

    // const sum = brr.reduce((a, b) => a + b, 0);
    return sum;
}

const ret = solution(1234);
console.log(ret);