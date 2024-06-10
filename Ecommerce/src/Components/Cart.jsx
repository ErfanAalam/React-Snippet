import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { context } from '../App';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const {  HandleRemoveFromCart } = useContext(context)
    const [cartProduct, setCartProduct] = useState([])
    const [cartCount, setCartCount] = useState(1)
    let name = localStorage.getItem("name")


    const navigate = useNavigate()


    const shippingprice = 5
    const tax = 18

    useEffect(() => {
        setCartProduct(JSON.parse(localStorage.getItem(name)));
    }, [])



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
                                <button onClick={() => { setCartCount(cartCount == 1 ? 1 : cartCount - 1) }}  >-</button>
                                <p>{cartCount}</p>
                                <button onClick={() => { setCartCount(cartCount + 1)}} >+</button>
                            </div>
                            <button className='remove' onClick={(e) => { HandleRemoveFromCart(e, product.id), navigate('/cart') }}>Remove from cart</button>
                        </div>
                        <div className='amountdetail'>
                            <h3>Product Price : $ {product.price * cartCount} </h3>
                            <h3>Shipping : $ {shippingprice} </h3>
                            <h3>Tax : $ {tax}</h3>
                            <hr />
                            <h3>SubTotal : {product.price *cartCount + shippingprice + tax} </h3>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Cart
