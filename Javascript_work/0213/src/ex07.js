const x = 1, y = 2;

const obj = {
    // x:x,
    // y:y
    x,
    y
}

console.log(obj);

var prop = 'prefix';
var obj1 = {};
var i = 0;

obj1[prop+'-'+(++i)] = i;
// i++;
obj1[prop+'-'+(++i)] = i;
// i++;
obj1[prop+'-'+(++i)] = i;
// i++;

console.log(obj1);