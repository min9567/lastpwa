function foo(){
    console.log("전연공간 foo함수")
}

function bar(){
    function foo(){
        console.log("bar 함수안에 foo함수");
    }
    foo();
}

bar();
