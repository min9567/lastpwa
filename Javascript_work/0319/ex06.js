// 객체의 프로퍼티 종류는
// 데이터 프로퍼티와 접근자 프로퍼티가 있음

const person = {
    // 데이터 프로퍼티 예시
    fname : "홍",
    lname : "길동",
    // 접근자 프로퍼티 예시
    get fullName(){
        return `fname ${this.fname} lname ${this.lname}`;
    },
    set fullName(name){
        [this.fname, this.lname] = name.split(" ");
    }
}

console.log(person);
console.log(person.fullName);