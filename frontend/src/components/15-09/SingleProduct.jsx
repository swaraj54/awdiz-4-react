import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {

    const { id, name } = useParams();

    return (
        <div>SingleProduct - {id}</div>
    )
}

export default SingleProduct