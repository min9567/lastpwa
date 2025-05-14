function solution (mystring, letter){
    var result = '';
for (let i = 0; i < mystring.length; i++) {
    console.log(mystring[i]);
    if (mystring[i] !== letter)
    result = result + mystring[i];
}
return result;
}

console.log(solution('abcdef','f'));
// solution('qwerqwer','we')