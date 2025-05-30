const readline = require('readline/promises');
const { people_select } = require('../ex02/db/select.js');
const { people_insert } = require('../ex02/db/insert.js');
const people_delete = require('../ex02/db/delete.js');
const people_update = require('../ex02/db/update.js');

// const obj = { a: 10, b: function () {  } };
// const { a, b } = obj;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getInput() {
    while (true) {
        const number = await rl.question('1.select 2.insert 3.update 4.delete \n');

        if (number == '1') {
            console.log("1번 입력");
            people_select();
        } else if (number == '2') {
            console.log("2번 입력");
            const name = await rl.question("이름 입력: \n");
            const age = await rl.question("나이 입력: \n");
            console.log(`name ${name}`);
            console.log(`age ${age}`);
            people_insert(name, age);
        } 
        else if ( number == '3'){
            const id = await rl.question("id 입력: \n");
            const name = await rl.question("이름 입력: \n");
            const age = await rl.question("나이 입력: \n");
            people_update(id,name,age);
        }
        else if (number == '4'){
            const id = await rl.question('id 입력: \n');
            people_delete(id);
        }
        else {
            console.log(`number = ${number} 종료됨`);
            break;
        }
    }

    rl.close();
}

getInput();