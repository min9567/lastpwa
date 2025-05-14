// 변수명에 $ 는 html 태그요소  ex) $name

document.querySelector('#input-btn-user').addEventListener('click', async function () {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    // console.log(`name = ${name}`);
    // console.log(`email = ${email}`);

    if (email.length == 0) {
        await Swal.fire({
            icon: "error",
            title: "입력 실패",
            text: "email을 입력해주세요.",
            // footer: '<a href="#">Why do I have this issue?</a>'
        })
        return;
    }

    const res = await supabase.from('users').insert([
        { name, email }
    ])
        .select();
    console.log(res);
    if (res.status === 409)
    // 모달창으로 sweetakert2,gu
    {
        await Swal.fire({
            icon: "error",
            title: "입력 실패",
            text: "user입력에 실패했습니다. email 중복입니다.",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
    }
    else if (res.status === 201) {
        await Swal.fire({
            icon: "success",
            title: "입력 완료",
            text: "정상 입력되었습니다.",
            // footer: '<a href="#">Why do I have this issue?</a>'
        })
        usersSelect();
    }
})




const $usersDiv = document.querySelector('#users-div');
    // $usersDiv.innerHTML = 'asdf'
    // $usersDiv.style.backgroundColor = 'rgb(200,100,200)';
    // 유저테이블 내용 가져와서 출력하는 함수
    async function usersSelect() {
        const res = await supabase.from('users').select()
        let rows = '';
        for (let i = 0; i < res.data.length; i++) {
            rows += `
                <tr>
                    <td>${res.data[i].id}</td>
                    <td>${res.data[i].name}</td>
                    <td>${res.data[i].email}</td>
                    <td>${res.data[i].created_at}</td>
                    <td>${res.data[i].active}</td>
                </tr>`;
        }
        let users = `
        <div>
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
        $usersDiv.innerHTML = users;
        $usersDiv.classList.add('show');
    }