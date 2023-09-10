import { useState } from "react";

const Counter = () => {

    const [counter, setCounter] = useState(0);
    // console.log(counter, "counter")

    const [liked, setLiked] = useState(false);

    console.log(liked, "liked")


    function multiTask() {
        setLiked((flag) => !flag)
        setCounter((prevValue) => prevValue + 1)
    }

    return (
        <div>
            <h1>Counter - {counter}</h1>
            <button onClick={() => setCounter((prevValue) => prevValue + 1)}>+ counter</button>
            <button onClick={() => setCounter((rahul) => rahul - 1)} >- Counter</button>
            <button onClick={() => setCounter((prevValue) => prevValue + 10)}>+10 counter</button>
            <button onClick={multiTask}>Like ?</button>
        </div>
    )
}


export default Counter;