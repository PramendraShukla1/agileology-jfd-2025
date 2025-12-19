import React, { useEffect, useState } from 'react'

const UseEffectDemo = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(true)

    useEffect(()=>{
console.log("Component Rendered!")

const interval = setInterval(()=>{
    setTime(new Date().toLocaleTimeString())
},1000)

return () =>{
    console.log("Interval Cleared")
    clearInterval(interval)
}

    },[])

    useEffect(()=>{
        document.title = `Count: ${count}`
        console.log("Count Updated" + count)
    }, [count])

    if(!show) return <h3>Component Unmounted</h3>
  return (
    <div>
        <h2>Live Clock</h2>
        <h1>{time}</h1>

        <h3>Count: {count}</h3>
        <button onClick={()=>setCount(count  + 1)}>Increment</button>

        <br /> <br />
        <button onClick={()=>setShow(false)}>Unmount Component</button>
    </div>
  )
}

export default UseEffectDemo