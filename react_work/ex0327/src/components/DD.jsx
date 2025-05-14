import React, { useState } from 'react'

function DD({ style, children }) {


    //setChildStyle 호출하면 화면 랜더링이 자동으로 됨.
    const [childStyle, setChildStyle] = useState(style);

    console.log("DD랜더링 됨")

    return (
        <>
            <button onClick={() => setChildStyle({ ...style, color: "blue" })}>파란색으로</button>
            <button onClick={() => setChildStyle({ ...style, color: "red" })}>빨강색으로</button>
            <button onClick={() => setChildStyle({ ...style, color: "white" })}>하얀색으로</button>
            <div style={childStyle}>
                <div>DD</div>
                {children}
            </div>
        </>
    )
}

export default DD