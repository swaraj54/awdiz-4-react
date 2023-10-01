import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProductNew = () => {
    const [productData, setProductData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function getSingleProductData() {
            try {
                const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
                if (data) {
                    setProductData(data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        if (id) {
            getSingleProductData();
        }
    }, [id])

    console.log(productData, "productData")

    return (
        <div>
            {productData?.id ?
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ width: "40%", border: "5px solid black" }}>
                        <img style={{ width: "60%", height: "85%" }} src={productData.image} />
                    </div>
                    <div style={{ width: "40%", border: "5px solid black" }}>
                        <h1>{productData.title}</h1>
                        <h4>Category : {productData.category}</h4>
                        <h4>Description : {productData.description}</h4>
                        <h4>Price : {productData.price}$</h4>
                        <h4>Rating : {productData.rating.rate}</h4>
                        <h4>Number of ratings : {productData.rating.count}</h4>
                    </div>
                </div>
                :
                <div>Loading..</div>
            }
        </div>
    )
}

export default SingleProductNew