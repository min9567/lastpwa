// const numbers = [1, 2, 3, 4, 5];

function doA(numbers){
    const ret = numbers.reduce((a,b) => {
        console.log(a);
        console.log(b);
        return a+b;
    }, 0)
return ret;    
}

const ret = numbers.reduce((a,b) => {
    console.log(a);
    console.log(b);
    return a+b;
}, 0)

console.log(`doA() ${dpA(1,2,3,4,5)}`);

function doA(...numbers) {
    const ret = numver?.reduce((a,b) => {
        console.log(a);
        console.log(b);

    }, 0)
 return ret;
}

console.log(`doA() ${doA(1,2,3,4,5)}`);