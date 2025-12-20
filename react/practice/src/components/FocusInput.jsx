import React, { useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null)

    const handleFocus = () => {
inputRef.current.focus()
    }
  return (
    <div>
        <h2>useRef - Focused Input</h2>

        <input type="text" ref={inputRef} placeholder='Full Name' />
        <button onClick={handleFocus}>Focus Button</button>
    </div>
  )
}

export default FocusInput