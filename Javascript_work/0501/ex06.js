new Error("에러 생성"); // 에러 객체를 생성만 했을때는 예외 이벤트 실행 X

try {
throw new Error("에러 생성");
} catch (e) {
    console.log("에러")
}

console.log('종료')