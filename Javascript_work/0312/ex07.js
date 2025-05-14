function foo() {
    this.a = 10;
    this.b = 20;
    console.log(this);
}

// foo();
// new foo();

//obj -> this가 된다
// const obj = { foo : foo, c: 30 };
// obj.foo();

// this를 빈객체로 할당
// foo.apply({c:'새로운 내용'});
// foo.call({d:'call'});

// apply와 call은 함수 호출 되지만 bind는 호출안됨
// 그리샤 (); <- 사용해서 호출해야함.
foo.bind({e:'this변경가능'});

// foo(); 전역객체가 들어감