import React from 'react'
import { useEffect, useState } from 'react'

const Counterse = () => {
    const [counter, setCounter] = useState(0);
    // c
    function UpdateCounter() {
        setCounter((prevValue) => prevValue + 1);
    }
    useEffect(() => {
        if (counter === 10) {
            alert("HII")
        }
    }, [counter])
    return (
        <div>
            <h1>Counter - {counter}</h1>
            <button onClick={UpdateCounter}>+</button>
        </div>
    )
}

export default Counterse