const setting = {
    theme : null,
    language : 'ko',
    person : {
        name : '홍길동'
    }

    // a : {
    //       b: 'bb'
    //}
}

//원시값으로 변경
// String(10)= '10'
// Number('3.5) = 3.5
// Boolean('') = false

console.log(Boolean(null));

const b = setting.a?.b;
console.log(b);

const userTheme = setting.theme || 'light';
console.log(userTheme);

const userLanguge = setting?.language;
console.log(userLanguge);

const userName = setting.person.name;
console.log(userName);