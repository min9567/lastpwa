document.querySelector('#input-btn-post').addEventListener('click', async function(){
    const post = document.querySelector('#post').value;

    if (post.length == 0) {
        await Swal.fire({
            icon: "error",
            title: "입력 실패",
            text: "내용을 입력해",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
    }

    const res = await supabase
    .from('post')
    .insert([
        { post }
    ]).select();
})




const $postDiv = document.querySelector('#post-div');
async function postSelect() {
    const res = await supabase.from('post').select();

    let rows = '';
    for (let i = 0; i < res.data.length; i++) {
        rows += `
        <tr>
            <td>${res.data[i].id}</td>
            <td>${res.data[i].user_id}</td>
            <td>${res.data[i].post}</td>
            <td>${res.data[i].created_at}</td>
        </tr>
        `;
    }

    let post = `
    <div>
        <table>
            <tr>
                <th>id</th>
                <th>userid</th>
                <th>내용</th>
                <th>작성일자</th>
            </tr>
            ${rows}
        </table>
    </div>
    `;

    $postDiv.innerHTML = post;
    $postDiv.classList.add('show');
}

