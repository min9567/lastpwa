function deepFreeze(target) {

    // target이 객체이고 freeze되지 않은 객체만 freeze한다.
    if( target && target === 'Object' && !Object.isFrozen(target)){
        Object.freeze(target);

        Object.keys(target).forEach( key => {
            deepFreeze(target[key]);
        });
    }

    // return target;
}

const person = {
    name: 'LEE',
    addr: { city: 'seoul' },
    friends: { name: 'Park', addr: { city: "busan" } }
};

deepFreeze(person);

person.addr.city = 'busan';
console.log(person);

// 추가 X 삭제 O 프로퍼티 값 변경 O
// Object.preventExtensions(person);

// 추가 X, 삭제 X 프로퍼티 값 변경 O
// configuable:false
// Object.seal(person);

// 추가 X, 삭제 X 프로퍼티 값 변경 X
// writable false; configuable : false
// Object.freeze(person);

// // 객체 안의 값은 지정해줘야 변경불가.
// Object.freeze(person.addr);
// Object.freeze(person.friends.addr);
// person.addr.city = 'busan';
// console.log(person);

// 무시됨.
// person.age = 20;
// console.log(person);

// person.name = "PARK";
// console.log(person);

// const ret = Object.isExtensible(person);
// console.log(ret);