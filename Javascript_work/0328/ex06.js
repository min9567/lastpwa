class Users{
    constructor(users){
        this.users = users;
    }
    findById(id){
        const user = this.users.filter(item => item.id == id);
        console.log(user);
    }
}

const myUsers = new Users([
    {id:1, name:"홍"},
    {id:2, name:"ㅇ"},
    {id:3, name:"캭"},
]);

console.log(myUsers);
myUsers.findById(3);

// function findById(id) {
// const user = users.filter(item => item.id == id);
// console.log(user);
// }

// findById(3);

// function remove(id){
//     const user = users.filter(item => item.id == id);
// }

// remove(2);
// console.log(users);