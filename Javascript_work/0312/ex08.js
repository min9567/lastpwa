// node 에서는 gloal 변수에 전역으로 붙지 않음.
// 브라우저에서는 window 변수에 전역으로 붙음.

var value = 1;

const obj = {
    valus: 10,

    foo() {
        console.log(`this ${JSON.stringify(this)}`)
        console.log(`this.value : ${this.value}`);
        function bar() {
            console.log(`this ${this}`)
            console.log(`this.value ${this.value}`);
        }
        bar();
    }
}
obj.foo();