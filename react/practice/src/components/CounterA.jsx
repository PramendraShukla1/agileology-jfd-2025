import React from 'react'
import useCounter from '../hooks/useCounter'

const CounterA = () => {
    const {count, increment, decrement, reset} = useCounter(0)
  return (
    <div>
        <h3>Counter A</h3>
        <p>{count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterA