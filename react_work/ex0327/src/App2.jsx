import React, { useState } from 'react'
import DD from './components/DD'

function App2() {

    const [count, setCount] = useState(0);
    console.log("App2 랜더링됨")

    const style = {
        border: "1px solid rgb(150,130,200)",
        borderRadus: '20px',
        padding: "30px",
        color: "rgb(30,30,30)",
        backgroundColor: "rgba(100,200,100,0.5)"
    }
    return (
        <>
        <button onClick={() => { setCount(count + 1); }}>랜더링 이루어짐</button>
            <div>
                <h1>App2</h1>
            </div>
            <DD style={style}>
                <h1>자식태그</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perspiciatis adipisci vero repellat porro officiis obcaecati deleniti optio, nobis sint natus labore modi corrupti sequi accusamus quaerat quos, odit recusandae?</p>
            </DD>
            <DD style={style}>
                <h1>자식태그</h1>
                <p>repellat porro officiis obcaecati deleniti optio, nobis sint natus labore modi corrupti sequi accusamus quaerat quos, odit recusandae?</p>
            </DD>
            <DD style={style}>
                <h1>자식태그</h1>
                <p>Cum perspiciatis adipisci vero repellat porro officiis obcaecati deleniti optio, nobis sint natus labore modi corrupti sequi accusamus quaerat quos, odit recusandae?</p>
            </DD>
        </>
    )
}

export default App2