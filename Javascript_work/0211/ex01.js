// var a = [1,2,3,4,5];
// a.reverse();
// console.log(a);
//
// var b = [1,2,3,4,5,6];
// b.reverse();
// console.log(b);
//
// var a = 10;
// var b = 20px
//
// var temp = a;
//
// console.log[]

// function solution(num_list) {
//     var reverse_list = num_list. reverse();
//     return reverse_list;
// }


function solution(num_list) {
    // if(num_list.length % 2== 0) {
    for(var i = 0; i <= parseInt(num_list.length/2) ; i++) {
        var temp = num_list[i];
        num_list[i] = num_list[num_list.length - (i + 1)];
        num_list[num_list.length - (i + 1)] = temp;
    }

        console.log(num_list);
        return num_list;
    }

    solution([1,2,3,4,5,6])