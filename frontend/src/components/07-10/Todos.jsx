import React, { memo } from 'react'

const Todos = ({ todos, addTodo }) => {
    alert("Alert inside from todos component.")
    return (
        <div>
            <h1>Todos</h1>
            <button onClick={addTodo}>Add todo</button>
            {todos.map((todo) => (
                <h1>{todo}</h1>
            ))}
        </div>
    )
}

export default memo(Todos);