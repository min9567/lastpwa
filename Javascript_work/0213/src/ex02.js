var a = "qwer"/2;
var b = NaN;

console.log(a);
console.log(a === b);

console.log(Number.isNaN(a));
console.log(Number.isNaN(b));

var c = {
    a:10,
    b () {
        console.log('b함수입니다.');
    }
    c:{a:1};
}

// c.b();
c.c.a ();