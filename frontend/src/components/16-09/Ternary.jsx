import React from 'react'

const Ternary = ({ loggedIn, setIsLoggedIn }) => {
    return (
        <div>
            <h1>Ternary Operator</h1>
            {loggedIn
                ?
                <h1 onClick={() => setIsLoggedIn((prevValue) => !prevValue)}>Welcome.</h1>
                :
                <button onClick={() => setIsLoggedIn((prevValue) => !prevValue)}>Please Login</button>
            }
            {loggedIn && <h1>Logged In</h1>}
        </div>
    )
}

export default Ternary