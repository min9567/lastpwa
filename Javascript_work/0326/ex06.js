const arr = [1, 2, 3, 4, 5, 6];

const review = [
    { uid: '123123123', title: "abcd" },
    { uid: '123123123', title: "aaaa" },
    { uid: '123123123', title: "ttie" }
]

const filferReview =
    review.filter((item) => {
        console.log(`item = ${JSON.stringify(item)}`);
        return item.title.includes('a');
    })
// includes적힌 a가 포함된걸 찾아줌

console.log(filferReview);

// const test = arr.filter((item, index) => index != 3);

// console.log(test);