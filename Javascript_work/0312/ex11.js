const person = {
    name : 'lee',
    getnName(){
        return this.name;
    }
}

// console.log(person.getnName());

const a1Person = {
    name: 'kim',
}

a1Person.getnName = person.getnName;
console.log(a1Person.getnName());

const cc = person.getnName;
console.log('일반 함수로 호출될때는 this가 전역객체 ' + cc());
