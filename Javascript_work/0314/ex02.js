/*
1. 전역에서의 this
2. 일반함수에서 this
    일반모드
    스트릭트모드 -> packge.json type:module 자동으로 stirct 모드이다.
3. 메서드에서의 this
4. 생성자에서의 this
*/

// 1. 전역에서 this
// 'use strict';

// console.log(this);

// function aa(){
//     // window.document.querySelector();
//     console.log(this);
//     console.log(this.crypto.randomUUID());
// }

// aa();

// 3. 메서드에서의 this
// const obj = {
//     a:10,
//     doa(){
//         console.log(this);
//         console.log(`a ${this.a}`);
//     }
// }

// obj. doa();

// 4. 생성자에서 this
// javascript에서 이방식 선호.

// function aaa(){
//     console.log(this);
//     this.name = "my name";
// }

// const a1 = new aaa();
// console.log(a1);

// c#, java에서 선호하는 방식
class AA {
    constructor(){
        console.log(this);
        this.name = "my class name";

        // return this; 생략되어진 문법
    }
}

const a2 = new AA();
console.log(a2);