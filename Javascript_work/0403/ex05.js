fetch('https://jsonplaceholder.typicode.com/todos')
.then(result => {
    // console.log(result);
    if (String(result.status).startsWith('2')){
        console.log("정상");
        return result.json();
    } else {
        console.log("주소 틀림");
        throw new Error('error!!');
    }
})
.then(json => {
    console.log("hello")
    // console.log(json);
})
.catch(e => {
    console.log(e);
})