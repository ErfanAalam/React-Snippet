import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { context } from '../App';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const {isAddToCart,handleAddtoCart,HandleRemoveFromCart} = useContext(context)
    let name = localStorage.getItem("name")

    const navigate = useNavigate()
    const [cartProduct, setCartProduct] = useState([])

    useEffect(() => {
        setCartProduct(JSON.parse(localStorage.getItem(name)));
    }, [])

    console.log(cartProduct);

    const truncate = (title) => {
        if (title.length > 120) {
            title = title.slice(0, 120) + "..."
        }
        return title
    }


    return (


        <div className='cartdiv'>
            {
                cartProduct && cartProduct.map((product, index) => {
                    return <div className='cartproduct' key={index} >
                        <img src={product.image} alt="" width={"300px"} height={"400px"} />
                        <div className="info">
                        <h1>{product.title}</h1>
                        <p className="cartdesc">{truncate(product.description)}</p>
                        <h3 className="price"> $ {product.price}</h3>
                        <h3 className="rating">{product.rating.rate}</h3>
                        <div className="increment">
                            <button >+</button>
                            <p>1</p>
                            <button >-</button>
                        </div>
                        <button className='remove'  onClick={(e) => {HandleRemoveFromCart(e, product.id),navigate('/cart')}}>Remove from cart</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Cart
