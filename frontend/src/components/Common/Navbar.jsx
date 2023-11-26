import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const router = useNavigate()
    const { state, Logout } = useContext(AuthContext)

    return (
        <div style={{ display: "flex", justifyContent: 'space-around', height: "40px", border: '2px solid black', fontSize: "20px" }}>
            <div onClick={() => router('/')} style={{ width: '20%', border: "1px solid red" }}>Home</div>
            <div style={{ width: '50%', border: "1px solid red", display: "flex", justifyContent: 'space-around' }}>
                <div onClick={() => router('/products')}>Products</div>
                {state?.user?.id &&
                    <div style={{ display: "flex", justifyContent: 'space-around' }}>
                        <div onClick={() => router('/add-product')}>Add Product </div>
                        <div onClick={() => router('/your-products')}>Your Products</div>
                    </div>
                }
            </div>
            <div style={{ width: '20%', border: "1px solid red", display: "flex", justifyContent: 'space-around' }}>
                {state?.user?.id ? <>
                    <div onClick={() => router('/profile')}>Profile</div>
                    <div onClick={() => router('/cart')}>Cart</div>
                    <div onClick={Logout}>Logout</div>
                </> : <div onClick={() => router('/login')}>Login</div>}
            </div>
        </div >
    )
}

export default Navbar