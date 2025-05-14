const a = () => {
    throw new Error("에러생김");
};

const b = () => {
    a();
}

const c = () => {
    b();
}

try {
    c();
} catch(e) {
    console.log(e);
}

console.log('종료')