function Circle() {
    this.radius = 5,
    this.getDiameter = function () { return 2 * this.radius }
}
const newCircle = new Circle();
console.log(newCircle.getDiameter());