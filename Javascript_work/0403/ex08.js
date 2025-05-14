function camelToSnake(str){
    console.log(str);
    console.log(str.match(/.[A-Z]/));

    return str.replace(/.[A-Z]/, ele => {
        console.log(ele);
        return ele[0] += '_' + ele[1].toLowerCase()
    })
    // console.log(/.[A-Z]/.match(str));
}

console.log(camelToSnake("helloWorld"));