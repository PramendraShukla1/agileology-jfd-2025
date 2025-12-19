import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // count -> variable
    // setCount -> function 
    // useState(0) -> initial value

    function handleSubmit(e){
        e.preventDefault()
        console.log("Email: ", email)
        console.log("Password: ", password)
    }
  return (
    <div>
        <h2>Count: {count}</h2>

        <button onClick={()=>setCount(count + 1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>


        <button onClick={()=>setShow(!show)}>Toggle</button>

        {
            show && 
            <h3>Hello Everyone {show}</h3>
        }

        <form>
            <input type="email" placeholder='Email' 
            value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' value={password} 
            onChange={(e)=>setPassword(e.target.value)}/>
            {/* <button onClick={()=>handleSubmit()}>Submit Form</button> */}
            {email}
            {password}
        </form>
    </div>
  )
}

export default UseState