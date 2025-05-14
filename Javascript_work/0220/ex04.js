function test(x,y,z){
    console.log(x)
    console.log(y)
    console.log(z);

    for(var i=0; i<x; i++){
        y();
    }
}

// 매개함수는 원시,함수,객체 3개

test(3,function(){console.log('yy')},
{a:10, b:20});