import React, { useMemo, useState } from 'react'

function slowFunction(num){
    console.log("Running slow function...")
    let result = 0
for(let i = 0; i<1e8; i++){
    result += num
}
return result
}

const UseMemoDemo = () => {
    const [count, setCount] = useState(1)
    const [dark, setDark] = useState(false)

    const calculatedValue = useMemo(()=>{
        return slowFunction(count)
    },[count])

    const themeStyle = {
        backgroundColor: dark ? "#333": "#eee",
        color: dark ? "#fff" : "#000",
        padding: "20px",
        marginTop: "10px"
    }
  return (
    <div style={themeStyle}>
        <h2>useMemo Demo</h2>
        <h3>Count: {count}</h3>
        <button onClick={()=>setCount(count+1)}>Increse Count</button>

        <h3>Result: {calculatedValue}</h3>
        <button onClick={()=> setDark(!dark)}>Toggle Theme</button>
    </div>
  )
}

export default UseMemoDemo