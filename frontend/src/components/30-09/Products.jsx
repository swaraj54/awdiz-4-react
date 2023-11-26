import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import api from '../../helpers/AxiosConfig';

const Products = () => {
    const [products, setProducts] = useState([]);
    console.log(products)
    const router = useNavigate();
    useEffect(() => {
        // toast.success("Page rendered on browser..")
        async function getProducts() {
            try {
                // const { data } = await axios.get('https://fakestoreapi.com/products');
                const { data } = await api.get('/product/get-all-product');
                // console.log(data, "data here")
                if (data.success) {
                    setProducts(data.products)
                }
            } catch (error) {
                toast.error(error.data.message)
            }
        }
        getProducts()
    }, [])
    return (
        <div>{products?.length ? <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
            {products.map((pro) => (
                <div onClick={() => router(`/single-product/${pro._id}`)} style={{ border: "1px solid black", width: "23%", height: "550px", marginBottom: "10px" }}>
                    <img style={{ width: "80%", height: "300px" }} src={pro.image} />
                    <h1>Name :{pro.name}</h1>
                    <h3>Price : {pro.price} $</h3>
                    <h2>Category : {pro.category}</h2>
                    <button>View</button>
                </div>
            ))}
        </div> : <div>Loading...</div>}</div>
    )
}

export default Products