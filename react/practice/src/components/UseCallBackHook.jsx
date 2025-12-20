import React, { useCallback, useState } from 'react'
import Child from './Child'

const UseCallBackHook = () => {
    const [count, setCount] = useState(0)
    const [dark, setDark] = useState(false)

// const increment = () => setCount((c)=> c +1)

    const increment = useCallback(()=>{
        setCount((c) => c + 1)
    },[])

    const themeStyle = {
        backgroundColor: dark ? "#333": "#eee",
        color: dark ? "#fff" : "#000",
        padding: "20px",
        marginTop: "10px"
    }
  return (
    <div style={themeStyle}>
        <h2>useCallback Hook Demo</h2>
        <h3>Count: {count}</h3>

        <button onClick={()=>setDark(!dark)}>Toggle Theme</button>
        <Child onIncrement={increment}/>
    </div>
  )
}

export default UseCallBackHook