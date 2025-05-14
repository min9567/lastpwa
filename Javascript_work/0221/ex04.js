// 순수함수
function doA(n){
    return ++n;
}

// 비순수함수
var n=0;
function doB(){
    n++;
}