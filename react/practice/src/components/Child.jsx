import React from 'react'

const Child = React.memo(function Child({onIncrement}){
    console.log("Child Rendered")

    return (
        <div>
            <button onClick={onIncrement}>Increment From Child</button>
        </div>
    )
}) 

export default Child