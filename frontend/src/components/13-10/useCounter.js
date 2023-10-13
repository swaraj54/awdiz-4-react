import { useState } from "react";

function useCouter(initialState = 0) {
    const [counter, setCounter] = useState(initialState)

    function Increment() {
        setCounter((value) => value + 1)
    }

    function Decrement() {
        setCounter((value) => value - 1)
    }

    function Reset() {
        setCounter(0)
    }

    return [counter, Increment, Decrement, Reset]
}
export default useCouter;