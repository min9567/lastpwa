function solution(nums) {
    const myset = new Set();
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            for (let k = 2; k < nums.length; k++) {
                if (i != j && j != k) {
                    const testvalue = num[i] + num[j] + num[k];
                    console.log(`num[i] ${num[i]}`);
                    console.log(`num[j] ${num[j]}`);
                    console.log(`num[k] ${num[k]}`);
                    console.log(`testvalue`)
                    if (isPrime(testvalue))
                        myset.add(testvalue);
                }
            }
        }
    }
    console.log(myset);
    return myset.size;
}

function isPrime(item) {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19];
    if (item == 2 || item == 3 || item == 5 || item == 7) return true;
    for (const element of primes) {
        if (item % element == 0) false;
    }
    primes.push(item);
    return true;
}

console.log(solution([1, 2, 3, 4]))
// console.log(solution([1, 2, 7, 6, 4]))