const obj = {
    age : 20,
    name : '홍길동',
    aa : function(){ console.log('aa')},
    get fullName(){
        return `이름 ${this.name} 나이 ${this.age}`;
    }
}

console.log(obj.toLocaleString());
console.log(obj.hasOwnProperty('age'));

// console.log(Object.getOwnPropertyDescriptors(obj));

function aa(num,num){
    console.log('test');
}

// console.log(aa.length);
// console.log(aa.prototype);
// console.log(aa.__proto__);

// if while for
// 함수 매개변수 반환값
// 클래스 prototype


// console.log(Object.getOwnPropertyDescriptors(aa));

// js 엔진에서 제공해주는 이미 내장되어진 객체 object { prototype: {  }
// console.log(Object.prototype);
// console.log(Object.getOwnPropertyDescriptor(Object.prototype,'__proto__'));