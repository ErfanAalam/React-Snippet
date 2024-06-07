import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { context } from '../App';
import { Link } from 'react-router-dom';


const ProductDetails = () => {
    const {isAddToCart,handleAddtoCart,HandleRemoveFromCart} = useContext(context)
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
                <h3>
                    {isAddToCart(products.id) ?
                        <Link
                            className='cart'
                            onClick={(e) => HandleRemoveFromCart(e, products.id)}
                        > Remove From the cart
                        </Link>
                        :
                        
                        <Link
                        className='cart'
                        onClick={(e) => handleAddtoCart(e, products)}
                        > Add to Cart
                        </Link>
                    }
                </h3>

                </div>
            </div>
        </main>
    )

}

export default ProductDetails
