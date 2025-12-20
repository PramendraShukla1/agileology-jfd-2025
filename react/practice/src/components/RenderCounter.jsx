import React, { useEffect, useRef, useState } from 'react'

const RenderCounter = () => {
    const [count, setCount] = useState(0)
    const renderCount = useRef(0)

    useEffect(()=>{
        renderCount.current += 1
    })
  return (
    <div>
        <h1>useRef - Render Counter</h1>
        <h2>State Count: {count}</h2>
        <h3>Render Count (ref): {renderCount.current}</h3>

        <button onClick={()=>setCount(count+1)}>
            Increment Count
        </button>
    </div>
  )
}

export default RenderCounter