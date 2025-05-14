// 리액트 -> 함수형 프로그래밍

// javascript > react > node express 함수형 프로그래밍...

class AA {
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
}

class BB extends AA{
    // constructor는 안적어도 자동으로 적혀져 있는 상태
    // 생략 가능
    constructor(...restArgs){
        // constructor를 적으면 super 호출해야함
        super(...restArgs);
    }
}

const me = new BB(10, 20);
console.log(me);