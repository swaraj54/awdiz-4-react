import React from 'react'
import { useNavigate } from 'react-router-dom'

const Params = () => {
    const router = useNavigate();
    return (
        <div>
            <button onClick={()=> router("/singleProduct/8888888") }>Click to go single product</button>
        </div>
    )
}

export default Params