import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './Context/AuthContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartProducts, setCartProducts } = useState([]);

    const { state } = useContext(AuthContext);
    const router = useNavigate();

    async function getYourCartProducts() {
        alert("Inside function") // assignment - complete this bloack
    }

    useEffect(() => {
        if (state?.user && state?.user?.id === undefined) {
            toast.error("Please login to access your cart products, redirecting yout login page in 3 sec.")
            setTimeout(() => {
                router("/login")
            }, 3000)
        } else {
            if (state?.user?.id) {
                getYourCartProducts()
            }

        }
    }, [state])


    return (
        <div>Cart</div>
    )
}

export default Cart