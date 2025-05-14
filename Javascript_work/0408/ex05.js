Array.prototype.sum = function() {
    console.log(this);
    return this.reduce((a,b) => {
        return a + b;
    }, 0);
};

const arr = [10,20,30];
console.log(arr.sum());

// 앞에꺼 삭제
arr.shift();
console.log(arr);

// 앞에 추가하는 함수
arr.unshift(200);
console.log(arr);

arr.unshift(100);
console.log(arr);