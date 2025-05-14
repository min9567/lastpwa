function aa(){
    console.log(this);
}

// 생성자 함수로 호출시 this는 {} 빈객체를 가리킴.
new aa();

// 일반 함수로 호출시 this는 globalThis를 가리킴.
// 브라우저 이면 window node 이면 global
aa();