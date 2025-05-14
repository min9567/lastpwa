var a = 2;
var b;


//break를 만나면 switch 구문 탈출
switch (a) {
    case 1:
        b = "1입니다.";
        break;
    case 2:
        b = "2입니다.";
        break;
    case 3:
        b = "3입니다.";
    default:
        b = "기본";
}
console.log(b);