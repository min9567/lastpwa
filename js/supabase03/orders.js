document.querySelector('#input-btn-order').addEventListener('click', async function () {
    const product_name = document.querySelector('#product_name').value;
    const price = document.querySelector('#price').value;

    if (price.length == 0) {
        await Swal.fire({
            icon: "error",
            title: "입력 실패",
            text: "가격을 입력해",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
    } else if (!Number.isNaN(price)) {
        await Swal.fire({
            icon: "error",
            title: "입력 실패",
            text: "가격은 숫자를 입력해",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
    }

    const res = await supabase
        .from('orders')
        .insert([
            { product_name, price }
        ]).select();
})


const $orderDiv = document.querySelector('#orders-div');
async function ordersSelect() {
    const res = await supabase.from('orders').select();

    let rows = '';
    for (let i = 0; i < res.data.length; i++) {
        rows += `
        <tr>
            <td>${res.data[i].id}</td>
            <td>${res.data[i].user_id}</td>
            <td>${res.data[i].product_name}</td>
            <td>${res.data[i].price}</td>
            <td>${res.data[i].created_at}</td>
        </tr>
        `;
    }

    let orders = `
    <div>
        <table>
            <tr>
                <th>id</th>
                <th>userid</th>
                <th>상품명</th>
                <th>가격</th>
                <th>주문날짜</th>
            </tr>
            ${rows}
        </table>
    </div>
    `;

    $orderDiv.innerHTML = orders;
    $orderDiv.classList.add('show');
}