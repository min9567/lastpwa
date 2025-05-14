// setTime 함수와 시간
// 시간지나서 함수 실행

// 콜백함수
// addEventListener('click', function () {})

// setTimeout(function () {
//     console.log("콜백함수")
// }, 2000);

const obj = {
    value: 100,
    foo() {
        // console.log(this.value);
        // const that = this;
        // setTimeout(function () {
        //     console.log("콜백함수");
        //     // console.log(this);
        //     console.log(this.value);
        //     // console.log(that.value);
        // }.bind(this), 2000);
        setTimeout(() => {
            console.log("화살표함수");
            console.log(this.value);
        }, 2000);
    }
}

obj.foo();