import React from 'react'
import useCounter from './useCounter';

const CustomHook = () => {
    const [counter, Increment, Decrement, Reset] = useCounter();

    return (
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default CustomHook