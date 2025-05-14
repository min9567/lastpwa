const test = [
    {
        "id": "254c515a-f33a-4377-bb87-8dc0bcaae4ac",
        "name": "Alice",
        "email": "alice@example.com",
        "created_at": "2025-03-05T06:01:58.534124",
        "active": true
    },
    {
        "id": "3c8670bc-001d-4307-9e98-bf92d52d90e7",
        "name": "qwer",
        "email": "Bob@naver.com",
        "created_at": "2025-03-05T06:05:24.139764",
        "active": true
    },
    {
        "id": "0354bd20-0633-4f1b-be06-63fd74473fd3",
        "name": "홍길동",
        "email": "hong@example.com",
        "created_at": "2025-03-06T05:34:09.925932",
        "active": true
    },
    {
        "id": "1bfb5e09-42f2-49ef-953f-6abb19b1505e",
        "name": "김철수",
        "email": "kim@example.com",
        "created_at": "2025-03-06T05:34:09.925932",
        "active": true
    },
    {
        "id": "c1103c39-2a6e-48b7-bd1b-18fb0f864e1c",
        "name": "이영희",
        "email": "lee@example.com",
        "created_at": "2025-03-06T05:34:09.925932",
        "active": true
    },
    {
        "id": "f0c3c7c4-3308-4fc8-997e-c0b2a82ee453",
        "name": "qqq",
        "email": "qqq@naver.com",
        "created_at": "2025-03-06T06:04:30.931474",
        "active": true
    },
    {
        "id": "afb29ac6-d52f-4b67-ae9c-83dc4c94c433",
        "name": "www",
        "email": "www@naver.com",
        "created_at": "2025-03-06T06:04:30.931474",
        "active": true
    },
    {
        "id": "99b9b04a-0964-4231-bcd0-b7b9697e9dd9",
        "name": "ooo",
        "email": "ooo@naver.com",
        "created_at": "2025-03-06T06:04:30.931474",
        "active": true
    }
]
let rows = '';
for (let i = 0; i < test.length; i++) {
    rows += `
    <tr>
        <td>${test[i].id}</td>
        <td>${test[i].name}</td>
        <td>${test[i].email}</td>
        <td>${test[i].created_at}</td>
        <td>${test[i].active}</td>
    </tr>`;
}
console.log(rows);

let users = `<div>
<table>
    <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>가입날짜</th>
        <th>활성화</th>
    </tr>
    ${rows}
    </table>
    </div>
    `;

console.log(users);

// <div>
//     <table>
//         <tr>
//             <th>id</th>
//             <th>name</th>
//             <th>email</th>
//             <th>가입날짜</th>
//             <th>활성화</th>
//         </tr>
//         <tr>
//             <th></th>
//         </tr>
//     </table>

// </div>