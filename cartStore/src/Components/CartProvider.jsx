import React, { createContext, useState, useEffect } from 'react'
import App from '../App';

export const cartContext = createContext()

const CartProvider = ({ children }) => {


    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    const [cartLength, setCartLength] = useState(0)

    const url = "https://www.course-api.com/react-useReducer-cart-project";

    useEffect(() => {
        fetch(url).then(async (response) => {
            let data = await response.json();
            setProducts(data);
            
        });
    }, []);

    useEffect(()=>{
        let sum = 0
        products.forEach((product)=>{
            sum += product.amount
        })
        setCartLength(sum)
    },[products])


    const handleRemove = (id) => {
        let finalProduct = products.filter((product) => product.id !== id);
        setProducts(finalProduct);
    };

    const handleDecrement = (id) => {
        products.map((product=>{
            
        }))
    }

    const handleIncrement = (id) => {

    }

    return (
        <cartContext.Provider value={{ products, handleRemove, totalPrice, handleDecrement, handleIncrement, cartLength }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider
