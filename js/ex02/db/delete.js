const mysql = require('mysql2');

function people_delete(person_id) {
    const dbInfo = {
        host: '192.168.0.10',
        user: 'root',
        password: 'rootpassword',
        database: 'ya'
    }

    const connection = mysql.createConnection(dbInfo);

    connection.connect();

    const sql = 'delete from people where person_id = ?';
    

    connection.query(sql, [person_id],(err, result) => {
        if ( err ) throw err;
        console.log(`result = ${result}`);
    })

    connection.end();
}

module.exports = people_delete;