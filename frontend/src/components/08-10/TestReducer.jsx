import React, { useReducer } from 'react';

const initialState = { count: 0, userName: "Swaraj" };

const reducer = (state, action) => {
    console.log(state, action, "state and action is here")
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 }
        case "DECREMENT":
            return { ...state, count: state.count - 1 }
        case "RESET":
            return { ...state, count: 0 }
        default:
            return state;
    }
}

const TestReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function Increment() {
        dispatch({ type: "INCREMENT" })
    }

    function Decrement() {
        dispatch({ type: "DECREMENT" })
    }

    function Reset() {
        dispatch({ type: "RESET" })
    }

    return (
        <div>
            <h1>Counter : {state.count}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default TestReducer