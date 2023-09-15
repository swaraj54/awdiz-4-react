import { useEffect, useState } from "react";

const Effect3 = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        alert("Rendered..? on initial render and when counter changes")
    }, [counter]);//dependency

    return (
        <div>
            <h1>Counter - {counter}</h1>
            <button onClick={() => setCounter((prevValue) => prevValue + 1)}>+</button>
        </div>
    )
}


export default Effect3;