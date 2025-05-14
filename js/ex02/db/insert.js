const mysql = require('mysql2');

// console.log(mysql);

function people_insert(name, age) {
    const dbInfo = {
        host: '192.168.0.10',
        user: 'root',
        password: 'rootpassword',
        database: 'ya'
    }

    const connection = mysql.createConnection(dbInfo);
    // console.log(connection);

    // DB 연결
    connection.connect();

    const sql = 'insert into people (person_name,age) values (?,?)';
    const values = [name, age];

    connection.query(sql, values, (error, result) => {
        if (error) throw error;
        console.log(result);
    })

    // DB 연결 끊기
    connection.end();
}

module.exports = { people_insert };