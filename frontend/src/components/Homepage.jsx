import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./Context/GlobalContext";

function Homepage() {

    const { state, dispatch } = useContext(MyContext);

    const router = useNavigate();

    function routerToLogin() {
        router("/login")
    }

    return (
        <div>
            <h1>Homepage for Awdiz</h1>
            <h1>Counter : {state.counter}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            <button onClick={routerToLogin}>Go to Login</button>
            <button onClick={() => router('/register')}>Go to Register</button>
            <button onClick={() => toast.error("Clickedd")}>Click for toast error</button>
            <button onClick={() => toast.success("Clickedd")}>Click for toast success</button>
        </div>
    )
}

export default Homepage;