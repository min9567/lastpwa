const incr = function (num){
    return ++num;
}

const decr = function (num){
    return --num;
}

const auxs = {
    incr,
    decr
};

function makeCounter(aux) {
    let num = 0;
    return function(){
        num = aux(num);
        return num;
    }
}

const increaser = makeCounter(auxs,incr);
console.log(increaser);
console.log(`increaser ${increaser}`);

//console.log(incr(10));
// console.log(auxs.decr(10));