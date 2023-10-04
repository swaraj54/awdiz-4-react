import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const AddProduct = () => {
    const [productData, setProductData] = useState({ name: "", price: "", image: "" })

    // console.log(productData, "productData")

    const handleChange = (event) => {
        // console.log(event.target.value)
        setProductData({ ...productData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (productData.name && productData.price && productData.image && productData.price > 0) {
            try {
                const { data } = await axios.post("https://fakestoreapi.com/products", { title: productData.name, price: productData.price, image: productData.image })
                console.log(data, "response from post request")
                toast.success("Porduct added successfully, now you can add another product.")
                setProductData({ name: "", price: "", image: "" })
            } catch (error) {
                console.log(error)
            }
        } else {
            toast.error("All fields are mandtory and price must be greater than 0.")
        }

    }

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <label>Porduct Name</label><br />
                <input type='text' name="name" onChange={handleChange} value={productData.name} /><br />
                <label>Porduct Price</label><br />
                <input type='number' name='price' onChange={handleChange} value={productData.price} /><br />
                <label>Porduct Image</label><br />
                <input type='url' name='image' onChange={handleChange} value={productData.image} /><br />
                <input type='submit' />
            </form>
        </div >
    )
}

export default AddProduct