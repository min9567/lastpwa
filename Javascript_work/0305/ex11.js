function Person(name,age){
    this.name = name;
    this.age = age;
    this.print = function(){
        console.log(`name = ${name} age = ${age}`)
    }
}

const p1 = new Person('몰겟다', 20);
const p2 = new Person('몰라아', 30);
const p3 = new Person('모른다ㅏㅏㅏ', 30);

console.log(p1.print === p2.print)
console.log(p2.print === p3.print)