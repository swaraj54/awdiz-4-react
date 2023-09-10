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
        </div>
    )
}

export default Homepage;