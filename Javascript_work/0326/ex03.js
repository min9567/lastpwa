// 코딩테스트 스택구조

class Queue {

    constructor(arr = []) {
        this.arr = arr;
    }

    // 넣는거
    enque(item){
        this.arr.push(item);
    }

    // 빼는거
    deque(){
        this.arr.shift();
    }

    // 복사하는거
    entrues(){
        return [...this.arr]
    }
}

const que = new Queue([10,20,30]);
console.log(que);
que.enque(40);

console.log(que);
const retValue = que.deque();
console.log(retValue);
console.log(que);