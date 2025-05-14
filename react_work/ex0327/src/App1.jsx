import React, { useState } from 'react'
import CC from './components/CC'

function App1() {

    const [style, setStyle] = useState ({
        border: "1px solid rgb(150,130,200)",
        borderRadus: '20px',
        padding: "30px",
        color: "rgb(30,30,30)",
        backgroundColor: "rgba(100,200,100,0.5)"
    })
    return (
        <>
            <div>
                <h1>App1</h1>
                <button onClick={() => setStyle({...style, color: "blue"})}>파란색으로</button>
                <button onClick={() => setStyle({...style, color: "red"})}>빨강색으로</button>
                <button onClick={() => setStyle({...style, color: "white"})}>하얀색으로</button>
            </div>
            <CC style={style}>
                <h1>자식태그</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perspiciatis adipisci vero repellat porro officiis obcaecati deleniti optio, nobis sint natus labore modi corrupti sequi accusamus quaerat quos, odit recusandae?</p>
            </CC>
            <CC style={style}>
                <h1>자식태그</h1>
                <p>repellat porro officiis obcaecati deleniti optio, nobis sint natus labore modi corrupti sequi accusamus quaerat quos, odit recusandae?</p>
            </CC>
            <CC style={style}>
                <h1>자식태그</h1>
                <p>Cum perspiciatis adipisci vero repellat porro officiis obcaecati deleniti optio, nobis sint natus labore modi corrupti sequi accusamus quaerat quos, odit recusandae?</p>
            </CC>
        </>
    )
}

export default App1