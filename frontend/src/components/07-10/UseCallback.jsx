import React, { useCallback, useState } from 'react'
import Todos from './Todos'

const UseCallback = () => {
    const [counter, setCounter] = useState(0)
    const [todos, setTodos] = useState([]);

    function addCounter() {
        setCounter((value) => value + 1)
    }

    const addTodo = useCallback(() => {
        setTodos([...todos, "New todo"])
    }, [todos])

    return (
        <div>
            <h1>Counter - {counter}</h1>
            <button onClick={addCounter}>+</button>
            <Todos todos={todos} addTodo={addTodo} />
        </div>
    )
}

export default UseCallback