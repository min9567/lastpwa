class Person {
    name = "lee";
    getName = function(){
        return this.name;
    }
}

const me = new Person();
console.log(me);
console.log(me.getName());