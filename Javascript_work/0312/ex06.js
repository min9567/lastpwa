/*
    this 예시
    1. aa(); // this 전역객체
    // strict 모드 이면 -> this는 undefinded로 할당됨.
    2. new aa(); // this {} 생성하는 객체
    3. person.aa(); // person -> this 임
    4. <tr onclick = 'aaa(this)'></tr> 여기에서 this는 trTag가 됨.
    5. 화살표 함수의 this는 상위객체를 가리킨다.
*/

// 문법을 엄격하게 검사는 기법 사용은 잘 안함.
'use strict';


function AA(name){
    this.name = name;
    console.log(this);
}


// 일반 함수 호출
AA();
// new AA();
new AA("PARK");

const aa = {
    name:"Lee",
    getThis(){
        console.log(this);
    }
}

aa.getThis();

const bb = aa.getThis;
bb();