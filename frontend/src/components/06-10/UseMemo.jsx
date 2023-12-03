import React, {  useMemo, useState } from 'react'

const UseMemo = () => {
    const [counter, setCounter] = useState(0);
    const [todos, setTodos] = useState([]);

    function addTodo() {
        setTodos([...todos, "New todo"])
    }

    // const lengthyCalculation = calculate(counter);
    
    // useEffect(()=>{
        
    // },[])


    const lengthyCalculation = useMemo(() => calculate(counter), [counter]);



    return (
        <div>
            <h1>Lengthy Calculation - {lengthyCalculation}</h1>
            <h1>Counter - {counter}</h1>
            <button onClick={() => setCounter((value) => value + 1)}>+</button>
            <button onClick={addTodo}>Add todo</button>
            {todos.map((todo) => (
                <div>{todo}</div>
            ))}
        </div>
    )
}

const calculate = (counter) => {
    console.log("Calculating...")
    for (let i = 0; i < 1000000000; i++) {
        counter += 1
    }
    return counter;
}

export default UseMemo