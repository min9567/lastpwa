function doA(){
    this.aa = 10,
    this.bb = 20
    // return this;
    // return {};
    // {}객체를 반환
    // return 100;
    // 숫자 무시. new 일때만..
}

const aa = new doA();
console.log(aa);