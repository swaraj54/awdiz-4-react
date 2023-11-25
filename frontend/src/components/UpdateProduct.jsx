import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../helpers/AxiosConfig';
import toast from 'react-hot-toast';

const UpdateProduct = () => {
    const [productData, setProductData] = useState({});
    console.log(productData, "productData")
    const { id } = useParams();
    const router = useNavigate();

    async function getProductData() {
        try {
            const response = await api.get(`/product/get-single-product?id=${id}`)
            if (response.data.success) {
                setProductData(response.data.product)
            }
        } catch (error) {
            console.log(error)
        }
    }

    function handleChange(event) {
        setProductData({ ...productData, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await api.post('/product/update-product', { productData })
            if (response.data.success) {
                toast.success(response.data.message)
                router('/your-products')
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }

    }

    useEffect(() => {
        if (id) {
            getProductData()
        }
    }, [id])

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input type='text' onChange={handleChange} value={productData.name} name='name' /><br />
                <label>Price</label><br />
                <input text='number' onChange={handleChange} value={productData.price} name='price' /><br />
                <label>Image</label><br />
                <input text='url' onChange={handleChange} value={productData.image} name='image' /><br />
                <label>Category</label><br />
                <input type='text' onChange={handleChange} value={productData.category} name='category' /><br />
                <input type='submit' value="Updates ?" />
            </form>
        </div>
    )
}

export default UpdateProduct