// 객체의 프로퍼티 종류는
// 데이터 프로퍼티와 접근자 프로퍼티가 있음

class Person {
    // 데이터 프로퍼티 예시
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    // 접근자 프로퍼티 예시
    get fullName() {
        return `fname ${this.fname} lname ${this.lname}`;
    }
    set fullName(name) {
        [this.fname, this.lname] = name.split(" ");
    }
}

const person = new Person("홍", "길동");
console.log(person);
console.log(person.fullName);

person.fullName = "박 길동"
console.log(person.fullName);