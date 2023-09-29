import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const router = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            router('/')
        }, 5000);
    }, [])
    return (
        <div>
            <h1>Page Not Found, redirecting you to home page in 5 sec..</h1>
            <button onClick={() => router('/')}>Go to home</button>
        </div>
    )
}

export default PageNotFound