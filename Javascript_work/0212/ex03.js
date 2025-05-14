function test(str = ''){
    // str = str || '';
    return str.length;
}

const value = test();
const value1 = test('h1');

console.log(value);
console.log(value1);