import React, { useReducer } from 'react'

// initial state
const initialState = {count: 0}

// reducer Function

function reducer(state, action){
    switch(action.type){
        case "increment":
            return {count: state.count + 1}
        
        case "decrement":
            return {count: state.count - 1}
        
        case "reset":
            return initialState
        
        default:
            return state
    }
}

const UseReducerHookDemo = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div style={{textAlign:"center", marginTop: "30px"}}>
        <h2>useReducer Demo</h2>
        <h1>Count: {state.count}</h1>

        <button onClick={()=> dispatch({type: "increment"})}>
            +
        </button>

         <button onClick={()=> dispatch({type: "decrement"})}>
            -
        </button>

         <button onClick={()=> dispatch({type: "reset"})}>
            Reset
        </button>
    </div>
  )
}

export default UseReducerHookDemo