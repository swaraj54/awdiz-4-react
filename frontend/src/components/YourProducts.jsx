import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './Context/AuthContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import api from '../helpers/AxiosConfig'

const YourProducts = () => {
    const router = useNavigate();
    const { state } = useContext(AuthContext)
    const [yourProducts, setYourProducts] = useState([]);

    console.log(yourProducts, "yourProducts here")

    async function getYourProduct() {
        try {
            const response = await api.post('/product/your-products', { id: state?.user?.id })
            if (response.data.success) {
                setYourProducts(response.data.products)
            }
        } catch (error) {
            console.log(error, "error here")
            toast.error(error?.response.data.message)
        }
    }

    useEffect(() => {
        if (state?.user && state?.user?.name === undefined) {
            router('/login')
            toast.error("Please login to access this page.")
        }

        if (state?.user && state?.user?.name !== undefined) {
            console.log("state?.user?.id", state)
            getYourProduct()
        }
    }, [state])

    return (
        <div>YourProducts</div>
    )
}

export default YourProducts