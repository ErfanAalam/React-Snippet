import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

const ProductDetails = () => {
    let { id } = useParams()

    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/" + id)
            .then((response) => response.json())
            .then(result => {
                console.log(result);
                setProduct(result)
            })
    }, [])


    return (
        <main>
            <div className='singleProduct'>
                <div className="left">
                    <img src={products.image} alt="" />
                </div>
                <div className="right">
                    <h2>{products.title}</h2>
                    <p>{products.price}</p>
                    <p>{products.description}</p>
                    <a href="">Add To Cart</a>
                </div>


            </div>
        </main>
    )

}

export default ProductDetails
