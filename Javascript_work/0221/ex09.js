var x = 'global x';
var y = 'global y';
var z = 'global z';

function outer() {
    var z = 'outer local z';

    console.log(`x = ${x}`);
    console.log(`z = ${z}`);
    console.log(`y = ${y}`);

    function innber(){
        var x = 'inner local x';

        console.log(`x = ${x}`);
        console.log(`z = ${z}`);
        console.log(`y = ${y}`);
    }
    innber();
}

outer();
console.log(x);
// console.log(z);