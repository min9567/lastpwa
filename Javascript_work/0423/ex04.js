function bb(callback) {
    return () => {
        console.log("test");
        setTimeout(callback, 1000);
    };
}

const aa = bb(function () {
    console.log("함수보냄")
});

aa();