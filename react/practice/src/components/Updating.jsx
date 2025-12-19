import React, { useEffect, useState}  from 'react'

const Updating = () => {
    const [count, setCount] = useState(10)

    useEffect(()=>{
        console.log("Component Updated: count = ", count)
    },[count])
  return (
    <>
    <h2>Count: {count}</h2>
    <button onClick={()=>setCount(count + 1)}>Increment Count</button>
    </>
  )
}

export default Updating