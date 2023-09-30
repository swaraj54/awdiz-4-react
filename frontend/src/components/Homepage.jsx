import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Homepage() {

    const router = useNavigate();

    function routerToLogin() {
        router("/login")
    }

    return (
        <div>
            <h1>Homepage for Awdiz</h1>
            <button onClick={routerToLogin}>Go to Login</button>
            <button onClick={() => router('/register')}>Go to Register</button>
            <button onClick={() => toast.error("Clickedd")}>Click for toast error</button>
            <button onClick={() => toast.success("Clickedd")}>Click for toast success</button>
        </div>
    )
}

export default Homepage;