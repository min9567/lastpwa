import React from 'react'

function BB({addCount, subCount}) {
    return (
        <>
            <div>BB</div>
            <h1>자식컴포넌트에서도 변경 가능</h1>
            <button onClick={addCount}>push</button>
            <button onClick={subCount}>sub push</button>
        </>
    )
}

export default BB