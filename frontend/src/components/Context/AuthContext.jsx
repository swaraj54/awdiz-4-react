import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload }
        case "LOGOUT":
            return { ...state, user: null }
        default:
            return state;
    }
}

const ParentAuthContext = ({ children }) => {

    const initialState = { user: null }

    const [state, dispatch] = useReducer(reducer, initialState)


    const Login = (data) => {
        dispatch({ type: "LOGIN", payload: data })
    }

    const Logout = () => {
        dispatch({ type: "LOGOUT" })
    }


    return (
        <AuthContext.Provider value={{ state, Login, Logout }}>
            {children}
        </AuthContext.Provider>
    )
}


export default ParentAuthContext;