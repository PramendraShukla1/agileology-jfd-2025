import React from 'react'
import useCounter from '../hooks/useCounter'

const CounterB = () => {
    const {count, increment, decrement, reset} = useCounter(0)
  return (
    <div>
        <h3>Counter B</h3>
        <p>{count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterB