// 정적 메서드 정적 변수

console.log(Math.PI);

class DBInfo{
    static URL = "supabe";
    static URLPASS = "password";
}

// 이렇게 접근하면 안됨
const dbInfo = new DBInfo();
console.log(dbInfo.URL);
console.log(dbInfo.URLPASS);

// 바로 접근해서 사용해야함.
console.log(DBInfo.URL);
console.log(DBInfo.URLPASS);