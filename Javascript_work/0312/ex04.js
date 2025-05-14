// 객체 생성 방법
// 1. 객체 리터럴
// 2. new 생성자 함수 사용

// const Circle () {
//     this.radius = 5,
//         this.getDiameter =
//         function () { return 2 * this.radius }
// }
// const newCircle = new Circle();

const circle = {
    radius: 5,
    getDiameter() {
        return 2 * circle.radius;
    }
}

console.log(circle.getDiameter());