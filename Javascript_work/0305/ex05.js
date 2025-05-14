function test(){
    console.log('test함수 호출');

    // const value = arguments.slice(0,2);
    // console.log(value);
}

test(10,20,30);

test.call();
test.apply();
// test.bind();